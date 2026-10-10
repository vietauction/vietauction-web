"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent, useMemo, useState } from "react"
import { Check } from "lucide-react"

export default function RegisterPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  })
  const [accepted, setAccepted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const strength = useMemo(
    () =>
      [
        values.password.length >= 8,
        /[A-Z]/.test(values.password),
        /\d/.test(values.password),
      ].filter(Boolean).length,
    [values.password]
  )

  function update(name: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    setError("")
    if (
      !values.name ||
      !values.email.includes("@") ||
      values.phone.replace(/\D/g, "").length < 9 ||
      strength < 2 ||
      values.password !== values.confirm ||
      !accepted
    ) {
      setError(
        "Vui lòng kiểm tra các trường bắt buộc, xác nhận mật khẩu và điều khoản."
      )
      return
    }
    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
    }, 700)
  }

  if (success) {
    return (
      <main className="flex min-h-svh items-center justify-center bg-background p-6">
        <section className="va-card max-w-xl p-9 text-center">
          <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-white">
            <Check />
          </span>
          <p className="va-eyebrow mt-6">Tạo tài khoản thành công</p>
          <h1 className="va-heading-1 mt-3">Hồ sơ mô phỏng đã sẵn sàng.</h1>
          <p className="mt-4 text-muted-foreground">
            Bạn có thể đăng nhập bằng bất kỳ thông tin hợp lệ nào trong bản
            frontend này.
          </p>
          <Link href="/login" className="va-button-primary mt-8">
            Đến trang đăng nhập
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-[.9fr_1.1fr]">
      <section className="relative hidden min-h-svh overflow-hidden bg-[#181510] lg:block">
        <Image
          src="/assets/pages/register.webp"
          alt="Nhà sưu tầm quan sát bình gốm trong phòng trưng bày VietAuction"
          fill
          priority
          sizes="45vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181510]/95 via-[#181510]/45 to-transparent" />
        <div className="absolute inset-x-12 bottom-14 z-10 max-w-xl">
          <p className="font-sans text-xs font-bold tracking-[0.13em] text-[#cba765]">
            THÀNH VIÊN VIETAUCTION
          </p>
          <h1 className="mt-4 text-5xl leading-none font-bold tracking-[-0.05em] text-[#f5f1e9]">
            Bắt đầu hành trình
            <br />
            sở hữu đúng giá trị.
          </h1>
        </div>
      </section>
      <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
        <div className="w-full max-w-xl">
          <Link
            href="/"
            className="mb-8 inline-flex min-h-11 items-center text-sm font-semibold text-secondary"
          >
            ← Về trang chủ
          </Link>
          <p className="va-eyebrow">Đăng ký thành viên</p>
          <h2 className="va-heading-1 mt-3">Tạo tài khoản mới</h2>
          <p className="mt-3 text-muted-foreground">
            Chỉ cần thông tin cơ bản. Hồ sơ định danh được thực hiện ở bước
            riêng sau này.
          </p>
          <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
            <label className="block space-y-2">
              <span className="text-sm font-semibold">Họ và tên</span>
              <input
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                className="va-field"
                autoComplete="name"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  className="va-field"
                  type="email"
                  autoComplete="email"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Số điện thoại</span>
                <input
                  value={values.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  className="va-field"
                  type="tel"
                  autoComplete="tel"
                />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Mật khẩu</span>
                <input
                  value={values.password}
                  onChange={(event) => update("password", event.target.value)}
                  className="va-field"
                  type="password"
                  autoComplete="new-password"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold">Xác nhận mật khẩu</span>
                <input
                  value={values.confirm}
                  onChange={(event) => update("confirm", event.target.value)}
                  className="va-field"
                  type="password"
                  autoComplete="new-password"
                />
              </label>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((item) => (
                  <span
                    key={item}
                    className={`h-1 ${item < strength ? "bg-status-verified" : "bg-muted"}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Dùng ít nhất 8 ký tự, gồm chữ hoa và số.
              </p>
            </div>
            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                type="checkbox"
                className="mt-0.5 size-5 accent-[#7a5b2e]"
              />
              <span>
                Tôi đồng ý với{" "}
                <Link href="/terms" className="text-secondary underline">
                  Điều khoản dịch vụ
                </Link>{" "}
                và{" "}
                <Link href="/privacy" className="text-secondary underline">
                  Chính sách bảo mật
                </Link>
                .
              </span>
            </label>
            {error ? (
              <p
                role="alert"
                className="border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
              >
                {error}
              </p>
            ) : null}
            <button disabled={submitting} className="va-button-primary w-full">
              {submitting ? "Đang tạo tài khoản…" : "Tạo tài khoản"}
            </button>
          </form>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            Đã có tài khoản?{" "}
            <Link href="/login" className="font-semibold text-secondary">
              Đăng nhập
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
