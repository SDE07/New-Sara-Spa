import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CommonCTA({ onOpenBooking }) {
  return (
    <section id="contact" className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0B1D15] via-[#07150E] to-[#040C08] text-white border-t border-[#1B4332]">
      {/* Ambient Forest & Gold Glow Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#52B788]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#2D6A4F]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold text-white leading-tight">
          You Deserve a Moment <br />
          <span className="skin-gradient-text italic font-normal">for Yourself.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#B7E4C7] max-w-xl mx-auto font-sans font-light leading-relaxed">
          Leave the stress behind. Step into Sara Spa.
        </p>

        <div className="pt-4">
          <button
            onClick={() => onOpenBooking ? onOpenBooking() : null}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#D4A373] hover:bg-[#E3BA8F] text-[#2D241E] font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.25em] shadow-[0_15px_40px_rgba(212,163,115,0.35)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>BOOK YOUR APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 text-[#2D241E]" />
          </button>
        </div>
      </div>
    </section>
  );
}
