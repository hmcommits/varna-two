import React from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrendingTicker } from "@/components/TrendingTicker";
import { CategoryGrid } from "@/components/CategoryGrid";
import { NewArrivals } from "@/components/NewArrivals";
import { DualPromoBanners } from "@/components/DualPromoBanners";
import { TrustBadges } from "@/components/TrustBadges";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen max-w-full overflow-x-hidden flex flex-col bg-[#FAF7F2] text-[#1E1B18]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Header / Navbar */}
      <Header />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Marquee / Ticker Bar */}
        <TrendingTicker />

        {/* 5. Shop by Category */}
        <CategoryGrid />

        {/* 6. New Arrivals (Product Grid / Slider) */}
        <NewArrivals />

        {/* 7. Dual Promo Banners (Men & Women) */}
        <DualPromoBanners />

        {/* 8. Why Shop Varna? Trust Badges */}
        <TrustBadges />

        {/* 9. Enquiry / Feedback / Club Banner */}
        <Newsletter />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Floating Glowing WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
