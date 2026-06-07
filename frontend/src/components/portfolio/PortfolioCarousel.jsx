import { useCallback, useEffect, useState } from 'react'

function PlaceholderSlide({ label, index, total }) {
  return (
    <div className="flex min-h-[240px] w-full flex-col items-center justify-center gap-3 bg-gc-light px-8 py-16 text-center">
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gc-blue">
        {label}
      </span>
      <span className="text-2xl font-bold text-gc-navy sm:text-3xl">
        Project {index + 1} of {total}
      </span>
      <span className="max-w-xs text-sm text-gc-navy/60">Images coming soon</span>
    </div>
  )
}

function CarouselNav({ onPrev, onNext }) {
  return (
    <div className="absolute right-3 top-3 z-10 flex gap-1 rounded-2xl bg-gc-navy p-1 sm:right-4 sm:top-4">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous project"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-gc-blue text-white transition hover:bg-gc-blue/85"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next project"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-gc-blue text-white transition hover:bg-gc-blue/85"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

function ProjectDetails({ project, categoryLabel }) {
  return (
    <div className="mt-6 space-y-4 rounded-2xl bg-gc-navy px-6 py-6 sm:px-8 sm:py-8">
      <p className="text-sm font-bold tracking-[0.2em] text-gc-blue">{categoryLabel}</p>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h2>
          {project.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gc-blue/20 px-3 py-0.5 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gc-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-gc-blue/90"
          >
            Visit Website
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      </div>

      {project.description && (
        <p className="text-sm leading-relaxed text-white/85 sm:text-base">{project.description}</p>
      )}

      {project.adminPanel && (
        <div className="rounded-xl border border-gc-blue/25 bg-gc-blue/10 p-4 sm:p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gc-blue">
            Admin Panel
          </h3>
          <p className="mt-1 text-sm text-white/80">{project.adminPanel.summary}</p>
          <ul className="mt-3 space-y-1.5">
            {project.adminPanel.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-white/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gc-blue" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.devOps && (
        <div className="rounded-xl border border-gc-blue/25 bg-gc-blue/10 p-4 sm:p-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gc-blue">
            AWS & Deployment
          </h3>
          <p className="mt-1 text-sm text-white/80">{project.devOps.summary}</p>
          <ul className="mt-3 space-y-1.5">
            {project.devOps.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm text-white/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gc-blue" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function PortfolioCarousel({ category, images }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const total = images.length

  const goTo = useCallback(
    (index) => {
      if (total === 0) return
      setActiveIndex((index + total) % total)
    },
    [total],
  )

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  useEffect(() => {
    setActiveIndex(0)
  }, [category.id])

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  if (total === 0) {
    return (
      <div className="flex min-h-[240px] items-center justify-center rounded-2xl bg-gc-navy px-6 text-center text-white/70">
        No projects in this category yet.
      </div>
    )
  }

  const current = images[activeIndex]

  return (
    <div>
      <div className="relative mx-auto w-[90%] max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg shadow-gc-navy/10 ring-1 ring-gc-blue/20 sm:w-[88%]">
        {total > 1 && <CarouselNav onPrev={goPrev} onNext={goNext} />}

        {current.src ? (
          <img
            src={current.src}
            alt={current.alt}
            className="block h-auto w-full max-w-full"
          />
        ) : (
          <PlaceholderSlide label={category.label} index={activeIndex} total={total} />
        )}

        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Go to ${image.title ?? `project ${index + 1}`}`}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-6 bg-gc-blue'
                    : 'w-2 bg-gc-navy/25 hover:bg-gc-blue/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {current.title && (
        <ProjectDetails project={current} categoryLabel={category.label} />
      )}
    </div>
  )
}
