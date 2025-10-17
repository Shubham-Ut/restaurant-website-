import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Playfair_Display } from "next/font/google" // add serif for headings
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Maison Élan — Modern Bistro",
  description: "An elegant modern bistro with seasonal cuisine and thoughtful hospitality.",
  generator: "v0.app",
}

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`antialiased ${GeistSans.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
