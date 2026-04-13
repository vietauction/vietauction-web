import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

export default function LoginPage() {
  return (
      <div className="flex min-h-svh bg-background text-foreground">
        <section className="relative hidden overflow-hidden bg-primary lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApKy2HyuAA1aEnSaasz7Z_0gkvFVEHYoBC7z7yN_PbzRaQybX8mfu_PDM9YUiovcObTYpv4Id_0cCPt08VaCoZm37JeIKSRxnp55R5v3VaG34zg7dg21WR6kG6yB9679qh7Nj0CqbQ5TV4EDGJK12SzX7pkhvuYa45tLAOHW4UDLuR042kWoZjQz4FpxtOvrFseeqgXfODpPg0cI3snIXgPQB_AEpG7eQKkCz0B5aPgeDmZnA3RPZBJO1uTgnm8Anq_DELJyd-mFSG"
            alt="Vietnamese imperial heritage"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-br from-primary/95 via-(--primary-container)/80 to-primary/90" />
          <div className="relative z-10 max-w-xl p-16">
            <h1 className="font-heading text-5xl font-extrabold uppercase leading-tight text-primary-foreground">
              The <br />
              Sovereign <br />
              Curator
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-(--on-primary-container)">
              Khám phá và sở hữu những kiệt tác di sản, nghệ thuật Việt Nam qua hệ thống đấu giá trực tuyến uy tín và
              chuyên nghiệp hàng đầu.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-(--secondary-container)" />
              <span className="text-xs font-semibold uppercase tracking-widest text-(--secondary-container)">
                VietAuction Heritage
              </span>
            </div>
          </div>
        </section>

        <section className="flex w-full items-center justify-center bg-background p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary">
              <span>←</span>
              Về trang chủ
            </Link>

            <div className="mb-10">
              <h2 className="font-heading text-2xl font-bold text-primary">Chào mừng trở lại</h2>
              <p className="mt-2 text-muted-foreground">Đăng nhập để tiếp tục hành trình sưu tầm của bạn.</p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 border border-border bg-(--surface-container-low) px-4 py-3 transition-colors hover:bg-(--surface-container-high)">
                <span className="text-sm font-semibold text-primary">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 border border-border bg-(--surface-container-low) px-4 py-3 transition-colors hover:bg-(--surface-container-high)">
                <span className="text-sm font-semibold text-primary">Apple</span>
              </button>
            </div>

            <div className="relative flex items-center py-5">
              <div className="grow border-t border-border" />
              <span className="mx-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Hoặc đăng nhập bằng Email</span>
              <div className="grow border-t border-border" />
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 block text-sm font-semibold text-primary">
                  Địa chỉ Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ten@vidu.vn"
                  className="w-full bg-(--surface-container-low) px-5 py-4 placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <label htmlFor="password" className="block text-sm font-semibold text-primary">
                    Mật khẩu
                  </label>
                  <Link href="/contact" className="text-xs font-medium text-secondary hover:opacity-80">
                    Quên mật khẩu?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-(--surface-container-low) px-5 py-4 placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-secondary/40"
                />
              </div>
              <label className="ml-1 flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-border bg-(--surface-container-low) text-secondary" />
                <span className="ml-2 text-sm text-muted-foreground">Ghi nhớ đăng nhập</span>
              </label>

              <button type="submit" className="w-full bg-secondary py-4 font-heading text-lg font-bold text-secondary-foreground transition-opacity hover:opacity-90">
                Đăng nhập
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Chưa có tài khoản thành viên?
              <Link href="/regsiter" className="ml-1 font-bold text-secondary hover:underline">
                Tạo tài khoản mới
              </Link>
            </p>
          </div>
        </section>
      </div>
  )
}
