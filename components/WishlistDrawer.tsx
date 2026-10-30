"use client";

import React from "react";
import Image from "next/image";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Product } from "./NewArrivals";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onRemoveFromWishlist,
  onAddToCart,
}: WishlistDrawerProps) {
  if (!isOpen) return null;

  const wishlistedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E8E2D8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0 border border-[#1A1816]/20 bg-[#161616]">
                <Image
                  src="/images/logo-varna-circle.png"
                  alt="Varna Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                Saved Fits ({wishlistedProducts.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#736E68] hover:text-[#1C1917] rounded-full hover:bg-[#F2ECE2] transition-colors cursor-pointer"
              aria-label="Close wishlist drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#736E68] py-16">
                <Heart className="w-12 h-12 text-[#C4BCB3] mb-3 stroke-[1.2]" />
                <p className="font-medium text-sm text-[#1C1917]">No saved items yet</p>
                <p className="text-xs text-[#8C847A] mt-1 max-w-xs">
                  Tap the heart icon on any product to save your favorite fits for later.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 text-xs font-bold text-white bg-[#1C1917] hover:bg-[#D9603B] px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              wishlistedProducts.map((product) => {
                const waMessage = `Hi Varna, I saw "${product.name}" (₹${product.price}) in my wishlist and would like to order or ask about sizes.`;
                const waUrl = `https://wa.me/916363145972?text=${encodeURIComponent(waMessage)}`;

                return (
                  <div
                    key={product.id}
                    className="flex gap-3 bg-white p-3 rounded-xl border border-[#ECE5D8] shadow-xs"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F2EDE4] shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#1C1917] leading-tight">
                            {product.name}
                          </h4>
                          <span className="text-[11px] text-[#736E68] block mt-0.5">
                            {product.category}
                          </span>
                        </div>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-[#9C948A] hover:text-rose-600 transition-colors p-1"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-1 gap-2">
                        <span className="text-xs font-bold text-[#1C1917]">
                          ₹{product.price}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {/* WhatsApp Enquire */}
                          <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                            aria-label="Enquire"
                          >
                            <div className="relative w-3.5 h-3.5 shrink-0">
                              <Image
                                src="/images/whatsapp-icon.png"
                                alt="WhatsApp"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </a>

                          {/* Move to Cart */}
                          <button
                            onClick={() => {
                              onAddToCart(product);
                              onRemoveFromWishlist(product.id);
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-[#1C1917] hover:bg-[#D9603B] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                          >
                            <ShoppingBag className="w-3 h-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
