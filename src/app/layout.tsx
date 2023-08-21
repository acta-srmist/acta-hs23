"use client"
import "./globals.css"
import { createContext, useState } from "react"
import { Inter } from "next/font/google"
import Script from "next/script"
import Link from "next/link"
import Head from "next/head"
// import { MongoClient } from "mongodb"

const inter = Inter({ subsets: ["latin"] })

export const LanguageContext = createContext({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState("en")
  const langs = ["en", "hi", "ta"]
  const navbarText = (code: string) => {
    switch (code) {
      case "en":
        return "ENG"
      case "hi":
        return "हिंदी"
      case "ta":
        return "தமிழ்"
    }
  }

  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Team Acta — Hack Sustain 2023</title>
        <meta name="title" content="Team Acta — Hack Sustain 2023" />
        <meta name="description" content="" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://actahs23.adikul.dev/" />
        <meta property="og:title" content="Team Acta — Hack Sustain 2023" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://actahs23.adikul.dev/thumbnail.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://actahs23.adikul.dev/" />
        <meta property="twitter:title" content="Team Acta — Hack Sustain 2023" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://actahs23.adikul.dev/thumbnail.jpg" />
        
      </Head>
      <Script src="https://kit.fontawesome.com/b0435a4746.js" crossOrigin="anonymous"></Script>

      <LanguageContext.Provider value={{lang, setLang}}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col justify-between">
          <main className="flex flex-col mb-[60px]">
            <div className="w-full lg:px-0 px-[18px] py-[18px] bg-white/70 shadow-md backdrop-blur-xl sticky top-0 z-20">
              <div className="w-full flex flex-row justify-between items-center max-w-5xl mx-auto">
                <div className="flex flex-row gap-x-[24px] items-center">
                  <img className="h-[28px] hidden sm:block" src="/acta.svg" alt="acta_svg" />
                  <img className="h-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/8/84/PMJDY_Logo.png" alt="pmjdy_png" />
                  <img className="h-[36px]" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/G20_India_2023_logo.svg" alt="g20_svg" />
                </div>
                <div className="flex flex-row gap-x-[24px] items-center">
                  {/* <Clock className="text-sm" format={'ddd, D MMM YYYY HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} /> */}
                  <Link href="/"><span className="text-md leading-tight underline-offset-2 decoration-2 hover:no-underline underline text-primary">Home</span></Link>
                  <Link href="/about"><span className="text-md leading-tight underline-offset-2 decoration-2 hover:no-underline underline text-primary">About</span></Link>
                  <span onClick={() => {
                    const i = langs.indexOf(lang) === 2 ? 0 : langs.indexOf(lang) + 1
                    setLang(langs[i])
                  }} className="w-[72px] text-center cursor-pointer text-md leading-tight font-semibold hover:bg-primary px-[18px] py-[6px] rounded-full bg-primary/90 text-white/90">{navbarText(lang)}</span>
                </div>
              </div>
            </div>

            {children}

          </main>

          <footer className="bg-black text-white">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-[18px] lg:px-0 my-[56px] max-w-5xl mx-auto w-full">
              <div>
                <div className="flex flex-row items-center gap-x-[9px] pb-[12px]">
                  <img src="/acta-light.svg" alt="acta_light_svg" className="h-[28px]" />
                  <h1 className="font-bold text-md sm:text-lg tracking-wider">© 2023</h1>
                </div>
                <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Aditya Kulshrestha</p>
                <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Vaibhav Janga</p>
                <p className="text-md mt-[6px] text-sm sm:text-base leading-tight">Rohit Gupta</p>
              </div>

              {/* {views && (
                <div className="flex flex-col">
                  <span className="font-light tracking-wider text-white sm:text-right mt-[60px] sm:mt-0">View Count</span>
                  <span className="font-bold text-xl text-white sm:text-right mt-[6px]">{views}</span>
                </div>
              )} */}
            </div>
          </footer>
        </div>
      </body>
      </LanguageContext.Provider>
    </html>
)}
