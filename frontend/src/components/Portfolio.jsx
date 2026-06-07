import { useState } from 'react'
import { PORTFOLIO_CATEGORIES } from './portfolio/portfolioData.js'
import PortfolioSidebar from './portfolio/PortfolioSidebar.jsx'
import PortfolioCarousel from './portfolio/PortfolioCarousel.jsx'

export default function Portfolio() {
  const [activeId, setActiveId] = useState('webdev')

  const activeCategory =
    PORTFOLIO_CATEGORIES.find((cat) => cat.id === activeId) ?? PORTFOLIO_CATEGORIES[0]

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center gap-3 sm:mb-8 lg:mb-10">
          <span className="h-7 w-1.5 rounded-full bg-gc-blue sm:h-8" aria-hidden="true" />
          <h1 className="text-xl font-bold tracking-tight text-gc-navy sm:text-2xl lg:text-3xl">
            Groww&apos;s Code Work
          </h1>
        </header>

        <div className="flex flex-col gap-5 sm:gap-6 lg:grid lg:grid-cols-[minmax(240px,280px)_1fr] lg:items-start lg:gap-10 xl:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <PortfolioSidebar
              categories={PORTFOLIO_CATEGORIES}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>

          <div className="min-w-0">
            <PortfolioCarousel
              category={activeCategory}
              images={activeCategory.images}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
