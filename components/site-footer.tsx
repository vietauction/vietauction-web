import Link from "next/link"

type SiteFooterProps = {
  variant?: "default" | "landing"
}

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const isLanding = variant === "landing"

  return (
    <footer
      id="footer"
      className={`dgs-footer${isLanding ? "" : " mt-20"}`}
    >
      <div className="dgs-footer__grid">
        <div className="space-y-4">
          <p className="dgs-footer__brand">
            VietAuction<span>.</span>
          </p>
          <p className="dgs-footer__description">
            Cổng thông tin đấu giá tài sản minh bạch, giúp người mua và người sở
            hữu gặp nhau ở đúng giá trị.
          </p>
        </div>
        <div className="space-y-3">
          <p className="dgs-footer__eyebrow">
            Khám phá
          </p>
          <nav
            aria-label="Điều hướng chân trang"
            className="dgs-footer__links"
          >
            <Link href="/auction-list">Tài sản đang đấu giá</Link>
            <Link href="/auction-realtime">Theo dõi phiên trực tiếp</Link>
            <Link href="/about">Về VietAuction</Link>
          </nav>
        </div>
        <div className="dgs-footer__contact">
          <p className="dgs-footer__eyebrow">
            Liên hệ
          </p>
          <p>Đội ngũ hỗ trợ sẵn sàng tư vấn quy trình và hồ sơ tài sản.</p>
          <Link
            href="/contact"
            className="inline-flex min-h-11 w-fit items-center border-b border-[color:var(--dgs-gold)] text-[#f5f1e9] transition-colors hover:text-[color:var(--dgs-gold)]"
          >
            Liên hệ đội ngũ hỗ trợ
          </Link>
        </div>
      </div>
      <div className="dgs-footer__bottom">
        © 2026 VietAuction. Minh bạch tạo nên giá trị.
      </div>
    </footer>
  )
}
