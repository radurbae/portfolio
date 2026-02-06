export default function GlobalLoading() {
  return (
    <section className="px-6 py-12 md:px-10">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-40 rounded-full bg-[#e3e1d8]" />
        <div className="h-12 w-full max-w-[720px] rounded-xl bg-[#e3e1d8]" />
        <div className="h-4 w-full max-w-[620px] rounded-lg bg-[#e3e1d8]" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="h-28 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-28 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-28 rounded-2xl bg-[#e3e1d8]" />
        </div>
      </div>
    </section>
  );
}
