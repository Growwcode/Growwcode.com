const SERVICES = [
  {
    title: 'Website Development',
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
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our services
      </h2>
      <p className="mt-4 max-w-xl text-base text-gray-500">
        End-to-end IT solutions designed to help your business innovate, scale, and
        stay ahead of the competition.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-gray-100 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-navy/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy">
              {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-bold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
