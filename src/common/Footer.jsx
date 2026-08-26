import React from "react";
import { Sparkles, Phone, Mail, MapPin, Clock, Globe, ArrowUp } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#211A15] text-[#D8C7B5] border-t border-[#3D3128] pt-8 sm:pt-10 pb-3 overflow-hidden">
      {/* Subtle Background Warm Radiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4A373]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8 sm:mb-10 items-start">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5 pr-0 lg:pr-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/5 border border-[#D4A373]/30 p-1 flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt="NEW SARA SPA Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(212,163,115,0.45)]"
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif-luxury font-bold tracking-[0.18em] text-[#FAF7F2]">
                  NEW SARA SPA
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-[#E3BA8F] font-sans mt-0.5 font-semibold">
                  Sanctuary of Wellness
                </span>
              </div>
            </div>

            <p className="text-[#E3BA8F] font-serif-luxury italic text-base tracking-wide">
              Relax • Rejuvenate • Renew
            </p>

            <p className="text-xs text-[#B5A18F] leading-relaxed">
              Step into a realm of serene tranquility. Luxury hydrotherapy, holistic massage, and restorative rituals curated for total harmony of body and mind in Wakad, Pune.
            </p>

            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="text-xs uppercase tracking-widest font-bold text-[#E3BA8F] hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
              >
                Reserve a Session →
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 pl-0 lg:pl-2">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A18F]">
              <li>
                <a href="/" className="hover:text-[#E3BA8F] transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#E3BA8F] transition-colors">About</a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#E3BA8F] transition-colors">Services</a>
              </li>
              <li>
                <a href="/packages" className="hover:text-[#E3BA8F] transition-colors">Packages</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#E3BA8F] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Contact & Location
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A18F]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                <span className="leading-snug">Office No 213 Wbiz Next To Ginger Hotel, Bhumkar Chowk, Wakad, Pune - 411057</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                <a href="tel:+919834366828" className="hover:text-white transition-colors font-medium">+91 98343 66828</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                <a href="mailto:saranewspa@gmail.com" className="hover:text-white transition-colors">saranewspa@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FAF7F2] font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse"></span>
                    Open 24 Hours (Mon – Sun)
                  </p>
                  <p className="text-[11px] text-[#9E8A7C]">Beauty, cosmetic & personal care</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Interactive Experience (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Social & Experience
            </h4>
            <p className="text-xs text-[#B5A18F]">
              Follow our daily serenity rituals and immerse yourself in our interactive 3D spaces.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#E3BA8F] hover:text-[#E3BA8F] flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#E3BA8F] hover:text-[#E3BA8F] flex items-center justify-center transition-colors text-white"
                title="Facebook"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a
                href="#hero"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#E3BA8F]/40 text-[#E3BA8F] text-xs font-semibold hover:bg-white/10 transition-all"
                title="Google 3D Experience"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Google 3D</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimized Clean Spacing */}
        <div className="pt-4 border-t border-[#3D3128] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#C4B3A3]">
          <p className="text-center sm:text-left font-medium">
            © {new Date().getFullYear()} NEW SARA SPA. All Rights Reserved. | Designed & Developed By{" "}
            <a
              href="https://foxaircomm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6B00] hover:text-[#FF8533] font-bold hover:underline transition-colors tracking-wide ml-0.5"
            >
              Fox Aircomm Pvt Ltd
            </a>
          </p>
          <div className="flex items-center gap-5 text-xs sm:text-sm">
            <a href="/services" className="hover:text-[#E3BA8F] transition-colors">Privacy Policy</a>
            <a href="/services" className="hover:text-[#E3BA8F] transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
