import Link from "next/link"
import { ChevronRight, PackageSearch } from "lucide-react"

const assets = [
  {
    id: "TS-001",
    title: "Bộ trang sức vàng và ngọc cổ điển",
    status: "Đang thẩm định",
    updated: "09/10/2026",
  },
  {
    id: "TS-002",
    title: "Tranh sơn mài phong cảnh",
    status: "Chờ xác nhận định giá",
    updated: "06/10/2026",
  },
  {
    id: "TS-003",
    title: "Đồng hồ cơ phiên bản giới hạn",
    status: "Đã lên lịch",
    updated: "28/09/2026",
  },
]

export default function AccountAssetsPage() {
  return (
    <div className="va-card p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="va-eyebrow">Theo dõi hồ sơ</p>
          <h2 className="va-heading-2 mt-3 text-3xl">Tài sản đã gửi</h2>
        </div>
        <Link href="/sell" className="va-button-secondary">
          Gửi tài sản mới
        </Link>
      </div>
      <div className="mt-8 space-y-3">
        {assets.map((asset) => (
          <Link
            key={asset.id}
            href={`/account/assets/${asset.id}`}
            className="flex min-h-20 items-center gap-4 border border-border bg-card p-4 transition-colors hover:border-secondary"
          >
            <span className="flex size-11 shrink-0 items-center justify-center bg-muted">
              <PackageSearch size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{asset.title}</p>
              <p className="mt-1 font-numeric text-xs text-muted-foreground">
                {asset.id} · Cập nhật {asset.updated}
              </p>
              <span className="va-status mt-2 bg-muted text-foreground sm:hidden">
                {asset.status}
              </span>
            </div>
            <span className="va-status hidden bg-muted text-foreground sm:inline-flex">
              {asset.status}
            </span>
            <ChevronRight size={18} />
          </Link>
        ))}
      </div>
    </div>
  )
}
