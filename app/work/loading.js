export default function WorkLoading() {
  return (
    <section className="px-6 py-8 md:px-10 md:py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-36 rounded-full bg-[#e3e1d8]" />
        <div className="h-12 w-full max-w-[760px] rounded-xl bg-[#e3e1d8]" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-48 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-48 rounded-2xl bg-[#e3e1d8]" />
          <div className="h-48 rounded-2xl bg-[#e3e1d8]" />
        </div>
      </div>
    </section>
  );
}
