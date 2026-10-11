"use client"

import Link from "next/link"
import { AlertCircle } from "lucide-react"

type PageErrorProps = {
  reset: () => void
}

export function PageError({ reset }: PageErrorProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="va-container va-page-focus-target flex min-h-[65svh] items-center justify-center py-16"
    >
      <section className="va-card max-w-2xl p-8 text-center sm:p-12" role="alert">
        <span className="mx-auto inline-flex size-14 items-center justify-center bg-destructive/10 text-destructive">
          <AlertCircle aria-hidden="true" />
        </span>
        <p className="va-eyebrow mt-6">Không thể hiển thị trang</p>
        <h1 className="va-heading-1 mt-3">Đã có sự cố tạm thời.</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Vui lòng thử tải lại nội dung. Nếu sự cố tiếp diễn, bạn có thể quay về
          danh sách tài sản hoặc liên hệ đội ngũ hỗ trợ.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="va-button-primary">
            Thử lại
          </button>
          <Link href="/auctions" className="va-button-outline">
            Xem tài sản
          </Link>
        </div>
      </section>
    </main>
  )
}
