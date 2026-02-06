"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
  return (
    <section className="px-6 py-12 md:px-10">
      <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        Something went wrong
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
        We couldn&apos;t load this page.
      </h1>
      <p className="mt-3 max-w-[680px] text-sm text-[#4c4c4c] md:text-base">
        {error?.message || "Unexpected error while loading content."}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button type="button" onClick={reset} className="primary-button">
          Retry
        </button>
        <Link href="/" className="pill-button px-4 py-2 text-sm">
          Back Home
        </Link>
      </div>
    </section>
  );
}
