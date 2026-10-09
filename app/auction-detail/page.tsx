import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function AuctionDetailPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main className="va-container va-page-main">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/auction-list" className="transition-colors hover:text-secondary">
            Tài sản
          </Link>
          <span>›</span>
          <span>Đồ cổ & Sưu tầm</span>
          <span>›</span>
          <span className="font-semibold text-foreground">Tượng Phật Đồng Thế Kỷ 18</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <div className="group relative overflow-hidden bg-(--surface-container-low)">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG538raqsRxkz5QCy_0raBUpGcxBhpWRcmw4SpjvHTkTaJPiQ81KtKYeXcU_iwxycUrPWDGV_dtmBPgC0tjM-bBHV3hLJpAikEGUNxNJawH7urFIveBXwJjLHRuxy2FGnVQleS_Agd9CzzWXpHr1yfYUhn8OBpWKf-HXh2Uf3XrtlwVnO_LfvngtZYz8VWTRH3C0dD66kKiC41fSi7ADoYGEfmeI12FVuSYyhQjfUONXeEuckEp8RAQu6tVQL2xC3qlKsPmX-3_Cos"
                alt="Tượng phật đồng cổ"
                className="aspect-4/3 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-16/10"
              />
              <div className="absolute left-4 top-4">
                <span className="va-status bg-status-live text-status-live-foreground">ĐANG DIỄN RA</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBbNAb3l6DKNKtgfTjUb5SedRB_g7tdaxGsp8TKu6EbmXLwkUULCP2xtsV74YJ0jD9HViZQor1_BLNcmkZy2FA2S65zSqzh4lJjHBb5jA-AeEMaAba_dlmPuj5un_E6gMTxHyUe5aati9y2CI13SaxY9arTx0J9_TiCJX1basvJdnCKjAiTNbGKl22EvVYq9ZHR0zd4eYYaqdiXET3VeDiH8TjiKNzT4MlWQBKdQ2GTUIwraxIco1co_oDSJSuCArmoLmpStA8tl0Ng",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCxf9bDNyo9r_jm7WAcSse5SAGYGFP_ENmPHnIPjHB2w1c8KXbpSzLG2S5CaXrePQAm4sK3Dw0oN9cG4znoHQMXPVwJJ5UceNNZ1bv3BYPuKqKJ_ahhmojnsOnlAOuLzvRLz9geI0hW8d09JYAWHWcpo5q4_DnftD44p6EJ4KY9hgGp0m81odSdllU29erORnm0zhCea7XWmlVDIJD7DV2SWKjefd27Q9Iapplo4R8g4kddAz27xKw22bs84hL3UJEiwFs7BYvONbPc",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDiF2TZH4xk8U_RorI5Hz4flmnnkyDeMXVszAxHa1lPvMceFWfsPOAo5ipJQPggJpdgNCd_1g_n-cqBlrslySyfOyPZyUKAlkVVOjQSC70YfaJnUO5ljdbAIpW4S2Ve98dt98CvW6QMy-uXQSdAQrfJo1LV1U5okyC_CFP57fSj3j014FeFsPt-ihH9ZulG5nuIEZ2Qd6uKO9IObUoqCD3q_lLLkIobUjkMn3lfrgQeeadmS3W1qag4PSKihNoDh8dWiwC6Dy1tUgNm",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB7hLtghCeGJq8JlmBzsf3fjKNulM5yr7tyhHByp4TYZdynJAGix14qFlRthkIqqSP7wG5XahTQYMw3w3nwNMcYKAQ42xhG1G3gaK57Y32QAESPwjGs0llThFQ2_z6FZRT8z-uoHCDNg_us7eN7ss7RrTOWLjRiQnACKhMMPIJm1qRztcU32cvWMD9r8Rqdq7D0OvQBstGlAEhHLBtyoohdjoBDEqF-dfgqF-UwAhJnLl9ZLFzDc3ybiEut7IpkS-iJOcuQHasgOVbm",
              ].map((src, idx) => (
                <img key={src} src={src} alt={`Ảnh chi tiết ${idx + 1}`} className="aspect-4/3 w-full border border-border object-cover" />
              ))}
            </div>
          </div>

          <div className="sticky top-28 lg:col-span-5">
            <div className="va-card p-6 sm:p-8">
              <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-secondary">Lô số: #VN-10248</p>
              <h1 className="font-heading text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-primary sm:text-4xl">Tượng Phật Đồng Thế Kỷ 18 - Di sản nhà Lê</h1>

              <div className="mt-6 space-y-6">
                <div className="bg-(--surface-container-low) p-5">
                  <p className="text-sm text-muted-foreground">Giá cao nhất hiện tại</p>
                  <p className="mt-1 font-mono text-2xl font-semibold text-secondary sm:text-3xl">250.000.000 ₫</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Thời gian còn lại</p>
                    <p className="text-lg font-bold text-primary">02 : 14 : 55</p>
                  </div>
                  <div className="border-l-2 border-border pl-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Lượt đặt giá</p>
                    <p className="text-lg font-bold text-primary">18 lượt</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="va-button-secondary w-full text-base uppercase tracking-wide">Đăng ký tham gia</button>
                <button className="va-button-outline w-full text-base">
                  ĐẶT GIÁ TỐI ĐA
                </button>
              </div>
            </div>

            <div className="mt-6 bg-primary p-6 text-primary-foreground">
              <h3 className="text-lg font-bold">Quy định đấu giá</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--on-primary-container)">
                Tiền đặt trước: 50.000.000 ₫. Bước giá tối thiểu: 5.000.000 ₫. Phí đăng ký tham gia đấu giá: 500.000 ₫.
              </p>
              <button className="mt-4 text-sm font-bold text-(--secondary-container)">Xem chi tiết nội quy</button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-10 flex overflow-x-auto border-b border-border">
            <button className="border-b-4 border-secondary px-8 py-4 text-lg font-bold text-secondary">Mô tả chi tiết</button>
            <button className="px-8 py-4 text-lg font-medium text-muted-foreground">Lịch sử đặt giá</button>
            <button className="px-8 py-4 text-lg font-medium text-muted-foreground">Quy định đấu giá</button>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <section>
                <h3 className="mb-6 text-xl font-bold text-primary">Thông tin di sản</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="font-medium text-muted-foreground">Xuất xứ:</div>
                  <div className="font-bold">Việt Nam (Nhà Lê)</div>
                  <div className="font-medium text-muted-foreground">Chất liệu:</div>
                  <div className="font-bold">Đồng hun nguyên khối, dát vàng</div>
                  <div className="font-medium text-muted-foreground">Kích thước:</div>
                  <div className="font-bold">45cm x 28cm x 22cm</div>
                  <div className="font-medium text-muted-foreground">Trọng lượng:</div>
                  <div className="font-bold">12.5 kg</div>
                </div>
              </section>

              <section>
                <h3 className="mb-6 text-xl font-bold text-primary">Chi tiết tác phẩm</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Tác phẩm &quot;Tượng Phật Đồng Thế Kỷ 18&quot; là một trong những minh chứng hiếm hoi còn sót lại của
                  kỹ thuật đúc đồng đỉnh cao thời Lê Trung Hưng.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Lớp sơn son thếp vàng nguyên bản vẫn còn giữ được độ bóng mờ sang trọng. Đây là một báu vật tâm linh
                  và khoản đầu tư nghệ thuật bền vững.
                </p>
              </section>
            </div>

            <aside className="bg-(--surface-container-low) p-6">
              <h4 className="mb-4 text-lg font-bold text-primary">Lịch sử đấu giá gần đây</h4>
              <div className="space-y-4">
                {[
                  ["N*** T***", "14:02:10 - 24/05", "250.000.000 ₫", true],
                  ["P*** H***", "13:58:45 - 24/05", "245.000.000 ₫", false],
                  ["L*** A***", "13:55:02 - 24/05", "240.000.000 ₫", false],
                ].map(([name, time, price, top]) => (
                  <div key={`${name}-${time}`} className="flex items-center justify-between border-b border-border py-2">
                    <div>
                      <p className="font-bold text-primary">{name}</p>
                      <p className="text-xs text-muted-foreground">{time}</p>
                    </div>
                    <p className={top ? "font-mono font-semibold text-secondary" : "font-mono font-medium"}>{price}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
