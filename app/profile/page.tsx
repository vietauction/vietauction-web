import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-screen-2xl px-6 pb-16 pt-28 md:pt-5">
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-primary">Hồ sơ thành viên</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Quản lý thông tin cá nhân, lịch sử tham gia đấu giá và cài đặt bảo mật.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <div className="border border-border bg-(--surface-container-low) p-5">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJSkSNaZqSd8c23qGvzBhi5YmIZv78sR8qHZmnD12YST8V-UtHhfjd53qMSSShTA_l0xBoAClU-W9fT-RKh3urVP98tyMR7PPDNYn9iCO3XbDwmTE4zjYpdwVG_pzvLm5bTpDZCIGjPGRzkERqobQnhaXc-tGgIDjyxABXAkCcwQhPyldzzJXxXXDaFThwt9J7-LDpWC__Ezza6uWmyDErMDt-7lkt7xaeaKs6iV4JEOHIlo-DKOu4vg7UaaKO5fB9gnCSsyEkb3r-"
                  alt="Ảnh đại diện"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-primary">Nguyễn Văn A</p>
                  <p className="text-xs text-muted-foreground">Thành viên cao cấp</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-background p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Đang đấu giá</p>
                  <p className="text-lg font-bold text-primary">12</p>
                </div>
                <div className="bg-background p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Yêu thích</p>
                  <p className="text-lg font-bold text-primary">45</p>
                </div>
              </div>
            </div>

            <div className="bg-primary p-5 text-primary-foreground">
              <p className="mb-2 text-xs uppercase tracking-wider text-(--on-primary-container)">Số dư hiện tại</p>
              <p className="text-2xl font-black text-(--secondary-container)">2.450.000.000 ₫</p>
              <p className="mt-2 text-[11px] text-(--on-primary-container)">Hạn mức đấu giá: 5.000.000.000 ₫</p>
            </div>

            <div className="border border-border bg-(--surface-container-low) p-5">
              <h3 className="mb-3 text-sm font-bold text-primary">Điều hướng nhanh</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link href="/auction-list" className="text-muted-foreground transition-colors hover:text-primary">
                  Lịch sử đấu giá
                </Link>
                <Link href="/auction-realtime" className="text-muted-foreground transition-colors hover:text-primary">
                  Phiên đang diễn ra
                </Link>
                <Link href="/sent-possestion" className="text-muted-foreground transition-colors hover:text-primary">
                  Gửi tài sản đấu giá
                </Link>
              </div>
            </div>
          </aside>

          <section className="border border-border bg-(--surface-container-low) p-6 md:p-8 lg:col-span-8">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-primary">Cài đặt hồ sơ</h2>
                <p className="mt-1 text-sm text-muted-foreground">Cập nhật thông tin để nhận thông báo phiên đấu giá chính xác hơn.</p>
              </div>
              <button className="bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
                Lưu thay đổi
              </button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Họ và tên</label>
                  <input
                    type="text"
                    defaultValue="Nguyễn Văn A"
                    className="w-full border border-border bg-background px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                  <input
                    type="email"
                    defaultValue="vana.nguyen@sovereign.vn"
                    className="w-full border border-border bg-background px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Số điện thoại</label>
                  <input
                    type="text"
                    defaultValue="+84 90 123 4567"
                    className="w-full border border-border bg-background px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-secondary/40"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ngôn ngữ ưu tiên</label>
                  <select className="w-full border border-border bg-background px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-secondary/40">
                    <option>Tiếng Việt</option>
                    <option>English</option>
                    <option>Français</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Địa chỉ mặc định</label>
                <textarea
                  rows={3}
                  defaultValue="123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh, Việt Nam"
                  className="w-full border border-border bg-background px-4 py-3 text-foreground focus-visible:ring-2 focus-visible:ring-secondary/40"
                />
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-bold text-primary">Xác thực hai lớp (2FA)</p>
                  <p className="text-xs text-muted-foreground">Tăng cường bảo mật cho các giao dịch giá trị cao.</p>
                </div>
                <button type="button" aria-label="Bật 2FA" className="relative h-7 w-12 bg-secondary">
                  <span className="absolute right-1 top-1 h-5 w-5 bg-white" />
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
