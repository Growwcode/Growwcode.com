import { Link } from 'react-router-dom'

const INDUSTRIES = [
  {
    title: 'E-Commerce & Retail',
    description:
      'High-converting online stores, inventory management, AI recommendation engines, and seamless omnichannel experiences that drive sales growth.',
    highlights: ['Custom e-commerce platforms', 'Inventory & order systems', 'Personalized shopping AI'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780830963/ChatGPT_Image_Jun_7_2026_04_43_33_PM_hcnlz0.png',
  },
  {
    title: 'Hospitality & Travel',
    description:
      'Booking engines, guest experience apps, loyalty programs, and AI concierge services that elevate every touchpoint of the journey.',
    highlights: ['Booking & reservation systems', 'Guest mobile apps', 'AI concierge chatbots'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831034/ChatGPT_Image_Jun_7_2026_04_46_49_PM_q2nybg.png',
  },
  {
    title: 'Startups & SaaS',
    description:
      'Rapid MVP development, scalable SaaS architecture, and agile product iteration — from validated idea to market-ready platform.',
    highlights: ['MVP in weeks, not months', 'Scalable SaaS architecture', 'Product-market fit tooling'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831100/ChatGPT_Image_Jun_7_2026_04_48_01_PM_nc0xhq.png',
  },
  {
    title: 'Healthcare',
    description:
      'We build HIPAA-aware platforms, patient portals, telemedicine apps, and AI diagnostics tools that help healthcare providers deliver better care at scale.',
    highlights: ['Patient portals & telemedicine', 'AI diagnostics & analytics', 'Secure cloud infrastructure'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780832080/ChatGPT_Image_Jun_7_2026_04_56_45_PM_ice6d2.png',
  },
  {
    title: 'Finance & Banking',
    description:
      'Secure fintech applications, payment gateways, trading dashboards, and compliance-ready systems built for the highest standards of data protection.',
    highlights: ['Payment & banking apps', 'Fraud detection with AI', 'Regulatory compliance'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780832140/ChatGPT_Image_Jun_7_2026_05_05_24_PM_erdwyc.png',
  },
  {
    title: 'Education & EdTech',
    description:
      'Learning management systems, virtual classrooms, and AI tutors that personalize education and improve outcomes for students and institutions.',
    highlights: ['LMS & virtual classrooms', 'AI-powered tutoring', 'Student analytics dashboards'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780833093/ChatGPT_Image_Jun_7_2026_05_21_10_PM_uuznba.png',
  },
  {
    title: 'Manufacturing',
    description:
      'IoT integrations, predictive maintenance, ERP connectors, and smart factory automation that optimize production and reduce downtime.',
    highlights: ['IoT & sensor integration', 'Predictive maintenance AI', 'ERP & MES connectivity'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780832983/ChatGPT_Image_Jun_7_2026_05_19_21_PM_orlnlv.png',
  },
  {
    title: 'Real Estate',
    description:
      'Property listing platforms, CRM tools, virtual tour experiences, and market analytics dashboards that help agencies close deals faster.',
    highlights: ['Property listing portals', 'Virtual tours & 3D views', 'Market data analytics'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780832615/ChatGPT_Image_Jun_7_2026_05_13_17_PM_gwvqsb.png',
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Fleet tracking, warehouse management, route optimization, and real-time shipment visibility tools that keep your supply chain moving.',
    highlights: ['Fleet & GPS tracking', 'Warehouse management', 'Route optimization AI'],
    image:
      'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831252/ChatGPT_Image_Jun_7_2026_04_50_20_PM_hzik5h.png',
  },
]

function IndustryVisual({ industry }) {
  if (industry.image) {
    return (
      <div className="overflow-hidden rounded-2xl bg-white">
        <img
          src={industry.image}
          alt={`${industry.title} solutions by GrowwCode`}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light shadow-lg shadow-navy/10">
      <span className="px-6 text-center text-lg font-bold text-white">{industry.title}</span>
    </div>
  )
}

function IndustryRow({ industry, index }) {
  const imageFirst = index % 2 === 0

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
        <IndustryVisual industry={industry} />
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
