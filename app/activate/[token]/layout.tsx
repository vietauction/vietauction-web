import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kích hoạt tài khoản",
  robots: { index: false, follow: false },
}

export default function ActivateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
