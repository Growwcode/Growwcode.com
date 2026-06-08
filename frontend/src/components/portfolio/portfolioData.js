const webdevProjects = [
  {
    id: 'toppercentile',
    title: 'TheTopPercentile',
    src: 'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831310/web-toppercentile_nidm0p.png',
    alt: 'TheTopPercentile — MBA coaching and course selling platform',
    url: 'https://thetoppercentile.co.in/',
    description:
      'Education course selling platform for MBA entrance exam prep (CAT, CET, NMAT, SNAP). Enrollment plans, mentorship programs, success stories, and free resources — built for India\'s top B-school aspirants.',
    tags: ['Education', 'Course Platform'],
  },
  {
    id: 'dynamicworld',
    title: 'Dynamic World',
    src: 'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831308/web-dynamicworld_urvupk.png',
    alt: 'Dynamic World — college information and study abroad platform',
    url: 'https://www.dynamicworld.in/',
    description:
      'Educational college information platform with a large database of universities and programs. End-to-end student counseling, application tracking, and study abroad services at scale.',
    tags: ['Education', 'College Directory'],
  },
  {
    id: 'styletrending',
    title: 'StyleTrending',
    src: 'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780831308/web-Styletrendin_phxtwh.png',
    alt: 'StyleTrending — fashion e-commerce platform',
    url: 'https://www.styletrending.in/',
    description:
      'Modern e-commerce platform for fashion, watches, and accessories with 4,000+ products. Advanced filtering, cart, checkout, order tracking, and a full admin panel to manage the entire store.',
    tags: ['E-Commerce', 'Fashion'],
    adminPanel: {
      summary: 'Full admin panel to manage products, orders, customers, and store content.',
      features: [
        'Dashboard with revenue, orders, and performance analytics',
        'Product & inventory management for 4,000+ SKUs',
        'Order management with status updates and fulfillment tracking',
        'Customer accounts and purchase history',
        'Category, banner, and promotional content CMS',
        'Reports for sales, payments, and inventory',
      ],
    },
  },
]

const devopsProjects = [
  {
    id: 'choicetime',
    title: 'ChoiceTime',
    src: 'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780836430/devops-choice_vzifnc.png',
    alt: 'ChoiceTime — premium watches e-commerce with AWS DevOps deployment',
    url: 'https://www.choicetime.in/',
    description:
      'Premium watches & lifestyle e-commerce platform with 250+ products across 8+ categories. Full-stack store built with React, Node.js, and MongoDB — deployed on AWS with Docker, GitLab, and CI/CD for secure, scalable production releases.',
    tags: ['E-Commerce', 'Watches', 'AWS'],
    devOps: {
      summary:
        'End-to-end AWS deployment with Docker containerization, GitLab, and CI/CD pipelines.',
      features: [
        'AWS EC2 server hosting with scalable cloud infrastructure',
        'Docker containerization for consistent dev and production environments',
        'GitLab repository with version control and collaboration workflows',
        'CI/CD pipelines for automated build, test, and deployment',
        'Cloudinary image storage and optimized media delivery',
        'SSL-secured domain, MongoDB Atlas, and production-ready performance',
      ],
    },
  },
]

const appdevProjects = [
  {
    id: 'restrobazaar',
    title: 'RestroBazaar',
    src: 'https://res.cloudinary.com/dm3wpwfay/image/upload/q_auto/f_auto/v1780838124/Appdev-restroBazaar_arxla6.png',
    alt: 'RestroBazaar — food packaging and restaurant supplies mobile app',
    url: 'https://play.google.com/store/apps/details?id=com.akenterprises.restrobazaar',
    linkLabel: 'View on Play Store',
    description:
      'Your one-stop destination for all restaurant supplies and catering needs. Quality products, fast delivery, and exceptional service. Cross-platform mobile app for restaurants and caterers to browse, shop, and order premium food packaging and disposable supplies with ease.',
    tags: ['Mobile App', 'Food Packaging', 'E-Commerce'],
    playStore: {
      summary:
        'GrowwCode developed, deployed, and hosted RestroBazaar on the Google Play Store.',
      features: [
        'Published and live on Google Play Store',
        'End-to-end mobile development and Play Store listing setup',
        'OTP login, cart, wishlist, and multiple address management',
        'Secure payments with COD and online checkout (Razorpay)',
        'Real-time order tracking, history, and push notifications',
        'Built with Flutter, Node.js, MongoDB, Firebase & REST APIs',
      ],
    },
  },
]

const aimlProjects = [
  {
    id: 'aiml-1',
    src: null,
    alt: 'AI/ML project coming soon',
    title: 'Coming Soon',
  },
]

const crmProjects = [
  {
    id: 'crm-1',
    src: null,
    alt: 'CRM project coming soon',
    title: 'Coming Soon',
  },
]

const portfolioProjects = [
  ...webdevProjects,
  ...appdevProjects,
  ...devopsProjects,
  ...aimlProjects,
  ...crmProjects,
]

/** Client names from completed work (excludes placeholders). */
export function getPortfolioClients() {
  return portfolioProjects
    .filter((project) => project.title && project.title !== 'Coming Soon' && project.url)
    .map((project) => project.title)
}

/** Hero floating cards — Web Dev, App Dev, DevOps from portfolio categories. */
export function getHeroWorkCategories() {
  return ['appdev', 'devops']
    .map((id) => {
      const category = PORTFOLIO_CATEGORIES.find((cat) => cat.id === id)
      if (!category) return null

      const featured = category.images.find((project) => project.src) ?? category.images[0]

      return {
        id: category.id,
        title: category.displayLabel,
        tag: category.label,
        src: category.thumbnail ?? featured?.src,
        alt: featured?.alt ?? `${category.displayLabel} — GrowwCode portfolio`,
      }
    })
    .filter(Boolean)
}

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'all',
    label: 'ALL',
    displayLabel: 'All Work',
    thumbnail: webdevProjects[0].src,
    images: [
      ...webdevProjects,
      ...appdevProjects,
      ...devopsProjects,
      ...aimlProjects,
      ...crmProjects,
    ],
  },
  {
    id: 'webdev',
    label: 'WEBDEV',
    displayLabel: 'Web Dev',
    thumbnail: webdevProjects[0].src,
    images: webdevProjects,
  },
  {
    id: 'appdev',
    label: 'APPDEV',
    displayLabel: 'App Dev',
    thumbnail: appdevProjects[0].src,
    images: appdevProjects,
  },
  {
    id: 'devops',
    label: 'DEVOPS',
    displayLabel: 'DevOps',
    thumbnail: devopsProjects[0].src,
    images: devopsProjects,
  },
  {
    id: 'aiml',
    label: 'AI/ML',
    displayLabel: 'AI / ML',
    thumbnail: null,
    images: aimlProjects,
  },
  {
    id: 'crm',
    label: 'CRM',
    displayLabel: 'CRM',
    thumbnail: null,
    images: crmProjects,
  },
]
