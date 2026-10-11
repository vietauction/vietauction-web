import { PageLoading } from "@/components/common/page-loading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function AuctionsLoading() {
  return (
    <div className="va-page">
      <SiteHeader />
      <PageLoading variant="catalogue" />
      <SiteFooter />
    </div>
  )
}
