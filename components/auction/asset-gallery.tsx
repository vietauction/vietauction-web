"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"

import type { AuctionImage } from "@/types/auction"

export function AssetGallery({ images }: { images: AuctionImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const openerRef = useRef<HTMLButtonElement>(null)
  const active = images[activeIndex]
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (!isLightboxOpen) return

    const previousOverflow = document.body.style.overflow
    const opener = openerRef.current
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
      opener?.focus()
    }
  }, [isLightboxOpen])

  function move(offset: number) {
    if (!hasMultipleImages) return
    setActiveIndex(
      (current) => (current + offset + images.length) % images.length
    )
  }

  if (!active) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center border border-border bg-muted p-6 text-center text-sm text-muted-foreground">
        Hình ảnh tài sản đang được cập nhật.
      </div>
    )
  }

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <button
          ref={openerRef}
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="group absolute inset-0 block w-full text-left focus-visible:outline-offset-[-4px]"
          aria-label={`Phóng to ảnh: ${active.alt}`}
        >
          <Image
            src={active.src}
            alt={active.alt}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
          />
          <span className="absolute top-4 right-4 inline-flex size-10 items-center justify-center bg-primary/85 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={17} aria-hidden="true" />
            <span className="sr-only">Phóng to ảnh</span>
          </span>
        </button>
        {hasMultipleImages ? <div className="absolute right-4 bottom-4 flex gap-2">
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
        </div> : null}
      </div>
      {hasMultipleImages ? <div className="mt-3 grid grid-cols-3 gap-3">
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
      </div> : null}

      {isLightboxOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsLightboxOpen(false)
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label={`Ảnh phóng to: ${active.alt}`}
            className="relative flex h-full w-full max-w-6xl items-center justify-center"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
            <button
              type="button"
              autoFocus
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-0 right-0 inline-flex size-11 items-center justify-center bg-card text-primary shadow-lg"
              aria-label="Đóng ảnh phóng to"
            >
              <X size={20} aria-hidden="true" />
            </button>
            {hasMultipleImages ? <div className="absolute right-0 bottom-0 left-0 flex justify-center gap-2">
              <button
                type="button"
                onClick={() => move(-1)}
                className="inline-flex size-11 items-center justify-center bg-card text-primary shadow-lg"
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="inline-flex size-11 items-center justify-center bg-card text-primary shadow-lg"
                aria-label="Ảnh tiếp theo"
              >
                <ChevronRight size={19} aria-hidden="true" />
              </button>
            </div> : null}
          </section>
        </div>
      ) : null}
    </div>
  )
}
