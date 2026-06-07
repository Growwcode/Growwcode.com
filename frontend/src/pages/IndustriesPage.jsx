import { Link } from 'react-router-dom'
import Industries from '../components/Industries.jsx'
import Footer from '../components/Footer.jsx'

export default function IndustriesPage() {
  return (
    <>
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <p className="text-sm text-gray-400">
            <Link to="/" className="transition-colors hover:text-navy">
              Home
            </Link>{' '}
            / Industries
          </p>
        </div>
      </div>
      <Industries />
      <Footer />
    </>
  )
}
