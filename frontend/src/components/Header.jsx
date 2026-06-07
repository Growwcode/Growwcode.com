import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO_URL =
  'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780833773/growwcodeLogo_vywavp.png'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Agency', to: '/#agency' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Services', to: '/#services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex shrink-0 items-center" onClick={closeMenu}>
            <img
              src={LOGO_URL}
              alt="GrowwCode"
              className="h-6 w-auto sm:h-7"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-gc-navy/70 transition-colors hover:text-gc-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/#contact"
            className="hidden rounded-md bg-gc-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-gc-blue/25 transition-colors hover:bg-gc-blue/90 md:inline-block"
          >
            Make contact
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gc-navy md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="mt-4 border-t border-brand-100 pt-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMenu}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-gc-navy/80 transition-colors hover:bg-brand-50 hover:text-gc-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-brand-100 pt-4">
              <Link
                to="/#contact"
                onClick={closeMenu}
                className="block rounded-md bg-gc-blue px-4 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-gc-blue/25 transition-colors hover:bg-gc-blue/90"
              >
                Make contact
              </Link>
            </div>
          </nav>
        )}
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 top-[65px] z-[-1] bg-black/20 md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
