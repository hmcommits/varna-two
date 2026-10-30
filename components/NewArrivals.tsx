"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: "Men" | "Women" | "T-Shirts" | "Shirts" | "Jeans";
  price: number;
  originalPrice: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  image: string;
  colors: string[];
}

interface NewArrivalsProps {
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  wishlist?: string[];
}

export function NewArrivals({
  onAddToCart,
  onToggleWishlist,
  wishlist = [],
}: NewArrivalsProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: number }>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs = ["All", "Men", "Women", "T-Shirts", "Shirts", "Jeans"];

  const products: Product[] = [
    {
      id: "prod-1",
      name: "Solid Linen Shirt",
      category: "Shirts",
      price: 999,
      originalPrice: 1499,
      discountPercentage: 33,
      rating: 4.5,
      reviewCount: 120,
      image: "/images/products/01-solid-linen-shirt.webp",
      colors: ["#1B3F36", "#2E473D", "#1C2521"],
    },
    {
      id: "prod-2",
      name: "Ribbed Crop Top",
      category: "Women",
      price: 699,
      originalPrice: 999,
      discountPercentage: 30,
      rating: 4.4,
      reviewCount: 98,
      image: "/images/products/02-ribbed-crop-top.webp",
      colors: ["#E7A7B3", "#C49A88", "#5A3D36"],
    },
    {
      id: "prod-3",
      name: "Oversized Jersey Tee",
      category: "T-Shirts",
      price: 799,
      originalPrice: 1299,
      discountPercentage: 38,
      rating: 4.6,
      reviewCount: 210,
      image: "/images/products/03-oversized-jersey-tee.webp",
      colors: ["#D45D39", "#2A2946", "#1B1B1B"],
    },
    {
      id: "prod-4",
      name: "A-Line Dress",
      category: "Women",
      price: 1599,
      originalPrice: 2499,
      discountPercentage: 36,
      rating: 4.4,
      reviewCount: 75,
      image: "/images/products/04-aline-dress.webp",
      colors: ["#E58C96", "#C77583", "#9F4D5C"],
    },
    {
      id: "prod-5",
      name: "Relaxed Fit Jeans",
      category: "Jeans",
      price: 1499,
      originalPrice: 2299,
      discountPercentage: 35,
      rating: 4.5,
      reviewCount: 180,
      image: "/images/products/05-relaxed-fit-jeans.webp",
      colors: ["#7693AC", "#436585", "#1C2D42"],
    },
    {
      id: "prod-6",
      name: "Co-ord Set",
      category: "Women",
      price: 1799,
      originalPrice: 2999,
      discountPercentage: 40,
      rating: 4.7,
      reviewCount: 160,
      image: "/images/products/06-coord-set.webp",
      colors: ["#D95267", "#8A2A3E", "#151515"],
    },
  ];

  const filteredProducts = products.filter((item) => {
    if (activeTab === "All") return true;
    if (activeTab === "Men") return item.category === "Shirts" || item.category === "T-Shirts";
    if (activeTab === "Women") return item.category === "Women";
    return item.category === activeTab;
  });

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="new-arrivals" className="w-full overflow-hidden bg-[#FAF7F2] py-8 sm:py-12 md:py-14 px-3 sm:px-6 lg:px-8 border-t border-[#EBE4D8]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header and Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 md:mb-8 gap-4">
          <div>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D9603B] uppercase block mb-1">
              JUST LANDED
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E1B18] tracking-tight">
              New Arrivals
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-2.5 sm:gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#1E1B18] text-white shadow-xs"
                      : "bg-[#EFECE6] text-[#4A453F] hover:bg-[#E2DDD5] hover:text-[#1E1B18]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <Link
              href="#view-all-products"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1E1B18] hover:text-[#D9603B] transition-colors ml-1"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Product Carousel with side buttons */}
        <div className="relative group/carousel">
          {/* Scroll Left Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous products"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#1E1B18] border border-[#E0D9CD] shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Product Cards Row (Mobile swipe carousel & Desktop 6-col grid) */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 snap-x snap-mandatory"
          >
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              const activeColorIndex = selectedColors[product.id] || 0;
              const whatsappMessage = `Hi Varna, I'd like to enquire about "${product.name}" (Price: ₹${product.price}). Could you please share more details?`;
              const whatsappUrl = `https://wa.me/916363145972?text=${encodeURIComponent(whatsappMessage)}`;

              return (
                <div
                  key={product.id}
                  className="w-[175px] sm:w-[210px] md:w-auto shrink-0 snap-start bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-[#EAE3D6] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  {/* Image & Action Overlays */}
                  <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#F2EDE4] mb-2 sm:mb-2.5">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 175px, (max-width: 1024px) 240px, 260px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={() => onToggleWishlist?.(product.id)}
                      aria-label="Save to Wishlist"
                      className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1E1B18] hover:text-[#D9603B] shadow-xs transition-transform active:scale-90 cursor-pointer z-10"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 transition-colors ${
                          isWishlisted
                            ? "fill-[#D9603B] text-[#D9603B]"
                            : "stroke-[1.8] text-[#2C2723]"
                        }`}
                      />
                    </button>

                    {/* Enquire on Hover (and easily tappable on mobile) */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-x-2 bottom-2 py-1.5 sm:py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-[10px] sm:text-[11px] font-bold rounded-lg opacity-95 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 shadow-md backdrop-blur-xs flex items-center justify-center gap-1.5 cursor-pointer z-10"
                    >
                      <div className="relative w-3.5 h-3.5 shrink-0">
                        <Image
                          src="/images/whatsapp-icon.png"
                          alt="WhatsApp"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="truncate">Enquire</span>
                    </a>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs sm:text-[13px] font-semibold text-[#1C1917] truncate hover:text-[#D9603B] transition-colors">
                        {product.name}
                      </h3>

                      {/* Pricing */}
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-xs sm:text-[13px] font-bold text-[#1C1917]">
                          ₹{product.price}
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-[#8C847A] line-through">
                          ₹{product.originalPrice}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-bold text-[#D9603B] bg-[#FBEFE9] px-1 py-0.2 rounded">
                          {product.discountPercentage}% OFF
                        </span>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mt-0.5 text-[#8C847A] text-[10px] sm:text-[11px]">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-[#1C1917]">{product.rating}</span>
                        <span>({product.reviewCount})</span>
                      </div>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-1.5 pt-1.5">
                      {product.colors.map((color, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setSelectedColors((prev) => ({ ...prev, [product.id]: idx }))
                          }
                          aria-label={`Color option ${idx + 1}`}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-transform cursor-pointer ${
                            activeColorIndex === idx
                              ? "ring-1.5 ring-offset-1 ring-[#1C1917] scale-110"
                              : "hover:scale-105 opacity-80"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Right Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Next products"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#1E1B18] border border-[#E0D9CD] shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
