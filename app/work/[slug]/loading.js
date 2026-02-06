export default function WorkDetailLoading() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-28 rounded-full bg-[#e3e1d8]" />
        <div className="h-12 w-full max-w-[760px] rounded-xl bg-[#e3e1d8]" />
        <div className="h-5 w-full max-w-[680px] rounded-lg bg-[#e3e1d8]" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="h-24 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-24 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-24 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-24 rounded-2xl bg-[#e3e1d8]" />
        </div>
      </div>
    </section>
  );
}
