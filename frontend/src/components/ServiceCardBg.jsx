export default function ServiceCardBg({ variant }) {
  switch (variant) {
    case 'web':
      return (
        <div className="service-card-bg service-bg service-bg--web" aria-hidden="true">
          <span className="service-bg-web-code">&lt;/&gt;</span>
          <div className="service-bg-web-wire">
            <span className="service-bg-web-wire-line" />
            <span className="service-bg-web-wire-line service-bg-web-wire-line--2" />
            <span className="service-bg-web-wire-line service-bg-web-wire-line--short" />
            <span className="service-bg-web-cursor" />
          </div>
        </div>
      )
    case 'app':
      return (
        <div className="service-card-bg service-bg service-bg--app" aria-hidden="true">
          <div className="service-bg-app-ring service-bg-app-ring--1" />
          <div className="service-bg-app-ring service-bg-app-ring--2" />
          <div className="service-bg-app-ring service-bg-app-ring--3" />
        </div>
      )
    case 'ai-ml':
      return (
        <div className="service-card-bg service-bg service-bg--ai-ml" aria-hidden="true">
          <div className="service-bg-node service-bg-node--1" />
          <div className="service-bg-node service-bg-node--2" />
          <div className="service-bg-node service-bg-node--3" />
          <div className="service-bg-node service-bg-node--4" />
          <svg className="service-bg-neural" viewBox="0 0 200 120" fill="none">
            <path className="service-bg-neural-line" d="M30 60 L90 30 L150 60" />
            <path className="service-bg-neural-line service-bg-neural-line--2" d="M30 60 L90 90 L150 60" />
            <path className="service-bg-neural-line service-bg-neural-line--3" d="M90 30 L90 90" />
          </svg>
        </div>
      )
    case 'ai-agents':
      return (
        <div className="service-card-bg service-bg service-bg--ai-agents" aria-hidden="true">
          <svg className="service-bg-agent-svg" viewBox="0 0 200 130" fill="none">
            <path className="service-bg-agent-path" d="M108 58 L62 32" />
            <path className="service-bg-agent-path service-bg-agent-path--2" d="M108 58 L152 38" />
            <path className="service-bg-agent-path service-bg-agent-path--3" d="M108 58 L108 98" />
            <path className="service-bg-agent-path service-bg-agent-path--4" d="M108 58 L72 88" />
            <g className="service-bg-agent-node" transform="translate(62 32)">
              <circle r="5.5" />
            </g>
            <g className="service-bg-agent-node service-bg-agent-node--2" transform="translate(152 38)">
              <circle r="5.5" />
            </g>
            <g className="service-bg-agent-node service-bg-agent-node--3" transform="translate(108 98)">
              <circle r="5.5" />
            </g>
            <g className="service-bg-agent-node service-bg-agent-node--4" transform="translate(72 88)">
              <circle r="5.5" />
            </g>
            <g className="service-bg-agent-hub-wrap" transform="translate(108 58)">
              <circle className="service-bg-agent-hub-ring" r="18" />
              <circle className="service-bg-agent-hub" r="11" />
            </g>
          </svg>
        </div>
      )
    case 'cloud':
      return (
        <div className="service-card-bg service-bg service-bg--cloud" aria-hidden="true">
          <div className="service-bg-cloud service-bg-cloud--1" />
          <div className="service-bg-cloud service-bg-cloud--2" />
        </div>
      )
    case 'consulting':
      return (
        <div className="service-card-bg service-bg service-bg--consulting" aria-hidden="true">
          <div className="service-bg-bubble service-bg-bubble--1" />
          <div className="service-bg-bubble service-bg-bubble--2" />
          <div className="service-bg-bubble service-bg-bubble--3" />
        </div>
      )
    default:
      return null
  }
}
