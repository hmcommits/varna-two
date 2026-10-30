"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CrownDoodle, HeartDoodle } from "./Doodles";

export function DualPromoBanners() {
  return (
    <section className="w-full overflow-hidden bg-[#FAF7F2] py-6 sm:py-10 md:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Unified Connected Dual Banner Showcase */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 bg-[#161D22] border border-[#E8E2D8]/60">
          
          {/* MEN Banner (Left Half) */}
          <div
            id="men"
            className="relative min-h-[210px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[290px] md:aspect-[16/6.2] w-full flex items-center overflow-hidden group select-none"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/banners/men-banner.webp"
                alt="Men - Built for Everyday"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[65%_center] md:object-[60%_center] transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Crown Doodle above the man's head */}
            <div className="absolute top-[8%] sm:top-[10%] left-[45%] md:left-[47%] z-10 pointer-events-none transform -rotate-12 hidden sm:block opacity-85">
              <CrownDoodle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white drop-shadow-sm" />
            </div>

            {/* Coded Content (Left side empty paper area) */}
            <div className="relative z-10 p-5 sm:p-7 md:p-8 lg:p-10 max-w-[62%] sm:max-w-[55%] md:max-w-[50%]">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#D8A763] uppercase block mb-1 sm:mb-1.5">
                MEN
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-1 sm:mb-2">
                Built for <br />
                Everyday
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-[#D0C9C0] mb-3 sm:mb-5 font-medium leading-relaxed">
                Comfort meets character.
              </p>

              <Link
                href="#shop-men"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-[#F3EFE8] text-[#141A20] text-xs sm:text-sm font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all shadow-md group/btn active:scale-95 cursor-pointer"
              >
                <span>Explore Men</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* WOMEN Banner (Right Half) */}
          <div
            id="women"
            className="relative min-h-[210px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[290px] md:aspect-[16/6.2] w-full flex items-center overflow-hidden group select-none bg-[#F2C0B3]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/banners/women-banner.webp"
                alt="Women - Fits That Feel Like You"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[80%_center] md:object-[82%_center] transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
            </div>

            {/* Heart Doodle next to the woman */}
            <div className="absolute top-[8%] sm:top-[10%] right-[8%] sm:right-[12%] z-10 pointer-events-none transform rotate-12 hidden sm:block">
              <HeartDoodle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#1E1B18]" />
            </div>

            {/* Coded Content (Left side empty paper area) */}
            <div className="relative z-10 p-5 sm:p-7 md:p-8 lg:p-10 max-w-[62%] sm:max-w-[55%] md:max-w-[50%]">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#9E2E2E] uppercase block mb-1 sm:mb-1.5">
                WOMEN
              </span>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E1B18] leading-tight mb-1 sm:mb-2">
                Fits That <br />
                Feel Like You
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-[#3A2E2C] mb-3 sm:mb-5 font-medium leading-relaxed">
                Trendy, comfortable, effortlessly you.
              </p>

              <Link
                href="#shop-women"
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-white hover:bg-[#FAF7F2] text-[#1E1B18] text-xs sm:text-sm font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all shadow-md group/btn active:scale-95 cursor-pointer"
              >
                <span>Explore Women</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
