export default function ServiceContent({ sections }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="service-page-section border-t border-brand-100">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gc-navy sm:text-3xl">{section.title}</h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-gc-navy/70">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
