import { getPortfolioClients } from './portfolio/portfolioData.js'

function ClientTrack({ clients, ariaHidden = false }) {
  return (
    <div className="hero-clients-content" aria-hidden={ariaHidden || undefined}>
      {clients.map((name) => (
        <span key={name} className="hero-client-item">
          <span className="hero-client-name">{name}</span>
        </span>
      ))}
    </div>
  )
}

export default function HeroClients() {
  const clients = getPortfolioClients()

  if (clients.length === 0) return null

  return (
    <div className="hero-clients mx-auto w-full">
      <p className="hero-clients-label mb-4 text-[10px] font-semibold uppercase tracking-[0.24em]">
        Trusted by innovative companies
      </p>

      <div className="hero-clients-marquee" aria-label="Our clients">
        <div className="hero-clients-track">
          <ClientTrack clients={clients} />
          <ClientTrack clients={clients} ariaHidden />
        </div>
      </div>
    </div>
  )
}
