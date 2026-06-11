import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL } from '../config/brand.js'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Agency', to: '/#agency' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

function isLinkActive(link, pathname, hash) {
  if (link.to === '/') {
    return pathname === '/' && !hash
  }

  if (link.to.startsWith('/#')) {
    return pathname === '/' && hash === link.to.replace('/', '')
  }

  return pathname === link.to
}

function NavLink({ link, active, onClick, className = '' }) {
  return (
    <Link
      to={link.to}
      onClick={onClick}
      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${className} ${
        active
          ? 'bg-gc-light text-gc-navy shadow-sm ring-1 ring-gc-blue/15'
          : 'text-gc-navy/75 hover:bg-gc-light/70 hover:text-gc-blue'
      }`}
    >
      {link.label}
      {active && (
        <span
          className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gc-blue"
          aria-hidden="true"
        />
      )}
    </Link>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { pathname, hash } = location

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gc-navy/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-[4.25rem]">
            <Link
              to="/"
              className="inline-flex shrink-0 items-center rounded-lg py-1 transition-opacity hover:opacity-90"
              onClick={closeMenu}
            >
              <img src={LOGO_URL} alt="GrowwCode" className="h-6 w-auto sm:h-7" />
            </Link>

            <nav
              className="hidden items-center justify-center gap-1 lg:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  link={link}
                  active={isLinkActive(link, pathname, hash)}
                />
              ))}
            </nav>

            <div className="flex items-center justify-end gap-2 sm:gap-3">
              <Link
                to="/contact"
                className="hidden rounded-full bg-gc-blue px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-gc-blue/20 transition hover:bg-gc-navy sm:inline-flex"
              >
                Get in touch
              </Link>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gc-navy/10 text-gc-navy transition hover:border-gc-blue/30 hover:bg-gc-light hover:text-gc-blue lg:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-gc-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100vw,320px)] flex-col bg-white shadow-2xl shadow-gc-navy/20 transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-gc-navy/10 px-5">
          <Link to="/" onClick={closeMenu} className="inline-flex items-center">
            <img src={LOGO_URL} alt="GrowwCode" className="h-6 w-auto" />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gc-navy hover:bg-gc-light"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link, pathname, hash)

              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition ${
                      active
                        ? 'bg-gc-light text-gc-navy ring-1 ring-gc-blue/20'
                        : 'text-gc-navy/80 hover:bg-gc-light/80 hover:text-gc-blue'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-gc-blue" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="border-t border-gc-navy/10 p-5">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-full bg-gc-blue px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-gc-blue/25 transition hover:bg-gc-navy"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  )
}
