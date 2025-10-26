import React from 'react'
import './branding.css'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Timeline from './components/Timeline'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Timeline />
      <SiteFooter />
    </div>
  )
}
