import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  Home,
  MessageCircle,
  ShieldCheck,
  Compass,
  Heart
} from "lucide-react";
import useSEO from "../hooks/useSEO";
import logo from "../assets/logo.png";
import spaHeroImg from "../assets/spahero.png";

export default function Thankyou() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve submission details passed via router state if available
  const stateData = location.state || {};
  const isBooking = stateData.type === "booking" || !stateData.type;
  const clientName = stateData.name || stateData.fullName || "Valued Guest";
  const serviceName = stateData.service || stateData.preferredService || stateData.subject || "Signature Wellness Treatment";
  const bookingDate = stateData.date || stateData.preferredDate || "As Requested / Flexible";
  const bookingTime = stateData.time || "Preferred Session Time";
  const guests = stateData.guests || "1 Person";
  const phone = stateData.phone || "+91 98343 66828";
  const email = stateData.email || "saranewspa@gmail.com";

  useSEO({
    title: "Thank You — NEW SARA SPA | Reservation Received",
    description: "Thank you for reaching out to NEW SARA SPA Wakad Pune. Your booking or inquiry has been received by our concierge team.",
    canonical: "/thank-you",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D241E] pt-28 sm:pt-36 pb-20 selection:bg-[#D4A373] selection:text-white relative overflow-hidden">
      
      {/* ── Soft Ambient Warm Radiance Backdrops ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#F59E0B]/20 via-[#D4A373]/15 to-transparent rounded-full blur-[110px]" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FED7AA]/25 rounded-full blur-[90px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#52B788]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Main Confirmation Hero Card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] bg-white/90 backdrop-blur-xl border border-[#EAE0D3] shadow-[0_20px_60px_rgba(45,36,30,0.08)] p-6 sm:p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Subtle Top Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#B07D54] via-[#E3BA8F] to-[#8C6A43]" />

          {/* Top-Left Back Button */}
          <button
            onClick={() => navigate(-1)}
            aria-label="Go Back"
            className="absolute top-4 sm:top-6 left-4 sm:left-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#2D241E] text-[#6B5A4E] hover:text-[#E3BA8F] border border-[#E8DFD5] text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xs group z-20"
            title="Back to Previous Page"
          >
            <ArrowLeft className="w-4 h-4 text-[#B07D54] group-hover:text-[#E3BA8F] group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back</span>
          </button>

          {/* ── Beautifully Aligned Header with Brand Logo ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-5 sm:mb-6 pt-2 sm:pt-0">
            {/* NEW SARA SPA Official Brand Logo Emblem */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#D4A373]/30 via-[#D4A373]/10 to-[#FAF7F2] p-1.5 border-2 border-[#D4A373]/50 shadow-xl shadow-[#D4A373]/25 flex items-center justify-center shrink-0 group"
            >
              <img
                src={logo}
                alt="NEW SARA SPA Official Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,163,115,0.45)] group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Status Pill & Thank You Headline */}
            <div className="text-center sm:text-left space-y-1.5">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#E3BA8F]/15 border border-[#D4A373]/40 text-[#8C6A43] text-[11px] font-bold uppercase tracking-[0.2em] shadow-2xs">
                <span>{isBooking ? "Reservation Received" : "Inquiry Received"}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif-luxury font-bold text-[#2D241E] tracking-tight leading-tight">
                <span>Thank You,</span>{" "}
                <span className="skin-gradient-text italic font-normal capitalize">{clientName}</span>
              </h1>
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-[#6B5A4E] max-w-4xl lg:max-w-5xl mx-auto font-sans font-light leading-relaxed mb-8 sm:mb-10">
            {isBooking
              ? "Your sanctuary session has been received by our concierge team. We are preparing everything for your rejuvenating experience."
              : "Thank you for reaching out. Our concierge team has received your message and will get back to you shortly."}
          </p>

          {/* ── Summary Details Breakdown Box (Wider & Balanced Proportions) ── */}
          <div className="max-w-4xl xl:max-w-5xl w-full mx-auto bg-[#FAF7F2] border border-[#E8DFD5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 text-left space-y-5 mb-8 sm:mb-10 shadow-inner">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#E8DFD5]">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8C6A43]">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#52B788]" />
                <span>Reference Confirmation</span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#52B788] bg-[#52B788]/15 px-3 py-1 rounded-full border border-[#52B788]/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
                <span>Concierge Notified</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                  Client / Guest
                </span>
                <span className="text-sm sm:text-base font-bold text-[#2D241E] capitalize block">{clientName}</span>
              </div>

              <div className="space-y-1">
                <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                  Service / Request
                </span>
                <span className="text-sm sm:text-base font-bold text-[#2D241E] block">{serviceName}</span>
              </div>

              {isBooking && (
                <>
                  <div className="space-y-1">
                    <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                      Preferred Date & Time
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#2D241E] block">
                      {bookingDate} {bookingTime ? `• ${bookingTime}` : ""}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                      Party Size
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#2D241E] block">{guests}</span>
                  </div>
                </>
              )}

              <div className="space-y-1">
                <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                  Contact Phone
                </span>
                <span className="text-sm sm:text-base font-medium text-[#2D241E] block">{phone}</span>
              </div>

              <div className="space-y-1">
                <span className="block text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#8C7364] font-bold">
                  Sanctuary Branch
                </span>
                <span className="text-sm sm:text-base font-medium text-[#2D241E] block">Wbiz, Bhumkar Chowk, Wakad Pune</span>
              </div>
            </div>
          </div>

          {/* ── Call to Action Buttons ── */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#2D241E] text-[#2D241E] hover:text-white border border-[#E5D6C4] hover:border-[#2D241E] font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-xs hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#B07D54]" />
              <span>Go Back</span>
            </button>

            <Link
              to="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#2D241E]/15 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 text-[#E3BA8F]" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] text-[#2D241E] border border-[#E5D6C4] hover:border-[#B07D54] font-sans font-semibold text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B07D54]" />
            </Link>

            <a
              href="https://wa.me/919834366828?text=Hello%20NEW%20Sara%20Spa,%20I%20have%20submitted%20a%20booking%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>

        {/* ── 3 Steps of Care ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white/80 border border-[#EAE0D3] shadow-xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E3BA8F]/20 text-[#8C6A43] flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-serif-luxury font-bold text-base text-[#2D241E]">Instant Scheduling</h4>
            <p className="text-xs text-[#6B5A4E] leading-relaxed">
              Our front desk reserves your private treatment suite and confirms your preferred master therapist.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-[#EAE0D3] shadow-xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E3BA8F]/20 text-[#8C6A43] flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-serif-luxury font-bold text-base text-[#2D241E]">Warm Welcome</h4>
            <p className="text-xs text-[#6B5A4E] leading-relaxed">
              Arrive at our Wakad sanctuary. Enjoy complimentary Ayurvedic herbal tea and personal consultation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 border border-[#EAE0D3] shadow-xs text-center space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-[#E3BA8F]/20 text-[#8C6A43] flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-serif-luxury font-bold text-base text-[#2D241E]">Total Rejuvenation</h4>
            <p className="text-xs text-[#6B5A4E] leading-relaxed">
              Immerse yourself in therapeutic aromatherapy, deep tissue strokes, or our signature Bangkok Jacuzzi.
            </p>
          </div>
        </div>

        {/* ── Quick Location Card ── */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#2D241E] to-[#1E1712] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4A373]/30">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E3BA8F] font-bold block">
              Need Immediate Assistance?
            </span>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#FAF7F2]">
              Call Our Concierge Anytime (Open 24/7)
            </h3>
            <p className="text-xs text-[#D4C3B3]">
              Office No 213 Wbiz Next To Ginger Hotel Bhumkar Chowk Pune Wakad - 411057
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919834366828"
              className="px-6 py-3 rounded-full bg-[#E3BA8F] hover:bg-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98343 66828</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
