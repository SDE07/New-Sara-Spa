import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import massageIcon from "../assets/massage-service-icon.png";

export default function FloatingServiceWidget() {
  const navigate = useNavigate();
  const location = useLocation();

  // Completely hide the quick access floating widget when the user is already on the services page
  const isServicesPage = location.pathname.toLowerCase().startsWith("/services");
  if (isServicesPage) {
    return null;
  }

  return (
    <aside
      aria-label="Quick Access to Our Services"
      className="fixed bottom-2.5 right-2.5 sm:bottom-3.5 sm:right-4 z-50 select-none"
    >
      <button
        type="button"
        onClick={() => {
          if (!isServicesPage) {
            navigate("/services");
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        aria-label="Explore Our Services"
        className="group relative flex flex-col items-center cursor-pointer transition-transform duration-300"
      >
        {/* Upper Side Floating Label: "Our Services" */}
        <div className="mb-1 px-2.5 py-0.5 rounded-full bg-[#1F1712]/95 border border-[#D4A373]/80 text-[#FAF7F2] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider shadow-[0_4px_10px_rgba(0,0,0,0.35)] backdrop-blur-md flex items-center gap-1 group-hover:bg-[#2D241E] group-hover:text-[#E3BA8F] group-hover:border-[#E3BA8F] transition-all duration-300">
          <span>Our Services</span>
          <Sparkles className="w-2.5 h-2.5 text-[#E3BA8F] animate-pulse" />
        </div>

        {/* Circular Floating Corner Icon — Large Logo with Minimal Clean Frame */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#D4A373] group-hover:border-[#E3BA8F] shadow-[0_8px_25px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_32px_rgba(212,163,115,0.45)] flex items-center justify-center p-1 overflow-hidden transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
          {/* Subtle Ambient Radial Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4A373]/30 to-[#E3BA8F]/30 blur-sm opacity-60 group-hover:opacity-100 transition-opacity -z-10" />

          {/* Green Live Pulse Beacon */}
          <span className="absolute top-0 right-0 z-10 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52B788] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#52B788] border-2 border-white shadow-xs" />
          </span>

          {/* Massage Icon — Large & Prominent */}
          <img
            src={massageIcon}
            alt="Our Services"
            className="w-[92%] h-[92%] object-contain filter contrast-110 drop-shadow-xs group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </button>
    </aside>
  );
}
