import React from "react";

export function BrushUnderline({ className = "w-full h-3 text-[#D9603B]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 8.5C45 3.5 120 2 238 6.5C185 9 110 11.5 2 9.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export function CrownDoodle({ className = "w-8 h-8 text-white/80" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 28L8 10L18 20L24 6L30 20L40 10L44 28H4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <circle cx="24" cy="4" r="2" fill="currentColor" />
      <circle cx="40" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

export function HeartDoodle({ className = "w-6 h-6 text-[#D9603B]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 28C16 28 4 20.5 4 12C4 7 7.5 4 11.5 4C14 4 15.5 5.5 16 6.5C16.5 5.5 18 4 20.5 4C24.5 4 28 7 28 12C28 20.5 16 28 16 28Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SmileyDoodle({ className = "w-7 h-7 text-[#1E1B18]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="11.5" cy="13" r="1.5" fill="currentColor" />
      <circle cx="20.5" cy="13" r="1.5" fill="currentColor" />
      <path
        d="M10 20C11.5 23 14 24 16 24C18 24 20.5 23 22 20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaperPlaneDoodle({ className = "w-8 h-8 text-white/90" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 18L32 4L22 32L17 21L4 18Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 4L17 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 26C10 27 12 30 14 31"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

export function SparkleStar({ className = "w-4 h-4 text-[#D9603B]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}
