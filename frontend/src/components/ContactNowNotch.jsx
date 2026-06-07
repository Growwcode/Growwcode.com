import { Link } from 'react-router-dom'

const NOTCH_PATH =
  'M47 0 H313 C327 0 337 4 343 12 L360 58 H0 L17 12 C23 4 33 0 47 0 Z'

export default function ContactNowNotch() {
  return (
    <div className="contact-now-notch-wrapper pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pt-5 sm:pt-5 md:pt-5">
      <Link
        to="/contact"
        className="contact-now-notch pointer-events-auto"
        aria-label="Contact Now"
      >
        <svg
          className="contact-now-notch-bg"
          viewBox="0 0 360 58"
          aria-hidden="true"
        >
          <path d={NOTCH_PATH} />
        </svg>
        <span className="contact-now-notch-label">Contact Now</span>
      </Link>
    </div>
  )
}
