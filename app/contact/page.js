import InquiryForm from "@/components/inquiry-form";

export const metadata = {
  title: "Contact"
};

const CONTACT_EMAIL = process.env.PORTFOLIO_EMAIL || "radurbae@gmail.com";
const WHATSAPP_URL = process.env.PORTFOLIO_WHATSAPP || "https://wa.me/6281234567890";
const CALL_URL = process.env.PORTFOLIO_CALL_URL || "https://cal.com";

export default function ContactPage() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <p className="inline-flex rounded-full border border-[#c8c5ba] bg-white px-3 py-1 text-xs font-semibold">
        Contact
      </p>
      <h1 className="mt-4 max-w-[760px] text-4xl font-semibold leading-tight md:text-6xl">
        Let&apos;s build your next product.
      </h1>
      <p className="mt-4 max-w-[760px] text-sm text-[#4c4c4c] md:text-base">
        Share your product goals, timeline, and current challenges. I can support strategy, design,
        and implementation end-to-end.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-[#d9d7ce] bg-white p-5">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="mt-2 text-sm text-[#4c4c4c]">Best for project scope and requirements.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="primary-button mt-4">
            {CONTACT_EMAIL}
          </a>
        </article>

        <article className="rounded-2xl border border-[#d9d7ce] bg-white p-5">
          <h2 className="text-xl font-semibold">Quick Call</h2>
          <p className="mt-2 text-sm text-[#4c4c4c]">
            Book a short intro call to align on goals and timeline.
          </p>
          <a
            href={CALL_URL}
            target="_blank"
            rel="noreferrer"
            className="primary-button mt-4"
          >
            Book Intro Call
          </a>
        </article>
      </div>

      <article className="mt-4 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Quick Inquiry Form</h2>
        <p className="mt-2 text-sm text-[#4c4c4c]">
          Fill this and we&apos;ll open your email app with a ready-to-send project brief.
        </p>
        <div className="mt-4">
          <InquiryForm contactEmail={CONTACT_EMAIL} />
        </div>
      </article>

      <article className="mt-4 rounded-2xl border border-[#d9d7ce] bg-white p-5">
        <h2 className="text-xl font-semibold">Instant channels</h2>
        <p className="mt-2 text-sm text-[#4c4c4c]">
          Prefer faster communication? Reach me here.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a href={`mailto:${CONTACT_EMAIL}`} className="primary-button">
            Email
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="pill-button px-4 py-2 text-sm">
            WhatsApp
          </a>
          <a href={CALL_URL} target="_blank" rel="noreferrer" className="pill-button px-4 py-2 text-sm">
            Book Call
          </a>
        </div>
      </article>
    </section>
  );
}
