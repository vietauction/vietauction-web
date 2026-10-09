import Image from "next/image"

type TemplatePageProps = {
  title: string
  subtitle: string
  description: string
}

export function TemplatePage({ title, subtitle, description }: TemplatePageProps) {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="relative overflow-hidden px-6 py-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="relative min-h-[340px] overflow-hidden bg-primary p-8 md:p-12">
            <Image
              src="/assets/image01.jpg"
              alt={title}
              fill
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-transparent" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--secondary-container)">{subtitle}</p>
              <h1 className="mt-4 font-heading text-4xl font-medium tracking-[-0.045em] text-white md:text-5xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-(--on-primary-container)">{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1320px] px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="bg-(--surface-container-low) p-6">
            <h2 className="font-heading text-xl font-bold text-primary">Thông tin nổi bật</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Nội dung trang đã được chuyển sang route Next.js tương ứng từ thư mục template.
            </p>
          </article>
          <article className="bg-(--surface-container-low) p-6">
            <h2 className="font-heading text-xl font-bold text-primary">Giao diện đồng bộ</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Trang sử dụng cùng hệ thống màu light/dark, typography và spacing chuẩn với toàn dự án.
            </p>
          </article>
          <article className="bg-(--surface-container-low) p-6">
            <h2 className="font-heading text-xl font-bold text-primary">Sẵn sàng mở rộng</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Bạn có thể tiếp tục thay thế block nội dung theo đúng dữ liệu thật mà không cần sửa cấu trúc route.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
