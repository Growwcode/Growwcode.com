import { useCallback, useEffect, useRef, useState } from 'react'
import PortfolioImageLightbox from './PortfolioImageLightbox.jsx'

function PlaceholderSlide({ label, index, total }) {
  return (
    <div className="flex min-h-[180px] w-full flex-col items-center justify-center gap-2 px-4 py-10 text-center sm:min-h-[220px]">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-gc-blue">
        {label}
      </span>
      <span className="text-xl font-bold text-gc-navy sm:text-2xl">
        Project {index + 1} of {total}
      </span>
      <span className="text-sm text-gc-navy/60">Images coming soon</span>
    </div>
  )
}

function CarouselNav({ onPrev, onNext }) {
  return (
    <div className="absolute right-2 top-2 z-10 hidden gap-1.5 sm:right-3 sm:top-3 lg:flex">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous project"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-gc-navy/80 text-white backdrop-blur-sm transition hover:bg-gc-navy sm:h-9 sm:w-9"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next project"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-gc-navy/80 text-white backdrop-blur-sm transition hover:bg-gc-navy sm:h-9 sm:w-9"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

function FeatureSection({ title, summary, features }) {
  return (
    <section className="border-t border-white/10 pt-4 sm:pt-5">
      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gc-blue">
        {title}
      </h3>
      {summary && <p className="mt-2 text-sm leading-relaxed text-white/80">{summary}</p>}
      <ul className="mt-3 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-white/85">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gc-blue" />
            {feature}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function getSlideDirection(from, to, total) {
  if (from === to || total <= 1) return 'next'
  const forward = (to - from + total) % total
  const backward = (from - to + total) % total
  return forward <= backward ? 'next' : 'prev'
}

export function PortfolioProjectDetails({
  project,
  categoryLabel,
  embedded = false,
  slideDirection = 'next',
  animate = true,
}) {
  if (!project?.title) return null

  const animationClass = animate
    ? slideDirection === 'prev'
      ? 'portfolio-details-animate-prev'
      : 'portfolio-details-animate-next'
    : ''

  return (
    <div
      className={
        embedded
          ? `space-y-4 overflow-hidden border-t border-white/10 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 ${animationClass}`
          : `mt-4 space-y-4 overflow-hidden rounded-2xl bg-gc-navy px-4 py-5 sm:mt-5 sm:rounded-3xl sm:px-6 sm:py-6 lg:px-8 lg:py-7 ${animationClass}`
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gc-blue">
        {categoryLabel}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="break-words text-xl font-bold text-white sm:text-2xl lg:text-3xl">{project.title}</h2>
          {project.tags?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/90"
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
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-gc-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gc-blue/90 sm:w-auto"
          >
            {project.linkLabel ?? 'Visit Website'}
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        )}
      </div>

      {project.description && (
        <p className="break-words text-sm leading-relaxed text-white/85 sm:text-base">{project.description}</p>
      )}

      {project.adminPanel && (
        <FeatureSection
          title="Admin Panel"
          summary={project.adminPanel.summary}
          features={project.adminPanel.features}
        />
      )}

      {project.playStore && (
        <FeatureSection
          title="Play Store Hosting"
          summary={project.playStore.summary}
          features={project.playStore.features}
        />
      )}

      {project.devOps && (
        <FeatureSection
          title="AWS & Deployment"
          summary={project.devOps.summary}
          features={project.devOps.features}
        />
      )}
    </div>
  )
}

function CarouselSlide({ image, category, index, total, onImageOpen }) {
  const pointerStart = useRef(null)

  function handlePointerDown(e) {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }

  function handlePointerUp(e) {
    if (!image.src || !onImageOpen || !pointerStart.current) return

    const deltaX = Math.abs(e.clientX - pointerStart.current.x)
    const deltaY = Math.abs(e.clientY - pointerStart.current.y)

    if (deltaX < 10 && deltaY < 10) {
      onImageOpen(image)
    }

    pointerStart.current = null
  }

  return (
    <div className="w-full shrink-0">
      {image.src ? (
        <button
          type="button"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          aria-label={`View ${image.title ?? 'project'} screenshot full screen`}
          className="block w-full cursor-zoom-in touch-manipulation"
        >
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="pointer-events-none block h-auto w-full max-w-full select-none object-contain"
          />
        </button>
      ) : (
        <PlaceholderSlide label={category.label} index={index} total={total} />
      )}
    </div>
  )
}

export default function PortfolioCarousel({
  category,
  images,
  showDetails = true,
  activeIndex,
  onActiveIndexChange,
  unified = false,
  dragOffset = 0,
  isDragging = false,
  skipTransition = false,
}) {
  const [internalIndex, setInternalIndex] = useState(0)
  const [internalDirection, setInternalDirection] = useState('next')
  const [lightboxImage, setLightboxImage] = useState(null)
  const currentIndex = activeIndex ?? internalIndex
  const slideDirection = internalDirection

  const setIndex = useCallback(
    (index, direction = 'next') => {
      if (!onActiveIndexChange) {
        setInternalDirection(direction)
      }
      if (onActiveIndexChange) {
        onActiveIndexChange(index, direction)
      } else {
        setInternalIndex(index)
      }
    },
    [onActiveIndexChange],
  )

  const total = images.length

  const goTo = useCallback(
    (index) => {
      if (total === 0) return
      const nextIndex = (index + total) % total
      const direction = getSlideDirection(currentIndex, nextIndex, total)
      setIndex(nextIndex, direction)
    },
    [currentIndex, total, setIndex],
  )

  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])
  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])

  useEffect(() => {
    setLightboxImage(null)
  }, [category.id, currentIndex])

  useEffect(() => {
    function onKeyDown(e) {
      if (lightboxImage) return
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext, lightboxImage])

  useEffect(() => {
    if (onActiveIndexChange) return
    setIndex(0, 'next')
  }, [category.id, onActiveIndexChange, setIndex])

  const openLightbox = useCallback((image) => {
    setLightboxImage(image)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxImage(null)
  }, [])

  if (total === 0) {
    return (
      <div className="flex min-h-[180px] items-center justify-center text-sm text-gc-navy/50 sm:min-h-[220px]">
        No projects in this category yet.
      </div>
    )
  }

  const current = images[currentIndex]
  const trackClass = [
    'portfolio-carousel-track flex',
    isDragging ? 'is-dragging' : '',
    skipTransition ? 'no-transition' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div
        className={`relative w-full overflow-hidden bg-white ${
          unified ? 'rounded-none' : 'rounded-xl sm:rounded-2xl'
        }`}
      >
        {total > 1 && <CarouselNav onPrev={goPrev} onNext={goNext} />}

        <div
          className={trackClass}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
          }}
        >
          {images.map((image, index) => (
            <CarouselSlide
              key={image.id}
              image={image}
              category={category}
              index={index}
              total={total}
              onImageOpen={openLightbox}
            />
          ))}
        </div>

        {total > 1 && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-3">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                aria-label={`Go to ${image.title ?? `project ${index + 1}`}`}
                onClick={() => goTo(index)}
                className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-5 bg-gc-blue'
                    : 'w-1.5 bg-gc-navy/30 hover:bg-gc-blue/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {showDetails && current.title && (
        <PortfolioProjectDetails
          project={current}
          categoryLabel={category.label}
          embedded={unified}
          slideDirection={slideDirection}
        />
      )}

      {lightboxImage && (
        <PortfolioImageLightbox image={lightboxImage} onClose={closeLightbox} />
      )}
    </>
  )
}
