"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BrushUnderline } from "./Doodles";

interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export function CategoryGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
    {
      id: "mens-tshirts",
      name: "Men's T-Shirts",
      image: "/images/categories/01-mens-tshirts.webp",
      href: "#tshirts",
    },
    {
      id: "mens-shirts",
      name: "Men's Shirts",
      image: "/images/categories/02-mens-shirts.webp",
      href: "#shirts",
    },
    {
      id: "jeans",
      name: "Jeans",
      image: "/images/categories/03-jeans.webp",
      href: "#jeans",
    },
    {
      id: "hoodies",
      name: "Hoodies & Sweatshirts",
      image: "/images/categories/04-hoodies-sweatshirts.webp",
      href: "#hoodies",
    },
    {
      id: "womens-tops",
      name: "Women's Tops",
      image: "/images/categories/05-womens-tops.webp",
      href: "#tops",
    },
    {
      id: "womens-dresses",
      name: "Women's Dresses",
      image: "/images/categories/06-womens-dresses.webp",
      href: "#dresses",
    },
    {
      id: "coord-sets",
      name: "Co-ord Sets",
      image: "/images/categories/07-coord-sets.webp",
      href: "#coord-sets",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -260 : 260;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="categories" className="w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-14 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 md:mb-8 gap-3">
          <div>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D9603B] uppercase block mb-1">
              SHOP BY CATEGORY
            </span>
            <div className="relative inline-block">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B18] tracking-tight">
                Style for{" "}
                <span className="relative inline-block">
                  Every Side of You
                  <BrushUnderline className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#D9603B] -rotate-1 pointer-events-none" />
                </span>
              </h2>
            </div>
          </div>

          <Link
            href="#all-categories"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1E1B18] hover:text-[#D9603B] transition-colors"
          >
            <span>View all categories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Row with Side Navigation Arrows on the Images Row */}
        <div className="relative group/categories">
          {/* Scroll Left Button on Category Row */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous categories"
            className="absolute left-0 sm:left-1 top-[40%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#1E1B18] border border-[#E0D9CD] shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* 7 Categories Horizontal Row with Touch-Friendly Swipe */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-7 gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 pt-1 snap-x snap-mandatory px-2 sm:px-1"
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="w-[135px] sm:w-[155px] md:w-auto shrink-0 snap-start group flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 select-none"
              >
                {/* Organic Painted Brush Shape Artwork */}
                <div className="relative w-full aspect-square max-w-[170px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px"
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title Pill Badge with Soft Drop Shadow */}
                <div className="-mt-3 z-10">
                  <span className="inline-block bg-white text-[#1C1917] text-[11px] sm:text-xs font-semibold px-3 sm:px-3.5 py-1 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#ECE5DA] group-hover:border-[#D9603B] group-hover:text-[#D9603B] transition-colors whitespace-nowrap">
                    {cat.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Right Button on Category Row */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next categories"
            className="absolute right-0 sm:right-1 top-[40%] -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#1E1B18] border border-[#E0D9CD] shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer hover:bg-white"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
