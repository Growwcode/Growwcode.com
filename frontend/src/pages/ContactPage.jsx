import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import Schema from '../components/Schema.jsx'
import { PAGE_SEO } from '../config/seo.js'
import { CONTACT_PAGE_SCHEMA } from '../config/schema.js'

export default function ContactPage() {
  return (
    <>
      <SEO {...PAGE_SEO.contact} />
      <Schema data={CONTACT_PAGE_SCHEMA} />
      <Contact />
      <Footer />
    </>
  )
}
