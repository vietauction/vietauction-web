"use client"

import { useState } from "react"

import { AuctionCard } from "@/components/auction/auction-card"
import { StateNotice } from "@/components/common/state-notice"
import { mockAuctions } from "@/data/mock-auctions"

const tabs = [
  "Đã đăng ký",
  "Đang diễn ra",
  "Đã kết thúc",
  "Không trúng",
] as const

export default function AccountAuctionsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Đã đăng ký")
  const items =
    tab === "Đang diễn ra"
      ? mockAuctions.filter((item) => item.status === "live").slice(0, 2)
      : tab === "Đã kết thúc"
        ? mockAuctions.filter((item) => item.status === "ended").slice(0, 2)
        : tab === "Không trúng"
          ? []
          : mockAuctions.slice(0, 3)
  return (
    <div>
      <div className="va-card p-6 sm:p-8">
        <h2 className="va-heading-2 text-3xl">Phiên đấu giá của tôi</h2>
        <div className="mt-6 flex gap-1 overflow-x-auto border-b border-border">
          {tabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`min-h-12 shrink-0 border-b-2 px-4 text-sm font-semibold ${tab === item ? "border-secondary text-primary" : "border-transparent text-muted-foreground"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {items.length ? (
          <div className="grid gap-5 xl:grid-cols-2">
            {items.map((item) => (
              <AuctionCard key={item.id} auction={item} />
            ))}
          </div>
        ) : (
          <StateNotice
            title="Chưa có phiên trong mục này"
            description="Các phiên phù hợp sẽ xuất hiện tại đây khi mock state được cập nhật."
            action={{ label: "Khám phá tài sản", href: "/auctions" }}
          />
        )}
      </div>
    </div>
  )
}
