import AgencyStats from './AgencyStats.jsx'

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

export default function Agency() {
  return (
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
      </div>

      <AgencyStats />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mt-10 grid items-center gap-14 sm:mt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-2xl font-bold text-gc-navy sm:text-3xl">Who we are</h3>
            <p className="mt-5 text-base leading-relaxed text-gc-navy/70">
              We are a team of developers, designers, and AI engineers passionate about
              building products that matter. From startups to enterprises, we partner with
              clients to turn ideas into reliable, high-performance digital solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gc-navy/70">
              Our expertise spans web and mobile development, machine learning pipelines,
              autonomous AI agents, and cloud architecture on AWS, Azure, and GCP.
            </p>

            <div className="mt-8 space-y-4">
              {VALUES.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gc-blue text-sm font-bold text-white">
                    ✓
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
