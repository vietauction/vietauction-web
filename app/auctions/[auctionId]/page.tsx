import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  MapPin,
  ShieldCheck,
} from "lucide-react"

import { AssetGallery } from "@/components/auction/asset-gallery"
import { AuctionCard } from "@/components/auction/auction-card"
import { AuctionCountdown } from "@/components/auction/auction-countdown"
import { AuctionStatusBadge } from "@/components/auction/auction-status-badge"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getAuctionById, mockAuctions } from "@/data/mock-auctions"
import { formatDateTime, formatMoney } from "@/lib/format"

type PageProps = { params: Promise<{ auctionId: string }> }

export function generateStaticParams() {
  return mockAuctions.map((auction) => ({ auctionId: auction.id }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { auctionId } = await params
  const auction = getAuctionById(auctionId)
  if (!auction) return { title: "Không tìm thấy tài sản | VietAuction" }
  return {
    title: `${auction.title} | VietAuction`,
    description: auction.summary,
  }
}

export default async function AuctionDetailPage({ params }: PageProps) {
  const { auctionId } = await params
  const auction = getAuctionById(auctionId)
  if (!auction) notFound()

  const price = auction.currentPrice ?? auction.startPrice
  const isRegistrationAvailable =
    auction.status === "registration-open" || auction.status === "upcoming"
  const isLive = auction.status === "live"
  const related = mockAuctions
    .filter(
      (item) => item.category === auction.category && item.id !== auction.id
    )
    .slice(0, 3)

  return (
    <div className="va-page">
      <SiteHeader />
      <main>
        <div className="va-container py-6">
          <nav
            aria-label="Đường dẫn"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link href="/auctions" className="hover:text-primary">
              Tài sản
            </Link>
            <ChevronRight size={14} />
            <span className="font-numeric">{auction.lotNumber}</span>
          </nav>
        </div>

        <section className="va-container grid gap-8 pb-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)] lg:gap-12">
          <AssetGallery images={auction.images} />
          <aside className="va-card self-start p-6 sm:p-8 lg:sticky lg:top-24">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <AuctionStatusBadge status={auction.status} />
              <span className="font-numeric text-xs text-muted-foreground">
                {auction.lotNumber}
              </span>
            </div>
            <p className="mt-6 font-sans text-xs font-bold tracking-[0.1em] text-secondary uppercase">
              {auction.categoryLabel}
            </p>
            <h1 className="mt-3 text-3xl leading-[1.08] font-bold tracking-[-0.04em] text-primary sm:text-4xl">
              {auction.title}
            </h1>
            <p className="mt-5 text-muted-foreground">{auction.summary}</p>
            <div className="mt-8 border-y border-border py-6">
              <p className="text-sm text-muted-foreground">
                {auction.currentPrice ? "Giá hiện tại" : "Giá khởi điểm"}
              </p>
              <p className="font-price mt-2 font-numeric text-3xl text-primary">
                {formatMoney(price)}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Bước giá:{" "}
                <span className="font-price font-numeric text-foreground">
                  {formatMoney(auction.bidStep)}
                </span>
              </p>
            </div>
            <div className="mt-6 bg-muted p-4">
              <p className="text-xs text-muted-foreground">Thời gian còn lại</p>
              <div className="mt-1">
                <AuctionCountdown endsAt={auction.endsAt} />
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {isLive ? (
                <Link
                  href={`/auctions/${auction.id}/live`}
                  className="va-button-secondary w-full"
                >
                  Vào phòng đấu giá
                </Link>
              ) : isRegistrationAvailable ? (
                <Link
                  href={`/auctions/${auction.id}/register`}
                  className="va-button-secondary w-full"
                >
                  Đăng ký tham gia
                </Link>
              ) : (
                <button disabled className="va-button-primary w-full">
                  Phiên không còn nhận đăng ký
                </button>
              )}
              <Link href="/contact" className="va-button-outline w-full">
                Liên hệ tư vấn
              </Link>
            </div>
          </aside>
        </section>

        <section className="border-y border-border bg-card">
          <div className="va-container grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs text-muted-foreground">Tiền đặt trước</p>
              <p className="font-price mt-2 font-numeric">
                {formatMoney(auction.depositAmount)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phí đăng ký</p>
              <p className="font-price mt-2 font-numeric">
                {formatMoney(auction.registrationFee)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Bắt đầu</p>
              <p className="mt-2 font-numeric text-sm font-semibold">
                {formatDateTime(auction.startsAt)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Địa điểm</p>
              <p className="mt-2 font-semibold">{auction.location}</p>
            </div>
          </div>
        </section>

        <div className="va-container grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-14">
            <section>
              <p className="va-eyebrow">Thông tin tài sản</p>
              <h2 className="va-heading-2 mt-3">Mô tả và đặc điểm</h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {auction.description}
              </p>
              <dl className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
                {auction.attributes.map((item) => (
                  <div key={item.label} className="bg-card p-5">
                    <dt className="text-xs text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-2 font-semibold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section>
              <p className="va-eyebrow">Hồ sơ tài sản</p>
              <h2 className="va-heading-2 mt-3">Tài liệu đã tiếp nhận</h2>
              <ul className="mt-6 grid gap-3">
                {auction.provenance.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-border py-4"
                  >
                    <BadgeCheck className="text-status-verified" size={19} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <aside className="space-y-5">
            <div className="va-card p-6">
              <ShieldCheck className="text-secondary" />
              <h2 className="mt-4 text-xl font-bold">Đơn vị tổ chức</h2>
              <p className="mt-3 font-semibold">{auction.organizer}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Thông tin đang được trình bày bằng dữ liệu mô phỏng cho giai
                đoạn hoàn thiện giao diện.
              </p>
            </div>
            <div className="va-card p-6">
              <div className="flex items-center gap-3">
                <CalendarDays className="text-secondary" size={20} />
                <span className="font-semibold">Lịch xem tài sản</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Đăng ký trước qua bộ phận hỗ trợ để nhận lịch xem và hồ sơ chi
                tiết.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <MapPin size={16} /> {auction.location}
              </div>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="border-t border-border bg-card">
            <div className="va-container py-16">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="va-eyebrow">Có thể bạn quan tâm</p>
                  <h2 className="va-heading-2 mt-3">Tài sản cùng danh mục</h2>
                </div>
                <Link
                  href={`/auctions?category=${auction.category}`}
                  className="hidden text-sm font-semibold text-secondary sm:block"
                >
                  Xem tất cả →
                </Link>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <AuctionCard key={item.id} auction={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  )
}
