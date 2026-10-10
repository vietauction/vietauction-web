"use client"

import { FormEvent, useState } from "react"
import { Laptop, ShieldCheck } from "lucide-react"

export default function AccountSecurityPage() {
  const [twoFactor, setTwoFactor] = useState(false)
  const [message, setMessage] = useState("")
  function submit(event: FormEvent) {
    event.preventDefault()
    setMessage("Mật khẩu đã được cập nhật mô phỏng.")
  }
  return (
    <div className="space-y-6">
      <section className="va-card p-6 sm:p-8">
        <h2 className="va-heading-2 text-3xl">Mật khẩu và bảo mật</h2>
        <form onSubmit={submit} className="mt-7 max-w-xl space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-semibold">Mật khẩu hiện tại</span>
            <input className="va-field" type="password" />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold">Mật khẩu mới</span>
            <input className="va-field" type="password" />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold">Xác nhận mật khẩu mới</span>
            <input className="va-field" type="password" />
          </label>
          {message ? (
            <p className="text-sm text-status-verified">{message}</p>
          ) : null}
          <button className="va-button-primary">Cập nhật mật khẩu</button>
        </form>
      </section>
      <section className="va-card p-6 sm:p-8">
        <div className="flex gap-4">
          <ShieldCheck className="shrink-0 text-secondary" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">Xác thực hai lớp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Trạng thái này chỉ lưu trong phiên làm việc hiện tại.
            </p>
            <button
              onClick={() => setTwoFactor((value) => !value)}
              className={`mt-5 min-h-11 border px-5 text-sm font-semibold ${twoFactor ? "border-status-verified bg-status-verified text-white" : "border-border"}`}
            >
              {twoFactor ? "Đang bật — Nhấn để tắt" : "Thiết lập 2FA mô phỏng"}
            </button>
          </div>
        </div>
      </section>
      <section className="va-card p-6 sm:p-8">
        <h2 className="text-xl font-bold">Phiên hoạt động</h2>
        <div className="mt-5 flex items-center gap-4 border-t border-border pt-5">
          <span className="flex size-11 items-center justify-center bg-muted">
            <Laptop size={20} />
          </span>
          <div className="flex-1">
            <p className="font-semibold">Chrome trên macOS</p>
            <p className="text-sm text-muted-foreground">
              Phiên hiện tại · TP. Hồ Chí Minh
            </p>
          </div>
          <span className="font-sans text-xs font-bold text-status-verified">
            ĐANG HOẠT ĐỘNG
          </span>
        </div>
      </section>
    </div>
  )
}
