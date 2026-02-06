import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="px-6 py-16 text-center md:px-10 md:py-24">
      <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Page not found</h1>
      <p className="mx-auto mt-3 max-w-[560px] text-sm text-[#4c4c4c] md:text-base">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Link href="/" className="primary-button">
          Back Home
        </Link>
        <Link href="/work" className="pill-button px-4 py-2 text-sm">
          View Work
        </Link>
      </div>
    </section>
  );
}
