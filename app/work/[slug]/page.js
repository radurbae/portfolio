import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }) {
  const slug = decodeURIComponent(params.slug);
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.summary
  };
}

export default function WorkDetailPage({ params }) {
  const slug = decodeURIComponent(params.slug);
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const previousStudy = currentIndex > 0 ? CASE_STUDIES[currentIndex - 1] : null;
  const nextStudy = currentIndex < CASE_STUDIES.length - 1 ? CASE_STUDIES[currentIndex + 1] : null;

  return (
    <article className="px-6 py-8 md:px-10 md:py-12">
      <Link href="/work" className="pill-button motion-press mb-4 w-fit">
        Back to Work
      </Link>

      <p data-reveal className="motion-reveal inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        Case Study
      </p>
      <h1 data-reveal style={{ "--reveal-delay": "80ms" }} className="motion-reveal mt-4 max-w-[840px] text-4xl font-semibold leading-tight md:text-6xl">
        {study.title}
      </h1>
      <p data-reveal style={{ "--reveal-delay": "120ms" }} className="motion-reveal mt-3 max-w-[820px] text-sm text-[#4c4c4c] md:text-base">{study.tagline}</p>
      <p data-reveal style={{ "--reveal-delay": "160ms" }} className="motion-reveal mt-3 max-w-[820px] text-sm text-[#4c4c4c] md:text-base">{study.summary}</p>

      <div data-reveal style={{ "--reveal-delay": "210ms" }} className="motion-reveal mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="motion-card rounded-2xl border border-[#d9d7ce] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">Category</p>
          <p className="mt-2 text-lg font-semibold">{study.category}</p>
        </div>
        <div className="motion-card rounded-2xl border border-[#d9d7ce] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">Industry</p>
          <p className="mt-2 text-lg font-semibold">{study.industry}</p>
        </div>
        <div className="motion-card rounded-2xl border border-[#d9d7ce] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">Timeline</p>
          <p className="mt-2 text-lg font-semibold">{study.timeline}</p>
        </div>
        <div className="motion-card rounded-2xl border border-[#d9d7ce] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">Role</p>
          <p className="mt-2 text-base font-semibold">{study.role}</p>
        </div>
      </div>

      <section data-reveal className="motion-reveal motion-card mt-8 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Challenge</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#4c4c4c] md:text-base">{study.challenge}</p>
      </section>

      <section data-reveal className="motion-reveal motion-card mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Approach</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#4c4c4c] md:text-base">
          {study.approach.map((point) => (
            <li key={point}>• {point}</li>
          ))}
        </ul>
      </section>

      <section data-reveal className="motion-reveal motion-card mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Deliverables</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {study.deliverables.map((item) => (
            <span key={item} className="rounded-full border border-[#c8c5ba] bg-[#f8f8f6] px-3 py-1 text-xs">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Outcomes</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
          {study.outcomes.map((outcome) => (
            <article key={outcome.label} className="motion-card rounded-xl border border-[#e2e0d8] bg-[#faf9f6] p-4">
              <p className="text-xs uppercase tracking-[0.08em] text-[#5a5a5a]">{outcome.label}</p>
              <p className="mt-2 text-2xl font-semibold">{outcome.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-[#5a5a5a]">{outcome.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal motion-card mt-5 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {study.stack.map((item) => (
            <span key={item} className="rounded-full border border-[#c8c5ba] bg-[#f8f8f6] px-3 py-1 text-xs">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section data-reveal className="motion-reveal mt-5 flex flex-wrap gap-2">
        <Link href="/contact" className="primary-button motion-press">
          Request Full Breakdown
        </Link>
        {study.links.live !== "#" ? (
          <a
            href={study.links.live}
            target="_blank"
            rel="noreferrer"
            className="pill-button motion-press px-4 py-2 text-sm"
          >
            Live Preview
          </a>
        ) : null}
      </section>

      <section data-reveal className="motion-reveal motion-card mt-8 rounded-2xl border border-[#d9d7ce] bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {previousStudy ? (
            <Link href={`/work/${previousStudy.slug}`} className="pill-button motion-press px-4 py-2 text-sm">
              Previous: {previousStudy.title}
            </Link>
          ) : (
            <span className="text-xs text-[#5a5a5a]">Start of case studies</span>
          )}
          {nextStudy ? (
            <Link href={`/work/${nextStudy.slug}`} className="pill-button motion-press px-4 py-2 text-sm">
              Next: {nextStudy.title}
            </Link>
          ) : (
            <span className="text-xs text-[#5a5a5a]">End of case studies</span>
          )}
        </div>
      </section>
    </article>
  );
}
