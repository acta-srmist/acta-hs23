"use client"
import SCHEMES from "@/constants/SCHEMES"
import { useContext } from "react"
import { LanguageContext } from "../layout"

export default function About() {
  const { lang } = useContext(LanguageContext)
  const schemes = {
    national: Object.keys(SCHEMES.national),
    tamilnadu: Object.keys(SCHEMES.tamilnadu),
  }

  return (
    <>
      <header className="flex flex-col w-full bg-hero-gradient text-white/95 -mt-[60px]">
        <div className="px-[18px] lg:px-0 mt-[120px] mb-[18px] max-w-5xl mx-auto w-full">
          <h1 className="font-bold text-3xl">About</h1>
        </div>
      </header>
      
      <div className="mx-[18px] lg:mx-auto mt-[36px] flex flex-col lg:w-full max-w-5xl">
        <span className="text-md mb-[6px]">PMJDY Eligibility Checker helps consolidate 14 central schemes and 12 Tamil Nadu schemes, into a single web-app. It helps eliminate the complexity and lack of awareness regarding the various financial schemes taken out by the central and state governments.</span>
        <span className="text-md mb-[6px]"><strong>About us</strong> We are a team of three computer science students — Aditya Kulshrestha, Vaibhav Janga, and Rohit Gupta — who wish to utilise our ideas and our technical knowledge in the domain of computers, to help society at large. Hence, this website will have no monetary income from onlinve advertisements and will simply be there to serve the citizens of our society.</span>
      </div>

      <div className="mx-[18px] lg:mx-auto mt-[36px] flex flex-col lg:w-full max-w-5xl">
        {schemes.national.length > 0 && (
          <>
            <h2 className="font-bold text-2xl my-[24px]">National Schemes</h2>
            {schemes.national.map((n: any, i: number) => (
              <div className="p-[18px] mb-[18px] shadow-md rounded-lg" key={`scheme_${i}`}>
                <span className="text-lg font-semibold text-primary">{SCHEMES.national[n].name[lang]}</span>
                <div className="flex flex-col sm:flex-row mt-[24px]">
                  <div className="flex flex-col sm:flex-grow sm:pr-[36px]">
                    <strong className="mb-[6px]">Benefits</strong>
                    <ol className="list-disc list-outside ml-[20px] font-[Georgia]">
                      {SCHEMES.national[n].benefits[lang].map(v => (
                        <li>{v}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex flex-col sm:shrink-0 mt-[12px] sm:mt-0 sm:w-1/4">
                    {(SCHEMES.national[n].helplines && SCHEMES.national[n].helplines.length > 0) && (
                      <>
                        <strong className="mb-[6px]">Helpline</strong>
                        {SCHEMES.national[n].helplines.map((v,i) => (
                          <span key={`helpline_${i}`}><i className="fa-solid fa-phone mr-[6px]"></i>{v}</span>
                        ))}
                        <br />
                      </>
                    )}
                    {(SCHEMES.national[n].website && SCHEMES.national[n].website !== "") && (
                      <>
                        <strong className="mb-[6px]">Website</strong>
                        <a href={SCHEMES.national[n].website}><span className="underline text-blue-600 break-all">{SCHEMES.national[n].website}</span></a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {schemes.tamilnadu.length > 0 && (
          <>
            <br />
            <h2 className="font-bold text-2xl my-[24px]">Tamil Nadu Schemes</h2>
            {schemes.tamilnadu.map((n: any, i: number) => (
              <div className="p-[18px] mb-[18px] shadow-md rounded-lg" key={`scheme_${i}`}>
                <span className="text-lg font-semibold text-primary">{SCHEMES.tamilnadu[n].name[lang]}</span>
                <div className="flex flex-col sm:flex-row mt-[24px]">
                  <div className="flex flex-col sm:flex-grow sm:pr-[36px]">
                    <strong className="mb-[6px]">Benefits</strong>
                    <ol className="list-disc list-outside ml-[20px] font-[Georgia]">
                      {SCHEMES.tamilnadu[n].benefits[lang].map(v => (
                        <li>{v}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex flex-col sm:shrink-0 mt-[12px] sm:mt-0 sm:w-1/4">
                    {(SCHEMES.tamilnadu[n].helplines && SCHEMES.tamilnadu[n].helplines.length > 0) && (
                      <>
                        <strong className="mb-[6px]">Helpline</strong>
                        {SCHEMES.tamilnadu[n].helplines.map((v,i) => (
                          <span key={`helpline_${i}`}><i className="fa-solid fa-phone mr-[6px]"></i>{v}</span>
                        ))}
                        <br />
                      </>
                    )}
                    {(SCHEMES.tamilnadu[n].website && SCHEMES.tamilnadu[n].website !== "") && (
                      <>
                        <strong className="mb-[6px]">Website</strong>
                        <a href={SCHEMES.tamilnadu[n].website}><span className="underline text-blue-600 break-all">{SCHEMES.tamilnadu[n].website}</span></a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
