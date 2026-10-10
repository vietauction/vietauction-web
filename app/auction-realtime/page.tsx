import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function AuctionRealtimePage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main className="va-container va-page-main min-h-screen">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.06em] text-muted-foreground">
                <span>Trang chủ</span>
                <span>›</span>
                <span>Đấu giá trực tiếp</span>
                <span>›</span>
                <span className="font-bold text-secondary">Lô #1284</span>
              </div>
              <h1 className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.04em] md:text-4xl">
                Bộ Đồ Thờ Men Lam Ngọc Họa Tiết Rồng Phượng Triều Nguyễn
              </h1>
            </div>

            <div className="grid h-[320px] gap-4 md:h-[360px] md:grid-cols-2 lg:h-[380px]">
              <div className="relative overflow-hidden bg-(--surface-container-low)">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpH_dS_eLFpDK7GV2a_4P-tzE1vuUpRhssNvr0SHHP_6X6mORGbxv6NfmxuaBS2cMCkMyQGK5qWMjjaSEj4pQw9w5FjUblUcGi14Iy_NFKUZkud5VoC7P3DkTJ43xDCbiR-sqDv0GQfAb5d1Yius1NpLedLTLv69dovoHho4YFN5kOaHlJuE87pIm-uPyUZw_p6lf6RqPDj-eXdQIrO2l6jEwWWCPDa3OE80IS8M4rQW9aKkoTCRzMvgq6xgLjpYQWJtzw68ayTxeY"
                  alt="Bộ đồ thờ men lam ngọc"
                  className="h-full w-full object-cover"
                />
                <div className="va-status absolute left-4 top-4 bg-status-live text-status-live-foreground">Trực tiếp</div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-primary p-8 text-center text-primary-foreground">
                  <span className="mb-3 text-xs uppercase tracking-widest text-(--on-primary-container)">Thời gian còn lại</span>
                  <p className="font-mono text-4xl font-semibold">
                    02 : <span className="text-(--secondary-container)">45</span>
                  </p>
                  <p className="mt-2 text-xs uppercase opacity-70">Phút : Giây</p>
                  <div className="mt-5 h-1 w-full overflow-hidden bg-white/10">
                    <div className="h-full w-2/3 bg-(--secondary-container)" />
                  </div>
                  <p className="mt-4 text-xs font-semibold text-[color:var(--status-live)]">Sắp kết thúc! Hãy đặt giá ngay.</p>
                </div>

                <div className="flex flex-1 flex-col justify-center bg-(--surface-container-high) p-8">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Giá hiện tại</span>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-semibold text-primary">125.000.000</span>
                    <span className="text-lg font-bold text-primary">₫</span>
                  </div>
                  <p className="mt-3 text-sm italic text-muted-foreground">
                    Người đấu giá: <span className="font-bold text-foreground">Nguyễn T. H***</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-(--surface-container-low) p-5">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="w-full flex-1">
                  <label htmlFor="next-bid-amount" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Số tiền đấu giá tiếp theo (VND)
                  </label>
                  <input
                    id="next-bid-amount"
                    className="va-field bg-(--surface-container-highest) font-mono text-lg font-semibold"
                    type="text"
                    defaultValue="130.000.000"
                  />
                </div>
                <button className="va-button-secondary w-full px-8 text-base md:w-56">
                  ĐẶT GIÁ NGAY
                </button>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {["+ 5.000.000 ₫", "+ 10.000.000 ₫", "+ 25.000.000 ₫", "+ 50.000.000 ₫"].map((step) => (
                  <button
                    key={step}
                    className="border border-border bg-background px-4 py-3 text-sm font-bold text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="mb-4 text-xl font-medium">Chi tiết tài sản</h3>
              <div className="grid gap-8 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                <p>
                  Sản phẩm là bộ đồ thờ tam sự bằng gốm sứ cao cấp, được chế tác thủ công tại làng nghề truyền thống
                  theo phong cách Triều Nguyễn.
                </p>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-border pb-1">
                    <span>Tình trạng:</span>
                    <span className="font-bold text-foreground">Xuất sắc</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-1">
                    <span>Niên đại:</span>
                    <span className="font-bold text-foreground">Cuối thế kỷ 19</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-1">
                    <span>Kích thước:</span>
                    <span className="font-bold text-foreground">Cao 45cm</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 flex max-h-[calc(100vh-120px)] h-full flex-col overflow-hidden bg-(--surface-container-low)">
              <div className="bg-primary p-6 text-primary-foreground">
                <h2 className="text-xl font-medium">Lịch sử đấu giá</h2>
                <p className="mt-1 text-xs text-(--on-primary-container)">Tổng số: 48 lượt trả giá</p>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto p-6">
                {[
                  ["Nguyễn T. H***", "Vừa xong", "125.000.000", true],
                  ["Lê Văn P***", "2 phút trước", "120.000.000", false],
                  ["Trần Thị M***", "5 phút trước", "115.000.000", false],
                  ["Hoàng Kim T***", "12 phút trước", "110.000.000", false],
                ].map(([name, time, bid, top]) => (
                  <div
                    key={`${name}-${time}`}
                    className={`flex gap-4 p-3 ${top ? "border-l-4 border-secondary bg-background" : "hover:bg-(--surface-container-high)"}`}
                  >
                    <div className="h-10 w-10 bg-(--surface-container-highest)" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className={`text-sm ${top ? "font-bold text-foreground" : "font-medium text-muted-foreground"}`}>{name}</span>
                        <span className="font-mono text-xs text-muted-foreground">{time}</span>
                      </div>
                      <p className={`mt-1 font-mono ${top ? "text-lg font-semibold text-secondary" : "font-medium text-foreground"}`}>{bid} ₫</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-border bg-(--surface-container-high) p-6">
                <button className="w-full text-xs font-bold uppercase tracking-widest text-secondary">Xem tất cả lượt giá</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
