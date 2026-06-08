import { Link } from 'react-router-dom'

export default function ServiceCTA({ title, description }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
      <div className="rounded-3xl bg-gc-navy px-8 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">{description}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gc-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gc-navy"
        >
          Contact GrowwCode
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
