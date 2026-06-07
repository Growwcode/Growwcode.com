import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')

      const scrollToTarget = () => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          return true
        }
        return false
      }

      if (!scrollToTarget()) {
        const timer = setTimeout(scrollToTarget, 150)
        return () => clearTimeout(timer)
      }
      return
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
