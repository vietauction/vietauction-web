"use client"

import { Gavel, Star, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { UserProfile } from "./profile-types"

interface AccountSummaryProps {
  readonly user: UserProfile
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount)
}

export function AccountSummary({ user }: AccountSummaryProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Main Summary Card - Tóm tắt tài khoản */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/50 shadow-sm">
        {/* Left border accent stripe - matches Stitch design */}
        <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-lg bg-orange-500" />

        <h3 className="mb-8 font-heading text-xl font-bold tracking-tight text-primary">
          Tóm tắt tài khoản
        </h3>

        {/* Balance Section */}
        <div className="mb-6 rounded-xl bg-[color:var(--surface-container-highest)] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            SỐ DƯ HIỆN TẠI
          </p>
          <p className="mt-2 font-heading text-3xl font-black tabular-nums tracking-tight text-primary">
            {formatCurrency(user.wallet.balance)}
          </p>
          <p className="mt-2 text-[10px] font-medium text-muted-foreground uppercase">
            HẠN MỨC ĐẤU GIÁ:<br />
            {formatCurrency(user.wallet.auctionLimit)}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-[color:var(--surface-container-highest)] p-4">
            <Gavel size={18} className="mb-2 text-orange-500" />
            <p className="font-heading text-xl font-black tabular-nums text-primary">{user.stats.activeAuctions}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ĐANG ĐẤU<br/>GIÁ</p>
          </div>
          <div className="rounded-xl bg-[color:var(--surface-container-highest)] p-4">
            <Star size={18} className="mb-2 text-orange-500" />
            <p className="font-heading text-xl font-black tabular-nums text-primary">{user.stats.watchlisted}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">YÊU THÍCH</p>
          </div>
        </div>

        {/* Sovereign Status Badge */}
        <div className="rounded-xl bg-orange-500/10 p-5 ring-1 ring-orange-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Crown size={14} className="text-orange-500" />
            <h4 className="font-heading text-sm font-bold text-orange-600 dark:text-orange-500">
              Sovereign Status
            </h4>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Bạn đang ở hạng thành viên cao cấp nhất. Tận hưởng phí đấu giá ưu đãi và quyền truy cập vào các phiên đấu giá kín.
          </p>
        </div>
      </div>

      {/* Recommendations Card */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-6 ring-1 ring-border/50 shadow-sm">
        {/* Ambient overlay for the card background */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 50%)"
          }}
        />
        
        <h4 className="relative font-heading text-base font-bold text-primary mb-2">
          Gợi ý riêng cho bạn
        </h4>
        <p className="relative text-[11px] text-muted-foreground mb-6 leading-relaxed">
          Dựa trên lịch sử đấu giá tranh sơn mài của bạn.
        </p>
        
        <button 
          type="button" 
          className="relative text-[10px] font-bold uppercase tracking-[0.1em] text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors border-b border-orange-500/30 pb-0.5"
        >
          KHÁM PHÁ NGAY
        </button>
      </div>
    </div>
  )
}
