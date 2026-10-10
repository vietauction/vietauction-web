"use client";
import { login } from "@/services/auth.api";
import { useAuthStore } from "@/stores/auth.store";
import Link from "next/link"
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'Tên đăng nhập không được để trống'),
  email: z
    .string(),
    // .min(1, 'Email không được để trống')
    // .email('Email không hợp lệ'),

  password: z
    .string()
    // .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt'
    // )
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { setAccessToken } = useAuthStore();

    const router = useRouter();
    // làm việc với useForm
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<LoginSchema>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    });

  const handleLogin = async (data: LoginSchema) => {
    console.log("data", data);
    try {
      const res = await login({ username: data.username, email: data.email, password: data.password });

      if (res.status === 200) {
        setAccessToken(res.data.access_token);
        toast.success("Đăng nhập thành công");
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Đăng nhập thất bại");
    }
  };

  return (
      <div className="flex min-h-svh bg-background text-foreground">
        <section className="relative hidden overflow-hidden bg-[#181510] lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <Image
            src="/assets/pages/login.png"
            alt="Nhà sưu tầm quan sát tác phẩm sơn mài trong không gian trưng bày"
            fill
            priority
            sizes="50vw"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#181510]/95 via-[#181510]/65 to-[#181510]/25" />
          <div className="relative z-10 max-w-xl p-16">
            <p className="font-mono text-xs tracking-[0.13em] text-[#cba765]">NỀN TẢNG ĐẤU GIÁ TÀI SẢN</p>
            <h1 className="mt-5 font-heading text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-[#f5f1e9]">
              Giá trị được nhìn nhận.<br />
              Minh bạch được đặt lên đầu.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-[#d3ccc1]">
              Khám phá và sở hữu những kiệt tác di sản, nghệ thuật Việt Nam qua hệ thống đấu giá trực tuyến uy tín và
              chuyên nghiệp hàng đầu.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#cba765]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#cba765]">
                VietAuction
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
              <h2 className="font-heading text-3xl font-medium tracking-[-0.04em] text-primary">Chào mừng trở lại</h2>
              <p className="mt-2 text-muted-foreground">Đăng nhập để tiếp tục hành trình sưu tầm của bạn.</p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <button className="flex min-h-12 items-center justify-center gap-3 border border-border bg-(--surface-container-low) px-4 py-3 transition-colors hover:bg-(--surface-container-high)">
                <span className="text-sm font-semibold text-primary">Google</span>
              </button>
              <button className="flex min-h-12 items-center justify-center gap-3 border border-border bg-(--surface-container-low) px-4 py-3 transition-colors hover:bg-(--surface-container-high)">
                <span className="text-sm font-semibold text-primary">Apple</span>
              </button>
            </div>

            <div className="relative flex items-center py-5">
              <div className="grow border-t border-border" />
              <span className="mx-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Hoặc đăng nhập bằng Email</span>
              <div className="grow border-t border-border" />
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 block text-sm font-semibold text-primary">
                  Địa chỉ Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="ten@vidu.vn"
                  className="va-field px-5 py-4"
                />
                {errors.email && (
                  <p className='text-destructive text-sm'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="username" className="ml-1 block text-sm font-semibold text-primary">
                  Tên đăng nhập
                </label>
                <input
                  id="username"
                  type="text"
                  {...register("username")}
                  placeholder="Nguyen Van A"
                  className="va-field px-5 py-4"
                />
                {/* todo: error message */}
                {errors.username && (
                  <p className='text-destructive text-sm'>
                    {errors.username.message}
                  </p>
                )}
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
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="va-field px-5 py-4"
                />
                {/* todo: error message */}
                {errors.password && (
                  <p className='text-destructive text-sm'>
                    {errors.password.message}
                  </p>
                )}
              </div>
              <label className="ml-1 flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-border bg-(--surface-container-low) text-secondary" />
                <span className="ml-2 text-sm text-muted-foreground">Ghi nhớ đăng nhập</span>
              </label>

              <button type="submit" className="va-button-primary w-full text-base">
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
