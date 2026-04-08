import Link from "next/link"
import Image from "next/image"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <div className="min-h-svh bg-[color:var(--background)] text-[color:var(--foreground)]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-6 py-10 sm:py-12">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-[color:var(--primary)] p-7 lg:col-span-7 lg:p-10">
              <Image
                src="/assets/image01.jpg"
                alt="Công trình kiến trúc cổ điển"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary)] via-[color:var(--primary)]/80 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--secondary-container)]">
                  Tài sản di sản và kiến trúc
                </p>
                <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                  Đấu giá tài sản kiến trúc hàng đầu
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--on-primary-container)] sm:text-lg">
                  Sàn đấu giá trực tuyến minh bạch, uy tín nhất Việt Nam dành cho những bất động sản và công trình
                  kiến trúc giá trị cao.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="#dang-dien-ra"
                    className="bg-[color:var(--secondary-container)] px-6 py-3 text-sm font-bold text-[color:var(--on-secondary-container)] transition-colors hover:bg-[color:var(--secondary)] hover:text-white"
                  >
                    Xem tài sản đấu giá
                  </Link>
                  <Link
                    href="#sap-dien-ra"
                    className="border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                  >
                    Khám phá danh mục
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5">
              {["Penthouse Heritage West Lake", "Biệt thự Cổ Đông Dương"].map((title) => (
                <article key={title} className="bg-[color:var(--surface-container-high)] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--secondary)]">Live phiên mới</p>
                  <h3 className="mt-3 font-heading text-lg font-bold text-[color:var(--primary)]">{title}</h3>
                  <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">Giá trị lớn, hồ sơ đã xác minh.</p>
                </article>
              ))}
              <article className="sm:col-span-2 bg-[color:var(--primary-container)] p-5 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--secondary-container)]">
                  Bộ sưu tập nổi bật
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold">15+ tài sản được giám tuyển mỗi tuần</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--primary)] px-6 py-10">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["5k+", "Thành viên tham gia"],
              ["1.2k+", "Tài sản đấu giá"],
              ["98%", "Tỷ lệ thành công"],
              ["24/7", "Hỗ trợ kỹ thuật"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-heading text-3xl font-black text-[color:var(--secondary-container)]">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--on-primary-container)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="dang-dien-ra" className="mx-auto max-w-screen-2xl px-6 py-20">
          <h2 className="font-heading text-4xl font-black tracking-tight text-[color:var(--primary)]">Đang diễn ra</h2>
          <p className="mt-3 max-w-2xl text-[color:var(--muted-foreground)]">
            Khám phá các cơ hội đầu tư kiến trúc độc bản đang trong thời gian đấu giá chính thức.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Biệt thự Đồi Cảnh Quan", "12.500.000.000 ₫", "02 : 14 : 55"],
              ["Căn hộ Penthouse West Lake", "45.200.000.000 ₫", "10 : 05 : 12"],
              ["Biệt thự Cổ Đông Dương", "28.900.000.000 ₫", "01 : 42 : 18"],
            ].map(([title, price, time]) => (
              <article
                key={title}
                className="bg-[color:var(--surface-container-low)] p-7 transition-colors hover:bg-[color:var(--surface-container-high)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--secondary)]">
                  Live now
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[color:var(--primary)]">{title}</h3>
                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[color:var(--muted-foreground)]">Giá hiện tại:</span>
                    <span className="font-bold text-[color:var(--primary)]">{price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[color:var(--muted-foreground)]">Thời gian còn lại:</span>
                    <span className="font-semibold text-[color:var(--secondary)]">{time}</span>
                  </div>
                </div>
                <button className="mt-6 w-full bg-[color:var(--primary)] px-4 py-3 text-sm font-bold text-[color:var(--primary-foreground)]">
                  Tham gia đấu giá
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="sap-dien-ra" className="bg-[color:var(--surface-container-low)] px-6 py-20">
          <div className="mx-auto flex max-w-screen-2xl flex-col gap-10 lg:flex-row">
            <div className="lg:w-1/3">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--secondary)]">
                Coming soon
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-[color:var(--primary)]">
                Sắp diễn ra
              </h2>
              <p className="mt-5 text-[color:var(--muted-foreground)]">
                Đăng ký nhận thông báo để không bỏ lỡ những siêu phẩm kiến trúc sắp được ra mắt trên sàn đấu giá.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
              {["Creative Space Quận 1", "Resort & Spa Mũi Né"].map((name) => (
                <article key={name} className="bg-[color:var(--primary)] p-8 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">Mở đăng ký sớm</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold">{name}</h3>
                  <p className="mt-2 text-sm text-white/70">Giá khởi điểm cao cấp cho nhà đầu tư chiến lược.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="loi-ich" className="mx-auto max-w-screen-2xl px-6 py-24">
          <h2 className="font-heading text-center text-4xl font-black tracking-tight text-[color:var(--primary)]">
            Lợi ích khi đấu giá tại VietAuction
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              ["Minh bạch tuyệt đối", "Quy trình đấu giá được giám sát chặt chẽ và công khai mọi bước đi của phiên đấu."],
              ["Tài sản tuyển chọn", "Chúng tôi chỉ niêm yết những tài sản kiến trúc có giá trị di sản và tiềm năng đầu tư vượt trội."],
              ["Giao dịch nhanh chóng", "Nền tảng công nghệ cao giúp việc đặt thầu và hoàn tất thủ tục pháp lý trở nên đơn giản."],
            ].map(([title, desc]) => (
              <article key={title} className="bg-[color:var(--surface-container-low)] p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-[color:var(--primary)]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted-foreground)]">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
