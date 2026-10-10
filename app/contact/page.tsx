"use client"

import Image from "next/image"
import { FormEvent, useState } from "react"
import { Check, Mail, Phone } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function ContactPage() {
  const [state, setState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
  })

  function update(name: keyof typeof values, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
    setState("idle")
  }
  function submit(event: FormEvent) {
    event.preventDefault()
    if (
      !values.name ||
      !values.email.includes("@") ||
      !values.topic ||
      values.message.length < 10
    ) {
      setState("error")
      return
    }
    setState("submitting")
    window.setTimeout(() => setState("success"), 700)
  }

  return (
    <div className="va-page">
      <SiteHeader />
      <main>
        <header className="va-container py-12 sm:py-16">
          <p className="va-eyebrow">Hỗ trợ khách hàng</p>
          <h1 className="va-heading-1 mt-4">
            Chúng tôi sẵn sàng đồng hành cùng bạn.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Gửi câu hỏi về phiên đấu giá, hồ sơ tài sản hoặc quy trình dành cho
            người sở hữu.
          </p>
        </header>
        <div className="va-container grid gap-8 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,.85fr)]">
          <section className="va-card p-6 sm:p-8">
            <h2 className="va-heading-2 text-3xl">Gửi yêu cầu hỗ trợ</h2>
            {state === "success" ? (
              <div className="mt-8 flex min-h-96 flex-col items-center justify-center text-center">
                <span className="flex size-14 items-center justify-center bg-status-verified text-white">
                  <Check />
                </span>
                <h3 className="mt-5 text-2xl font-bold">
                  Yêu cầu đã được ghi nhận mô phỏng.
                </h3>
                <p className="mt-3 max-w-md text-muted-foreground">
                  Không có dữ liệu thật được gửi đi. Bạn có thể tạo một trạng
                  thái mới để tiếp tục kiểm thử.
                </p>
                <button
                  onClick={() => {
                    setState("idle")
                    setValues({
                      name: "",
                      phone: "",
                      email: "",
                      topic: "",
                      message: "",
                    })
                  }}
                  className="va-button-outline mt-7"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-7 space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2">
                    <span className="text-sm font-semibold">Họ và tên</span>
                    <input
                      value={values.name}
                      onChange={(event) => update("name", event.target.value)}
                      className="va-field"
                      autoComplete="name"
                    />
                  </label>
                  <label className="space-y-2">
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
                  <span className="text-sm font-semibold">Chủ đề</span>
                  <select
                    value={values.topic}
                    onChange={(event) => update("topic", event.target.value)}
                    className="va-field"
                  >
                    <option value="">Chọn nội dung cần hỗ trợ</option>
                    <option>Đăng ký phiên đấu giá</option>
                    <option>Thông tin tài sản</option>
                    <option>Gửi tài sản đấu giá</option>
                    <option>Tài khoản và bảo mật</option>
                  </select>
                </label>
                <label className="block space-y-2">
                  <span className="text-sm font-semibold">Nội dung</span>
                  <textarea
                    value={values.message}
                    onChange={(event) => update("message", event.target.value)}
                    className="va-field min-h-36"
                    placeholder="Mô tả câu hỏi với ít nhất 10 ký tự"
                  />
                </label>
                {state === "error" ? (
                  <p
                    role="alert"
                    className="border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                  >
                    Vui lòng kiểm tra họ tên, email, chủ đề và nội dung trước
                    khi gửi.
                  </p>
                ) : null}
                <button
                  disabled={state === "submitting"}
                  className="va-button-primary"
                >
                  {state === "submitting" ? "Đang gửi…" : "Gửi yêu cầu"}
                </button>
              </form>
            )}
          </section>
          <aside className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden bg-primary">
              <Image
                src="/assets/pages/contact.webp"
                alt="Chuyên viên VietAuction trong không gian tư vấn"
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181510]/85 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-[#f5f1e9]">
                <p className="font-sans text-xs font-bold text-[#cba765]">
                  HỖ TRỢ RÕ RÀNG
                </p>
                <h2 className="mt-3 text-3xl font-bold">
                  Thông tin đúng lúc cho mỗi quyết định.
                </h2>
              </div>
            </div>
            <div className="va-card divide-y divide-border p-2">
              <div className="flex gap-4 p-4">
                <Mail className="text-secondary" size={19} />
                <div>
                  <p className="font-semibold">Email hỗ trợ</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    support@vietauction.vn
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4">
                <Phone className="text-secondary" size={19} />
                <div>
                  <p className="font-semibold">Điện thoại</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thông tin liên hệ mẫu
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
