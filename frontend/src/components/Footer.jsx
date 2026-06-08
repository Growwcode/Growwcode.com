import { Link } from 'react-router-dom'
import { LOGO_URL } from '../config/brand.js'

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white pb-[calc(1.5rem+var(--contact-notch-height)+env(safe-area-inset-bottom,0px))] pt-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <Link to="/" className="inline-flex shrink-0 items-center">
          <img src={LOGO_URL} alt="GrowwCode" className="h-5 w-auto sm:h-6" />
        </Link>
        <p className="text-sm text-gc-navy/50">
          &copy; {new Date().getFullYear()} GrowwCode. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/#agency" className="text-sm text-gc-navy/65 transition-colors hover:text-gc-blue">
            About
          </Link>
          <Link to="/portfolio" className="text-sm text-gc-navy/65 transition-colors hover:text-gc-blue">
            Work
          </Link>
          <Link to="/services" className="text-sm text-gc-navy/65 transition-colors hover:text-gc-blue">
            Services
          </Link>
          <Link to="/industries" className="text-sm text-gc-navy/65 transition-colors hover:text-gc-blue">
            Industries
          </Link>
          <Link to="/contact" className="text-sm text-gc-navy/65 transition-colors hover:text-gc-blue">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
