"use client";

import React, { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrendingTicker } from "@/components/TrendingTicker";
import { CategoryGrid } from "@/components/CategoryGrid";
import { NewArrivals, Product } from "@/components/NewArrivals";
import { DualPromoBanners } from "@/components/DualPromoBanners";
import { TrustBadges } from "@/components/TrustBadges";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CartDrawer, CartItem } from "@/components/CartDrawer";
import { WishlistDrawer } from "@/components/WishlistDrawer";

const sampleProducts: Product[] = [
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
    colors: ["#1C3D34", "#2B4C3F", "#1A2520"],
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

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>(["prod-1"]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Wishlist operations
  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden flex flex-col bg-[#FAF7F2] text-[#1E1B18]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Header / Navbar */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Marquee / Ticker Bar */}
        <TrendingTicker />

        {/* 5. Shop by Category */}
        <CategoryGrid />

        {/* 6. New Arrivals (Product Grid / Slider) */}
        <NewArrivals
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlist={wishlist}
        />

        {/* 7. Dual Promo Banners (Men & Women) */}
        <DualPromoBanners />

        {/* 8. Why Shop Varna? Trust Badges */}
        <TrustBadges />

        {/* 9. Newsletter Banner */}
        <Newsletter />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* 12. Floating Glowing WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Slide-over Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        products={sampleProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
