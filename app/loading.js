export default function Loading() {
  return (
    <div
      className="mx-auto max-w-6xl flex-1 px-4 py-12 sm:px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="animate-pulse space-y-6">
        <div className="h-10 w-2/3 max-w-md rounded-lg bg-amber-200/60" />
        <div className="h-4 w-full max-w-xl rounded bg-amber-100/80" />
        <div className="h-4 w-5/6 max-w-lg rounded bg-amber-100/80" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-amber-100/70" />
              <div className="space-y-2 p-4">
                <div className="h-5 w-3/4 rounded bg-amber-100/80" />
                <div className="h-4 w-1/2 rounded bg-amber-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
