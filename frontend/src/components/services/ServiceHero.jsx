import { Link, useNavigate } from 'react-router-dom'

export default function ServiceHero({ badge, title, subtitle }) {
  const navigate = useNavigate()

  function handleBack() {
    if (window.history.length > 2) {
      navigate(-1)
      return
    }

    navigate('/#services')
  }

  return (
    <section className="hero-section relative overflow-hidden">
      <div className="hero-section-decor" aria-hidden="true">
        <div className="hero-section-grid" />
        <div className="hero-section-orb hero-section-orb--1" />
        <div className="hero-section-orb hero-section-orb--2" />
        <div className="hero-section-orb hero-section-orb--3" />
      </div>

      <div className="service-page-hero-inner relative mx-auto max-w-6xl px-6 lg:px-8">
        <button
          type="button"
          onClick={handleBack}
          className="service-page-back mb-5 inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white/90 px-4 py-2 text-sm font-semibold text-gc-blue shadow-sm transition-all hover:border-gc-blue/35 hover:bg-white hover:shadow-md"
        >
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              {badge}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-gc-navy/65 sm:text-lg">{subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="hero-btn-primary inline-flex items-center justify-center gap-2">
              Get a Free Consultation
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
            <Link to="/services" className="hero-btn-secondary inline-flex items-center justify-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
