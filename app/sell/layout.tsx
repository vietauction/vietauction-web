import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gửi tài sản đấu giá",
  description: "Gửi hồ sơ tài sản để VietAuction tiếp nhận và đề xuất quy trình thẩm định.",
  robots: { index: false, follow: false },
}

export default function SellLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
