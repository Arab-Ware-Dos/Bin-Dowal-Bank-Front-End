"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <Skeleton className="h-12 w-12 rounded-xl mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function NewsCardSkeleton() {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white shadow-sm overflow-hidden">
      <Skeleton className="h-52 w-full" />
      <div className="p-6">
        <Skeleton className="h-4 w-1/4 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-2.5 w-2.5 rounded-full" />
      </div>
      <div className="mt-4 aspect-[4/5] overflow-hidden rounded-[22px]">
        <Skeleton className="h-full w-full rounded-[22px]" />
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <Skeleton className="h-7 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-1.5" />
        <Skeleton className="h-4 w-5/6 mb-6" />
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  )
}

export function FinancingSliderSkeleton() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-5xl px-4 py-8">
      <div className="relative mx-auto flex h-[380px] md:h-[420px] max-w-md items-center justify-center">
        <div className="w-full h-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-6 w-28 rounded-full" />
            <Skeleton className="h-4 w-12" />
          </div>
          <div className="flex items-center gap-4 my-auto">
            <Skeleton className="h-28 w-28 shrink-0 rounded-2xl" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            <Skeleton className="h-10 w-32 rounded-xl" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-9 rounded-full" />
              <Skeleton className="h-9 w-9 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BranchCardSkeleton() {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  )
}

export function CsrCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-sm">
      <Skeleton className="h-56 w-full" />
      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function AnnualReportCardSkeleton() {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-10 rounded-2xl" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Skeleton className="h-9 w-28 rounded-xl" />
        <Skeleton className="h-9 w-28 rounded-xl" />
      </div>
    </div>
  )
}

export function CareerCardSkeleton() {
  return (
    <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <div className="space-y-1.5">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <div className="flex flex-wrap gap-2 pt-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-10 w-32 rounded-xl" />
      </div>
    </div>
  )
}

export function FormCardSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-28 rounded-xl" />
      </div>
    </div>
  )
}

export function PartnershipLogoSkeleton() {
  return (
    <div className="flex h-28 items-center justify-center rounded-2xl border border-slate-200/70 bg-white p-4 shadow-xs">
      <Skeleton className="h-12 w-28 rounded-lg" />
    </div>
  )
}

export function PageHeroSkeleton() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0b0d36] via-[#1a1f5c] to-[#0b0d36] py-20 md:py-28 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-5">
          <Skeleton className="h-7 w-36 rounded-full bg-white/20" />
          <Skeleton className="h-12 w-3/4 max-w-lg rounded-xl bg-white/25" />
          <Skeleton className="h-5 w-full rounded-md bg-white/15" />
          <Skeleton className="h-5 w-4/5 rounded-md bg-white/15" />
          <div className="pt-4 flex gap-4">
            <Skeleton className="h-11 w-36 rounded-xl bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FoundationSectionSkeleton() {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50/50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <Skeleton className="h-7 w-40 rounded-full" />
            <Skeleton className="h-10 w-3/4" />
            <div className="space-y-3 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-[380px] w-full max-w-[440px] rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function VisionMissionSkeleton() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <Skeleton className="h-6 w-32 rounded-full mx-auto" />
          <Skeleton className="h-9 w-3/4 mx-auto" />
          <Skeleton className="h-4 w-full mx-auto" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-7 w-36" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-20 rounded-full" />
                <Skeleton className="h-7 w-36" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function BankCardsSliderSkeleton() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Skeleton className="h-[240px] w-full max-w-[380px] rounded-2xl shadow-lg" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-28 rounded-full" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-2 pt-2">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-1/2" />
          </div>
          <div className="pt-4 flex gap-3">
            <Skeleton className="h-10 w-32 rounded-xl" />
            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-slate-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <Skeleton className="h-6 w-48 mb-6" />
          <Skeleton className="h-12 w-3/4 max-w-lg mb-4" />
          <Skeleton className="h-6 w-full max-w-md" />
        </div>
      </div>
      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  )
}
