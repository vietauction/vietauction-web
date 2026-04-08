import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function SentPossestionPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Gửi tài sản"
        subtitle="SUBMIT LOT"
        description="Gửi hồ sơ tài sản của bạn để đội ngũ VietAuction thẩm định, tư vấn pháp lý và lên kế hoạch đưa vào phiên đấu phù hợp."
      />
      <SiteFooter />
    </>
  )
}
