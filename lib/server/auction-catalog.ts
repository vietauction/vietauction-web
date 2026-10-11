import "server-only"

import type { AssetCategory, Auction, AuctionImage, AuctionStatus } from "@/types/auction"

import {
  BackendRequestError,
  backendRequestEnvelope,
  type BackendPageMeta,
} from "./backend-client"

type BackendAuctionState =
  | "WAITING"
  | "ONGOING"
  | "FINISHED"
  | "PAUSED"
  | "DELETED"

type BackendAuction = {
  id: number
  code: string
  name: string
  state: BackendAuctionState
  startDate: string
  endDate: string
  startPrice: number | string
  currentPrice?: number | string | null
  depositPrice?: number | string | null
  stepPrice?: number | string | null
  bidCount: number
  product?: {
    id: number
    name: string
    description?: string | null
    brand?: string | null
    material?: string | null
    weight?: number | null
    categoryId?: number | null
    categoryName?: string | null
    imageUrls?: string[]
  } | null
}

export type AuctionCategory = {
  id: number
  name: string
}

export type AuctionCatalogResult = {
  auctions: Auction[]
  meta: BackendPageMeta
}

export type AuctionCatalogQuery = {
  page?: number
  limit?: number
  keyword?: string
  state?: BackendAuctionState
  categoryId?: number
  sort?: "newest" | "ending-soon" | "price-asc" | "price-desc"
}

const categoryFallbackImage: Record<AssetCategory, AuctionImage> = {
  jewelry: {
    src: "/assets/landing/products/1.jpg",
    alt: "Tài sản trang sức được trưng bày",
  },
  art: {
    src: "/assets/catalog/art-antique-bronze-buddha.png",
    alt: "Tác phẩm nghệ thuật và đồ cổ được trưng bày",
  },
  "real-estate": {
    src: "/assets/catalog/real-estate-riverside.png",
    alt: "Bất động sản được công bố đấu giá",
  },
  vehicle: {
    src: "/assets/catalog/vehicle-luxury-suv.png",
    alt: "Phương tiện được công bố đấu giá",
  },
}

const legacyJewelryImagePaths = new Set([
  "/assets/landing/products/1.jpg",
  "/assets/landing/products/4.jpg",
  "/assets/landing/products/5.jpg",
])

function numberValue(value: number | string | null | undefined) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function toAssetCategory(categoryName?: string | null): AssetCategory {
  const normalized = categoryName?.toLocaleLowerCase("vi") ?? ""
  if (normalized.includes("nghệ thuật") || normalized.includes("đồ cổ")) return "art"
  if (normalized.includes("bất động sản")) return "real-estate"
  if (normalized.includes("phương tiện") || normalized.includes("vận tải")) return "vehicle"
  return "jewelry"
}

function toAuctionStatus(state: BackendAuctionState): AuctionStatus {
  if (state === "ONGOING") return "live"
  if (state === "FINISHED") return "ended"
  if (state === "PAUSED") return "paused"
  if (state === "DELETED") return "cancelled"
  return "upcoming"
}

function toImages(auction: BackendAuction, category: AssetCategory): AuctionImage[] {
  const urls = auction.product?.imageUrls?.filter((url) => url.startsWith("/")) ?? []
  const alt = auction.product?.name ?? auction.name
  const hasOnlyLegacyJewelryImages =
    category !== "jewelry" &&
    urls.length > 0 &&
    urls.every((url) => legacyJewelryImagePaths.has(url))

  // The initial seeded catalogue uses jewellery placeholders for every category.
  // Preserve real backend images, but avoid presenting a ring as a vehicle or property.
  if (!urls.length || hasOnlyLegacyJewelryImages) {
    return [{ ...categoryFallbackImage[category], alt }]
  }

  return urls.map((src, index) => ({
    src,
    alt: index === 0 ? alt : `Góc nhìn ${index + 1} của ${alt}`,
  }))
}

function toAuction(auction: BackendAuction): Auction {
  const category = toAssetCategory(auction.product?.categoryName)
  const attributes = [
    { label: "Mã lô", value: auction.code },
    auction.product?.categoryName
      ? { label: "Danh mục", value: auction.product.categoryName }
      : null,
    auction.product?.brand ? { label: "Thương hiệu", value: auction.product.brand } : null,
    auction.product?.material ? { label: "Chất liệu", value: auction.product.material } : null,
    auction.product?.weight
      ? { label: "Trọng lượng", value: `${auction.product.weight} g` }
      : null,
  ].filter((item): item is { label: string; value: string } => item !== null)

  return {
    id: String(auction.id),
    slug: String(auction.id),
    lotNumber: auction.code,
    title: auction.product?.name ?? auction.name,
    category,
    categoryLabel: auction.product?.categoryName ?? "Tài sản đấu giá",
    status: toAuctionStatus(auction.state),
    startPrice: numberValue(auction.startPrice),
    currentPrice: auction.currentPrice == null ? undefined : numberValue(auction.currentPrice),
    bidStep: numberValue(auction.stepPrice),
    depositAmount:
      auction.depositPrice == null ? undefined : numberValue(auction.depositPrice),
    registrationFee: undefined,
    registrationOpenAt: undefined,
    registrationCloseAt: undefined,
    startsAt: auction.startDate,
    endsAt: auction.endDate,
    location: undefined,
    organizer: undefined,
    bidCount: auction.bidCount,
    verified: false,
    summary:
      auction.product?.description ?? "Thông tin mô tả đang được ban tổ chức cập nhật.",
    description:
      auction.product?.description ?? "Thông tin mô tả đang được ban tổ chức cập nhật.",
    provenance: [],
    attributes,
    images: toImages(auction, category),
  }
}

function toQueryString(query: AuctionCatalogQuery) {
  const params = new URLSearchParams()
  if (query.page) params.set("page", String(query.page))
  if (query.limit) params.set("limit", String(query.limit))
  if (query.keyword) params.set("keyword", query.keyword)
  if (query.state) params.set("state", query.state)
  if (query.categoryId) params.set("categoryId", String(query.categoryId))
  if (query.sort) params.set("sort", query.sort)
  return params.toString()
}

export async function getAuctionCatalog(query: AuctionCatalogQuery = {}) {
  const queryString = toQueryString(query)
  const response = await backendRequestEnvelope<BackendAuction[]>(
    `/api/v1/auctions${queryString ? `?${queryString}` : ""}`
  )

  return {
    auctions: response.data.map(toAuction),
    meta: response.meta ?? {
      page: 1,
      size: response.data.length,
      totalElements: response.data.length,
      totalPages: 1,
      last: true,
    },
  } satisfies AuctionCatalogResult
}

export async function getAuctionCategories() {
  return backendRequestEnvelope<AuctionCategory[]>("/api/v1/product-categories").then(
    (response) => response.data
  )
}

export async function getAuctionById(id: string) {
  if (!/^\d+$/.test(id)) return null

  try {
    const response = await backendRequestEnvelope<BackendAuction>(`/api/v1/auctions/${id}`)
    return toAuction(response.data)
  } catch (error) {
    if (error instanceof BackendRequestError && error.status === 404) return null
    throw error
  }
}
