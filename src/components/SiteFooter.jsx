import React from 'react'
import { Instagram, Youtube, Facebook, Twitter } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="px-6 pb-10">
      <div className="glass container-wide mx-auto px-6 sm:px-10 py-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="ROAR on Instagram" className="glass p-2 rounded-full hover:scale-105 transition">
            <Instagram className="h-5 w-5 text-white/90" />
          </a>
          <a href="#" aria-label="ROAR on YouTube" className="glass p-2 rounded-full hover:scale-105 transition">
            <Youtube className="h-5 w-5 text-white/90" />
          </a>
          <a href="#" aria-label="ROAR on Facebook" className="glass p-2 rounded-full hover:scale-105 transition">
            <Facebook className="h-5 w-5 text-white/90" />
          </a>
          <a href="#" aria-label="ROAR on Twitter" className="glass p-2 rounded-full hover:scale-105 transition">
            <Twitter className="h-5 w-5 text-white/90" />
          </a>
        </div>
        <p className="text-white/70 text-sm text-center">© 2025 ROAR Films. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
