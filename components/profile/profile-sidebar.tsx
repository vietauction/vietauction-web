"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  User,
  History,
  Archive,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { UserProfile } from "./profile-types"

interface ProfileSidebarProps {
  readonly user: UserProfile
}

const SIDEBAR_NAV = [
  { id: "dashboard", label: "Tổng quan", href: "/account", icon: LayoutDashboard },
  { id: "profile", label: "Hồ sơ", href: "/account/profile", icon: User },
  { id: "history", label: "Phiên của tôi", href: "/account/auctions", icon: History },
  { id: "consignment", label: "Tài sản đã gửi", href: "/account/assets", icon: Archive },
  { id: "security", label: "Bảo mật", href: "/account/security", icon: ShieldCheck },
]

export function ProfileSidebar({ user }: ProfileSidebarProps) {
  const pathname = usePathname()
  const currentPath = pathname === "/" ? "/account" : pathname
  const initials = user.fullName
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((part) => part[0])
    .join("")

  return (
    <aside className="flex flex-col h-full h-[calc(100vh-80px)] lg:sticky lg:top-[80px]">
      {/* ─── Top Identity Card (THE exactly one avatar) ──────────── */}
      <div className="mb-8 px-4 flex items-center gap-3">
        <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-xs font-bold text-secondary ring-2 ring-secondary/20">
          {initials}
        </div>
        <div className="flex min-w-0 flex-col">
          <h2 className="truncate font-heading text-sm font-bold text-primary">
            {user.fullName}
          </h2>
          <p className="truncate text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
            {user.membershipTier} Member
          </p>
        </div>
      </div>

      {/* ─── Navigation Links ────────────────────────────────────── */}
      <nav aria-label="Main Navigation" className="flex-1 w-full space-y-1 pr-4">
        {SIDEBAR_NAV.map((item) => {
          const isActive = currentPath.includes(item.href)
          const Icon = item.icon

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-r-full px-5 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-muted-foreground hover:bg-[color:var(--surface-container-high)] hover:text-primary"
              )}
            >
              <Icon
                size={16}
                className={cn(
                  "shrink-0",
                  isActive ? "text-white" : "text-muted-foreground group-hover:text-primary"
                )}
              />
              <span className="truncate">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* ─── Bottom Action Button ────────────────────────────────── */}
      <div className="mt-auto pb-6 pr-4 pl-4 pt-8">
        <button
          type="button"
          className="w-full rounded-lg bg-[color:var(--surface-container-high)] py-3 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] transition-colors hover:bg-[color:var(--surface-container-highest)]"
        >
          SUBMIT NEW ITEM
        </button>
      </div>
    </aside>
  )
}
