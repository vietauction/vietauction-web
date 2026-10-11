"use client"

import { FormEvent, useState } from "react"
import { BadgeCheck } from "lucide-react"

import { updateProfile } from "@/services/auth.api"
import type { User, UserProfileUpdate } from "@/types/user.type"

export function ProfileForm({ initialUser }: { initialUser: User }) {
  const [user, setUser] = useState(initialUser)
  const [values, setValues] = useState<UserProfileUpdate>({
    firstName: initialUser.firstName,
    lastName: initialUser.lastName,
    phone: initialUser.phone ?? "",
    address: initialUser.address ?? "",
    city: initialUser.city ?? "",
    district: initialUser.district ?? "",
    ward: initialUser.ward ?? "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  function update(name: keyof UserProfileUpdate, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    setMessage("")
    setError("")

    try {
      const updatedUser = await updateProfile(values)
      setUser(updatedUser)
      setValues({
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        phone: updatedUser.phone ?? "",
        address: updatedUser.address ?? "",
        city: updatedUser.city ?? "",
        district: updatedUser.district ?? "",
        ward: updatedUser.ward ?? "",
      })
      setMessage("Thông tin hồ sơ đã được cập nhật.")
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Không thể cập nhật hồ sơ. Vui lòng thử lại."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="va-card p-6 sm:p-8">
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="va-heading-2 text-3xl">Hồ sơ cá nhân</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Cập nhật thông tin liên hệ sử dụng trong các phiên đấu giá.
            </p>
          </div>
          <span className="inline-flex min-h-10 items-center gap-2 bg-status-verified/10 px-3 text-sm font-semibold text-status-verified">
            <BadgeCheck size={17} />
            {user.state === "VERIFIED" ? "Đã xác minh" : "Đang hoạt động"}
          </span>
        </div>

        <form onSubmit={submit} className="mt-7 space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold">Họ</span>
              <input
                className="va-field"
                value={values.firstName}
                onChange={(event) => update("firstName", event.target.value)}
                autoComplete="family-name"
                required
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Tên</span>
              <input
                className="va-field"
                value={values.lastName}
                onChange={(event) => update("lastName", event.target.value)}
                autoComplete="given-name"
                required
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Email</span>
              <input
                className="va-field bg-muted/50"
                type="email"
                value={user.email}
                readOnly
                aria-describedby="email-note"
              />
              <span
                id="email-note"
                className="block text-xs text-muted-foreground"
              >
                Email chưa thể thay đổi ở bước này.
              </span>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Số điện thoại</span>
              <input
                className="va-field"
                value={values.phone}
                onChange={(event) => update("phone", event.target.value)}
                autoComplete="tel"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Tỉnh/Thành phố</span>
              <input
                className="va-field"
                value={values.city}
                onChange={(event) => update("city", event.target.value)}
                autoComplete="address-level1"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold">Quận/Huyện</span>
              <input
                className="va-field"
                value={values.district}
                onChange={(event) => update("district", event.target.value)}
                autoComplete="address-level2"
              />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold">Phường/Xã</span>
              <input
                className="va-field"
                value={values.ward}
                onChange={(event) => update("ward", event.target.value)}
                autoComplete="address-level3"
              />
            </label>
          </div>
          <label className="block space-y-2">
            <span className="text-sm font-semibold">Địa chỉ liên hệ</span>
            <textarea
              className="va-field min-h-28"
              value={values.address}
              onChange={(event) => update("address", event.target.value)}
              autoComplete="street-address"
            />
          </label>
          {message ? (
            <p
              role="status"
              className="text-sm font-semibold text-status-verified"
            >
              {message}
            </p>
          ) : null}
          {error ? (
            <p
              role="alert"
              className="border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
            >
              {error}
            </p>
          ) : null}
          <button disabled={submitting} className="va-button-primary">
            {submitting ? "Đang lưu…" : "Lưu thay đổi"}
          </button>
        </form>
      </div>
    </div>
  )
}
