"use client"

import { useState } from "react"
import { ReceiptText, X } from "lucide-react"

import { formatMoney } from "@/lib/format"

const transactions = [
  {
    id: "GD-24091",
    title: "Tiền đặt trước · VA-0001",
    amount: 68_000_000,
    status: "Đã ghi nhận",
    date: "09/10/2026",
  },
  {
    id: "GD-24072",
    title: "Phí đăng ký · VA-0004",
    amount: 500_000,
    status: "Đang xử lý",
    date: "08/10/2026",
  },
  {
    id: "GD-23980",
    title: "Hoàn tiền đặt trước · VA-0006",
    amount: 31_000_000,
    status: "Hoàn tất",
    date: "02/10/2026",
  },
]

export default function TransactionsPage() {
  const [selected, setSelected] = useState<
    (typeof transactions)[number] | null
  >(null)
  return (
    <div className="va-card p-6 sm:p-8">
      <div>
        <p className="va-eyebrow">Lịch sử mô phỏng</p>
        <h2 className="va-heading-2 mt-3 text-3xl">Giao dịch</h2>
      </div>
      <div className="mt-7 overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="border-b border-border font-sans text-xs font-bold tracking-[0.06em] text-muted-foreground uppercase">
            <tr>
              <th className="py-4 pr-4">Mã</th>
              <th className="py-4 pr-4">Nội dung</th>
              <th className="py-4 pr-4">Ngày</th>
              <th className="py-4 pr-4">Số tiền</th>
              <th className="py-4">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((item) => (
              <tr
                key={item.id}
                onClick={() => setSelected(item)}
                className="cursor-pointer border-b border-border hover:bg-muted/50"
              >
                <td className="py-5 pr-4 font-numeric text-xs">{item.id}</td>
                <td className="py-5 pr-4 font-semibold">{item.title}</td>
                <td className="py-5 pr-4 text-sm text-muted-foreground">
                  {item.date}
                </td>
                <td className="font-price py-5 pr-4 font-numeric">
                  {formatMoney(item.amount)}
                </td>
                <td className="py-5">
                  <span className="va-status bg-muted text-foreground">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selected ? (
        <div
          className="fixed inset-0 z-[70] bg-black/40"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null)
          }}
        >
          <aside
            role="dialog"
            aria-modal="true"
            className="ml-auto h-full w-[min(100%,430px)] bg-background p-7 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center bg-muted">
                <ReceiptText />
              </span>
              <button
                onClick={() => setSelected(null)}
                className="inline-flex size-11 items-center justify-center border border-border"
                aria-label="Đóng"
              >
                <X />
              </button>
            </div>
            <p className="mt-8 font-numeric text-xs font-semibold tracking-[0.13em] text-secondary uppercase">
              {selected.id}
            </p>
            <h2 className="mt-3 text-2xl font-bold">{selected.title}</h2>
            <p className="font-price mt-6 font-numeric text-3xl">
              {formatMoney(selected.amount)}
            </p>
            <dl className="mt-8 space-y-4 border-y border-border py-5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Ngày</dt>
                <dd>{selected.date}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Trạng thái</dt>
                <dd>{selected.status}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Phương thức</dt>
                <dd>Chuyển khoản mô phỏng</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm text-muted-foreground">
              Không có giao dịch tài chính thật được thực hiện.
            </p>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
