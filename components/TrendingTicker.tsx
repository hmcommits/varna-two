"use client";

import React from "react";
import { SparkleStar } from "./Doodles";

export function TrendingTicker() {
  const items = [
    "Trending Now",
    "Oversized Tees",
    "Premium Denim",
    "Everyday Essentials",
    "New Season Arrivals",
    "Co-ord Sets",
    "Bestsellers",
  ];

  return (
    <div className="w-full bg-[#EAE2D5] border-y border-[#DDD3C4] py-2.5 overflow-hidden select-none">
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {/* Render repeated list to guarantee infinite loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center shrink-0">
            {items.map((item, idx) => (
              <div key={`${loopIdx}-${idx}`} className="flex items-center mx-3 sm:mx-4">
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1C1917]">
                  {item}
                </span>
                <SparkleStar className="w-3.5 h-3.5 text-[#1C1917] ml-6 sm:ml-8" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
