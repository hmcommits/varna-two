"use client";

import React from "react";
import { Truck, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const announcements = [
    { icon: Truck, text: "Free shipping on orders above ₹999" },
    { icon: Sparkles, text: "Custom Wear & Prints" },
    { text: "Wear Your Colors" },
  ];

  return (
    <div className="w-full overflow-hidden bg-[#191715] text-[#D4CDC5] text-[11px] sm:text-xs py-2 border-b border-[#2B2724] select-none">
      <div className="w-full overflow-hidden flex items-center">
        <div className="flex items-center animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center shrink-0">
              {announcements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${loopIdx}-${idx}`}
                    className="flex items-center gap-2 mx-4 sm:mx-6 font-medium tracking-wide"
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 text-[#E06A3B] shrink-0" />}
                    <span className="whitespace-nowrap text-white/95 font-medium">{item.text}</span>
                    <span className="text-[#554E45] ml-4 sm:ml-6 font-light">|</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
