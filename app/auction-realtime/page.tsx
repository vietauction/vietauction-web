import { redirect } from "next/navigation"

export default function LegacyAuctionRealtimePage() {
  redirect("/auctions/va-001/live")
}
