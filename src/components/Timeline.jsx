import React from 'react'

const milestones = [
  { date: '[Date]', title: 'Principal Photography', desc: '7 Continents, 79 Countries' },
  { date: '[Date]', title: 'Post-Production & Editing', desc: 'Crafting the cut and original score' },
  { date: '[Date]', title: 'Official Trailer Release', desc: 'First look worldwide' },
  { date: 'Spring 2026', title: 'World Premiere', desc: 'Global launch in select cities', highlight: true },
]

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 py-16 sm:py-20">
      <div className="glass container-wide mx-auto px-6 sm:px-10 py-10 relative">
        <h2 className="font-display text-3xl sm:text-4xl text-white/95 mb-8">The Journey to Screen</h2>
        <div className="relative">
          <div className="timeline-line hidden sm:block" />
          <ol className="space-y-5 relative">
            {milestones.map((m, i) => (
              <li key={i} className={`relative glass p-5 sm:pl-16 ${m.highlight ? 'ring-1 ring-yellow-200/50' : ''} rounded-2xl`}>
                <span className="hidden sm:flex absolute left-3 top-5 h-6 w-6 items-center justify-center rounded-full border border-white/70 bg-white/30 backdrop-blur text-xs text-white/90 shadow">
                  {i + 1}
                </span>
                <div className="flex flex-col">
                  <p className={`text-sm ${m.highlight ? 'text-yellow-200' : 'text-white/80'}`}>{m.date}</p>
                  <h3 className={`font-semibold text-white/95 ${m.highlight ? 'font-display text-xl' : ''}`}>{m.title}</h3>
                  <p className="text-white/80 text-sm">{m.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
