"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { AuctionImage } from "@/types/auction"

export function AssetGallery({ images }: { images: AuctionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = images[activeIndex]

  function move(offset: number) {
    setActiveIndex(
      (current) => (current + offset + images.length) % images.length
    )
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover"
        />
        <div className="absolute right-4 bottom-4 flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="inline-flex size-11 items-center justify-center bg-primary text-primary-foreground"
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="inline-flex size-11 items-center justify-center bg-primary text-primary-foreground"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Xem ảnh ${index + 1}`}
            aria-pressed={index === activeIndex}
            className={`relative aspect-[4/3] overflow-hidden border-2 ${index === activeIndex ? "border-secondary" : "border-transparent opacity-70 hover:opacity-100"}`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
