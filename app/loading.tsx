import { PageLoading } from "@/components/common/page-loading"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Loading() {
  return (
    <div className="va-page">
      <SiteHeader />
      <PageLoading />
      <SiteFooter />
    </div>
  )
}
