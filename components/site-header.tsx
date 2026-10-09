"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/auction-list", label: "Tài sản" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
]

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="va-container flex min-h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          onClick={closeMenu}
          aria-label="VietAuction trang chủ"
          className="font-serif text-xl font-bold tracking-[-0.08em] text-primary sm:text-2xl"
        >
          VietAuction<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`min-h-11 px-3 py-3 font-sans text-[15px] font-normal tracking-normal transition-colors duration-[180ms] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isActive ? "border-b border-accent text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-1 sm:flex">
          <Link href="/login" className="va-button px-4 text-muted-foreground hover:text-primary">
            Đăng nhập
          </Link>
          <Link href="/sent-possestion" className="va-button-secondary px-4">
            Gửi tài sản
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex size-12 items-center justify-center border border-border text-primary transition-colors duration-[180ms] hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-background px-5 py-4 md:hidden">
          <nav aria-label="Điều hướng di động" className="mx-auto flex max-w-[1320px] flex-col">
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
              <Link href="/login" onClick={closeMenu} className="va-button-outline px-3">
                Đăng nhập
              </Link>
              <Link href="/sent-possestion" onClick={closeMenu} className="va-button-secondary px-3">
                Gửi tài sản
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
