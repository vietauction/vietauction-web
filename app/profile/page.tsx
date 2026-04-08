import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function ProfilePage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Thông tin cá nhân"
        subtitle="HỒ SƠ THÀNH VIÊN"
        description="Quản lý thông tin tài khoản, lịch sử đấu giá, tài sản theo dõi và trạng thái xác minh hồ sơ của bạn."
      />
      <SiteFooter />
    </>
  )
}
