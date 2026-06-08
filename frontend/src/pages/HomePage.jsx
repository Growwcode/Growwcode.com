import Hero from '../components/Hero.jsx'
import Agency from '../components/Agency.jsx'
import Services from '../components/Services.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { PAGE_SEO } from '../config/seo.js'

export default function HomePage() {
  return (
    <>
      <SEO {...PAGE_SEO.home} />
      <Hero />
      <Agency />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
