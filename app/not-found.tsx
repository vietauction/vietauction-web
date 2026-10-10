import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function NotFoundPage() {
  return (
    <div className="va-page">
      <SiteHeader />
      <main className="va-container flex min-h-[65svh] items-center justify-center py-16">
        <section className="max-w-2xl text-center">
          <p className="font-numeric text-sm font-semibold tracking-[0.15em] text-secondary">
            404
          </p>
          <h1 className="va-heading-1 mt-4">Trang bạn tìm không còn ở đây.</h1>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Đường dẫn có thể đã được đổi trong quá trình chuẩn hóa cấu trúc
            VietAuction.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="va-button-primary">
              Về trang chủ
            </Link>
            <Link href="/auctions" className="va-button-outline">
              Khám phá tài sản
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
