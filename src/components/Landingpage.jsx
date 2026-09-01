import React, { useState, useEffect, useRef, Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSEO from "../hooks/useSEO";
import ImageSlider3D from "./lightswind/3d-image-slider";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "./lightswind/ThreeDScrollTrigger";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Star,
  CheckCircle2,
  Heart,
  Droplets,
  Flame,
  Shield,
  Clock,
  Compass,
  Smile,
  Layers,
  ChevronRight,
  ChevronLeft,
  Play,
  X,
  Waves,
  Flower2,
  Feather,
  Sun,
  Moon,
  Gem,
  Wind,
  Eye,
  Check,
  Coffee,
  Volume2,
  Thermometer
} from "lucide-react";
import Hero3DCanvas from "./3d/Hero3DCanvas";
import BookingModal from "./BookingModal";
import TherapyCard3D from "./TherapyCard3D";
import spaHeroImg from "../assets/spahero.png";
import spa1Img from "../assets/spa1.png";
import spa2Img from "../assets/spa2.png";
import spa3Img from "../assets/spa3.png";
import spa4Img from "../assets/spa4.png";
import spa5Img from "../assets/spa5.png";
import spa6Img from "../assets/spa6.png";
import spa7Img from "../assets/spa7.png";
import spa8Img from "../assets/spa8.png";
import thaiStretchImg from "../assets/service-thai-stretch.png";
import fourHandJacuzziScrubImg from "../assets/service-four-hand-jacuzzi-scrub.jpg";
import specialCoupleImg from "../assets/service-special-couple.png";

export default function Landingpage() {
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Signature Experience");
  const [activeCardDetail, setActiveCardDetail] = useState(null);
  const [selectedSpaceModal, setSelectedSpaceModal] = useState(null);
  const [activeSpaceFilter, setActiveSpaceFilter] = useState("all");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const categoryCarouselRef = useRef(null);
  const [isCategoryPaused, setIsCategoryPaused] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // Scroll to a specific category card index smoothly with exact center snap
  const scrollToCategory = (index, manual = false) => {
    if (manual) {
      setIsCategoryPaused(true);
    }
    const el = categoryCarouselRef.current;
    if (!el) return;
    const cards = el.querySelectorAll(".category-card-slide");
    if (cards && cards[index]) {
      const card = cards[index];
      const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
      setActiveCategoryIndex(index);
    }
  };

  const handleCategoryNext = () => {
    setIsCategoryPaused(true); // Stop auto-sliding immediately on manual click
    const nextIdx = (activeCategoryIndex + 1) % 3;
    scrollToCategory(nextIdx, true);
  };

  const handleCategoryPrev = () => {
    setIsCategoryPaused(true); // Stop auto-sliding immediately on manual click
    const prevIdx = (activeCategoryIndex - 1 + 3) % 3;
    scrollToCategory(prevIdx, true);
  };

  // Update activeCategoryIndex with center-distance algorithm during touch swipe
  const handleCategoryScroll = () => {
    const el = categoryCarouselRef.current;
    if (!el) return;
    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    const cards = el.querySelectorAll(".category-card-slide");
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(scrollCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveCategoryIndex(closestIndex);
  };

  // Auto-scroll the 3 Category cards on mobile every 3.5s only until the user manually interacts
  useEffect(() => {
    if (isCategoryPaused) return;

    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveCategoryIndex((prev) => {
          const next = (prev + 1) % 3;
          const el = categoryCarouselRef.current;
          if (el) {
            const cards = el.querySelectorAll(".category-card-slide");
            if (cards && cards[next]) {
              const card = cards[next];
              const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
              el.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
            }
          }
          return next;
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isCategoryPaused]);

  // 9 Signature Experience Cards in Section 4 with Rich 3D Base Colors & Lighting
  const experienceCards = [
    {
      num: "01",
      tag: "Ancient Thai Ritual",
      tagBg: "bg-amber-500/20 text-amber-200 border-amber-400/40",
      title: "Thai Massage",
      desc: "Traditional passive yoga stretches and rhythmic acupressure along energy pathways to restore full vitality.",
      badge: "Energy & Flexibility",
      icon: Flame,
      cardBg: "from-[#2A180E] via-[#1D1008] to-[#120904]",
      borderColor: "border-[#C59B6D]/50 hover:border-[#F5DEB3]",
      glowColor: "rgba(212, 163, 115, 0.45)",
      badgeColor: "text-amber-200",
      haloGlow: "bg-amber-500/35",
      accentBorder: "from-transparent via-[#F5DEB3] to-transparent",
      iconColor: "text-amber-300",
      accentHex: "#D4A373",
    },
    {
      num: "02",
      tag: "Deep Tension Relief",
      tagBg: "bg-emerald-500/20 text-emerald-200 border-emerald-400/40",
      title: "Deep Tissue Massage",
      desc: "Targeted slow strokes and firm pressure on deeper muscle layers to alleviate chronic soreness and knots.",
      badge: "Chronic Pain Relief",
      icon: Shield,
      cardBg: "from-[#0A2618] via-[#061B10] to-[#03100A]",
      borderColor: "border-emerald-600/50 hover:border-emerald-300",
      glowColor: "rgba(82, 183, 136, 0.45)",
      badgeColor: "text-emerald-200",
      haloGlow: "bg-emerald-500/35",
      accentBorder: "from-transparent via-emerald-300 to-transparent",
      iconColor: "text-emerald-300",
      accentHex: "#52B788",
    },
    {
      num: "03",
      tag: "Private Romantic Suite",
      tagBg: "bg-rose-500/20 text-rose-200 border-rose-400/40",
      title: "Couples Massage",
      desc: "Side-by-side restorative massage rituals in a candlelit luxury suite accompanied by aromatic botanicals.",
      badge: "Private Couples Sanctuary",
      icon: Heart,
      cardBg: "from-[#2C0D18] via-[#1D0810] to-[#110309]",
      borderColor: "border-rose-700/50 hover:border-rose-300",
      glowColor: "rgba(244, 63, 94, 0.4)",
      badgeColor: "text-rose-200",
      haloGlow: "bg-rose-500/35",
      accentBorder: "from-transparent via-rose-300 to-transparent",
      iconColor: "text-rose-300",
      accentHex: "#FB7185",
    },
    {
      num: "04",
      tag: "Holistic Healing",
      tagBg: "bg-teal-500/20 text-teal-200 border-teal-400/40",
      title: "Balinese Massage",
      desc: "Gentle palm pressure, skin rolling, and floral essential oils boosting circulation and relieving tension.",
      badge: "Deep Circulation",
      icon: Flower2,
      cardBg: "from-[#082627] via-[#051A1B] to-[#021011]",
      borderColor: "border-teal-600/50 hover:border-teal-300",
      glowColor: "rgba(45, 212, 191, 0.4)",
      badgeColor: "text-teal-200",
      haloGlow: "bg-teal-500/35",
      accentBorder: "from-transparent via-teal-300 to-transparent",
      iconColor: "text-teal-300",
      accentHex: "#2DD4BF",
    },
    {
      num: "05",
      tag: "Dual Therapist",
      tagBg: "bg-amber-400/20 text-amber-100 border-amber-300/40",
      title: "Four Hand Massage",
      desc: "Synchronized dual-therapist choreography creating an immersive wave of deep full-body relaxation.",
      badge: "2 Master Therapists",
      icon: Sparkles,
      cardBg: "from-[#2E1D0B] via-[#1F1306] to-[#130B03]",
      borderColor: "border-amber-600/50 hover:border-amber-300",
      glowColor: "rgba(245, 158, 11, 0.45)",
      badgeColor: "text-amber-200",
      haloGlow: "bg-amber-400/35",
      accentBorder: "from-transparent via-amber-300 to-transparent",
      iconColor: "text-amber-300",
      accentHex: "#F59E0B",
    },
    {
      num: "06",
      tag: "Royal Hydro Luxury",
      tagBg: "bg-sky-500/20 text-sky-200 border-sky-400/40",
      title: "Jacuzzi Milk & Honey Bath",
      desc: "Whirlpool hydro-massage soak infused with raw golden honey, nourishing botanicals, and warm mineral milk.",
      badge: "Private Jacuzzi Hydro Soak",
      icon: Gem,
      cardBg: "from-[#082239] via-[#041627] to-[#020D18]",
      borderColor: "border-sky-600/50 hover:border-sky-300",
      glowColor: "rgba(56, 189, 248, 0.4)",
      badgeColor: "text-sky-200",
      haloGlow: "bg-sky-500/35",
      accentBorder: "from-transparent via-sky-300 to-transparent",
      iconColor: "text-sky-300",
      accentHex: "#38BDF8",
    },
    {
      num: "07",
      tag: "Volcanic Warmth",
      tagBg: "bg-orange-500/20 text-orange-200 border-orange-400/40",
      title: "Hot Stone Massage",
      desc: "Heated volcanic basalt stones placed along energy points to melt away stiffness and restore harmony.",
      badge: "Basalt Thermal Stones",
      icon: Flame,
      cardBg: "from-[#301407] via-[#200B03] to-[#120501]",
      borderColor: "border-orange-600/50 hover:border-orange-300",
      glowColor: "rgba(249, 115, 22, 0.45)",
      badgeColor: "text-orange-200",
      haloGlow: "bg-orange-500/35",
      accentBorder: "from-transparent via-orange-300 to-transparent",
      iconColor: "text-orange-300",
      accentHex: "#F97316",
    },
    {
      num: "08",
      tag: "Botanical Essence",
      tagBg: "bg-purple-500/20 text-purple-200 border-purple-400/40",
      title: "Aromatherapy Massage",
      desc: "Custom blends of pure organic essential oils curated to soothe the nervous system and calm the mind.",
      badge: "100% Organic Oils",
      icon: Droplets,
      cardBg: "from-[#1E1130] via-[#130A20] to-[#0B0513]",
      borderColor: "border-purple-600/50 hover:border-purple-300",
      glowColor: "rgba(168, 85, 247, 0.4)",
      badgeColor: "text-purple-200",
      haloGlow: "bg-purple-500/35",
      accentBorder: "from-transparent via-purple-300 to-transparent",
      iconColor: "text-purple-300",
      accentHex: "#A855F7",
    },
    {
      num: "09",
      tag: "Herbal Poultice",
      tagBg: "bg-amber-600/20 text-amber-200 border-amber-500/40",
      title: "Potli Massage",
      desc: "Warm muslin pouches packed with therapeutic herbs rhythmically stamped to relieve joint stiffness.",
      badge: "Warm Herbal Poultice",
      icon: Layers,
      cardBg: "from-[#2C1A0E] via-[#1D1007] to-[#110803]",
      borderColor: "border-amber-700/50 hover:border-amber-300",
      glowColor: "rgba(217, 119, 6, 0.45)",
      badgeColor: "text-amber-200",
      haloGlow: "bg-amber-600/35",
      accentBorder: "from-transparent via-amber-300 to-transparent",
      iconColor: "text-amber-300",
      accentHex: "#D97706",
    },
  ];

  const [activeExpCardIndex, setActiveExpCardIndex] = useState(0);
  const [isExpCardPaused, setIsExpCardPaused] = useState(false);

  // Auto-advance the single experience card on mobile view
  useEffect(() => {
    if (isExpCardPaused) return;
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveExpCardIndex((prev) => (prev + 1) % experienceCards.length);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [isExpCardPaused]);

  useSEO({
    title: "NEW SARA SPA — A Sanctuary for Your Body & Mind | Luxury Wellness",
    description: "Discover Sara Spa: a peaceful sanctuary offering signature massage therapies, private Jacuzzi suites, and holistic body rejuvenation in a warm, serene ambience.",
    canonical: "/"
  });

  const handleOpenBooking = (serviceName = "Signature Experience") => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 18, y: -y * 18 });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] selection:bg-[#D4A373] selection:text-white">

      {/* ─────────────────────────────────────────────────────────────────────────
          HERO SECTION — Fresh Radiant Warm Sunset Glow & Compact Luxury Layout
      ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-[83vh] lg:min-h-[90vh] w-full flex items-center overflow-hidden pt-22 sm:pt-32 md:pt-36 lg:pt-28 pb-12 sm:pb-16 bg-[#FFFFFF] text-[#2D241E]"
      >
        {/* Fresh Radiant Ambient Sunburst Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Base Pure Crisp Canvas */}
          <div className="absolute inset-0 bg-[#FFFFFF]" />

          {/* Golden Sun Radiance Flare behind center & right */}
          <div className="absolute top-1/2 right-0 lg:right-16 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#F59E0B]/25 via-[#D4A373]/15 to-transparent rounded-full blur-[90px]" />

          {/* Warm Champagne Horizon Glow across bottom */}
          <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-[#FDF6ED]/80 via-[#FFF9F2]/40 to-transparent" />

          {/* Soft Silk Peach Light Flare on Left */}
          <div className="absolute top-1/4 left-4 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#FED7AA]/35 via-[#FDE68A]/20 to-transparent rounded-full blur-[100px]" />
        </div>

        {/* 3D Three.js Floating Ambient Particles */}
        <Suspense fallback={null}>
          <Hero3DCanvas />
        </Suspense>

        {/* ── Main Two-Column Grid (Tightly Balanced Proportions) ── */}
        <div className="relative z-[15] max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-3 sm:pt-4">
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">

            {/* ── LEFT: Text Content ── */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4rem] font-serif-luxury font-bold tracking-tight text-[#2D241E] leading-[1.12]">
                Where Beauty Meets <br className="hidden sm:block" />
                <span className="italic font-normal bg-gradient-to-r from-[#B07D54] via-[#D4A373] to-[#8C6A43] bg-clip-text text-transparent">Relaxation</span>
              </h1>

              {/* Description */}
              <p className="max-w-md lg:max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-[#5F4E42] font-sans font-normal leading-relaxed">
                Step away from the everyday and discover a peaceful spa experience designed for relaxation, rejuvenation and complete wellness.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3.5 sm:gap-4 pt-1">
                <button
                  onClick={() => handleOpenBooking("Signature Experience")}
                  className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#2D241E]/15 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E3BA8F]" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-3.5 rounded-full bg-white/90 hover:bg-[#FAF7F2] text-[#2D241E] border border-[#E5D6C4] hover:border-[#B07D54] font-sans font-semibold text-xs uppercase tracking-[0.2em] shadow-xs hover:scale-105 transition-all duration-300 text-center backdrop-blur-md"
                >
                  EXPLORE SERVICES
                </Link>
              </div>
            </div>

            {/* ── RIGHT: 3D Luxury Fluid Morphing Visual with Interactive Parallax ── */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end order-1 lg:order-2">
              <div
                className="hero-visual-container"
                style={{
                  transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transition: 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {/* Radiating Fluid Aura Waves */}
                <div className="blob-aura-wave-1" />
                <div className="blob-aura-wave-2" />

                {/* Floating Rating Badge */}
                <div className="floating-spa-badge floating-spa-badge-2 hidden sm:flex items-center gap-2.5 bg-white/95 border border-[#E8DFD5] text-[#2D241E] backdrop-blur-md shadow-lg">
                  <div className="w-6 h-6 rounded-full bg-[#E3BA8F]/30 flex items-center justify-center text-[#B07D54]">
                    <Star className="w-3.5 h-3.5 fill-[#B07D54]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2D241E] leading-none">4.6 ★ Rating</div>
                  </div>
                </div>

                {/* 3D Dynamic Liquid Morphing Image Container */}
                <div className="hero-image-blob">
                  <img
                    src={spaHeroImg}
                    alt="Sara Spa Authentic Ayurvedic Therapy"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="hero-image-overlay" />
                  <div className="blob-sheen" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 3: INTRO / BRAND STORY & PHILOSOPHY (Full Immersive Background)
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="story" className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden py-20 md:py-28">
        {/* Full-Bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={spa1Img}
            alt="Sara Spa Couples & Holistic Therapy"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-[center_20%] sm:object-[72%_center] filter brightness-[0.96] contrast-[1.04]"
          />
          {/* Subtle Left-Only Gradient for pristine text readability while keeping image vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E1712]/95 via-[#1E1712]/80 md:via-[#1E1712]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1712]/85 via-transparent to-[#1E1712]/40" />

          {/* Subtle Warm Amber Glow */}
          <div className="absolute top-1/4 left-12 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-[130px] pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Philosophy & Story Content */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-6 max-w-xl">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif-luxury font-bold text-[#FAF7F2] leading-[1.12]">
                Your Time. Your Wellness. <br />
                <span className="italic text-[#E3BA8F] font-normal">Your Escape.</span>
              </h2>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#F5ECE1] font-light leading-relaxed">
                Relax, refresh and rejuvenate at Sara Spa with soothing treatments, natural care and a peaceful atmosphere designed for your complete wellness.
              </p>
              {/* Description */}
              <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed">
                From relaxing massages to personalized spa treatments, we help you feel refreshed, relaxed, and renewed in a peaceful environment.
              </p>

              {/* Highlights Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF7F2] bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                  <span>Master Certified Therapists</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF7F2] bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                  <Droplets className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                  <span>100% Organic Essential Oils</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF7F2] bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                  <span>Couples & VIP Private Suites</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#FAF7F2] bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-[#E3BA8F] shrink-0" />
                  <span>Customized Session Durations</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => handleOpenBooking("Couples Rejuvenation")}
                  className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#1E1712]/40 transition-all duration-300 transform hover:scale-[1.03]"
                >
                  Book Your Escape
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold transition-all backdrop-blur-sm group"
                >
                  <span>Explore Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3BA8F] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Clear Right Column so the couples & therapists are completely visible */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" />

          </div>

          {/* Bottom Floating Signature Couples Badge — Cleanly positioned at bottom right */}
          <div className="pt-10 flex justify-end">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1E1712]/85 backdrop-blur-xl border border-[#D4A373]/30 shadow-2xl shadow-black/50 max-w-md w-full sm:w-auto flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#D4A373]/20 border border-[#D4A373]/40 flex items-center justify-center text-[#E3BA8F] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-sm font-serif-luxury font-bold text-[#FAF7F2]">
                    Signature Couples Rituals
                  </h4>
                  <div className="flex items-center gap-0.5 text-[#E3BA8F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#E3BA8F]" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#D4C3B3] leading-snug">
                  Side-by-side synchronized suites with custom aromatherapy & hot stone therapy.
                </p>
                <div className="text-[10px] text-[#E3BA8F] font-semibold flex items-center gap-2 pt-0.5">
                  <span>4.6 ★ Guest Rating</span>
                  <span className="text-white/40">•</span>
                  <span className="text-[#B5A18F]">Top-Rated Luxury Spa</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          4. THE SARA DIFFERENCE — 2-Column Split: Left 3D Carousel & Right Heading
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#FAF7F2] text-[#2D241E] relative overflow-hidden border-t border-[#EAE0D3]">
        {/* Soft Ambient Radiance in Background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[550px] bg-[#D4A373]/12 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 xl:gap-20 items-center">

            {/* LEFT COLUMN: Single-Card Showcase on Mobile & 3D Cylindrical Slider on Desktop */}
            <div className="order-2 lg:order-1 lg:col-span-7 xl:col-span-7 w-full flex flex-col items-center justify-center relative -mt-2 sm:mt-0">
              
              {/* MOBILE VIEW (< md:): Strictly 1 Card at a Time */}
              <div className="block md:hidden w-full max-w-[340px] mx-auto">
                {/* Mobile Header & Controls */}
                <div className="flex items-center justify-between gap-3 mb-3 px-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6A43] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B07D54] animate-ping shrink-0" />
                    <span>Therapy {experienceCards[activeExpCardIndex].num} of 09</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsExpCardPaused(true);
                        setActiveExpCardIndex((prev) => (prev - 1 + experienceCards.length) % experienceCards.length);
                      }}
                      className="w-8 h-8 rounded-full bg-white border border-[#D4A373]/60 shadow-xs text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                      aria-label="Previous Therapy"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsExpCardPaused(true);
                        setActiveExpCardIndex((prev) => (prev + 1) % experienceCards.length);
                      }}
                      className="w-8 h-8 rounded-full bg-white border border-[#D4A373]/60 shadow-xs text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                      aria-label="Next Therapy"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Single Active Therapy Card with Smooth Transitions */}
                <AnimatePresence mode="wait">
                  {(() => {
                    const c = experienceCards[activeExpCardIndex];
                    const IconComponent = c.icon || Sparkles;
                    return (
                      <motion.div
                        key={c.num}
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setActiveCardDetail(c)}
                        style={{
                          boxShadow: `0 20px 45px -10px rgba(0,0,0,0.65), 0 0 25px -5px ${c.glowColor || 'rgba(212,163,115,0.4)'}, inset 0 1.5px 1.5px 0 rgba(255,255,255,0.35), inset 0 -2px 5px 0 rgba(0,0,0,0.55)`,
                        }}
                        className={`w-full rounded-[28px] bg-gradient-to-b ${c.cardBg} border ${c.borderColor} p-6 flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-all duration-300 min-h-[420px] backdrop-blur-md`}
                      >
                        {/* 3D Glass Sheen Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/40 pointer-events-none rounded-[28px]" />

                        {/* Top 3D Luminous Accent Border */}
                        <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${c.accentBorder} opacity-80`} />

                        {/* Watermark Numeral */}
                        <span className="absolute top-2 right-4 text-4xl font-serif-luxury font-bold text-white/15 select-none pointer-events-none drop-shadow-sm">
                          {c.num}
                        </span>

                        {/* Top Tag & Header */}
                        <div className="space-y-3 relative z-10">
                          <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9.5px] font-bold tracking-[0.2em] uppercase border ${c.tagBg} shadow-sm backdrop-blur-sm`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                              {c.tag}
                            </span>
                          </div>

                          <h3 className="text-2xl font-serif-luxury font-bold text-white leading-snug drop-shadow-md">
                            {c.title}
                          </h3>

                          <p className="text-xs text-white/80 font-light leading-relaxed">
                            {c.desc}
                          </p>
                        </div>

                        {/* Middle Lucide Icon Luxury Medallion Emblem */}
                        <div className="my-4 relative flex items-center justify-center">
                          <div className="relative w-22 h-22 rounded-full bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent border border-white/25 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.6)] backdrop-blur-md">
                            <div className={`absolute inset-0 ${c.haloGlow} rounded-full blur-xl opacity-50 pointer-events-none`} />
                            <IconComponent className={`w-10 h-10 ${c.iconColor} relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]`} />
                          </div>
                        </div>

                        {/* Bottom Feature Badge & Action */}
                        <div className="pt-3 border-t border-white/15 flex items-center justify-between relative z-10 text-[11px]">
                          <div className={`flex items-center gap-1.5 font-semibold ${c.badgeColor}`}>
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate max-w-[150px]">{c.badge}</span>
                          </div>
                          <span className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                            Details <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>

                {/* Mobile Pagination Dot Indicators */}
                <div className="flex items-center justify-center gap-1.5 pt-4">
                  {experienceCards.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setIsExpCardPaused(true);
                        setActiveExpCardIndex(idx);
                      }}
                      aria-label={`Go to Therapy ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeExpCardIndex === idx ? "w-6 bg-[#B07D54]" : "w-1.5 bg-[#D4A373]/40"}`}
                    />
                  ))}
                </div>
              </div>

              {/* DESKTOP VIEW (≥ md:): Rich 3D Cylindrical Experience Card Slider with Base Pedestal */}
              <div className="hidden md:flex w-full flex-col items-center justify-center relative min-h-[460px] md:min-h-[540px] overflow-hidden" style={{ touchAction: 'pan-y' }}>
                <ImageSlider3D
                  duration={48}
                  cardWidth="17.5em"
                  cardAspectRatio="7.5/10"
                  perspective="42em"
                  withMask={true}
                  pauseOnHover={true}
                  onCardClick={(c) => setActiveCardDetail(c)}
                  items={experienceCards}
                  renderItem={(c) => {
                    const IconComponent = c.icon || Sparkles;
                    return (
                      <div
                        onClick={() => setActiveCardDetail(c)}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          boxShadow: `0 25px 50px -12px rgba(0,0,0,0.7), 0 0 25px -5px ${c.glowColor || 'rgba(212,163,115,0.4)'}, inset 0 1.5px 1.5px 0 rgba(255,255,255,0.35), inset 0 -2px 5px 0 rgba(0,0,0,0.55)`,
                        }}
                        className={`w-full h-full rounded-[28px] bg-gradient-to-b ${c.cardBg} border ${c.borderColor} p-6 flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-all duration-500 hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md`}
                      >
                        {/* 3D Glass Sheen Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/40 pointer-events-none rounded-[28px]" />

                        {/* Top 3D Luminous Accent Border */}
                        <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${c.accentBorder} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                        {/* Watermark Numeral */}
                        <span className="absolute top-2 right-4 text-4xl font-serif-luxury font-bold text-white/15 group-hover:text-white/30 transition-colors select-none pointer-events-none drop-shadow-sm">
                          {c.num}
                        </span>

                        {/* Top Tag & Header */}
                        <div className="space-y-3 relative z-10">
                          <div className="flex items-center justify-between">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase border ${c.tagBg} shadow-sm backdrop-blur-sm`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                              {c.tag}
                            </span>
                          </div>

                          <h3 className="text-xl font-serif-luxury font-bold text-white leading-snug group-hover:text-white transition-colors duration-300 drop-shadow-md">
                            {c.title}
                          </h3>

                          <p className="text-xs text-white/75 font-light leading-relaxed line-clamp-3">
                            {c.desc}
                          </p>
                        </div>

                        {/* Middle Lucide Icon Luxury Medallion Emblem */}
                        <div className="my-2 relative flex items-center justify-center">
                          <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent border border-white/25 group-hover:border-white/50 flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 backdrop-blur-md">
                            {/* Soft Ambient Glow Halo */}
                            <div className={`absolute inset-0 ${c.haloGlow} rounded-full blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                            <IconComponent className={`w-10 h-10 ${c.iconColor} group-hover:text-white transition-colors relative z-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]`} />
                          </div>
                        </div>

                        {/* Bottom Feature Badge & Action */}
                        <div className="pt-3 border-t border-white/15 flex items-center justify-between relative z-10 text-[11px]">
                          <div className={`flex items-center gap-1.5 font-semibold ${c.badgeColor}`}>
                            <Sparkles className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate max-w-[120px]">{c.badge}</span>
                          </div>
                          <span className="px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm group-hover:border-white/40">
                            Details <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    );
                  }}
                />

                {/* 3D Realistic Ground Pedestal Shadow Base */}
                <div className="w-[85%] max-w-[500px] h-6 -mt-3 pointer-events-none relative flex items-center justify-center">
                  <div className="w-full h-full bg-[#2D241E]/25 rounded-full blur-lg" />
                  <div className="absolute w-2/3 h-2.5 bg-[#B07D54]/20 rounded-full blur-md" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Heading, Subtitle, Highlights & Action */}
            <div className="order-1 lg:order-2 lg:col-span-5 xl:col-span-5 space-y-6 lg:pl-6 xl:pl-10 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E] leading-[1.18] space-y-1">
                <span className="block">Signature Therapies.</span>
                <span className="block skin-gradient-text italic font-normal">Customized for You.</span>
              </h2>

              <p className="text-base text-[#6B5A4E] leading-relaxed font-light">
                Discover our premier therapies — from traditional Thai acupressure and tension-melting Deep Tissue to romantic couple sanctuaries and royal Jacuzzi hydro soaks. Every session is personalized by certified master therapists using pure organic botanical oils.
              </p>

              {/* Luxury Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#EFE6DC] shadow-xs flex items-center gap-3.5 hover:border-[#D4A373] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#FDF6EE] border border-[#E3BA8F]/50 text-[#8C6A43] flex items-center justify-center shrink-0 shadow-xs">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#2D241E]">Master Therapists</h4>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-[#F8FAF9] border border-[#DCE8E1] shadow-xs flex items-center gap-3.5 hover:border-[#52B788] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF7F0] border border-[#A7E8CD]/50 text-[#1B4332] flex items-center justify-center shrink-0 shadow-xs">
                    <Gem className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#14261C]">Private Luxury Suites</h4>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleOpenBooking()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2D241E] via-[#3A2E26] to-[#2D241E] hover:from-[#4A3B31] hover:to-[#3A2E26] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>BOOK A TREATMENT</span>
                  <ArrowRight className="w-4 h-4 text-[#E3BA8F]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Smooth Luxury Modal Popup for Clicked 3D Experience Card (Dynamic Rich 3D Theme) */}
        <AnimatePresence>
          {activeCardDetail && (() => {
            const ModalIcon = activeCardDetail.icon || Sparkles;

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => setActiveCardDetail(null)}
                  className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    boxShadow: `0 30px 70px -15px rgba(0,0,0,0.85), 0 0 35px -5px ${activeCardDetail.glowColor || 'rgba(212,163,115,0.4)'}, inset 0 1.5px 1.5px 0 rgba(255,255,255,0.25)`,
                  }}
                  className={`relative w-full max-w-2xl rounded-[32px] overflow-hidden z-10 text-white border ${activeCardDetail.borderColor} bg-gradient-to-b ${activeCardDetail.cardBg}`}
                >
                  {/* Top Accent Line */}
                  <div
                    className={`h-1.5 bg-gradient-to-r ${activeCardDetail.accentBorder}`}
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveCardDetail(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-20 hover:scale-105 active:scale-95 border border-white/15"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      {/* Glowing Lucide Icon Emblem */}
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-white/15 via-white/[0.05] to-transparent border-2 shrink-0 shadow-2xl shadow-black/50 flex items-center justify-center relative backdrop-blur-md ${activeCardDetail.borderColor}`}
                      >
                        <div
                          className={`absolute inset-0 rounded-3xl blur-lg pointer-events-none ${activeCardDetail.haloGlow}`}
                        />
                        <ModalIcon
                          className={`w-12 h-12 relative z-10 drop-shadow-md ${activeCardDetail.iconColor}`}
                        />
                      </div>

                      <div className="space-y-2 text-center sm:text-left flex-1">
                        <span
                          className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border ${activeCardDetail.tagBg}`}
                        >
                          {activeCardDetail.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white drop-shadow-md">
                          {activeCardDetail.title}
                        </h3>
                        <div
                          className={`flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold ${activeCardDetail.badgeColor}`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{activeCardDetail.badge}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
                      {activeCardDetail.desc}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Duration</div>
                        <div className="text-sm font-semibold text-white mt-0.5">60–90 Min</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Therapist</div>
                        <div
                          className={`text-sm font-semibold mt-0.5 ${activeCardDetail.badgeColor}`}
                        >
                          Master Certified
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Suite</div>
                        <div className="text-sm font-semibold text-white mt-0.5">Private Suite</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={() => {
                          const service = activeCardDetail.title;
                          setActiveCardDetail(null);
                          handleOpenBooking(service);
                        }}
                        className="flex-1 py-3.5 px-6 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] shadow-[0_10px_30px_rgba(212,163,115,0.4)]"
                      >
                        <span>Reserve This Ritual</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveCardDetail(null)}
                        className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white/80 hover:text-white font-medium text-xs tracking-wider transition-all cursor-pointer border border-white/10"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>
      </section>
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 bg-[#2D241E] text-white">
        {/* Full-width Jacuzzi & Treatment Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=2000&q=85"
            alt="Sara Spa Signature Jacuzzi & Luxury Care"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D241E]/90 via-[#2D241E]/60 to-[#2D241E]/90" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-white leading-tight">
            Your Relaxation, <span className="italic text-[#E3BA8F]">Elevated.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#EAE0D3] leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            Enjoy soothing massages, body care, and Jacuzzi relaxation, thoughtfully designed to help you relax, refresh, and feel your best.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleOpenBooking("Signature Jacuzzi Experience")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E3BA8F] hover:bg-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Discover Signature Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 5: 3 MAIN SPA CATEGORIES — Direct Category Navigation
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-12 sm:py-16 md:py-18 bg-[#F5EFE6] border-t border-[#EAE0D3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A43] font-semibold">
                Curated Therapies
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-bold text-[#2D241E] mt-1">
                Discover Your Perfect Treatment
              </h2>
            </div>
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8C6A43] hover:text-[#2D241E] transition-colors cursor-pointer group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Swiper Navigation Header / Controls */}
          <div className="flex md:hidden items-center justify-between gap-3 mb-4 px-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6A43] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B07D54] animate-ping shrink-0" />
              <span>Category {activeCategoryIndex + 1} of 3</span>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryPrev();
                }}
                className="w-9 h-9 rounded-full bg-white border border-[#D4A373]/60 shadow-xs text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                aria-label="Previous Category"
                title="Previous Category"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryNext();
                }}
                className="w-9 h-9 rounded-full bg-white border border-[#D4A373]/60 shadow-xs text-[#2D241E] hover:bg-[#2D241E] hover:text-[#E3BA8F] transition-all flex items-center justify-center cursor-pointer active:scale-90"
                aria-label="Next Category"
                title="Next Category"
              >
                <ChevronRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* 3 Main Category Showcase Cards — Compact Height on Desktop & Swiper on Mobile */}
          <div
            ref={categoryCarouselRef}
            onScroll={handleCategoryScroll}
            onMouseEnter={() => setIsCategoryPaused(true)}
            onMouseLeave={() => setIsCategoryPaused(false)}
            onTouchStart={() => setIsCategoryPaused(true)}
            onTouchEnd={() => setIsCategoryPaused(false)}
            className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 overflow-x-auto pb-4 md:pb-0 pt-1 snap-x snap-mandatory scrollbar-none items-stretch px-4 sm:px-0 select-none scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >

            {/* 1. DRY MASSAGES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => navigate("/services?category=dry")}
              className="category-card-slide w-[88vw] max-w-[340px] md:w-auto shrink-0 snap-center group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-[#EAE0D3] shadow-[0_10px_30px_rgba(45,36,30,0.06)] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-44 sm:h-48 md:h-48 lg:h-52 w-full overflow-hidden bg-[#2D241E]">
                  <img
                    src={thaiStretchImg}
                    alt="Dry Massages"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-0.5 rounded-full bg-[#2D241E]/90 backdrop-blur-md text-[#E3BA8F] border border-[#E3BA8F]/30 text-[9.5px] font-bold uppercase tracking-widest">
                      Oil-Free & Yoga Stretch
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E3BA8F]">
                      4 Signature Therapies
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold leading-tight mt-0.5 text-white">
                      DRY MASSAGES
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-5 space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#8C6A43] pb-2 sm:pb-2.5 border-b border-[#EAE0D3]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      45 – 90 Mins
                    </span>
                    <span className="text-[#2D241E] font-extrabold">
                      From ₹2,500
                    </span>
                  </div>

                  <p className="text-xs text-[#6B5A4E] leading-relaxed font-light line-clamp-2">
                    Deep Indian Champi Head Massage, Acupressure Foot Reflexology, Spine Release Back Massage, and assisted Thai Yoga Stretch.
                  </p>

                  <div className="space-y-1 pt-0.5">
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Head Massages (Indian Champ)</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Foot Reflexology & Acupressure</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Thai Dry Assisted Stretch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-5 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-[#FAF4ED] group-hover:bg-[#2D241E] text-[#2D241E] group-hover:text-white border border-[#E8DFD5] group-hover:border-[#2D241E] font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Dry Massages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B07D54] group-hover:text-[#E3BA8F] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* 2. SIGNATURE MASSAGE (Featured / Most Popular) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => navigate("/services?category=signature")}
              className="category-card-slide w-[88vw] max-w-[340px] md:w-auto shrink-0 snap-center group bg-[#1F1712] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-[#D4A373]/60 shadow-[0_16px_40px_rgba(45,36,30,0.25)] hover:shadow-[0_20px_50px_rgba(212,163,115,0.4)] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 md:-translate-y-2"
            >
              <div>
                <div className="relative h-44 sm:h-48 md:h-48 lg:h-52 w-full overflow-hidden bg-[#2D241E]">
                  <img
                    src={fourHandJacuzziScrubImg}
                    alt="Signature Massage"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1712] via-black/30 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-0.5 rounded-full bg-[#D4A373] text-[#2D241E] text-[9.5px] font-extrabold uppercase tracking-widest shadow-md">
                      ★ Combos & Bangkok Jacuzzi
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E3BA8F]">
                      6 Elite Combinations
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold leading-tight mt-0.5 text-white">
                      SIGNATURE MASSAGE
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-5 space-y-2.5 sm:space-y-3 text-white">
                  <div className="flex items-center justify-between text-xs font-bold text-[#E3BA8F] pb-2 sm:pb-2.5 border-b border-white/10">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      60 – 120 Mins
                    </span>
                    <span className="text-white font-extrabold">
                      From ₹7,000
                    </span>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed font-light line-clamp-2">
                    Synchronized 2-Therapist Four-Hand Massage, Turkish Steam Chamber Hammam Scrub, and Private Bangkok Jacuzzi Hydrotherapy.
                  </p>

                  <div className="space-y-1 pt-0.5">
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/90 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E3BA8F] shrink-0" />
                      <span>Four Hand Massage + Jacuzzi + Scrub</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/90 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E3BA8F] shrink-0" />
                      <span>Turkish Hammam Steam + Scrub</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-white/90 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E3BA8F] shrink-0" />
                      <span>Thai Massage + Bangkok Jacuzzi</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-5 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-[0.18em] shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Signature Massages</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2D241E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* 3. REJUVENATE AND RELAXING */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => navigate("/services?category=rejuvenate")}
              className="category-card-slide w-[88vw] max-w-[340px] md:w-auto shrink-0 snap-center group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-[#EAE0D3] shadow-[0_10px_30px_rgba(45,36,30,0.06)] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-44 sm:h-48 md:h-48 lg:h-52 w-full overflow-hidden bg-[#2D241E]">
                  <img
                    src={specialCoupleImg}
                    alt="Rejuvenate and Relaxing"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-0.5 rounded-full bg-[#2D241E]/90 backdrop-blur-md text-[#E3BA8F] border border-[#E3BA8F]/30 text-[9.5px] font-bold uppercase tracking-widest">
                      Botanical Scrubs & Sanctuary
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E3BA8F]">
                      11 Luxury Rituals
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold leading-tight mt-0.5 text-white">
                      REJUVENATE & RELAXING
                    </h3>
                  </div>
                </div>

                <div className="p-4 sm:p-5 md:p-5 space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-[#8C6A43] pb-2 sm:pb-2.5 border-b border-[#EAE0D3]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      60 – 120 Mins
                    </span>
                    <span className="text-[#2D241E] font-extrabold">
                      From ₹3,000
                    </span>
                  </div>

                  <p className="text-xs text-[#6B5A4E] leading-relaxed font-light line-clamp-2">
                    Pure Sandalwood Scrub & Polish, Hawaiian Lomi Lomi wave massage, romantic Special Couple suites, and Volcanic Mud Wraps.
                  </p>

                  <div className="space-y-1 pt-0.5">
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Sandalwood Scrub + Body Massage</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Special Couple Treatment + Jacuzzi</span>
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold text-[#2D241E] flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>Hawaiian Lomi Lomi & Swedish</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-5 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 sm:py-3 rounded-full bg-[#FAF4ED] group-hover:bg-[#2D241E] text-[#2D241E] group-hover:text-white border border-[#E8DFD5] group-hover:border-[#2D241E] font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Rejuvenate Rituals</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B07D54] group-hover:text-[#E3BA8F] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>

          {/* Swiper Pagination Indicator Bullets on Mobile */}
          <div className="flex md:hidden items-center justify-center gap-2 pt-5 pb-1">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToCategory(idx)}
                aria-label={`Go to Category ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${activeCategoryIndex === idx
                    ? "w-8 bg-[#B07D54] shadow-xs"
                    : "w-2.5 bg-[#D4A373]/40 hover:bg-[#D4A373]/70"
                  }`}
              />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <button
              onClick={() => navigate("/services")}
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E5D6C4] text-[#2D241E] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xs hover:border-[#B07D54] hover:shadow-md cursor-pointer"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 text-[#B07D54]" />
            </button>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 6: SIGNATURE EXPERIENCE — Full-Width Visual Section
      ───────────────────────────────────────────────────────────────────────── */}



      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 7: SPA EXPERIENCE / SANCTUARY SPACES — Interactive 3D Showcase
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="facilities" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
        {/* Soft Ambient Radiance in Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#D4A373]/12 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#52B788]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3BA8F]/15 border border-[#D4A373]/30 text-[#8C6A43] text-xs font-bold uppercase tracking-[0.2em] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B07D54]" />
              <span>Sanctuary Spaces & Suites</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E] leading-tight">
              Designed for Complete Relaxation
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto font-light leading-relaxed">
              Every space at Sara Spa is thoughtfully designed to create a calm and comfortable environment from the moment you arrive. Click any suite to explore virtual room details.
            </p>

            {/* Interactive Space Filter Tabs */}
          
          </div>

          {/* Interactive 3D Sanctuary Cards Grid */}
          {(() => {
            const spaSanctuarySpaces = [
              {
                id: "suite-01",
                category: "suites",
                tag: "Suite 01",
                title: "Luxury Treatment Rooms",
                desc: "Private temperature-controlled suites with organic aroma diffusers & teakwood beds.",
                longDesc: "Individually customized private sanctuaries featuring bespoke soundproofing, dimmable amber mood lighting, handcrafted Indonesian teakwood massage tables, and therapeutic ultrasonic aroma diffusers emitting pure botanical essences.",
                image: spa2Img,
                colSpan: "md:col-span-8",
                minHeight: "min-h-[360px] md:min-h-[440px]",
                previewPills: ["Teakwood Beds", "Aroma Diffusers", "Climate Controlled"],
                specs: {
                  climate: "Individually Controlled (22°C–25°C)",
                  aroma: "Wild Mountain Lavender & Royal Sandalwood",
                  sound: "432Hz Solfeggio Healing Frequencies",
                  capacity: "Private Single & Dual Suites",
                },
                amenities: [
                  "Handcrafted Indonesian Teakwood Massage Beds",
                  "Private Ensuite Rainfall Shower",
                  "Ultrasonic Medical-Grade Aroma Diffuser",
                  "Egyptian 800-Thread Organic Cotton Linens",
                  "Custom Thermal Heated Mattress Pads",
                ],
                popularTreatments: ["Thai Massage", "Deep Tissue Therapy", "Balinese Massage"],
              },
              {
                id: "lounge",
                category: "lounges",
                tag: "Lounge",
                title: "Private Relaxation Spaces",
                desc: "Candlelit head & facial serenity with organic flower teas.",
                longDesc: "A tranquil post-treatment sanctuary designed for gentle awakening. Sink into oversized zero-gravity daybeds while sipping slow-brewed organic chrysanthemum and jasmine flower teas in a soothing, candlelit atmosphere.",
                image: spa3Img,
                colSpan: "md:col-span-4",
                minHeight: "min-h-[280px] md:min-h-[440px]",
                previewPills: ["Zero-Gravity Beds", "Artisanal Teas", "Candlelit"],
                specs: {
                  climate: "Soft Warmth & Calming Airflow",
                  aroma: "Warm Chamomile & Bergamot Petals",
                  sound: "Gentle Flowing Water Streams",
                  capacity: "Private Semi-Enclosed Daybeds",
                },
                amenities: [
                  "Ergonomic Zero-Gravity Reclining Daybeds",
                  "Artisanal Herbal Tea & Infusion Bar",
                  "Warmed Flaxseed Eye Pillows",
                  "Tibetan Singing Bowl Meditation Nooks",
                  "Organic Roasted Nuts & Dried Golden Fruits",
                ],
                popularTreatments: ["Head Champi Serenity", "Express Foot Ritual", "Floral Relaxation"],
              },
              {
                id: "rituals",
                category: "rituals",
                tag: "Rituals",
                title: "Signature Holistic Rituals",
                desc: "Multi-sensory hot stone, flower bath & botanical care.",
                longDesc: "A dedicated ritual room engineered for immersive holistic therapies. Features heated volcanic basalt stone stations, deep copper soaking tubs laden with fresh rose and jasmine petals, and singing bowl acoustic therapy.",
                image: spa4Img,
                colSpan: "md:col-span-4",
                minHeight: "min-h-[290px]",
                previewPills: ["Volcanic Stones", "Flower Baths", "Multi-Sensory"],
                specs: {
                  climate: "Deep Thermal Radiance (26°C)",
                  aroma: "Smoked Frankincense & Sweet Orange",
                  sound: "Chakra Resonant Chimes & Chants",
                  capacity: "Single & Couples Ceremony Layout",
                },
                amenities: [
                  "Hand-Carved Volcanic Basalt Heating Wells",
                  "Solid Copper Foot & Body Soaking Tubs",
                  "Warm Herbal Muslin Compress Steamers",
                  "Organic Cold-Pressed Seed Oils",
                  "Acoustic Wind Gongs & Brass Singing Bowls",
                ],
                popularTreatments: ["Hot Stone Massage", "Potli Herbal Massage", "Full Body Scrub"],
              },
              {
                id: "apothecary",
                category: "rituals",
                tag: "Apothecary",
                title: "Botanical Care & Beauty",
                desc: "100% natural tropical flower essences & soothing vapor.",
                longDesc: "Our organic beauty dispensary and botanical treatment lab where master herbalists blend fresh cold-pressed oils, wild honey, organic sea salts, and floral extracts right before each session.",
                image: spa8Img,
                colSpan: "md:col-span-4",
                minHeight: "min-h-[290px]",
                previewPills: ["100% Organic", "Steam Vapor", "Custom Blends"],
                specs: {
                  climate: "Purified Clean Air Humidity Zone",
                  aroma: "Fresh Lemongrass & Crushed Jasmine",
                  sound: "Forest Canopy Ambient Acoustics",
                  capacity: "Formulation Bar & Private Treatment",
                },
                amenities: [
                  "Certified 100% Organic Botanical Extracts",
                  "Live Essential Oil Distillation Display",
                  "Herbal Facial Steam Micro-Vaporizers",
                  "Wild Himalayan Mineral Salts & Clays",
                  "Fresh Honey & Crushed Flower Blending Station",
                ],
                popularTreatments: ["Aromatherapy Massage", "Botanical Scrub", "Mud Body Wrap"],
              },
              {
                id: "sanctuary",
                category: "suites",
                tag: "Sanctuary",
                title: "Couples Rejuvenation",
                desc: "Synchronized restorative therapy & acoustic peace.",
                longDesc: "The ultimate couples sanctuary featuring synchronized dual therapist tables, a private oversized hydrothermal jacuzzi with milk and rose-petal infusions, champagne service, and private ensuite rain showers.",
                image: spa1Img,
                colSpan: "md:col-span-4",
                minHeight: "min-h-[290px]",
                previewPills: ["Private Jacuzzi", "Dual Master Beds", "Couples Suite"],
                specs: {
                  climate: "Balmy Warmth & Controlled Jet Temperature",
                  aroma: "Damask Rose & French Vanilla",
                  sound: "Harmonic Acoustic Duo Resonance",
                  capacity: "Exclusive VIP Couple Suite",
                },
                amenities: [
                  "Dual Hydrotherapy Whirlpool Jacuzzi",
                  "Side-by-Side Synchronized Teakwood Tables",
                  "Candlelit Rose Petal Bed Dressing",
                  "Chilled Artisanal Elixirs & Organic Bites",
                  "Dual Rainfall Shower Suite",
                ],
                popularTreatments: ["Couples Massage Ritual", "Jacuzzi Milk & Honey Bath", "Four Hand Massage"],
              },
            ];

            const filteredSpaces = spaSanctuarySpaces.filter((s) => {
              if (activeSpaceFilter === "all") return true;
              return s.category === activeSpaceFilter;
            });

            return (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
              >
                {filteredSpaces.map((space) => {
                  const isLarge = space.id === "suite-01" && activeSpaceFilter === "all";
                  const colClass = isLarge
                    ? "md:col-span-8"
                    : space.id === "lounge" && activeSpaceFilter === "all"
                      ? "md:col-span-4"
                      : filteredSpaces.length === 2
                        ? "md:col-span-6"
                        : filteredSpaces.length === 1
                          ? "md:col-span-12 max-w-2xl mx-auto"
                          : "md:col-span-4";

                  const minHClass = isLarge
                    ? "min-h-[360px] md:min-h-[440px]"
                    : space.id === "lounge" && activeSpaceFilter === "all"
                      ? "min-h-[280px] md:min-h-[440px]"
                      : "min-h-[300px] md:min-h-[340px]";

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35 }}
                      key={space.id}
                      onClick={() => setSelectedSpaceModal(space)}
                      style={{
                        boxShadow: "0 20px 45px -12px rgba(45,36,30,0.22), inset 0 1px 1px 0 rgba(255,255,255,0.4)",
                      }}
                      className={`${colClass} group relative rounded-[32px] overflow-hidden ${minHClass} border border-[#E5D7C7] hover:border-[#D4A373] bg-[#1E1712] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_65px_-15px_rgba(176,125,84,0.4)] cursor-pointer flex flex-col justify-between`}
                    >
                      {/* Realistic Photo with Smooth Parallax Scale */}
                      <img
                        src={space.image}
                        alt={space.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95"
                      />

                      {/* Multi-gradient Lighting Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/95 via-[#1A120B]/45 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/40 pointer-events-none rounded-[32px]" />

                      {/* Top Bar: Category Badge + Quick Explore Trigger */}
                      <div className="relative z-20 p-5 sm:p-6 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1F1813]/85 backdrop-blur-md border border-[#E3BA8F]/50 text-[#E3BA8F] text-[10px] uppercase tracking-[0.2em] font-bold shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E3BA8F] animate-pulse" />
                          {space.tag}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-bold tracking-wide group-hover:bg-[#B07D54] group-hover:border-[#E3BA8F] transition-all duration-300 shadow-md group-hover:scale-105">
                          <Eye className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Explore Suite</span>
                        </div>
                      </div>

                      {/* Bottom Content Area: Title, Description & Feature Pills */}
                      <div className="relative z-20 p-6 sm:p-7 text-white space-y-2.5">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-bold leading-snug drop-shadow-md text-[#FFF8F0] group-hover:text-[#F3D7B8] transition-colors">
                          {space.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#E2D4C6] max-w-xl font-light leading-relaxed">
                          {space.desc}
                        </p>

                        {/* Interactive Micro Pills */}
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {space.previewPills?.map((pill, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] text-white/90 font-medium group-hover:bg-white/20 transition-colors"
                            >
                              <Sparkles className="w-2.5 h-2.5 text-[#E3BA8F]" />
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })()}
        </div>

        {/* Interactive Virtual Suite Modal Exploration Dialog */}
        <AnimatePresence>
          {selectedSpaceModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Backdrop Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedSpaceModal(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 25 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  boxShadow: "0 35px 80px -20px rgba(0,0,0,0.9), 0 0 40px -10px rgba(212,163,115,0.45), inset 0 1.5px 1.5px 0 rgba(255,255,255,0.3)",
                }}
                className="relative w-full max-w-3xl rounded-[32px] overflow-hidden z-10 text-white border border-[#5A4333] bg-gradient-to-b from-[#1F1712] via-[#17100B] to-[#0F0A06] my-8"
              >
                {/* Top Glowing Metallic Accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#D4A373] via-[#F3D7B8] to-[#B07D54]" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedSpaceModal(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-30 hover:scale-105 active:scale-95 border border-white/15"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header Photo Banner */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={selectedSpaceModal.image}
                    alt={selectedSpaceModal.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1712] via-[#1F1712]/50 to-transparent" />
                  <div className="absolute top-5 left-5 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1F1813]/85 backdrop-blur-md border border-[#E3BA8F]/50 text-[#E3BA8F] text-[10px] uppercase tracking-[0.2em] font-bold shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3BA8F] animate-pulse" />
                      {selectedSpaceModal.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-6 right-6 z-20">
                    <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white drop-shadow-md">
                      {selectedSpaceModal.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  <p className="text-sm sm:text-base text-white/85 leading-relaxed font-light">
                    {selectedSpaceModal.longDesc}
                  </p>

                  {/* Room Specifications 4-Box Grid */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#E3BA8F] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#E3BA8F]" />
                      <span>Sanctuary Environment & Specifications</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E3BA8F]/15 border border-[#E3BA8F]/30 flex items-center justify-center text-[#E3BA8F] shrink-0 mt-0.5">
                          <Thermometer className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10.5px] uppercase tracking-wider text-white/50 font-bold">Climate Control</div>
                          <div className="text-xs font-semibold text-white mt-0.5">{selectedSpaceModal.specs?.climate}</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E3BA8F]/15 border border-[#E3BA8F]/30 flex items-center justify-center text-[#E3BA8F] shrink-0 mt-0.5">
                          <Droplets className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10.5px] uppercase tracking-wider text-white/50 font-bold">Aromatherapy</div>
                          <div className="text-xs font-semibold text-white mt-0.5">{selectedSpaceModal.specs?.aroma}</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E3BA8F]/15 border border-[#E3BA8F]/30 flex items-center justify-center text-[#E3BA8F] shrink-0 mt-0.5">
                          <Volume2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10.5px] uppercase tracking-wider text-white/50 font-bold">Acoustic Soundscape</div>
                          <div className="text-xs font-semibold text-white mt-0.5">{selectedSpaceModal.specs?.sound}</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#E3BA8F]/15 border border-[#E3BA8F]/30 flex items-center justify-center text-[#E3BA8F] shrink-0 mt-0.5">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[10.5px] uppercase tracking-wider text-white/50 font-bold">Capacity & Privacy</div>
                          <div className="text-xs font-semibold text-white mt-0.5">{selectedSpaceModal.specs?.capacity}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Included Suite Amenities Checklist */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#E3BA8F] mb-3 flex items-center gap-1.5">
                      <Gem className="w-3.5 h-3.5 text-[#E3BA8F]" />
                      <span>Included Luxury Suite Amenities</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedSpaceModal.amenities?.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs text-white/80 py-1">
                          <div className="w-4 h-4 rounded-full bg-[#E3BA8F]/20 border border-[#E3BA8F]/40 flex items-center justify-center text-[#E3BA8F] shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
                    <button
                      onClick={() => {
                        const targetTherapy = selectedSpaceModal.popularTreatments?.[0] || selectedSpaceModal.title;
                        setSelectedSpaceModal(null);
                        handleOpenBooking(targetTherapy);
                      }}
                      className="flex-1 py-4 px-6 rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-center flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] shadow-[0_10px_30px_rgba(212,163,115,0.4)]"
                    >
                      <span>Reserve Treatment in This Space</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setSelectedSpaceModal(null)}
                      className="py-4 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white font-medium text-xs tracking-wider transition-all cursor-pointer border border-white/10"
                    >
                      Close Overview
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 8: PACKAGES — Distinct Warm Background
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-24 md:py-32 bg-[#F5EFE6] border-y border-[#EAE0D3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E]">
              Make Wellness a Ritual
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4E]">
              Choose a package that makes regular relaxation a part of your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">

            {/* Package 1: Quarterly Package */}
            <div className="p-7 rounded-3xl bg-white border border-[#EFE6DC] hover:border-[#C59B6D] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6A43] font-bold">Standard Ritual</span>
                <h3 className="text-xl font-serif-luxury font-bold text-[#2D241E] mt-1.5">Quarterly Package</h3>
                <p className="text-xs text-[#6B5A4E] mt-1 mb-5">Regular rejuvenation & calm.</p>
                <div className="text-3xl sm:text-[2rem] font-sans font-extrabold tracking-tight text-[#2D241E] mb-5">
                  ₹5,000 <span className="text-xs text-[#6B5A4E] font-medium tracking-normal">/ 3 Months</span>
                </div>
                <ul className="space-y-3 text-xs text-[#5C4D44]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>3 Sessions Of 60 Minutes Each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Steam Bath With Every Session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Relaxation Lounge Access</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Quarterly Package (₹5,000)")}
                className="w-full mt-6 py-3 px-5 rounded-full bg-[#FAF7F2] hover:bg-[#2D241E] hover:text-white border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Order Now →
              </button>
            </div>

            {/* Package 2: Annually Package */}
            <div className="p-7 rounded-3xl bg-white border border-[#EFE6DC] hover:border-[#C59B6D] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6A43] font-bold">Complete Year</span>
                <h3 className="text-xl font-serif-luxury font-bold text-[#2D241E] mt-1.5">Annually Package</h3>
                <p className="text-xs text-[#6B5A4E] mt-1 mb-5">Consistent long-term wellness.</p>
                <div className="text-3xl sm:text-[2rem] font-sans font-extrabold tracking-tight text-[#2D241E] mb-5">
                  ₹12,000 <span className="text-xs text-[#6B5A4E] font-medium tracking-normal">/ Year</span>
                </div>
                <ul className="space-y-3 text-xs text-[#5C4D44]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>10 Sessions Of 60 Minutes Each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Free Steam Bath With Every Session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Priority Appointment Booking</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Annually Package (₹12,000)")}
                className="w-full mt-6 py-3 px-5 rounded-full bg-[#FAF7F2] hover:bg-[#2D241E] hover:text-white border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Order Now →
              </button>
            </div>

            {/* Package 3: Yearly Package (Featured Dark Luxury Card) */}
            <div className="p-7 rounded-3xl bg-[#2D241E] text-white border-2 border-[#D4A373] shadow-2xl shadow-[#2D241E]/20 relative flex flex-col justify-between transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#D4A373] text-[#2D241E] text-[9px] uppercase font-bold tracking-widest shadow-md">
                Most Popular
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E3BA8F] font-bold">Deep Care Ritual</span>
                <h3 className="text-xl font-serif-luxury font-bold text-white mt-1.5">Yearly Package</h3>
                <p className="text-xs text-[#E3BA8F] mt-1 mb-5">Full body massage + scrub.</p>
                <div className="text-3xl sm:text-[2rem] font-sans font-extrabold tracking-tight text-white mb-5">
                  ₹15,000 <span className="text-xs text-slate-300 font-medium tracking-normal">/ Year</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                    <span>8 Sessions Of 90 Minutes Each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                    <span>Full Body Massage With Full Body Scrub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F] shrink-0 mt-0.5" />
                    <span>Free Steam Bath With Every Session</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Yearly Package (₹15,000)")}
                className="w-full mt-6 py-3 px-5 rounded-full bg-[#E3BA8F] hover:bg-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-102 transition-all cursor-pointer text-center"
              >
                Order Now →
              </button>
            </div>

            {/* Package 4: Yearly Jacuzzi Package */}
            <div className="p-7 rounded-3xl bg-white border border-[#EFE6DC] hover:border-[#C59B6D] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6A43] font-bold">VIP Jacuzzi Hydro</span>
                <h3 className="text-xl font-serif-luxury font-bold text-[#2D241E] mt-1.5">Jacuzzi Package</h3>
                <p className="text-xs text-[#6B5A4E] mt-1 mb-5">Bangkok-style Jacuzzi luxury.</p>
                <div className="text-3xl sm:text-[2rem] font-sans font-extrabold tracking-tight text-[#2D241E] mb-5">
                  ₹30,000 <span className="text-xs text-[#6B5A4E] font-medium tracking-normal">/ Year</span>
                </div>
                <ul className="space-y-3 text-xs text-[#5C4D44]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>10 Sessions Of 90 Minutes Each</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Full Body Massage + Bangkok Jacuzzi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54] shrink-0 mt-0.5" />
                    <span>Free Steam Bath With Every Session</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Yearly Jacuzzi Package (₹30,000)")}
                className="w-full mt-6 py-3 px-5 rounded-full bg-[#FAF7F2] hover:bg-[#2D241E] hover:text-white border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Order Now →
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 9: COUPLE EXPERIENCE — Moving Canvas of Color & Radiant Glow
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-44 overflow-hidden bg-[#140D08] text-white select-none">
        
        {/* MOVING CANVAS OF COLOR BACKGROUND (Organic Morphing Chromatic Light Orbs) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base Dark Luxury Vignette */}
          <div className="absolute inset-0 bg-radial from-[#22150D] via-[#140D08] to-[#0A0604]" />

          {/* Floating Chromatic Light Orb 1: Magma Amber Glow */}
          <div className="animate-canvas-1 absolute -top-1/4 -left-1/4 w-[650px] h-[650px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-tr from-[#EA580C]/45 via-[#F59E0B]/35 to-transparent blur-[100px] opacity-80" />

          {/* Floating Chromatic Light Orb 2: Velvet Ruby Rose Glow */}
          <div className="animate-canvas-2 absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] md:w-[900px] md:h-[900px] rounded-full bg-gradient-to-bl from-[#E11D48]/40 via-[#BE185D]/30 to-transparent blur-[110px] opacity-75" />

          {/* Floating Chromatic Light Orb 3: Radiant Golden Honey Center */}
          <div className="animate-canvas-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full bg-gradient-to-r from-[#FBBF24]/30 via-[#D97706]/25 to-[#FB7185]/20 blur-[90px] opacity-90" />

          {/* Floating Chromatic Light Orb 4: Subtle Ocean Teal Aura Refraction */}
          <div className="animate-canvas-1 absolute bottom-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#14B8A6]/20 blur-[120px] opacity-60" />

          {/* Optical Bokeh Circles */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-1/3 left-1/5 w-40 h-40 rounded-full bg-[#FDE68A]/15 blur-2xl" />

          {/* Film Grain & Soft Radial Contrast Mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#140D08]/60 via-transparent to-[#140D08]/80 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Giant Translucent Watermark Typography in Background */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-sans font-black tracking-widest text-white/[0.04] uppercase leading-none blur-[1px]">
            LIGHT
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          
          {/* Subtitle Tag */}
          <div className="inline-block space-y-1">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-semibold text-[#F5DEB3] opacity-90 drop-shadow-sm block">
              Couples Sanctuary
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.25em] text-white/50 block font-light">
              Background Experience
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-normal tracking-tight text-white leading-[1.08] drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            Relax Together
          </h2>

          {/* Poetic Uppercase Description with Wide Tracking */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto uppercase tracking-[0.18em] font-medium leading-relaxed drop-shadow-md">
            It glows with warmth. Dissolves in color. And leaves only a trace of silence behind. Share a peaceful moment away from the everyday with a specially curated couple spa experience.
          </p>

          {/* Radiant Glowing Pill Button */}
          <div className="pt-6 sm:pt-8 flex justify-center">
            <button
              onClick={() => handleOpenBooking("Couple Experience")}
              className="btn-glowing-glow relative group inline-flex items-center gap-3 px-9 sm:px-11 py-4 sm:py-4.5 rounded-full bg-white/95 hover:bg-white text-[#1C120B] font-bold text-xs uppercase tracking-[0.22em] transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer shadow-2xl"
            >
              <span>Explore the Glow</span>
              <ArrowRight className="w-4 h-4 text-[#8C6A43] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 10: 3D SCROLL TRIGGER KINETIC GUEST STORIES & REVIEWS
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAF7F2] text-[#2D241E] relative overflow-hidden border-t border-[#EAE0D3]">
        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A373]/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8DFD5] shadow-xs text-xs font-semibold text-[#8C6A43]">
            {/* <Star className="w-3.5 h-3.5 fill-[#E3BA8F] text-[#E3BA8F]" /> */}
            <span>4.6+ ★ Rating on Google Maps (Wakad, Pune)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#2D241E]">
            What Our Guests <span className="skin-gradient-text italic font-normal">Experience.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto font-light leading-relaxed">
            Guest reviews from our Google Maps listing for NEW Sara Spa, Wakad, Pune.
          </p>
        </div>

        {/* 3D Kinetic Scroll Trigger Container */}
        <ThreeDScrollTriggerContainer className="space-y-6 select-none">
          {/* Row 1: Left-to-Right Velocity Scrolling (Luxury Warm Espresso Brown Cards) */}
          <ThreeDScrollTriggerRow direction={1} baseVelocity={1.5} className="py-2">
            <div className="threed-scroll-trigger-block flex items-center gap-6 px-3">
              {[
                {
                  name: "Shankar Lotke",
                  detail: "Google Review • 2 reviews",
                  time: "3 months ago",
                  stars: 5,
                  quote: "Very neat and tidy. Spa is excellent and luxurious. Not to mention therapist Kaveri is very well trained and helped recover my injury very neatly.",
                  initials: "SL",
                  avatarBg: "from-[#E91E63] to-[#C2185B]",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                },
                {
                  name: "Nikhil Patil",
                  detail: "Google Review • 3 reviews",
                  time: "a month ago",
                  stars: 5,
                  quote: "Best spa service in Pune Wakad, do visit when in Pune.... Very professional and experienced staff.",
                  initials: "NP",
                  avatarBg: "from-[#F4511E] to-[#E64A19]",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                },
                {
                  name: "Rohan Kadam",
                  detail: "Google Review • 3 reviews",
                  time: "10 months ago",
                  stars: 5,
                  quote: "The therapists are skilled and the place feels like a real retreat. Highly recommended.",
                  initials: "RK",
                  avatarBg: "from-[#8D6E63] to-[#6D4C41]",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                },
                {
                  name: "Devidas Garad",
                  detail: "Google Review • 2 reviews",
                  time: "a year ago",
                  stars: 5,
                  quote: "Relaxing ambiance, soft music. Sara Spa's signature facial makes my skin glow. I've been back three times already.",
                  initials: "DG",
                  avatarBg: "from-[#455A64] to-[#263238]",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="w-[360px] sm:w-[400px] h-[230px] rounded-3xl bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] border border-[#544133] hover:border-[#D4A373] p-6 sm:p-7 shadow-2xl flex flex-col justify-between whitespace-normal shrink-0 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#E3BA8F]">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border ${r.tagColor} flex items-center gap-1.5`}>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0">
                          <path fill="#EA4335" d="M12 5c1.54 0 2.9.55 3.97 1.45l2.98-2.98C17.15 1.8 14.77 1 12 1 7.42 1 3.56 3.58 1.63 7.34l3.54 2.75C6.04 7.22 8.78 5 12 5z" />
                          <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.72 2.88c2.18-2.01 3.7-4.99 3.7-8.7z" />
                          <path fill="#FBBC05" d="M5.17 14.91c-.24-.73-.38-1.5-.38-2.31s.14-1.58.38-2.31L1.63 7.54C.59 9.61 0 11.75 0 14s.59 4.39 1.63 6.46l3.54-2.75z" />
                          <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.72-2.88c-1.07.72-2.45 1.16-4.21 1.16-3.22 0-5.96-2.22-6.83-5.09L1.63 16c1.93 3.76 5.79 6.34 10.37 6.34z" />
                        </svg>
                        Google Review
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-serif-luxury italic text-[#F5EBE1] leading-relaxed line-clamp-3 h-[3.8rem] flex items-center">
                      “{r.quote}”
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#4A382C] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md shrink-0`}>
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-serif-luxury font-bold text-white leading-tight truncate">
                          {r.name}
                        </div>
                        <div className="text-[10.5px] text-[#D4C4B7] font-light truncate">
                          {r.detail} • {r.time}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </ThreeDScrollTriggerRow>

          {/* Row 2: Right-to-Left Velocity Scrolling (Deep Botanical Green Cards) */}
          <ThreeDScrollTriggerRow direction={-1} baseVelocity={1.5} className="py-2">
            <div className="threed-scroll-trigger-block flex items-center gap-6 px-3">
              {[
                {
                  name: "spahomeservice",
                  detail: "Google Review • 1 review",
                  time: "3 months ago",
                  stars: 5,
                  quote: "A quiet and soothing visiting experience. The environment was pleasant and comforting. Enjoyed the visit overall.",
                  initials: "SH",
                  avatarBg: "from-[#00897B] to-[#004D40]",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                },
                {
                  name: "Gulab arti Bharwasi",
                  detail: "Google Review • 1 review",
                  time: "6 months ago",
                  stars: 5,
                  quote: "Very good massage. Very good experience. Friendly and professional service.",
                  initials: "GB",
                  avatarBg: "from-[#7E57C2] to-[#5E35B1]",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                },
                {
                  name: "akash chapte",
                  detail: "Google Review • 2 reviews",
                  time: "10 months ago",
                  stars: 5,
                  quote: "Impressive service quality. The hot stone therapies and attentive staff made the visit truly rejuvenating.",
                  initials: "AC",
                  avatarBg: "from-[#FB8C00] to-[#E65100]",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                },
                {
                  name: "Rajesh Bochare",
                  detail: "Google Local Guide • 6 reviews",
                  time: "Recent Visit",
                  stars: 5,
                  quote: "Exceptional spa experience with top hygiene standards, relaxing ambience, and highly professional staff in Wakad Pune.",
                  initials: "RB",
                  avatarBg: "from-[#1E88E5] to-[#1565C0]",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="w-[360px] sm:w-[400px] h-[230px] rounded-3xl bg-gradient-to-b from-[#142318] via-[#0E1B13] to-[#08120C] border border-[#2D4536] hover:border-[#52B788] p-6 sm:p-7 shadow-2xl flex flex-col justify-between whitespace-normal shrink-0 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#A7E8CD]">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold tracking-wider px-3 py-1 rounded-full border ${r.tagColor} flex items-center gap-1.5`}>
                        <svg viewBox="0 0 24 24" className="w-3 h-3 shrink-0">
                          <path fill="#EA4335" d="M12 5c1.54 0 2.9.55 3.97 1.45l2.98-2.98C17.15 1.8 14.77 1 12 1 7.42 1 3.56 3.58 1.63 7.34l3.54 2.75C6.04 7.22 8.78 5 12 5z" />
                          <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.72 2.88c2.18-2.01 3.7-4.99 3.7-8.7z" />
                          <path fill="#FBBC05" d="M5.17 14.91c-.24-.73-.38-1.5-.38-2.31s.14-1.58.38-2.31L1.63 7.54C.59 9.61 0 11.75 0 14s.59 4.39 1.63 6.46l3.54-2.75z" />
                          <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.72-2.88c-1.07.72-2.45 1.16-4.21 1.16-3.22 0-5.96-2.22-6.83-5.09L1.63 16c1.93 3.76 5.79 6.34 10.37 6.34z" />
                        </svg>
                        Google Review
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-serif-luxury italic text-[#E6F4EC] leading-relaxed line-clamp-3 h-[3.8rem] flex items-center">
                      “{r.quote}”
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#233529] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md shrink-0`}>
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-serif-luxury font-bold text-white leading-tight truncate">
                          {r.name}
                        </div>
                        <div className="text-[10.5px] text-[#A7E8CD] font-light truncate">
                          {r.detail} • {r.time}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
      </section>


      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
