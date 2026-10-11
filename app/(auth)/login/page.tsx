"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { getSession, login } from "@/services/auth.api"

export default function LoginPage() {
  const router = useRouter()
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true
    getSession()
      .then(() => {
        if (active) router.replace("/account/profile")
      })
      .catch(() => undefined)

    return () => {
      active = false
    }
  }, [router])

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError("")
    if (!identifier.trim() || password.length < 6) {
      setError(
        "Vui lòng nhập email hoặc tên đăng nhập và mật khẩu tối thiểu 6 ký tự."
      )
      return
    }
    setSubmitting(true)
    try {
      await login({ username: identifier.trim(), password })
      router.replace("/account/profile")
      router.refresh()
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Không thể đăng nhập. Vui lòng thử lại."
      )
      setSubmitting(false)
    }
  }

  return (
    <main id="main-content" tabIndex={-1} className="va-page-focus-target grid min-h-svh bg-background text-foreground lg:grid-cols-2">
      <section className="relative hidden min-h-svh overflow-hidden bg-primary lg:block">
        <Image
          src="/assets/pages/login-v2.png"
          alt="Nhà sưu tầm quan sát tác phẩm sơn mài trong không gian trưng bày"
          fill
          priority
          sizes="50vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/55 to-primary/15" />
        <div className="relative z-10 flex h-full max-w-2xl flex-col justify-center p-14 xl:p-20">
          <Link
            href="/"
            className="va-logo absolute top-10 left-14 text-2xl tracking-[-0.08em] text-primary-foreground"
          >
            VietAuction<span className="text-accent">.</span>
          </Link>
          <p className="font-sans text-xs font-bold tracking-[0.13em] text-accent">
            NỀN TẢNG ĐẤU GIÁ TÀI SẢN
          </p>
          <p className="mt-5 text-5xl leading-[0.98] font-bold tracking-[-0.055em] text-primary-foreground xl:text-6xl">
            Giá trị được nhìn nhận.
            <br />
            Minh bạch được đặt lên đầu.
          </p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Theo dõi phiên đấu giá, quản lý hồ sơ và tiếp cận thông tin tài sản
            trong một trải nghiệm nhất quán.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-10 inline-flex min-h-11 items-center text-sm font-semibold text-secondary hover:text-primary"
          >
            ← Về trang chủ
          </Link>
          <p className="va-eyebrow">Tài khoản thành viên</p>
          <h1 className="va-heading-1 mt-3">Chào mừng trở lại</h1>
          <p className="mt-3 text-muted-foreground">
            Đăng nhập để quản lý hồ sơ và theo dõi hoạt động đấu giá của bạn.
          </p>

          <form className="mt-9 space-y-6" onSubmit={submit} noValidate>
            <label className="block space-y-2">
              <span className="text-sm font-semibold">
                Email hoặc tên đăng nhập
              </span>
              <input
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
                className="va-field"
                autoComplete="username"
                placeholder="ten@vidu.vn hoặc tên đăng nhập"
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "login-error" : undefined}
              />
            </label>
            <label className="block space-y-2">
              <span className="flex items-center justify-between">
                <span className="text-sm font-semibold">Mật khẩu</span>
                <Link
                  href="/forgot-password"
                  className="text-sm text-secondary hover:text-primary"
                >
                  Quên mật khẩu?
                </Link>
              </span>
              <span className="relative block">
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="va-field pr-12"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Tối thiểu 6 ký tự"
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "login-error" : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute top-1/2 right-1 inline-flex size-10 -translate-y-1/2 items-center justify-center text-muted-foreground hover:text-primary"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>
            {error ? (
              <p
                id="login-error"
                role="alert"
                className="border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
              >
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={submitting}
              className="va-button-primary w-full"
            >
              {submitting ? "Đang đăng nhập…" : "Đăng nhập"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Chưa có tài khoản?{" "}
            <Link
              href="/register"
              className="font-semibold text-secondary hover:text-primary"
            >
              Tạo tài khoản mới
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
