import Link from "next/link"
import Image from "next/image"

export default function RegsiterPage() {
  return (
      <div className="flex min-h-svh bg-background text-foreground">
        <section className="relative hidden overflow-hidden bg-[#181510] md:flex md:w-2/5 md:items-end md:p-12 lg:w-1/2 lg:p-24">
          <Image
            src="/assets/pages/register.webp"
            alt="Nhà sưu tầm quan sát bình gốm trong phòng trưng bày VietAuction"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 40vw"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#181510]/95 via-[#181510]/50 to-[#181510]/10" />
          <div className="relative z-10 max-w-lg">
            <p className="font-mono text-xs tracking-[0.13em] text-[#cba765]">THÀNH VIÊN VIETAUCTION</p>
            <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[#f5f1e9] lg:text-5xl">
              Bắt đầu hành trình<br />sở hữu đúng giá trị.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#d3ccc1] lg:text-lg">
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
              <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] text-primary">Tạo tài khoản mới</h2>
              <p className="mt-2 text-sm text-muted-foreground">Điền thông tin chi tiết để bắt đầu hành trình sưu tầm.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Họ và tên</label>
                  <input className="va-field" placeholder="Nguyễn Văn A" />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
                    <input
                      type="email"
                      className="va-field"
                      placeholder="example@domain.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Số điện thoại</label>
                    <input
                      type="tel"
                      className="va-field"
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
                    className="va-field"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    className="va-field"
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
                <button type="submit" className="va-button-primary w-full">
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
