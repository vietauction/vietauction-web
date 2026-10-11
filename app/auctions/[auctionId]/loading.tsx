import { PageLoading } from "@/components/common/page-loading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function AuctionDetailLoading() {
  return (
    <div className="va-page">
      <SiteHeader />
      <PageLoading variant="detail" />
      <SiteFooter />
    </div>
  )
}
