export const PROFILE = {
  name: "Raditya Adyatma",
  handle: "RADURBAE",
  title: "Brand Designer, Website Developer, Software Engineer, Mobile Developer",
  heroHeadline: "Building digital products where brand and product ship as one system",
  heroDescription:
    "I help founders and teams launch clear brand-led experiences across web, software, and mobile. From positioning and UI to production code, everything stays coherent from first click to release.",
  location: "Asia/Jakarta",
  availability: "Available for Q2 2026 collaborations"
};

export const TRUST_ITEMS = [
  { name: "AtlasPay", type: "Brand + Mobile" },
  { name: "MitraPOS", type: "Web Software" },
  { name: "Noura Health", type: "Brand + Website" },
  { name: "RouteOps", type: "Mobile + Backend" },
  { name: "EduStack", type: "LMS Platform" },
  { name: "Studio Docs", type: "Internal Product" }
];

export const SERVICE_PILLARS = [
  {
    title: "Brand Systems",
    description:
      "Identity direction, visual language, and scalable design rules to keep every product touchpoint consistent.",
    items: ["Brand strategy", "Visual identity", "Design guidelines"]
  },
  {
    title: "Web Experiences",
    description:
      "Marketing and product websites built for performance, conversion, and editorial flexibility.",
    items: ["Landing pages", "CMS architecture", "Performance optimization"]
  },
  {
    title: "Software Products",
    description:
      "Product UX and frontend architecture for dashboards, internal tools, and SaaS platforms.",
    items: ["UX flows", "Design systems", "Frontend implementation"]
  },
  {
    title: "Mobile Apps",
    description:
      "Native-feeling mobile interfaces with clear task flows, robust states, and maintainable code.",
    items: ["iOS/Android UX", "Component libraries", "API integration"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Align goals, users, and constraints through focused product and brand discovery."
  },
  {
    step: "02",
    title: "Define",
    description: "Translate findings into system direction, priorities, and measurable outcomes."
  },
  {
    step: "03",
    title: "Design + Build",
    description: "Design and implementation happen in one loop to reduce handoff friction."
  },
  {
    step: "04",
    title: "Launch + Iterate",
    description: "Release quickly, monitor behavior, and improve with clear post-launch priorities."
  }
];

export const SNAPSHOT_METRICS = [
  { label: "Projects Delivered", value: "18+" },
  { label: "Disciplines Integrated", value: "4" },
  { label: "Typical MVP Timeline", value: "4-8 weeks" }
];

export const CASE_STUDIES = [
  {
    slug: "atlaspay-brand-mobile",
    title: "AtlasPay Brand and Mobile Experience",
    tagline: "Fintech product refresh across identity, UX, and app delivery.",
    summary:
      "Repositioned AtlasPay with a simpler trust-first brand and redesigned onboarding for a faster first transaction.",
    category: "Brand + Mobile",
    industry: "Fintech",
    timeline: "10 weeks",
    year: "2025",
    role: "Lead Brand Designer, Product Designer, Frontend Developer",
    challenge:
      "The existing app had strong features but low first-week activation because the brand felt generic and onboarding was too complex.",
    approach: [
      "Mapped drop-off points in onboarding and payment setup.",
      "Built a clearer brand system focused on trust and speed.",
      "Redesigned onboarding and transaction flows with fewer decisions per screen.",
      "Implemented reusable components for consistent product rollout."
    ],
    deliverables: [
      "Brand identity kit",
      "Onboarding redesign",
      "Mobile UI component library",
      "Landing page refresh"
    ],
    outcomes: [
      { label: "Activation Rate", value: "+37%", detail: "Improved first-week activation after launch." },
      { label: "Onboarding Time", value: "-41%", detail: "Reduced completion time from account creation to first transfer." },
      { label: "Design Consistency", value: "92%", detail: "Internal design QA score after system rollout." }
    ],
    stack: ["React Native", "TypeScript", "Figma", "Firebase", "Node.js"],
    links: {
      live: "#",
      repository: "#"
    },
    updatedAt: "2025-12-10"
  },
  {
    slug: "mitrapos-saas-platform",
    title: "MitraPOS SaaS Platform",
    tagline: "From fragmented admin tools to a single operations dashboard.",
    summary:
      "Designed and developed a modular POS management platform that connects inventory, outlet performance, and team operations.",
    category: "Web Software",
    industry: "Retail Tech",
    timeline: "12 weeks",
    year: "2025",
    role: "Product Designer, Frontend Engineer",
    challenge:
      "Store operations were spread across spreadsheets and disconnected tools, causing slow reporting and high manual overhead.",
    approach: [
      "Audited operational workflows across cashier, manager, and owner roles.",
      "Structured dashboard IA around daily operational tasks instead of feature silos.",
      "Built a scalable UI foundation to support new modules without visual drift.",
      "Integrated analytics summaries for outlet-level decision making."
    ],
    deliverables: [
      "SaaS dashboard UX",
      "Design token system",
      "Role-based interface states",
      "Reporting and insights module"
    ],
    outcomes: [
      { label: "Report Generation", value: "3x faster", detail: "Average reporting workflow reduced to under 2 minutes." },
      { label: "Operator Error", value: "-28%", detail: "Fewer action mistakes after task-first interface changes." },
      { label: "Admin Adoption", value: "+46%", detail: "Weekly active admin users increased after migration." }
    ],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Prisma"],
    links: {
      live: "#",
      repository: "#"
    },
    updatedAt: "2025-11-24"
  },
  {
    slug: "noura-health-digital-rebrand",
    title: "Noura Health Digital Rebrand",
    tagline: "A calm, credible healthcare brand translated into a high-converting website.",
    summary:
      "Delivered a complete digital rebrand and website rebuild to improve clarity, trust, and patient conversion.",
    category: "Brand + Website",
    industry: "Healthcare",
    timeline: "8 weeks",
    year: "2024",
    role: "Brand Designer, UI Designer, Web Developer",
    challenge:
      "The previous brand lacked distinction and the website structure made service discovery difficult for first-time visitors.",
    approach: [
      "Defined a tone and visual system centered on clarity and confidence.",
      "Rebuilt information architecture around patient intent and appointment flow.",
      "Designed responsive templates for services, doctors, and educational content.",
      "Improved speed and readability across mobile and desktop."
    ],
    deliverables: [
      "Brand identity refresh",
      "Website IA and UX",
      "Responsive design system",
      "CMS-ready component templates"
    ],
    outcomes: [
      { label: "Conversion Rate", value: "+29%", detail: "Appointment conversion increased after launch." },
      { label: "Bounce Rate", value: "-22%", detail: "Lower drop-off on service detail pages." },
      { label: "Performance", value: "95/100", detail: "Lighthouse performance score on key templates." }
    ],
    stack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    links: {
      live: "#",
      repository: "#"
    },
    updatedAt: "2024-09-17"
  },
  {
    slug: "routeops-field-mobile-suite",
    title: "RouteOps Field Mobile Suite",
    tagline: "Task orchestration app for distributed field teams.",
    summary:
      "Created a mobile-first field operations suite to streamline assignment, status tracking, and proof-of-work capture.",
    category: "Mobile + Software",
    industry: "Logistics",
    timeline: "14 weeks",
    year: "2024",
    role: "Product Designer, Mobile Developer",
    challenge:
      "Field agents relied on chat threads for task updates, causing delayed reporting and poor accountability.",
    approach: [
      "Modeled the full task lifecycle from assignment to completion evidence.",
      "Designed low-friction offline-ready input patterns for field constraints.",
      "Implemented clear state transitions for dispatchers and supervisors.",
      "Added dashboard visibility for route performance and blocked tasks."
    ],
    deliverables: [
      "Mobile workflow UX",
      "Task lifecycle architecture",
      "Supervisor dashboard",
      "Offline interaction patterns"
    ],
    outcomes: [
      { label: "Task Completion Visibility", value: "+58%", detail: "More tasks tracked end-to-end with proof of work." },
      { label: "Dispatch Response", value: "-33%", detail: "Faster reassignment when blockers occur." },
      { label: "Daily Throughput", value: "+21%", detail: "More completed tasks per field agent per day." }
    ],
    stack: ["React Native", "Expo", "Supabase", "TypeScript", "Mapbox"],
    links: {
      live: "#",
      repository: "#"
    },
    updatedAt: "2024-07-03"
  },
  {
    slug: "edustack-learning-platform",
    title: "EduStack Learning Platform MVP",
    tagline: "Brand-to-product execution for a modern learning platform.",
    summary:
      "Built an MVP learning platform with a distinctive brand, structured course experience, and scalable product UI.",
    category: "Brand + Web Software",
    industry: "Education",
    timeline: "9 weeks",
    year: "2023",
    role: "Brand Strategist, UI Engineer",
    challenge:
      "The startup needed a clear market identity and a launch-ready product in one cycle with limited resources.",
    approach: [
      "Developed a clear brand narrative and visual toolkit for target learners.",
      "Prioritized core student and mentor journeys for MVP scope.",
      "Built reusable UI patterns to speed up iteration after launch.",
      "Set up a practical handoff process between product and marketing."
    ],
    deliverables: [
      "Brand narrative and visuals",
      "MVP UX architecture",
      "Design system foundation",
      "Launch website and product shell"
    ],
    outcomes: [
      { label: "MVP Launch Window", value: "9 weeks", detail: "Shipped on planned timeline with core flows complete." },
      { label: "Early Retention", value: "+24%", detail: "Retention uplift in first cohort compared to pre-launch benchmark." },
      { label: "Team Velocity", value: "+31%", detail: "Faster release cadence after adopting shared UI patterns." }
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma"],
    links: {
      live: "#",
      repository: "#"
    },
    updatedAt: "2023-11-11"
  }
];

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  return CASE_STUDIES.find((item) => item.slug === slug) || null;
}
