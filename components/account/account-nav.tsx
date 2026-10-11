"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import {
  Gavel,
  KeyRound,
  LogOut,
  PackageSearch,
  ReceiptText,
  UserRound,
} from "lucide-react"

import { logout } from "@/services/auth.api"

const items = [
  { href: "/account/profile", label: "Hồ sơ cá nhân", icon: UserRound },
  { href: "/account/security", label: "Bảo mật", icon: KeyRound },
  { href: "/account/auctions", label: "Phiên của tôi", icon: Gavel },
  { href: "/account/transactions", label: "Giao dịch", icon: ReceiptText },
  { href: "/account/assets", label: "Tài sản đã gửi", icon: PackageSearch },
]

export function AccountNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)
  const [error, setError] = useState("")

  async function handleLogout() {
    setLoggingOut(true)
    setError("")
    try {
      await logout()
      router.replace("/login")
      router.refresh()
    } catch {
      setError("Không thể đăng xuất. Vui lòng thử lại.")
      setLoggingOut(false)
    }
  }

  return (
    <nav aria-label="Điều hướng tài khoản" className="va-card min-w-0 space-y-1 p-2">
      {items.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-12 w-full items-center gap-3 border-l-2 px-4 text-sm font-semibold transition-colors ${active ? "border-secondary bg-muted text-primary" : "border-transparent text-muted-foreground hover:bg-muted/60 hover:text-primary"}`}
          >
            <Icon size={17} />
            {item.label}
          </Link>
        )
      })}
      <button
        type="button"
        onClick={handleLogout}
        disabled={loggingOut}
        className="mt-2 flex min-h-12 w-full items-center gap-3 border-t border-border px-4 pt-3 text-left text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary disabled:cursor-wait disabled:opacity-60"
      >
        <LogOut size={17} />
        {loggingOut ? "Đang đăng xuất…" : "Đăng xuất"}
      </button>
      {error ? (
        <p role="alert" className="basis-full px-4 py-2 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </nav>
  )
}
