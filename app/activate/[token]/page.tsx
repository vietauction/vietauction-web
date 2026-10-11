import Link from "next/link"
import { Check } from "lucide-react"

export default function ActivatePage() {
  return (
    <main id="main-content" tabIndex={-1} className="va-page-focus-target flex min-h-svh items-center justify-center bg-background p-6">
      <section className="va-card max-w-xl p-9 text-center">
        <span className="mx-auto flex size-14 items-center justify-center bg-status-verified text-white">
          <Check />
        </span>
        <p className="va-eyebrow mt-6">Kích hoạt tài khoản</p>
        <h1 className="va-heading-1 mt-3">Tài khoản đã sẵn sàng.</h1>
        <p className="mt-4 text-muted-foreground">
          Đây là trạng thái kích hoạt mô phỏng. Không có token thật được xử lý.
        </p>
        <Link href="/login" className="va-button-primary mt-8">
          Đăng nhập
        </Link>
      </section>
    </main>
  )
}
