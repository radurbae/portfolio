export const PROFILE = {
  name: "Raditya Adyatma",
  handle: "RADS",
  title: "Available for hire",
  heroHeadline: "Building digital products where brand and product ship as one system",
  heroDescription:
    "I help founders and teams launch clear brand-led experiences across web, software, and mobile. From positioning and UI to production code, everything stays coherent from first click to release.",
  location: "Asia/Jakarta",
  availability: "Available for collaborations"
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
    slug: "1percentreaders",
    title: "1% Readers (1percentreaders)",
    tagline: "A digital space for an evolving book club community.",
    summary:
      "A platform built to support the 1% Readers community, focusing on content delivery and shared reading perspectives.",
    category: "Community Platform",
    industry: "Publishing / Education",
    timeline: "Ongoing",
    year: "2026",
    role: "Lead Developer",
    challenge:
      "Translating the physical concept of a book club where 'readers need listeners' into a digital platform that facilitates meaningful interaction.",
    approach: [
      "Conceptualized the core architecture based on user engagement.",
      "Developed the frontend using TypeScript for strict type safety and better maintainability.",
      "Integrated scalable backend patterns to support future community features."
    ],
    deliverables: [
      "Web Platform Architecture",
      "TypeScript Frontend Implementation",
      "Community Feature Set Strategy"
    ],
    outcomes: [
      { label: "Community Base", value: "Active", detail: "Serving the foundational members of the 1% Readers club." },
      { label: "Code Quality", value: "High", detail: "Strict TypeScript implementation ensuring robust performance." }
    ],
    stack: ["TypeScript", "Node.js", "React"],
    links: {
      live: "#",
      repository: "https://github.com/radurbae/1percentreaders"
    },
    updatedAt: "2026-02-23"
  },
  {
    slug: "til",
    title: "Today I Learned (til)",
    tagline: "A personal knowledge base and learning tracker.",
    summary:
      "An open-source repository dedicated to documenting daily learnings, code snippets, and technical discoveries.",
    category: "Open Source / Knowledge Base",
    industry: "Software Engineering",
    timeline: "Ongoing",
    year: "2026",
    role: "Sole Contributor",
    challenge:
      "Maintain a consistent habit of documenting technical learnings effectively without slowing down the development process.",
    approach: [
      "Set up a lightweight repository structure geared toward quick Markdown-based entries.",
      "Used TypeScript to build custom tools for indexing and searching the entries.",
      "Ensured a frictionless workflow to encourage daily contributions."
    ],
    deliverables: [
      "Knowledge Base Repository",
      "Markdown Entry System",
      "TypeScript Tooling"
    ],
    outcomes: [
      { label: "Entries", value: "Growing", detail: "A continually expanding resource of technical knowledge." },
      { label: "Habit Formation", value: "Success", detail: "Established a consistent learning documentation routine." }
    ],
    stack: ["TypeScript", "Markdown"],
    links: {
      live: "#",
      repository: "https://github.com/radurbae/til"
    },
    updatedAt: "2026-02-23"
  },
  {
    slug: "onepercent",
    title: "One Percent",
    tagline: "Micro-improvements tracked systematically.",
    summary:
      "An application focused on tracking small, incremental improvements over time, built with modern web technologies.",
    category: "Productivity Application",
    industry: "Self-Improvement",
    timeline: "4 weeks",
    year: "2025",
    role: "Fullstack Developer",
    challenge:
      "Designing an interface that motivates users to record 1% improvements daily without overwhelming them with data.",
    approach: [
      "Focused on a minimalist, distraction-free UI design.",
      "Implemented a fast, responsive frontend using TypeScript to handle state management cleanly.",
      "Optimized the data structure for quick daily entries and long-term trend visualization."
    ],
    deliverables: [
      "Application Prototype",
      "Core Tracking Features",
      "Responsive UI"
    ],
    outcomes: [
      { label: "User Engagement", value: "Daily", detail: "Designed for high-frequency, low-friction interaction." },
      { label: "Performance", value: "Fast", detail: "Optimized for quick load times and instant feedback." }
    ],
    stack: ["TypeScript", "React", "Next.js"],
    links: {
      live: "#",
      repository: "https://github.com/radurbae/onepercent"
    },
    updatedAt: "2025-11-15"
  },
  {
    slug: "valentine",
    title: "Valentine",
    tagline: "A purely interactive digital experience.",
    summary:
      "A creative, interactive web experience built to deliver a specific, engaging user journey.",
    category: "Interactive Media",
    industry: "Entertainment",
    timeline: "1 week",
    year: "2025",
    role: "Creative Developer",
    challenge:
      "Creating an emotionally resonant, smooth animation-driven experience that works flawlessly across all mobile devices.",
    approach: [
      "Prioritized CSS animations and minimal JavaScript for fluid 60fps performance.",
      "Focused heavily on mobile layout constraints and touch interactions.",
      "Iterated rapidly on visual feedback to perfect the user emotional journey."
    ],
    deliverables: [
      "Interactive Concept",
      "Animation implementation",
      "Cross-device testing"
    ],
    outcomes: [
      { label: "Engagement", value: "High", detail: "Designed specifically to capture and hold user attention." },
      { label: "Performance", value: "60fps", detail: "Maintained smooth animations on lower-end mobile devices." }
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "#",
      repository: "https://github.com/radurbae/valentine"
    },
    updatedAt: "2025-02-14"
  },
  {
    slug: "modern-pos",
    title: "Modern POS",
    tagline: "A conceptual point-of-sale interface design.",
    summary:
      "An exploration into modernizing Point of Sale systems with focus on speed, clarity, and touch optimization.",
    category: "UX Concept / Web Software",
    industry: "Retail SaaS",
    timeline: "5 weeks",
    year: "2024",
    role: "UI/UX Developer",
    challenge:
      "Traditional POS systems are often cluttered and slow. The challenge was to design an interface that reduces cognitive load for cashiers in high-pressure environments.",
    approach: [
      "Conducted heuristic evaluations of existing POS interfaces.",
      "Designed a touch-first grid system for rapid item selection.",
      "Prototyped critical workflows like order modification and payment processing to minimize taps."
    ],
    deliverables: [
      "UI Prototype",
      "Component Architecture",
      "Interaction Guidelines"
    ],
    outcomes: [
      { label: "Task Efficiency", value: "Improved", detail: "Reduced the number of interactions required for an average transaction." },
      { label: "Design System", value: "Scalable", detail: "Created a foundational structure that can adapt to different retail sectors." }
    ],
    stack: ["JavaScript", "CSS Frameworks", "Design Tools"],
    links: {
      live: "#",
      repository: "https://github.com/radurbae/modern-pos"
    },
    updatedAt: "2024-11-20"
  }
];

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  return CASE_STUDIES.find((item) => item.slug === slug) || null;
}
