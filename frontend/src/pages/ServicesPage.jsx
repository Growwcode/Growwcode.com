import Services from '../components/Services.jsx'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { PAGE_SEO } from '../config/seo.js'

export default function ServicesPage() {
  return (
    <>
      <SEO {...PAGE_SEO.services} />
      <Services />
      <Footer />
    </>
  )
}
