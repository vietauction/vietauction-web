"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useEffect, useMemo, useState } from "react"

import { getSession, registerAccount } from "@/services/auth.api"

type RegisterValues = {
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  yob: string
  cccd: string
  address: string
  city: string
  district: string
  ward: string
  password: string
  confirm: string
}

const initialValues: RegisterValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  yob: "",
  cccd: "",
  address: "",
  city: "",
  district: "",
  ward: "",
  password: "",
  confirm: "",
}

export default function RegisterPage() {
  const router = useRouter()
  const [values, setValues] = useState(initialValues)
  const [accepted, setAccepted] = useState(false)
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

  const passwordStrength = useMemo(
    () =>
      [
        values.password.length >= 8,
        /[A-Z]/.test(values.password),
        /\d/.test(values.password),
      ].filter(Boolean).length,
    [values.password]
  )

  function update(name: keyof RegisterValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError("")

    const currentYear = new Date().getFullYear()
    const birthYear = Number(values.yob)
    const validRequiredFields = Object.entries(values)
      .filter(([name]) => name !== "confirm")
      .every(([, value]) => value.trim().length > 0)
    const validUsername = /^[a-zA-Z0-9._-]{4,50}$/.test(values.username)
    const validPhone = values.phone.replace(/\D/g, "").length >= 9
    const validCitizenId = /^\d{9,20}$/.test(values.cccd)
    const validBirthYear = birthYear >= 1900 && birthYear <= currentYear - 18

    if (
      !validRequiredFields ||
      !validUsername ||
      !values.email.includes("@") ||
      !validPhone ||
      !validCitizenId ||
      !validBirthYear ||
      passwordStrength < 2 ||
      values.password !== values.confirm ||
      !accepted
    ) {
      setError(
        "Vui lòng kiểm tra thông tin bắt buộc, điều kiện mật khẩu và xác nhận điều khoản."
      )
      return
    }

    setSubmitting(true)
    try {
      await registerAccount({
        username: values.username.trim(),
        password: values.password,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        yob: values.yob.trim(),
        cccd: values.cccd.trim(),
        address: values.address.trim(),
        city: values.city.trim(),
        district: values.district.trim(),
        ward: values.ward.trim(),
      })
      router.replace("/account/profile")
      router.refresh()
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Không thể tạo tài khoản. Vui lòng thử lại."
      )
      setSubmitting(false)
    }
  }

  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-[.8fr_1.2fr]">
      <section className="relative hidden min-h-svh overflow-hidden bg-primary lg:sticky lg:top-0 lg:block lg:h-svh">
        <Image
          src="/assets/pages/register.webp"
          alt="Nhà sưu tầm quan sát bình gốm trong phòng trưng bày VietAuction"
          fill
          priority
          sizes="40vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-transparent" />
        <div className="absolute inset-x-12 bottom-14 z-10 max-w-xl">
          <p className="text-xs font-bold tracking-[0.13em] text-accent">
            THÀNH VIÊN VIETAUCTION
          </p>
          <p className="mt-4 text-5xl leading-none font-bold tracking-[-0.05em] text-primary-foreground">
            Bắt đầu hành trình
            <br />
            sở hữu đúng giá trị.
          </p>
        </div>
      </section>

      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
        <div className="w-full max-w-2xl">
          <Link
            href="/"
            className="mb-8 inline-flex min-h-11 items-center text-sm font-semibold text-secondary hover:text-primary"
          >
            ← Về trang chủ
          </Link>
          <p className="va-eyebrow">Đăng ký thành viên</p>
          <h1 className="va-heading-1 mt-3">Tạo tài khoản mới</h1>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Thông tin được dùng để xác lập hồ sơ thành viên và hỗ trợ quy trình
            tham gia đấu giá.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-7" noValidate>
            <fieldset className="space-y-5">
              <legend className="mb-4 text-lg font-bold text-primary">
                Thông tin tài khoản
              </legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Tên đăng nhập"
                  value={values.username}
                  onChange={(value) => update("username", value)}
                  autoComplete="username"
                  hint="4–50 ký tự; dùng chữ, số, dấu chấm, gạch ngang hoặc gạch dưới."
                />
                <Field
                  label="Email"
                  value={values.email}
                  onChange={(value) => update("email", value)}
                  type="email"
                  autoComplete="email"
                />
                <Field
                  label="Mật khẩu"
                  value={values.password}
                  onChange={(value) => update("password", value)}
                  type="password"
                  autoComplete="new-password"
                />
                <Field
                  label="Xác nhận mật khẩu"
                  value={values.confirm}
                  onChange={(value) => update("confirm", value)}
                  type="password"
                  autoComplete="new-password"
                />
              </div>
              <div>
                <div className="grid grid-cols-3 gap-2" aria-hidden="true">
                  {[0, 1, 2].map((item) => (
                    <span
                      key={item}
                      className={`h-1 ${item < passwordStrength ? "bg-status-verified" : "bg-muted"}`}
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Dùng ít nhất 8 ký tự, nên gồm chữ hoa và số.
                </p>
              </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-border pt-7">
              <legend className="mb-4 text-lg font-bold text-primary">
                Thông tin thành viên
              </legend>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Họ"
                  value={values.firstName}
                  onChange={(value) => update("firstName", value)}
                  autoComplete="family-name"
                />
                <Field
                  label="Tên"
                  value={values.lastName}
                  onChange={(value) => update("lastName", value)}
                  autoComplete="given-name"
                />
                <Field
                  label="Số điện thoại"
                  value={values.phone}
                  onChange={(value) => update("phone", value)}
                  type="tel"
                  autoComplete="tel"
                />
                <Field
                  label="Năm sinh"
                  value={values.yob}
                  onChange={(value) => update("yob", value)}
                  inputMode="numeric"
                  placeholder="Ví dụ: 1995"
                />
                <Field
                  label="Số CCCD"
                  value={values.cccd}
                  onChange={(value) => update("cccd", value)}
                  inputMode="numeric"
                  autoComplete="off"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-5 border-t border-border pt-7">
              <legend className="mb-4 text-lg font-bold text-primary">
                Địa chỉ liên hệ
              </legend>
              <Field
                label="Địa chỉ"
                value={values.address}
                onChange={(value) => update("address", value)}
                autoComplete="street-address"
              />
              <div className="grid gap-5 sm:grid-cols-3">
                <Field
                  label="Tỉnh/Thành phố"
                  value={values.city}
                  onChange={(value) => update("city", value)}
                  autoComplete="address-level1"
                />
                <Field
                  label="Quận/Huyện"
                  value={values.district}
                  onChange={(value) => update("district", value)}
                  autoComplete="address-level2"
                />
                <Field
                  label="Phường/Xã"
                  value={values.ward}
                  onChange={(value) => update("ward", value)}
                  autoComplete="address-level3"
                />
              </div>
            </fieldset>

            <label className="flex items-start gap-3 border-t border-border pt-7 text-sm text-muted-foreground">
              <input
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
                type="checkbox"
                className="mt-0.5 size-5 accent-secondary"
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

            <button
              type="submit"
              disabled={submitting}
              className="va-button-primary w-full"
            >
              {submitting ? "Đang tạo tài khoản…" : "Tạo tài khoản"}
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            Đã có tài khoản?{" "}
            <Link
              href="/login"
              className="font-semibold text-secondary hover:text-primary"
            >
              Đăng nhập
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}

type FieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  type?: "text" | "email" | "tel" | "password"
  autoComplete?: string
  inputMode?: "text" | "numeric" | "email" | "tel"
  placeholder?: string
  hint?: string
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
  hint,
}: FieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-semibold">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="va-field"
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        required
      />
      {hint ? (
        <span className="block text-xs text-muted-foreground">{hint}</span>
      ) : null}
    </label>
  )
}
