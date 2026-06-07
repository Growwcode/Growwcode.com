import AgencyStats from './AgencyStats.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const WHO_WE_ARE_IMAGE =
  'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780835835/585a66a6-f233-48c2-a870-caf66935ce63.png'

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

const EXPERTISE = [
  'Web Development',
  'Mobile Apps',
  'AI / ML',
  'AI Agents',
  'Cloud (AWS, Azure, GCP)',
  'DevOps & Automation',
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
        className="absolute -right-4 top-8 h-24 w-24 rounded-full bg-gc-blue/10 blur-2xl"
      />
      <img
        src={WHO_WE_ARE_IMAGE}
        alt="GrowwCode team collaborating in the office"
        className="relative z-10 h-auto w-full max-w-md rounded-2xl border border-gc-blue/20 object-cover shadow-[0_24px_48px_rgba(1,44,100,0.12)] ring-1 ring-gc-navy/10 transition-all duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-gc-blue/35 group-hover:shadow-[0_28px_56px_rgba(0,127,252,0.18)] group-hover:ring-gc-blue/25"
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
        className="pointer-events-none absolute -left-1 -top-6 select-none text-7xl font-serif leading-none text-gc-navy/10"
      >
        &ldquo;
      </span>
      <div className="h-px w-12 bg-gradient-to-r from-gc-navy to-gc-blue" />
      <blockquote className="mt-5 text-lg leading-relaxed text-gc-navy/80">
        Technology should solve real problems — not add complexity. That&apos;s the standard we
        hold every project to.
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 text-sm font-semibold text-gc-blue">
        <span className="h-px w-8 bg-gc-blue/30" />
        GrowwCode Team
      </figcaption>
    </figure>
  )
}

export default function Agency() {
  const [heroRef, heroVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [whoRef, whoVisible] = useScrollReveal()

  return (
    <section id="agency" className="relative overflow-hidden bg-brand-50 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gc-navy/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div
        ref={heroRef}
        className={`relative mx-auto max-w-6xl px-6 lg:px-8 reveal ${heroVisible ? 'is-visible' : ''}`}
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
          About GrowwCode
        </p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
          Built On <span className="text-gc-blue">Experience</span>
        </h2>
        <p className="mt-5 w-full text-lg leading-relaxed text-gc-navy/70">
          With years of hands-on experience and a strong in-house team, GrowwCode delivers
          reliable digital solutions built around real-world business challenges. Our approach
          focuses on practical execution, close collaboration, and scalable system design,
          enabling clients to launch faster, improve efficiency, and grow with confidence.
        </p>
      </div>

      <AgencyStats />

      <div ref={whoRef} className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-10 grid items-start gap-12 sm:mt-12 lg:grid-cols-2 lg:gap-16">
          <div className={`reveal-left ${whoVisible ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-bold text-gc-navy sm:text-3xl">Who we are</h3>
            <p className="mt-5 text-base leading-relaxed text-gc-navy/70">
              We are a team of developers, designers, and AI engineers passionate about building
              products that matter. From startups to enterprises, we partner with clients to turn
              ideas into reliable, high-performance digital solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gc-navy/70">
              Our expertise spans web and mobile development, machine learning pipelines,
              autonomous AI agents, and cloud architecture on AWS, Azure, and GCP.
            </p>

            <div className="mt-8 space-y-5">
              {VALUES.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-4 reveal ${VALUE_REVEAL_DELAYS[index] ?? 'reveal-delay-3'} ${whoVisible ? 'is-visible' : ''}`}
                >
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gc-blue text-sm font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gc-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-gc-navy/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <TeamPhoto visible={whoVisible} />
            <TeamQuote visible={whoVisible} />
          </div>
        </div>

        <div className={`mt-20 reveal reveal-delay-2 ${whoVisible ? 'is-visible' : ''}`}>
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
          </div>
        </div>
      </div>
    </section>
  )
}
