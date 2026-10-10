"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/auctions", label: "Tài sản" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
]

function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`)
}

type SiteHeaderProps = {
  variant?: "overlay" | "solid"
}

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const isOverlay = variant === "overlay"

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isMenuOpen])

  return (
    <header
      className={`${isOverlay ? "absolute inset-x-0 top-0 border-white/20 bg-transparent text-white" : "sticky top-0 border-border bg-background/95 text-foreground backdrop-blur-xl"} z-50 w-full border-b`}
    >
      <div className="va-container flex min-h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="VietAuction trang chủ"
          className={`va-logo text-xl tracking-[-0.08em] sm:text-2xl ${isOverlay ? "text-white" : "text-primary"}`}
        >
          VietAuction<span className="text-accent">.</span>
        </Link>

        <nav
          aria-label="Điều hướng chính"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`min-h-11 px-3 py-3 font-sans text-[15px] font-normal tracking-normal transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive
                    ? `border-b border-accent ${isOverlay ? "text-white" : "text-primary"}`
                    : isOverlay
                      ? "text-white/75 hover:text-white"
                      : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-1 sm:flex">
          <Link
            href="/login"
            className={`va-button px-4 ${isOverlay ? "text-white hover:text-accent" : "text-muted-foreground hover:text-primary"}`}
          >
            Đăng nhập
          </Link>
          <Link href="/sell" className="va-button-secondary px-4">
            Gửi tài sản
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex size-12 items-center justify-center border transition-colors duration-[180ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden ${isOverlay ? "border-white/50 text-white hover:bg-white/10" : "border-border text-primary hover:bg-muted"}`}
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-4 text-foreground shadow-xl md:hidden"
        >
          <nav
            aria-label="Điều hướng di động"
            className="mx-auto flex max-w-[1320px] flex-col"
          >
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                  className={`flex min-h-12 items-center border-b border-border px-1 py-3 font-sans text-base font-normal tracking-normal ${
                    isActive ? "text-secondary" : "text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="/login"
                onClick={closeMenu}
                className="va-button-outline px-3"
              >
                Đăng nhập
              </Link>
              <Link
                href="/sell"
                onClick={closeMenu}
                className="va-button-secondary px-3"
              >
                Gửi tài sản
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
