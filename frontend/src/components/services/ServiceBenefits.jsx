export default function ServiceBenefits({ title, subtitle, benefits }) {
  return (
    <section className="service-page-section bg-gc-light/50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-gc-navy/60">{subtitle}</p>}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-gc-blue/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gc-blue/10 text-gc-blue">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-gc-navy">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
