"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare } from "lucide-react";
import { PaperPlaneDoodle } from "./Doodles";

export function Newsletter() {
  const topics = [
    { id: "Enquiry", label: "Enquiry", placeholder: "Write your enquiry here..." },
    { id: "Custom Order", label: "Custom Order", placeholder: "Tell us about your custom print, jerseys, hoodies or bulk requirements..." },
    { id: "Feedback", label: "Feedback", placeholder: "Share your experience or feedback with us..." },
    { id: "Suggestion", label: "Suggestion", placeholder: "What fits or designs would you love to see in our next drop?..." },
  ];

  const [selectedTopic, setSelectedTopic] = useState("Enquiry");
  const [message, setMessage] = useState("");

  const currentTopic = topics.find((t) => t.id === selectedTopic) || topics[0];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMessage = message.trim()
      ? `[${selectedTopic}] ${message.trim()}`
      : `Hi Varna! I have an enquiry regarding ${selectedTopic}.`;
    const waUrl = `https://wa.me/916363145972?text=${encodeURIComponent(finalMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full overflow-hidden bg-[#FAF7F2] pb-10 sm:pb-14 md:pb-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#18191D] text-white p-6 sm:p-8 md:p-12 shadow-xl border border-white/5">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full z-10">
            
            {/* Form Column */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              
              {/* Pre-heading with paper plane element next to CLUB */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#D9603B] uppercase">
                    JOIN THE VARNA CLUB
                  </span>
                  <PaperPlaneDoodle className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 transform rotate-12 shrink-0" />
                </div>
                <span className="text-white/30 hidden sm:inline">•</span>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#A8A199] uppercase">
                  WE&apos;D LOVE TO HEAR FROM YOU
                </span>
              </div>

              {/* Main Heading from Screenshot */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-tight">
                Have an Enquiry, Feedback or Suggestion?
              </h2>

              {/* Subtitle from Screenshot */}
              <p className="text-xs sm:text-sm md:text-base text-[#B3ACA3] max-w-2xl leading-relaxed">
                Looking for a custom print, sizing advice, bulk order, or want to share feedback? Type your message below to chat directly with us on WhatsApp.
              </p>

              {/* Category Selection Pills */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
                {topics.map((topic) => {
                  const isSelected = selectedTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.id)}
                      className={`text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-[#F5DED4] text-[#1E1B18] shadow-md scale-105"
                          : "bg-white/10 hover:bg-white/15 text-[#D4CDC5] hover:text-white border border-white/10"
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>

              {/* Textarea Form */}
              <form onSubmit={handleSend} className="space-y-4 pt-1 max-w-2xl">
                <div className="relative rounded-2xl bg-white/[0.06] border border-white/15 focus-within:border-[#25D366] focus-within:bg-white/[0.09] transition-all p-3 sm:p-4 shadow-inner">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={currentTopic.placeholder}
                    rows={3}
                    className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none resize-none leading-relaxed"
                  />
                  <div className="flex items-center justify-end gap-1.5 pt-2 text-[10px] sm:text-[11px] text-[#25D366] font-medium border-t border-white/10">
                    <MessageSquare className="w-3 h-3" />
                    <span>Direct to WhatsApp</span>
                  </div>
                </div>

                {/* Send on WhatsApp Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 shrink-0">
                      <Image
                        src="/images/whatsapp-icon.png"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>Send on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

            </div>

            {/* Right Decorative Cards (from existing design) */}
            <div className="hidden lg:flex lg:col-span-4 items-center justify-end relative min-h-[220px] pr-4 select-none">
              
              {/* Sneakers Card */}
              <div className="relative w-28 h-36 rounded-xl overflow-hidden shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 border border-white/20 bg-[#24262B]">
                <Image
                  src="/images/newsletter/shoes-sneakers.webp"
                  alt="Street sneakers"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Quote Polaroid */}
              <div className="relative w-32 h-40 rounded-xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 -ml-6 -mt-4 border border-white/30 bg-[#F4EFEB]">
                <Image
                  src="/images/newsletter/polaroid-quote.webp"
                  alt="Good Outfits Brighter Days"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
