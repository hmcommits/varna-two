"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { Product } from "./NewArrivals";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  // WhatsApp checkout message
  const itemsList = items
    .map((item) => `• ${item.product.name} (Qty: ${item.quantity}, Price: ₹${item.product.price * item.quantity})`)
    .join("\n");
  const waOrderMessage = `Hi Varna! I'd like to place an order for the following items:\n${itemsList}\n\nTotal: ₹${subtotal}\nPlease confirm order placement.`;
  const waOrderUrl = `https://wa.me/916363145972?text=${encodeURIComponent(waOrderMessage)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
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
                Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#736E68] hover:text-[#1C1917] rounded-full hover:bg-[#F2ECE2] transition-colors cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-[#F5F0E8] px-5 py-3 border-b border-[#E8E2D8]">
            <div className="flex items-center justify-between text-xs text-[#524C44] mb-1.5">
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#D9603B]">₹{remainingForFreeShipping}</strong> more for Free Shipping!
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold">🎉 You unlocked Free Shipping!</span>
              )}
              <span className="font-bold">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-[#E5DCD0] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#D9603B] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-[#8C847A]">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 mb-3 text-[#B0A79C]" />
                <p className="font-medium text-sm text-[#1C1917]">Your bag is empty</p>
                <p className="text-xs text-[#8C847A] mt-1">Discover our latest drops and bold fits.</p>
                <button
                  onClick={onClose}
                  className="mt-5 inline-block text-xs font-bold text-white bg-[#1C1917] hover:bg-[#D9603B] px-5 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-white p-3 rounded-xl border border-[#ECE5D8] shadow-xs"
                >
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-[#F2EDE4] shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1C1917] leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#9C948A] hover:text-rose-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-xs font-bold text-[#1C1917] mt-0.5">
                      ₹{item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#DDD5C7] rounded-full overflow-hidden bg-[#FAF7F2]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="px-2.5 py-0.5 text-xs text-[#5C554E] hover:bg-[#EFECE6] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#1C1917]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="px-2.5 py-0.5 text-xs text-[#5C554E] hover:bg-[#EFECE6] transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#1C1917]">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#E8E2D8] bg-white space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#736E68]">Subtotal</span>
                <span className="font-bold text-[#1C1917] text-base">₹{subtotal}</span>
              </div>
              <p className="text-[11px] text-[#8C847A]">
                Taxes and shipping calculated at checkout.
              </p>

              {/* Order via WhatsApp Button */}
              <a
                href={waOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <div className="relative w-4 h-4 shrink-0">
                  <Image
                    src="/images/whatsapp-icon.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Order via WhatsApp (+91 63631 45972)</span>
              </a>

              <button className="w-full bg-[#181614] hover:bg-[#2C2723] text-white text-xs sm:text-sm font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer active:scale-98">
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
