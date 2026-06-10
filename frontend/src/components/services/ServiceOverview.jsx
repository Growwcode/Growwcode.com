export default function ServiceOverview({ title, paragraphs }) {
  return (
    <section className="service-page-section mx-auto max-w-6xl px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">{title}</h2>
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-gc-navy/70">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
