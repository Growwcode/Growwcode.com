import { useState } from 'react'

const CATEGORIES = ['All', 'Web Development', 'App Development', 'AI/ML', 'Cloud']

const PROJECTS = [
  {
    id: 1,
    title: 'Enterprise Cloud Migration Platform',
    category: 'Cloud',
    bg: 'bg-navy-dark',
    tag: 'Cloud Services',
  },
  {
    id: 2,
    title: 'AI-Powered Customer Support Agent',
    category: 'AI/ML',
    bg: 'bg-navy',
    tag: 'AI Agents',
  },
  {
    id: 3,
    title: 'E-Commerce Web Application',
    category: 'Web Development',
    bg: 'bg-white border border-brand-200',
    tag: 'Website',
    dark: false,
  },
  {
    id: 4,
    title: 'Fitness Tracking Mobile App',
    category: 'App Development',
    bg: 'bg-navy-light',
    tag: 'Mobile App',
  },
  {
    id: 5,
    title: 'Predictive Analytics Dashboard',
    category: 'AI/ML',
    bg: 'bg-white border border-brand-200',
    tag: 'AI/ML',
    dark: false,
  },
  {
    id: 6,
    title: 'SaaS Product Landing Site',
    category: 'Web Development',
    bg: 'bg-navy',
    tag: 'Website',
  },
]

function ProjectCard({ project }) {
  const isDark = project.dark !== false

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl p-8 transition-transform hover:-translate-y-1 ${project.bg}`}
    >
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
          isDark ? 'bg-white/15 text-white/80' : 'bg-navy/10 text-navy'
        }`}
      >
        {project.tag}
      </span>
      <h3
        className={`mt-4 text-xl font-bold leading-snug ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {project.title}
      </h3>
      <div
        className={`mt-6 flex h-36 items-center justify-center rounded-xl ${
          isDark ? 'bg-white/10' : 'bg-gray-50'
        }`}
      >
        <svg viewBox="0 0 120 80" className="h-20 w-32 opacity-60" aria-hidden="true">
          <rect x="10" y="10" width="100" height="60" rx="6" stroke={isDark ? '#fff' : '#3f5bd9'} strokeWidth="1.5" fill="none" />
          <rect x="20" y="22" width="50" height="4" rx="2" fill={isDark ? '#fff' : '#3f5bd9'} opacity="0.4" />
          <rect x="20" y="32" width="70" height="3" rx="1.5" fill={isDark ? '#fff' : '#3f5bd9'} opacity="0.25" />
          <rect x="20" y="40" width="60" height="3" rx="1.5" fill={isDark ? '#fff' : '#3f5bd9'} opacity="0.25" />
          <rect x="20" y="52" width="30" height="10" rx="3" fill={isDark ? '#fff' : '#3f5bd9'} opacity="0.5" />
        </svg>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section className="bg-brand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Portfolio
        </h2>
        <p className="mt-4 max-w-xl text-base text-gray-500">
          Explore our recent work across web, mobile, AI, and cloud — built for real
          business impact.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-navy text-white'
                  : 'bg-white text-slate-600 ring-1 ring-brand-200 hover:ring-navy/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
