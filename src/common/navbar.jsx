import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Menu, X, Calendar, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo.png";
export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#FAF7F2]/90 backdrop-blur-xl border-b border-[#E8DFD5] py-3.5 shadow-sm shadow-[#D4A373]/10"
          : "bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4A373]/15 to-transparent p-1 transition-all duration-300 group-hover:scale-105 group-hover:from-[#D4A373]/25 shadow-xs shrink-0">
              <img
                src={logo}
                alt="NEW SARA SPA Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(180,130,80,0.38)] drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] contrast-[1.06] brightness-[0.98] transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base md:text-lg font-serif-luxury font-bold tracking-[0.22em] text-[#2D241E] group-hover:text-[#B07D54] transition-colors leading-tight">
                NEW SARA SPA
              </span>

              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.28em] text-[#8C6A43] font-sans font-semibold mt-0.5">
                Sanctuary of Wellness
              </span>
            </div>
          </Link>
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-xs lg:text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#B07D54] after:transition-all after:duration-300 ${
                  isActive(item.to)
                    ? "text-[#B07D54] after:w-full"
                    : "text-[#4A3B32] hover:text-[#B07D54] after:w-0 hover:after:w-full"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-widest font-bold text-white bg-[#2D241E] hover:bg-[#4A3B32] shadow-md shadow-[#2D241E]/15 hover:shadow-lg hover:shadow-[#2D241E]/25 transition-all duration-300 transform hover:scale-[1.03]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E3BA8F]" />
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E3BA8F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/60 border border-[#E8DFD5] text-[#2D241E] hover:text-[#B07D54] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2]/98 backdrop-blur-2xl border-b border-[#E8DFD5] px-6 pt-4 pb-8 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-base uppercase tracking-widest font-serif-luxury font-medium py-2 border-b border-[#EFE6DC] ${
                  isActive(item.to) ? "text-[#B07D54]" : "text-[#2D241E] hover:text-[#B07D54]"
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
              className="w-full py-3.5 px-6 rounded-xl bg-[#2D241E] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4 text-[#E3BA8F]" />
              <span>Book Appointment →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
