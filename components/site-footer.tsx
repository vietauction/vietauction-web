import Link from "next/link"

type SiteFooterProps = {
  variant?: "default" | "landing"
}

export function SiteFooter({ variant = "default" }: SiteFooterProps) {
  const isLanding = variant === "landing"

  return (
    <footer
      id="footer"
      className={
        isLanding
          ? "dgs-footer"
          : "mt-20 bg-[color:var(--surface-container-low)]"
      }
    >
      <div
        className={
          isLanding
            ? "dgs-footer__grid"
            : "mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3"
        }
      >
        <div className="space-y-4">
          <p
            className={
              isLanding
                ? "dgs-footer__brand"
                : "font-heading text-base font-bold text-[color:var(--primary)]"
            }
          >
            VIETAUCTION
          </p>
          <p
            className={
              isLanding
                ? "dgs-footer__description"
                : "max-w-xs text-sm leading-relaxed text-[color:var(--muted-foreground)]"
            }
          >
            Cổng thông tin đấu giá tài sản minh bạch, giúp người mua và người sở
            hữu gặp nhau ở đúng giá trị.
          </p>
        </div>
        <div className="space-y-3">
          <p
            className={
              isLanding
                ? "dgs-footer__eyebrow"
                : "text-xs font-bold tracking-[0.25em] text-[color:var(--secondary)] uppercase"
            }
          >
            Khám phá
          </p>
          <nav
            className={
              isLanding
                ? "dgs-footer__links"
                : "flex flex-col gap-2 text-sm text-[color:var(--muted-foreground)]"
            }
          >
            <Link href="/auction-list">Quy định đấu giá</Link>
            <Link href="/profile">Hồ sơ cá nhân</Link>
            <Link href="/auction-realtime">Hướng dẫn tham gia</Link>
          </nav>
        </div>
        <div
          className={
            isLanding
              ? "dgs-footer__contact"
              : "space-y-3 text-sm text-[color:var(--muted-foreground)]"
          }
        >
          <p
            className={
              isLanding
                ? "dgs-footer__eyebrow"
                : "text-xs font-bold tracking-[0.25em] text-[color:var(--secondary)] uppercase"
            }
          >
            Liên hệ
          </p>
          <p>Địa chỉ: Hà Nội, Việt Nam</p>
          <p>Hotline: 1900 xxxx</p>
          <p>Email: contact@vietauction.com.vn</p>
        </div>
      </div>
      {isLanding ? (
        <div className="dgs-footer__bottom">
          © 2026 VietAuction. Minh bạch tạo nên giá trị.
        </div>
      ) : null}
    </footer>
  )
}
