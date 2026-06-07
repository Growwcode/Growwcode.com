import { Link } from 'react-router-dom'
import HeroClients from './HeroClients.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="hero-section-decor" aria-hidden="true">
        <div className="hero-section-grid" />
        <div className="hero-section-orb hero-section-orb--1" />
        <div className="hero-section-orb hero-section-orb--2" />
        <div className="hero-section-orb hero-section-orb--3" />
        <div className="hero-section-accent">&lt;/&gt;</div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-10 lg:px-8 lg:pb-12 lg:pt-11">
        <div className="hero-content text-center">
          <div className="hero-badge mx-auto inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              Building Digital Solutions
            </span>
          </div>

          <h1 className="hero-headline mx-auto mt-4 max-w-4xl text-3xl font-black leading-[1.12] tracking-tight text-gc-navy sm:mt-5 sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
            Turning Ideas Into{' '}
            <span className="hero-gradient-text block lg:inline">Powerful Solutions</span>
          </h1>

          <p className="hero-subtext mx-auto mt-3 max-w-2xl text-sm leading-relaxed sm:mt-4 sm:text-base">
            We craft scalable, secure, and high-performance software that helps businesses
            innovate, grow, and lead.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">
            <Link to="/services" className="hero-btn-primary inline-flex items-center gap-2">
              Explore Solutions
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
            <Link to="/portfolio" className="hero-btn-secondary inline-flex items-center gap-2">
              View Our Work
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l6-6M7 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <HeroClients />
        </div>
      </div>
    </section>
  )
}
