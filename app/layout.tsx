import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const gilroyFont = localFont({
  src: [
    {
      path: "./fonts/gilroy-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy-medium-italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/gilroy-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/gilroy-semibold-italic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/gilroy-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/gilroy-bold-italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-vietauction-gilroy",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
})

export const metadata: Metadata = {
  title: {
    default: "VietAuction — Đấu giá tài sản minh bạch",
    template: "%s · VietAuction",
  },
  description:
    "Khám phá, đăng ký và theo dõi các phiên đấu giá tài sản được trình bày minh bạch.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${gilroyFont.variable} antialiased`}
    >
      <body>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
