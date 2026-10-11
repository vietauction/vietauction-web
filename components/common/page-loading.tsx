import { Skeleton } from "@/components/ui/skeleton"

type PageLoadingProps = {
  variant?: "content" | "catalogue" | "detail"
}

export function PageLoading({ variant = "content" }: PageLoadingProps) {
  const cards = variant === "catalogue" ? 6 : 3

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="va-container va-page-focus-target py-10 sm:py-14"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Đang tải nội dung</span>
      {variant === "detail" ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)]">
          <Skeleton className="aspect-[4/3] w-full rounded-none" />
          <Skeleton className="min-h-[460px] w-full rounded-none" />
        </div>
      ) : (
        <>
          <Skeleton className="h-4 w-32 rounded-none" />
          <Skeleton className="mt-4 h-12 w-full max-w-xl rounded-none" />
          <Skeleton className="mt-4 h-6 w-full max-w-2xl rounded-none" />
          <div className={`mt-10 grid gap-5 ${variant === "catalogue" ? "sm:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-3"}`}>
            {Array.from({ length: cards }, (_, index) => (
              <Skeleton key={index} className="h-80 w-full rounded-none" />
            ))}
          </div>
        </>
      )}
    </main>
  )
}
