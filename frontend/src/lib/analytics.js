const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function isAnalyticsEnabled() {
  return Boolean(MEASUREMENT_ID && import.meta.env.PROD)
}

export function initAnalytics() {
  if (!isAnalyticsEnabled()) return

  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function trackPageView(path) {
  if (!isAnalyticsEnabled() || typeof window.gtag !== 'function') return

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  })
}
