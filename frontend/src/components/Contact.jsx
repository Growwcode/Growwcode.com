import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_TAGS = [
  'Website Development',
  'App Development',
  'AI / ML Projects',
  'AI Agents',
  'Cloud Services',
  'DevOps & Automation',
  'IT Consulting',
  'UI/UX Design',
  'E-Commerce Solutions',
  'CRM / ERP Development',
  'API Integration',
  'Cybersecurity',
  'Data Analytics',
  'Maintenance & Support',
  'Digital Marketing',
  'Other',
]

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const inputClassName =
  'w-full rounded-md border border-brand-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-gc-blue focus:ring-2 focus:ring-gc-blue/20'

function ServiceDropdown({ selectedServices, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleService(tag) {
    onChange(
      selectedServices.includes(tag)
        ? selectedServices.filter((item) => item !== tag)
        : [...selectedServices, tag],
    )
  }

  const displayText =
    selectedServices.length === 0
      ? 'Select services'
      : selectedServices.join(', ')

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`${inputClassName} flex items-center justify-between text-left ${
          selectedServices.length === 0 ? 'text-gc-navy/45' : 'text-gc-navy'
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate pr-3">{displayText}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-gc-navy/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen ? (
        <ul
          role="listbox"
          aria-multiselectable="true"
          className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-md border border-brand-200 bg-white py-1 shadow-lg shadow-gc-navy/10"
        >
          {SERVICE_TAGS.map((tag) => {
            const isSelected = selectedServices.includes(tag)

            return (
              <li key={tag} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => toggleService(tag)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-brand-50 ${
                    isSelected ? 'bg-brand-50/80 font-medium text-gc-navy' : 'text-gc-navy/70'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                      isSelected
                        ? 'border-gc-blue bg-gc-blue text-white'
                        : 'border-brand-200 bg-white'
                    }`}
                  >
                    {isSelected ? (
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 6L5 8.5L9.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </span>
                  {tag}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address: '',
    businessName: '',
    message: '',
  })
  const [selectedServices, setSelectedServices] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  function updateField(field) {
    return (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (selectedServices.length === 0) {
      setError('Please select at least one service.')
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setError('Email service is not configured. Please add EmailJS keys to your .env file.')
      return
    }

    setIsSubmitting(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          address: formData.address,
          services: selectedServices.join(', '),
          business_name: formData.businessName || 'Not provided',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      )

      setSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        businessName: '',
        message: '',
      })
      setSelectedServices([])
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
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
            {submitted ? (
              <div className="rounded-2xl border border-gc-blue/20 bg-gc-blue/5 p-8 text-center">
                <p className="text-lg font-semibold text-gc-navy">Thank you!</p>
                <p className="mt-2 text-sm text-gc-navy/60">
                  We&apos;ve received your message and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={updateField('firstName')}
                    required
                    className={inputClassName}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={updateField('lastName')}
                    required
                    className={inputClassName}
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={updateField('email')}
                  required
                  className={inputClassName}
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile number"
                  value={formData.mobile}
                  onChange={updateField('mobile')}
                  required
                  className={inputClassName}
                />

                <ServiceDropdown
                  selectedServices={selectedServices}
                  onChange={setSelectedServices}
                />

                <input
                  type="text"
                  name="businessName"
                  placeholder="Business name (Optional)"
                  value={formData.businessName}
                  onChange={updateField('businessName')}
                  className={inputClassName}
                />

                <textarea
                  name="address"
                  placeholder="Address"
                  rows={2}
                  value={formData.address}
                  onChange={updateField('address')}
                  required
                  className={`${inputClassName} resize-none`}
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  value={formData.message}
                  onChange={updateField('message')}
                  required
                  className={`${inputClassName} resize-none`}
                />

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-gc-blue py-3.5 text-sm font-semibold text-white shadow-md shadow-gc-blue/30 transition-colors hover:bg-gc-blue/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
                >
                  {isSubmitting ? 'Sending...' : 'Make contact'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
