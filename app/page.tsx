import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

const featuredAuctions = [
  {
    category: "Nghệ thuật & đồ cổ",
    title: "Bình gốm sứ cổ triều Lê với họa tiết hoa sen",
    price: "850.000.000 ₫",
    status: "Sắp mở",
    timeLabel: "Bắt đầu sau",
    time: "05 : 09 : 10",
    image: "/assets/landing/products/1.jpg",
  },
  {
    category: "Trang sức tuyển chọn",
    title: "Bộ trang sức kim cương chế tác thủ công",
    price: "1.250.000.000 ₫",
    status: "Đang diễn ra",
    timeLabel: "Kết thúc sau",
    time: "00 : 45 : 12",
    image: "/assets/landing/products/4.jpg",
  },
  {
    category: "Tài sản sưu tầm",
    title: "Đồng hồ cơ phiên bản giới hạn từ Thụy Sĩ",
    price: "420.000.000 ₫",
    status: "Sắp mở",
    timeLabel: "Bắt đầu sau",
    time: "02 : 14 : 22",
    image: "/assets/landing/products/5.jpg",
  },
]

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

export default function HomePage() {
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
          <header className="dgs-nav">
            <Link
              className="dgs-brand"
              href="/"
              aria-label="VietAuction trang chủ"
            >
              VietAuction<span>.</span>
            </Link>
            <nav aria-label="Điều hướng chính">
              <a href="#phien-dau-gia">Phiên đấu giá</a>
              <a href="#quy-trinh">Quy trình</a>
              <Link href="/about">Về VietAuction</Link>
            </nav>
            <details className="dgs-mobile-nav">
              <summary>MENU</summary>
              <nav aria-label="Điều hướng trên thiết bị di động">
                <a href="#phien-dau-gia">Phiên đấu giá</a>
                <a href="#quy-trinh">Quy trình</a>
                <Link href="/about">Về VietAuction</Link>
                <Link href="/auction-list">Tất cả tài sản</Link>
              </nav>
            </details>
            <Link className="dgs-nav__account" href="/login">
              Đăng nhập
            </Link>
          </header>
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
                href="/auction-list"
              >
                Khám phá phiên đang diễn ra
              </Link>
              <Link
                className="dgs-button dgs-button--ghost"
                href="/sent-possestion"
              >
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
            <Link className="dgs-text-link" href="/auction-list">
              Xem tất cả phiên <span>→</span>
            </Link>
          </div>
          <div className="dgs-auction-grid">
            {featuredAuctions.map((auction) => (
              <article className="dgs-auction-card" key={auction.title}>
                <Link className="dgs-auction-card__image" href="/auction-list">
                  <img src={auction.image} alt={auction.title} />
                  <span
                    className={`dgs-auction-card__status${auction.status === "Đang diễn ra" ? "is-live" : ""}`}
                  >
                    {auction.status}
                  </span>
                </Link>
                <div className="dgs-auction-card__content">
                  <p className="dgs-auction-card__label">{auction.category}</p>
                  <h3>
                    <Link href="/auction-list">{auction.title}</Link>
                  </h3>
                  <div className="dgs-auction-card__meta">
                    <span>Giá khởi điểm</span>
                    <strong>{auction.price}</strong>
                  </div>
                  <div className="dgs-auction-card__countdown">
                    <span>{auction.timeLabel}</span>
                    <strong>{auction.time}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dgs-process" id="quy-trinh">
          <div className="dgs-process__intro">
            <p className="dgs-eyebrow">CÁCH THỨC HOẠT ĐỘNG</p>
            <h2>
              Một hành trình ngắn, rõ ràng và tập trung vào giá trị của tài sản.
            </h2>
            <Link className="dgs-text-link" href="/auction-list">
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
          <Link className="dgs-button dgs-button--dark" href="/sent-possestion">
            Gửi yêu cầu định giá
          </Link>
        </section>

        <section
          className="dgs-metrics"
          aria-label="Các chỉ số của VietAuction"
        >
          <p className="dgs-metrics__eyebrow">NỀN TẢNG ĐẤU GIÁ MINH BẠCH</p>
          <div className="dgs-metrics__bar">
            <article className="dgs-metrics__item">
              <div className="dgs-toggle" aria-hidden="true">
                <span>✓</span>
              </div>
              <h2>95%</h2>
              <p>
                người tham gia nhận thấy quy trình đấu giá{" "}
                <strong>rõ ràng và dễ theo dõi</strong>
              </p>
            </article>
            <article className="dgs-metrics__item">
              <div className="dgs-avatars" aria-hidden="true">
                <span>VA</span>
                <span>TD</span>
                <span>HN</span>
              </div>
              <h2>24/7</h2>
              <p>
                cập nhật trạng thái phiên và{" "}
                <strong>hỗ trợ người tham gia</strong> xuyên suốt
              </p>
            </article>
            <article className="dgs-metrics__item">
              <div className="dgs-avatars dgs-avatars--two" aria-hidden="true">
                <span>SG</span>
                <span>DN</span>
              </div>
              <h2>10K+</h2>
              <p>
                <strong>lượt quan tâm tài sản</strong> được ghi nhận trên nền
                tảng
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter variant="landing" />
    </>
  )
}
