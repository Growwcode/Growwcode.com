function SidebarThumbnail({ category, isActive }) {
  const thumbSrc = category.thumbnail ?? category.images[0]?.src

  if (thumbSrc) {
    return (
      <img
        src={thumbSrc}
        alt=""
        className={`h-10 w-14 shrink-0 rounded-md object-cover sm:h-12 sm:w-16 ${
          isActive ? 'ring-2 ring-gc-blue ring-offset-1 ring-offset-white' : ''
        }`}
      />
    )
  }

  return (
    <div
      className={`h-10 w-14 shrink-0 rounded-md bg-gc-blue sm:h-12 sm:w-16 ${
        isActive ? 'ring-2 ring-gc-blue ring-offset-1 ring-offset-white' : 'opacity-80'
      }`}
      aria-hidden="true"
    />
  )
}

function MobileCategorySlider({ categories, activeId, onSelect }) {
  return (
    <nav aria-label="Work categories" className="py-3">
      <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = category.id === activeId

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onSelect(category.id)}
              className={`shrink-0 snap-start rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition sm:px-5 sm:py-2.5 sm:text-sm ${
                isActive
                  ? 'bg-gc-navy text-white shadow-md'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-gc-navy'
              }`}
            >
              {category.displayLabel ?? category.label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

function DesktopSidebar({ categories, activeId, onSelect }) {
  return (
    <aside className="hidden lg:block lg:w-full">
      <div className="mb-4">
        <h3 className="mt-1 text-lg font-bold text-gc-navy">Categories</h3>
      </div>

      <nav aria-label="Work categories" className="relative">
        <div className="absolute left-[18px] top-4 h-[calc(100%-2rem)] w-px bg-slate-200" />

        <ul className="space-y-2">
          {categories.map((category, index) => {
            const isActive = category.id === activeId

            return (
              <li key={category.id} className="relative">
                <button
                  type="button"
                  onClick={() => onSelect(category.id)}
                  className={`group grid w-full grid-cols-[38px_1fr_auto] items-center gap-3 rounded-xl px-2 py-2 text-left transition ${
                    isActive
                      ? 'bg-white shadow-sm ring-1 ring-slate-200'
                      : 'hover:bg-white/70'
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition ${
                      isActive
                        ? 'bg-gc-navy text-white'
                        : 'bg-white text-slate-400 ring-1 ring-slate-200 group-hover:text-gc-blue'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="min-w-0">
                    <span
                      className={`block truncate text-sm font-semibold ${
                        isActive ? 'text-gc-navy' : 'text-slate-600 group-hover:text-gc-navy'
                      }`}
                    >
                      {category.displayLabel ?? category.label}
                    </span>
                    <span
                      className={`mt-0.5 block text-xs ${
                        isActive ? 'text-gc-blue' : 'text-slate-400'
                      }`}
                    >
                      {category.images?.length || 0} projects
                    </span>
                  </span>

                  <SidebarThumbnail category={category} isActive={isActive} />
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

export default function PortfolioSidebar({ categories, activeId, onSelect, variant = 'all' }) {
  if (variant === 'mobile') {
    return (
      <MobileCategorySlider
        categories={categories}
        activeId={activeId}
        onSelect={onSelect}
      />
    )
  }

  if (variant === 'desktop') {
    return (
      <DesktopSidebar
        categories={categories}
        activeId={activeId}
        onSelect={onSelect}
      />
    )
  }

  return (
    <>
      <MobileCategorySlider
        categories={categories}
        activeId={activeId}
        onSelect={onSelect}
      />
      <DesktopSidebar
        categories={categories}
        activeId={activeId}
        onSelect={onSelect}
      />
    </>
  )
}
