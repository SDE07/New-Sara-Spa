import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles, Menu, X, Calendar, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll reading progress inside navbar pill
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Packages", to: "/packages" },
    { name: "Contact", to: "/contact" },
  ];

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const handleNavClick = (to) => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-300">
      <div className={`pointer-events-auto relative w-full max-w-6xl rounded-full backdrop-blur-2xl px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-500 overflow-hidden ${
        isScrolled
          ? "bg-[#1A120B]/95 hover:bg-[#1A120B]/98 border border-white/15 shadow-[0_14px_45px_rgba(0,0,0,0.45)]"
          : "bg-white/70 hover:bg-white/85 border border-[#E8DFD5]/90 shadow-[0_6px_25px_rgba(212,163,115,0.12)]"
      }`}>

        {/* Dynamic Embedded Scroll Reading Loader Bar (Runs along navbar) */}
        <div className="absolute inset-x-4 bottom-0 h-[2.5px] rounded-full overflow-hidden pointer-events-none z-20">
          <motion.div
            className={`h-full origin-left rounded-full transition-colors duration-500 ${
              isScrolled
                ? "bg-gradient-to-r from-[#B07D54] via-[#E3BA8F] to-[#FFE0B2] shadow-[0_0_12px_rgba(227,186,143,1)]"
                : "bg-gradient-to-r from-[#D4A373] via-[#B07D54] to-[#8C6A43] shadow-[0_0_8px_rgba(176,125,84,0.6)]"
            }`}
            style={{ scaleX }}
          />
        </div>
        
        {/* Brand Logo & Name */}
        <Link
          to="/"
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          <div className={`relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full p-0.5 transition-all duration-500 group-hover:scale-105 shrink-0 ${
            isScrolled
              ? "bg-gradient-to-br from-[#D4A373]/30 via-[#D4A373]/10 to-transparent group-hover:from-[#D4A373]/50"
              : "bg-gradient-to-br from-[#D4A373]/25 via-[#D4A373]/10 to-transparent group-hover:from-[#D4A373]/40"
          }`}>
            <img
              src={logo}
              alt="NEW SARA SPA Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(227,186,143,0.4)] contrast-[1.08] brightness-[1.05]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className={`text-xs sm:text-sm md:text-base font-serif-luxury font-bold tracking-[0.16em] transition-colors duration-300 leading-tight ${
              isScrolled
                ? "text-white group-hover:text-[#E3BA8F]"
                : "text-[#2D241E] group-hover:text-[#B07D54]"
            }`}>
              NEW SARA SPA
            </span>
            <span className={`block text-[7px] sm:text-[8px] uppercase tracking-[0.22em] font-sans font-semibold transition-colors duration-300 ${
              isScrolled ? "text-[#E3BA8F]" : "text-[#8C6A43]"
            }`}>
              Sanctuary of Wellness
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 relative py-1 ${
                  active
                    ? isScrolled
                      ? "text-[#E3BA8F] font-semibold"
                      : "text-[#B07D54] font-semibold"
                    : isScrolled
                      ? "text-white/80 hover:text-white"
                      : "text-[#5C4D44] hover:text-[#2D241E]"
                }`}
              >
                <span>{item.name}</span>
                {active && (
                  <span className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "bg-[#E3BA8F] shadow-[0_0_8px_rgba(227,186,143,1)]"
                      : "bg-[#B07D54] shadow-[0_0_8px_rgba(176,125,84,0.8)]"
                  }`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Book Appointment CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className={`group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
              isScrolled
                ? "bg-white text-[#1A120B] hover:bg-[#FAF7F2]"
                : "bg-[#2D241E] text-white hover:bg-[#4A3B32] shadow-[#2D241E]/15"
            }`}
          >
            <span>Book Appointment</span>
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
              isScrolled ? "text-[#1A120B]" : "text-[#E3BA8F]"
            }`} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full border transition-colors ${
              isScrolled
                ? "bg-white/10 border-white/15 text-white hover:text-[#E3BA8F]"
                : "bg-[#2D241E]/5 border-[#E8DFD5] text-[#2D241E] hover:text-[#B07D54]"
            }`}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`pointer-events-auto absolute top-full mt-2 inset-x-3 sm:inset-x-6 max-w-6xl mx-auto rounded-3xl backdrop-blur-2xl px-6 pt-4 pb-6 space-y-4 shadow-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A120B]/98 border border-white/15 text-white"
            : "bg-[#FAF7F2]/98 border border-[#E8DFD5] text-[#2D241E]"
        }`}>
          <div className="flex flex-col space-y-2.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => handleNavClick(item.to)}
                className={`text-sm uppercase tracking-widest font-serif-luxury font-medium py-2 border-b ${
                  isScrolled
                    ? isActive(item.to)
                      ? "text-[#E3BA8F] border-white/10"
                      : "text-white/80 hover:text-white border-white/10"
                    : isActive(item.to)
                      ? "text-[#B07D54] border-[#EFE6DC]"
                      : "text-[#2D241E] hover:text-[#B07D54] border-[#EFE6DC]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className={`w-full py-3 px-6 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg ${
                isScrolled
                  ? "bg-white text-[#1A120B]"
                  : "bg-[#2D241E] text-white"
              }`}
            >
              <Calendar className={`w-4 h-4 ${isScrolled ? "text-[#1A120B]" : "text-[#E3BA8F]"}`} />
              <span>Book Appointment →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
