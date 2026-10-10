import { notFound } from "next/navigation"

import { getAuctionById } from "@/data/mock-auctions"

import { LiveAuctionClient } from "./live-auction-client"

type PageProps = { params: Promise<{ auctionId: string }> }

export default async function LiveAuctionPage({ params }: PageProps) {
  const { auctionId } = await params
  const auction = getAuctionById(auctionId)
  if (!auction) notFound()
  return <LiveAuctionClient auction={auction} />
}
