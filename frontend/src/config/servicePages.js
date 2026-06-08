export const SERVICE_PAGE_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Custom Software', path: '/custom-software-development' },
  { label: 'Web Development', path: '/web-development-services' },
  { label: 'Mobile Apps', path: '/mobile-app-development' },
  { label: 'React Development', path: '/react-development-company' },
  { label: 'AWS Cloud', path: '/aws-cloud-services' },
]

const SHARED_FAQS = [
  {
    question: 'How much does custom software development cost?',
    answer:
      'Project costs depend on scope, complexity, integrations, and timeline. A focused MVP may start from a smaller budget, while enterprise platforms with multiple modules require a larger investment. GrowwCode provides transparent estimates after a discovery call, breaking down design, development, testing, and deployment so you understand exactly what you are paying for.',
  },
  {
    question: 'How long does development take?',
    answer:
      'Timelines vary by project size. A marketing website or simple web app may take four to eight weeks, while a full custom software platform can take three to six months or longer. We work in agile sprints with regular demos, so you see progress early and can adjust priorities without derailing the schedule.',
  },
  {
    question: 'Do you provide AWS deployment?',
    answer:
      'Yes. GrowwCode designs, builds, and deploys applications on AWS using services such as EC2, ECS, Lambda, S3, RDS, and CloudFront. We configure CI/CD pipelines, monitoring, and security best practices so your application is production-ready, scalable, and cost-efficient from day one.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Absolutely. We provide maintenance plans covering bug fixes, security patches, performance monitoring, feature enhancements, and infrastructure management. Many clients retain us long-term because we built their system and understand the architecture deeply, which means faster resolutions and smarter upgrades.',
  },
]

export const CUSTOM_SOFTWARE_PAGE = {
  seoKey: 'customSoftwareDevelopment',
  path: '/custom-software-development',
  badge: 'Custom Software Development Services',
  h1: 'Custom Software Development Services Built for Your Business',
  heroSubtitle:
    'GrowwCode delivers tailor-made software solutions that automate workflows, eliminate manual bottlenecks, and scale with your growth. From internal tools to customer-facing platforms, we engineer software around your exact requirements—not the other way around.',
  overview: {
    title: 'Why businesses choose custom software over off-the-shelf tools',
    paragraphs: [
      'Off-the-shelf software forces your team to adapt to someone else\'s workflow. Custom software development services flip that model: your processes, compliance needs, and competitive advantages become the foundation of the product. At GrowwCode, we partner with startups, SMBs, and enterprises to design and build applications that fit like a glove—whether you need a CRM replacement, an operations dashboard, or a full SaaS platform.',
      'Our approach starts with discovery. We map your current workflows, identify pain points, and define measurable outcomes before writing a single line of code. That clarity reduces rework, keeps budgets predictable, and ensures the final product solves real business problems. We have delivered custom software across e-commerce, healthcare, logistics, fintech, and education—each project shaped by industry-specific requirements.',
      'Security, scalability, and maintainability are built in from the start. We use modern architectures, clean code practices, and thorough documentation so your internal team or future partners can extend the system confidently. Whether you need a greenfield build or modernization of a legacy application, GrowwCode provides end-to-end custom software development services from concept to launch and beyond.',
    ],
  },
  offerings: {
    title: 'Our custom software development services',
    subtitle: 'End-to-end delivery from strategy through deployment and ongoing support.',
    items: [
      {
        title: 'Business process automation',
        description:
          'Replace spreadsheets and manual handoffs with automated workflows, approval chains, and real-time reporting tailored to how your team actually operates.',
      },
      {
        title: 'Enterprise application development',
        description:
          'Build robust internal platforms for HR, inventory, finance, and operations with role-based access, audit trails, and integration with your existing tools.',
      },
      {
        title: 'SaaS product engineering',
        description:
          'Launch subscription-based products with multi-tenant architecture, billing integration, onboarding flows, and analytics dashboards designed for growth.',
      },
      {
        title: 'Legacy system modernization',
        description:
          'Migrate outdated applications to modern stacks without disrupting operations. We refactor incrementally, preserve critical data, and improve performance.',
      },
      {
        title: 'API development & integrations',
        description:
          'Connect your software with payment gateways, ERPs, CRMs, and third-party services through secure, well-documented APIs.',
      },
      {
        title: 'Dedicated development teams',
        description:
          'Scale your capacity with a dedicated GrowwCode squad that works as an extension of your in-house team, aligned to your roadmap and sprint cadence.',
      },
    ],
  },
  technologies: {
    title: 'Technologies we use for custom software',
    subtitle: 'Proven stacks selected for performance, security, and long-term maintainability.',
    items: [
      'React',
      'Node.js',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'AWS',
      'Docker',
      'TypeScript',
      'GraphQL',
      'Redis',
      'Kubernetes',
      'CI/CD',
    ],
  },
  benefits: {
    title: 'Benefits of partnering with GrowwCode',
    subtitle: 'More than code—we deliver business outcomes you can measure.',
    items: [
      {
        title: 'Built around your workflow',
        description:
          'Every feature maps to a real business need. No bloated modules you will never use—just software that makes your team faster.',
      },
      {
        title: 'Faster time to value',
        description:
          'Agile delivery with weekly demos means you validate ideas early and reach launch sooner without sacrificing quality.',
      },
      {
        title: 'Ownership & IP clarity',
        description:
          'You own the source code, documentation, and deployment assets. Full transparency with no vendor lock-in.',
      },
      {
        title: 'Scalable architecture',
        description:
          'Systems designed to handle growth—from hundreds of users today to thousands tomorrow—without costly rewrites.',
      },
      {
        title: 'Security-first engineering',
        description:
          'Authentication, encryption, access controls, and compliance considerations embedded throughout the development lifecycle.',
      },
      {
        title: 'Long-term partnership',
        description:
          'Post-launch support, feature roadmaps, and proactive maintenance keep your software reliable as your business evolves.',
      },
    ],
  },
  contentSections: [
    {
      title: 'How our custom software development process works',
      paragraphs: [
        'We follow a structured yet flexible process designed to minimize risk and maximize clarity. Discovery and requirements gathering come first: we interview stakeholders, document user stories, and define success metrics. Next, our designers create wireframes and interactive prototypes so you can validate the user experience before development begins.',
        'Development happens in two-week sprints with demos at the end of each cycle. You see working software regularly, provide feedback, and reprioritize the backlog as needed. Quality assurance runs in parallel—automated tests, manual QA, and performance checks ensure stability before every release. Deployment is handled on AWS or your preferred cloud with monitoring and rollback procedures in place.',
        'After launch, we transition to a support and enhancement phase. Whether you need bug fixes, new modules, or infrastructure optimization, GrowwCode remains your technical partner. This continuity is one reason clients choose our custom software development services over agencies that disappear after delivery.',
      ],
    },
    {
      title: 'Industries we build custom software for',
      paragraphs: [
        'GrowwCode has delivered custom platforms for e-commerce brands needing inventory and order management beyond standard storefront tools. Healthcare clients rely on us for patient portals and telemedicine workflows with strict data handling requirements. Logistics companies use our route optimization and fleet tracking systems to cut costs and improve delivery times.',
        'Fintech startups trust us to build secure payment flows, dashboards, and compliance-ready backends. Education providers use our LMS and student analytics tools to improve engagement and outcomes. No matter your industry, we invest time understanding your domain so the software reflects real operational needs—not generic templates.',
      ],
    },
  ],
  faqTitle: 'Frequently asked questions about custom software development',
  faqs: SHARED_FAQS,
  cta: {
    title: 'Ready to build software that fits your business?',
    description:
      'Tell us about your project and get a free consultation. GrowwCode will help you scope, plan, and deliver custom software development services that drive measurable results.',
  },
}

export const WEB_DEVELOPMENT_PAGE = {
  seoKey: 'webDevelopmentServices',
  path: '/web-development-services',
  badge: 'Web Development Company',
  h1: 'Web Development Company for High-Performance Digital Experiences',
  heroSubtitle:
    'As a full-service web development company, GrowwCode builds fast, secure, and SEO-friendly websites and web applications that convert visitors into customers. From corporate sites to complex web platforms, we deliver results that rank, load quickly, and scale.',
  overview: {
    title: 'What makes GrowwCode a trusted web development company',
    paragraphs: [
      'Your website is often the first impression customers have of your brand. A slow, outdated, or confusing site costs you leads every day. GrowwCode is a web development company focused on building digital experiences that perform—technically, visually, and commercially. We combine modern front-end engineering with solid back-end architecture to create websites and web apps that load in seconds, rank in search engines, and guide users toward action.',
      'Whether you need a marketing site, an e-commerce storefront, a customer portal, or a data-driven dashboard, our team brings the same rigor to every project. We use React, Next.js, Node.js, and proven cloud infrastructure to deliver solutions that are maintainable and future-proof. Our designers and developers work together so the final product looks polished and works flawlessly across devices.',
      'As your web development company, we do not just hand over code and walk away. We optimize for Core Web Vitals, implement analytics, configure hosting on AWS, and provide ongoing support. Clients across India and internationally choose GrowwCode because we treat every website as a business asset—not a one-time brochure.',
    ],
  },
  offerings: {
    title: 'Web development services we offer',
    subtitle: 'Comprehensive web solutions from design to deployment and beyond.',
    items: [
      {
        title: 'Corporate & marketing websites',
        description:
          'Professional, responsive websites with compelling content structure, fast load times, and SEO foundations that help you get found online.',
      },
      {
        title: 'E-commerce web development',
        description:
          'Online stores with product catalogs, cart flows, payment integration, inventory sync, and conversion-optimized checkout experiences.',
      },
      {
        title: 'Web application development',
        description:
          'Interactive platforms with user authentication, dashboards, real-time data, and complex business logic delivered through the browser.',
      },
      {
        title: 'CMS & content platforms',
        description:
          'Headless CMS integrations and custom admin panels so your team can update content without touching code.',
      },
      {
        title: 'Website redesign & migration',
        description:
          'Modernize legacy sites, improve performance scores, preserve SEO equity, and migrate to scalable architectures without downtime.',
      },
      {
        title: 'Performance & SEO optimization',
        description:
          'Audit and fix speed bottlenecks, implement structured data, improve accessibility, and align with Google\'s ranking factors.',
      },
    ],
  },
  technologies: {
    title: 'Web development technologies',
    subtitle: 'Modern tools chosen for speed, security, and developer productivity.',
    items: [
      'React',
      'Next.js',
      'Vite',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'PostgreSQL',
      'AWS',
      'Vercel',
      'CloudFront',
      'GraphQL',
      'REST APIs',
    ],
  },
  benefits: {
    title: 'Why hire GrowwCode as your web development company',
    subtitle: 'Technical excellence paired with business-focused delivery.',
    items: [
      {
        title: 'SEO-ready from launch',
        description:
          'Semantic HTML, meta tags, sitemaps, structured data, and fast load times give your site a strong foundation for search visibility.',
      },
      {
        title: 'Mobile-first responsive design',
        description:
          'Every layout is tested across screen sizes so mobile users get the same polished experience as desktop visitors.',
      },
      {
        title: 'Conversion-focused UX',
        description:
          'Clear navigation, strategic CTAs, and frictionless forms designed to turn traffic into leads and sales.',
      },
      {
        title: 'Secure & compliant',
        description:
          'HTTPS, secure authentication, input validation, and best practices that protect your users and your reputation.',
      },
      {
        title: 'Transparent communication',
        description:
          'Regular updates, shared project boards, and direct access to engineers—no black-box development.',
      },
      {
        title: 'Ongoing maintenance',
        description:
          'Security patches, content updates, feature additions, and performance monitoring after your site goes live.',
      },
    ],
  },
  contentSections: [
    {
      title: 'Our web development process',
      paragraphs: [
        'Every project begins with a discovery session where we understand your goals, audience, competitors, and technical requirements. We then create sitemaps, wireframes, and visual designs for your approval. Once the design is locked, our developers build the front end and back end in parallel, integrating CMS, APIs, and third-party services as needed.',
        'Before launch, we run cross-browser testing, accessibility checks, performance audits, and security reviews. We configure hosting, SSL certificates, CDN, and monitoring tools. After go-live, we track analytics and iterate based on real user behavior. This disciplined process is why businesses trust GrowwCode as their long-term web development company.',
      ],
    },
    {
      title: 'Web development for every stage of growth',
      paragraphs: [
        'Startups come to us for lean MVPs that validate ideas quickly without cutting corners on code quality. Growing companies need scalable web platforms that handle increased traffic and new feature demands. Enterprises require robust portals, intranets, and customer-facing applications integrated with existing systems.',
        'Regardless of stage, our web development company adapts delivery to your budget and timeline. Fixed-scope projects, retainer arrangements, and dedicated team models are all available. Explore our portfolio to see websites and web applications we have built across industries, then contact us to discuss your project.',
      ],
    },
  ],
  faqTitle: 'Web development FAQs',
  faqs: SHARED_FAQS,
  cta: {
    title: 'Let\'s build a website that works as hard as you do',
    description:
      'Partner with a web development company that understands both code and business. Contact GrowwCode today for a free project consultation.',
  },
}

export const MOBILE_APP_PAGE = {
  seoKey: 'mobileAppDevelopment',
  path: '/mobile-app-development',
  badge: 'Mobile App Development Company',
  h1: 'Mobile App Development Company for iOS & Android',
  heroSubtitle:
    'GrowwCode is a mobile app development company that builds native and cross-platform applications users love. From consumer apps to enterprise mobility solutions, we deliver polished experiences with reliable backends and scalable infrastructure.',
  overview: {
    title: 'Expert mobile app development for modern businesses',
    paragraphs: [
      'Mobile apps have become essential for customer engagement, field operations, and revenue growth. As a mobile app development company, GrowwCode helps you reach users on iOS and Android with applications that are intuitive, performant, and aligned with your brand. We build everything from on-demand service apps and e-commerce mobile stores to internal workforce tools and IoT-connected platforms.',
      'Our team evaluates your requirements and recommends the right approach—React Native or Flutter for cross-platform efficiency, or native Swift and Kotlin when platform-specific performance is critical. Every app we build connects to a secure backend, handles offline scenarios gracefully, and follows app store guidelines for smooth approval.',
      'Choosing the right mobile app development company matters. Poor architecture leads to crashes, slow updates, and expensive rewrites. GrowwCode invests in clean code, automated testing, and CI/CD pipelines so your app stays maintainable as features grow. We have shipped apps for startups launching their first product and enterprises rolling out mobility to thousands of employees.',
    ],
  },
  offerings: {
    title: 'Mobile app development services',
    subtitle: 'Full-cycle mobile engineering from concept to App Store launch.',
    items: [
      {
        title: 'iOS app development',
        description:
          'Native Swift applications optimized for iPhone and iPad with smooth animations, platform integrations, and App Store compliance.',
      },
      {
        title: 'Android app development',
        description:
          'Kotlin-based Android apps supporting a wide range of devices, screen sizes, and OS versions with Material Design best practices.',
      },
      {
        title: 'Cross-platform development',
        description:
          'Single codebase apps with React Native or Flutter that reduce time-to-market while delivering near-native performance.',
      },
      {
        title: 'UI/UX design for mobile',
        description:
          'User research, wireframes, and high-fidelity prototypes focused on intuitive navigation and engagement.',
      },
      {
        title: 'Backend & API development',
        description:
          'Scalable server infrastructure, real-time sync, push notifications, and secure authentication for your mobile product.',
      },
      {
        title: 'App maintenance & updates',
        description:
          'OS compatibility updates, bug fixes, feature releases, and performance monitoring to keep your app competitive.',
      },
    ],
  },
  technologies: {
    title: 'Mobile development technologies',
    subtitle: 'Industry-standard tools for reliable, scalable mobile applications.',
    items: [
      'React Native',
      'Flutter',
      'Swift',
      'Kotlin',
      'Firebase',
      'Node.js',
      'GraphQL',
      'AWS',
      'Push Notifications',
      'SQLite',
      'REST APIs',
      'CI/CD',
    ],
  },
  benefits: {
    title: 'Benefits of working with our mobile app development company',
    subtitle: 'Apps built to acquire users, retain them, and scale with demand.',
    items: [
      {
        title: 'Faster launch timelines',
        description:
          'Cross-platform frameworks and agile sprints help you reach the App Store and Play Store sooner without sacrificing quality.',
      },
      {
        title: 'User-centric design',
        description:
          'Interfaces designed around real user journeys, reducing drop-off and increasing daily active usage.',
      },
      {
        title: 'Robust backend integration',
        description:
          'Seamless connection to your APIs, databases, payment systems, and third-party services.',
      },
      {
        title: 'App store success',
        description:
          'Guidance on metadata, screenshots, review compliance, and launch strategy to maximize downloads.',
      },
      {
        title: 'Performance optimization',
        description:
          'Fast load times, efficient memory usage, and battery-conscious design for a smooth user experience.',
      },
      {
        title: 'Post-launch growth support',
        description:
          'Analytics integration, A/B testing readiness, and iterative feature development based on user feedback.',
      },
    ],
  },
  contentSections: [
    {
      title: 'Our mobile app development lifecycle',
      paragraphs: [
        'We start with product discovery—defining your target users, core features, monetization model, and competitive landscape. Our designers create interactive prototypes you can test with real users before development begins. This validation step saves significant cost by catching usability issues early.',
        'Development proceeds in sprints with TestFlight and internal Android builds shared regularly. QA covers functional testing, device compatibility, network conditions, and security. We manage the app store submission process and provide launch support. Post-launch, we monitor crash reports, user reviews, and analytics to prioritize improvements.',
      ],
    },
    {
      title: 'Mobile apps for every industry',
      paragraphs: [
        'Retail and e-commerce brands use our apps for mobile shopping, loyalty programs, and push-driven promotions. Healthcare organizations deploy patient apps for appointments, telemedicine, and health tracking. Logistics companies equip drivers with route apps and real-time status updates. Fintech apps handle secure transactions and portfolio management.',
        'Whatever your sector, GrowwCode brings domain awareness and technical depth as your mobile app development company. We also integrate with wearables, Bluetooth devices, and GPS for specialized use cases. View our portfolio and contact us to discuss your mobile product vision.',
      ],
    },
  ],
  faqTitle: 'Mobile app development FAQs',
  faqs: SHARED_FAQS,
  cta: {
    title: 'Turn your app idea into a product users download',
    description:
      'Work with a mobile app development company that delivers on time and on budget. Get in touch with GrowwCode for a free consultation.',
  },
}

export const REACT_DEVELOPMENT_PAGE = {
  seoKey: 'reactDevelopmentCompany',
  path: '/react-development-company',
  badge: 'React Development Company',
  h1: 'React Development Company for Scalable Web Applications',
  heroSubtitle:
    'GrowwCode is a React development company specializing in high-performance front-end engineering, component-driven architecture, and modern JavaScript ecosystems. We build React applications that are fast, maintainable, and ready to scale.',
  overview: {
    title: 'Why businesses hire a dedicated React development company',
    paragraphs: [
      'React powers some of the world\'s most demanding web applications—from Facebook and Netflix to thousands of SaaS products and enterprise dashboards. As a React development company, GrowwCode helps you leverage this ecosystem to build interfaces that are responsive, interactive, and easy to extend. Our engineers specialize in React, Next.js, TypeScript, and state management patterns that keep large codebases manageable.',
      'Hiring a generalist agency often means React best practices get overlooked. Our team lives and breathes the React ecosystem. We implement design systems, reusable component libraries, server-side rendering with Next.js, and performance optimizations like code splitting and lazy loading. The result is applications that feel instant and cost less to maintain over time.',
      'Whether you need a greenfield React application, a migration from legacy jQuery or Angular, or augmentation of your existing front-end team, GrowwCode delivers. We integrate with any back end—Node.js, Python, .NET, or headless CMS—and follow testing practices that catch regressions before they reach production. Partner with a React development company that understands both the framework and your business goals.',
    ],
  },
  offerings: {
    title: 'React development services',
    subtitle: 'Specialized front-end engineering for modern web products.',
    items: [
      {
        title: 'Custom React application development',
        description:
          'Full-featured SPAs and multi-page applications with routing, authentication, real-time updates, and complex UI interactions.',
      },
      {
        title: 'Next.js development',
        description:
          'Server-rendered and static React applications optimized for SEO, performance, and global CDN delivery.',
      },
      {
        title: 'React Native mobile apps',
        description:
          'Extend your React expertise to mobile with cross-platform apps sharing logic between web and native.',
      },
      {
        title: 'Component library & design systems',
        description:
          'Reusable UI kits with Storybook documentation that accelerate development and ensure brand consistency.',
      },
      {
        title: 'React migration & refactoring',
        description:
          'Move legacy front ends to React incrementally, improving performance and developer experience without big-bang rewrites.',
      },
      {
        title: 'React team augmentation',
        description:
          'Embed senior React developers into your squad for sprint capacity, code reviews, and architecture guidance.',
      },
    ],
  },
  technologies: {
    title: 'React ecosystem technologies',
    subtitle: 'The tools our React development company uses daily.',
    items: [
      'React 19',
      'Next.js',
      'TypeScript',
      'Vite',
      'Redux',
      'Zustand',
      'React Query',
      'Tailwind CSS',
      'Jest',
      'Testing Library',
      'Storybook',
      'GraphQL',
    ],
  },
  benefits: {
    title: 'Advantages of choosing GrowwCode as your React development company',
    subtitle: 'Deep React expertise that translates into better products.',
    items: [
      {
        title: 'Performance-optimized builds',
        description:
          'Code splitting, memoization, virtualized lists, and bundle analysis keep your React app fast at any scale.',
      },
      {
        title: 'Clean component architecture',
        description:
          'Modular, testable components with clear separation of concerns that your team can understand and extend.',
      },
      {
        title: 'SEO with Next.js',
        description:
          'Server-side rendering and static generation so search engines index your React content effectively.',
      },
      {
        title: 'Accessibility standards',
        description:
          'WCAG-compliant interfaces with keyboard navigation, ARIA labels, and screen reader support built in.',
      },
      {
        title: 'Type-safe development',
        description:
          'TypeScript adoption reduces runtime errors and improves developer productivity on growing codebases.',
      },
      {
        title: 'Continuous delivery',
        description:
          'Automated testing and CI/CD pipelines for confident, frequent releases without breaking production.',
      },
    ],
  },
  contentSections: [
    {
      title: 'How we approach React projects',
      paragraphs: [
        'Our React development company begins every engagement with an architecture review. We define folder structure, state management strategy, API layer design, and testing approach before feature work starts. This upfront planning prevents technical debt that plagues many React projects after the first year.',
        'We build in vertical slices—delivering complete features end-to-end each sprint rather than finishing all UI before wiring up APIs. Stakeholders see working functionality early, and integration issues surface sooner. Code reviews, pair programming, and linting enforce consistency across the team.',
      ],
    },
    {
      title: 'React for startups and enterprises alike',
      paragraphs: [
        'Startups benefit from our ability to ship MVPs rapidly using proven React patterns and open-source libraries. Enterprises value our experience with large-scale applications—micro-frontends, module federation, role-based UIs, and integration with legacy systems.',
        'GrowwCode has built React dashboards for analytics platforms, e-commerce storefronts with dynamic product configurators, and internal tools replacing spreadsheet-driven workflows. Our React developers stay current with the latest releases, hooks patterns, and server component capabilities in Next.js so your application benefits from framework improvements as they ship.',
        'If you are evaluating a React development company, review our portfolio and schedule a call to discuss your front-end roadmap. We will help you choose the right architecture, estimate timelines accurately, and assemble a team that delivers production-quality React code from sprint one.',
      ],
    },
  ],
  faqTitle: 'React development FAQs',
  faqs: SHARED_FAQS,
  cta: {
    title: 'Need a React development company you can trust?',
    description:
      'GrowwCode delivers React applications built for performance, maintainability, and growth. Contact us to discuss your project requirements.',
  },
}

export const AWS_CLOUD_PAGE = {
  seoKey: 'awsCloudServices',
  path: '/aws-cloud-services',
  badge: 'AWS Cloud Services',
  h1: 'AWS Cloud Services for Secure, Scalable Infrastructure',
  heroSubtitle:
    'GrowwCode provides end-to-end AWS cloud services—from architecture design and migration to DevOps, monitoring, and cost optimization. We help businesses run reliable, secure, and cost-efficient workloads on Amazon Web Services.',
  overview: {
    title: 'Professional AWS cloud services for growing businesses',
    paragraphs: [
      'Moving to the cloud is not just about hosting—it is about building infrastructure that scales on demand, recovers from failures automatically, and keeps costs under control. GrowwCode\'s AWS cloud services cover the full lifecycle: assessing your current setup, designing a target architecture, migrating workloads, and managing production environments with 24/7 monitoring.',
      'Our cloud engineers are experienced with core AWS services including EC2, ECS, EKS, Lambda, S3, RDS, DynamoDB, CloudFront, Route 53, IAM, and VPC networking. We implement infrastructure as code with Terraform and CloudFormation, set up CI/CD pipelines, and configure auto-scaling policies that match your traffic patterns. Security is never an afterthought—encryption, least-privilege IAM, WAF rules, and compliance best practices are standard.',
      'Whether you are launching a new product on AWS, migrating from on-premises servers, or optimizing an existing cloud bill, GrowwCode delivers AWS cloud services tailored to your technical and business requirements. We work alongside your development team or handle infrastructure independently so you can focus on building features.',
    ],
  },
  offerings: {
    title: 'AWS cloud services we provide',
    subtitle: 'Comprehensive cloud engineering from strategy to day-two operations.',
    items: [
      {
        title: 'Cloud architecture & consulting',
        description:
          'Well-Architected reviews, reference architectures, and migration roadmaps aligned with your performance, security, and budget goals.',
      },
      {
        title: 'AWS migration services',
        description:
          'Lift-and-shift, re-platforming, and cloud-native refactoring with minimal downtime and thorough data validation.',
      },
      {
        title: 'DevOps & CI/CD on AWS',
        description:
          'Automated build, test, and deploy pipelines using CodePipeline, GitHub Actions, or GitLab integrated with AWS services.',
      },
      {
        title: 'Serverless development',
        description:
          'Event-driven architectures with Lambda, API Gateway, SQS, and Step Functions for cost-efficient, auto-scaling backends.',
      },
      {
        title: 'Managed database services',
        description:
          'RDS, Aurora, and DynamoDB setup with backups, replication, failover, and performance tuning.',
      },
      {
        title: 'Cloud monitoring & support',
        description:
          'CloudWatch dashboards, alerts, log aggregation, incident response, and ongoing infrastructure management.',
      },
    ],
  },
  technologies: {
    title: 'AWS services & tools',
    subtitle: 'The AWS ecosystem we deploy and manage for clients.',
    items: [
      'EC2',
      'ECS / EKS',
      'Lambda',
      'S3',
      'RDS / Aurora',
      'CloudFront',
      'Route 53',
      'VPC',
      'IAM',
      'CloudWatch',
      'Terraform',
      'Docker',
    ],
  },
  benefits: {
    title: 'Benefits of GrowwCode AWS cloud services',
    subtitle: 'Infrastructure that supports your product—not holds it back.',
    items: [
      {
        title: 'Reduced downtime',
        description:
          'Multi-AZ deployments, health checks, and auto-healing keep your application available when users need it.',
      },
      {
        title: 'Cost optimization',
        description:
          'Right-sized instances, reserved capacity planning, and serverless options that match spend to actual usage.',
      },
      {
        title: 'Enterprise-grade security',
        description:
          'Encryption at rest and in transit, network segmentation, secrets management, and regular security audits.',
      },
      {
        title: 'Elastic scalability',
        description:
          'Auto-scaling groups and load balancers handle traffic spikes without manual intervention or over-provisioning.',
      },
      {
        title: 'Disaster recovery',
        description:
          'Backup strategies, cross-region replication, and documented recovery procedures for business continuity.',
      },
      {
        title: 'Expert ongoing support',
        description:
          'Proactive monitoring, patch management, and infrastructure updates so your team stays focused on product development.',
      },
    ],
  },
  contentSections: [
    {
      title: 'Our AWS implementation methodology',
      paragraphs: [
        'We begin with a discovery assessment of your current infrastructure, applications, dependencies, and compliance requirements. Based on findings, we design a target AWS architecture following the Well-Architected Framework pillars: operational excellence, security, reliability, performance efficiency, and cost optimization.',
        'Implementation proceeds in phases to reduce risk. Non-critical workloads migrate first, followed by production systems with rollback plans at every step. We document every resource, configure monitoring before go-live, and train your team on operational procedures. Post-migration, we fine-tune performance and costs based on real production metrics.',
      ],
    },
    {
      title: 'AWS cloud services for every use case',
      paragraphs: [
        'SaaS companies rely on our AWS cloud services for multi-tenant architectures with isolated customer data. E-commerce platforms use CloudFront CDN and auto-scaling to handle seasonal traffic. Data-intensive applications leverage S3, Glue, and Athena for storage and analytics. Mobile app backends run on serverless stacks that scale to zero during quiet periods.',
        'GrowwCode also provides AWS deployment as part of our software development projects—your web app, mobile backend, or custom platform goes live on a production-ready AWS environment from day one. Contact us to discuss your cloud strategy, get a cost estimate, or schedule a Well-Architected review.',
      ],
    },
  ],
  faqTitle: 'AWS cloud services FAQs',
  faqs: SHARED_FAQS,
  cta: {
    title: 'Ready to move to AWS with confidence?',
    description:
      'GrowwCode AWS cloud services help you build, migrate, and manage infrastructure that scales. Get a free cloud consultation today.',
  },
}
