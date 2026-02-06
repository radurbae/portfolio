export const metadata = {
  title: "About"
};

const PRINCIPLES = [
  {
    title: "Outcome before decoration",
    description: "Every design or engineering decision must support a concrete product objective."
  },
  {
    title: "Brand and product in one loop",
    description: "Identity, UX, and implementation are developed together to avoid handoff drift."
  },
  {
    title: "MVP speed with long-term structure",
    description: "Ship quickly, but build systems that can scale without redesigning from zero."
  }
];

const CAPABILITIES = [
  "Brand strategy and visual identity",
  "Web design and front-end engineering",
  "SaaS and internal software interfaces",
  "Mobile app UX and implementation",
  "Design systems and component architecture",
  "Cross-functional product delivery"
];

export default function AboutPage() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        About
      </p>
      <h1 className="mt-4 max-w-[760px] text-4xl font-semibold leading-tight md:text-6xl">
        I design the brand and build the product so both feel like one system.
      </h1>
      <p className="mt-4 max-w-[760px] text-sm text-[#4c4c4c] md:text-base">
        My focus is helping teams launch clear, conversion-ready digital products across brand,
        website, software, and mobile. The goal is simple: make experiences understandable,
        maintainable, and effective in real use.
      </p>

      <section className="mt-8 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-2xl font-semibold">Principles</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => (
            <article key={principle.title} className="rounded-xl border border-[#e2e0d8] bg-[#faf9f6] p-4">
              <h3 className="text-base font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm text-[#4c4c4c]">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-2xl font-semibold">Capabilities</h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-[#4c4c4c] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <li key={item} className="rounded-lg border border-[#e2e0d8] bg-[#faf9f6] px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-2xl font-semibold">Working Style</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          <article className="rounded-xl border border-[#e2e0d8] bg-[#faf9f6] p-4">
            <h3 className="text-base font-semibold">Lean Collaboration</h3>
            <p className="mt-2 text-sm text-[#4c4c4c]">
              Short feedback loops, visible priorities, and fast decision cycles.
            </p>
          </article>
          <article className="rounded-xl border border-[#e2e0d8] bg-[#faf9f6] p-4">
            <h3 className="text-base font-semibold">Design-to-Code Continuity</h3>
            <p className="mt-2 text-sm text-[#4c4c4c]">
              Components and interaction patterns are designed with implementation in mind.
            </p>
          </article>
          <article className="rounded-xl border border-[#e2e0d8] bg-[#faf9f6] p-4">
            <h3 className="text-base font-semibold">Evidence-Based Iteration</h3>
            <p className="mt-2 text-sm text-[#4c4c4c]">
              Decisions evolve based on product usage, not personal preference alone.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
