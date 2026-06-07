import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const MIN_SCALE = 1
const MAX_SCALE = 5
const ZOOM_STEP = 0.35

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function getTouchDistance(touches) {
  if (touches.length < 2) return 0
  const [a, b] = touches
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY)
}

export default function PortfolioImageLightbox({ image, onClose }) {
  const viewportRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const scaleRef = useRef(1)
  const positionRef = useRef({ x: 0, y: 0 })
  const pinchStartRef = useRef(null)
  const panStartRef = useRef(null)
  const lastTapRef = useRef(0)

  const syncTransform = useCallback((nextScale, nextPosition) => {
    scaleRef.current = nextScale
    positionRef.current = nextPosition
    setScale(nextScale)
    setPosition(nextPosition)
  }, [])

  const resetView = useCallback(() => {
    syncTransform(1, { x: 0, y: 0 })
  }, [syncTransform])

  const zoomBy = useCallback(
    (delta) => {
      syncTransform(clamp(scaleRef.current + delta, MIN_SCALE, MAX_SCALE), positionRef.current)
    },
    [syncTransform],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    function onWheel(e) {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP
      syncTransform(
        clamp(scaleRef.current + delta, MIN_SCALE, MAX_SCALE),
        positionRef.current,
      )
    }

    function onTouchMove(e) {
      if (e.touches.length === 2 && pinchStartRef.current) {
        e.preventDefault()
        const distance = getTouchDistance(e.touches)
        const nextScale = clamp(
          pinchStartRef.current.scale * (distance / pinchStartRef.current.distance),
          MIN_SCALE,
          MAX_SCALE,
        )
        syncTransform(nextScale, pinchStartRef.current.position)
        return
      }

      if (e.touches.length === 1 && panStartRef.current && scaleRef.current > 1) {
        e.preventDefault()
        const deltaX = e.touches[0].clientX - panStartRef.current.x
        const deltaY = e.touches[0].clientY - panStartRef.current.y
        syncTransform(scaleRef.current, {
          x: panStartRef.current.position.x + deltaX,
          y: panStartRef.current.position.y + deltaY,
        })
      }
    }

    viewport.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('touchmove', onTouchMove, { passive: false })

    return () => {
      viewport.removeEventListener('wheel', onWheel)
      viewport.removeEventListener('touchmove', onTouchMove)
    }
  }, [syncTransform])

  function handleTouchStart(e) {
    if (e.touches.length === 2) {
      panStartRef.current = null
      pinchStartRef.current = {
        distance: getTouchDistance(e.touches),
        scale: scaleRef.current,
        position: { ...positionRef.current },
      }
      return
    }

    if (e.touches.length === 1 && scaleRef.current > 1) {
      pinchStartRef.current = null
      panStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        position: { ...positionRef.current },
      }
    }
  }

  function handleTouchEnd(e) {
    if (e.touches.length === 0) {
      if (e.changedTouches.length === 1 && !pinchStartRef.current) {
        const now = Date.now()
        if (now - lastTapRef.current < 300) {
          if (scaleRef.current > 1) resetView()
          else syncTransform(2.5, { x: 0, y: 0 })
          lastTapRef.current = 0
        } else {
          lastTapRef.current = now
        }
      }

      pinchStartRef.current = null
      panStartRef.current = null

      if (scaleRef.current <= 1.05) {
        resetView()
      }
    }

    if (e.touches.length === 1) {
      pinchStartRef.current = null
    }
  }

  function handleDoubleClick() {
    if (scaleRef.current > 1) resetView()
    else syncTransform(2.5, { x: 0, y: 0 })
  }

  function handleMouseDown(e) {
    if (scaleRef.current <= 1 || e.button !== 0) return
    panStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      position: { ...positionRef.current },
    }
  }

  function handleMouseMove(e) {
    if (!panStartRef.current || scaleRef.current <= 1) return
    const deltaX = e.clientX - panStartRef.current.x
    const deltaY = e.clientY - panStartRef.current.y
    syncTransform(scaleRef.current, {
      x: panStartRef.current.position.x + deltaX,
      y: panStartRef.current.position.y + deltaY,
    })
  }

  function handleMouseUp() {
    panStartRef.current = null
  }

  if (!image?.src) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-gc-navy/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${image.title ?? 'Project'} preview`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white sm:text-base">
            {image.title ?? 'Project preview'}
          </p>
          <p className="text-xs text-white/60 sm:text-sm">Pinch, scroll, or use controls to zoom</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div
        ref={viewportRef}
        className="relative flex-1 touch-none overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="max-h-full max-w-full select-none object-contain transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? 'grab' : 'zoom-in',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-white/10 px-4 py-3 sm:gap-4 sm:py-4">
        <button
          type="button"
          onClick={() => zoomBy(-ZOOM_STEP)}
          aria-label="Zoom out"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-white transition hover:bg-white/20"
        >
          −
        </button>
        <button
          type="button"
          onClick={resetView}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => zoomBy(ZOOM_STEP)}
          aria-label="Zoom in"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-white transition hover:bg-white/20"
        >
          +
        </button>
        <span className="ml-1 text-sm text-white/70">{Math.round(scale * 100)}%</span>
      </div>
    </div>,
    document.body,
  )
}
