import { Link } from 'react-router-dom'
import { BTN_PRIMARY } from '../../config/ui.js'

export default function ServiceCTA({ title, description }) {
  return (
    <section className="service-page-cta mx-auto max-w-6xl px-6 lg:px-8">
      <div className="rounded-3xl bg-gc-navy px-8 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">{description}</p>
        <Link to="/contact" className={`${BTN_PRIMARY} mt-8`}>
          Contact GrowwCode
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
