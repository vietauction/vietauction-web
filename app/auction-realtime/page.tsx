import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function AuctionRealtimePage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Đấu giá thời gian thực"
        subtitle="LIVE AUCTION"
        description="Theo dõi phiên đấu giá trực tiếp, cập nhật mức giá mới nhất và thực hiện đặt thầu nhanh ngay trong phiên."
      />
      <SiteFooter />
    </>
  )
}
