import type { AuctionStatus } from "@/types/auction"

const statusConfig: Record<
  AuctionStatus,
  { label: string; className: string }
> = {
  upcoming: {
    label: "Sắp mở",
    className: "bg-status-upcoming text-status-upcoming-foreground",
  },
  "registration-open": {
    label: "Đang nhận đăng ký",
    className: "bg-accent text-accent-foreground",
  },
  live: {
    label: "Đang diễn ra",
    className: "bg-status-live text-status-live-foreground",
  },
  ended: {
    label: "Đã kết thúc",
    className: "bg-status-ended text-status-ended-foreground",
  },
  cancelled: { label: "Đã hủy", className: "bg-destructive text-white" },
}

export function AuctionStatusBadge({ status }: { status: AuctionStatus }) {
  const config = statusConfig[status]
  return <span className={`va-status ${config.className}`}>{config.label}</span>
}

export function getAuctionStatusLabel(status: AuctionStatus) {
  return statusConfig[status].label
}
