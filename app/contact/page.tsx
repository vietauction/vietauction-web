import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="va-page">
      <SiteHeader />
      <main className="va-container va-page-main">
        <header className="max-w-3xl">
          <p className="va-eyebrow">Hỗ trợ khách hàng</p>
          <h1 className="va-heading-1 mt-4">Chúng tôi sẵn sàng đồng hành cùng bạn.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Gửi câu hỏi về điều kiện tham gia, hồ sơ pháp lý hoặc quy trình thẩm định tài sản. Đội ngũ VietAuction sẽ phản hồi theo thông tin bạn để lại.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <section className="va-card p-6 sm:p-8 lg:col-span-7" aria-labelledby="contact-form-title">
            <h2 id="contact-form-title" className="va-heading-2 text-2xl">Gửi yêu cầu hỗ trợ</h2>
            <p className="mt-2 text-sm text-muted-foreground">Các trường có dấu * là bắt buộc.</p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-primary" htmlFor="contact-name">
                  <span>Họ và tên *</span>
                  <input id="contact-name" className="va-field" placeholder="Nguyễn Văn A" autoComplete="name" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-primary" htmlFor="contact-phone">
                  <span>Số điện thoại *</span>
                  <input id="contact-phone" className="va-field" type="tel" placeholder="090 123 4567" autoComplete="tel" />
                </label>
              </div>
              <label className="block space-y-2 text-sm font-semibold text-primary" htmlFor="contact-email">
                <span>Email *</span>
                <input id="contact-email" className="va-field" type="email" placeholder="ten@vidu.vn" autoComplete="email" />
              </label>
              <label className="block space-y-2 text-sm font-semibold text-primary" htmlFor="contact-topic">
                <span>Chủ đề cần hỗ trợ *</span>
                <select id="contact-topic" className="va-field">
                  <option>Quy trình tham gia đấu giá</option>
                  <option>Hồ sơ và điều kiện pháp lý</option>
                  <option>Gửi tài sản để thẩm định</option>
                  <option>Vấn đề khác</option>
                </select>
              </label>
              <label className="block space-y-2 text-sm font-semibold text-primary" htmlFor="contact-message">
                <span>Nội dung cần hỗ trợ *</span>
                <textarea id="contact-message" className="va-field min-h-32 resize-y" placeholder="Mô tả ngắn gọn câu hỏi hoặc nhu cầu của bạn." />
              </label>
              <button type="button" className="va-button-primary w-full sm:w-auto">Gửi yêu cầu</button>
            </form>
          </section>

          <aside className="space-y-5 lg:col-span-5">
            <section className="relative flex min-h-[480px] overflow-hidden bg-[#181510] p-6 text-[#f5f1e9] sm:p-8">
              <Image
                    src="/assets/pages/contact.webp"
                alt="Chuyên viên VietAuction tư vấn hồ sơ và nguồn gốc tài sản"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-b from-[#181510]/92 via-[#181510]/42 to-[#181510]/55" />
              <div className="relative z-10 max-w-sm">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.13em] text-[#cba765]">VietAuction Care</p>
                <h2 className="mt-3 font-heading text-3xl font-medium tracking-[-0.04em]">Thông tin rõ ràng, hỗ trợ đúng lúc.</h2>
                <p className="mt-4 text-sm leading-7 text-[#d3ccc1]">Chúng tôi hỗ trợ trước, trong và sau phiên đấu giá để bạn có thể đưa ra quyết định an tâm hơn.</p>
              </div>
            </section>
            <section className="va-card p-6">
              <h2 className="text-xl font-medium text-primary">Bạn có thể hỏi về</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>• Điều kiện tham gia và tiền đặt trước.</li>
                <li>• Hồ sơ pháp lý, nguồn gốc và thẩm định tài sản.</li>
                <li>• Theo dõi giá, kết quả và các bước sau phiên.</li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
