"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Check,
  ChevronLeft,
  CreditCard,
  FileCheck2,
  ShieldCheck,
} from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { formatMoney } from "@/lib/format"
import type { Auction } from "@/types/auction"

type RegistrationState = "idle" | "processing" | "success" | "error"

export function AuctionRegistrationClient({ auction }: { auction: Auction }) {
  const [accepted, setAccepted] = useState([false, false, false])
  const [method, setMethod] = useState("bank")
  const [state, setState] = useState<RegistrationState>("idle")

  const canSubmit = accepted.every(Boolean) && state !== "processing"

  function submit() {
    if (!canSubmit) return
    setState("processing")
    window.setTimeout(() => setState("success"), 900)
  }

  if (state === "success") {
    return (
      <div className="va-page">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="va-container va-page-focus-target flex min-h-[70svh] items-center justify-center py-16">
          <section className="va-card max-w-2xl p-8 text-center sm:p-12">
            <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-status-verified-foreground">
              <Check size={28} />
            </span>
            <p className="va-eyebrow mt-7">Đăng ký thành công</p>
            <h1 className="va-heading-1 mt-3">
              Bạn đã hoàn tất bước đăng ký mô phỏng.
            </h1>
            <p className="mt-5 text-muted-foreground">
              Hồ sơ cho {auction.lotNumber} đã được ghi nhận trong local state.
              Chưa có khoản thanh toán hay dữ liệu thật nào được gửi đi.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/auctions/${auction.id}`}
                className="va-button-outline"
              >
                Về trang tài sản
              </Link>
              <Link
                href={`/auctions/${auction.id}/live`}
                className="va-button-primary"
              >
                Xem phòng đấu giá
              </Link>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="va-page">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="va-container va-page-focus-target py-10 sm:py-14">
        <Link
          href={`/auctions/${auction.id}`}
          className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
        >
          <ChevronLeft size={17} /> Quay lại tài sản
        </Link>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          <section>
            <p className="va-eyebrow">Đăng ký tham gia</p>
            <h1 className="va-heading-1 mt-3">
              Xác nhận điều kiện phiên đấu giá
            </h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Kiểm tra các khoản phí và xác nhận bạn đã đọc hồ sơ trước khi hoàn
              tất đăng ký mô phỏng.
            </p>

            <div className="mt-9 space-y-6">
              <div className="va-card p-6">
                <div className="flex gap-4">
                  <FileCheck2 className="mt-1 shrink-0 text-secondary" />
                  <div>
                    <h2 className="text-xl font-bold">Điều kiện bắt buộc</h2>
                    <div className="mt-5 space-y-4">
                      {[
                        "Tôi đã đọc mô tả, hồ sơ và tình trạng tài sản.",
                        "Tôi đồng ý với quy chế đấu giá và bước giá của phiên.",
                        "Tôi hiểu đây là giao diện mô phỏng, chưa phát sinh giao dịch thật.",
                      ].map((label, index) => (
                        <label
                          key={label}
                          className="flex cursor-pointer items-start gap-3 border-t border-border pt-4"
                        >
                          <input
                            type="checkbox"
                            checked={accepted[index]}
                            onChange={(event) =>
                              setAccepted((current) =>
                                current.map((value, itemIndex) =>
                                  itemIndex === index
                                    ? event.target.checked
                                    : value
                                )
                              )
                            }
                            className="mt-0.5 size-5 accent-[#7a5b2e]"
                          />
                          <span className="text-sm leading-relaxed">
                            {label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="va-card p-6">
                <div className="flex gap-4">
                  <CreditCard className="mt-1 shrink-0 text-secondary" />
                  <div className="w-full">
                    <h2 className="text-xl font-bold">Phương thức mô phỏng</h2>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {[
                        { value: "bank", label: "Chuyển khoản ngân hàng" },
                        { value: "office", label: "Thanh toán tại văn phòng" },
                      ].map((item) => (
                        <label
                          key={item.value}
                          className={`flex min-h-14 cursor-pointer items-center gap-3 border p-4 ${method === item.value ? "border-secondary bg-muted" : "border-border"}`}
                        >
                          <input
                            type="radio"
                            name="method"
                            value={item.value}
                            checked={method === item.value}
                            onChange={() => setMethod(item.value)}
                            className="size-4 accent-[#7a5b2e]"
                          />
                          <span className="text-sm font-semibold">
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="va-card self-start p-6 lg:sticky lg:top-24">
            <p className="font-numeric text-xs text-muted-foreground">
              {auction.lotNumber}
            </p>
            <h2 className="mt-2 text-2xl leading-tight font-bold">
              {auction.title}
            </h2>
            <dl className="mt-6 space-y-4 border-y border-border py-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Phí đăng ký</dt>
                <dd className={`font-numeric ${auction.registrationFee === undefined ? "text-muted-foreground" : "font-price"}`}>
                  {auction.registrationFee === undefined
                    ? "Chưa công bố"
                    : formatMoney(auction.registrationFee)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Tiền đặt trước</dt>
                <dd className={`font-numeric ${auction.depositAmount === undefined ? "text-muted-foreground" : "font-price"}`}>
                  {auction.depositAmount === undefined
                    ? "Chưa công bố"
                    : formatMoney(auction.depositAmount)}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Bước giá</dt>
                <dd className="font-price font-numeric">
                  {formatMoney(auction.bidStep)}
                </dd>
              </div>
            </dl>
            <div className="mt-5 flex gap-3 text-sm text-muted-foreground">
              <ShieldCheck
                className="shrink-0 text-status-verified"
                size={18}
              />
              <p>Không có thanh toán thật trong bản frontend này.</p>
            </div>
            {state === "error" ? (
              <p
                role="alert"
                className="mt-5 border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
              >
                Chưa thể hoàn tất đăng ký. Vui lòng thử lại.
              </p>
            ) : null}
            <button
              onClick={submit}
              disabled={!canSubmit}
              className="va-button-secondary mt-6 w-full"
            >
              {state === "processing" ? "Đang xử lý…" : "Xác nhận đăng ký"}
            </button>
            <button
              onClick={() => setState("error")}
              className="mt-3 w-full py-2 text-xs text-muted-foreground hover:text-primary"
            >
              Xem trạng thái lỗi mô phỏng
            </button>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
