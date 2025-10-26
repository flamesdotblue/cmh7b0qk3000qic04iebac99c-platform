import React from 'react'

const team = [
  { name: '[Team Member Name]', role: '[Director]', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: '[Team Member Name]', role: '[Producer]', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: '[Team Member Name]', role: '[Cinematographer]', img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=800&auto=format&fit=crop' },
  { name: '[Team Member Name]', role: '[Editor]', img: 'https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=800&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="px-6 py-16 sm:py-20">
      <div className="glass container-wide mx-auto px-6 sm:px-10 py-10">
        <h2 className="font-display text-3xl sm:text-4xl text-white/95 mb-8">The Team Behind the Lens</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <article key={i} className="text-center glass p-6 rounded-2xl">
              <div className="h-24 w-24 mx-auto rounded-full overflow-hidden border border-white/60 shadow-lg">
                <img src={m.img} alt="Headshot placeholder" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <h3 className="mt-4 text-white/95 font-semibold">{m.name}</h3>
              <p className="text-white/75 text-sm">{m.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
