"use client";

import React from "react";
import { ShieldCheck, RotateCcw, Lock, Heart } from "lucide-react";
import { BrushUnderline } from "./Doodles";

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description: "Crafted for everyday wear",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "7-day hassle free",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "100% safe & secure",
    },
    {
      icon: Heart,
      title: "Loved by 1M+",
      description: "A growing community",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#FAF7F2] py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 md:gap-12">
          
          {/* Section Heading */}
          <div className="relative inline-block shrink-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight">
              Why Shop{" "}
              <span className="relative inline-block">
                Varna?
                <BrushUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[#D9603B] -rotate-1 pointer-events-none" />
              </span>
            </h2>
          </div>

          {/* 4 Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 flex-1">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 group">
                  {/* Icon Circle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D5CEC2] bg-white flex items-center justify-center shrink-0 group-hover:border-[#D9603B] group-hover:shadow-sm transition-all">
                    <Icon className="w-5 h-5 text-[#1C1917] stroke-[1.8] group-hover:text-[#D9603B] transition-colors" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#1C1917] leading-tight">
                      {badge.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#736E68] mt-0.5 font-medium">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
