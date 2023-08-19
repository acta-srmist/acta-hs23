import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="flex flex-col mb-[60px]">
        <header className="flex flex-col w-full bg-hero-gradient text-white/95">
          <div className="px-[18px] lg:px-0 py-[18px] max-w-5xl mx-auto w-full flex flex-row justify-end items-center">
            <Link href="/about"><span className="text-md mt-[12px] leading-tight font-semibold underline-offset-2 decoration-2 hover:no-underline underline">About</span></Link>
          </div>
          <div className="px-[18px] lg:px-0 mt-[72px] mb-[24px] max-w-5xl mx-auto w-full">
            <h1 className="font-bold text-4xl">Eligibility Checker</h1>
            <p className="text-md mt-[12px] leading-tight">Check your eligibilty for various national and Tamil Nadu state policies under the Pradhan Mantri Jan Dhan Yojna network</p>
          </div>
        </header>
        
        <div className="mx-[18px] lg:mx-auto mt-[36px] h-[1024px] flex flex-col justify-between lg:w-full max-w-5xl bg-blue-100 border border-blue-600 rounded-lg p-[18px] sm:p-[24px]">
          <span className="text-blue-600 text-lg">Form 1</span>
          <div className="flex flex-row justify-end">
            <button className="rounded-md bg-blue-600 text-white/95 font-semibold px-[24px] py-[6px] hover:bg-blue-700 transition-colors ease-out shadow">
              Next <i className="ml-[4px] fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

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
  )
}
