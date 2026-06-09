import { Link } from 'react-router-dom'
import HeroClients from './HeroClients.jsx'
import HeroFloatingCards from './HeroFloatingCards.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="hero-section-bg" aria-hidden="true">
        <div className="hero-section-mobile-photo" />
        <div className="hero-section-mobile-overlay" />
        <div className="hero-section-mesh" />
        <div className="hero-section-glow hero-section-glow--left" />
        <div className="hero-section-glow hero-section-glow--right" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-14 lg:pt-14">
        <div className="hero-main">
          <div className="hero-copy">
            <h1 className="hero-headline text-4xl font-black leading-[1.08] tracking-tight text-gc-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06] xl:text-6xl">
              Turning Ideas Into{' '}
              <span className="hero-gradient-text">Powerful Solutions</span>
            </h1>

            <p className="hero-subtext mx-auto mt-4 max-w-lg text-base leading-relaxed sm:mt-5 sm:text-lg lg:mx-0">
              We craft scalable, secure, and high-performance software that helps businesses
              innovate, grow, and lead in the digital age.
            </p>

            <div className="hero-cta-bar mt-7 sm:mt-8">
              <Link to="/contact" className="hero-cta-lead">
                Start your next project
              </Link>
              <Link to="/services" className="hero-btn-primary">
                Explore Solutions
              </Link>
            </div>

            <Link to="/portfolio" className="hero-link-secondary mx-auto mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gc-blue lg:mx-0">
              View Our Work
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          <HeroFloatingCards />
        </div>

        <HeroClients />
      </div>
    </section>
  )
}
