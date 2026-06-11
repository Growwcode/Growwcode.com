import { Link } from 'react-router-dom'
import { getHeroWorkCategories } from './portfolio/portfolioData.js'

const APPDEV_FEATURES = [
  { title: 'Cross-Platform', desc: 'iOS & Android from one codebase' },
  { title: 'Secure Auth', desc: 'OTP login and user sessions' },
  { title: 'Play Store Ready', desc: 'Publish and scale with confidence' },
]

const DEVOPS_ITEMS = [
  { name: 'AWS EC2', role: 'Cloud hosting', status: 'Live' },
  { name: 'Docker', role: 'Containers', status: 'Active' },
  { name: 'CI/CD Pipeline', role: 'Auto deploy', status: '24/7' },
]

function AppDevVisual() {
  return (
    <div className="hero-ui-stack">
      {APPDEV_FEATURES.map((item) => (
        <div key={item.title} className="hero-ui-stack-item">
          <p className="hero-ui-stack-title">{item.title}</p>
          <p className="hero-ui-stack-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

function DevOpsVisual() {
  return (
    <div className="hero-ui-list">
      <p className="hero-ui-list-label">Pipeline stack</p>
      {DEVOPS_ITEMS.map((item) => (
        <div key={item.name} className="hero-ui-list-row">
          <div className="hero-ui-list-avatar" aria-hidden="true">
            {item.name.charAt(0)}
          </div>
          <div className="hero-ui-list-meta">
            <p className="hero-ui-list-name">{item.name}</p>
            <p className="hero-ui-list-role">{item.role}</p>
          </div>
          <span className="hero-ui-list-status">{item.status}</span>
        </div>
      ))}
    </div>
  )
}

const CARD_CONTENT = {
  appdev: {
    className: 'hero-float-card--appdev',
    zIndex: 1,
    heading: 'Ship Apps Users Love',
    subtext: 'Streamline mobile delivery from idea to app store.',
    Visual: AppDevVisual,
  },
  devops: {
    className: 'hero-float-card--devops',
    zIndex: 2,
    heading: 'Deploy With Confidence',
    subtext: 'Stay connected with secure, automated infrastructure.',
    Visual: DevOpsVisual,
  },
}

export default function HeroFloatingCards() {
  const categories = getHeroWorkCategories()

  if (categories.length === 0) return null

  return (
    <div className="hero-float-stage" aria-label="Our work categories">
      <div className="hero-float-stack">
        {categories.map((category) => {
          const content = CARD_CONTENT[category.id] ?? CARD_CONTENT.appdev
          const Visual = content.Visual

          return (
            <Link
              key={category.id}
              to="/project-work"
              className={`hero-float-card ${content.className}`}
              style={{ zIndex: content.zIndex }}
            >
            <div className="hero-float-card-top">
              <span className="hero-float-card-tag">{category.tag}</span>
              <p className="hero-float-card-heading">{content.heading}</p>
              <p className="hero-float-card-subtext">{content.subtext}</p>
            </div>
            <div className="hero-float-card-panel">
              <Visual />
            </div>
          </Link>
        )
      })}
      </div>
    </div>
  )
}
