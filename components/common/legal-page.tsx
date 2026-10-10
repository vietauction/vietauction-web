import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  sections: Array<{ title: string; body: string }>
}

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="va-page">
      <SiteHeader />
      <main>
        <header className="border-b border-border bg-card">
          <div className="va-container py-14 sm:py-20">
            <p className="va-eyebrow">{eyebrow}</p>
            <h1 className="va-heading-1 mt-4">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
              {intro}
            </p>
            <p className="mt-5 font-numeric text-xs text-muted-foreground">
              Bản giao diện mẫu · Cập nhật 10/10/2026
            </p>
          </div>
        </header>
        <article className="va-container max-w-4xl py-12 sm:py-16">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.title}>
                <p className="font-numeric text-xs text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
          <div className="mt-14 border border-border bg-muted p-5 text-sm text-muted-foreground">
            Nội dung này là bản mẫu UI và cần được bộ phận pháp lý/phụ trách
            nghiệp vụ phê duyệt trước khi phát hành chính thức.
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
