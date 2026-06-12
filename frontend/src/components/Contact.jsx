import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { BTN_PRIMARY, BTN_PRIMARY_BLOCK } from '../config/ui.js'
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  SOCIAL_LINKS,
  formatPhone,
} from '../config/contact.js'

const SERVICE_TAGS = [
  'Website Development',
  'App Development',
  'AI / ML Projects',
  'AI Agents',
  'Cloud Services',
  'DevOps & Automation',
  'AI Automation for Businesses',
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

const TRUST_POINTS = [
  'Response within one business day',
  'Free project consultation',
  'NDA available on request',
]

const inputClassName =
  'w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm text-gc-navy placeholder:text-gc-navy/35 outline-none transition-all focus:border-gc-blue focus:ring-4 focus:ring-gc-blue/10'

function FormField({ label, htmlFor, required, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gc-navy">
        {label}
        {required ? <span className="text-gc-blue"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-gc-navy/50">{hint}</p> : null}
    </div>
  )
}

function ServiceDropdown({ id, selectedServices, onChange }) {
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
      ? 'Choose one or more services'
      : selectedServices.join(', ')

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
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
          className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white py-1.5 shadow-xl shadow-gc-navy/10"
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
                        : 'border-slate-200 bg-white'
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

function ContactMethodCard({ href, label, value, icon, external = false }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      {...linkProps}
      className="group flex items-center gap-4 rounded-2xl border border-white/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all hover:border-gc-blue/25 hover:bg-white hover:shadow-md sm:p-5"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gc-blue/10 text-gc-blue transition-colors group-hover:bg-gc-blue group-hover:text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gc-navy/45">{label}</p>
        <p className="mt-0.5 truncate text-sm font-semibold text-gc-navy transition-colors group-hover:text-gc-blue sm:text-base">
          {value}
        </p>
      </div>
      <svg
        className="ml-auto h-4 w-4 shrink-0 text-gc-navy/25 transition-all group-hover:translate-x-0.5 group-hover:text-gc-blue"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
      </svg>
    </a>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-gc-navy transition-all hover:border-gc-blue/30 hover:bg-gc-blue/5 hover:text-gc-blue"
    >
      {children}
    </a>
  )
}

function ContactSidebar({ isPage }) {
  return (
    <div className={isPage ? 'space-y-6' : 'mt-8 space-y-5'}>
      <div className="space-y-3">
        {CONTACT_PHONES.map((phone) => (
          <ContactMethodCard
            key={phone}
            href={`tel:+91${phone}`}
            label="Phone"
            value={formatPhone(phone)}
            icon={
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.25 1L6.6 10.8z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        ))}

        <ContactMethodCard
          href={`mailto:${CONTACT_EMAIL}`}
          label="Email"
          value={CONTACT_EMAIL}
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M5 7l7 5 7-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />

        <ContactMethodCard
          href={SOCIAL_LINKS.whatsapp}
          label="WhatsApp"
          value={formatPhone(CONTACT_PHONES[0])}
          external
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          }
        />
      </div>

      {isPage ? (
        <div className="rounded-2xl border border-gc-blue/15 bg-gc-navy p-5 sm:p-6">
          <p className="text-sm font-semibold text-white">Why teams choose GrowwCode</p>
          <ul className="mt-4 space-y-3">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gc-blue" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gc-navy/45">Follow us</p>
        <div className="flex gap-3">
          <SocialLink href={SOCIAL_LINKS.instagram} label="Instagram">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </SocialLink>

          <SocialLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>

          <SocialLink href={SOCIAL_LINKS.facebook} label="Facebook">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </SocialLink>

          <SocialLink href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </div>
  )
}

function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pb-4 pt-8 sm:pb-6 sm:pt-10 lg:pb-8 lg:pt-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(0,127,252,0.14),transparent_42%),radial-gradient(circle_at_top_right,rgba(1,44,100,0.08),transparent_38%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gc-blue/20 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gc-blue shadow-[0_0_8px_rgba(0,127,252,0.5)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gc-navy">
              Contact GrowwCode
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-gc-navy sm:text-4xl lg:text-5xl">
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-gc-blue to-gc-navy bg-clip-text text-transparent">
              exceptional
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gc-navy/65 sm:text-lg">
            Share your project goals and our team will respond with a tailored plan, timeline,
            and next steps — usually within one business day.
          </p>
        </div>
      </div>
    </section>
  )
}

function SuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gc-navy/50 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-success-title"
    >
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white p-8 text-center shadow-2xl shadow-gc-navy/20 sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gc-blue/10 text-gc-blue">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12l4 4L19 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p id="contact-success-title" className="mt-5 text-2xl font-bold text-gc-navy">
          Message sent
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">
          Thanks for reaching out. We&apos;ve received your details and will get back to you
          shortly.
        </p>
        <button type="button" onClick={onClose} className={`${BTN_PRIMARY} mt-8 w-full sm:w-auto`}>
          Done
        </button>
      </div>
    </div>
  )
}

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  address: '',
  businessName: '',
  message: '',
}

function ContactForm({ formData, selectedServices, isSubmitting, error, onSubmit, updateField, setSelectedServices }) {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First name" htmlFor="firstName" required>
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={updateField('firstName')}
            required
            className={inputClassName}
          />
        </FormField>
        <FormField label="Last name" htmlFor="lastName" required>
          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={updateField('lastName')}
            required
            className={inputClassName}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Email" htmlFor="email" required>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={updateField('email')}
            required
            className={inputClassName}
          />
        </FormField>
        <FormField label="Mobile number" htmlFor="mobile" required>
          <input
            id="mobile"
            type="tel"
            name="mobile"
            placeholder="10-digit number"
            value={formData.mobile}
            onChange={updateField('mobile')}
            required
            className={inputClassName}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Services needed" htmlFor="services" required>
          <ServiceDropdown
            id="services"
            selectedServices={selectedServices}
            onChange={setSelectedServices}
          />
        </FormField>
        <FormField label="Business name" htmlFor="businessName">
          <input
            id="businessName"
            type="text"
            name="businessName"
            placeholder="Your company or brand"
            value={formData.businessName}
            onChange={updateField('businessName')}
            className={inputClassName}
          />
        </FormField>
      </div>

      <FormField label="Project brief" htmlFor="message">
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your goals, timeline, and budget..."
          rows={4}
          value={formData.message}
          onChange={updateField('message')}
          className={`${inputClassName} resize-none`}
        />
      </FormField>

      <FormField label="Address" htmlFor="address">
        <textarea
          id="address"
          name="address"
          placeholder="City, state, or full address"
          rows={2}
          value={formData.address}
          onChange={updateField('address')}
          className={`${inputClassName} resize-none`}
        />
      </FormField>

      {error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${BTN_PRIMARY} w-full sm:w-auto`}
      >
        {isSubmitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending message...
          </>
        ) : (
          <>
            Send message
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  const { pathname } = useLocation()
  const isPage = pathname === '/contact'

  const [formData, setFormData] = useState(initialFormData)
  const [selectedServices, setSelectedServices] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  function updateField(field) {
    return (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }
  }

  function handleSuccessClose() {
    setSubmitted(false)
    setFormData(initialFormData)
    setSelectedServices([])
    setError('')
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
    } catch (err) {
      console.error('EmailJS error:', err)
      const detail = err?.text?.trim()
      setError(
        import.meta.env.DEV && detail
          ? `Email failed: ${detail}`
          : 'Something went wrong. Please try again or call us directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isPage) {
    return (
      <>
        <ContactHero />

        <section id="contact" className="relative bg-[#f7f9fc] pb-20 pt-2 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(0,127,252,0.08),transparent_70%)]" />

          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-10 xl:gap-14">
              <div className="lg:sticky lg:top-24">
                <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">
                  Direct contact
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gc-navy sm:text-3xl">
                  We&apos;re here to help
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gc-navy/60 sm:text-base">
                  Prefer a quick call or message? Reach us directly through any channel below.
                </p>
                <ContactSidebar isPage />
              </div>

              <div className="rounded-3xl border border-white/80 bg-white p-6 shadow-xl shadow-gc-navy/5 sm:p-8 lg:p-10">
                <div className="mb-8 border-b border-slate-100 pb-6">
                  <h2 className="text-xl font-bold text-gc-navy sm:text-2xl">Start your project</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gc-navy/60">
                    Fill in the details below and we&apos;ll schedule a consultation to discuss your
                    requirements.
                  </p>
                </div>

                <ContactForm
                  formData={formData}
                  selectedServices={selectedServices}
                  isSubmitting={isSubmitting}
                  error={error}
                  onSubmit={handleSubmit}
                  updateField={updateField}
                  setSelectedServices={setSelectedServices}
                />
              </div>
            </div>
          </div>
        </section>

        {submitted ? <SuccessModal onClose={handleSuccessClose} /> : null}
      </>
    )
  }

  return (
    <section id="contact" className="bg-brand-50 pt-10 pb-20 lg:pt-12 lg:pb-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-gc-blue">Contact us</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gc-navy sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gc-navy/60">
              Have a project in mind? Tell us what you need and our team will reach out within one
              business day.
            </p>

            <ContactSidebar isPage={false} />
          </div>

          <div className="rounded-2xl border border-white/80 bg-white p-6 shadow-lg shadow-gc-navy/5 sm:p-8">
            <ContactForm
              formData={formData}
              selectedServices={selectedServices}
              isSubmitting={isSubmitting}
              error={error}
              onSubmit={handleSubmit}
              updateField={updateField}
              setSelectedServices={setSelectedServices}
            />
          </div>
        </div>
      </div>

      {submitted ? <SuccessModal onClose={handleSuccessClose} /> : null}
    </section>
  )
}
