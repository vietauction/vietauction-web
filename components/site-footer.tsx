import Link from "next/link"

export function SiteFooter() {
  return (
    <footer id="footer" className="mt-20 bg-[color:var(--surface-container-low)]">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="font-heading text-base font-bold text-[color:var(--primary)]">VIETAUCTION</p>
          <p className="max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            Cổng thông tin đấu giá tài sản chuyên nghiệp, tập trung vào bất động sản và kiến trúc giá trị cao.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--secondary)]">Thông tin hữu ích</p>
          <nav className="flex flex-col gap-2 text-sm text-[color:var(--muted-foreground)]">
            <Link href="/auction-list">Quy định đấu giá</Link>
            <Link href="/profile">Hồ sơ cá nhân</Link>
            <Link href="/auction-realtime">Hướng dẫn tham gia</Link>
          </nav>
        </div>
        <div className="space-y-3 text-sm text-[color:var(--muted-foreground)]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--secondary)]">Liên hệ</p>
          <p>Địa chỉ: Hà Nội, Việt Nam</p>
          <p>Hotline: 1900 xxxx</p>
          <p>Email: contact@vietauction.com.vn</p>
        </div>
      </div>
    </footer>
  )
}
