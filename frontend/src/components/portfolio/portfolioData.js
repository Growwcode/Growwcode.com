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

const appdevProjects = [
  { id: 'appdev-1', src: null, alt: 'App development project 1', title: 'Coming Soon' },
  { id: 'appdev-2', src: null, alt: 'App development project 2', title: 'Coming Soon' },
  { id: 'appdev-3', src: null, alt: 'App development project 3', title: 'Coming Soon' },
]

const cloudProjects = [
  { id: 'cloud-1', src: null, alt: 'Cloud project 1', title: 'Coming Soon' },
  { id: 'cloud-2', src: null, alt: 'Cloud project 2', title: 'Coming Soon' },
  { id: 'cloud-3', src: null, alt: 'Cloud project 3', title: 'Coming Soon' },
]

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'all',
    label: 'ALL',
    thumbnail: webdevProjects[0].src,
    images: [...webdevProjects, ...appdevProjects, ...cloudProjects],
  },
  {
    id: 'webdev',
    label: 'WEBDEV',
    thumbnail: webdevProjects[0].src,
    images: webdevProjects,
  },
  {
    id: 'appdev',
    label: 'APPDEV',
    thumbnail: null,
    images: appdevProjects,
  },
  {
    id: 'cloud',
    label: 'CLOUD',
    thumbnail: null,
    images: cloudProjects,
  },
]
