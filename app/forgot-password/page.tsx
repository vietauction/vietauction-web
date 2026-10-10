"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { MailCheck } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  function submit(event: FormEvent) {
    event.preventDefault()
    if (!email.includes("@")) {
      setError("Vui lòng nhập một địa chỉ email hợp lệ.")
      return
    }
    setError("")
    setSent(true)
  }

  return (
    <main className="flex min-h-svh items-center justify-center bg-background p-6">
      <section className="va-card w-full max-w-lg p-7 sm:p-10">
        {sent ? (
          <div className="text-center">
            <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-white">
              <MailCheck />
            </span>
            <p className="va-eyebrow mt-6">Đã gửi hướng dẫn mô phỏng</p>
            <h1 className="va-heading-1 mt-3">Kiểm tra hộp thư của bạn</h1>
            <p className="mt-4 text-muted-foreground">
              Không có email thật được gửi trong giai đoạn frontend. Hãy dùng
              màn hình đặt lại để xem trạng thái tiếp theo.
            </p>
            <Link
              href="/reset-password/demo-token"
              className="va-button-primary mt-8"
            >
              Mở màn hình đặt lại
            </Link>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-semibold text-secondary"
            >
              ← Quay lại đăng nhập
            </Link>
            <p className="va-eyebrow mt-8">Khôi phục tài khoản</p>
            <h1 className="va-heading-1 mt-3">Quên mật khẩu?</h1>
            <p className="mt-4 text-muted-foreground">
              Nhập email tài khoản để xem luồng gửi hướng dẫn mô phỏng.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Địa chỉ email</span>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="va-field"
                  type="email"
                  autoComplete="email"
                  placeholder="ten@vidu.vn"
                />
              </label>
              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}
              <button className="va-button-primary w-full">
                Gửi hướng dẫn
              </button>
            </form>
          </>
        )}
      </section>
    </main>
  )
}
