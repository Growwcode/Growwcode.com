import { Link } from 'react-router-dom'
import { SERVICE_PAGE_LINKS } from '../../config/servicePages.js'

export default function ServiceInternalLinks({ currentPath }) {
  return (
    <section className="service-page-links border-t border-brand-100 bg-gc-light/30">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gc-navy">Explore GrowwCode</h2>
        <p className="mt-2 text-sm text-gc-navy/60">
          Navigate between our core pages and specialized service offerings.
        </p>
        <nav className="mt-6 flex flex-wrap gap-3" aria-label="Related pages">
          {SERVICE_PAGE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                link.path === currentPath
                  ? 'border-gc-blue bg-gc-blue text-white'
                  : 'border-brand-200 bg-white text-gc-navy/75 hover:border-gc-blue hover:text-gc-blue'
              }`}
              aria-current={link.path === currentPath ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}
