"use client"
import SCHEMES from "@/constants/SCHEMES"
import Image from "next/image"
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const schemes = JSON.parse(searchParams.get("schemes")?.toString() || "{national: [], tamilnadu: []}")
  
  return (
    <>
      <header className="flex flex-col w-full bg-hero-gradient text-white/95">
        <div className="px-[18px] lg:px-0 mt-[36px] mb-[18px] max-w-5xl mx-auto w-full">
          <h1 className="font-bold text-3xl">Schemes for You</h1>
        </div>
      </header>
      
      <div className="mx-[18px] lg:mx-auto mt-[36px] h-[512px] flex flex-col lg:w-full max-w-5xl">
        {schemes.national.length > 0 && (
          <>
            <h2 className="font-bold text-xl">National Schemes</h2>
            {schemes.national.map((n: any, i: number) => <span className="text-md" key={`scheme_${i}`}>{SCHEMES.national[n].name.en}</span>)}
          </>
        )}
        {schemes.tamilnadu.length > 0 && (
          <>
            <br />
            <h2 className="font-bold text-xl">Tamil Nadu Schemes</h2>
            {schemes.tamilnadu.map((n: any, i: number) => <span className="text-md" key={`scheme_${i}`}>{SCHEMES.tamilnadu[n].name.en}</span>)}
          </>
        )}
      </div>
    </>
  )
}
