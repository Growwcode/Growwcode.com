import { Link } from 'react-router-dom'
import Portfolio from '../components/Portfolio.jsx'
import Footer from '../components/Footer.jsx'

export default function PortfolioPage() {
  return (
    <>
      <div className="border-b border-brand-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="text-sm text-slate-400">
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>{' '}
            / Portfolio
          </p>
        </div>
      </div>
      <Portfolio />
      <Footer />
    </>
  )
}
