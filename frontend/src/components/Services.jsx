import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'Website Development',
    link: '/web-development-services',
    description:
      'Responsive, fast, and SEO-optimized websites built with modern frameworks like React, Next.js, and Node.js.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    link: '/mobile-app-development',
    description:
      'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift/Kotlin.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'AI / ML Projects',
    description:
      'Custom machine learning models, data pipelines, and predictive analytics tailored to your business data.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'AI Agents',
    description:
      'Intelligent autonomous agents for customer support, workflow automation, and decision-making at scale.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8V4H8" />
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M2 14h2M20 14h2M12 20v2" />
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Cloud Services',
    link: '/aws-cloud-services',
    description:
      'Cloud architecture, DevOps, and managed infrastructure on AWS, Azure, and GCP with 99.9% uptime.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description:
      'Technology strategy, system audits, and digital transformation guidance from senior engineers.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
        Our services
      </h2>
      <p className="mt-4 max-w-xl text-base text-gc-navy/60">
        End-to-end IT solutions designed to help your business innovate, scale, and
        stay ahead of the competition.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const card = (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gc-blue/10 text-gc-blue">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-gc-navy">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">{service.description}</p>
              {service.link && (
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gc-blue">
                  Learn more
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </span>
              )}
            </>
          )

          return service.link ? (
            <Link
              key={service.title}
              to={service.link}
              className="rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-gc-blue/10"
            >
              {card}
            </Link>
          ) : (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-gc-blue/10"
            >
              {card}
            </div>
          )
        })}
      </div>

      <div className="mt-16 rounded-2xl border border-brand-100 bg-gc-light/40 p-8">
        <h3 className="text-lg font-bold text-gc-navy">Specialized service pages</h3>
        <p className="mt-2 text-sm text-gc-navy/60">
          Explore in-depth guides for our core development and cloud offerings.
        </p>
        <nav className="mt-5 flex flex-wrap gap-3" aria-label="Service landing pages">
          <Link to="/custom-software-development" className="text-sm font-medium text-gc-blue hover:underline">
            Custom Software Development
          </Link>
          <Link to="/web-development-services" className="text-sm font-medium text-gc-blue hover:underline">
            Web Development
          </Link>
          <Link to="/mobile-app-development" className="text-sm font-medium text-gc-blue hover:underline">
            Mobile App Development
          </Link>
          <Link to="/react-development-company" className="text-sm font-medium text-gc-blue hover:underline">
            React Development
          </Link>
          <Link to="/aws-cloud-services" className="text-sm font-medium text-gc-blue hover:underline">
            AWS Cloud Services
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gc-blue hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </section>
  )
}
