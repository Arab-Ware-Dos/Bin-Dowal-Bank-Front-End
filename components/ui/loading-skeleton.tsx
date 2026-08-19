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
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
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
