import React from "react";

export default function ProductLoading() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden flex flex-col bg-[#FAF7F2] text-[#1E1B18] animate-pulse">
      {/* 1. Top Announcement Bar */}
      <div className="w-full h-9 bg-[#1E2522]/90 flex items-center justify-center">
        <div className="h-3 w-72 bg-white/20 rounded-full" />
      </div>

      {/* 2. Header Skeleton */}
      <div className="w-full h-20 bg-[#FAF7F2] border-b border-[#E8E2D8] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E5DFD5]" />
            <div className="space-y-1.5">
              <div className="h-4 w-20 bg-[#E5DFD5] rounded" />
              <div className="h-2 w-14 bg-[#EAE4DB] rounded" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="h-3.5 w-16 bg-[#E5DFD5] rounded-full" />
            <div className="h-3.5 w-12 bg-[#E5DFD5] rounded-full" />
            <div className="h-3.5 w-14 bg-[#E5DFD5] rounded-full" />
            <div className="h-3.5 w-18 bg-[#E5DFD5] rounded-full" />
          </div>
          <div className="hidden sm:block w-48 sm:w-56 h-9 rounded-full bg-[#EAE4DB]" />
        </div>
      </div>

      {/* 3. PDP Content Skeleton */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb skeleton */}
        <div className="h-3.5 w-48 bg-[#E5DFD5] rounded-full mb-6" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Media Gallery Skeleton */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl bg-[#EAE4DA]" />
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-[#EAE4DA]" />
              ))}
            </div>
          </div>

          {/* Right: Info & Purchase Skeleton */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="h-4 w-28 bg-[#DFD6C8] rounded-full" />
              <div className="h-8 sm:h-10 w-3/4 bg-[#DFD6C8] rounded-lg" />
              <div className="h-4 w-36 bg-[#E5DDD0] rounded" />
            </div>

            <div className="h-7 w-44 bg-[#DFD6C8] rounded-md" />

            {/* Color swatches skeleton */}
            <div className="space-y-2 pt-2">
              <div className="h-3.5 w-24 bg-[#E5DDD0] rounded" />
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-[#DFD6C8]" />
                <div className="w-8 h-8 rounded-full bg-[#DFD6C8]" />
                <div className="w-8 h-8 rounded-full bg-[#DFD6C8]" />
                <div className="w-8 h-8 rounded-full bg-[#DFD6C8]" />
              </div>
            </div>

            {/* Size pills skeleton */}
            <div className="space-y-2 pt-2">
              <div className="h-3.5 w-20 bg-[#E5DDD0] rounded" />
              <div className="flex gap-2.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-10 rounded-xl bg-[#E5DFD5]" />
                ))}
              </div>
            </div>

            {/* CTA Skeleton */}
            <div className="space-y-3 pt-4">
              <div className="h-14 w-full rounded-2xl bg-[#25D366]/40" />
              <div className="h-11 w-full rounded-2xl bg-[#EAE4DB]" />
            </div>

            {/* Value perks skeleton */}
            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="h-16 rounded-xl bg-[#EAE4DB]" />
              <div className="h-16 rounded-xl bg-[#EAE4DB]" />
              <div className="h-16 rounded-xl bg-[#EAE4DB]" />
            </div>

            {/* Accordion skeleton */}
            <div className="space-y-3 pt-4">
              <div className="h-12 w-full rounded-xl bg-[#EAE4DB]" />
              <div className="h-12 w-full rounded-xl bg-[#EAE4DB]" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
