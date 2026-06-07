const STATS = [
  {
    value: '24/7',
    labelLines: ['Support &', 'Maintenance'],
    ringText: 'CONTINUOUS SUPPORT MAINTENANCE',
  },
  {
    value: '15+',
    labelLines: ['Projects', 'Delivered'],
    ringText: 'CRAFTING WINNING SOLUTIONS',
  },
  {
    value: '5+',
    labelLines: ['Years of', 'Experience'],
    ringText: 'EXPERIENCE MEETS INNOVATION',
  },
  {
    value: '10+',
    labelLines: ['Clients', 'Served'],
    ringText: 'TRUSTED WORLDWIDE PARTNERS',
  },
]

const RING_RADIUS = 90
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS
const GAP_ARC = CIRCUMFERENCE * 0.06

function getRingFontSize(text) {
  if (text.length > 30) return 12.5
  if (text.length > 24) return 13.5
  return 14.5
}

function RingText({ pathId, ringText }) {
  const words = ringText.split(' ')
  const charUnits = words.reduce((sum, word) => sum + word.length, 0)
  const wordSpace = CIRCUMFERENCE - words.length * GAP_ARC
  const fontSize = getRingFontSize(ringText)

  let offset = 0

  return words.map((word, wordIndex) => {
    const wordArc = (word.length / charUnits) * wordSpace
    const startOffset = offset
    offset += wordArc + GAP_ARC

    return (
      <text
        key={`${pathId}-${wordIndex}`}
        fill="#007ffc"
        fontSize={fontSize}
        fontWeight="900"
        fontFamily="DM Sans, system-ui, sans-serif"
        className="stat-ring-label"
      >
        <textPath
          href={`#${pathId}`}
          startOffset={startOffset}
          textLength={wordArc}
          lengthAdjust="spacing"
        >
          {word}
        </textPath>
      </text>
    )
  })
}

function StatRing({ value, labelLines, ringText, index }) {
  const pathId = `agency-stat-ring-${index}`

  return (
    <div className="stat-ring-item relative mx-auto aspect-square w-full max-w-[175px] overflow-hidden sm:max-w-[210px] md:max-w-[235px] lg:max-w-[260px]">
      <svg
        viewBox="0 0 220 220"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <path
            id={pathId}
            d="M 110, 110 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1 -180,0"
            fill="none"
          />
        </defs>

        <g className="stat-ring-rotate">
          <RingText pathId={pathId} ringText={ringText} />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-5 sm:px-8">
        <p className="text-[2rem] font-extrabold leading-none tracking-tight text-gc-navy sm:text-[2.5rem] lg:text-[3rem]">
          {value}
        </p>
        <div className="mt-1.5 text-center text-xs font-semibold leading-tight text-gc-navy/65 sm:mt-2 sm:text-sm">
          {labelLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AgencyStats() {
  return (
    <div className="mt-6 py-2 sm:mt-8 sm:py-3 lg:mt-10 lg:py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-8 px-4 sm:gap-x-12 sm:gap-y-10 sm:px-6 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-6 lg:px-8 xl:gap-x-24">
        {STATS.map((stat, index) => (
          <StatRing key={stat.value} index={index} {...stat} />
        ))}
      </div>
    </div>
  )
}
