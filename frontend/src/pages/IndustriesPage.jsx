import Industries from '../components/Industries.jsx'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { PAGE_SEO } from '../config/seo.js'

export default function IndustriesPage() {
  return (
    <>
      <SEO {...PAGE_SEO.industries} />
      <Industries />
      <Footer />
    </>
  )
}
