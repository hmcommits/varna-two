"use client";

import React from "react";
import Image from "next/image";

export function FloatingWhatsApp() {
  const phoneNumber = "916363145972";
  const defaultMessage = "Hi Varna! I'm interested in your collection and would like to know more about the latest fits and custom wear.";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 select-none">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire"
        className="relative group flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-2.5 sm:py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm rounded-full animate-wa-glow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
      >
        {/* WhatsApp Icon */}
        <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform group-hover:rotate-12 duration-300">
          <Image
            src="/images/whatsapp-icon.png"
            alt="WhatsApp Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Text */}
        <span className="tracking-wide whitespace-nowrap drop-shadow-xs font-semibold">
          Enquire
        </span>
      </a>
    </div>
  );
}
