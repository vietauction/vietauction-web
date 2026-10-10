export type AssetCategory = "jewelry" | "art" | "real-estate" | "vehicle"

export type AuctionStatus =
  | "upcoming"
  | "registration-open"
  | "live"
  | "ended"
  | "cancelled"

export type AuctionImage = {
  src: string
  alt: string
}

export type Auction = {
  id: string
  slug: string
  lotNumber: string
  title: string
  category: AssetCategory
  categoryLabel: string
  status: AuctionStatus
  startPrice: number
  currentPrice?: number
  bidStep: number
  depositAmount: number
  registrationFee: number
  registrationOpenAt: string
  registrationCloseAt: string
  startsAt: string
  endsAt: string
  location: string
  organizer: string
  bidCount: number
  verified: boolean
  summary: string
  description: string
  provenance: string[]
  attributes: Array<{ label: string; value: string }>
  images: AuctionImage[]
}

export type AuctionListQuery = {
  keyword: string
  category: AssetCategory | "all"
  status: AuctionStatus | "all"
  verifiedOnly: boolean
  sort: "newest" | "ending-soon" | "price-asc" | "price-desc"
}
