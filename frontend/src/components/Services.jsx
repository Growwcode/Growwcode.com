import { Link, useLocation } from 'react-router-dom'
import ServiceCardBg from './ServiceCardBg.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { SERVICE_PAGE_LINKS } from '../config/servicePages.js'
import { BTN_PRIMARY } from '../config/ui.js'

const SERVICES = [
  {
    id: 'ai-automation',
    bg: 'ai-agents',
    title: 'AI Automation for Businesses',
    link: '/it-consulting',
    description:
      'Intelligent workflow automation, process optimization, and AI-powered integrations that reduce manual work and help businesses scale.',
    highlights: ['Workflow automation', 'AI integrations', 'Process optimization'],
    featured: true,
  },
  {
    id: 'web',
    bg: 'web',
    title: 'Website Development',
    link: '/web-development-services',
    description:
      'Responsive, fast, and SEO-optimized websites built with modern frameworks like React, Next.js, and Node.js.',
    highlights: ['React & Next.js', 'SEO-ready', 'Performance'],
  },
  {
    id: 'app',
    bg: 'app',
    title: 'App Development',
    link: '/mobile-app-development',
    description:
      'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift/Kotlin.',
    highlights: ['iOS & Android', 'React Native', 'Flutter'],
  },
  {
    id: 'ai-ml',
    bg: 'ai-ml',
    title: 'AI / ML Projects',
    link: '/ai-ml-projects',
    description:
      'Custom machine learning models, data pipelines, and predictive analytics tailored to your business data.',
    highlights: ['Custom models', 'Data pipelines', 'Analytics'],
  },
  {
    id: 'ai-agents',
    bg: 'ai-agents',
    title: 'AI Agents',
    link: '/ai-agents',
    description:
      'Intelligent autonomous agents for customer support, workflow automation, and decision-making at scale.',
    highlights: ['Support agents', 'Workflow bots', 'Copilots'],
  },
  {
    id: 'cloud',
    bg: 'cloud',
    title: 'Cloud Services',
    link: '/aws-cloud-services',
    description:
      'Cloud architecture, DevOps, and managed infrastructure on AWS, Azure, and GCP with 99.9% uptime.',
    highlights: ['AWS & Azure', 'DevOps', 'Infrastructure'],
  },
]

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We learn your goals, systems, and constraints to define a clear scope and roadmap.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description: 'Agile delivery with regular demos, transparent progress, and production-grade engineering.',
  },
  {
    step: '03',
    title: 'Launch & Scale',
    description: 'Deployment, monitoring, and ongoing support so your solution keeps performing.',
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

function ServiceIcon({ variant }) {
  const className = 'h-5 w-5'

  switch (variant) {
    case 'ai-agents':
    case 'ai-automation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3v3M12 18v3M3 12h3M18 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'web':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7h16M4 12h10M4 17h7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'app':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'ai-ml':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12h8M16.5 7.5l-5 3M11.5 13.5l5 3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 18h11a4 4 0 000-8 5.5 5.5 0 00-10.6-1.8A3.5 3.5 0 007 18z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}

function LearnMoreLink() {
  return (
    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gc-blue transition-transform group-hover:translate-x-0.5">
      Learn more
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
      </svg>
    </span>
  )
}

function ServiceCard({ service, visible, delayClass }) {
  const card = (
    <>
      <ServiceCardBg variant={service.bg} />
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-gc-navy">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gc-navy/65">{service.description}</p>
        {service.link ? <LearnMoreLink /> : null}
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

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pb-6 pt-8 sm:pb-8 sm:pt-10 lg:pb-10 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(0,127,252,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(1,44,100,0.07),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              GrowwCode Services
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            Technology services built for{' '}
            <span className="bg-gradient-to-r from-gc-blue to-gc-navy bg-clip-text text-transparent">
              modern businesses
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gc-navy/65 sm:text-lg">
            From AI automation and custom software to cloud infrastructure — we deliver end-to-end
            solutions with senior engineers who ship production-ready products.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Core offerings', value: '6+' },
            { label: 'Delivery model', value: 'Agile' },
            { label: 'Support', value: 'End-to-end' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/90 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm"
            >
              <p className="text-2xl font-black text-gc-navy">{stat.value}</p>
              <p className="mt-1 text-sm text-gc-navy/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedServiceCard({ service }) {
  return (
    <Link
      to={service.link}
      className="group relative block overflow-hidden rounded-3xl bg-gc-navy shadow-xl shadow-gc-navy/20 transition-transform hover:-translate-y-0.5"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,127,252,0.22),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gc-blue/20 blur-3xl" aria-hidden="true" />

      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:p-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue" />
            Featured service
          </span>

          <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{service.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {service.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {service.highlights?.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
              >
                {item}
              </span>
            ))}
          </div>

          <span className={`${BTN_PRIMARY} mt-6`}>
            Explore service
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </div>

        <div className="hidden h-36 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gc-blue lg:flex">
          <div className="scale-[2]">
            <ServiceIcon variant={service.bg} />
          </div>
        </div>
      </div>
    </Link>
  )
}

function ModernServiceCard({ service, index, visible, delayClass }) {
  return (
    <Link
      to={service.link}
      className={`group reveal ${delayClass} ${visible ? 'is-visible' : ''} relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gc-blue/25 hover:shadow-lg hover:shadow-gc-blue/5 sm:p-7`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gc-blue/80 to-gc-navy/40 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gc-blue/10 text-gc-blue transition-colors group-hover:bg-gc-blue group-hover:text-white">
          <ServiceIcon variant={service.bg} />
        </div>
        <span className="text-xs font-bold tracking-widest text-gc-navy/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-gc-navy transition-colors group-hover:text-gc-blue">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gc-navy/60">{service.description}</p>

      {service.highlights ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.highlights.slice(0, 2).map((item) => (
            <span
              key={item}
              className="rounded-md bg-[#f7f9fc] px-2 py-0.5 text-[11px] font-medium text-gc-navy/55"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <LearnMoreLink />
    </Link>
  )
}

function ProcessSection({ visible }) {
  return (
    <section className="border-t border-slate-200/70 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className={`reveal ${visible ? 'is-visible' : ''} max-w-2xl`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">How we work</p>
          <h2 className="mt-2 text-2xl font-bold text-gc-navy sm:text-3xl">
            A clear path from idea to launch
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gc-navy/60">
            Every engagement follows a structured process — so you always know what&apos;s happening
            and what comes next.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={`reveal reveal-delay-${index + 1} ${visible ? 'is-visible' : ''} rounded-2xl border border-slate-200/80 bg-[#f7f9fc] p-6`}
            >
              <span className="text-3xl font-black text-gc-blue/25">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold text-gc-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesCTA() {
  return (
    <section className="bg-gc-navy py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Not sure which service fits your project?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Tell us about your goals and we&apos;ll recommend the right approach — no obligation,
          just honest guidance from our engineering team.
        </p>
        <Link to="/contact" className={`${BTN_PRIMARY} mt-8`}>
          Get a free consultation
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

function ExploreLinks() {
  return (
    <section className="border-t border-slate-200/70 bg-[#f7f9fc] py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gc-navy">Explore GrowwCode</h2>
        <p className="mt-2 text-sm text-gc-navy/60">
          Jump to our core pages and specialized service offerings.
        </p>
        <nav className="mt-6 flex flex-wrap gap-2.5" aria-label="Related pages">
          {SERVICE_PAGE_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                link.path === '/services'
                  ? 'border-gc-blue bg-gc-blue text-white shadow-sm'
                  : 'border-slate-200/90 bg-white text-gc-navy/75 hover:border-gc-blue/30 hover:text-gc-blue'
              }`}
              aria-current={link.path === '/services' ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  )
}

function ServicesPageLayout() {
  const [gridRef, gridVisible] = useScrollReveal()
  const [processRef, processVisible] = useScrollReveal()

  const featured = SERVICES.find((s) => s.featured) ?? SERVICES[0]
  const rest = SERVICES.filter((s) => s.id !== featured.id)

  return (
    <>
      <ServicesHero />

      <section className="relative bg-[#f7f9fc] pb-14 pt-2 lg:pb-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-8">
            <FeaturedServiceCard service={featured} />
          </div>

          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">All services</p>
              <h2 className="mt-1 text-2xl font-bold text-gc-navy sm:text-3xl">What we deliver</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm text-gc-navy/55 sm:block">
              Click any service to view capabilities, process, and FAQs.
            </p>
          </div>

          <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((service, index) => (
              <ModernServiceCard
                key={service.id}
                service={service}
                index={index}
                visible={gridVisible}
                delayClass={CARD_REVEAL_DELAYS[index] ?? 'reveal-delay-3'}
              />
            ))}
          </div>
        </div>
      </section>

      <div ref={processRef}>
        <ProcessSection visible={processVisible} />
      </div>

      <ServicesCTA />
      <ExploreLinks />
    </>
  )
}

function HomeServicesSection() {
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
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">What we do</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
            Our services
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gc-navy/60">
            End-to-end IT solutions designed to help your business innovate, scale, and stay ahead
            of the competition.
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

        <div className="mt-10 text-center">
          <Link to="/services" className={BTN_PRIMARY}>
            View all services
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Services() {
  const { pathname } = useLocation()
  const isPage = pathname === '/services'

  return isPage ? <ServicesPageLayout /> : <HomeServicesSection />
}
