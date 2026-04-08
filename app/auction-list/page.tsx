import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TemplatePage } from "@/components/template-page"

export default function AuctionListPage() {
  return (
    <>
      <SiteHeader />
      <TemplatePage
        title="Danh sách tài sản đấu giá"
        subtitle="AUCTION LIST"
        description="Khám phá toàn bộ tài sản đang mở đấu giá, lọc theo phân khúc giá trị và theo dõi biến động đặt giá theo thời gian thực."
      />
      <SiteFooter />
    </>
  )
}
