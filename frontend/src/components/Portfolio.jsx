import { useCallback, useEffect, useRef, useState } from 'react'
import { PORTFOLIO_CATEGORIES } from './portfolio/portfolioData.js'
import PortfolioSidebar from './portfolio/PortfolioSidebar.jsx'
import PortfolioCarousel, {
  PortfolioProjectDetails,
  getSlideDirection,
} from './portfolio/PortfolioCarousel.jsx'

const SWIPE_THRESHOLD = 50

export default function Portfolio() {
  const [activeId, setActiveId] = useState('webdev')
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [skipTransition, setSkipTransition] = useState(false)

  const touchStart = useRef(null)
  const isHorizontalSwipe = useRef(false)
  const projectCardRef = useRef(null)
  const activeProjectIndexRef = useRef(activeProjectIndex)

  activeProjectIndexRef.current = activeProjectIndex

  const activeCategory =
    PORTFOLIO_CATEGORIES.find((cat) => cat.id === activeId) ?? PORTFOLIO_CATEGORIES[0]

  const projectCount = activeCategory.images.length
  const activeProject = activeCategory.images[activeProjectIndex] ?? activeCategory.images[0]

  useEffect(() => {
    setSkipTransition(true)
    setActiveProjectIndex(0)
    setSlideDirection('next')
    setDragOffset(0)

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setSkipTransition(false))
    })

    return () => cancelAnimationFrame(frame)
  }, [activeId])

  const goToProject = useCallback(
    (index, direction) => {
      if (projectCount <= 1) return

      const current = activeProjectIndexRef.current
      const nextIndex = ((index % projectCount) + projectCount) % projectCount
      const resolvedDirection =
        direction ?? getSlideDirection(current, nextIndex, projectCount)

      setSlideDirection(resolvedDirection)
      setActiveProjectIndex(nextIndex)
      setDragOffset(0)
      setIsDragging(false)
    },
    [projectCount],
  )

  const handleProjectChange = useCallback(
    (index, direction) => {
      goToProject(index, direction)
    },
    [goToProject],
  )

  function handleProjectTouchStart(e) {
    if (projectCount <= 1) return

    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    }
    isHorizontalSwipe.current = false
    setIsDragging(true)
  }

  const handleProjectTouchMove = useCallback(
    (e) => {
      if (!touchStart.current || projectCount <= 1) return

      const deltaX = e.touches[0].clientX - touchStart.current.x
      const deltaY = e.touches[0].clientY - touchStart.current.y

      if (!isHorizontalSwipe.current) {
        if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return
        isHorizontalSwipe.current = Math.abs(deltaX) > Math.abs(deltaY)
      }

      if (!isHorizontalSwipe.current) return

      const clampedOffset =
        activeProjectIndexRef.current === 0
          ? Math.min(0, deltaX)
          : activeProjectIndexRef.current === projectCount - 1
            ? Math.max(0, deltaX)
            : deltaX

      e.preventDefault()
      setDragOffset(clampedOffset)
    },
    [projectCount],
  )

  useEffect(() => {
    const card = projectCardRef.current
    if (!card) return

    card.addEventListener('touchmove', handleProjectTouchMove, { passive: false })
    return () => card.removeEventListener('touchmove', handleProjectTouchMove)
  }, [handleProjectTouchMove])

  function handleProjectTouchEnd(e) {
    if (!touchStart.current || projectCount <= 1) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }

    const deltaX = e.changedTouches[0].clientX - touchStart.current.x
    const deltaY = e.changedTouches[0].clientY - touchStart.current.y

    setIsDragging(false)

    if (
      isHorizontalSwipe.current &&
      Math.abs(deltaX) >= SWIPE_THRESHOLD &&
      Math.abs(deltaX) > Math.abs(deltaY)
    ) {
      if (deltaX > 0) {
        goToProject(activeProjectIndexRef.current - 1, 'prev')
      } else {
        goToProject(activeProjectIndexRef.current + 1, 'next')
      }
    } else {
      setDragOffset(0)
    }

    touchStart.current = null
    isHorizontalSwipe.current = false
  }

  return (
    <section className="relative bg-[#f7f9fc] pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.1),transparent_35%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_30%)] sm:h-72" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-5 sm:mb-8 lg:mb-10 lg:grid-cols-[1fr_320px] lg:items-end lg:gap-8">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gc-blue shadow-sm backdrop-blur sm:mb-5 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-gc-blue sm:h-2 sm:w-2" />
              Portfolio
            </div>

            <h1 className="text-3xl font-black tracking-tight text-gc-navy sm:text-4xl lg:text-5xl xl:text-6xl">
              Groww&apos;s Code Work
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
              A refined collection of websites, applications and interfaces designed for modern brands.
            </p>
          </div>

          <div className="hidden rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur lg:block lg:rounded-[1.5rem] lg:p-5">
            <p className="text-sm text-slate-500">Currently viewing</p>
            <h2 className="mt-1 text-xl font-bold text-gc-navy lg:text-2xl">
              {activeCategory.displayLabel ?? activeCategory.label}
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              {activeCategory.images?.length || 0} selected projects in this category.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-16 z-40 border-b border-slate-200/80 bg-[#f7f9fc]/95 backdrop-blur-sm lg:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <PortfolioSidebar
            variant="mobile"
            categories={PORTFOLIO_CATEGORIES}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-5 sm:gap-6 lg:grid-cols-[260px_1fr] lg:gap-10 xl:grid-cols-[290px_1fr]">
          <div className="hidden min-w-0 lg:block lg:sticky lg:top-[4.25rem] lg:z-30 lg:self-start">
            <PortfolioSidebar
              variant="desktop"
              categories={PORTFOLIO_CATEGORIES}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>

          <main className="min-w-0">
            <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                  Selected work
                </p>
                <h2 className="mt-1 truncate text-2xl font-black text-gc-navy sm:mt-2 sm:text-3xl">
                  {activeCategory.displayLabel ?? activeCategory.label}
                </h2>
              </div>

              <span className="w-fit shrink-0 rounded-full bg-gc-navy px-3 py-1.5 text-xs font-bold text-white sm:px-4 sm:py-2 sm:text-sm">
                {activeCategory.images?.length || 0} Projects
              </span>
            </div>

            <div
              ref={projectCardRef}
              className="overflow-hidden rounded-2xl bg-gc-navy shadow-lg touch-pan-y sm:rounded-3xl sm:shadow-xl lg:[touch-action:auto]"
              onTouchStart={handleProjectTouchStart}
              onTouchEnd={handleProjectTouchEnd}
              onTouchCancel={handleProjectTouchEnd}
            >
              <div className="overflow-hidden bg-white lg:m-2 lg:rounded-2xl lg:p-3">
                <PortfolioCarousel
                  category={activeCategory}
                  images={activeCategory.images}
                  showDetails={false}
                  activeIndex={activeProjectIndex}
                  onActiveIndexChange={handleProjectChange}
                  unified
                  dragOffset={dragOffset}
                  isDragging={isDragging}
                  skipTransition={skipTransition}
                />
              </div>

              <PortfolioProjectDetails
                key={activeProject.id}
                project={activeProject}
                categoryLabel={activeCategory.label}
                embedded
                slideDirection={slideDirection}
                animate={!skipTransition}
              />
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
