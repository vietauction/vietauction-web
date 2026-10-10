import Link from "next/link"
import { Check, ChevronLeft, Circle } from "lucide-react"

export default async function AccountAssetDetailPage({
  params,
}: {
  params: Promise<{ assetId: string }>
}) {
  const { assetId } = await params
  const steps = [
    "Đã tiếp nhận",
    "Đang thẩm định",
    "Chờ chủ sở hữu xác nhận",
    "Phê duyệt và lên lịch",
  ]
  return (
    <div className="va-card p-6 sm:p-8">
      <Link
        href="/account/assets"
        className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-secondary"
      >
        <ChevronLeft size={17} /> Danh sách tài sản
      </Link>
      <p className="va-eyebrow mt-6">{assetId}</p>
      <h2 className="va-heading-2 mt-3 text-3xl">Hồ sơ tài sản mô phỏng</h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Theo dõi các bước tiếp nhận và thẩm định trước khi tài sản được đưa vào
        một phiên đấu giá.
      </p>
      <ol className="mt-9 space-y-0">
        {steps.map((step, index) => (
          <li key={step} className="relative flex gap-4 pb-8 last:pb-0">
            {index < steps.length - 1 ? (
              <span className="absolute top-10 left-[19px] h-[calc(100%-20px)] w-px bg-border" />
            ) : null}
            <span
              className={`relative z-10 flex size-10 shrink-0 items-center justify-center ${index < 2 ? "bg-status-verified text-white" : "border border-border bg-card text-muted-foreground"}`}
            >
              {index < 2 ? <Check size={17} /> : <Circle size={12} />}
            </span>
            <div className="pt-2">
              <p className="font-semibold">{step}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {index === 1
                  ? "Chuyên viên đang đánh giá thông tin và hình ảnh đã cung cấp."
                  : index < 1
                    ? "Bước này đã hoàn tất trong dữ liệu mô phỏng."
                    : "Chưa bắt đầu."}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
