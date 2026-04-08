import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Liên hệ"
        subtitle="HỖ TRỢ KHÁCH HÀNG"
        description="Đội ngũ VietAuction luôn sẵn sàng hỗ trợ bạn về hồ sơ pháp lý, quy trình đấu giá và các dịch vụ liên quan."
      />
      <SiteFooter />
    </>
  )
}
