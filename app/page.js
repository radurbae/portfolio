"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  { value: "32+", label: "products launched" },
  { value: "+41%", label: "average conversion lift" },
  { value: "7 yrs", label: "brand + product execution" }
];

const BRANDS = [
  "National Bank",
  "Mattered",
  "Coca Cola",
  "Adobe",
  "Subway",
  "Codecademy"
];

const CASE_STUDIES = [
  {
    title: "Northline SaaS Platform",
    category: "Brand refresh + web app + mobile companion",
    summary:
      "Repositioned the product and shipped a design system with shared tokens across marketing, dashboard, and mobile.",
    impact: ["+41% demo conversion", "-28% support friction", "8-week launch"],
    stack: ["Brand strategy", "Design system", "Next.js + API"]
  },
  {
    title: "Circa Commerce OS",
    category: "Identity evolution + website + operations software",
    summary:
      "Unified brand narrative and product UX, then delivered a headless storefront and internal toolchain.",
    impact: ["2.1x faster publishing", "35% faster order ops", "Single source of truth"],
    stack: ["Visual identity", "CMS architecture", "React + Node"]
  },
  {
    title: "Verta Mobile Suite",
    category: "Service brand + mobile-first workflow app",
    summary:
      "Built a mobile experience around field workflows with offline states and clearer onboarding.",
    impact: ["+26% week-4 retention", "-19% onboarding dropoff", "Cross-platform release"],
    stack: ["Experience strategy", "UX writing", "Flutter + analytics"]
  }
];

const SERVICES = [
  {
    icon: "UX",
    title: "UX & UI",
    description: "Designing interfaces that are intuitive, useful, and easy to adopt."
  },
  {
    icon: "WB",
    title: "Web & Mobile App",
    description: "Building responsive products and mobile flows that scale."
  },
  {
    icon: "BR",
    title: "Design & Creative",
    description: "Crafting visual systems and stories that make brands memorable."
  },
  {
    icon: "DV",
    title: "Development",
    description: "Shipping reliable web software with polished frontend experience."
  }
];

const PROCESS = [
  {
    step: "01",
    title: "Align",
    description: "Clarify user, market, and business outcomes before design starts."
  },
  {
    step: "02",
    title: "Systemize",
    description: "Translate strategy into a scalable visual and interaction language."
  },
  {
    step: "03",
    title: "Ship",
    description: "Build web, software, and mobile in coordinated release sprints."
  },
  {
    step: "04",
    title: "Improve",
    description: "Measure behavior, iterate quickly, and compound product wins."
  }
];

export default function HomePage() {
  const [toast, setToast] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const showToast = (message) => {
    setToast(message);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setToast(""), 1800);
  };

  const handleCopyEmail = async () => {
    const email = "hello@yourmail.com";
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email copied");
    } catch {
      showToast("Copy failed");
    }
  };

  return (
    <>
      <main className="relative mx-auto w-full max-w-[1220px] overflow-hidden rounded-[52px] border border-[#c8c5ba] bg-[#f7f6f1] shadow-[0_24px_40px_rgba(0,0,0,0.08)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 0.45px, transparent 0.45px)",
            backgroundSize: "3px 3px",
            opacity: 0.36
          }}
        />

        <section className="relative z-10 border-b border-[#d9d7ce] px-6 py-6 md:px-10 md:py-9">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="mailto:hello@yourmail.com"
                className="text-xs text-[#4c4c4c] transition-colors hover:text-[#151515]"
              >
                hello@yourmail.com
              </a>
              <button type="button" onClick={handleCopyEmail} className="pill-button">
                Copy
              </button>
              <a href="#" className="pill-button">
                CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#4c4c4c]">
              <a href="#work" className="transition-colors hover:text-[#151515]">
                Work
              </a>
              <a href="#services" className="transition-colors hover:text-[#151515]">
                Services
              </a>
              <a href="#contact" className="transition-colors hover:text-[#151515]">
                Contact
              </a>
            </div>
          </div>

          <div className="reveal-item pt-10 text-center md:pt-16" data-reveal>
            <div className="flex items-center justify-center gap-2">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-[#c8c5ba] bg-gradient-to-br from-[#d8d6d1] to-[#f0efea] text-lg font-bold">
                KD
              </div>
              <span className="rounded-full border border-[#d9d7ce] bg-white px-3 py-1 text-xs text-[#4c4c4c]">
                Kansar Ahmed
              </span>
            </div>

            <h1 className="mx-auto mt-5 w-full max-w-[700px] text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#151515] md:text-6xl">
              I help brands ship web, software, and mobile products that move real metrics.
            </h1>

            <p className="mx-auto mt-4 max-w-[700px] text-sm text-[#4c4c4c] md:text-base">
              Outcome-first portfolio trend applied: each project shows problem, build, and business
              impact, not just visuals.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <a href="#work" className="primary-button">
                View Case Studies
              </a>
              <a href="#contact" className="pill-button px-4 py-2 text-sm">
                Start a Project
              </a>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-b border-[#d9d7ce] px-6 py-8 md:px-10">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <li
                key={metric.label}
                className="reveal-item rounded-2xl border border-[#d9d7ce] bg-white/70 px-4 py-4"
                data-reveal
              >
                <p className="text-3xl font-semibold leading-none md:text-4xl">{metric.value}</p>
                <p className="mt-1 text-sm text-[#4c4c4c]">{metric.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="reveal-item relative z-10 border-b border-[#d9d7ce] px-6 py-8 md:px-10" data-reveal>
          <ul className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 md:grid-cols-6">
            {BRANDS.map((brand) => (
              <li key={brand} className="text-sm font-semibold tracking-[0.01em] md:text-base">
                {brand}
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="relative z-10 border-b border-[#d9d7ce] px-6 py-9 md:px-10 md:py-12">
          <div className="reveal-item mb-5 md:mb-7" data-reveal>
            <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-[760px] text-3xl font-semibold leading-tight md:text-5xl">
              Story-driven case studies with measurable outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {CASE_STUDIES.map((project) => (
              <article
                key={project.title}
                className="reveal-item flex h-full flex-col rounded-2xl border border-[#d9d7ce] bg-white p-4"
                data-reveal
              >
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5a5a5a]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{project.title}</h3>
                <p className="mt-2 text-sm text-[#4c4c4c]">{project.summary}</p>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5a5a5a]">
                    Impact
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-[#c8c5ba] bg-[#f8f8f6] px-3 py-1 text-xs"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#5a5a5a]">
                    Scope
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item} className="rounded-full bg-[#151515] px-3 py-1 text-xs text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="relative z-10 border-b border-[#d9d7ce] px-6 py-8 text-center md:px-10 md:py-12">
          <h2 className="reveal-item mx-auto w-full max-w-[700px] text-3xl font-semibold leading-tight md:text-5xl" data-reveal>
            Full-stack creative delivery for modern product teams.
          </h2>

          <span className="reveal-item mx-auto mt-5 inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold" data-reveal>
            Services
          </span>

          <div className="mt-4 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="reveal-item rounded-2xl border border-[#d9d7ce] bg-white/60 p-3"
                data-reveal
              >
                <div className="mb-3 grid h-8 w-8 place-items-center rounded-md border border-[#c8c5ba] text-[11px] font-bold">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold">{service.title}</h3>
                <p className="mt-1 text-sm text-[#4c4c4c]">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative z-10 border-b border-[#d9d7ce] px-6 py-9 md:px-10 md:py-12">
          <div className="reveal-item mb-5 md:mb-7" data-reveal>
            <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
              Process
            </p>
            <h2 className="mt-4 max-w-[760px] text-3xl font-semibold leading-tight md:text-5xl">
              Clear workflow, fast decisions, measurable releases.
            </h2>
          </div>

          <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <li
                key={item.title}
                className="reveal-item rounded-2xl border border-[#d9d7ce] bg-white px-4 py-4"
                data-reveal
              >
                <p className="text-xs font-semibold tracking-[0.08em] text-[#5a5a5a]">{item.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[#4c4c4c]">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="relative z-10 border-b border-[#d9d7ce] px-6 py-12 text-center md:px-10 md:py-16">
          <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-[#d9d7ce] bg-white text-2xl">
            🤝
          </div>

          <h2 className="reveal-item mx-auto max-w-[620px] text-4xl font-semibold leading-tight md:text-6xl" data-reveal>
            Tell me about your next project
          </h2>

          <div className="reveal-item mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row" data-reveal>
            <a href="mailto:hello@yourmail.com" className="primary-button">
              Email Me
            </a>
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="pill-button px-4 py-2 text-sm">
              Book Intro Call
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noreferrer"
              className="pill-button px-4 py-2 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </section>

        <footer className="relative z-10 flex flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-[#4c4c4c] sm:flex-row sm:items-center md:px-10">
          <p>© 2026 All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://linkedin.com" className="transition-colors hover:text-[#151515]">
              LinkedIn
            </a>
            <a href="https://dribbble.com" className="transition-colors hover:text-[#151515]">
              Dribbble
            </a>
            <a href="https://instagram.com" className="transition-colors hover:text-[#151515]">
              Instagram
            </a>
          </div>
        </footer>
      </main>

      <div
        className={`pointer-events-none fixed left-1/2 bottom-4 z-50 -translate-x-1/2 rounded-full bg-[#111] px-4 py-2 text-sm text-white transition-all duration-200 ${
          toast ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </>
  );
}
