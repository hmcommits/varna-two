import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden flex flex-col bg-[#FAF7F2] text-[#1E1B18] animate-pulse">
      {/* 1. Announcement Bar Skeleton */}
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
            <div className="h-3.5 w-12 bg-[#E5DFD5] rounded-full" />
          </div>
          <div className="hidden sm:block w-48 sm:w-56 h-9 rounded-full bg-[#EAE4DB]" />
        </div>
      </div>

      <main className="flex-1 space-y-10 sm:space-y-14 py-6 sm:py-8">
        {/* 3. Hero Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#EFE9DF] border border-[#E5DFD3] p-6 sm:p-12 overflow-hidden min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
            <div className="max-w-md space-y-4">
              <div className="h-6 w-28 bg-[#DFD6C8] rounded-full" />
              <div className="space-y-2">
                <div className="h-8 sm:h-12 w-64 sm:w-80 bg-[#DFD6C8] rounded-lg" />
                <div className="h-8 sm:h-12 w-48 sm:w-60 bg-[#D7CCBC] rounded-lg" />
              </div>
              <div className="h-4 w-52 sm:w-72 bg-[#E5DDD0] rounded" />
            </div>

            <div className="flex gap-3 pt-6">
              <div className="h-11 sm:h-12 w-36 sm:w-40 rounded-full bg-[#1E1B18]/80" />
              <div className="h-11 sm:h-12 w-36 sm:w-40 rounded-full bg-[#DFD6C8]" />
            </div>
          </div>
        </div>

        {/* 4. Ticker Skeleton */}
        <div className="w-full h-11 bg-[#EBE4D8] border-y border-[#DFD7C9]" />

        {/* 5. Categories Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <div className="h-3 w-28 bg-[#E5DDD0] rounded" />
            <div className="h-7 sm:h-8 w-60 sm:w-72 bg-[#DFD6C8] rounded" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E5DFD5]" />
                <div className="h-3 w-14 bg-[#E5DFD5] rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* 6. Products Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="h-3 w-24 bg-[#E5DDD0] rounded" />
              <div className="h-7 w-48 bg-[#DFD6C8] rounded" />
            </div>
            <div className="hidden sm:flex gap-2">
              <div className="h-8 w-16 rounded-full bg-[#E5DFD5]" />
              <div className="h-8 w-16 rounded-full bg-[#E5DFD5]" />
              <div className="h-8 w-16 rounded-full bg-[#E5DFD5]" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl sm:rounded-2xl p-3 border border-[#EAE3D6] space-y-3"
              >
                <div className="aspect-square w-full rounded-lg bg-[#EFE9DF]" />
                <div className="space-y-1.5">
                  <div className="h-3.5 w-3/4 bg-[#E5DFD5] rounded" />
                  <div className="h-3 w-1/2 bg-[#EAE4DB] rounded" />
                  <div className="flex gap-1 pt-1">
                    <div className="w-3 h-3 rounded-full bg-[#DFD7C9]" />
                    <div className="w-3 h-3 rounded-full bg-[#DFD7C9]" />
                    <div className="w-3 h-3 rounded-full bg-[#DFD7C9]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
