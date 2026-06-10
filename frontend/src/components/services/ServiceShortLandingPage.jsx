import SEO from '../SEO.jsx'
import Schema from '../Schema.jsx'
import Footer from '../Footer.jsx'
import { PAGE_SEO } from '../../config/seo.js'
import { createFAQSchema } from '../../config/schema.js'
import ServiceHero from './ServiceHero.jsx'
import ServiceOverview from './ServiceOverview.jsx'
import ServiceOfferings from './ServiceOfferings.jsx'
import ServiceTechnologies from './ServiceTechnologies.jsx'
import ServiceBenefits from './ServiceBenefits.jsx'
import ServiceFAQ from './ServiceFAQ.jsx'
import ServiceCTA from './ServiceCTA.jsx'
import ServiceInternalLinks from './ServiceInternalLinks.jsx'

export default function ServiceShortLandingPage({ data }) {
  const seo = PAGE_SEO[data.seoKey]

  return (
    <>
      <SEO {...seo} />
      <Schema data={createFAQSchema(data.faqs)} />
      <ServiceHero badge={data.badge} title={data.h1} subtitle={data.heroSubtitle} />
      <ServiceOverview title={data.overview.title} paragraphs={data.overview.paragraphs} />
      <ServiceOfferings
        title={data.offerings.title}
        subtitle={data.offerings.subtitle}
        offerings={data.offerings.items}
      />
      <ServiceTechnologies
        title={data.technologies.title}
        subtitle={data.technologies.subtitle}
        technologies={data.technologies.items}
      />
      <ServiceBenefits
        title={data.benefits.title}
        subtitle={data.benefits.subtitle}
        benefits={data.benefits.items}
      />
      <ServiceFAQ title={data.faqTitle} faqs={data.faqs} />
      <ServiceCTA title={data.cta.title} description={data.cta.description} />
      <ServiceInternalLinks currentPath={data.path} />
      <Footer />
    </>
  )
}
