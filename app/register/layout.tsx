import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Đăng ký thành viên",
  description: "Tạo hồ sơ thành viên VietAuction.",
  robots: { index: false, follow: false },
}

export default function RegisterLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
