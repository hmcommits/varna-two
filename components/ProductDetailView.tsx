"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Ruler,
  Check,
  Heart,
  Share2,
  X,
  MessageCircle,
  Scissors,
  ArrowRight,
} from "lucide-react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Newsletter } from "@/components/Newsletter";

interface ColorOption {
  name: string;
  hex: string;
  imageIndex: number;
  badge?: string;
}

interface SizeOption {
  code: string;
  label: string;
  chest: string;
  shoulder: string;
  length: string;
  stockLeft: number;
}

const productImages = [
  {
    src: "/images/products/01-solid-linen-shirt.webp",
    alt: "Varna Solid Linen Shirt in Forest Pine - Studio Front View",
    label: "Front Profile",
  },
  {
    src: "/images/categories/02-mens-shirts.webp",
    alt: "Varna Solid Linen Shirt - Styled Casual Fit",
    label: "Lifestyle Fit",
  },
  {
    src: "/images/banners/men-banner.webp",
    alt: "Varna Menswear Linen Collection Editorial",
    label: "Lookbook",
  },
  {
    src: "/images/hero/hero-main.webp",
    alt: "Varna Resort Living Outdoor Shoot",
    label: "Editorial",
  },
];

const colorOptions: ColorOption[] = [
  {
    name: "Forest Pine",
    hex: "#1B3F36",
    imageIndex: 0,
    badge: "Bestseller",
  },
  {
    name: "Olive Moss",
    hex: "#344B3E",
    imageIndex: 1,
  },
  {
    name: "Charcoal Noir",
    hex: "#1E2428",
    imageIndex: 0,
  },
  {
    name: "Natural Ecru",
    hex: "#E5DCBE",
    imageIndex: 2,
    badge: "New",
  },
];

const sizeOptions: SizeOption[] = [
  { code: "S", label: "38", chest: "38 in (96 cm)", shoulder: "17.5 in", length: "28.5 in", stockLeft: 3 },
  { code: "M", label: "40", chest: "40 in (101 cm)", shoulder: "18.25 in", length: "29.5 in", stockLeft: 7 },
  { code: "L", label: "42", chest: "42 in (106 cm)", shoulder: "19.0 in", length: "30.5 in", stockLeft: 4 },
  { code: "XL", label: "44", chest: "44 in (111 cm)", shoulder: "19.75 in", length: "31.5 in", stockLeft: 2 },
  { code: "XXL", label: "46", chest: "46 in (116 cm)", shoulder: "20.5 in", length: "32.0 in", stockLeft: 5 },
];

const reviewsData = [
  {
    id: 1,
    author: "Arjun Mehta",
    city: "Bengaluru",
    date: "3 days ago",
    rating: 5,
    title: "Remarkable fabric quality for this price point",
    comment:
      "Honestly stunned by the hand-feel. It has that crisp European flax texture without any of the initial scratchiness. The Forest Pine shade looks even richer in daylight. Breathes effortlessly in 30°C humidity.",
    verified: true,
    sizeBought: "L (42)",
  },
  {
    id: 2,
    author: "Rohan Kulkarni",
    city: "Mumbai",
    date: "1 week ago",
    rating: 5,
    title: "Cut and collar drape are spot on",
    comment:
      "The resort spread collar holds its shape without looking stiff. You can wear it open over a white tank or buttoned up to dinner. I ordered via WhatsApp and it was dispatched the same evening.",
    verified: true,
    sizeBought: "M (40)",
  },
  {
    id: 3,
    author: "Sneha & Kabir",
    city: "Goa",
    date: "2 weeks ago",
    rating: 5,
    title: "Pre-washed and zero shrinkage after wash",
    comment:
      "Gifted this to my partner. Washed twice with cold water and hung to dry—fits identical to the day it arrived. A truly high-end linen shirt without the 4,000 INR luxury markup.",
    verified: true,
    sizeBought: "XL (44)",
  },
];

export function ProductDetailView({ productId }: { productId: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(sizeOptions[1]); // default M
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("fabric");
  const [isSaved, setIsSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Dynamic WhatsApp pre-filled message
  const whatsappOrderMessage = `Hi Varna! I'd like to order the "Solid Linen Shirt":
• Color: ${selectedColor.name}
• Size: ${selectedSize.code} (${selectedSize.label})
• Price: ₹999 (Free Express Delivery)
Please confirm stock availability and share payment/delivery steps!`;

  const whatsappOrderUrl = `https://wa.me/916363145972?text=${encodeURIComponent(whatsappOrderMessage)}`;

  const whatsappCustomMessage = `Hi Varna! I'm looking at the Solid Linen Shirt (₹999) and had a question about custom fit / sleeve sizing. Could you assist me?`;
  const whatsappCustomUrl = `https://wa.me/916363145972?text=${encodeURIComponent(whatsappCustomMessage)}`;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }
  };

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden flex flex-col bg-[#FAF7F2] text-[#1E1B18]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Header */}
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Trail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-3">
          <nav className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#8C847A]">
            <Link href="/" className="hover:text-[#D9603B] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#A8A196]" />
            <Link href="/#men" className="hover:text-[#D9603B] transition-colors">
              Men
            </Link>
            <ChevronRight className="w-3 h-3 text-[#A8A196]" />
            <Link href="/#new-arrivals" className="hover:text-[#D9603B] transition-colors">
              Shirts
            </Link>
            <ChevronRight className="w-3 h-3 text-[#A8A196]" />
            <span className="font-semibold text-[#1E1B18] truncate">
              Solid Linen Shirt
            </span>
          </nav>
        </div>

        {/* Product Hero Section (Gallery + Sticky Order Column) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT: Image Gallery (7 cols) */}
            <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
              
              {/* Thumbnail Strip (Desktop vertical, Mobile horizontal) */}
              <div className="flex md:flex-col gap-2.5 sm:gap-3 overflow-x-auto md:overflow-visible no-scrollbar pb-1 md:pb-0 shrink-0">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      activeImageIndex === idx
                        ? "border-[#1E1B18] ring-2 ring-[#1E1B18]/15 scale-[1.02]"
                        : "border-[#E5DFD4] hover:border-[#1E1B18]/40 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>

              {/* Main Showcase Image */}
              <div className="relative flex-1 aspect-[4/5] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F2EDE4] border border-[#EAE3D6] shadow-[0_4px_24px_rgba(0,0,0,0.04)] group">
                <Image
                  src={productImages[activeImageIndex].src}
                  alt={productImages[activeImageIndex].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Badges Over Main Image */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-1.5 z-10">
                  <span className="bg-[#1E1B18]/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full shadow-sm">
                    BESTSELLER
                  </span>
                  <span className="bg-[#D9603B] text-white text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full shadow-sm">
                    100% PURE LINEN
                  </span>
                </div>

                {/* Top Right Actions (Save & Share) */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 z-10">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    aria-label="Save item"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1E1B18] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Heart
                      className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${
                        isSaved ? "fill-[#D9603B] text-[#D9603B]" : "text-[#1E1B18]"
                      }`}
                    />
                  </button>
                  <button
                    onClick={handleShare}
                    aria-label="Share product"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1E1B18] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer relative"
                  >
                    <Share2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    {copiedLink && (
                      <span className="absolute -bottom-8 right-0 bg-[#1E1B18] text-white text-[10px] font-medium py-1 px-2 rounded-md whitespace-nowrap shadow-lg">
                        Link copied!
                      </span>
                    )}
                  </button>
                </div>

                {/* Bottom Image Caption Pill */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/90 backdrop-blur-md text-[#1E1B18] text-[11px] font-medium py-1 px-3 rounded-full border border-white/40 shadow-xs">
                  {productImages[activeImageIndex].label}
                </div>
              </div>

            </div>

            {/* RIGHT: Product Info & Direct WhatsApp Checkout (5 cols, sticky) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              
              {/* Brand, Title, Rating */}
              <div className="space-y-2 border-b border-[#EAE3D6] pb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D9603B]">
                    VARNA HERITAGE LINEN
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#25D366] bg-[#E8F8EE] px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    In Stock • Ready to Ship
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E1B18] tracking-tight leading-tight">
                  Solid Linen Shirt
                </h1>

                {/* Ratings & Reviews */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4
                            ? "fill-amber-400 text-amber-400"
                            : "fill-amber-400/80 text-amber-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#1E1B18]">4.8</span>
                  <span className="text-xs text-[#8C847A]">
                    (142 reviews • 98% recommend)
                  </span>
                </div>

                {/* Pricing Banner */}
                <div className="flex items-baseline gap-3 pt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B18]">
                    ₹999
                  </span>
                  <span className="text-base sm:text-lg text-[#8C847A] line-through font-medium">
                    ₹1,499
                  </span>
                  <span className="text-xs font-bold text-[#D9603B] bg-[#FBEFE9] px-2.5 py-1 rounded-full">
                    Save ₹500 (33% OFF)
                  </span>
                </div>
                <p className="text-[11px] text-[#8C847A]">
                  Inclusive of all taxes. Free express shipping on this order.
                </p>
              </div>

              {/* Color Selection */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#1E1B18]">
                    Color:{" "}
                    <span className="font-normal text-[#5A554E]">
                      {selectedColor.name}
                    </span>
                  </span>
                  {selectedColor.badge && (
                    <span className="text-[10px] font-bold text-[#D9603B] uppercase tracking-wider bg-[#FBEFE9] px-2 py-0.5 rounded-full">
                      {selectedColor.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {colorOptions.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedColor(c);
                        setActiveImageIndex(c.imageIndex);
                      }}
                      aria-label={`Select color ${c.name}`}
                      className={`group relative p-1 rounded-full transition-transform cursor-pointer ${
                        selectedColor.name === c.name
                          ? "ring-2 ring-offset-2 ring-[#1E1B18] scale-110"
                          : "hover:scale-105 opacity-85 hover:opacity-100"
                      }`}
                    >
                      <span
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full block border border-black/10 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection + Size Guide Modal Trigger */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#1E1B18]">
                    Select Size:{" "}
                    <span className="font-normal text-[#5A554E]">
                      {selectedSize.code} (Chest {selectedSize.label}&quot;)
                    </span>
                  </span>

                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D9603B] hover:text-[#B54A28] underline underline-offset-4 cursor-pointer"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
                  {sizeOptions.map((s) => {
                    const isSelected = selectedSize.code === s.code;
                    return (
                      <button
                        key={s.code}
                        onClick={() => setSelectedSize(s)}
                        className={`py-2.5 sm:py-3 px-1 rounded-xl text-center border font-semibold text-xs sm:text-sm transition-all cursor-pointer relative ${
                          isSelected
                            ? "bg-[#1E1B18] text-white border-[#1E1B18] shadow-sm"
                            : "bg-white text-[#1E1B18] border-[#DDD5C7] hover:border-[#1E1B18]/60 hover:bg-[#FAF8F5]"
                        }`}
                      >
                        <div className="font-bold">{s.code}</div>
                        <div
                          className={`text-[10px] mt-0.5 ${
                            isSelected ? "text-stone-300" : "text-[#8C847A]"
                          }`}
                        >
                          {s.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Low Stock Pill */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#D9603B] pt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#D9603B] animate-ping" />
                  <span>
                    Hurry, only <strong>{selectedSize.stockLeft} shirts</strong> left in Size {selectedSize.code}!
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS (Direct WhatsApp First Flow) */}
              <div className="space-y-3 pt-2">
                {/* Primary Button: Direct WhatsApp Order */}
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20BE5B] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <div className="relative w-5 h-5 shrink-0">
                    <Image
                      src="/images/whatsapp-icon.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>Order on WhatsApp →</span>
                </a>

                {/* Secondary Button: Custom Sizing / Fit Advice */}
                <a
                  href={whatsappCustomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-white hover:bg-[#F5EFE6] text-[#1E1B18] font-semibold text-xs sm:text-sm border border-[#DDD5C7] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs"
                >
                  <Scissors className="w-4 h-4 text-[#D9603B]" />
                  <span>Need Custom Hemming or Sizing Help? Chat with us</span>
                </a>
              </div>

              {/* Guarantees Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-3 border-t border-[#EAE3D6]">
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white border border-[#EAE3D6]/70">
                  <Truck className="w-4 h-4 text-[#D9603B] mb-1" />
                  <span className="text-[11px] font-bold text-[#1E1B18]">Free Delivery</span>
                  <span className="text-[9px] text-[#8C847A]">Orders &gt; ₹999</span>
                </div>
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white border border-[#EAE3D6]/70">
                  <RotateCcw className="w-4 h-4 text-[#D9603B] mb-1" />
                  <span className="text-[11px] font-bold text-[#1E1B18]">7-Day Exchange</span>
                  <span className="text-[9px] text-[#8C847A]">Doorstep pickup</span>
                </div>
                <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white border border-[#EAE3D6]/70">
                  <ShieldCheck className="w-4 h-4 text-[#D9603B] mb-1" />
                  <span className="text-[11px] font-bold text-[#1E1B18]">Cash on Delivery</span>
                  <span className="text-[9px] text-[#8C847A]">Pay at doorstep</span>
                </div>
              </div>

              {/* Expandable Accordions: Fabric & Care, Delivery & Returns */}
              <div className="space-y-2 pt-2 border-t border-[#EAE3D6]">
                
                {/* Accordion 1: Fabric & Craftsmanship */}
                <div className="rounded-xl border border-[#E8E1D5] bg-white overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("fabric")}
                    className="w-full py-3.5 px-4 flex items-center justify-between text-left font-semibold text-xs sm:text-[13px] text-[#1E1B18] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#D9603B]" />
                      Fabric & Craftsmanship Details
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C847A] transition-transform ${
                        activeAccordion === "fabric" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === "fabric" && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#5A554E] space-y-2 border-t border-[#F2EDE4] leading-relaxed">
                      <p>
                        <strong>Material:</strong> 100% Certified European Flax Linen (210 GSM medium-weight weave).
                      </p>
                      <p>
                        <strong>Pre-Washed:</strong> Bio-enzyme washed to eliminate initial linen rigidity and prevent shrinkage.
                      </p>
                      <p>
                        <strong>Collar:</strong> Structured resort spread collar with fused interlining that remains crisp all day.
                      </p>
                      <p>
                        <strong>Buttons:</strong> Genuine mother-of-pearl buttons, cross-stitched for enduring durability.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Care & Maintenance */}
                <div className="rounded-xl border border-[#E8E1D5] bg-white overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("care")}
                    className="w-full py-3.5 px-4 flex items-center justify-between text-left font-semibold text-xs sm:text-[13px] text-[#1E1B18] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D9603B]" />
                      Care & Washing Instructions
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C847A] transition-transform ${
                        activeAccordion === "care" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === "care" && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#5A554E] space-y-1.5 border-t border-[#F2EDE4] leading-relaxed">
                      <p>• Machine wash cold on a gentle cycle with similar dark colors.</p>
                      <p>• Do not bleach or use heavy industrial detergents.</p>
                      <p>• Line dry in shaded breeze; avoid direct blistering midday sun.</p>
                      <p>• Warm iron while slightly damp, or wear gently crinkled for relaxed coastal nonchalance.</p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Delivery & Returns */}
                <div className="rounded-xl border border-[#E8E1D5] bg-white overflow-hidden">
                  <button
                    onClick={() => toggleAccordion("delivery")}
                    className="w-full py-3.5 px-4 flex items-center justify-between text-left font-semibold text-xs sm:text-[13px] text-[#1E1B18] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#D9603B]" />
                      Shipping & Doorstep Returns
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8C847A] transition-transform ${
                        activeAccordion === "delivery" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === "delivery" && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#5A554E] space-y-1.5 border-t border-[#F2EDE4] leading-relaxed">
                      <p>• Dispatched within 24 hours from our tailoring workshop.</p>
                      <p>• Metro delivery within 2 to 4 business days via Bluedart / Delhivery.</p>
                      <p>• Free exchanges on sizing issues with doorstep reverse pickup.</p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* EDITORIAL STORYTELLING SECTION */}
        <section className="w-full bg-[#FAF4EA] border-y border-[#EAE1D3] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-12">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.24em] text-[#D9603B] uppercase">
              THE DESIGN PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1B18] tracking-tight">
              The Effortless Linen Standard
            </h2>
            <div className="w-16 h-0.5 bg-[#D9603B] mx-auto my-2" />
            <p className="text-sm sm:text-base md:text-lg text-[#5A554E] leading-relaxed max-w-3xl mx-auto font-sans">
              We engineered the Varna Solid Linen Shirt around one fundamental promise: uncompromising breathability without sacrificing structure. Woven from 100% long-staple European flax, it lets air circulate freely to keep you 3° to 4° cooler through sweltering Indian summers.
            </p>
            <p className="text-xs sm:text-sm text-[#736E68] leading-relaxed max-w-2xl mx-auto">
              Pre-washed with gentle organic bio-enzymes, every seam conforms to your body on the first wear. Designed to transition smoothly from sunlit beach afternoons to crisp evening dinners.
            </p>

            {/* Visual Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
              <div className="bg-white p-5 rounded-2xl border border-[#E5DFD4] shadow-xs">
                <div className="text-2xl font-serif font-black text-[#D9603B] mb-1">
                  210 GSM
                </div>
                <div className="text-xs font-bold text-[#1E1B18]">Optimal Flax Weight</div>
                <p className="text-[11px] text-[#736E68] mt-1 leading-normal">
                  Heavy enough to maintain clean lines untucked, airy enough for sweltering days.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5DFD4] shadow-xs">
                <div className="text-2xl font-serif font-black text-[#D9603B] mb-1">
                  100% Pure
                </div>
                <div className="text-xs font-bold text-[#1E1B18]">Zero Polyester Blends</div>
                <p className="text-[11px] text-[#736E68] mt-1 leading-normal">
                  No synthetic fillers or cheap poly threads. 100% natural, biodegradable fibers.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5DFD4] shadow-xs">
                <div className="text-2xl font-serif font-black text-[#D9603B] mb-1">
                  0% Shrink
                </div>
                <div className="text-xs font-bold text-[#1E1B18]">Pre-Enzyme Washed</div>
                <p className="text-[11px] text-[#736E68] mt-1 leading-normal">
                  Washed twice before stitching to guarantee your size stays true wash after wash.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER REVIEWS SPOTLIGHT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#D9603B] uppercase block mb-1">
                TESTED IN REAL HEAT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B18]">
                Customer Reviews
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-2xl font-bold text-[#1E1B18] leading-none">4.8 / 5</div>
                <div className="text-[11px] text-[#8C847A] mt-0.5">Based on 142 reviews</div>
              </div>
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 rounded-xl bg-[#1E1B18] text-white text-xs font-semibold hover:bg-[#D9603B] transition-colors"
              >
                Write a Review
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {reviewsData.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE3D6] shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-[#8C847A]">{rev.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-[#1E1B18] leading-snug">
                    &quot;{rev.title}&quot;
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#5A554E] leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F2EDE4] flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-[#1E1B18] flex items-center gap-1">
                      <span>{rev.author}</span>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
                    </div>
                    <div className="text-[10px] text-[#8C847A]">{rev.city} • Size {rev.sizeBought}</div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Verified Buyer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPLETE THE LOOK / PAIR WITH SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <div className="border-t border-[#EAE3D6] pt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#D9603B] uppercase block">
                  STYLE INSPIRATION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1B18]">
                  Complete The Look
                </h2>
              </div>
              <Link
                href="/#new-arrivals"
                className="text-xs sm:text-sm font-semibold text-[#D9603B] hover:underline flex items-center gap-1"
              >
                <span>View all products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Companion 1: Relaxed Fit Jeans */}
              <div className="bg-white rounded-2xl p-3 border border-[#EAE3D6] shadow-xs flex items-center gap-3.5 group">
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#F2EDE4] shrink-0">
                  <Image
                    src="/images/products/05-relaxed-fit-jeans.webp"
                    alt="Relaxed Fit Jeans"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-[#D9603B] uppercase">
                    Denim
                  </span>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#1E1B18] line-clamp-1">
                    Relaxed Fit Jeans
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#1E1B18]">₹1,499</span>
                    <span className="text-[11px] text-[#8C847A] line-through">₹2,299</span>
                  </div>
                  <a
                    href="https://wa.me/916363145972?text=Hi%20Varna!%20I'd%20like%20to%20enquire%20about%20the%20Relaxed%20Fit%20Jeans%20(₹1,499)%20to%20pair%20with%20the%20Linen%20Shirt."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] hover:underline pt-0.5"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Companion 2: Oversized Jersey Tee */}
              <div className="bg-white rounded-2xl p-3 border border-[#EAE3D6] shadow-xs flex items-center gap-3.5 group">
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-[#F2EDE4] shrink-0">
                  <Image
                    src="/images/products/03-oversized-jersey-tee.webp"
                    alt="Oversized Jersey Tee"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider text-[#D9603B] uppercase">
                    Inner Layer
                  </span>
                  <h3 className="font-semibold text-xs sm:text-sm text-[#1E1B18] line-clamp-1">
                    Oversized Jersey Tee
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-[#1E1B18]">₹799</span>
                    <span className="text-[11px] text-[#8C847A] line-through">₹1,299</span>
                  </div>
                  <a
                    href="https://wa.me/916363145972?text=Hi%20Varna!%20I'd%20like%20to%20enquire%20about%20the%20Oversized%20Jersey%20Tee%20(₹799)%20to%20layer%20under%20the%20Linen%20Shirt."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#25D366] hover:underline pt-0.5"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Companion 3: Custom Prints & Monograms */}
              <div className="bg-[#1E1B18] text-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D9603B] uppercase block mb-1">
                    BESPOKE SERVICE
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg">
                    Add Custom Monogram
                  </h3>
                  <p className="text-[11px] text-stone-300 mt-1 leading-normal">
                    Get your initials or brand motif subtly embroidered on the chest pocket or cuff.
                  </p>
                </div>
                <a
                  href="https://wa.me/916363145972?text=Hi%20Varna!%20I'd%20like%20to%20know%20about%20custom%20monogramming%20or%20embroidery%20for%20the%20Solid%20Linen%20Shirt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <span>Chat with our Stylist</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Enquiry / Feedback Banner */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* SIZE GUIDE MODAL */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8E2D8] relative space-y-5">
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1E1B18] hover:bg-[#EAE4D9] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D9603B] block mb-1">
                PERFECT FIT GUARANTEE
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1E1B18]">
                Linen Shirt Size Guide
              </h3>
              <p className="text-xs text-[#736E68] mt-1">
                Measurements refer to garment dimensions. Fits relaxed; order true to size.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#DDD5C7] text-[#1E1B18]">
                    <th className="py-2.5 font-bold">Size</th>
                    <th className="py-2.5 font-bold">Chest (in)</th>
                    <th className="py-2.5 font-bold">Shoulder (in)</th>
                    <th className="py-2.5 font-bold">Length (in)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DA] text-[#5A554E]">
                  {sizeOptions.map((sz) => (
                    <tr
                      key={sz.code}
                      className={selectedSize.code === sz.code ? "bg-[#F3ECE0] font-semibold text-[#1E1B18]" : ""}
                    >
                      <td className="py-2.5 font-bold">{sz.code} ({sz.label})</td>
                      <td className="py-2.5">{sz.chest.split(" ")[0]}</td>
                      <td className="py-2.5">{sz.shoulder}</td>
                      <td className="py-2.5">{sz.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-[#E5DFD4] space-y-1.5 text-xs text-[#5A554E]">
              <div className="font-bold text-[#1E1B18] flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#D9603B]" />
                <span>Not sure about sizing?</span>
              </div>
              <p className="text-[11px] text-[#736E68]">
                Send us your height and weight on WhatsApp, and our master tailors will recommend the perfect fit within 5 minutes.
              </p>
              <a
                href={whatsappCustomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-1 font-bold text-[#25D366] hover:underline"
              >
                Ask our tailor on WhatsApp →
              </a>
            </div>

            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="w-full py-3 rounded-xl bg-[#1E1B18] text-white font-bold text-xs hover:bg-[#D9603B] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
