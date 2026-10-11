import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const buyerSteps = [
  ["01", "Khám phá", "Lọc tài sản theo danh mục, trạng thái và thông tin công bố của từng lô."],
  ["02", "Đọc hồ sơ", "Xem hình ảnh, mô tả, giá khởi điểm và điều kiện tham gia trước khi quyết định."],
  ["03", "Tham gia", "Đăng ký theo điều kiện của phiên khi tính năng tham gia được mở cho lô tài sản."],
]

const sellerSteps = [
  ["01", "Trao đổi", "Liên hệ đội ngũ để thảo luận loại tài sản, hồ sơ sở hữu và mục tiêu bán."],
  ["02", "Giám tuyển", "Tài sản được kiểm tra thông tin, hiện trạng và phương án công bố phù hợp."],
  ["03", "Công bố", "Sau khi được phê duyệt, tài sản được giới thiệu theo quy trình của VietAuction."],
]

const faqs = [
  ["VietAuction đấu giá những loại tài sản nào?", "Nền tảng được định hướng cho nhiều loại tài sản có giá trị, từ trang sức, nghệ thuật và đồ sưu tầm đến bất động sản, phương tiện và các tài sản hợp pháp khác."],
  ["Tôi cần xem gì trước khi tham gia một phiên?", "Hãy đọc kỹ thông tin tài sản, hình ảnh, tình trạng phiên và các điều kiện được công bố trên trang chi tiết. Những thông tin chưa có từ hệ thống sẽ được ghi rõ là chưa công bố."],
  ["Tôi có thể gửi tài sản để đấu giá không?", "Có. Bạn có thể liên hệ đội ngũ VietAuction để được tư vấn trước về khả năng tiếp nhận, hồ sơ và quy trình giám tuyển."],
]

export const metadata: Metadata = {
  title: "Về VietAuction",
  description:
    "Tìm hiểu định hướng, quy trình tuyển chọn và cam kết minh bạch của VietAuction.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="va-page-focus-target">
        <section className="relative overflow-hidden px-6 py-12 sm:py-16">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="relative min-h-[440px] overflow-hidden bg-primary p-8 lg:col-span-8 lg:p-12">
              <Image
                src="/assets/pages/about.webp"
                alt="Không gian trưng bày tài sản nghệ thuật và di sản Việt Nam"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                priority
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/70 to-primary/15" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.28em] text-(--secondary-container) uppercase">
                  Về VietAuction
                </p>
                <h1 className="mt-5 font-heading text-4xl leading-[1.04] font-bold tracking-[-0.045em] text-white sm:text-5xl">
                  Kiến tạo chuẩn mực đấu giá minh bạch tại Việt Nam
                </h1>
                <p className="mt-5 text-base leading-7 text-primary-foreground/80 sm:text-lg">
                  Chúng tôi kết nối nhà sưu tầm, nhà đầu tư và những tài sản giá
                  trị cao bằng nền tảng công nghệ hiện đại, quy trình giám tuyển
                  chặt chẽ và đội ngũ chuyên gia dày dạn kinh nghiệm.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/auctions" className="va-button-secondary">
                    Khám phá đấu giá
                  </Link>
                  <Link
                    href="/contact"
                    className="va-button min-h-12 border border-white/50 text-white hover:bg-white/10"
                  >
                    Liên hệ tư vấn
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-4">
              {[
                ["01", "Minh bạch thông tin và điều kiện tham gia"],
                ["02", "Theo dõi diễn biến phiên theo thời gian thực"],
                ["03", "Hỗ trợ xuyên suốt trước và sau phiên"],
              ].map(([value, label]) => (
                <article
                  key={label}
                  className="bg-muted p-6 sm:col-span-2"
                >
                  <p className="font-numeric text-sm font-semibold text-secondary">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.24em] text-secondary uppercase">
                Sứ mệnh
              </p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] text-primary">
                Bảo toàn giá trị thật của từng tài sản
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                VietAuction vận hành theo triết lý minh bạch toàn trình: công
                khai thông tin pháp lý, chuẩn hóa thẩm định giá và theo dõi lịch
                sử đặt giá theo thời gian thực để mọi thành viên yên tâm tham
                gia.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Chúng tôi không chỉ giúp giao dịch nhanh hơn mà còn nâng chuẩn
                chuyên nghiệp cho thị trường đấu giá trực tuyến Việt Nam.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {[
                [
                  "Minh bạch tuyệt đối",
                  "Mỗi phiên đấu giá đều có nhật ký sự kiện rõ ràng và hệ thống kiểm chứng hồ sơ trước khi mở phiên.",
                ],
                [
                  "Giám tuyển kỹ lưỡng",
                  "Tài sản được kiểm tra bởi đội ngũ chuyên gia pháp lý, kỹ thuật và định giá độc lập.",
                ],
                [
                  "Kết nối toàn quốc",
                  "Mạng lưới đối tác trải dài nhiều tỉnh thành, giúp người mua tiếp cận tài sản chất lượng nhanh chóng.",
                ],
              ].map(([title, desc], index) => (
                <article
                  key={title}
                  className={`${index === 2 ? "bg-primary text-primary-foreground" : "bg-muted"} p-7`}
                >
                  <h3
                    className={`${index === 2 ? "text-primary-foreground" : "text-primary"} font-sans text-2xl font-bold`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-7 ${index === 2 ? "text-primary-foreground/75" : "text-muted-foreground"}`}
                  >
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted px-6 py-20">
          <div className="mx-auto max-w-[1320px]">
            <p className="text-xs font-bold tracking-[0.24em] text-secondary uppercase">
              Hành trình
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.04em] text-primary">
              Lịch sử phát triển
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                [
                  "2015",
                  "Khởi đầu",
                  "Thành lập trung tâm thẩm định và giám tuyển tại Hà Nội.",
                ],
                [
                  "2018",
                  "Số hóa",
                  "Ra mắt nền tảng đấu giá trực tuyến phiên bản đầu tiên.",
                ],
                [
                  "2021",
                  "Mở rộng",
                  "Liên kết ngân hàng và đối tác pháp lý cho tài sản giá trị cao.",
                ],
                [
                  "Hiện tại",
                  "Dẫn đầu",
                  "Tiếp tục nâng chuẩn trải nghiệm đấu giá số trên toàn quốc.",
                ],
              ].map(([year, title, desc]) => (
                <article
                  key={year}
                  className="border border-border bg-background p-6"
                >
                  <p className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                    {year}
                  </p>
                  <h3 className="mt-3 font-sans text-xl font-bold text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card px-6 py-20">
          <div className="mx-auto max-w-[1320px]">
            <p className="va-eyebrow">Quy trình</p>
            <div className="mt-4 max-w-3xl">
              <h2 className="va-heading-2">Bắt đầu với thông tin rõ ràng</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Mỗi hành trình có nhịp độ riêng. VietAuction ưu tiên công bố thông tin cần thiết để người mua và người sở hữu tài sản chủ động đưa ra quyết định.
              </p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <article className="border border-border p-6 sm:p-8">
                <p className="va-eyebrow">Dành cho người mua</p>
                <ol className="mt-6 divide-y divide-border">
                  {buyerSteps.map(([number, title, description]) => (
                    <li key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="font-numeric text-sm font-semibold text-secondary">{number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link href="/auctions" className="va-button-outline mt-8">Khám phá tài sản</Link>
              </article>
              <article className="border border-border p-6 sm:p-8">
                <p className="va-eyebrow">Dành cho người bán</p>
                <ol className="mt-6 divide-y divide-border">
                  {sellerSteps.map(([number, title, description]) => (
                    <li key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 first:pt-0 last:pb-0">
                      <span className="font-numeric text-sm font-semibold text-secondary">{number}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Link href="/contact" className="va-button-primary mt-8">Tư vấn gửi tài sản</Link>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="va-eyebrow">Câu hỏi thường gặp</p>
              <h2 className="va-heading-2 mt-4">Những điều cần biết trước khi bắt đầu</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">Nếu cần một trao đổi cụ thể hơn, đội ngũ VietAuction luôn sẵn sàng hỗ trợ.</p>
              <Link href="/contact" className="va-button-outline mt-7">Liên hệ đội ngũ</Link>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-primary marker:content-none">
                    {question}
                    <span aria-hidden="true" className="float-right text-secondary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-24">
          <div className="bg-muted p-8 sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.04em] text-primary sm:text-4xl">
              Sẵn sàng đồng hành cùng VietAuction?
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              Tham gia nền tảng để nhận thông báo phiên mới, cập nhật tài sản
              tiềm năng và kết nối trực tiếp với đội ngũ tư vấn.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/register" className="va-button-primary">
                Tạo tài khoản
              </Link>
              <Link href="/contact" className="va-button-outline">
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
