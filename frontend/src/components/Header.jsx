import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LOGO_URL } from '../config/brand.js'
import { BTN_PRIMARY_BLOCK, BTN_PRIMARY_NAV } from '../config/ui.js'

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

function NavLink({ link, active, onClick, mobile = false }) {
  return (
    <Link
      to={link.to}
      onClick={onClick}
      className={`relative font-semibold tracking-wide transition-colors duration-200 ${
        mobile ? 'block px-4 py-3.5 text-base' : 'px-3 py-1.5 text-sm'
      } ${active ? 'text-gc-blue' : 'text-gc-navy hover:text-gc-blue'}`}
      aria-current={active ? 'page' : undefined}
    >
      {link.label}
      <span
        className={`absolute h-0.5 rounded-full bg-gc-blue transition-transform duration-200 ${
          mobile ? 'inset-x-4 bottom-2' : 'inset-x-3 -bottom-px'
        } ${active ? 'scale-x-100' : 'scale-x-0'}`}
        aria-hidden="true"
      />
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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(1,44,100,0.04)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between gap-4 sm:h-14">
            <Link
              to="/"
              className="inline-flex shrink-0 items-center"
              onClick={closeMenu}
            >
              <img src={LOGO_URL} alt="GrowwCode" className="h-5 w-auto" />
            </Link>

            <nav
              className="hidden items-center gap-0.5 lg:flex"
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

            <div className="flex items-center gap-2 sm:gap-3">
              <Link to="/contact" className={`${BTN_PRIMARY_NAV} hidden sm:inline-flex`}>
                Get in touch
              </Link>

              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-gc-navy transition-colors hover:border-gc-blue hover:text-gc-blue lg:hidden"
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

      <div
        className={`fixed inset-0 z-40 bg-gc-navy transition-opacity duration-300 lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(100vw,320px)] flex-col border-l border-slate-200 bg-white transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-12 items-center justify-end border-b border-slate-200 bg-white px-5">
          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-gc-navy transition-colors hover:border-gc-blue hover:text-gc-blue"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto bg-white px-2 py-4" aria-label="Mobile navigation">
          <ul className="space-y-0.5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  link={link}
                  active={isLinkActive(link, pathname, hash)}
                  onClick={closeMenu}
                  mobile
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 bg-white p-5">
          <Link to="/contact" onClick={closeMenu} className={BTN_PRIMARY_BLOCK}>
            Get in touch
          </Link>
        </div>
      </div>
    </>
  )
}
