import "./globals.css"
import { Inter } from "next/font/google"
import Script from "next/script"
import Link from "next/link"

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
      <body className={inter.className}>
         <div className="flex min-h-screen flex-col justify-between">
          <main className="flex flex-col mb-[60px]">
            <div className="w-full lg:px-0 px-[18px] py-[18px] bg-white/70 shadow-md backdrop-blur-xl sticky top-0 z-20">
              <div className="w-full flex flex-row justify-between items-center max-w-5xl mx-auto">
                <div className="flex flex-row gap-x-[24px] items-center">
                  <img className="h-[28px]" src="/acta.svg" alt="acta_svg" />
                  <img className="h-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/8/84/PMJDY_Logo.png" alt="pmjdy_png" />
                  <img className="h-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/G20_India_2023_logo.svg" alt="g20_svg" />
                </div>
                <div className="flex flex-row gap-x-[24px] items-center">
                  {/* <Clock className="text-sm" format={'ddd, D MMM YYYY HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /> */}
                  <Link href="/about"><span className="text-md leading-tight underline-offset-2 decoration-2 hover:no-underline underline text-primary">About</span></Link>
                  <span className="cursor-pointer text-md leading-tight font-semibold hover:bg-primary px-[18px] py-[6px] rounded-full bg-primary/90 text-white/90">ENG</span>
                </div>
              </div>
            </div>

            {children}

          </main>

          <footer className="bg-black text-white">
            <div className="px-[18px] lg:px-0 my-[56px] max-w-5xl mx-auto w-full">
              <h1 className="font-bold text-md sm:text-lg tracking-wider">TEAM ACTA © 2023</h1>
              <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Aditya Kulshrestha</p>
              <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Vaibhav Janga</p>
              <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Rohit Gupta</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
