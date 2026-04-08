import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Về chúng tôi"
        subtitle="VIETAUCTION"
        description="VietAuction là cổng thông tin đấu giá tài sản kiến trúc và bất động sản cao cấp, tập trung vào tính minh bạch và hiệu quả giao dịch."
      />
      <SiteFooter />
    </>
  )
}
