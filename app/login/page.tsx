import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Đăng nhập"
        subtitle="ACCOUNT ACCESS"
        description="Đăng nhập để tham gia đấu giá, theo dõi tài sản quan tâm và quản lý toàn bộ hoạt động tài khoản của bạn."
      />
      <SiteFooter />
    </>
  )
}
