import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BadgeCheck } from "lucide-react"

import { formatMoney } from "@/lib/format"
import type { Auction } from "@/types/auction"

import { AuctionCountdown } from "./auction-countdown"
import { AuctionStatusBadge } from "./auction-status-badge"

export function AuctionCard({
  auction,
  priority = false,
}: {
  auction: Auction
  priority?: boolean
}) {
  const price = auction.currentPrice ?? auction.startPrice
  return (
    <article className="va-card group flex h-full flex-col overflow-hidden transition-colors duration-[180ms] hover:border-secondary">
      <Link
        href={`/auctions/${auction.id}`}
        className="relative aspect-[4/3] overflow-hidden bg-muted"
      >
        <Image
          src={auction.images[0].src}
          alt={auction.images[0].alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[500ms] motion-safe:group-hover:scale-[1.04]"
        />
        <div className="absolute top-4 left-4">
          <AuctionStatusBadge status={auction.status} />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>{auction.categoryLabel}</span>
          <span className="font-numeric">{auction.lotNumber}</span>
        </div>
        <h2 className="text-xl leading-snug font-bold tracking-[-0.025em] text-primary">
          <Link
            href={`/auctions/${auction.id}`}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {auction.title}
          </Link>
        </h2>
        <div className="mt-auto pt-7">
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground">
              {auction.currentPrice ? "Giá hiện tại" : "Giá khởi điểm"}
            </p>
            <p className="font-price mt-1 font-numeric text-lg text-primary">
              {formatMoney(price)}
            </p>
          </div>
          <div className="mt-4 flex items-end justify-between gap-4 border-t border-border pt-4">
            <div>
              <p className="mb-1 text-xs text-muted-foreground">
                Thời gian còn lại
              </p>
              <AuctionCountdown endsAt={auction.endsAt} compact />
            </div>
            <span className="inline-flex size-11 shrink-0 items-center justify-center border border-border text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight size={17} aria-hidden="true" />
              <span className="sr-only">Xem chi tiết</span>
            </span>
          </div>
          {auction.verified ? (
            <p className="mt-4 flex items-center gap-2 text-xs font-medium text-status-verified">
              <BadgeCheck size={15} aria-hidden="true" /> Hồ sơ đã đối chiếu
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}
