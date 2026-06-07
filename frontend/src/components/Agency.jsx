import AgencyStats from './AgencyStats.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

<<<<<<< Updated upstream
function AgencyIllustration() {
  return (
    <svg
      viewBox="0 0 380 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-sm"
      aria-hidden="true"
    >
      <path
        d="M60 260 L60 80 Q60 40 120 40 L260 40 Q320 40 320 80 L320 260"
        stroke="#111"
        strokeWidth="2.5"
        fill="#fff"
      />
      <path d="M60 260 L320 260" stroke="#111" strokeWidth="2.5" />
      <line x1="190" y1="40" x2="190" y2="260" stroke="#e5e7eb" strokeWidth="1.5" />
      <rect x="80" y="70" width="90" height="6" rx="3" fill="#007ffc" opacity="0.3" />
      <rect x="80" y="90" width="70" height="4" rx="2" fill="#d1d5db" />
      <rect x="80" y="105" width="80" height="4" rx="2" fill="#d1d5db" />
      <rect x="80" y="120" width="60" height="4" rx="2" fill="#d1d5db" />
      <circle cx="250" cy="130" r="28" stroke="#111" strokeWidth="2" fill="#fff" />
      <path d="M238 122 Q250 112 262 122" stroke="#111" strokeWidth="2" fill="none" />
      <circle cx="243" cy="127" r="2" fill="#111" />
      <circle cx="257" cy="127" r="2" fill="#111" />
      <path d="M245 138 Q250 143 255 138" stroke="#111" strokeWidth="1.5" fill="none" />
      <rect x="228" y="158" width="44" height="55" rx="8" stroke="#111" strokeWidth="2" fill="#f0f4f8" />
      <path d="M210 200 L228 175" stroke="#111" strokeWidth="2" />
      <path d="M290 200 L272 175" stroke="#111" strokeWidth="2" />
      <rect x="215" y="213" width="20" height="30" rx="4" stroke="#111" strokeWidth="2" fill="#fff" />
      <rect x="265" y="213" width="20" height="30" rx="4" stroke="#111" strokeWidth="2" fill="#fff" />
      <circle cx="340" cy="60" r="18" fill="#007ffc" opacity="0.15" />
    </svg>
  )
}
=======
const WHO_WE_ARE_IMAGE =
  'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780835835/585a66a6-f233-48c2-a870-caf66935ce63.png'
>>>>>>> Stashed changes

const VALUES = [
  {
    title: 'Engineering first',
    description: 'Clean code, scalable architecture, and best practices in every project we ship.',
  },
  {
    title: 'Client partnership',
    description: 'We work as an extension of your team — transparent, responsive, and goal-driven.',
  },
  {
    title: 'Innovation led',
    description: 'From AI agents to cloud-native apps, we bring cutting-edge tech to real business problems.',
  },
]

const VALUE_REVEAL_DELAYS = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3']

function TeamPhoto({ visible }) {
  return (
    <div
      className={`group relative flex items-center justify-center reveal-right ${visible ? 'is-visible' : ''}`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-4 inset-y-6 rounded-[45%_55%_60%_40%_/_50%_45%_55%_50%] bg-gradient-to-br from-brand-100/80 via-brand-50/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 top-8 h-24 w-24 rounded-full bg-navy/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-0 h-12 w-12 border-b-2 border-l-2 border-navy/20 transition-colors duration-500 group-hover:border-navy/45"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-navy/20 transition-colors duration-500 group-hover:border-navy/45"
      />
      <img
        src={WHO_WE_ARE_IMAGE}
        alt="GrowwCode team collaborating in the office"
        className="relative z-10 h-auto w-full max-w-md object-cover drop-shadow-[0_28px_56px_rgba(63,91,217,0.18)] transition-transform duration-700 group-hover:scale-[1.02] group-hover:-translate-y-1"
        loading="lazy"
      />
    </div>
  )
}

function TeamQuote({ visible }) {
  return (
    <figure
      className={`relative mt-10 max-w-md reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-1 -top-6 select-none text-7xl font-serif leading-none text-navy/10"
      >
        &ldquo;
      </span>
      <div className="h-px w-12 bg-gradient-to-r from-navy to-navy-accent" />
      <blockquote className="mt-5 text-lg leading-relaxed text-gray-700">
        Technology should solve real problems — not add complexity. That&apos;s the standard we
        hold every project to.
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-sm font-semibold text-navy">
        <span className="h-px w-8 bg-navy/30" />
        GrowwCode Team
      </figcaption>
    </figure>
  )
}

export default function Agency() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [whoRef, whoVisible] = useScrollReveal()

  return (
<<<<<<< Updated upstream
    <section id="agency" className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
            About GrowwCode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
            Our agency
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gc-navy/70">
            GrowwCode is a full-service IT company helping businesses transform through
            technology. We combine engineering excellence with creative problem-solving
            to deliver solutions that scale with your ambition.
          </p>
        </div>
=======
    <section id="agency" className="relative overflow-hidden bg-brand-50 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-navy/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div
        ref={heroRef}
        className={`relative mx-auto max-w-6xl px-6 lg:px-8 reveal ${heroVisible ? 'is-visible' : ''}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-navy">
          About GrowwCode
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Built On <span className="text-navy">Experience</span>
        </h2>
        <p className="mt-5 w-full text-lg leading-relaxed text-gray-600">
          With years of hands-on experience and a strong in-house team, GrowwCode delivers
          reliable digital solutions built around real-world business challenges. Our approach
          focuses on practical execution, close collaboration, and scalable system design,
          enabling clients to launch faster, improve efficiency, and grow with confidence.
        </p>
>>>>>>> Stashed changes
      </div>

      <AgencyStats />

<<<<<<< Updated upstream
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-10 grid items-center gap-14 sm:mt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-2xl font-bold text-gc-navy sm:text-3xl">Who we are</h3>
            <p className="mt-5 text-base leading-relaxed text-gc-navy/70">
              We are a team of developers, designers, and AI engineers passionate about
              building products that matter. From startups to enterprises, we partner with
              clients to turn ideas into reliable, high-performance digital solutions.
=======
      <div ref={whoRef} className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-10 grid items-start gap-12 sm:mt-12 lg:grid-cols-2 lg:gap-16">
          <div className={`reveal-left ${whoVisible ? 'is-visible' : ''}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-navy">Our team</p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Who we are</h3>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-navy to-navy-accent" />
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              We are a team of developers, designers, and AI engineers passionate about building
              products that matter. From startups to enterprises, we partner with clients to turn
              ideas into reliable, high-performance digital solutions.
>>>>>>> Stashed changes
            </p>
            <p className="mt-4 text-base leading-relaxed text-gc-navy/70">
              Our expertise spans web and mobile development, machine learning pipelines,
              autonomous AI agents, and cloud architecture on AWS, Azure, and GCP.
            </p>

<<<<<<< Updated upstream
            <div className="mt-8 space-y-4">
              {VALUES.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gc-blue text-sm font-bold text-white">
=======
            <div className="mt-8 space-y-5">
              {VALUES.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-4 reveal ${VALUE_REVEAL_DELAYS[index] ?? 'reveal-delay-3'} ${whoVisible ? 'is-visible' : ''}`}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/10 text-xs font-bold text-navy">
>>>>>>> Stashed changes
                    ✓
                  </span>
                  <div>
<<<<<<< Updated upstream
                    <p className="font-semibold text-gc-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gc-navy/60">
                      {item.description}
                    </p>
=======
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.description}</p>
>>>>>>> Stashed changes
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< Updated upstream
          <div className="flex flex-col items-center gap-8">
            <AgencyIllustration />
            <blockquote className="w-full rounded-2xl border-l-4 border-gc-blue bg-white p-6 shadow-sm">
              <p className="text-base italic leading-relaxed text-gc-navy/70">
                &ldquo;Technology should solve real problems — not add complexity. That&apos;s
                the standard we hold every project to.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-gc-blue">
                — GrowwCode Team
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mt-20">
          <h4 className="text-lg font-bold text-gc-navy">Core expertise</h4>
          <p className="mt-2 max-w-xl text-sm text-gc-navy/60">
            End-to-end capabilities across the full technology stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {EXPERTISE.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gc-blue/10 px-5 py-2.5 text-sm font-medium text-gc-navy"
              >
                {skill}
              </span>
            ))}
=======
          <div className="flex flex-col items-center lg:items-end">
            <TeamPhoto visible={whoVisible} />
            <TeamQuote visible={whoVisible} />
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </section>
  )
}
