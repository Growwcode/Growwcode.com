import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Agency', to: '/#agency' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Services', to: '/#services' },
  { label: 'Industries', to: '/industries' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="text-xl font-bold tracking-tight text-navy">
          Groww<span className="font-normal text-slate-400">Code</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/#contact"
            className="hidden rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-brand-50 sm:inline-block"
          >
            Contact
          </Link>
          <Link
            to="/#contact"
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-navy/25 transition-colors hover:bg-navy-light"
          >
            Make contact
          </Link>
        </div>
      </div>
    </header>
  )
}
