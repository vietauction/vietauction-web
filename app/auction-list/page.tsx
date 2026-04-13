import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const auctions = [
  {
    title: "Quyền sử dụng đất tại Khu đô thị mới Thủ Thiêm, TP. Thủ Đức",
    category: "Bất động sản",
    priceLabel: "Giá khởi điểm",
    price: "12.500.000.000 ₫",
    status: "Sắp đấu giá",
    statusType: "upcoming",
    time: "02 NGÀY : 14 : 22",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkghNRo3buEPkuuv4BpJ5gkVqU2yRJpTCrwtIVQRStKDPsHzzcc6ouQFgWJUfGw4XXaCo_wZhf5t5C0ERcj9pdfjCwJJ2rA3Se8I79rFrmf5kDoxxeACUUgKjcAKPOCkNExo7085k9l8CxJfu_fMk9dYq6tZg4cirdMsw0UAPOHZlZEyZBRQ5K9tgV9xUti5mj0O0entXYKZq9Hq9RzQx6ku0WdagNN4QLL95733cvv28dXf2-0ECgCW0busoB_XhUPlszQJQ5xTZq",
  },
  {
    title: "Xe o to Mercedes-Benz S450 Luxury san xuat nam 2022",
    category: "Phương tiện vận tải",
    priceLabel: "Giá hiện tại",
    price: "4.150.000.000 ₫",
    status: "Đang diễn ra",
    statusType: "live",
    time: "00 : 45 : 12",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8K_ma8UHY16jXlMTsdv38H1THnoHWDtxIl3bgT7y_VYrGLgbkNkKAVCSB3bwFl8EkQxBMPZ1LrNFmvE4iFJ2vII3qGvX_mj5SAqKlViErsRasuQbs1rRZ5wAIP0FDdPqEtO9-UQ34yLpj4hyI2PrQ5N3Zjc3KjGL3B-BNQRWxUnbJxDlbSGymp9AzWnehpFjYRUmJTldUIK8X_Us96p5-LYtMia7M0pMVPQY0NWVw-imQz7ZkboO7OL7h9ufKsKtUvxrfHG_LSPxj",
  },
  {
    title: "Bình gốm sứ cổ triều Lê - Thế kỷ XV với họa tiết hoa sen",
    category: "Nghệ thuật & Đồ cổ",
    priceLabel: "Giá khởi điểm",
    price: "850.000.000 ₫",
    status: "Sắp đấu giá",
    statusType: "upcoming",
    time: "05 NGÀY : 09 : 10",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvXrDqBVKgbJVEXfVHB9GrzPi16WkVp_kBfdHzKzkbmLNH9kKGMxIqpXa_8OOLl-b9P4ckPKBEojcA3GeSesAGy95qYmfjxwP3wHM5scWkifBk3RxmACPe7s-v3_wkJMGc23nzLiazoLRwuH2OCv9ivsnjyckDgsbxwOiqpYgFPa2zi-blyJr5FtWpah8DB10l2x1CnZA2ETDyLEVlmqkVVZQ4YZY7nav0xgr8_qnmqcAOw2lzonyUJ8ay5U7xkysbZahTY-CRzQtd",
  },
  {
    title: "Xe khách Universe Noble 47 chỗ đời 2019 - Thanh lý lô 05 xe",
    category: "Phương tiện vận tải",
    priceLabel: "Giá khởi điểm",
    price: "2.800.000.000 ₫",
    status: "Sắp đấu giá",
    statusType: "upcoming",
    time: "01 NGÀY : 18 : 30",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbTWqu-hkgHJPR5ZmC891H-jyjcoqVqmnubAgLv6tOu4nUvqthwqzEysZiIiXKsOwGYYrMKdtHTJLEtNFuyfKnMh4eHJ9123ryaowIEtd7MI8XyJ1ueeoMCUzX-e7rqnMWhCoZuCVnRQA9e-0YrM-4rz_IOniJa14uMDjJGQ_xymVoS2XxoA6sYiUmTYUfO4qSlHHVp3KB6JmIs1aqsz0cyXR3-qRyMoQHGAuq1q-VLvAQPItbLz3ATdaA8ARxmPX5qB-AhHOEXu95",
  },
  {
    title: "Căn hộ Penthouse tòa nhà Landmark 81 - Tầng cao view toàn cảnh",
    category: "Bất động sản",
    priceLabel: "Giá hiện tại",
    price: "34.000.000.000 ₫",
    status: "Đang diễn ra",
    statusType: "live",
    time: "00 : 12 : 55",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDArMQsI0oNm0fHKp_kQ3rAjC91UZF6fGAla8Ixs5FQICnoC_pXo8UEMP3-ZhBea1lgQVKY6NJIaWlbxyli8nGmT8o3QXqI2id_pUGrG48kCaIhGIq7BDFP6iqMVaDMbtY8W4qKyalGrga6Rp1m-024sNfgv2q6hgxQTT2ij_Om_k-dxplZaYg8Gs1F-tRj8WBQsyK7HgOlvdroR9CtOY8h4sWllaKMYmAY1ikbxCWz11GJXvkZlCzIBdBPmozTH2XmIT0u1kk9gnPC",
  },
  {
    title: "Lô thiết bị máy ảnh chuyên nghiệp - Tài sản thanh lý của Đài truyền hình",
    category: "Tài sản khác",
    priceLabel: "Giá cuối cùng",
    price: "450.000.000 ₫",
    status: "Đã kết thúc",
    statusType: "closed",
    time: "",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByD4Kv3OxDM3GioNhjMzYRAyquEukqT7qPV2gq-B3zfROEEeKO2HaHaMgLbPjsYA0Db2kOc3ZLvfn5-ga3YTTp4y0KCRx65EIC9haOz0KZi1qVDo1q2iCfII0_gnIsP4l8DCk7Yorv7l7pr5OzuRiwJ1ILqVysYoCstiZED8V2K9rjhDi6PEDUHD6vxecqvsBFxLwYZk2l4JSNZf-G03q0jz2dJ6YIHuGfOOmRp4Vy7ZsCj3GzAPJtgydgcuHqGa3auGA1QUyIGp19",
  },
] as const

export default function AuctionListPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto flex min-h-screen max-w-screen-2xl gap-10 px-6 pb-16 pt-10">
        <aside className="hidden w-72 shrink-0 py-4 lg:flex lg:flex-col">
          <div className="sticky top-24 space-y-6 border border-border bg-(--surface-container-low) p-5">
            <div className="border-b border-border pb-4">
              <h2 className="text-lg font-bold uppercase tracking-widest text-primary">Bộ lọc tìm kiếm</h2>
              <p className="mt-2 text-xs text-muted-foreground">Tinh chỉnh tiêu chí để tìm nhanh tài sản phù hợp.</p>
            </div>

            <section className="space-y-3 border border-border/70 bg-background p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Danh mục</h3>
              <div className="space-y-2">
                {["Bất động sản", "Phương tiện vận tải", "Đồ cổ & Nghệ thuật", "Tài sản khác"].map((item, idx) => (
                  <label
                    key={item}
                    className={`flex cursor-pointer items-center gap-3 rounded-sm px-2 py-1.5 transition-colors ${
                      idx === 1 ? "bg-(--surface-container-high)" : "hover:bg-(--surface-container-highest)"
                    }`}
                  >
                    <input
                      defaultChecked={idx === 1}
                      type="checkbox"
                      className="h-4 w-4 rounded-[2px] border-border bg-background text-secondary focus:ring-2 focus:ring-secondary/40"
                    />
                    <span className={`text-sm font-medium ${idx === 1 ? "text-primary" : "text-muted-foreground"}`}>{item}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="space-y-3 border border-border/70 bg-background p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Trạng thái</h3>
              <div className="space-y-2">
                {["Đang diễn ra", "Sắp đấu giá", "Đã kết thúc"].map((item, idx) => (
                  <label
                    key={item}
                    className={`flex cursor-pointer items-center gap-3 rounded-sm px-2 py-1.5 transition-colors ${
                      idx === 1 ? "bg-(--surface-container-high)" : "hover:bg-(--surface-container-highest)"
                    }`}
                  >
                    <input
                      defaultChecked={idx === 1}
                      name="status"
                      type="radio"
                      className="h-4 w-4 border-border bg-background text-secondary focus:ring-2 focus:ring-secondary/40"
                    />
                    <span className={`text-sm font-medium ${idx === 1 ? "text-primary" : "text-muted-foreground"}`}>{item}</span>
                  </label>
                ))}
              </div>
            </section>

            <section className="space-y-3 border border-border/70 bg-background p-4">
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">Mức giá dự kiến</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground/70">Từ (VND)</label>
                  <input
                    className="w-full border border-border bg-(--surface-container-highest) px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                    placeholder="0"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-muted-foreground/70">Đến (VND)</label>
                  <input
                    className="w-full border border-border bg-(--surface-container-highest) px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                    placeholder="5.000.000.000"
                    type="text"
                  />
                </div>
              </div>
            </section>

            <button className="w-full bg-primary py-3.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground">
              Áp dụng bộ lọc
            </button>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <header className="flex flex-col justify-between gap-6 pb-3 md:flex-row md:items-end">
            <div className="space-y-2">
              <h1 className="font-heading text-3xl font-black tracking-tight text-primary">Danh sách tài sản</h1>
              <p className="font-medium text-muted-foreground">Tìm thấy 245 tài sản đang được đấu giá</p>
            </div>
            <div className="flex items-center gap-4">
              <select className="cursor-pointer border-b-2 border-border bg-transparent px-2 py-2 text-sm font-bold focus:border-secondary focus:outline-none">
                <option>Kết thúc sớm nhất</option>
                <option>Giá từ thấp đến cao</option>
                <option>Giá từ cao đến thấp</option>
                <option>Mới nhất</option>
              </select>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {auctions.map((item) => (
              <article
                key={item.title}
                className={`group flex flex-col overflow-hidden bg-(--surface-container-low) transition-colors hover:bg-(--surface-container-high) ${item.statusType === "closed" ? "opacity-80" : ""}`}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                        item.statusType === "live" ? "bg-red-600" : item.statusType === "closed" ? "bg-muted-foreground" : "bg-secondary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  {item.time ? (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4">
                      <span className="text-xs font-bold text-white">{item.time}</span>
                    </div>
                  ) : null}
                </div>
                <div className={`flex flex-1 flex-col space-y-4 p-6 ${item.statusType === "closed" ? "grayscale" : ""}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{item.category}</span>
                    <h3 className="line-clamp-2 font-heading text-lg font-bold leading-tight text-primary">{item.title}</h3>
                  </div>
                  <div className="mt-auto flex items-end justify-between border-t border-border/60 pt-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground/70">{item.priceLabel}</p>
                      <p className="font-heading text-lg font-black tracking-tight text-primary">{item.price}</p>
                    </div>
                    {item.statusType === "live" ? (
                      <Link
                        href="/auction-detail"
                        className="bg-secondary px-4 py-2 text-center text-xs font-bold uppercase tracking-widest text-secondary-foreground transition-opacity hover:opacity-90"
                      >
                        Đấu giá ngay
                      </Link>
                    ) : item.statusType === "closed" ? (
                      <span className="text-xs italic text-muted-foreground">Phiên đã đóng</span>
                    ) : (
                      <Link
                        href="/auction-detail"
                        className="flex h-10 w-10 items-center justify-center border border-border text-primary transition-colors hover:bg-secondary hover:text-secondary-foreground"
                      >
                        →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 pt-8">
            <button className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary">{"<"}</button>
            <button className="flex h-10 w-10 items-center justify-center bg-primary font-bold text-primary-foreground">1</button>
            <button className="flex h-10 w-10 items-center justify-center font-bold text-muted-foreground transition-colors hover:bg-(--surface-container-highest)">
              2
            </button>
            <button className="flex h-10 w-10 items-center justify-center font-bold text-muted-foreground transition-colors hover:bg-(--surface-container-highest)">
              3
            </button>
            <span className="flex h-10 w-10 items-center justify-center text-muted-foreground">...</span>
            <button className="flex h-10 w-10 items-center justify-center font-bold text-muted-foreground transition-colors hover:bg-(--surface-container-highest)">
              12
            </button>
            <button className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary">{">"}</button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
