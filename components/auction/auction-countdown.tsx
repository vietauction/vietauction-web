"use client"

import { useEffect, useMemo, useState } from "react"

function getRemaining(target: string) {
  return Math.max(0, new Date(target).getTime() - Date.now())
}

function formatRemaining(remaining: number) {
  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86_400)
  const hours = Math.floor((totalSeconds % 86_400) / 3_600)
  const minutes = Math.floor((totalSeconds % 3_600) / 60)
  const seconds = totalSeconds % 60
  return `${String(days).padStart(2, "0")} ngày · ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

export function AuctionCountdown({
  endsAt,
  compact = false,
}: {
  endsAt: string
  compact?: boolean
}) {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const update = () => setRemaining(getRemaining(endsAt))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [endsAt])

  const label = useMemo(() => {
    if (remaining === null) return "Đang cập nhật…"
    if (remaining === 0) return "Phiên đã kết thúc"
    return formatRemaining(remaining)
  }, [remaining])

  return (
    <span
      className={`font-numeric font-semibold tabular-nums ${compact ? "text-xs" : "text-base"}`}
      aria-live="off"
    >
      {label}
    </span>
  )
}
