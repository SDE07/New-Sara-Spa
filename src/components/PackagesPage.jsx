import React, { useState, useEffect, useRef } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import {
  Sparkles, Check, Clock, ChevronLeft, ChevronRight, Flower2
} from "lucide-react";
import {
  FaSpa, FaHotTubPerson, FaHandsHoldingCircle, FaLeaf, FaBottleDroplet
} from "react-icons/fa6";
import {
  GiLotus, GiStoneStack, GiCandleLight,
  GiSteam, GiFlowerTwirl, GiMeditation, GiFootprint, GiBamboo, GiTowel
} from "react-icons/gi";
import BookingModal from "./BookingModal";

export default function PackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [packageName, setPackageName] = useState("Quarterly Package");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const carouselRef = useRef(null);

  useSEO({
    title: "Wellness Memberships & Pentagonal Spa Packages — NEW SARA SPA Wakad",
    description: "Explore 4 exclusive wellness memberships and 14 authentic pentagonal spa therapy packages in Wakad, Pune.",
    canonical: "/packages"
  });

  // Smooth Auto-Scrolling Carousel with Hover & Touch Pause
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      const step = container.clientWidth < 640 ? container.clientWidth * 0.85 : 340;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: step, behavior: "smooth" });
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused, selectedCategory]);

  // 4 Exclusive Wellness Memberships
  const membershipPackages = [
    {
      id: 1,
      tag: "STANDARD RITUAL",
      title: "Quarterly Package",
      subtitle: "Regular rejuvenation & calm.",
      price: "₹5,000",
      period: "/ 3 Months",
      features: [
        "3 Sessions Of 60 Minutes Each",
        "Free Steam Bath With Every Session",
        "Access to Relaxation Lounge",
        "Complimentary Botanical Herbal Tea",
      ],
      isDark: false,
    },
    {
      id: 2,
      tag: "COMPLETE YEAR",
      title: "Annually Package",
      subtitle: "Consistent long-term wellness.",
      price: "₹12,000",
      period: "/ Year",
      features: [
        "10 Sessions Of 60 Minutes Each",
        "Free Steam Bath With Every Session",
        "Priority Appointment Booking",
        "10% Off Private Spa Retail Products",
      ],
      isDark: false,
    },
    {
      id: 3,
      tag: "DEEP CARE RITUAL",
      title: "Yearly Package",
      subtitle: "Full body massage + scrub.",
      badge: "MOST POPULAR",
      price: "₹15,000",
      period: "/ Year",
      features: [
        "8 Sessions Of 90 Minutes Each",
        "Full Body Massage With Full Body Scrub",
        "Free Steam Bath With Every Session",
        "Private Suite Amenities & Herbal Oils",
      ],
      isDark: true,
    },
    {
      id: 4,
      tag: "VIP JACUZZI HYDRO",
      title: "Jacuzzi Yearly Package",
      subtitle: "Bangkok-style Jacuzzi luxury.",
      badge: "VIP SUITE",
      price: "₹30,000",
      period: "/ Year",
      features: [
        "10 Sessions Of 90 Minutes Each",
        "Full Body Massage With Bangkok-Style Jacuzzi",
        "Free Steam Bath With Every Session",
        "Complimentary Aromatic Hydro Soaks",
      ],
      isDark: false,
    },
  ];

  // All 14 Authentic Pentagonal Spa Therapies with Dedicated Luxury Spa & Massage Icons
  const allTherapies = [
    {
      id: 1,
      category: "Scrubs & Wraps",
      title: "Jasmine Scrub",
      timePrice: "60–90 Mins | ₹ 3000/-  4500/-",
      desc: "Gentle exfoliating scrub cleanses and removes dead skin cells, revealing younger and healthier looking skin.",
      icon: <GiLotus className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 2,
      category: "Combos",
      title: "Body Thai Massage + Scrub",
      timePrice: "60–90–120 Mins | ₹ 7000/-  9000/-  12000/-",
      desc: "Body massage works muscles, skin. Full body scrub exfoliates, improves circulation for healthier skin.",
      icon: <FaSpa className="w-7 h-7 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 3,
      category: "Combos",
      title: "Body Massage + Scrub + Jacuzzi",
      timePrice: "60–90–120 Mins | ₹ 15000/-  18000/-  20000/-",
      desc: "Body massage works muscles, skin. Hot tub: tub for relaxation, hydrotherapy, pleasure.",
      icon: <FaHotTubPerson className="w-7 h-7 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 4,
      category: "Combos",
      title: "Body Hammam Massage + Scrub",
      timePrice: "60–90–120 Mins | ₹ 12000/-  15000/-  18000/-",
      desc: "Hammam treatments use hot steam for deep cleanse, promoting relaxation and skin purification.",
      icon: <GiSteam className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 5,
      category: "Combos",
      title: "Four Hand Massage + Jacuzzi + Scrub",
      timePrice: "60–90–120 Mins | ₹ 12000/-  15000/-  18000/-",
      desc: "Four-hand massage: medium pressure massage, two therapists working your body in perfect synchronization.",
      icon: <FaHandsHoldingCircle className="w-7 h-7 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 6,
      category: "Massages",
      title: "Swedish Massage",
      timePrice: "60–90–120 Mins | ₹ 3500/-  4500/-  5500/-",
      desc: "Swedish massage: long strokes, kneading, rhythmic tapping, and joint movement for relaxation and muscle tension release.",
      icon: <GiStoneStack className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 7,
      category: "Massages",
      title: "Lomi Lomi Massage",
      timePrice: "60–90–120 Mins | ₹ 3500/-  4500/-  5500/-",
      desc: "Lomi Lomi massage: Hawaiian integrative practice gaining global popularity for its unique techniques and holistic approach.",
      icon: <GiFlowerTwirl className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:rotate-45 group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 8,
      category: "Combos",
      title: "Couple Treatment + Jacuzzi",
      timePrice: "60–90–120 Mins | ₹ 14000/-  16000/-  18000/-",
      desc: "Couples massage: two people massaged together in the same room, offering a shared relaxing and bonding experience.",
      icon: <GiCandleLight className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 9,
      category: "Massages",
      title: "Heritage Ladies Special",
      timePrice: "60–90 Mins | ₹ 6000/-  8000/-",
      desc: "Heritage Ladies Special: Luxurious full-body massage with oil, rich creams, and gels for deep relaxation and rejuvenation.",
      icon: <GiLotus className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 10,
      category: "Massages",
      title: "French Aroma Massage",
      timePrice: "60–90–120 Mins | ₹ 3500/-  4500/-  5500/-",
      desc: "French Aroma massage: Gentle touch therapy & aromatherapy blend for all ages and genders, promoting relaxation and well-being.",
      icon: <FaBottleDroplet className="w-7 h-7 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 11,
      category: "Express Relievers",
      title: "Head Massages (Indian Champ)",
      timePrice: "45–60 Mins | ₹ 2500/-  3000/-",
      desc: "Head massage is a deeply relaxing massage focusing on your head, neck, and shoulders to relieve tension and stress.",
      icon: <GiMeditation className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 12,
      category: "Express Relievers",
      title: "Foot Reflexology",
      timePrice: "45–60 Mins | ₹ 2500/-  3000/-",
      desc: "Reflexology applies pressure to feet, hands, and ears to relieve stress and promote body balance and well-being.",
      icon: <GiFootprint className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 13,
      category: "Express Relievers",
      title: "Back Massage",
      timePrice: "45–60 Mins | ₹ 2500/-  3000/-",
      desc: "Back massage: any massage performed on the back to relieve muscle tension, reduce pain, and promote relaxation and overall well-being.",
      icon: <GiStoneStack className="w-8 h-8 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
    {
      id: 14,
      category: "Scrubs & Wraps",
      title: "Mud Wraps",
      timePrice: "60–90 Mins | ₹ 3500/-  4500/-",
      desc: "Mud wraps are spa treatments using mineral-rich mud applied to the skin to detoxify, hydrate, and improve skin health in a relaxing session.",
      icon: <FaLeaf className="w-7 h-7 text-[#8C6A43] group-hover:text-[#D4A373] group-hover:scale-115 transition-all duration-300" />
    },
  ];

  const categories = ["All", "Combos", "Massages", "Scrubs & Wraps", "Express Relievers"];

  const filteredTherapies = selectedCategory === "All"
    ? allTherapies
    : allTherapies.filter((t) => t.category === selectedCategory);

  const displayTherapies = [...filteredTherapies, ...filteredTherapies];

  const resumeTimeoutRef = useRef(null);

  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    // Immediately pause auto-scrolling so the manual scroll animation isn't overridden
    setIsAutoScrollPaused(true);

    const step = container.clientWidth < 640 ? container.clientWidth * 0.85 : 340; // 1 full card width with gap
    if (direction === "left") {
      if (container.scrollLeft <= 20) {
        container.scrollLeft = container.scrollWidth / 2;
      }
      container.scrollBy({ left: -step, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      container.scrollBy({ left: step, behavior: "smooth" });
    }

    // Auto-resume continuous scroll after 4 seconds of idle
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 4000);
  };

  const handleBook = (name) => {
    setPackageName(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] pt-24 sm:pt-28 pb-4 md:pb-8 relative overflow-hidden min-h-screen">
      
      {/* Ambient Halos */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── 1. WELLNESS MEMBERSHIPS HERO ── */}
      <section className="relative py-10 md:py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3.5 relative z-10">
         

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold tracking-tight text-[#2D241E]">
            Wellness <span className="skin-gradient-text italic font-normal">Memberships</span>
          </h1>

          <p className="text-[#6B5A4E] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Seasonal membership privileges designed for continuous vitality, regular Ayurvedic rejuvenation, and private Jacuzzi relaxation in Wakad.
          </p>
        </div>
      </section>

      {/* ── 4 MEMBERSHIP PACKAGES GRID (Wider & Sleeker Proportions) ── */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-5 items-stretch">
          {membershipPackages.map((pkg) => {
            const isDark = pkg.isDark;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-[26px] sm:rounded-[28px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 hover:-translate-y-1.5 relative group ${
                  isDark
                    ? "bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] border border-[#544133] shadow-[0_16px_40px_rgba(44,31,22,0.3)] text-white lg:-translate-y-2 hover:shadow-[0_20px_50px_rgba(44,31,22,0.45)]"
                    : "bg-white border border-[#EAE0D3] shadow-[0_8px_25px_rgba(45,36,30,0.05)] hover:shadow-xl text-[#2D241E] hover:border-[#D4A373]"
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4A373] text-[#2D241E] text-[9.5px] font-bold uppercase tracking-[0.18em] shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                {/* Card Top Information */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <span
                      className={`text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] ${
                        isDark ? "text-[#E3BA8F]" : "text-[#8C6A43]"
                      }`}
                    >
                      {pkg.tag}
                    </span>

                    <h3
                      className={`text-xl sm:text-[22px] font-serif-luxury font-bold leading-tight ${
                        isDark ? "text-white" : "text-[#2D241E]"
                      }`}
                    >
                      {pkg.title}
                    </h3>

                    <p
                      className={`text-xs font-light line-clamp-1 ${
                        isDark ? "text-white/70" : "text-[#7A695E]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price & Term */}
                  <div className="pt-1 flex items-baseline">
                    <span
                      className={`text-2xl sm:text-3xl font-sans font-extrabold tracking-tight ${
                        isDark ? "text-white" : "text-[#2D241E]"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs font-sans font-medium ml-1.5 ${
                        isDark ? "text-[#E3BA8F]" : "text-[#8C7364]"
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isDark
                              ? "border-[#E3BA8F] text-[#E3BA8F]"
                              : "border-[#D4A373] text-[#8C6A43]"
                          }`}
                        >
                          <Check className="w-2 h-2" />
                        </div>
                        <span
                          className={`text-xs leading-snug ${
                            isDark ? "text-white/85" : "text-[#5C4D44]"
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-5">
                  <button
                    onClick={() => handleBook(pkg.title)}
                    className={`w-full py-2.5 rounded-full font-bold text-[11px] uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                      isDark
                        ? "bg-[#D4A373] hover:bg-[#E3BA8F] text-[#2D241E] shadow-md hover:scale-[1.02]"
                        : "bg-[#FAF4ED] hover:bg-[#F3E7D8] text-[#2D241E] border border-[#E8DFD5] hover:border-[#D4A373] hover:scale-[1.02]"
                    }`}
                  >
                    <span>VIEW PACKAGES →</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 2. CONNECTED PENTAGONAL / HEXAGONAL SPA THERAPY SHOWCASE (WARM LUXURY PALETTE) ── */}
      <section className="py-10 sm:py-14 md:py-18 relative mt-10 md:mt-14 border-t border-[#EAE0D3] bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E8] to-[#FAF7F2] overflow-hidden">
        
        {/* Soft Warm Amber Ambient Radiance */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A373]/12 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#B07D54]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
            
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E]">
              Exfoliating Scrubs, Thai & <span className="italic font-normal skin-gradient-text">Massage Rituals</span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto font-light leading-relaxed">
              Experience our complete collection of 14 bespoke therapies — from fragrant Jasmine Scrubs to royal Four Hand Jacuzzi retreats.
            </p>

            {/* Category Filter Pills (Warm Spa Theme) */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 sm:pt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#2D241E] text-white shadow-md shadow-[#2D241E]/20 scale-105"
                      : "bg-white text-[#6B5A4E] border border-[#E8DFD5] hover:border-[#D4A373] hover:text-[#2D241E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sweeper Navigation Buttons & Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 sm:mb-6 px-2">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8C7364] flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#B07D54] animate-ping shrink-0" />
              <span>Auto-scrolling smoothly • Tap arrows or swipe to browse</span>
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollCarousel("left");
                }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4A373]/60 shadow-sm text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] hover:border-[#2D241E] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                title="Scroll Previous Ritual"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollCarousel("right");
                }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4A373]/60 shadow-sm text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] hover:border-[#2D241E] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                title="Scroll Next Ritual"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── FULL-WIDTH EDGE-TO-EDGE SWEEPER TRACK CONTAINER ── */}
        <div className="w-full relative z-10 px-0 sm:px-2">
          
          {/* ── CONTINUOUS CONNECTIVE HORIZONTAL TRACK LINE (Warm Gold/Amber Ribbon) ── */}
          <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A373]/40 to-transparent pointer-events-none z-0 hidden md:block" />
          <div className="absolute top-16 left-0 right-0 h-[1.5px] border-b-2 border-dashed border-[#D4A373]/50 pointer-events-none z-0 hidden md:block" />

          {/* ── EXACT PENTAGONAL / HEXAGONAL WARM SPA CARDS SWEEPER TRACK WITH HOVER PAUSE & SNAP-CENTER ── */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
            onTouchStart={() => setIsAutoScrollPaused(true)}
            onTouchEnd={() => setIsAutoScrollPaused(false)}
            className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 pt-12 sm:pt-14 px-4 sm:px-6 snap-x snap-mandatory scroll-smooth no-scrollbar relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayTherapies.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => handleBook(item.title)}
                className="w-[84vw] max-w-[320px] sm:w-[320px] shrink-0 snap-center group relative text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 select-none"
              >
                {/* ── EXACT SVG HEXAGON / PENTAGON CARD BACKGROUND ── */}
                <div className="relative w-full h-[390px] sm:h-[400px] filter drop-shadow-[0_10px_25px_rgba(45,36,30,0.06)] group-hover:drop-shadow-[0_18px_35px_rgba(212,163,115,0.22)] transition-all duration-300">
                  <svg
                    viewBox="0 0 320 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    {/* Pointed Top and Bottom Hexagon Silhouette (Warm Cream/White Fill with Warm Border) */}
                    <polygon
                      points="160,12 308,82 308,318 160,388 12,318 12,82"
                      fill="#FFFFFF"
                      stroke="#EAE0D3"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#D4A373] group-hover:fill-[#FDFBF7] transition-colors duration-300"
                    />
                  </svg>

                  {/* ── CONNECTIVE TOP MEDALLION WITH SPA ICON ── */}
                  <div className="absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2 w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-[#EAE0D3] shadow-md group-hover:border-[#D4A373] group-hover:shadow-[0_0_20px_rgba(212,163,115,0.4)] group-hover:scale-110 flex items-center justify-center transition-all duration-300 z-20">
                    {item.icon}
                  </div>

                  {/* ── Inner Content Block (Positioned inside hexagon) ── */}
                  <div className="absolute inset-0 pt-12 sm:pt-14 pb-6 sm:pb-8 px-4 sm:px-6 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 z-10">
                    
                    {/* Luxury Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans text-[#2D241E] tracking-tight group-hover:text-[#8C6A43] transition-colors leading-snug px-1 min-h-[2.4rem] sm:min-h-[2.8rem] flex items-center justify-center">
                      {item.title}
                    </h3>

                    {/* Clock Icon + Duration & INR Pricing */}
                    <div className="inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-[13px] font-sans font-bold text-[#2D241E] bg-[#FAF7F2] border border-[#E8DFD5] px-3 sm:px-3.5 py-1 rounded-full shadow-xs max-w-[92%]">
                      <Clock className="w-3.5 h-3.5 text-[#8C6A43] shrink-0 stroke-[2.5]" />
                      <span className="truncate">{item.timePrice}</span>
                    </div>

                    {/* Description */}
                    <p className="text-[11px] sm:text-[12.5px] text-[#6B5A4E] leading-relaxed font-normal px-2 pt-0.5 line-clamp-3 sm:line-clamp-4">
                      {item.desc}
                    </p>

                    {/* Interactive Subtle Book CTA */}
                    <div className="pt-1.5 sm:pt-2 flex items-center gap-1 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#8C6A43] group-hover:text-[#2D241E] group-hover:underline underline-offset-4 transition-colors">
                      <span>Click to Book</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={packageName}
      />
    </div>
  );
}
