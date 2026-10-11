import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { AuctionCountdown } from "@/components/auction/auction-countdown"
import { getAuctionStatusLabel } from "@/components/auction/auction-status-badge"
import { formatMoney } from "@/lib/format"
import { getAuctionCatalog } from "@/lib/server/auction-catalog"
import type { Auction } from "@/types/auction"

const steps = [
  [
    "01",
    "Khám phá",
    "Xem tài sản, hồ sơ và điều kiện tham gia trước khi đặt giá.",
  ],
  ["02", "Đăng ký", "Hoàn tất đăng ký để sẵn sàng tham gia phiên phù hợp."],
  [
    "03",
    "Đặt giá",
    "Theo dõi nhịp phiên và đưa ra mức giá của bạn khi thời điểm đến.",
  ],
]

export default async function HomePage() {
  let featuredAuctions: Auction[] = []
  try {
    featuredAuctions = (await getAuctionCatalog({ limit: 3 })).auctions
  } catch {
    featuredAuctions = []
  }

  return (
    <>
      <main className="dgs-landing">
        <section className="dgs-hero">
          <video
            className="dgs-hero__media"
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/landing/hero-poster.jpg"
          >
            <source src="/assets/landing/hero.mp4" type="video/mp4" />
          </video>
          <div className="dgs-hero__veil" aria-hidden="true" />
          <SiteHeader variant="overlay" />
          <div className="dgs-hero__content">
            <p className="dgs-eyebrow">NỀN TẢNG ĐẤU GIÁ TÀI SẢN</p>
            <h1>
              Từng tài sản giá trị
              <br />
              đều có khoảnh khắc tỏa sáng.
            </h1>
            <p className="dgs-hero__lede">
              Khám phá các phiên đấu giá được tuyển chọn, theo dõi minh bạch và
              đặt giá khi bạn đã sẵn sàng.
            </p>
            <div className="dgs-hero__actions">
              <Link
                className="dgs-button dgs-button--primary"
                href="/auctions?state=ONGOING"
              >
                Khám phá phiên đang diễn ra
              </Link>
              <Link className="dgs-button dgs-button--ghost" href="/sell">
                Gửi tài sản đấu giá
              </Link>
            </div>
          </div>
          <a className="dgs-hero__scroll" href="#phien-dau-gia">
            CUỘN ĐỂ KHÁM PHÁ <span>↓</span>
          </a>
        </section>

        <section className="dgs-confidence" aria-label="Cam kết dịch vụ">
          <div>
            <strong>01</strong>
            <span>Thông tin tài sản rõ ràng</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Theo dõi phiên theo thời gian thực</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Hỗ trợ trong suốt quá trình tham gia</span>
          </div>
        </section>

        <section className="dgs-section" id="phien-dau-gia">
          <div className="dgs-section__heading">
            <div>
              <p className="dgs-eyebrow">PHIÊN ĐƯỢC TUYỂN CHỌN</p>
              <h2>Đặt giá cho điều bạn thật sự muốn sở hữu.</h2>
            </div>
            <Link className="dgs-text-link" href="/auctions">
              Xem tất cả phiên <span>→</span>
            </Link>
          </div>
          {featuredAuctions.length ? (
            <div className="dgs-auction-grid">
              {featuredAuctions.map((auction, index) => (
              <article className="dgs-auction-card" key={auction.id}>
                <Link
                  className="dgs-auction-card__image"
                  href={`/auctions/${auction.id}`}
                >
                  <Image
                    src={auction.images[0].src}
                    alt={auction.images[0].alt}
                    fill
                    priority={index < 3}
                    sizes="(min-width: 900px) 33vw, 100vw"
                  />
                  <span
                    className={`dgs-auction-card__status${auction.status === "live" ? "is-live" : ""}`}
                  >
                    {getAuctionStatusLabel(auction.status)}
                  </span>
                </Link>
                <div className="dgs-auction-card__content">
                  <p className="dgs-auction-card__label">
                    {auction.categoryLabel}
                  </p>
                  <h3>
                    <Link href={`/auctions/${auction.id}`}>
                      {auction.title}
                    </Link>
                  </h3>
                  <div className="dgs-auction-card__meta">
                    <span>Giá khởi điểm</span>
                    <strong className="font-price">
                      {formatMoney(auction.startPrice)}
                    </strong>
                  </div>
                  <div className="dgs-auction-card__countdown">
                    <span>Kết thúc sau</span>
                    <AuctionCountdown endsAt={auction.endsAt} compact />
                  </div>
                </div>
              </article>
              ))}
            </div>
          ) : (
            <div className="dgs-auction-grid">
              <p className="dgs-hero__lede">
                Catalogue đang được cập nhật. Vui lòng xem danh sách tài sản để thử lại.
              </p>
            </div>
          )}
        </section>

        <section className="dgs-process" id="quy-trinh">
          <div className="dgs-process__intro">
            <p className="dgs-eyebrow">CÁCH THỨC HOẠT ĐỘNG</p>
            <h2>
              Một hành trình ngắn, rõ ràng và tập trung vào giá trị của tài sản.
            </h2>
            <Link className="dgs-text-link" href="/auctions">
              Bắt đầu khám phá <span>→</span>
            </Link>
          </div>
          <ol>
            {steps.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="dgs-seller">
          <p className="dgs-eyebrow">DÀNH CHO NGƯỜI SỞ HỮU</p>
          <h2>Đưa tài sản của bạn đến với người trân trọng giá trị của nó.</h2>
          <Link className="dgs-button dgs-button--dark" href="/sell">
            Gửi yêu cầu định giá
          </Link>
        </section>

        <section className="dgs-metrics" aria-label="Cam kết minh bạch">
          <p className="dgs-metrics__eyebrow">NỀN TẢNG ĐẤU GIÁ MINH BẠCH</p>
          <div className="dgs-metrics__bar">
            <article className="dgs-metrics__item">
              <div className="dgs-toggle" aria-hidden="true">
                <span>✓</span>
              </div>
              <h2>Hồ sơ rõ ràng</h2>
              <p>
                Thông tin chính, điều kiện tham gia và trạng thái phiên được
                trình bày tại một nơi.
              </p>
            </article>
            <article className="dgs-metrics__item">
              <div className="dgs-toggle" aria-hidden="true">
                <span>✓</span>
              </div>
              <h2>Quy trình nhất quán</h2>
              <p>
                Đăng ký, theo dõi và đặt giá dùng chung một hệ thống trạng thái
                dễ hiểu.
              </p>
            </article>
            <article className="dgs-metrics__item">
              <div className="dgs-toggle" aria-hidden="true">
                <span>✓</span>
              </div>
              <h2>Hỗ trợ đúng lúc</h2>
              <p>
                Đường dẫn hỗ trợ và nội dung hướng dẫn luôn có mặt ở các bước
                quan trọng.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter variant="landing" />
    </>
  )
}
