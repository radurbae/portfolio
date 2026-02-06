import Link from "next/link";
import HeroTypingBlock from "@/components/hero-typing-block";
import {
  CASE_STUDIES,
  PROCESS_STEPS,
  PROFILE,
  SERVICE_PILLARS,
  SNAPSHOT_METRICS,
  TRUST_ITEMS
} from "@/lib/portfolio-data";

const HERO_TYPING_HEADLINE = "YOUR DIGITAL DEVELOPMENT PARTNER";
const HERO_TYPING_HIGHLIGHT = "Digital Development";
const HERO_TYPING_DESCRIPTION =
  "Brand & Software Development Partner: Delivering high-quality digital experiences with precision and performance. Rads Dev is built for organizations and businesses who demand professional, future-ready solutions.";

export default function HomePage() {
  const featuredCaseStudies = CASE_STUDIES.slice(0, 3);

  return (
    <>
      <section className="py-10 text-center md:py-16">
        <div
          data-reveal
          style={{ "--reveal-delay": "30ms" }}
          className="motion-reveal motion-float-slow mx-auto flex w-fit items-center gap-2 rounded-full border border-[#d9d9d9] bg-white px-3 py-1 text-xs text-[#4c4c4c]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="online-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="font-bold text-[#151515]">{PROFILE.handle}</span>
          <span className="font-normal text-[#4c4c4c] opacity-80">{PROFILE.title}</span>
        </div>

        <div data-reveal style={{ "--reveal-delay": "120ms" }} className="motion-reveal mt-6">
          <HeroTypingBlock
            headline={HERO_TYPING_HEADLINE}
            headlineHighlight={HERO_TYPING_HIGHLIGHT}
            description={HERO_TYPING_DESCRIPTION}
          />
        </div>

        <div data-reveal style={{ "--reveal-delay": "240ms" }} className="motion-reveal mt-8 flex items-center justify-center">
          <Link href="/contact" className="primary-button motion-press px-6 py-3 text-sm">
            Get in touch
          </Link>
        </div>

        <div data-reveal style={{ "--reveal-delay": "290ms" }} className="motion-reveal mx-auto mt-8 grid max-w-[760px] grid-cols-1 gap-2 sm:grid-cols-3">
          {SNAPSHOT_METRICS.map((metric) => (
            <article key={metric.label} className="motion-card rounded-2xl border border-[#dbdbdb] bg-white p-3 text-left">
              <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">{metric.label}</p>
              <p className="mt-2 text-xl font-semibold">{metric.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal style={{ "--reveal-delay": "40ms" }} className="motion-reveal border-y border-[#dddddd] py-7">
        <div className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.1em] text-[#5a5a5a]">
          Selected Product Builds
        </div>
        <ul className="grid grid-cols-2 gap-2 text-center sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_ITEMS.map((item) => (
            <li key={item.name}>
              <div className="motion-card flex min-h-[56px] flex-col items-center justify-center rounded-xl border border-[#dbdbdb] bg-white px-2">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-[#5a5a5a]">{item.type}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section data-reveal className="motion-reveal py-10 md:py-12">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Multidisciplinary Services
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_PILLARS.map((service, index) => (
            <article key={service.title} className="motion-card rounded-2xl border border-[#dbdbdb] bg-white p-4">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#5a5a5a]">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-[#4c4c4c]">{service.description}</p>
              <ul className="mt-4 space-y-1 text-xs text-[#5a5a5a]">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal border-t border-[#dddddd] py-10 md:py-12">
        <div className="mb-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a5a5a]">
              Featured Case Studies
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">
              Portfolio work with measurable outcomes
            </h2>
          </div>
          <Link href="/work" className="hidden text-sm font-semibold text-[#4c4c4c] underline-offset-4 hover:underline md:inline-flex">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {featuredCaseStudies.map((study) => (
            <article key={study.slug} className="motion-card rounded-2xl border border-[#dbdbdb] bg-white p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-[#d2d2d2] bg-[#f8f8f6] px-3 py-1">
                  {study.category}
                </span>
                <span className="rounded-full border border-[#d2d2d2] bg-[#f8f8f6] px-3 py-1">
                  {study.year}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold">{study.title}</h3>
              <p className="mt-2 text-sm text-[#4c4c4c]">{study.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {study.outcomes.slice(0, 2).map((outcome) => (
                  <span key={outcome.label} className="rounded-full border border-[#d2d2d2] bg-white px-3 py-1 text-xs">
                    {outcome.label}: {outcome.value}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <Link
                  href={`/work/${encodeURIComponent(study.slug)}`}
                  className="text-sm font-semibold text-[#151515] underline-offset-4 hover:underline"
                >
                  Open case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal border-t border-[#dddddd] py-10 md:py-12">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a5a5a]">Process</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">
            How projects move from brief to launch
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <article key={step.step} className="motion-card rounded-2xl border border-[#dbdbdb] bg-white p-4">
              <p className="text-xs font-semibold tracking-[0.08em] text-[#5a5a5a]">{step.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-[#4c4c4c]">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal border-t border-[#dddddd] py-10 text-center md:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#5a5a5a]">
          Next Project
        </p>
        <h2 className="mx-auto mt-2 max-w-[780px] text-balance text-3xl font-semibold leading-tight md:text-5xl">
          Need a partner who can handle brand, interface, and product build in one flow?
        </h2>
        <div className="mt-6">
          <Link href="/contact" className="motion-press inline-flex rounded-full border border-[#d7d7d7] bg-white px-5 py-2 text-sm font-semibold text-[#151515] underline-offset-4 hover:underline">
            Continue to contact
          </Link>
        </div>
      </section>
    </>
  );
}
