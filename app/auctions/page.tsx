import type { Metadata } from "next"

import { AuctionListClient } from "./auction-list-client"
import { getAuctionCatalog, getAuctionCategories } from "@/lib/server/auction-catalog"

export const metadata: Metadata = {
  title: "Tài sản đấu giá",
  description:
    "Khám phá tài sản đang chờ mở, đang đấu giá và các phiên đã kết thúc trên VietAuction.",
  alternates: { canonical: "/auctions" },
}

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

function singleValue(value: string | string[] | undefined) {
  return typeof value === "string" ? value : undefined
}

export default async function AuctionsPage({ searchParams }: PageProps) {
  const query = await searchParams
  const page = Number(singleValue(query.page)) || 1
  const categoryId = Number(singleValue(query.categoryId)) || undefined
  const state = singleValue(query.state)
  const sort = singleValue(query.sort)

  const catalogueResult = await Promise.all([
      getAuctionCatalog({
        page,
        limit: 6,
        keyword: singleValue(query.q),
        categoryId,
        state:
          state === "WAITING" || state === "ONGOING" || state === "FINISHED" || state === "PAUSED"
            ? state
            : undefined,
        sort:
          sort === "ending-soon" || sort === "price-asc" || sort === "price-desc"
            ? sort
            : "newest",
      }),
      getAuctionCategories(),
    ])
    .then(([catalogue, categories]) => ({ catalogue, categories }))
    .catch(() => null)

  if (!catalogueResult) {
    return (
      <AuctionListClient
        auctions={[]}
        categories={[]}
        meta={{ page: 1, totalElements: 0, totalPages: 0 }}
        error="Dịch vụ catalogue đang tạm thời không phản hồi. Vui lòng thử lại sau."
      />
    )
  }

  return (
    <AuctionListClient
      auctions={catalogueResult.catalogue.auctions}
      categories={catalogueResult.categories}
      meta={catalogueResult.catalogue.meta}
    />
  )
}
