"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/auction-list", label: "Tài sản" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
]

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full bg-[color:var(--surface)]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-10">
          <Link href="/" className="font-heading text-xl font-black tracking-tight text-[color:var(--primary)]">
            VIETAUCTION
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[color:var(--primary)] ${
                  index === 0
                    ? "border-b-2 border-[color:var(--secondary)] pb-1 text-[color:var(--secondary)]"
                    : "text-[color:var(--muted-foreground)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center bg-[color:var(--surface-container-low)] text-[color:var(--primary)] transition-colors hover:bg-[color:var(--surface-container-high)]"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link
            href="/login"
            className="hidden px-4 py-2 text-sm font-medium text-[color:var(--muted-foreground)] sm:inline-flex"
          >
            Đăng nhập
          </Link>
          <Link
            href="/sent-possestion"
            className="inline-flex bg-[color:var(--primary)] px-5 py-2.5 text-sm font-semibold text-[color:var(--primary-foreground)] transition-opacity hover:opacity-90"
          >
            Gửi tài sản
          </Link>
        </div>
      </div>
    </header>
  )
}
