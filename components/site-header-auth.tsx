"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/", label: "Trang chủ" },
  { href: "/auction-list", label: "Tài sản" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
  // Các mục chuyên sâu khi đã đăng nhập
  { href: "/live", label: "Live Auctions" },
  { href: "/upcoming", label: "Upcoming" },
  { href: "/private", label: "Private Sales" },
  { href: "/heritage", label: "Hanoi Heritage" },
]

export function SiteHeaderAuth() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-[color:var(--surface)]/90 backdrop-blur-xl border-b border-border/40">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 xl:px-10 py-4 lg:py-5">
        
        {/* LÔ GÔ */}
        <Link href="/" className="font-heading text-xl font-black tracking-tight text-primary shrink-0">
          VIETAUCTION
        </Link>
        
        {/* NAV: Gộp chung menu cơ bản và menu nâng cao cùng 1 hàng */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-widest transition-colors",
                  isActive 
                    ? "text-orange-500" 
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* HÀNH ĐỘNG (User Actions) */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Nút thông báo */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-card ring-1 ring-border/50 text-foreground transition-colors hover:bg-muted text-primary">
            <Bell size={18} strokeWidth={2.5} />
            {/* Chấm đỏ thông báo */}
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-card" />
          </button>
        </div>

      </div>
    </header>
  )
}
