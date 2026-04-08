import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function AuctionDetailPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Chi tiết tài sản đấu giá"
        subtitle="LOT DETAIL"
        description="Xem đầy đủ thông tin mô tả, hồ sơ pháp lý, ảnh thực địa và lịch sử phiên đấu của từng tài sản."
      />
      <SiteFooter />
    </>
  )
}
