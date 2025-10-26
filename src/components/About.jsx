import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="px-6 py-16 sm:py-20">
      <div className="glass container-wide mx-auto px-6 sm:px-10 py-10">
        <h2 className="font-display text-3xl sm:text-4xl text-white/95 mb-8">Meet Deepak Kamath</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/10 backdrop-blur shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop"
                alt="Portrait of Deepak Kamath (placeholder)"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-white/95">The Man. The Myth. The Journey.</h3>
            <p className="mt-4 text-white/85 leading-relaxed">
              Deepak Kamath is a relentless explorer whose passion for discovery carries him across continents and cultures.
              From icy frontiers to sun-scorched deserts, his pursuit of the extraordinary illuminates the spirit of human courage and curiosity.
            </p>
            <p className="mt-3 text-white/80 leading-relaxed">
              Follow Deepak's odyssey as ROAR captures remote landscapes, global communities, and the unyielding will to go beyond boundaries.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Deepak on Instagram" className="glass p-2 rounded-full hover:scale-105 transition">
                <Instagram className="h-5 w-5 text-white/90" />
              </a>
              <a href="#" aria-label="Deepak on Twitter" className="glass p-2 rounded-full hover:scale-105 transition">
                <Twitter className="h-5 w-5 text-white/90" />
              </a>
              <a href="#" aria-label="Deepak on YouTube" className="glass p-2 rounded-full hover:scale-105 transition">
                <Youtube className="h-5 w-5 text-white/90" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
