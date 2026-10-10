import type { Metadata } from "next"
import { Suspense } from "react"

import { AuctionListClient } from "./auction-list-client"

export const metadata: Metadata = {
  title: "Tài sản đấu giá | VietAuction",
  description:
    "Khám phá tài sản đang mở đăng ký, đang đấu giá và các phiên đã kết thúc trên VietAuction.",
}

export default function AuctionsPage() {
  return (
    <Suspense
      fallback={
        <main className="va-page flex min-h-svh items-center justify-center">
          <p className="font-sans text-sm text-muted-foreground">
            Đang chuẩn bị danh sách tài sản…
          </p>
        </main>
      }
    >
      <AuctionListClient />
    </Suspense>
  )
}
