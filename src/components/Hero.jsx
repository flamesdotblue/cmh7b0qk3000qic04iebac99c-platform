import React from 'react'

export default function Hero() {
  return (
    <header id="home" className="min-h-[100svh] w-full flex items-center justify-center px-6 py-10 text-center">
      <div className="glass px-8 py-10 sm:px-12 sm:py-14 max-w-3xl w-full">
        <div className="flex items-center justify-center mb-5">
          <img
            src="https://roardocumentary.com/assets/roar-logo.png"
            alt="ROAR logo"
            className="h-14 sm:h-16 object-contain drop-shadow"
            loading="eager"
          />
        </div>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl tracking-tight text-white/95 drop-shadow">ROAR</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl text-white/85">Adventure Beyond Boundaries</p>
        <div className="mt-7">
          <a href="#about" className="btn-pill inline-block px-6 py-3 text-sm sm:text-base font-semibold">Coming Soon</a>
        </div>
      </div>
    </header>
  )
}
