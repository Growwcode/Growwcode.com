import { Link } from 'react-router-dom'

const INDUSTRIES = [
  {
    title: 'Healthcare',
    description:
      'We build HIPAA-aware platforms, patient portals, telemedicine apps, and AI diagnostics tools that help healthcare providers deliver better care at scale.',
    highlights: ['Patient portals & telemedicine', 'AI diagnostics & analytics', 'Secure cloud infrastructure'],
    accent: 'from-navy to-navy-light',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 6v12M6 12h12" />
        <rect x="3" y="3" width="18" height="18" rx="3" />
      </svg>
    ),
  },
  {
    title: 'Finance & Banking',
    description:
      'Secure fintech applications, payment gateways, trading dashboards, and compliance-ready systems built for the highest standards of data protection.',
    highlights: ['Payment & banking apps', 'Fraud detection with AI', 'Regulatory compliance'],
    accent: 'from-navy-dark to-navy',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20M6 14h4" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce & Retail',
    description:
      'High-converting online stores, inventory management, AI recommendation engines, and seamless omnichannel experiences that drive sales growth.',
    highlights: ['Custom e-commerce platforms', 'Inventory & order systems', 'Personalized shopping AI'],
    accent: 'from-navy-light to-navy-accent',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 6h15l-1.5 9h-12z" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="18" cy="20" r="1.5" />
        <path d="M6 6L5 3H2" />
      </svg>
    ),
  },
  {
    title: 'Education & EdTech',
    description:
      'Learning management systems, virtual classrooms, and AI tutors that personalize education and improve outcomes for students and institutions.',
    highlights: ['LMS & virtual classrooms', 'AI-powered tutoring', 'Student analytics dashboards'],
    accent: 'from-navy to-navy-dark',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3L2 8l10 5 10-5-10-5z" />
        <path d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5" />
      </svg>
    ),
  },
  {
    title: 'Manufacturing',
    description:
      'IoT integrations, predictive maintenance, ERP connectors, and smart factory automation that optimize production and reduce downtime.',
    highlights: ['IoT & sensor integration', 'Predictive maintenance AI', 'ERP & MES connectivity'],
    accent: 'from-navy-dark to-navy-light',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="8" width="20" height="12" rx="2" />
        <path d="M6 8V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
        <circle cx="8" cy="14" r="1.5" fill="currentColor" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Real Estate',
    description:
      'Property listing platforms, CRM tools, virtual tour experiences, and market analytics dashboards that help agencies close deals faster.',
    highlights: ['Property listing portals', 'Virtual tours & 3D views', 'Market data analytics'],
    accent: 'from-navy-light to-navy',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <rect x="10" y="14" width="4" height="6" />
      </svg>
    ),
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Fleet tracking, warehouse management, route optimization, and real-time shipment visibility tools that keep your supply chain moving.',
    highlights: ['Fleet & GPS tracking', 'Warehouse management', 'Route optimization AI'],
    accent: 'from-navy to-navy-accent',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="1" y="6" width="15" height="10" rx="1" />
        <path d="M16 10h4l2 3v3h-6v-6z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: 'Startups & SaaS',
    description:
      'Rapid MVP development, scalable SaaS architecture, and agile product iteration — from validated idea to market-ready platform.',
    highlights: ['MVP in weeks, not months', 'Scalable SaaS architecture', 'Product-market fit tooling'],
    accent: 'from-navy-dark to-navy-accent',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Hospitality & Travel',
    description:
      'Booking engines, guest experience apps, loyalty programs, and AI concierge services that elevate every touchpoint of the journey.',
    highlights: ['Booking & reservation systems', 'Guest mobile apps', 'AI concierge chatbots'],
    accent: 'from-navy-light to-navy-dark',
    icon: (
      <svg viewBox="0 0 24 24" className="h-20 w-20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
  },
]

function IndustryVisual({ industry, index }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${industry.accent} shadow-lg shadow-navy/10`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full border-[20px] border-white" />
        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full border-[14px] border-white" />
        <div className="absolute right-12 top-12 h-3 w-3 rounded-full bg-white" />
        <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-white/60" />
      </div>
      <div className="relative text-white/90">{industry.icon}</div>
      <span className="absolute left-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

function IndustryRow({ industry, index }) {
  const imageFirst = index % 2 === 0

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
        <IndustryVisual industry={industry} index={index} />
      </div>

      <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
        <p className="text-sm font-semibold uppercase tracking-widest text-navy">
          Industry {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">{industry.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-gray-600">{industry.description}</p>
        <ul className="mt-6 space-y-3">
          {industry.highlights.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Industries() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Industries we serve
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-500">
            We partner with organizations across sectors to deliver tailored IT solutions.
            Every industry has unique challenges — we bring the right technology to solve them.
          </p>
        </div>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-28">
          {INDUSTRIES.map((industry, index) => (
            <IndustryRow key={industry.title} industry={industry} index={index} />
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-navy px-8 py-12 text-center shadow-xl shadow-navy/25 sm:px-12 lg:mt-28">
          <p className="text-xl font-semibold text-white">
            Don&apos;t see your industry listed?
          </p>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
            We work with businesses of all types. Tell us about your sector and we&apos;ll
            craft a solution that fits.
          </p>
          <Link
            to="/#contact"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-brand-50"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  )
}
