"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { Check } from "lucide-react"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  function submit(event: FormEvent) {
    event.preventDefault()
    if (password.length < 8 || password !== confirm) {
      setError(
        "Mật khẩu phải có ít nhất 8 ký tự và hai giá trị phải trùng nhau."
      )
      return
    }
    setError("")
    setSuccess(true)
  }

  return (
    <main id="main-content" tabIndex={-1} className="va-page-focus-target flex min-h-svh items-center justify-center bg-background p-6">
      <section className="va-card w-full max-w-lg p-7 sm:p-10">
        {success ? (
          <div className="text-center">
            <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-white">
              <Check />
            </span>
            <p className="va-eyebrow mt-6">Hoàn tất</p>
            <h1 className="va-heading-1 mt-3">
              Mật khẩu đã được cập nhật mô phỏng.
            </h1>
            <Link href="/login" className="va-button-primary mt-8">
              Đăng nhập
            </Link>
          </div>
        ) : (
          <>
            <p className="va-eyebrow">Khôi phục tài khoản</p>
            <h1 className="va-heading-1 mt-3">Đặt mật khẩu mới</h1>
            <p className="mt-4 text-muted-foreground">
              Mật khẩu mới cần có ít nhất 8 ký tự.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Mật khẩu mới</span>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="va-field"
                  type="password"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Xác nhận mật khẩu</span>
                <input
                  value={confirm}
                  onChange={(event) => setConfirm(event.target.value)}
                  className="va-field"
                  type="password"
                />
              </label>
              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}
              <button className="va-button-primary w-full">
                Cập nhật mật khẩu
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  )
}
