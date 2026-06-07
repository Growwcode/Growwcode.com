import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

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

function IndustryVisual({ industry, index, visible, imageFirst }) {
  if (industry.image) {
    return (
      <div
        className={`industry-showcase group relative flex min-h-[220px] items-center justify-center py-2 sm:min-h-[260px] ${
          imageFirst ? 'reveal-left' : 'reveal-right'
        } ${visible ? 'is-visible' : ''}`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none text-[7rem] font-bold leading-none text-navy/[0.07] sm:text-[9rem]"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div
          aria-hidden="true"
          className="industry-showcase__blob absolute inset-x-6 inset-y-4 rounded-[45%_55%_60%_40%_/_50%_45%_55%_50%] bg-gradient-to-br from-brand-100/90 via-brand-50/40 to-transparent"
        />

        <div
          aria-hidden="true"
          className="absolute right-8 top-6 h-20 w-20 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #007ffc 1.5px, transparent 1.5px)',
            backgroundSize: '14px 14px',
          }}
        />

        <svg
          aria-hidden="true"
          className="industry-showcase__ring pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 text-navy/10"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1" strokeDasharray="6 10" />
        </svg>

        <div
          aria-hidden="true"
          className="absolute bottom-8 left-8 h-10 w-10 border-b-2 border-l-2 border-navy/25 transition-colors duration-500 group-hover:border-navy/50"
        />
        <div
          aria-hidden="true"
          className="absolute right-8 top-8 h-10 w-10 border-r-2 border-t-2 border-navy/25 transition-colors duration-500 group-hover:border-navy/50"
        />

        <img
          src={industry.image}
          alt={`${industry.title} solutions by GrowwCode`}
          className="relative z-10 mx-auto h-auto w-full max-w-[420px] object-contain drop-shadow-[0_24px_48px_rgba(0,127,252,0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-1"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy to-navy-light">
      <span className="px-6 text-center text-lg font-bold text-white">{industry.title}</span>
    </div>
  )
}

function IndustryRow({ industry, index }) {
  const [rowRef, rowVisible] = useScrollReveal()
  const imageFirst = index % 2 === 0

  return (
    <article
      ref={rowRef}
      id={`industry-${index + 1}`}
      className={`scroll-mt-28 ${
        index === 0 ? 'pb-2 pt-4 lg:pb-3 lg:pt-6' : 'py-4 lg:py-5'
      }`}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
          <IndustryVisual
            industry={industry}
            index={index}
            visible={rowVisible}
            imageFirst={imageFirst}
          />
        </div>

        <div className={`${imageFirst ? 'lg:order-2' : 'lg:order-1'} ${imageFirst ? 'reveal-right' : 'reveal-left'} reveal-delay-1 ${rowVisible ? 'is-visible' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
            Industry {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-gc-navy sm:text-3xl">{industry.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-gc-navy/70">{industry.description}</p>
          <ul className="mt-6 space-y-3">
            {industry.highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gc-navy/70">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gc-blue/10 text-xs font-bold text-gc-blue">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

const CTA_PERKS = ['Free consultation', 'Tailored solutions', 'Expert guidance']

function IndustryCtaIllustration() {
  return (
    <svg
      viewBox="0 0 320 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-sm"
      aria-hidden="true"
    >
      <circle cx="160" cy="250" rx="90" ry="10" fill="white" opacity="0.08" />
      <rect x="72" y="48" width="176" height="118" rx="18" stroke="white" strokeWidth="2" opacity="0.35" />
      <rect x="88" y="64" width="72" height="8" rx="4" fill="white" opacity="0.5" />
      <rect x="88" y="82" width="112" height="6" rx="3" fill="white" opacity="0.25" />
      <rect x="88" y="96" width="96" height="6" rx="3" fill="white" opacity="0.25" />
      <rect x="88" y="118" width="56" height="28" rx="8" fill="white" opacity="0.9" />
      <rect x="152" y="118" width="48" height="28" rx="8" stroke="white" strokeWidth="2" opacity="0.45" />
      <circle cx="248" cy="72" r="34" fill="white" opacity="0.12" />
      <circle cx="248" cy="72" r="22" stroke="white" strokeWidth="2" opacity="0.5" />
      <path
        d="M238 72h20M248 62v20"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="56" cy="118" r="18" fill="white" opacity="0.1" />
      <circle cx="56" cy="118" r="10" stroke="white" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M118 188c18-10 38-10 56 0"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="118" cy="198" r="14" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.08" />
      <circle cx="146" cy="188" r="14" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.08" />
      <circle cx="174" cy="198" r="14" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.08" />
    </svg>
  )
}

function IndustryCta({ visible }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy via-gc-blue to-navy-dark shadow-2xl shadow-gc-navy/25 ${visible ? 'is-visible' : ''}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-navy-accent/40 blur-3xl"
      />

      <div className="relative grid items-center gap-10 px-8 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-14 lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Let&apos;s talk
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Don&apos;t see your industry{' '}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              listed?
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
            We work with businesses of all types. Tell us about your sector and we&apos;ll craft a
            solution that fits your goals, timeline, and budget.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {CTA_PERKS.map((perk) => (
              <span
                key={perk}
                className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
              >
                {perk}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-gc-navy shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-xl"
            >
              Talk to our team
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/#services"
              className="text-sm font-medium text-white/75 transition-colors hover:text-white"
            >
              Explore our services
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm"
            />
            <div className="relative p-6 sm:p-8">
              <IndustryCtaIllustration />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Industries() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [ctaRef, ctaVisible] = useScrollReveal()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pb-16 pt-12 lg:pb-24 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        />

        <div ref={heroRef} className={`relative mx-auto max-w-6xl px-6 lg:px-8 reveal ${heroVisible ? 'is-visible' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
            Sector expertise
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            Industries we{' '}
            <span className="bg-gradient-to-r from-navy to-navy-accent bg-clip-text text-transparent">
              serve
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gc-navy/70">
            We partner with organizations across sectors to deliver tailored IT solutions.
            Every industry has unique challenges — we bring the right technology to solve them.
          </p>
        </div>

        <div className="relative mx-auto mt-6 max-w-6xl space-y-0 px-6 lg:mt-8 lg:px-8">
          {INDUSTRIES.map((industry, index) => (
            <IndustryRow key={industry.title} industry={industry} index={index} />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`relative mx-auto mt-20 max-w-6xl px-6 lg:mt-28 lg:px-8 reveal-scale ${ctaVisible ? 'is-visible' : ''}`}
        >
          <IndustryCta visible={ctaVisible} />
        </div>
      </section>
    </>
  )
}
