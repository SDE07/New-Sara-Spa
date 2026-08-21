import React from "react";
import { Sparkles, Phone, Mail, MapPin, Clock, Globe, ArrowUp } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#211A15] text-[#D8C7B5] border-t border-[#3D3128] pt-16 pb-12 overflow-hidden">
      {/* Subtle Background Warm Radiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4A373]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-[#D4A373]/30 p-1 flex items-center justify-center">
                <img
                  src={logo}
                  alt="SARA SPA Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,163,115,0.4)]"
                />
              </div>
              <div>
                <span className="text-2xl font-serif-luxury font-bold tracking-[0.2em] text-[#FAF7F2]">
                  SARA SPA
                </span>
                <span className="block text-[9px] uppercase tracking-[0.3em] text-[#E3BA8F] font-sans -mt-1 font-semibold">
                  Sanctuary of Wellness
                </span>
              </div>
            </div>

            <p className="text-[#E3BA8F] font-serif-luxury italic text-lg tracking-wide">
              Relax • Rejuvenate • Renew
            </p>

            <p className="text-xs text-[#B5A18F] leading-relaxed">
              Step into a realm of serene tranquility. Luxury hydrotherapy, holistic massage, and restorative rituals curated for total harmony of body and mind.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-xs uppercase tracking-widest font-bold text-[#E3BA8F] hover:text-white transition-colors underline underline-offset-4"
              >
                Reserve a Session →
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B5A18F]">
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

          {/* Col 3: Contact & Address */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Contact
            </h4>
            <ul className="space-y-3 text-xs text-[#B5A18F]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                <span>450 Sanctuary Blvd, Suite 800, New York, NY 10022</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                <span>+1 (800) 555-SARA (7272)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                <span>concierge@saraspa.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FAF7F2] font-medium">Mon – Sun: 9:00 AM – 10:00 PM</p>
                  <p className="text-[11px] text-[#9E8A7C]">Private appointments available upon request</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Social & Interactive Experience */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#FAF7F2]">
              Social & Experience
            </h4>
            <p className="text-xs text-[#B5A18F]">
              Follow our daily serenity rituals and immerse yourself in our interactive 3D spaces.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#E3BA8F] hover:text-[#E3BA8F] flex items-center justify-center transition-colors text-white"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#E3BA8F] hover:text-[#E3BA8F] flex items-center justify-center transition-colors text-white"
                title="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="#hero"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#E3BA8F]/40 text-[#E3BA8F] text-xs font-semibold hover:bg-white/10 transition-all"
                title="Google 3D Experience"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Google 3D</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3D3128] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8A7C]">
          <p>© {new Date().getFullYear()} SARA SPA. All rights reserved. Crafted for Ultimate Serenity.</p>
          <div className="flex items-center gap-6">
            <span>Three.js 3D Experience</span>
            <span>Warm Whitish / Skin Tone Palette</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
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
