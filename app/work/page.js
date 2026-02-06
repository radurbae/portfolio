import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolio-data";

export const metadata = {
  title: "Work"
};

export default function WorkPage() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        All Case Studies
      </p>
      <h1 className="mt-4 max-w-[760px] text-4xl font-semibold leading-tight md:text-6xl">
        Portfolio projects across brand, web, software, and mobile.
      </h1>
      <p className="mt-3 max-w-[760px] text-sm text-[#4c4c4c] md:text-base">
        Each case study explains challenge, approach, deliverables, and measurable outcomes from
        multidisciplinary execution.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {CASE_STUDIES.map((study) => (
          <article key={study.slug} className="flex h-full flex-col rounded-2xl border border-[#d9d7ce] bg-white p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#c8c5ba] bg-[#f8f8f6] px-3 py-1 text-xs">
                {study.category}
              </span>
              <span className="rounded-full border border-[#c8c5ba] bg-[#f8f8f6] px-3 py-1 text-xs">
                {study.year}
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight">{study.title}</h2>
            <p className="mt-2 text-sm text-[#4c4c4c]">{study.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {study.outcomes.slice(0, 2).map((outcome) => (
                <span key={outcome.label} className="rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs">
                  {outcome.label}: {outcome.value}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <Link href={`/work/${encodeURIComponent(study.slug)}`} className="primary-button">
                Open Case
              </Link>
              <span className="pill-button px-3 py-2 text-sm">{study.timeline}</span>
              <span className="pill-button px-3 py-2 text-sm">{study.industry}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
