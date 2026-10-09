import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function RegsiterPage() {
  return (
      <div className="flex min-h-svh bg-background text-foreground">
        <section className="relative hidden overflow-hidden bg-primary md:flex md:w-2/5 md:items-end md:p-12 lg:w-1/2 lg:p-24">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByLtd8liJWZYj-cT55rs4nNew4mT9kPdhzSEtVpnUIWW6oBXMz2h9QL79gqoyOOs8ddid8fi7Jew195Q6V4hh8_ntDU4oSteYEzP773p75D_afIPtapauZbfOPajqNLuH42kxKi5KfY6hUwwakN1m0KbDZlvJXJn_qv4ZAb_RxROVAVbF0ghwjsuyPJuB_pcUE6BHfOjeklhBC6qZvjrC_a4zymQ7xk_C2kryRXXonRDYyE-hNXrKVVMS59-GuO9fNihEAds0gar7O"
            alt="Antique heritage"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/60 to-transparent" />
          <div className="relative z-10 max-w-lg">
            <h1 className="font-heading text-4xl font-extrabold uppercase leading-tight text-primary-foreground lg:text-5xl">
              The Sovereign <br /> Curator
            </h1>
            <p className="mt-6 text-base leading-relaxed text-(--on-primary-container) lg:text-lg">
              Chào mừng bạn đến với VietAuction. Nơi những giá trị di sản được tôn vinh và gìn giữ bởi những nhà sưu
              tầm tinh hoa nhất.
            </p>
          </div>
        </section>

        <section className="flex w-full items-center justify-center bg-background p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary">
              <span>←</span>
              Về trang chủ
            </Link>

            <div className="mb-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1 w-12 bg-secondary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Đăng ký thành viên</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-primary">Tạo tài khoản mới</h2>
              <p className="mt-2 text-sm text-muted-foreground">Điền thông tin chi tiết để bắt đầu hành trình sưu tầm.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Họ và tên</label>
                  <input className="w-full bg-(--surface-container-low) p-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40" placeholder="Nguyen Van A" />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input
                      type="email"
                      className="w-full bg-(--surface-container-low) p-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Số điện thoại</label>
                    <input
                      type="tel"
                      className="w-full bg-(--surface-container-low) p-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                      placeholder="+84 987 654 321"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mật khẩu</label>
                  <input
                    type="password"
                    className="w-full bg-(--surface-container-low) p-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    className="w-full bg-(--surface-container-low) p-4 text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 px-1">
                <input type="checkbox" className="mt-1 rounded border-border bg-(--surface-container-low) text-secondary" />
                <span className="text-xs leading-relaxed text-muted-foreground">
                  Tôi đồng ý với <span className="font-semibold text-secondary">Điều khoản dịch vụ</span> và{" "}
                  <span className="font-semibold text-secondary">Chính sách bảo mật</span> của VietAuction.
                </span>
              </label>

              <div className="space-y-4 pt-4">
                <button type="submit" className="w-full bg-secondary py-4 text-sm font-bold uppercase tracking-widest text-secondary-foreground">
                  Đăng ký ngay
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  Đã có tài khoản?
                  <Link href="/login" className="ml-1 font-bold text-primary hover:text-secondary">
                    Đăng nhập tại đây
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
  )
}
