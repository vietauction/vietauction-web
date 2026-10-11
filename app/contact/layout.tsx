import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ VietAuction để được hỗ trợ về tài sản, hồ sơ và quy trình đấu giá.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
