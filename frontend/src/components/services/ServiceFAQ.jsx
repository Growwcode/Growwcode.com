export default function ServiceFAQ({ title, faqs }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-base text-gc-navy/60">
        Common questions about our process, pricing, and support.
      </p>

      <div className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-brand-100 bg-white p-6 transition-all open:border-brand-200 open:shadow-md open:shadow-gc-blue/5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-gc-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="shrink-0 text-gc-blue transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-gc-navy/65">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
