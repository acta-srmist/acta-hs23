import Image from "next/image"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <main className="flex flex-col mb-[60px]">
        <header className="flex flex-col w-full bg-hero-gradient text-white/95">
          <div className="px-[18px] lg:px-0 mt-[36px] mb-[18px] max-w-5xl mx-auto w-full">
            <h1 className="font-bold text-3xl">About</h1>
          </div>
        </header>
        
        <div className="mx-[18px] lg:mx-auto mt-[36px] h-[512px] flex flex-col lg:w-full max-w-5xl">
          <span className="text-md">Form 1</span>
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
