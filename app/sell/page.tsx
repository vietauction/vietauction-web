"use client"

import Image from "next/image"
import Link from "next/link"
import { ChangeEvent, useState } from "react"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  FileImage,
  Save,
  Trash2,
} from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const steps = ["Thông tin", "Đặc điểm", "Hình ảnh", "Xác nhận"]
const progressWidth = ["w-0", "w-1/3", "w-2/3", "w-full"]

type Draft = {
  title: string
  category: string
  description: string
  origin: string
  condition: string
  contactName: string
  phone: string
  email: string
}

const emptyDraft: Draft = {
  title: "",
  category: "jewelry",
  description: "",
  origin: "",
  condition: "",
  contactName: "",
  phone: "",
  email: "",
}

export default function SellPage() {
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<Draft>(emptyDraft)
  const [previews, setPreviews] = useState<string[]>([])
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function update(name: keyof Draft, value: string) {
    setDraft((current) => ({ ...current, [name]: value }))
    setMessage("")
  }

  function saveDraft() {
    window.localStorage.setItem(
      "vietauction-seller-draft",
      JSON.stringify(draft)
    )
    setMessage("Đã lưu bản nháp trên trình duyệt này.")
  }

  function restoreDraft() {
    const saved = window.localStorage.getItem("vietauction-seller-draft")
    if (!saved) {
      setMessage("Chưa có bản nháp nào trên trình duyệt này.")
      return
    }
    setDraft(JSON.parse(saved) as Draft)
    setMessage("Đã khôi phục bản nháp trên trình duyệt này.")
  }

  function addFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).slice(
      0,
      Math.max(0, 6 - previews.length)
    )
    setPreviews((current) => [
      ...current,
      ...files.map((file) => URL.createObjectURL(file)),
    ])
  }

  function validateCurrent() {
    if (step === 0 && (!draft.title.trim() || !draft.category))
      return "Vui lòng nhập tên tài sản và chọn danh mục."
    if (step === 1 && (!draft.description.trim() || !draft.condition.trim()))
      return "Vui lòng bổ sung mô tả và tình trạng tài sản."
    if (step === 2 && previews.length === 0)
      return "Vui lòng chọn ít nhất một hình ảnh để xem trước."
    if (
      step === 3 &&
      (!draft.contactName ||
        draft.phone.replace(/\D/g, "").length < 9 ||
        !draft.email.includes("@"))
    )
      return "Vui lòng kiểm tra thông tin liên hệ."
    return ""
  }

  function next() {
    const error = validateCurrent()
    if (error) {
      setMessage(error)
      return
    }
    setMessage("")
    setStep((current) => Math.min(3, current + 1))
  }
  function submit() {
    const error = validateCurrent()
    if (error) {
      setMessage(error)
      return
    }
    window.localStorage.removeItem("vietauction-seller-draft")
    setSubmitted(true)
  }

  if (submitted)
    return (
      <div className="va-page">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="va-container va-page-focus-target flex min-h-[65svh] items-center justify-center py-16">
          <section className="va-card max-w-2xl p-8 text-center sm:p-12">
            <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-white">
              <Check />
            </span>
            <p className="va-eyebrow mt-6">Đã gửi hồ sơ mô phỏng</p>
            <h1 className="va-heading-1 mt-3">Tài sản đã được ghi nhận.</h1>
            <p className="mt-4 text-muted-foreground">
              Dữ liệu chỉ tồn tại trong giao diện demo và chưa được tải lên hệ
              thống nào.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/account/assets" className="va-button-primary">
                Theo dõi tài sản
              </Link>
              <button
                onClick={() => {
                  setDraft(emptyDraft)
                  setPreviews([])
                  setStep(0)
                  setSubmitted(false)
                }}
                className="va-button-outline"
              >
                Gửi tài sản khác
              </button>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )

  return (
    <div className="va-page">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="va-container va-page-focus-target py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="va-eyebrow">Dành cho người sở hữu</p>
            <h1 className="va-heading-1 mt-3">Gửi tài sản đấu giá</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Hoàn thiện bốn bước để tạo hồ sơ mô phỏng. Bạn có thể lưu bản nháp
              trên trình duyệt.
            </p>
          </div>
          <ol className="relative mt-10 grid grid-cols-4" aria-label="Tiến độ gửi tài sản">
            <div aria-hidden="true" className="absolute top-5 right-[12.5%] left-[12.5%] h-px bg-border">
              <div className={`h-full bg-secondary transition-[width] duration-500 ease-out motion-reduce:transition-none ${progressWidth[step]}`} />
            </div>
            {steps.map((label, index) => {
              const isComplete = index < step
              const isCurrent = index === step

              return (
              <li key={label} aria-current={isCurrent ? "step" : undefined} className="relative flex min-w-0 flex-col items-center text-center">
                <span
                  className={`flex size-10 items-center justify-center border text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none ${isComplete ? "border-secondary bg-secondary text-secondary-foreground" : isCurrent ? "border-secondary bg-secondary text-secondary-foreground ring-4 ring-secondary/15" : "border-border bg-card text-muted-foreground"}`}
                >
                  {isComplete ? <Check size={16} aria-hidden="true" /> : index + 1}
                </span>
                <span
                  className={`mt-3 text-[11px] font-semibold leading-4 sm:text-sm ${index <= step ? "text-primary" : "text-muted-foreground"}`}
                >
                  {label}
                </span>
              </li>
              )
            })}
          </ol>

          <div className="mt-10 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_300px]">
            <section className="va-card p-6 sm:p-8">
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="font-numeric text-xs text-secondary">
                    BƯỚC {step + 1}/4
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{steps[step]}</h2>
                </div>
                <div className="flex flex-wrap justify-end gap-3">
                  <button
                    onClick={restoreDraft}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-muted-foreground"
                  >
                    Khôi phục nháp
                  </button>
                  <button
                    onClick={saveDraft}
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary"
                  >
                    <Save size={16} /> Lưu nháp
                  </button>
                </div>
              </div>
              {step === 0 ? (
                <div className="space-y-5">
                  <label className="block space-y-2">
                    <span className="text-sm font-semibold">Tên tài sản</span>
                    <input
                      value={draft.title}
                      onChange={(event) => update("title", event.target.value)}
                      className="va-field"
                      placeholder="Ví dụ: Nhẫn kim cương Art Deco"
                    />
                  </label>
                  <label className="block space-y-2">
                    <span className="text-sm font-semibold">Danh mục</span>
                    <select
                      value={draft.category}
                      onChange={(event) =>
                        update("category", event.target.value)
                      }
                      className="va-field"
                    >
                      <option value="jewelry">Trang sức & Đá quý</option>
                      <option value="art">Nghệ thuật & Đồ cổ</option>
                      <option value="real-estate">Bất động sản</option>
                      <option value="vehicle">Phương tiện vận tải</option>
                    </select>
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Các trường chuyên biệt sẽ thay đổi theo danh mục ở bước tiếp
                    theo.
                  </p>
                </div>
              ) : null}
              {step === 1 ? (
                <div className="space-y-5">
                  <label className="block space-y-2">
                    <span className="text-sm font-semibold">Mô tả tài sản</span>
                    <textarea
                      value={draft.description}
                      onChange={(event) =>
                        update("description", event.target.value)
                      }
                      className="va-field min-h-32"
                      placeholder="Mô tả đặc điểm, lịch sử và giá trị nổi bật"
                    />
                  </label>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">Nguồn gốc</span>
                      <input
                        value={draft.origin}
                        onChange={(event) =>
                          update("origin", event.target.value)
                        }
                        className="va-field"
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">
                        Tình trạng hiện tại
                      </span>
                      <select
                        value={draft.condition}
                        onChange={(event) =>
                          update("condition", event.target.value)
                        }
                        className="va-field"
                      >
                        <option value="">Chọn tình trạng</option>
                        <option>Nguyên bản</option>
                        <option>Đã qua sử dụng</option>
                        <option>Đã phục chế</option>
                      </select>
                    </label>
                  </div>
                  {draft.category === "jewelry" ? (
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">
                        Chứng thư kiểm định (nếu có)
                      </span>
                      <input
                        className="va-field"
                        placeholder="GIA, IGI hoặc đơn vị khác"
                      />
                    </label>
                  ) : null}
                  {draft.category === "vehicle" ? (
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">
                        Năm sản xuất
                      </span>
                      <input className="va-field" inputMode="numeric" />
                    </label>
                  ) : null}
                </div>
              ) : null}
              {step === 2 ? (
                <div>
                  <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center border border-dashed border-secondary bg-muted/50 p-6 text-center">
                    <FileImage className="text-secondary" />
                    <span className="mt-3 font-semibold">
                      Chọn hình ảnh để xem trước
                    </span>
                    <span className="mt-1 text-sm text-muted-foreground">
                      Tối đa 6 ảnh; chưa tải lên máy chủ
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={addFiles}
                      className="sr-only"
                    />
                  </label>
                  {previews.length ? (
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {previews.map((src, index) => (
                        <div
                          key={src}
                          className="relative aspect-square overflow-hidden bg-muted"
                        >
                          <Image
                            src={src}
                            alt={`Ảnh xem trước ${index + 1}`}
                            fill
                            unoptimized
                            sizes="200px"
                            className="object-cover"
                          />
                          <button
                            onClick={() =>
                              setPreviews((items) =>
                                items.filter(
                                  (_, itemIndex) => itemIndex !== index
                                )
                              )
                            }
                            className="absolute top-2 right-2 inline-flex size-9 items-center justify-center bg-primary text-primary-foreground"
                            aria-label={`Xóa ảnh ${index + 1}`}
                          >
                            <Trash2 size={15} />
                          </button>
                          {index === 0 ? (
                            <span className="absolute bottom-2 left-2 bg-accent px-2 py-1 font-sans text-[10px] font-bold">
                              ẢNH BÌA
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {step === 3 ? (
                <div className="space-y-6">
                  <div className="border border-border bg-muted/40 p-5">
                    <p className="font-sans text-xs font-bold text-secondary">
                      TÓM TẮT HỒ SƠ
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{draft.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {draft.description}
                    </p>
                    <p className="mt-3 font-numeric text-xs text-muted-foreground">
                      {previews.length} hình ảnh xem trước
                    </p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block space-y-2 sm:col-span-2">
                      <span className="text-sm font-semibold">
                        Người liên hệ
                      </span>
                      <input
                        value={draft.contactName}
                        onChange={(event) =>
                          update("contactName", event.target.value)
                        }
                        className="va-field"
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">
                        Số điện thoại
                      </span>
                      <input
                        value={draft.phone}
                        onChange={(event) =>
                          update("phone", event.target.value)
                        }
                        className="va-field"
                        type="tel"
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-semibold">Email</span>
                      <input
                        value={draft.email}
                        onChange={(event) =>
                          update("email", event.target.value)
                        }
                        className="va-field"
                        type="email"
                      />
                    </label>
                  </div>
                </div>
              ) : null}
              {message ? (
                <p
                  role="status"
                  className={`mt-5 border p-3 text-sm ${message.startsWith("Đã") ? "border-status-verified/30 text-status-verified" : "border-destructive/30 text-destructive"}`}
                >
                  {message}
                </p>
              ) : null}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <button
                  onClick={() => setStep((current) => Math.max(0, current - 1))}
                  disabled={step === 0}
                  className="va-button-outline"
                >
                  <ChevronLeft size={17} /> Quay lại
                </button>
                {step < 3 ? (
                  <button onClick={next} className="va-button-secondary">
                    Tiếp theo <ChevronRight size={17} />
                  </button>
                ) : (
                  <button onClick={submit} className="va-button-secondary">
                    Gửi hồ sơ
                  </button>
                )}
              </div>
            </section>
            <aside className="space-y-5">
              <div className="bg-primary p-6 text-primary-foreground">
                <p className="font-sans text-xs font-bold text-accent">
                  BẢO MẬT THÔNG TIN
                </p>
                <h2 className="mt-3 text-xl font-bold">
                  Không có tệp nào được tải lên.
                </h2>
                <p className="mt-3 text-sm text-primary-foreground/70">
                  Hình ảnh chỉ được xem trước cục bộ trong trình duyệt cho đến
                  khi backend được tích hợp.
                </p>
              </div>
              <div className="va-card p-6">
                <h2 className="font-bold">Chuẩn bị trước khi gửi</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>• Ảnh rõ nét ở nhiều góc.</li>
                  <li>• Thông tin nguồn gốc nếu có.</li>
                  <li>• Mô tả đúng tình trạng hiện tại.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
