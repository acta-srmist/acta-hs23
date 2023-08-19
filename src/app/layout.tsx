import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Team Acta — Hack Sustain 2023</title>
        <meta name="title" content="Team Acta — Hack Sustain 2023" />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://c6ab-103-4-221-252.ngrok-free.app/" />
        <meta property="og:title" content="Team Acta — Hack Sustain 2023" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/thumbnail.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://c6ab-103-4-221-252.ngrok-free.app/" />
        <meta property="twitter:title" content="Team Acta — Hack Sustain 2023" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="/thumbnail.png" />
        
        <Script src="https://kit.fontawesome.com/b0435a4746.js" crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
