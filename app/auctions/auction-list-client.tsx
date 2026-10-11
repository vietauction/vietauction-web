"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter, Search, SlidersHorizontal, X } from "lucide-react"

import { AuctionCard } from "@/components/auction/auction-card"
import { StateNotice } from "@/components/common/state-notice"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import type { Auction } from "@/types/auction"

type CatalogProps = {
  auctions: Auction[]
  categories: Array<{ id: number; name: string }>
  meta: { page: number; totalElements: number; totalPages: number }
  error?: string
}

const statuses = [
  { value: "all", label: "Mọi trạng thái" },
  { value: "WAITING", label: "Sắp mở" },
  { value: "ONGOING", label: "Đang diễn ra" },
  { value: "FINISHED", label: "Đã kết thúc" },
  { value: "PAUSED", label: "Tạm dừng" },
]

export function AuctionListClient({ auctions, categories, meta, error }: CatalogProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (!mobileFiltersOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileFiltersOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [mobileFiltersOpen])

  const keyword = searchParams.get("q") ?? ""
  const categoryId = searchParams.get("categoryId") ?? "all"
  const state = searchParams.get("state") ?? "all"
  const sort = searchParams.get("sort") ?? "newest"
  const activeFilters = [
    keyword ? { label: `Từ khóa: ${keyword}`, name: "q", clearValue: "" } : null,
    categoryId !== "all"
      ? {
          label: `Danh mục: ${categories.find((item) => String(item.id) === categoryId)?.name ?? categoryId}`,
          name: "categoryId",
          clearValue: "all",
        }
      : null,
    state !== "all"
      ? {
          label: `Trạng thái: ${statuses.find((item) => item.value === state)?.label ?? state}`,
          name: "state",
          clearValue: "all",
        }
      : null,
  ].filter((filter): filter is { label: string; name: string; clearValue: string } => Boolean(filter))

  function updateParam(name: string, value: string) {
    const next = new URLSearchParams(searchParams.toString())
    if (!value || value === "all" || value === "0") next.delete(name)
    else next.set(name, value)
    if (name !== "page") next.delete("page")
    router.replace(`${pathname}${next.size ? `?${next.toString()}` : ""}`, {
      scroll: false,
    })
  }

  function clearFilters() {
    router.replace(pathname, { scroll: false })
  }

  const filterContent = (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-xs font-bold tracking-[0.1em] text-primary uppercase">
          Bộ lọc
        </h2>
        {activeFilters.length ? (
          <button type="button" onClick={clearFilters} className="text-sm text-secondary hover:text-primary">
            Xóa tất cả
          </button>
        ) : null}
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold">Tìm kiếm</span>
        <span className="relative block">
          <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground" size={17} />
          <input
            value={keyword}
            onChange={(event) => updateParam("q", event.target.value)}
            className="va-field pl-11"
            placeholder="Tên tài sản hoặc mã lô"
          />
        </span>
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-semibold">Danh mục</span>
        <select
          value={categoryId}
          onChange={(event) => updateParam("categoryId", event.target.value)}
          className="va-field"
        >
          <option value="all">Tất cả danh mục</option>
          {categories.map((item) => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-semibold">Trạng thái</span>
        <select value={state} onChange={(event) => updateParam("state", event.target.value)} className="va-field">
          {statuses.map((item) => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </label>
    </div>
  )

  return (
    <div className="va-page">
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="va-page-focus-target">
        <section className="border-b border-border bg-card">
          <div className="va-container py-12 sm:py-16">
            <p className="va-eyebrow">Khám phá tài sản</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="va-heading-1">Phiên đấu giá tuyển chọn</h1>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                  Khám phá tài sản theo danh mục, trạng thái và hồ sơ công bố bởi VietAuction.
                </p>
              </div>
              <button type="button" onClick={() => setMobileFiltersOpen(true)} className="va-button-outline lg:hidden">
                <Filter size={17} /> Mở bộ lọc
              </button>
            </div>
          </div>
        </section>

        <div className="va-container grid gap-10 py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-14">
          <aside className="hidden border-r border-border pr-8 lg:block" aria-label="Bộ lọc tài sản">{filterContent}</aside>
          <section aria-labelledby="results-heading">
            <div className="mb-6 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 id="results-heading" className="text-xl font-medium text-primary">
                  {meta.totalElements} tài sản phù hợp
                </h2>
                {activeFilters.length ? (
                  <ul aria-label="Bộ lọc đang áp dụng" className="mt-3 flex flex-wrap gap-2">
                    {activeFilters.map((filter) => (
                      <li key={filter.name}>
                        <button
                          type="button"
                          onClick={() => updateParam(filter.name, filter.clearValue)}
                          className="inline-flex min-h-9 items-center gap-2 border border-border bg-card px-3 text-sm text-muted-foreground transition-colors hover:border-secondary hover:text-primary"
                        >
                          {filter.label}
                          <X size={14} aria-hidden="true" />
                          <span className="sr-only">Xóa bộ lọc</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <label className="flex items-center gap-3 text-sm">
                <SlidersHorizontal size={16} aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">Sắp xếp</span>
                <select value={sort} onChange={(event) => updateParam("sort", event.target.value)} className="va-select min-h-11 border border-border bg-card px-3 text-foreground focus-visible:border-secondary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-secondary/35">
                  <option value="newest">Mới nhất</option>
                  <option value="ending-soon">Sắp kết thúc</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                </select>
              </label>
            </div>

            {error ? (
              <StateNotice kind="error" title="Chưa thể tải catalogue" description={error} action={{ label: "Thử lại", href: "/auctions" }} />
            ) : auctions.length ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {auctions.map((auction, index) => (
                    <AuctionCard key={auction.id} auction={auction} priority={meta.page === 1 && index < 3} />
                  ))}
                </div>
                {meta.totalPages > 1 ? (
                  <nav aria-label="Phân trang" className="mt-10 flex flex-wrap justify-center gap-2">
                    {Array.from({ length: meta.totalPages }, (_, index) => index + 1).map((item) => (
                      <button
                        key={item}
                        onClick={() => updateParam("page", String(item))}
                        aria-current={item === meta.page ? "page" : undefined}
                        className={`size-11 border text-sm font-semibold ${item === meta.page ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                ) : null}
              </>
            ) : (
              <StateNotice title="Chưa tìm thấy tài sản phù hợp" description="Hãy xóa bớt bộ lọc hoặc thử một từ khóa khác." action={{ label: "Xóa toàn bộ bộ lọc", href: "/auctions" }} />
            )}
          </section>
        </div>
      </main>
      <SiteFooter />

      {mobileFiltersOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/45 lg:hidden" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setMobileFiltersOpen(false)
        }}>
          <aside role="dialog" aria-modal="true" aria-label="Bộ lọc tài sản" className="ml-auto h-full w-[min(92vw,390px)] overflow-y-auto bg-background p-6 shadow-2xl">
            <div className="mb-7 flex items-center justify-between">
              <p className="text-xl font-medium">Lọc tài sản</p>
              <button type="button" autoFocus onClick={() => setMobileFiltersOpen(false)} className="inline-flex size-11 items-center justify-center border border-border" aria-label="Đóng bộ lọc">
                <X size={20} />
              </button>
            </div>
            {filterContent}
            <button type="button" onClick={() => setMobileFiltersOpen(false)} className="va-button-primary mt-8 w-full">
              Xem {meta.totalElements} kết quả
            </button>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
