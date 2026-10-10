import type { Auction, AssetCategory } from "@/types/auction"

const gallery = {
  jewelry: [
    {
      src: "/assets/landing/products/1.jpg",
      alt: "Trang sức cổ điển được trưng bày trên nền trung tính",
    },
    {
      src: "/assets/landing/products/4.jpg",
      alt: "Chi tiết chế tác của tài sản trang sức",
    },
    {
      src: "/assets/landing/products/5.jpg",
      alt: "Góc nhìn bổ sung của tài sản trang sức",
    },
  ],
  art: [
    {
      src: "/assets/landing/products/4.jpg",
      alt: "Tác phẩm nghệ thuật trong không gian trưng bày",
    },
    {
      src: "/assets/landing/products/5.jpg",
      alt: "Chi tiết bề mặt của tác phẩm nghệ thuật",
    },
    {
      src: "/assets/landing/products/1.jpg",
      alt: "Góc nhìn tổng thể của tác phẩm nghệ thuật",
    },
  ],
  "real-estate": [
    {
      src: "/assets/pages/about.webp",
      alt: "Không gian kiến trúc đại diện cho tài sản bất động sản",
    },
    {
      src: "/assets/landing/hero-poster.jpg",
      alt: "Góc nhìn kiến trúc và cảnh quan của tài sản",
    },
    {
      src: "/assets/pages/contact.webp",
      alt: "Chi tiết không gian nội thất của tài sản",
    },
  ],
  vehicle: [
    {
      src: "/assets/landing/hero-poster.jpg",
      alt: "Phương tiện được trưng bày trong không gian kiểm định",
    },
    {
      src: "/assets/pages/about.webp",
      alt: "Góc nhìn thân xe và tình trạng ngoại thất",
    },
    {
      src: "/assets/landing/products/5.jpg",
      alt: "Chi tiết tài sản phương tiện",
    },
  ],
} satisfies Record<AssetCategory, Auction["images"]>

const categoryLabel: Record<AssetCategory, string> = {
  jewelry: "Trang sức & Đá quý",
  art: "Nghệ thuật & Đồ cổ",
  "real-estate": "Bất động sản",
  vehicle: "Phương tiện vận tải",
}

type Seed = Pick<
  Auction,
  | "id"
  | "slug"
  | "title"
  | "category"
  | "status"
  | "startPrice"
  | "currentPrice"
  | "bidCount"
  | "verified"
>

const seeds: Seed[] = [
  {
    id: "va-001",
    slug: "nhan-kim-cuong-art-deco",
    title: "Nhẫn kim cương Art Deco 3,2 carat",
    category: "jewelry",
    status: "live",
    startPrice: 680_000_000,
    currentPrice: 920_000_000,
    bidCount: 18,
    verified: true,
  },
  {
    id: "va-002",
    slug: "binh-gom-men-lam",
    title: "Bình gốm men lam triều Nguyễn",
    category: "art",
    status: "registration-open",
    startPrice: 420_000_000,
    bidCount: 0,
    verified: true,
  },
  {
    id: "va-003",
    slug: "can-ho-thao-dien",
    title: "Căn hộ ven sông tại Thảo Điền",
    category: "real-estate",
    status: "upcoming",
    startPrice: 8_700_000_000,
    bidCount: 0,
    verified: true,
  },
  {
    id: "va-004",
    slug: "mercedes-benz-s450",
    title: "Mercedes-Benz S450 Luxury sản xuất 2022",
    category: "vehicle",
    status: "live",
    startPrice: 3_600_000_000,
    currentPrice: 4_150_000_000,
    bidCount: 11,
    verified: true,
  },
  {
    id: "va-005",
    slug: "dong-ho-patek-philippe",
    title: "Đồng hồ Patek Philippe Calatrava",
    category: "jewelry",
    status: "registration-open",
    startPrice: 1_250_000_000,
    bidCount: 0,
    verified: true,
  },
  {
    id: "va-006",
    slug: "tranh-son-mai-pho-co",
    title: "Tranh sơn mài Phố cổ đầu thế kỷ XX",
    category: "art",
    status: "ended",
    startPrice: 310_000_000,
    currentPrice: 540_000_000,
    bidCount: 22,
    verified: true,
  },
  {
    id: "va-007",
    slug: "nha-pho-quan-3",
    title: "Nhà phố thương mại trung tâm Quận 3",
    category: "real-estate",
    status: "registration-open",
    startPrice: 23_500_000_000,
    bidCount: 0,
    verified: false,
  },
  {
    id: "va-008",
    slug: "porsche-cayenne",
    title: "Porsche Cayenne phiên bản 2021",
    category: "vehicle",
    status: "upcoming",
    startPrice: 4_800_000_000,
    bidCount: 0,
    verified: true,
  },
  {
    id: "va-009",
    slug: "vong-ngoc-cam-thach",
    title: "Vòng ngọc cẩm thạch thiên nhiên",
    category: "jewelry",
    status: "ended",
    startPrice: 190_000_000,
    currentPrice: 260_000_000,
    bidCount: 9,
    verified: true,
  },
  {
    id: "va-010",
    slug: "tuong-phat-dong",
    title: "Tượng Phật đồng thế kỷ XVIII",
    category: "art",
    status: "live",
    startPrice: 210_000_000,
    currentPrice: 275_000_000,
    bidCount: 7,
    verified: true,
  },
  {
    id: "va-011",
    slug: "dat-thu-thiem",
    title: "Quyền sử dụng đất tại Khu đô thị Thủ Thiêm",
    category: "real-estate",
    status: "cancelled",
    startPrice: 12_500_000_000,
    bidCount: 0,
    verified: true,
  },
  {
    id: "va-012",
    slug: "lo-xe-khach-universe",
    title: "Lô xe khách Universe Noble 47 chỗ",
    category: "vehicle",
    status: "ended",
    startPrice: 2_800_000_000,
    currentPrice: 3_020_000_000,
    bidCount: 14,
    verified: false,
  },
]

export const mockAuctions: Auction[] = seeds.map((seed, index) => ({
  ...seed,
  lotNumber: `VA-${String(index + 1).padStart(4, "0")}`,
  categoryLabel: categoryLabel[seed.category],
  bidStep:
    seed.startPrice >= 5_000_000_000
      ? 100_000_000
      : seed.startPrice >= 1_000_000_000
        ? 50_000_000
        : 10_000_000,
  depositAmount: Math.round(seed.startPrice * 0.1),
  registrationFee: 500_000,
  registrationOpenAt: "2026-10-01T08:00:00+07:00",
  registrationCloseAt: "2027-11-28T17:00:00+07:00",
  startsAt: "2027-12-01T09:00:00+07:00",
  endsAt: `2027-12-${String((index % 9) + 10).padStart(2, "0")}T17:00:00+07:00`,
  location: index % 2 === 0 ? "TP. Hồ Chí Minh" : "Hà Nội",
  organizer: "Công ty Đấu giá Hợp danh VietAuction",
  summary:
    "Tài sản được tuyển chọn và mô tả minh bạch theo hồ sơ cung cấp cho phiên đấu giá thử nghiệm.",
  description:
    "Hồ sơ tài sản trình bày tình trạng, đặc điểm và thông tin liên quan để người tham gia có cơ sở đánh giá trước khi đăng ký. Dữ liệu hiện tại là dữ liệu mô phỏng phục vụ hoàn thiện giao diện.",
  provenance: [
    "Hồ sơ sở hữu đã tiếp nhận",
    "Biên bản kiểm tra tình trạng",
    "Tài liệu mô tả phục vụ phiên đấu giá",
  ],
  attributes: [
    { label: "Mã lô", value: `VA-${String(index + 1).padStart(4, "0")}` },
    {
      label: "Tình trạng",
      value: seed.verified ? "Đã đối chiếu hồ sơ" : "Đang bổ sung hồ sơ",
    },
    { label: "Khu vực", value: index % 2 === 0 ? "TP. Hồ Chí Minh" : "Hà Nội" },
    { label: "Hình thức", value: "Đấu giá trực tuyến" },
  ],
  images: gallery[seed.category],
}))

export function getAuctionById(idOrSlug: string) {
  return mockAuctions.find(
    (auction) => auction.id === idOrSlug || auction.slug === idOrSlug
  )
}

export const featuredAuctions = mockAuctions.slice(0, 3)
