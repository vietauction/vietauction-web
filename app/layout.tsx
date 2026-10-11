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
  metadataBase: new URL("https://website.vietauction.io.vn"),
  title: {
    default: "VietAuction — Đấu giá tài sản minh bạch",
    template: "%s · VietAuction",
  },
  description:
    "Khám phá, đăng ký và theo dõi các phiên đấu giá tài sản được trình bày minh bạch.",
  applicationName: "VietAuction",
  keywords: ["đấu giá", "tài sản", "VietAuction", "đấu giá trực tuyến"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "VietAuction",
    title: "VietAuction — Đấu giá tài sản minh bạch",
    description:
      "Khám phá, đăng ký và theo dõi các phiên đấu giá tài sản được trình bày minh bạch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VietAuction — Đấu giá tài sản minh bạch",
    description:
      "Khám phá, đăng ký và theo dõi các phiên đấu giá tài sản được trình bày minh bạch.",
  },
  robots: { index: true, follow: true },
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
        <a href="#main-content" className="va-skip-link">
          Bỏ qua điều hướng
        </a>
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
