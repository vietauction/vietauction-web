"use client"

import { PageError } from "@/components/common/page-error"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="va-page">
      <SiteHeader />
      <PageError reset={reset} />
      <SiteFooter />
    </div>
  )
}
