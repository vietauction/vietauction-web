import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function SentPossestionPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main className="px-6 pb-20 pt-24">
        <div className="mx-auto max-w-4xl">
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-black tracking-tight text-primary md:text-4xl">Gửi tài sản đấu giá</h1>
            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground">
              VietAuction là nơi kết nối những kiệt tác trang sức và tài sản quý hiếm với các nhà sưu tầm đẳng cấp toàn cầu.
            </p>
          </header>

          <div className="mb-12">
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 top-1/2 z-0 h-0.5 w-full -translate-y-1/2 bg-border" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
                  1
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Thông tin</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">2</div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Đặc điểm</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">3</div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Hình ảnh</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">4</div>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Liên hệ</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            <div className="rounded-xl bg-card p-8 shadow-sm md:col-span-8">
              <form className="space-y-8">
                <section>
                  <h2 className="mb-6 flex items-center gap-2 text-lg font-bold text-primary">
                    <span className="material-symbols-outlined text-secondary">info</span>
                    Thông tin cơ bản
                  </h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <label className="block text-sm font-semibold text-foreground" htmlFor="product_name">
                        Tên tài sản / Trang sức
                      </label>
                      <input
                        id="product_name"
                        type="text"
                        placeholder="VD: Nhẫn Kim cương Fancy Yellow 5 Carat"
                        className="w-full rounded-lg border border-border bg-background p-4 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <label className="block text-sm font-semibold text-foreground" htmlFor="category">
                          Loại hình tài sản
                        </label>
                        <select
                          id="category"
                          className="w-full rounded-lg border border-border bg-background p-4 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                        >
                          <option>Trang sức &amp; Đá quý</option>
                          <option>Đồng hồ cao cấp</option>
                          <option>Tác phẩm Nghệ thuật</option>
                          <option>Đồ cổ &amp; Di sản</option>
                        </select>
                      </div>
                      <div className="space-y-4">
                        <label className="block text-sm font-semibold text-foreground" htmlFor="brand">
                          Thương hiệu / Xuất xứ
                        </label>
                        <input
                          id="brand"
                          type="text"
                          placeholder="VD: Cartier, Patek Philippe..."
                          className="w-full rounded-lg border border-border bg-background p-4 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex items-center justify-between border-t border-border pt-8">
                  <button type="button" className="px-6 py-3 text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                    Hủy bỏ
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg bg-secondary px-10 py-3 font-bold text-secondary-foreground shadow-xl shadow-secondary/20 transition-transform hover:scale-[1.02]"
                  >
                    Tiếp theo
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>

            <aside className="space-y-6 md:col-span-4">
              <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-primary-foreground">
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-bold">Quy trình thẩm định</h3>
                  <p className="text-sm leading-relaxed opacity-80">
                    Chúng tôi cam kết bảo mật và thẩm định chính xác giá trị tài sản trong vòng 48h làm việc.
                  </p>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 rotate-12 text-7xl opacity-10">verified</span>
              </div>

              <div className="rounded-xl bg-muted p-6">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-secondary">Lưu ý quan trọng</h4>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-lg text-amber-600">check_circle</span>
                    <span>Chỉ nhận tài sản có nguồn gốc rõ ràng.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-lg text-amber-600">check_circle</span>
                    <span>Ưu tiên sản phẩm có giấy kiểm định quốc tế (GIA, IGI, v.v.).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-lg text-amber-600">check_circle</span>
                    <span>Hình ảnh tải lên cần rõ nét, đa góc cạnh.</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <section className="mx-auto max-w-screen-2xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative aspect-4/5 overflow-hidden rounded-xl bg-muted">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsoGhpu86BDkxXJIcNRCUTygfxRaSGiYeZItMyEvJ44k7dcI7gpD6DDCD5Wm_n1RG0eWbNymXaP5xycS0Pn8iT7bQzaUuMZJgGdI-NBMpvDQLNIpxRF7oafyHp0wUlsYaWv9aD5FE24Kd4KLqZ-14ZdmlG0IWYAcbqfTqduz1nmTZKxW2y68RcYWS7fXBnU4nZdRUViLIgxabvaPP3kN6MzKDvA_dLB0HzGglDFH1qjnGaBoO-ZStrWpCzi5kZpBGohsscY3DoZIUm"
              alt="Nhẫn kim cương vàng với ánh sáng studio"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/80 to-transparent p-6">
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Gợi ý hình ảnh</span>
              <h4 className="font-bold text-primary-foreground">Chụp cận cảnh chi tiết</h4>
            </div>
          </div>

          <div className="group relative aspect-4/5 overflow-hidden rounded-xl bg-muted">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh5NzC2QHioMpJ18KDT6xdBtcI0P33PXGXdm3eGK6rSh66yPfeoBW1wRDg_hu0GhSVVFOUnItW8vvD8PLH_8L-17tkTj5On1iJxAiWNZ4JJmsm-pnYIkjb0V3ZS7PtYm27nA3d2n-sVNRHss946z0nhJWD1pvUKE5gyL-lnPQ_6i8NiE0COfFCEY21ar6seZLEFM36vxlLsQPDln88w-BVpS8CnagZsbdJFTM29OsT-CnArnKXkNGTFsEPtO6nhf9w6VRdM9ueplC6"
              alt="Đồng hồ cao cấp đặt trên đế gỗ"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/80 to-transparent p-6">
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Gợi ý hình ảnh</span>
              <h4 className="font-bold text-primary-foreground">Chụp cùng phụ kiện gốc</h4>
            </div>
          </div>

          <div className="group relative aspect-4/5 overflow-hidden rounded-xl bg-muted lg:hidden xl:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTGMiiKlXbvKLWuGXAOy89pcIAF0AsiEOYsO4mUNhCtJDZx3plukoKpRf7UsPk0dMxwXv_WLGlegwttqAoBt1VpvEL5ORawBRgshFZ0GnDnx63wH3n5TuwB8SIlPkuvrHLbcqRw64Oa0LGrrDuyiVQ9bG4AWeOvqVIkYCpf3TXrR0T7S-nErVIQFJBPv9IVo2y2X6rV3ohd9fGEfX4YmC3JtiZ7w9OULWmAfFWaV6xrJUbWibf1Il0aBZUB2Qdtp3SX216QOtnfeJx"
              alt="Dây chuyền ruby với kim cương trên nền nhung"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-primary/80 to-transparent p-6">
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Gợi ý hình ảnh</span>
              <h4 className="font-bold text-primary-foreground">Góc nghiêng và mặt sau</h4>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
