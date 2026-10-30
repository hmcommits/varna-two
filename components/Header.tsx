"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, MessageCircle } from "lucide-react";

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
}

export function Header({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Men", href: "#men" },
    { name: "Women", href: "#women" },
    { name: "Collections", href: "#categories" },
    { name: "Accessories", href: "#accessories" },
    { name: "Sale", href: "#sale", isSale: true },
  ];

  return (
    <header className="sticky top-0 z-40 w-full overflow-hidden bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-4">
          
          {/* Mobile & Tablet menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-[#1E1B18] hover:text-[#D9603B] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Varna Logo (Emblem + Brandmark) */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group select-none"
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm shrink-0 border border-[#1A1816]/20 bg-[#161616] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo-varna-circle.png"
                  alt="Varna Custom Wear & Prints"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-[#1A1816] group-hover:text-[#D9603B] transition-colors leading-none">
                  Varna
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.16em] uppercase font-bold text-[#8C847A] leading-tight mt-0.5">
                  Custom Wear
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 font-medium text-[14px] text-[#292524]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 hover:text-[#D9603B] ${
                  link.isSale
                    ? "text-[#D9603B] font-semibold flex items-center gap-1"
                    : "text-[#292524]"
                }`}
              >
                {link.name}
                {link.isSale && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9603B] inline-block animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side: Search Bar (profile, heart, bag icons removed per user request) */}
          <div className="flex items-center justify-end">
            <div className="relative hidden sm:block w-48 sm:w-56 md:w-64 lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C847A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shirts, jeans, collections..."
                className="w-full bg-[#EFECE6] text-xs text-[#1E1B18] placeholder-[#8C847A] rounded-full pl-9 pr-4 py-2 border border-transparent focus:border-[#D9603B] focus:bg-white focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D8] bg-[#FAF7F2] px-6 py-5 shadow-lg animate-fadeIn">
          {/* Mobile search bar */}
          <div className="relative mb-5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C847A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search shirts, jeans, dresses..."
              className="w-full bg-[#EFECE6] text-xs text-[#1E1B18] placeholder-[#8C847A] rounded-full pl-9 pr-4 py-2.5 border border-transparent focus:outline-none focus:border-[#D9603B]"
            />
          </div>

          <nav className="flex flex-col space-y-3 font-medium text-base text-[#1E1B18]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-[#F0EBE3] flex items-center justify-between ${
                  link.isSale ? "text-[#D9603B] font-semibold" : "text-[#1E1B18]"
                }`}
              >
                <span>{link.name}</span>
                {link.isSale && (
                  <span className="text-xs bg-[#FBF0EB] text-[#D9603B] px-2 py-0.5 rounded-full font-bold">
                    HOT
                  </span>
                )}
              </Link>
            ))}

            {/* Direct WhatsApp link in Mobile Menu */}
            <a
              href="https://wa.me/916363145972?text=Hi%20Varna!%20I'm%20contacting%20you%20from%20the%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 px-4 rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-sm"
            >
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Chat with us on WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
