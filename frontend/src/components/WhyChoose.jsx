import { useScrollReveal } from '../hooks/useScrollReveal.js'

const REASONS = [
  {
    question: 'Why should I choose GrowwCode over other development teams?',
    answer:
      'We combine hands-on engineering with real business understanding—not just ticket closing. Every project gets senior oversight, clean architecture, and a team that treats your goals as their own.',
  },
  {
    question: 'Do you have an experienced in-house team?',
    answer:
      'Yes. GrowwCode is built around a dedicated in-house team of developers, designers, and AI engineers. You work directly with the people building your product, not a revolving door of freelancers.',
  },
  {
    question: 'How do you keep projects on track and on time?',
    answer:
      'We work in agile two-week sprints with regular demos, clear milestones, and transparent communication. You see working progress early, give feedback often, and stay informed at every stage.',
  },
  {
    question: 'Will the software scale as my business grows?',
    answer:
      'Scalability is built in from day one. We design systems that handle growth—from hundreds of users to thousands—using modern stacks, cloud-ready infrastructure, and maintainable code.',
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Absolutely. We offer post-launch maintenance, bug fixes, security updates, and feature enhancements. Many clients stay with us long-term because we know their systems inside out.',
  },
  {
    question: 'How transparent is your development process?',
    answer:
      'Full transparency. You get sprint updates, access to progress demos, honest timelines, and clear estimates. No hidden costs, no black-box development—we partner with you openly.',
  },
]

export default function WhyChoose() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
  const [listRef, listVisible] = useScrollReveal()

  return (
    <section id="why-choose" className="bg-brand-50 pt-10 pb-10 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-gc-blue">
            Why GrowwCode
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
            Why Choose GrowwCode
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gc-navy/60">
            Straight answers to what clients ask before they partner with us.
          </p>
        </div>

        <div
          ref={listRef}
          className={`mt-10 space-y-4 reveal reveal-delay-1 ${listVisible ? 'is-visible' : ''}`}
        >
          {REASONS.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-brand-100 bg-white p-6 transition-all open:border-brand-200 open:shadow-md open:shadow-gc-blue/5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-gc-navy marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="shrink-0 text-gc-blue transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-gc-navy/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
