import Portfolio from '../components/Portfolio.jsx'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { PAGE_SEO } from '../config/seo.js'

export default function PortfolioPage() {
  return (
    <>
      <SEO {...PAGE_SEO.portfolio} />
      <Portfolio />
      <Footer />
    </>
  )
}
