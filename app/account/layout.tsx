import type { ReactNode } from "react"

import { AccountNav } from "@/components/account/account-nav"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="va-page">
      <SiteHeader />
      <main className="va-container py-10 sm:py-14">
        <div className="mb-8">
          <p className="va-eyebrow">Khu vực thành viên</p>
          <h1 className="va-heading-1 mt-3">Tài khoản của bạn</h1>
          <p className="mt-3 text-muted-foreground">
            Dữ liệu hiển thị bên dưới là dữ liệu mô phỏng phục vụ kiểm thử giao
            diện.
          </p>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24">
            <AccountNav />
          </aside>
          <section>{children}</section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
