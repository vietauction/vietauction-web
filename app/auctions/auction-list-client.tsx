"use client"

import { useEffect, useMemo, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter, Search, SlidersHorizontal, X } from "lucide-react"

import { AuctionCard } from "@/components/auction/auction-card"
import { StateNotice } from "@/components/common/state-notice"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { mockAuctions } from "@/data/mock-auctions"
import type { AssetCategory, AuctionStatus } from "@/types/auction"

const categories: Array<{ value: AssetCategory | "all"; label: string }> = [
  { value: "all", label: "Tất cả danh mục" },
  { value: "jewelry", label: "Trang sức & Đá quý" },
  { value: "art", label: "Nghệ thuật & Đồ cổ" },
  { value: "real-estate", label: "Bất động sản" },
  { value: "vehicle", label: "Phương tiện vận tải" },
]

const statuses: Array<{ value: AuctionStatus | "all"; label: string }> = [
  { value: "all", label: "Mọi trạng thái" },
  { value: "registration-open", label: "Đang nhận đăng ký" },
  { value: "live", label: "Đang diễn ra" },
  { value: "upcoming", label: "Sắp mở" },
  { value: "ended", label: "Đã kết thúc" },
]

export function AuctionListClient() {
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
  const category =
    (searchParams.get("category") as AssetCategory | null) ?? "all"
  const status = (searchParams.get("status") as AuctionStatus | null) ?? "all"
  const sort = searchParams.get("sort") ?? "newest"
  const verified = searchParams.get("verified") === "1"
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"))

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

  const filtered = useMemo(() => {
    const normalized = keyword.trim().toLocaleLowerCase("vi")
    const items = mockAuctions.filter((auction) => {
      const keywordMatch =
        !normalized ||
        `${auction.title} ${auction.lotNumber}`
          .toLocaleLowerCase("vi")
          .includes(normalized)
      return (
        keywordMatch &&
        (category === "all" || auction.category === category) &&
        (status === "all" || auction.status === status) &&
        (!verified || auction.verified)
      )
    })

    return [...items].sort((a, b) => {
      const aPrice = a.currentPrice ?? a.startPrice
      const bPrice = b.currentPrice ?? b.startPrice
      if (sort === "price-asc") return aPrice - bPrice
      if (sort === "price-desc") return bPrice - aPrice
      if (sort === "ending-soon")
        return new Date(a.endsAt).getTime() - new Date(b.endsAt).getTime()
      return b.id.localeCompare(a.id)
    })
  }, [category, keyword, sort, status, verified])

  const pageSize = 6
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, pageCount)
  const visible = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )
  const activeFilters = [
    keyword ? `Từ khóa: ${keyword}` : null,
    category !== "all"
      ? categories.find((item) => item.value === category)?.label
      : null,
    status !== "all"
      ? statuses.find((item) => item.value === status)?.label
      : null,
    verified ? "Hồ sơ đã đối chiếu" : null,
  ].filter(Boolean)

  const filterContent = (
    <div className="space-y-7">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-xs font-bold tracking-[0.1em] text-primary uppercase">
          Bộ lọc
        </h2>
        {activeFilters.length ? (
          <button
            onClick={clearFilters}
            className="text-sm text-secondary hover:text-primary"
          >
            Xóa tất cả
          </button>
        ) : null}
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold">Tìm kiếm</span>
        <span className="relative block">
          <Search
            className="absolute top-1/2 left-4 -translate-y-1/2 text-muted-foreground"
            size={17}
            aria-hidden="true"
          />
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
          value={category}
          onChange={(event) => updateParam("category", event.target.value)}
          className="va-field"
        >
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-semibold">Trạng thái</span>
        <select
          value={status}
          onChange={(event) => updateParam("status", event.target.value)}
          className="va-field"
        >
          {statuses.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex min-h-11 items-center gap-3 border-t border-border pt-5 text-sm font-medium">
        <input
          type="checkbox"
          checked={verified}
          onChange={(event) =>
            updateParam("verified", event.target.checked ? "1" : "0")
          }
          className="size-5 accent-[#7a5b2e]"
        />
        Chỉ hiển thị hồ sơ đã đối chiếu
      </label>
    </div>
  )

  return (
    <div className="va-page">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-card">
          <div className="va-container py-12 sm:py-16">
            <p className="va-eyebrow">Khám phá tài sản</p>
            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="va-heading-1">Phiên đấu giá tuyển chọn</h1>
                <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                  Tìm kiếm theo danh mục, trạng thái và hồ sơ tài sản. Tất cả dữ
                  liệu trong giai đoạn này là dữ liệu mô phỏng.
                </p>
              </div>
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="va-button-outline lg:hidden"
              >
                <Filter size={17} /> Mở bộ lọc
              </button>
            </div>
          </div>
        </section>

        <div className="va-container grid gap-10 py-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-14">
          <aside className="hidden border-r border-border pr-8 lg:block">
            {filterContent}
          </aside>
          <section aria-labelledby="results-heading">
            <div className="mb-6 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2
                  id="results-heading"
                  className="text-xl font-medium text-primary"
                >
                  {filtered.length} tài sản phù hợp
                </h2>
                {activeFilters.length ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {activeFilters.join(" · ")}
                  </p>
                ) : null}
              </div>
              <label className="flex items-center gap-3 text-sm">
                <SlidersHorizontal size={16} aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">Sắp xếp</span>
                <select
                  value={sort}
                  onChange={(event) => updateParam("sort", event.target.value)}
                  className="min-h-11 border border-border bg-card px-3"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="ending-soon">Sắp kết thúc</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                </select>
              </label>
            </div>

            {visible.length ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {visible.map((auction, index) => (
                    <AuctionCard
                      key={auction.id}
                      auction={auction}
                      priority={currentPage === 1 && index < 3}
                    />
                  ))}
                </div>
                {pageCount > 1 ? (
                  <nav
                    aria-label="Phân trang"
                    className="mt-10 flex flex-wrap justify-center gap-2"
                  >
                    {Array.from(
                      { length: pageCount },
                      (_, index) => index + 1
                    ).map((item) => (
                      <button
                        key={item}
                        onClick={() => updateParam("page", String(item))}
                        aria-current={item === currentPage ? "page" : undefined}
                        className={`size-11 border text-sm font-semibold ${item === currentPage ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}
                      >
                        {item}
                      </button>
                    ))}
                  </nav>
                ) : null}
              </>
            ) : (
              <StateNotice
                title="Chưa tìm thấy tài sản phù hợp"
                description="Hãy xóa bớt bộ lọc hoặc thử một từ khóa khác."
                action={{ label: "Xóa toàn bộ bộ lọc", href: "/auctions" }}
              />
            )}
          </section>
        </div>
      </main>
      <SiteFooter />

      {mobileFiltersOpen ? (
        <div
          className="fixed inset-0 z-[70] bg-black/45 lg:hidden"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget)
              setMobileFiltersOpen(false)
          }}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Bộ lọc tài sản"
            className="ml-auto h-full w-[min(92vw,390px)] overflow-y-auto bg-background p-6 shadow-2xl"
          >
            <div className="mb-7 flex items-center justify-between">
              <p className="text-xl font-medium">Lọc tài sản</p>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="inline-flex size-11 items-center justify-center border border-border"
                aria-label="Đóng bộ lọc"
              >
                <X size={20} />
              </button>
            </div>
            {filterContent}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="va-button-primary mt-8 w-full"
            >
              Xem {filtered.length} kết quả
            </button>
          </aside>
        </div>
      ) : null}
    </div>
  )
}
