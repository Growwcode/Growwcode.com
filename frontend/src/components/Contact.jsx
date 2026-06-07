import { useState } from 'react'

const SERVICE_TAGS = [
  'Website',
  'App Development',
  'AI/ML',
  'AI Agents',
  'Cloud Services',
  'Other',
]

function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 280 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-xs"
      aria-hidden="true"
    >
      <circle cx="140" cy="230" rx="60" ry="8" fill="#f3f4f6" />
      <circle cx="140" cy="80" r="24" stroke="#111" strokeWidth="2" fill="#fff" />
      <path d="M128 73 Q140 63 152 73" stroke="#111" strokeWidth="2" fill="none" />
      <circle cx="133" cy="78" r="2" fill="#111" />
      <circle cx="147" cy="78" r="2" fill="#111" />
      <rect x="118" y="104" width="44" height="55" rx="8" stroke="#111" strokeWidth="2" fill="#f0f4f8" />
      <path d="M100 145 L118 120" stroke="#111" strokeWidth="2" />
      <path d="M180 145 L162 120" stroke="#111" strokeWidth="2" />
      <rect x="108" y="159" width="18" height="35" rx="4" stroke="#111" strokeWidth="2" fill="#fff" />
      <rect x="154" y="159" width="18" height="35" rx="4" stroke="#111" strokeWidth="2" fill="#fff" />
      <rect x="175" y="60" width="55" height="90" rx="10" stroke="#111" strokeWidth="2" fill="#fff" />
      <rect x="183" y="72" width="39" height="55" rx="4" fill="#f0f4f8" />
      <circle cx="202" cy="138" r="6" stroke="#111" strokeWidth="1.5" fill="#fff" />
      <path d="M60 100 L75 85 M55 110 L70 95" stroke="#007ffc" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState(['Website'])
  const [submitted, setSubmitted] = useState(false)

  function toggleService(tag) {
    setSelectedServices((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-base text-gc-navy/60">
              Ready to start your next project? Reach out and our team will get back to
              you within 24 hours.
            </p>

            <a
              href="tel:+919876543210"
              className="mt-8 inline-block rounded-md bg-gc-blue px-8 py-4 text-lg font-bold text-white shadow-md shadow-gc-blue/30 transition-colors hover:bg-gc-blue/90"
            >
              +91 98765 43210
            </a>

            <div className="mt-10 hidden lg:block">
              <ContactIllustration />
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-gc-navy">Select services</p>
            <div className="mb-8 flex flex-wrap gap-3">
              {SERVICE_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleService(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedServices.includes(tag)
                      ? 'bg-gc-blue text-white'
                      : 'bg-white text-gc-navy/70 ring-1 ring-brand-200 hover:ring-gc-blue/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-gc-blue/20 bg-gc-blue/5 p-8 text-center">
                <p className="text-lg font-semibold text-gc-navy">Thank you!</p>
                <p className="mt-2 text-sm text-gc-navy/60">
                  We&apos;ve received your message and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm font-semibold text-gc-navy">Enter details</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    className="w-full rounded-md border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gc-blue focus:ring-2 focus:ring-gc-blue/20"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    className="w-full rounded-md border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gc-blue focus:ring-2 focus:ring-gc-blue/20"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full rounded-md border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gc-blue focus:ring-2 focus:ring-gc-blue/20"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full resize-none rounded-md border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gc-blue focus:ring-2 focus:ring-gc-blue/20"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-gc-blue py-3.5 text-sm font-semibold text-white shadow-md shadow-gc-blue/30 transition-colors hover:bg-gc-blue/90 sm:w-auto sm:px-10"
                >
                  Make contact
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
