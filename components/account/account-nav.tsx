"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Gavel,
  KeyRound,
  PackageSearch,
  ReceiptText,
  UserRound,
} from "lucide-react"

const items = [
  { href: "/account/profile", label: "Hồ sơ cá nhân", icon: UserRound },
  { href: "/account/security", label: "Bảo mật", icon: KeyRound },
  { href: "/account/auctions", label: "Phiên của tôi", icon: Gavel },
  { href: "/account/transactions", label: "Giao dịch", icon: ReceiptText },
  { href: "/account/assets", label: "Tài sản đã gửi", icon: PackageSearch },
]

export function AccountNav() {
  const pathname = usePathname()
  return (
    <nav aria-label="Điều hướng tài khoản" className="va-card p-2">
      {items.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-12 items-center gap-3 border-l-2 px-4 text-sm font-semibold transition-colors ${active ? "border-secondary bg-muted text-primary" : "border-transparent text-muted-foreground hover:bg-muted/60 hover:text-primary"}`}
          >
            <Icon size={17} />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
