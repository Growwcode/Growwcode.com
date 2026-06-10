import { Link } from 'react-router-dom'
import ServiceCardBg from './ServiceCardBg.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const SERVICES = [
  {
    id: 'web',
    bg: 'web',
    title: 'Website Development',
    link: '/web-development-services',
    description:
      'Responsive, fast, and SEO-optimized websites built with modern frameworks like React, Next.js, and Node.js.',
  },
  {
    id: 'app',
    bg: 'app',
    title: 'App Development',
    link: '/mobile-app-development',
    description:
      'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift/Kotlin.',
  },
  {
    id: 'ai-ml',
    bg: 'ai-ml',
    title: 'AI / ML Projects',
    link: '/ai-ml-projects',
    description:
      'Custom machine learning models, data pipelines, and predictive analytics tailored to your business data.',
  },
  {
    id: 'ai-agents',
    bg: 'ai-agents',
    title: 'AI Agents',
    link: '/ai-agents',
    description:
      'Intelligent autonomous agents for customer support, workflow automation, and decision-making at scale.',
  },
  {
    id: 'cloud',
    bg: 'cloud',
    title: 'Cloud Services',
    link: '/aws-cloud-services',
    description:
      'Cloud architecture, DevOps, and managed infrastructure on AWS, Azure, and GCP with 99.9% uptime.',
  },
  {
    id: 'consulting',
    bg: 'consulting',
    title: 'IT Consulting',
    link: '/it-consulting',
    description:
      'Technology strategy, system audits, and digital transformation guidance from senior engineers.',
  },
]

const CARD_REVEAL_DELAYS = [
  'reveal-delay-1',
  'reveal-delay-2',
  'reveal-delay-3',
  'reveal-delay-1',
  'reveal-delay-2',
  'reveal-delay-3',
]

function ServiceCard({ service, visible, delayClass }) {
  const card = (
    <>
      <ServiceCardBg variant={service.bg} />
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-gc-navy">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gc-navy/65">{service.description}</p>
        {service.link && (
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gc-blue transition-transform group-hover:translate-x-0.5">
            Learn more
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        )}
      </div>
    </>
  )

  const className = `service-card group reveal ${delayClass} ${visible ? 'is-visible' : ''}`

  return service.link ? (
    <Link key={service.id} to={service.link} className={className}>
      {card}
    </Link>
  ) : (
    <div key={service.id} className={className}>
      {card}
    </div>
  )
}

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="services" className="services-section pt-10 pb-10 lg:pt-12 lg:pb-12">
      <div className="services-section-bg" aria-hidden="true">
        <div className="services-section-glow services-section-glow--right" />
        <div className="services-section-glow services-section-glow--left" />
        <div className="services-section-accent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
            Our services
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gc-navy/60">
            End-to-end IT solutions designed to help your business innovate, scale, and
            stay ahead of the competition.
          </p>
        </div>

        <div ref={gridRef} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              visible={gridVisible}
              delayClass={CARD_REVEAL_DELAYS[index] ?? 'reveal-delay-3'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
