"use client"

export function LocationsSkeleton() {
  return (
    <div className="space-y-4">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="rounded-[20px] border border-slate-200/70 bg-white p-5 shadow-[0_8px_30px_rgba(11,13,54,0.05)]"
          aria-hidden="true"
        >
          {/* Top row */}
          <div className="mb-4 flex items-start gap-3">
            <div className="h-10 w-10 shrink-0 animate-pulse rounded-2xl bg-slate-100" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-2/3 animate-pulse rounded-full bg-slate-100" />
              <div className="h-3 w-1/4 animate-pulse rounded-full bg-slate-100" />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-4 h-px bg-slate-100" />

          {/* Details */}
          <div className="space-y-2.5">
            <div className="flex gap-2">
              <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-1/2 animate-pulse rounded-full bg-slate-100" />
            </div>
            <div className="flex gap-2">
              <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-3/4 animate-pulse rounded-full bg-slate-100" />
            </div>
            <div className="flex gap-2">
              <div className="h-4 w-4 shrink-0 animate-pulse rounded bg-slate-100" />
              <div className="h-4 w-1/3 animate-pulse rounded-full bg-slate-100" />
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex gap-2">
            <div className="h-5 w-16 animate-pulse rounded-full bg-slate-100" />
            <div className="h-5 w-20 animate-pulse rounded-full bg-slate-100" />
            <div className="h-5 w-14 animate-pulse rounded-full bg-slate-100" />
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4">
            <div className="h-8 flex-1 animate-pulse rounded-xl bg-slate-100" />
            <div className="h-8 flex-1 animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>
      ))}
    </div>
  )
}
