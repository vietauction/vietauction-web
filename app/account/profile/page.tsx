"use client"

import { FormEvent, useState } from "react"
import { BadgeCheck } from "lucide-react"

export default function AccountProfilePage() {
  const [saved, setSaved] = useState(false)
  function submit(event: FormEvent) {
    event.preventDefault()
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2500)
  }
  return (
    <div className="space-y-6">
      <div className="va-card p-6 sm:p-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="va-heading-2 text-3xl">Hồ sơ cá nhân</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cập nhật thông tin liên hệ cho trạng thái mô phỏng.
            </p>
          </div>
          <span className="inline-flex min-h-10 items-center gap-2 bg-status-verified/10 px-3 text-sm font-semibold text-status-verified">
            <BadgeCheck size={17} /> Đã xác minh mô phỏng
          </span>
        </div>
        <form onSubmit={submit} className="mt-7 space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">Họ và tên</span>
              <input className="va-field" defaultValue="Nguyễn Minh Anh" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Email</span>
              <input
                className="va-field"
                type="email"
                defaultValue="minhanh@example.vn"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Số điện thoại</span>
              <input className="va-field" defaultValue="090 123 4567" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Tỉnh/Thành phố</span>
              <select className="va-field" defaultValue="hcm">
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="hn">Hà Nội</option>
                <option value="dn">Đà Nẵng</option>
              </select>
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-sm font-semibold">Địa chỉ liên hệ</span>
            <textarea
              className="va-field min-h-28"
              defaultValue="Phường Bến Thành, Quận 1, TP. Hồ Chí Minh"
            />
          </label>
          {saved ? (
            <p
              role="status"
              className="text-sm font-semibold text-status-verified"
            >
              Đã lưu thay đổi trong local state.
            </p>
          ) : null}
          <button className="va-button-primary">Lưu thay đổi</button>
        </form>
      </div>
    </div>
  )
}
