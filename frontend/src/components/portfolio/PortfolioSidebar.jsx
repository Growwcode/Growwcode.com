function SidebarThumbnail({ category, isActive }) {
  const thumbSrc = category.thumbnail ?? category.images[0]?.src

  if (thumbSrc) {
    return (
      <img
        src={thumbSrc}
        alt=""
        className={`h-14 w-20 shrink-0 rounded-md object-cover sm:h-16 sm:w-24 ${
          isActive ? 'ring-2 ring-gc-blue ring-offset-2 ring-offset-gc-light' : ''
        }`}
      />
    )
  }

  return (
    <div
      className={`h-14 w-20 shrink-0 rounded-md bg-gc-blue sm:h-16 sm:w-24 ${
        isActive ? 'ring-2 ring-gc-blue ring-offset-2 ring-offset-gc-light' : 'opacity-80'
      }`}
      aria-hidden="true"
    />
  )
}

export default function PortfolioSidebar({ categories, activeId, onSelect }) {
  return (
    <aside className="w-full shrink-0 rounded-2xl bg-gc-light p-4 sm:p-5">
      <nav aria-label="Portfolio categories">
        <ul className="space-y-3">
          {categories.map((category) => {
            const isActive = category.id === activeId

            return (
              <li key={category.id}>
                <button
                  type="button"
                  onClick={() => onSelect(category.id)}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3 text-left transition ${
                    isActive
                      ? 'bg-white shadow-sm ring-1 ring-gc-blue/20'
                      : 'hover:bg-white/80'
                  }`}
                >
                  <span
                    className={`text-sm font-bold tracking-wide sm:text-base ${
                      isActive ? 'text-gc-navy' : 'text-gc-navy/70'
                    }`}
                  >
                    {category.label}
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
