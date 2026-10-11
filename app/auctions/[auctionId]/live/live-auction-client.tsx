"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import {
  AlertTriangle,
  Check,
  ChevronLeft,
  Minus,
  Plus,
  Radio,
  Wifi,
  WifiOff,
} from "lucide-react"

import { AuctionCountdown } from "@/components/auction/auction-countdown"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { formatMoney } from "@/lib/format"
import type { Auction } from "@/types/auction"

type Connection = "connected" | "reconnecting" | "ended"
type Result = "idle" | "confirm" | "accepted" | "rejected"

export function LiveAuctionClient({ auction }: { auction: Auction }) {
  const initialPrice = auction.currentPrice ?? auction.startPrice
  const [currentPrice, setCurrentPrice] = useState(initialPrice)
  const [proposed, setProposed] = useState(initialPrice + auction.bidStep)
  const [connection, setConnection] = useState<Connection>("connected")
  const [result, setResult] = useState<Result>("idle")
  const [bids, setBids] = useState([
    { id: 1, bidder: "N*** T***", amount: initialPrice, time: "14:02:10" },
    {
      id: 2,
      bidder: "P*** H***",
      amount: initialPrice - auction.bidStep,
      time: "13:58:45",
    },
    {
      id: 3,
      bidder: "L*** A***",
      amount: initialPrice - auction.bidStep * 2,
      time: "13:55:02",
    },
  ])

  const canBid =
    connection === "connected" && proposed >= currentPrice + auction.bidStep
  const connectionLabel = useMemo(
    () =>
      connection === "connected"
        ? "Đã kết nối"
        : connection === "reconnecting"
          ? "Đang kết nối lại"
          : "Phiên đã kết thúc",
    [connection]
  )

  useEffect(() => {
    if (result !== "confirm") return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setResult("idle")
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [result])

  function confirmBid() {
    if (!canBid) return
    setResult("confirm")
  }

  function submitBid() {
    const accepted = bids.length % 4 !== 0
    if (!accepted) {
      setResult("rejected")
      return
    }
    setCurrentPrice(proposed)
    setBids((items) => [
      {
        id: Date.now(),
        bidder: "Bạn",
        amount: proposed,
        time: new Date().toLocaleTimeString("vi-VN"),
      },
      ...items,
    ])
    setProposed(proposed + auction.bidStep)
    setResult("accepted")
  }

  return (
    <div className="va-page">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="va-page-focus-target bg-[#181510] text-[#f5f1e9]">
        <div className="va-container py-8 sm:py-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              href={`/auctions/${auction.id}`}
              className="inline-flex min-h-11 items-center gap-2 text-sm text-[#d3ccc1] hover:text-white"
            >
              <ChevronLeft size={17} /> Chi tiết tài sản
            </Link>
            <button
              onClick={() =>
                setConnection((value) =>
                  value === "connected" ? "reconnecting" : "connected"
                )
              }
              className="inline-flex min-h-11 items-center gap-2 border border-[#4a4438] px-4 font-sans text-xs font-bold"
            >
              <span
                className={`size-2 rounded-full ${connection === "connected" ? "bg-[#88b89c]" : "bg-[#cba765]"}`}
              />
              {connectionLabel}
            </button>
          </div>

          <div className="grid gap-7 xl:grid-cols-[minmax(0,1.35fr)_430px]">
            <section>
              <div className="relative aspect-video overflow-hidden bg-[#211d17]">
                <Image
                  src={auction.images[0].src}
                  alt={auction.images[0].alt}
                  fill
                  priority
                  sizes="70vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-[#9f332d] px-3 py-2 font-sans text-xs font-bold uppercase">
                  <Radio size={15} /> Trực tiếp
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-sans text-xs font-bold text-[#cba765]">
                    <span className="font-numeric">{auction.lotNumber}</span> ·{" "}
                    {auction.categoryLabel}
                  </p>
                  <h1 className="mt-2 max-w-3xl text-3xl leading-tight font-bold tracking-[-0.04em] sm:text-4xl">
                    {auction.title}
                  </h1>
                </div>
              </div>

              <div className="mt-5 grid gap-px bg-[#4a4438] sm:grid-cols-3">
                <div className="bg-[#211d17] p-5">
                  <p className="text-xs text-[#a8a095]">Giá hiện tại</p>
                  <p
                    aria-live="polite"
                    className="font-price mt-2 font-numeric text-2xl text-[#f5d99c]"
                  >
                    {formatMoney(currentPrice)}
                  </p>
                </div>
                <div className="bg-[#211d17] p-5">
                  <p className="text-xs text-[#a8a095]">Bước giá</p>
                  <p className="font-price mt-2 font-numeric text-lg">
                    {formatMoney(auction.bidStep)}
                  </p>
                </div>
                <div className="bg-[#211d17] p-5">
                  <p className="text-xs text-[#a8a095]">Thời gian còn lại</p>
                  <div className="mt-2 text-[#f5d99c]">
                    <AuctionCountdown endsAt={auction.endsAt} />
                  </div>
                </div>
              </div>
            </section>

            <aside className="bg-[#211d17] p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Đặt giá</h2>
                {connection === "connected" ? (
                  <Wifi size={18} className="text-[#88b89c]" />
                ) : (
                  <WifiOff size={18} className="text-[#cba765]" />
                )}
              </div>
              {connection === "reconnecting" ? (
                <div className="mt-5 flex gap-3 border border-[#8a6d3c] bg-[#312a20] p-4 text-sm text-[#f5d99c]">
                  <AlertTriangle className="shrink-0" size={18} />
                  Đang kết nối lại. Lịch sử vẫn hiển thị nhưng đặt giá tạm khóa.
                </div>
              ) : null}
              <div className="mt-6">
                <label
                  htmlFor="proposed-bid"
                  className="text-xs text-[#a8a095]"
                >
                  Giá đề xuất
                </label>
                <div className="mt-2 grid grid-cols-[48px_1fr_48px] gap-2">
                  <button
                    onClick={() =>
                      setProposed((value) =>
                        Math.max(
                          currentPrice + auction.bidStep,
                          value - auction.bidStep
                        )
                      )
                    }
                    className="inline-flex items-center justify-center border border-[#4a4438]"
                    aria-label="Giảm một bước giá"
                  >
                    <Minus size={18} />
                  </button>
                  <input
                    id="proposed-bid"
                    value={proposed}
                    onChange={(event) =>
                      setProposed(Number(event.target.value))
                    }
                    inputMode="numeric"
                    className="font-price min-h-14 min-w-0 border border-[#4a4438] bg-[#181510] px-3 text-center font-numeric text-lg text-[#f5f1e9]"
                  />
                  <button
                    onClick={() =>
                      setProposed((value) => value + auction.bidStep)
                    }
                    className="inline-flex items-center justify-center border border-[#4a4438]"
                    aria-label="Tăng một bước giá"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <p className="mt-2 text-xs text-[#a8a095]">
                  Tối thiểu{" "}
                  <span className="font-price font-numeric">
                    {formatMoney(currentPrice + auction.bidStep)}
                  </span>
                </p>
              </div>
              <button
                onClick={confirmBid}
                disabled={!canBid}
                className="va-button-secondary mt-5 w-full"
              >
                Xác nhận mức giá
              </button>

              {result === "accepted" ? (
                <div className="mt-4 flex gap-3 bg-[#143323] p-4 text-sm text-[#dff3e6]">
                  <Check size={18} /> Giá của bạn đã được ghi nhận.
                </div>
              ) : null}
              {result === "rejected" ? (
                <div className="mt-4 flex gap-3 bg-[#421411] p-4 text-sm text-[#ffd6d2]">
                  <AlertTriangle size={18} /> Mức giá vừa bị vượt. Hãy kiểm tra
                  và thử lại.
                </div>
              ) : null}

              <div className="mt-8 border-t border-[#4a4438] pt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">Lịch sử trả giá</h2>
                  <span className="font-numeric text-xs text-[#a8a095]">
                    {bids.length} lượt
                  </span>
                </div>
                <div className="mt-4 max-h-72 space-y-1 overflow-y-auto">
                  {bids.map((bid, index) => (
                    <div
                      key={bid.id}
                      className={`flex items-center justify-between gap-3 border-b border-[#312a20] py-3 ${index === 0 ? "text-[#f5d99c]" : "text-[#d3ccc1]"}`}
                    >
                      <div>
                        <p className="text-sm font-semibold">{bid.bidder}</p>
                        <p className="font-numeric text-[11px] text-[#8f887e]">
                          {bid.time}
                        </p>
                      </div>
                      <p className="font-price font-numeric text-sm">
                        {formatMoney(bid.amount)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />

      {result === "confirm" ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-5">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="bid-confirm-title"
            className="w-full max-w-md bg-card p-7 text-foreground"
          >
            <p className="va-eyebrow">Xác nhận đặt giá</p>
            <h2 id="bid-confirm-title" className="mt-3 text-2xl font-bold">
              Bạn muốn đặt mức giá này?
            </h2>
            <p className="font-price mt-5 font-numeric text-3xl">
              {formatMoney(proposed)}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Đây là hành động mô phỏng và không tạo giao dịch tài chính thật.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <button
                onClick={() => setResult("idle")}
                className="va-button-outline"
              >
                Hủy
              </button>
              <button onClick={submitBid} className="va-button-secondary">
                Đặt giá
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  )
}
