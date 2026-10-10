import { notFound } from "next/navigation"

import { getAuctionById } from "@/data/mock-auctions"

import { AuctionRegistrationClient } from "./registration-client"

type PageProps = { params: Promise<{ auctionId: string }> }

export default async function AuctionRegistrationPage({ params }: PageProps) {
  const { auctionId } = await params
  const auction = getAuctionById(auctionId)
  if (!auction) notFound()
  return <AuctionRegistrationClient auction={auction} />
}
