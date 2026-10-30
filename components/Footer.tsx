"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";

export function Footer() {
  const whatsappUrl = "https://wa.me/916363145972?text=Hi%20Varna!%20I'm%20reaching%20out%20from%20your%20website.";

  return (
    <footer className="w-full overflow-hidden bg-[#181614] text-[#A69F96] pt-12 sm:pt-14 pb-8 border-t border-[#292522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-[#2B2724]">
          
          {/* Brand Column with Logo */}
          <div className="sm:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group select-none"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-[#403B36] shadow-md bg-[#161616]">
                <Image
                  src="/images/logo-varna-circle.png"
                  alt="Varna Custom Wear & Prints"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#E06A3B] transition-colors leading-none">
                  Varna
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#D9603B] leading-tight mt-1">
                  Custom Wear & Prints
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#968F87] max-w-sm leading-relaxed">
              Everyday essentials and custom fits crafted for comfort, styled with character, and built for the people who do more. Wear your colors.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold transition-all"
              >
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>WhatsApp: +91 63631 45972</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25221F] hover:bg-[#E06A3B] text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25221F] hover:bg-[#E06A3B] text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25221F] hover:bg-[#E06A3B] text-white flex items-center justify-center transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25221F] hover:bg-[#E06A3B] text-white flex items-center justify-center transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4">
              Shop
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#men" className="hover:text-white transition-colors">
                  Men&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="#women" className="hover:text-white transition-colors">
                  Women&apos;s Collection
                </Link>
              </li>
              <li>
                <Link href="#tshirts" className="hover:text-white transition-colors">
                  Custom T-Shirts
                </Link>
              </li>
              <li>
                <Link href="#hoodies" className="hover:text-white transition-colors">
                  Hoodies &amp; Jerseys
                </Link>
              </li>
              <li>
                <Link href="#new-arrivals" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4">
              Help &amp; Support
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#track-order" className="hover:text-white transition-colors">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-white transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white transition-colors">
                  7-Day Returns &amp; Exchange
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 sm:mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9603B] shrink-0 mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9603B] shrink-0" />
                <a href="tel:+916363145972" className="hover:text-white transition-colors">
                  +91 63631 45972
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9603B] shrink-0" />
                <a href="mailto:support@varna.store" className="hover:text-white transition-colors">
                  support@varna.store
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716A]">
          <p>© {new Date().getFullYear()} Varna Custom Wear &amp; Prints. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
