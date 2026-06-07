import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-8">
        <Link to="/" className="text-lg font-bold text-navy">
          Groww<span className="font-normal text-gray-400">Code</span>
        </Link>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} GrowwCode. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/#agency" className="text-sm text-gray-500 hover:text-navy">
            About
          </Link>
          <Link to="/portfolio" className="text-sm text-gray-500 hover:text-navy">
            Portfolio
          </Link>
          <Link to="/#services" className="text-sm text-gray-500 hover:text-navy">
            Services
          </Link>
          <Link to="/industries" className="text-sm text-gray-500 hover:text-navy">
            Industries
          </Link>
          <Link to="/#contact" className="text-sm text-gray-500 hover:text-navy">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
