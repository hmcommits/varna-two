"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      badge: "New Season",
      titleMain: "Same You",
      titleAccent: "Bolder Fits",
      description: "Everyday essentials for the people who do more.",
      ctaMen: "#men",
      ctaWomen: "#women",
      bgImage: "/images/hero/hero-main.webp",
    },
    {
      id: 2,
      badge: "Summer Drop",
      titleMain: "Same You",
      titleAccent: "Bolder Fits",
      description: "Effortless silhouettes made for all-day comfort.",
      ctaMen: "#men",
      ctaWomen: "#women",
      bgImage: "/images/hero/hero-main.webp",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Smooth mobile touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] py-2 sm:py-3 md:py-4 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Hero Card Container: Full background image on both mobile & desktop */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#FAF4ED] border border-[#E8E2D8]/60 aspect-[16/10] sm:aspect-[16/9.5] md:aspect-auto md:min-h-[560px] lg:h-[620px] xl:h-[650px] flex items-center"
        >
          {/* Main Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={slide.bgImage}
              alt="Varna New Season - Same You Bolder Fits"
              fill
              priority
              className="object-cover object-[center_18%]"
            />
          </div>

          {/* Text Over the White/Cream Space on the Left (Constrained on mobile so subtitle NEVER overlaps guy) */}
          <div className="relative z-10 w-full max-w-[35%] sm:max-w-[40%] md:max-w-[56%] lg:max-w-[52%] xl:max-w-[48%] pl-3 sm:pl-5 md:pl-12 lg:pl-16 xl:pl-20 pr-1 py-3 sm:py-6 md:py-14 flex flex-col justify-center select-none">
            
            {/* "New Season" Brush Badge */}
            <div className="mb-1 sm:mb-2 md:mb-4">
              <span className="inline-block font-handwriting text-[11px] sm:text-base md:text-4xl lg:text-5xl text-[#181614] font-bold px-2 sm:px-2.5 md:px-4 py-0.5 sm:py-1 md:py-1.5 bg-[#F5DED4]/90 backdrop-blur-xs rounded-md md:rounded-xl -rotate-2 shadow-xs border border-[#E8C5B8]/60">
                {slide.badge}
              </span>
            </div>

            {/* Headline: Fitted directly into the left cream wall */}
            <h1 className="text-lg sm:text-2xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-black tracking-tight text-[#141210] leading-[0.95] mb-0.5 sm:mb-1 md:mb-2">
              {slide.titleMain}
              <span className="block font-handwriting text-xl sm:text-3xl md:text-8xl lg:text-9xl xl:text-[7.8rem] text-[#D9603B] font-bold tracking-tight italic -mt-0.5 sm:-mt-1 md:-mt-3 -rotate-1 drop-shadow-xs">
                {slide.titleAccent}
              </span>
            </h1>

            {/* Subtitle: Sized and bounded so it STAYS on the cream wall and NEVER touches the guy's sleeve */}
            <p className="text-[8.5px] sm:text-xs md:text-lg lg:text-xl xl:text-2xl text-[#3A342E] font-medium max-w-[110px] sm:max-w-[150px] md:max-w-xl my-0.5 sm:my-1.5 md:my-5 leading-tight md:leading-relaxed">
              {slide.description}
            </p>

            {/* Desktop CTA Buttons (Integrated with left text on desktop only) */}
            <div className="hidden md:flex flex-wrap items-center gap-3.5 sm:gap-5 pt-2">
              <Link
                href={slide.ctaMen}
                className="inline-flex items-center justify-center gap-2.5 bg-[#181614] hover:bg-[#2C2723] text-white text-sm sm:text-base md:text-lg font-bold px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer group"
              >
                <span>Shop Men</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={slide.ctaWomen}
                className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-[#181614] text-sm sm:text-base md:text-lg font-bold px-7 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 rounded-full border-2 border-[#D4C9BC] hover:border-[#181614] transition-all duration-200 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Shop Women</span>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Arrows: Active on desktop, hidden on mobile to keep headline 100% clean */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[#1E1B18] backdrop-blur-xs items-center justify-center shadow-md transition-all hover:scale-105 active:scale-90 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-white text-[#1E1B18] backdrop-blur-xs items-center justify-center shadow-md transition-all hover:scale-105 active:scale-90 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Desktop Carousel Dots */}
          <div className="hidden md:flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot % slides.length)}
                aria-label={`Slide dot ${dot + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  dot === currentSlide
                    ? "w-6 h-2 bg-[#1C1917]"
                    : "w-2 h-2 bg-[#1C1917]/30 hover:bg-[#1C1917]/60"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Mobile Buttons: Below Image Side by Side as explicitly requested */}
        <div className="md:hidden flex items-center justify-center gap-3 pt-3 px-1">
          <Link
            href={slide.ctaMen}
            className="flex-1 max-w-[200px] inline-flex items-center justify-center gap-1.5 bg-[#181614] hover:bg-[#2C2723] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-full shadow-md active:scale-95 transition-all text-center whitespace-nowrap cursor-pointer"
          >
            <span>Shop Men</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href={slide.ctaWomen}
            className="flex-1 max-w-[200px] inline-flex items-center justify-center bg-white hover:bg-[#FAF7F2] text-[#181614] text-xs sm:text-sm font-bold py-3 px-4 rounded-full border border-[#D4C9BC] shadow-xs active:scale-95 transition-all text-center whitespace-nowrap cursor-pointer"
          >
            <span>Shop Women</span>
          </Link>
        </div>

        {/* Mobile Carousel Dots */}
        <div className="md:hidden flex items-center justify-center gap-1.5 pt-2.5 pb-1">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setCurrentSlide(dot % slides.length)}
              aria-label={`Slide dot ${dot + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                dot === currentSlide
                  ? "w-5 h-1.5 bg-[#1C1917]"
                  : "w-1.5 h-1.5 bg-[#1C1917]/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
