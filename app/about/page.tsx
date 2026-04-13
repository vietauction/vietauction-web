import Image from "next/image"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden px-6 py-12 sm:py-16">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative min-h-[440px] overflow-hidden bg-primary p-8 lg:col-span-8 lg:p-12">
              <Image
                src="/assets/image01.jpg"
                alt="Không gian đấu giá nghệ thuật"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary via-(--primary)/80 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-(--secondary-container)">
                  About VietAuction
                </p>
                <h1 className="mt-5 font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                  Kiến tạo chuẩn mực đấu giá minh bạch tại Việt Nam
                </h1>
                <p className="mt-5 text-base leading-7 text-(--on-primary-container) sm:text-lg">
                  Chúng tôi kết nối nhà sưu tầm, nhà đầu tư và những tài sản giá trị cao bằng nền tảng công nghệ hiện
                  đại, quy trình giám tuyển chặt chẽ và đội ngũ chuyên gia dày dạn kinh nghiệm.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/auction-list"
                    className="bg-(--secondary-container) px-6 py-3 text-sm font-bold text-(--on-secondary-container) transition-colors hover:bg-secondary hover:text-white"
                  >
                    Khám phá đấu giá
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                  >
                    Liên hệ tư vấn
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-4">
              {[
                ["10+", "Năm kinh nghiệm trong giám tuyển tài sản"],
                ["30k+", "Người dùng đã đăng ký trên nền tảng"],
                ["99%", "Phiên đấu giá được xác thực hồ sơ"],
              ].map(([value, label]) => (
                <article key={label} className="bg-(--surface-container-high) p-6 sm:col-span-2">
                  <p className="font-heading text-3xl font-black text-primary">{value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Sứ mệnh</p>
              <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-primary">
                Bảo toàn giá trị thật của từng tài sản
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                VietAuction vận hành theo triết lý minh bạch toàn trình: công khai thông tin pháp lý, chuẩn hóa thẩm
                định giá và theo dõi lịch sử đặt giá theo thời gian thực để mọi thành viên yên tâm tham gia.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Chúng tôi không chỉ giúp giao dịch nhanh hơn mà còn nâng chuẩn chuyên nghiệp cho thị trường đấu giá
                trực tuyến Việt Nam.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                ["Minh bạch tuyệt đối", "Mỗi phiên đấu giá đều có nhật ký sự kiện rõ ràng và hệ thống kiểm chứng hồ sơ trước khi mở phiên."],
                ["Giám tuyển kỹ lưỡng", "Tài sản được kiểm tra bởi đội ngũ chuyên gia pháp lý, kỹ thuật và định giá độc lập."],
                ["Kết nối toàn quốc", "Mạng lưới đối tác trải dài nhiều tỉnh thành, giúp người mua tiếp cận tài sản chất lượng nhanh chóng."],
              ].map(([title, desc], index) => (
                <article
                  key={title}
                  className={`${index === 2 ? "bg-primary text-white" : "bg-(--surface-container-low)"} p-7`}
                >
                  <h3
                    className={`${index === 2 ? "text-white" : "text-primary"} font-heading text-2xl font-bold`}
                  >
                    {title}
                  </h3>
                  <p className={`mt-3 text-sm leading-7 ${index === 2 ? "text-white/75" : "text-muted-foreground"}`}>
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-(--surface-container-low) px-6 py-20">
          <div className="mx-auto max-w-screen-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">Hành trình</p>
            <h2 className="mt-4 font-heading text-4xl font-black tracking-tight text-primary">
              Lịch sử phát triển
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                ["2015", "Khởi đầu", "Thành lập trung tâm thẩm định và giám tuyển tại Hà Nội."],
                ["2018", "Số hóa", "Ra mắt nền tảng đấu giá trực tuyến phiên bản đầu tiên."],
                ["2021", "Mở rộng", "Liên kết ngân hàng và đối tác pháp lý cho tài sản giá trị cao."],
                ["Hiện tại", "Dẫn đầu", "Tiếp tục nâng chuẩn trải nghiệm đấu giá số trên toàn quốc."],
              ].map(([year, title, desc]) => (
                <article key={year} className="border border-border bg-background p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{year}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl px-6 py-24">
          <div className="bg-(--surface-container-high) p-8 sm:p-12">
            <h2 className="font-heading text-3xl font-black tracking-tight text-primary sm:text-4xl">
              Sẵn sàng đồng hành cùng VietAuction?
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Tham gia nền tảng để nhận thông báo phiên mới, cập nhật tài sản tiềm năng và kết nối trực tiếp với đội
              ngũ tư vấn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/regsiter"
                className="bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:opacity-90"
              >
                Tạo tài khoản
              </Link>
              <Link
                href="/contact"
                className="border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
