import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function RegsiterPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Đăng ký tài khoản"
        subtitle="REGISTER"
        description="Tạo tài khoản VietAuction để nhận quyền truy cập các phiên đấu giá, hồ sơ pháp lý chuyên sâu và công cụ theo dõi tài sản."
      />
      <SiteFooter />
    </>
  )
}
