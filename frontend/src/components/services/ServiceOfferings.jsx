export default function ServiceOfferings({ title, subtitle, offerings }) {
  return (
    <section className="service-page-section border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-gc-navy/60">{subtitle}</p>}

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-brand-100 bg-white p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-gc-blue/10"
            >
              <h3 className="text-lg font-bold text-gc-navy">{offering.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gc-navy/60">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
