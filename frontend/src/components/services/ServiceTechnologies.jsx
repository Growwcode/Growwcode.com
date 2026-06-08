export default function ServiceTechnologies({ title, subtitle, technologies }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-gc-navy/60">{subtitle}</p>}

      <div className="mt-10 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-brand-200 bg-gc-light px-4 py-2 text-sm font-medium text-gc-navy"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}
