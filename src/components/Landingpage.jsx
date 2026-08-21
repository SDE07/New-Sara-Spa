import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
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
  Play,
  X,
  Waves,
  Flower2,
  Feather,
  Sun,
  Moon,
  Gem,
  Wind
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

export default function Landingpage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Signature Experience");
  const [activeCardDetail, setActiveCardDetail] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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
          HERO SECTION — Split Layout: Typography Left + 3D Organic Visual Right
      ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative min-h-[95vh] md:min-h-screen w-full flex items-center overflow-hidden pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 md:pb-28 bg-gradient-to-b from-[#FDFAF6] via-[#FAF4ED] to-[#FDFAF6]"
      >
        {/* Luminous Warm Spa Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#D4A373]/15 to-[#F5D0B5]/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#E3BA8F]/12 to-[#F9EDE0]/30 rounded-full blur-[120px]" />
        </div>

        {/* 3D Three.js Floating Ambient Particles */}
        <Suspense fallback={null}>
          <Hero3DCanvas />
        </Suspense>

        {/* ── Main Two-Column Grid ── */}
        <div className="relative z-[15] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* ── LEFT: Text Content ── */}
            <div className="lg:col-span-7 space-y-7 text-center lg:text-left order-2 lg:order-1">

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold tracking-tight text-[#2D241E] leading-[1.08]">
                Where Beauty Meets   <br className="hidden sm:block" />{' '}
                <span className="skin-gradient-text italic font-normal">Relaxation</span>
              </h1>

              {/* Description */}
              <p className="max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-[#615147] font-sans font-normal leading-relaxed">
                Step away from the everyday and discover a peaceful spa experience designed for relaxation, rejuvenation and complete wellness.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-5 pt-2">
                <button
                  onClick={() => handleOpenBooking("Signature Experience")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#2D241E]/15 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-[#F8F3ED] text-[#2D241E] border border-[#E5D6C4] hover:border-[#B07D54] font-sans font-semibold text-xs uppercase tracking-[0.2em] shadow-xs transition-all duration-300 text-center"
                >
                  EXPLORE SERVICES
                </Link>
              </div>

              {/* Small Bottom Information */}
              <div className="pt-3">
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 px-5 py-2.5 rounded-full bg-white/85 border border-[#EDE4D9] backdrop-blur-md text-[11px] sm:text-xs text-[#6B4E3D] font-medium tracking-wide shadow-xs">
                  <span>Premium Treatments</span>
                  <span className="text-[#C59B6D]">•</span>
                  <span>Professional Care</span>
                  <span className="text-[#C59B6D]">•</span>
                  <span>Relaxing Ambience</span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: 3D Luxury Fluid Morphing Visual with Interactive Parallax ── */}
            <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
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

                {/* Floating Badge Top-Right */}
                <div className="floating-spa-badge floating-spa-badge-1 hidden sm:flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#D4A373]/20 flex items-center justify-center text-[#B07D54]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2D241E] leading-none">100% Herbal</div>
                    <div className="text-[9px] text-[#8C7364] leading-none mt-0.5">Ayurvedic Oils</div>
                  </div>
                </div>

                {/* Floating Badge Bottom-Left */}
                <div className="floating-spa-badge floating-spa-badge-2 hidden sm:flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#E3BA8F]/30 flex items-center justify-center text-[#B07D54]">
                    <Star className="w-3.5 h-3.5 fill-[#B07D54]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2D241E] leading-none">4.9 ★ Rating</div>
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7364] font-medium">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-[#D8C7B5] flex items-start justify-center p-0.5">
            <div className="w-1 h-2 bg-[#B07D54] rounded-full animate-bounce" />
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#FAF7F2] leading-[1.12]">
                Your Time. Your Wellness. <br />
                <span className="italic text-[#E3BA8F] font-normal">Your Escape.</span>
              </h2>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#F5ECE1] font-light leading-relaxed">
                At Sara Spa, every detail is designed to help you slow down, breathe deeply and reconnect with yourself in an atmosphere of tranquil luxury.
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed">
                From therapeutic couples rituals to personalized herbal massages, our treatments combine master therapists with a serene sanctuary created for total harmony of body and mind.
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
                  <span>4.9 ★ Guest Rating</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">

            {/* LEFT COLUMN: 3D Cylindrical Experience Card Slider */}
            <div className="lg:col-span-7 xl:col-span-7 w-full flex flex-col items-center justify-center relative min-h-[500px] md:min-h-[560px] overflow-hidden" style={{ touchAction: 'pan-y' }}>
              <ImageSlider3D
                duration={48}
                cardWidth="17.5em"
                cardAspectRatio="7.5/10"
                perspective="40em"
                withMask={false}
                onCardClick={(c) => setActiveCardDetail(c)}
                items={[
                  {
                    num: "01",
                    tag: "Personalized Therapy",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Expert Care",
                    desc: "Certified master therapists who customize every pressure point and ritual to your exact body rhythm.",
                    badge: "Certified Master Specialists",
                    icon: Shield,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "02",
                    tag: "Sensory Sanctuary",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Premium Ambience",
                    desc: "Acoustically insulated private suites with soft alabaster lighting and calming botanical aromatherapy mist.",
                    badge: "Private Acoustic Suites",
                    icon: Compass,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "03",
                    tag: "Herbal Alchemy",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Signature Treatments",
                    desc: "Carefully selected botanical oils, hot herbal poultices, and personalized Ayurvedic rejuvenation therapies.",
                    badge: "100% Organic Botanicals",
                    icon: Flower2,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "04",
                    tag: "Hydro & Thermal",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Complete Relaxation",
                    desc: "Private hydrotherapy Jacuzzis, infrared cedar saunas, and aromatic steam rituals under one serene roof.",
                    badge: "Jacuzzi & Thermal Suites",
                    icon: Waves,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "05",
                    tag: "Bio-Energetic Flow",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Couples Harmony",
                    desc: "Synchronized dual-therapist treatments in secluded private suites with aromatic petal baths.",
                    badge: "Synchronized Massage",
                    icon: Heart,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "06",
                    tag: "Facial & Scalp",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Radiance Alchemy",
                    desc: "Warm herb-infused Shirodhara oil stream and cold-pressed floral botanical lymphatic facial drainage.",
                    badge: "Shirodhara Oil Ritual",
                    icon: Sparkles,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "07",
                    tag: "Botanical Steam",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "Eucalyptus Mist",
                    desc: "Restorative herbal chamber infused with mountain eucalyptus and organic chamomile botanical steam.",
                    badge: "Aromatherapy Mist",
                    icon: Wind,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                  {
                    num: "08",
                    tag: "Private Luxury",
                    tagBg: "bg-[#E3BA8F]/15 text-[#E3BA8F] border-[#E3BA8F]/30",
                    title: "VIP Jacuzzi Suite",
                    desc: "Exclusive teakwood sanctuary with individual magnesium hot tub and personal rainfall shower.",
                    badge: "Cedar Wood Sauna",
                    icon: Gem,
                    cardBg: "from-[#221710] via-[#1A110B] to-[#100A06]",
                    borderColor: "border-[#4A382A]/80 hover:border-[#D4A373]",
                    badgeColor: "text-[#E3BA8F]",
                    haloGlow: "bg-[#D4A373]/25",
                    accentBorder: "from-transparent via-[#D4A373] to-transparent",
                    iconColor: "text-[#E3BA8F]",
                  },
                ]}
                renderItem={(c) => {
                  const IconComponent = c.icon || Sparkles;
                  return (
                    <div
                      onClick={() => setActiveCardDetail(c)}
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                      className={`w-full h-full rounded-[28px] bg-gradient-to-b ${c.cardBg} border ${c.borderColor} p-6 shadow-2xl flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-all duration-700 hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md`}
                    >
                      {/* Top Accent Border */}
                      <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${c.accentBorder} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Watermark Numeral */}
                      <span className="absolute top-2 right-4 text-4xl font-serif-luxury font-bold text-white/10 group-hover:text-white/20 transition-colors select-none pointer-events-none">
                        {c.num}
                      </span>

                      {/* Top Tag & Header */}
                      <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between">
                          <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase border ${c.tagBg} shadow-xs`}>
                            {c.tag}
                          </span>
                        </div>

                        <h3 className="text-xl font-serif-luxury font-bold text-white leading-snug group-hover:text-white transition-colors duration-300">
                          {c.title}
                        </h3>

                        <p className="text-xs text-white/70 font-light leading-relaxed line-clamp-3">
                          {c.desc}
                        </p>
                      </div>

                      {/* Middle Lucide Icon Luxury Medallion Emblem */}
                      <div className="my-2 relative flex items-center justify-center">
                        <div className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-white/10 via-white/[0.03] to-transparent border border-white/20 group-hover:border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 backdrop-blur-md">
                          {/* Soft Ambient Glow Halo */}
                          <div className={`absolute inset-0 ${c.haloGlow} rounded-full blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                          <IconComponent className={`w-10 h-10 ${c.iconColor} group-hover:text-white transition-colors relative z-10 drop-shadow-md`} />
                        </div>
                      </div>

                      {/* Bottom Feature Badge & Action */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between relative z-10 text-[11px]">
                        <div className={`flex items-center gap-1.5 font-medium ${c.badgeColor}`}>
                          <Sparkles className="w-3 h-3" />
                          <span className="truncate max-w-[120px]">{c.badge}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 whitespace-nowrap">
                          Details <ArrowRight className="w-2.5 h-2.5" />
                        </span>
                      </div>
                    </div>
                  );
                }}
              />
            </div>

            {/* RIGHT COLUMN: Heading, Subtitle, Highlights & Action */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:pl-6 xl:pl-10 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E] leading-[1.18] space-y-1">
                <span className="block">More Than a Spa.</span>
                <span className="block skin-gradient-text italic font-normal">A Complete Experience.</span>
              </h2>

              <p className="text-base text-[#6B5A4E] leading-relaxed font-light">
                Immerse yourself in a sanctuary crafted for total holistic renewal. Each bespoke therapy harmonizes ancient Ayurvedic traditions, organic cold-pressed botanicals, and acoustic serenity for ultimate mental and bodily restoration.
              </p>

              {/* Luxury Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#EFE6DC] shadow-xs flex items-center gap-3.5 hover:border-[#D4A373] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#FDF6EE] border border-[#E3BA8F]/50 text-[#8C6A43] flex items-center justify-center shrink-0 shadow-xs">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#2D241E]">Master Certified</h4>
                    <p className="text-[11px] text-[#8C6A43]">Customized pressure rituals</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#DCE8E1] shadow-xs flex items-center gap-3.5 hover:border-[#52B788] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-[#EAF7F0] border border-[#A7E8CD]/50 text-[#1B4332] flex items-center justify-center shrink-0 shadow-xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#14261C]">Private Suites</h4>
                    <p className="text-[11px] text-[#407D5D]">Acoustic insulated calm</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleOpenBooking()}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2D241E] via-[#3A2E26] to-[#2D241E] hover:from-[#4A3B31] hover:to-[#3A2E26] text-white font-sans font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>EXPLORE RITUALS</span>
                  <ArrowRight className="w-4 h-4 text-[#E3BA8F]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Smooth Luxury Modal Popup for Clicked 3D Experience Card (Dynamic Green/Brown Theme) */}
        <AnimatePresence>
          {activeCardDetail && (() => {
            const isGreen = activeCardDetail.cardBg?.includes("#142318") || activeCardDetail.tagBg?.includes("#A7E8CD");
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
                  className={`relative w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl z-10 text-white border ${
                    isGreen ? "bg-[#0D1A12] border-[#244230]" : "bg-[#1F1712] border-[#5A4333]"
                  }`}
                >
                  {/* Top Accent Line */}
                  <div
                    className={`h-1.5 bg-gradient-to-r ${
                      isGreen
                        ? "from-[#2D6A4F] via-[#74C69D] to-[#2D6A4F]"
                        : "from-[#D4A373] via-[#F3D7B8] to-[#B07D54]"
                    }`}
                  />

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveCardDetail(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-20 hover:scale-105 active:scale-95"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                      {/* Glowing Lucide Icon Emblem */}
                      <div
                        className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-white/15 via-white/[0.05] to-transparent border-2 shrink-0 shadow-2xl shadow-black/50 flex items-center justify-center relative backdrop-blur-md ${
                          isGreen ? "border-[#52B788]" : "border-[#D4A373]"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-3xl blur-lg pointer-events-none ${
                            isGreen ? "bg-[#52B788]/25" : "bg-[#D4A373]/25"
                          }`}
                        />
                        <ModalIcon
                          className={`w-12 h-12 relative z-10 drop-shadow-md ${
                            isGreen ? "text-[#A7E8CD]" : "text-[#E3BA8F]"
                          }`}
                        />
                      </div>

                      <div className="space-y-2 text-center sm:text-left flex-1">
                        <span
                          className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase border ${activeCardDetail.tagBg}`}
                        >
                          {activeCardDetail.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                          {activeCardDetail.title}
                        </h3>
                        <div
                          className={`flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold ${
                            isGreen ? "text-[#A7E8CD]" : "text-[#E3BA8F]"
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{activeCardDetail.badge}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
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
                          className={`text-sm font-semibold mt-0.5 ${
                            isGreen ? "text-[#A7E8CD]" : "text-[#E3BA8F]"
                          }`}
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
                        className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white/80 hover:text-white font-medium text-xs tracking-wider transition-all cursor-pointer"
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
            Experience our signature combination of massage, body care and Jacuzzi relaxation, created for those who want something more than an ordinary spa visit.
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
          SECTION 5: FEATURED SERVICES — Large Image Cards
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 md:py-32 bg-[#F5EFE6] border-t border-[#EAE0D3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A43] font-semibold">
                Curated Therapies
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E] mt-2">
                Discover Your Perfect Treatment
              </h2>
            </div>
            <button
              onClick={() => handleOpenBooking()}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8C6A43] hover:text-[#2D241E] transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4 3D Interactive Botanical Luxury Treatment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <TherapyCard3D
              title="Swedish Massage"
              duration="60 / 90 Mins"
              benefit="Muscle Easing & Glow"
              tagline="Relax • Restore • Rejuvenate"
              description="Gentle rhythmic long gliding strokes with warm herbal essential oils to melt away everyday fatigue."
              image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
              theme="emerald"
              onBook={handleOpenBooking}
            />

            <TherapyCard3D
              title="Deep Tissue Massage"
              duration="60 / 90 Mins"
              benefit="Tension & Posture Relief"
              tagline="Release Tension & Comfort"
              description="Focused firm pressure targeting deep muscle layers and chronic stress points for complete renewal."
              image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80"
              theme="jade"
              onBook={handleOpenBooking}
            />

            <TherapyCard3D
              title="Royal Thai Massage"
              duration="75 / 120 Mins"
              benefit="Energy Alignment & Flow"
              tagline="Ancient Stretching Ritual"
              description="Traditional passive stretching, rhythmic acupressure, and warm herbal compress therapy restoring vital balance."
              image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80"
              theme="amber"
              onBook={handleOpenBooking}
            />

            <TherapyCard3D
              title="Couple Experience"
              duration="For 2 Guests • 90 Mins"
              benefit="Shared Private Serenity"
              tagline="Synchronized Luxury Suite"
              description="Side-by-side synchronized full-body massage in an intimate private suite with custom organic aromatherapy."
              image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
              theme="emerald"
              onBook={handleOpenBooking}
            />
          </div>

          <div className="text-center mt-14">
            <button
              onClick={() => handleOpenBooking()}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E5D6C4] text-[#2D241E] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-xs hover:border-[#B07D54] hover:shadow-md"
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
          SECTION 7: SPA EXPERIENCE / FACILITIES — Stacked & Grid Layout
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="facilities" className="py-24 md:py-32 bg-[#FAF7F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A43] font-semibold">
              The Spaces
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E]">
              Designed for Complete Relaxation
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto">
              Every space at Sara Spa is thoughtfully designed to create a calm and comfortable environment from the moment you arrive.
            </p>
          </div>

          {/* Masonry / Stacked Gallery Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Big Main Image: Luxury Treatment Rooms */}
            <div className="md:col-span-8 group relative rounded-3xl overflow-hidden min-h-[350px] md:min-h-[420px] border border-[#EFE6DC] shadow-sm bg-[#1E1712]">
              <img
                src={spa2Img}
                alt="Luxury Treatment Rooms"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E3BA8F] font-bold">Suite 01</span>
                <h3 className="text-2xl font-serif-luxury font-bold mt-1">Luxury Treatment Rooms</h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">Private temperature-controlled suites with organic aroma diffusers & teakwood beds.</p>
              </div>
            </div>

            {/* Stacked 1: Private Relaxation Spaces */}
            <div className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[250px] md:min-h-[420px] border border-[#EFE6DC] shadow-sm bg-[#1E1712]">
              <img
                src={spa3Img}
                alt="Private Relaxation Spaces"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#E3BA8F] font-bold">Lounge</span>
                <h3 className="text-xl font-serif-luxury font-bold mt-1">Private Relaxation Spaces</h3>
                <p className="text-xs text-slate-200 mt-1">Candlelit head & facial serenity with organic flower teas.</p>
              </div>
            </div>

            {/* Bottom Row 3 Cards */}
            {/* Signature Holistic Rituals */}
            <div className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#EFE6DC] shadow-sm bg-[#1E1712]">
              <img
                src={spa4Img}
                alt="Signature Holistic Rituals"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E3BA8F] font-bold">Rituals</span>
                <h3 className="text-lg font-serif-luxury font-bold">Signature Holistic Rituals</h3>
                <p className="text-xs text-slate-200">Multi-sensory hot stone, flower bath & botanical care.</p>
              </div>
            </div>

            {/* Botanical Care & Beauty */}
            <div className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#EFE6DC] shadow-sm bg-[#1E1712]">
              <img
                src={spa5Img}
                alt="Botanical Care & Beauty"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E3BA8F] font-bold">Apothecary</span>
                <h3 className="text-lg font-serif-luxury font-bold">Botanical Care & Beauty</h3>
                <p className="text-xs text-slate-200">100% natural tropical flower essences & soothing vapor.</p>
              </div>
            </div>

            {/* Calm Couples & Jacuzzi Ambience */}
            <div className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[260px] border border-[#EFE6DC] shadow-sm bg-[#1E1712]">
              <img
                src={spa1Img}
                alt="Couples Jacuzzi & Suite"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E3BA8F] font-bold">Sanctuary</span>
                <h3 className="text-lg font-serif-luxury font-bold">Couples Rejuvenation</h3>
                <p className="text-xs text-slate-200">Synchronized restorative therapy & acoustic peace.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 8: PACKAGES — Distinct Warm Background
      ───────────────────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-24 md:py-32 bg-[#F5EFE6] border-y border-[#EAE0D3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6A43] font-semibold">
              Membership & Rituals
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E]">
              Make Wellness a Ritual
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4E]">
              Choose a package that makes regular relaxation a part of your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Package 1: Quarterly */}
            <div className="p-8 rounded-3xl bg-white border border-[#EFE6DC] hover:border-[#C59B6D] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C6A43] font-bold">Standard Ritual</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#2D241E] mt-2">Quarterly</h3>
                <p className="text-xs text-[#6B5A4E] mt-1 mb-6">For regular relaxation.</p>
                <div className="text-3xl font-serif-luxury font-bold text-[#2D241E] mb-6">
                  $249 <span className="text-xs text-[#6B5A4E] font-sans font-normal">/ 3 Months</span>
                </div>
                <ul className="space-y-3 text-xs text-[#5C4D44]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>3 Full Body Swedish or Thai Massages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>Access to Steam & Relaxation Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>10% Off Private Spa Retail Products</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Quarterly Package")}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-[#EAE0D3] border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all"
              >
                View Packages →
              </button>
            </div>

            {/* Package 2: Annual Wellness (Featured Warm Mocha Card) */}
            <div className="p-8 rounded-3xl bg-[#2D241E] text-white border-2 border-[#D4A373] shadow-2xl shadow-[#2D241E]/20 relative flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4A373] text-[#2D241E] text-[10px] uppercase font-bold tracking-widest shadow-md">
                Most Popular
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E3BA8F] font-bold">Complete Journey</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-white mt-2">Annual Wellness</h3>
                <p className="text-xs text-[#E3BA8F] mt-1 mb-6">For long-term self-care.</p>
                <div className="text-3xl font-serif-luxury font-bold text-white mb-6">
                  $890 <span className="text-xs text-slate-300 font-sans font-normal">/ 12 Months</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F]" />
                    <span>12 Customized Massages of Choice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F]" />
                    <span>Unlimited Steam Bath & Lounge Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F]" />
                    <span>2 Complimentary Guest Passes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E3BA8F]" />
                    <span>Priority Weekend Suite Booking</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Annual Wellness Package")}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#E3BA8F] hover:bg-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-102 transition-all"
              >
                View Packages →
              </button>
            </div>

            {/* Package 3: Premium Jacuzzi */}
            <div className="p-8 rounded-3xl bg-white border border-[#EFE6DC] hover:border-[#C59B6D] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C6A43] font-bold">Ultimate Indulgence</span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#2D241E] mt-2">Premium Jacuzzi</h3>
                <p className="text-xs text-[#6B5A4E] mt-1 mb-6">For the ultimate spa experience.</p>
                <div className="text-3xl font-serif-luxury font-bold text-[#2D241E] mb-6">
                  $420 <span className="text-xs text-[#6B5A4E] font-sans font-normal">/ 6 Months</span>
                </div>
                <ul className="space-y-3 text-xs text-[#5C4D44]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>6 Private Jacuzzi Hydrotherapy Sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>6 Deep Rejuvenation Massages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B07D54]" />
                    <span>Aromatherapy & Herbal Bath Rituals</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => handleOpenBooking("Premium Jacuzzi Package")}
                className="w-full mt-8 py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-[#EAE0D3] border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-widest transition-all"
              >
                View Packages →
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────────────
          SECTION 9: COUPLE EXPERIENCE — Wide Romantic / Luxury Section
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-[#2D241E] text-white">
        {/* Wide Romantic Luxury Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="Sara Spa Couple Experience"
            className="w-full h-full object-cover filter brightness-[0.38]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D241E]/95 via-[#2D241E]/70 to-[#2D241E]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold text-white leading-tight">
            Relax Together
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#EAE0D3] max-w-2xl mx-auto font-sans font-normal leading-relaxed">
            Share a peaceful moment away from the everyday with a specially curated couple spa experience.
          </p>

          <div className="pt-4">
            <button
              onClick={() => handleOpenBooking("Couple Experience")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E3BA8F] hover:bg-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore Couple Experience</span>
              <ArrowRight className="w-4 h-4" />
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
         

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#2D241E]">
            What Our Guests <span className="skin-gradient-text italic font-normal">Experience.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto font-light leading-relaxed">
            Real guest journeys from our acoustically insulated suites, thermal Jacuzzis, and bespoke Ayurvedic therapies.
          </p>
        </div>

        {/* 3D Kinetic Scroll Trigger Container */}
        <ThreeDScrollTriggerContainer className="space-y-6 select-none">
          {/* Row 1: Left-to-Right Velocity Scrolling (Luxury Warm Espresso Brown Cards) */}
          <ThreeDScrollTriggerRow direction={1} baseVelocity={1.5} className="py-2">
            <div className="threed-scroll-trigger-block flex items-center gap-6 px-3">
              {[
                {
                  name: "Priya Sharma",
                  ritual: "VIP Jacuzzi & Aromatherapy",
                  stars: 5,
                  quote: "The acoustic peace in the private suite combined with the magnesium Jacuzzi made all my chronic shoulder tension vanish. Unmatched luxury!",
                  initials: "PS",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                  avatarBg: "from-[#D4A373] to-[#B07D54]",
                },
                {
                  name: "Marcus Vance",
                  ritual: "Deep Tissue & Herbal Poultice",
                  stars: 5,
                  quote: "Master therapists who actually understand muscle anatomy. The customized herbal poultice and rhythmic firm pressure were sheer perfection.",
                  initials: "MV",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                  avatarBg: "from-[#D4A373] to-[#8C6A43]",
                },
                {
                  name: "Aanya & Rahul K.",
                  ritual: "Couples Harmony Suite",
                  stars: 5,
                  quote: "Our 90-minute synchronized couples massage with fresh rose petal immersion bath was pure bliss. The best anniversary retreat we could have wished for.",
                  initials: "AR",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                  avatarBg: "from-[#D4A373] to-[#B07D54]",
                },
                {
                  name: "Elena Rostova",
                  ritual: "Ancient Shirodhara & Facial",
                  stars: 5,
                  quote: "The warm Ayurvedic Shirodhara oil stream over the forehead followed by botanical lymphatic drainage left my mind deeply rested and skin luminous.",
                  initials: "ER",
                  tagColor: "bg-[#E3BA8F]/20 text-[#E3BA8F] border-[#E3BA8F]/30",
                  avatarBg: "from-[#D4A373] to-[#8C6A43]",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="w-[380px] sm:w-[420px] rounded-3xl bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] border border-[#544133] hover:border-[#D4A373] p-7 shadow-2xl flex flex-col justify-between whitespace-normal shrink-0 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#E3BA8F]">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${r.tagColor}`}>
                        Verified Guest
                      </span>
                    </div>

                    <p className="text-sm font-serif-luxury italic text-[#F5EBE1] leading-relaxed line-clamp-3">
                      “{r.quote}”
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#4A382C] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md`}>
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-sm font-serif-luxury font-bold text-white leading-tight">
                          {r.name}
                        </div>
                        <div className="text-[11px] text-[#D4C4B7] font-light">
                          {r.ritual}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
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
                  name: "David Lin",
                  ritual: "Royal Thai Yoga & Stretching",
                  stars: 5,
                  quote: "The traditional Thai passive stretching restored spinal mobility I had not felt in years. World-class master certified specialists.",
                  initials: "DL",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                  avatarBg: "from-[#2D6A4F] to-[#1B4332]",
                },
                {
                  name: "Kavita Mehta",
                  ritual: "Signature Botanical Steam & Sauna",
                  stars: 5,
                  quote: "Stepping into the eucalyptus mist chamber followed by the cedar sauna melted weeks of corporate stress in under an hour.",
                  initials: "KM",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                  avatarBg: "from-[#2D6A4F] to-[#1B4332]",
                },
                {
                  name: "Sophia Laurent",
                  ritual: "Holistic Dosha Balancing",
                  stars: 5,
                  quote: "From the warm herbal welcome elixir to the custom blended essential oils, every detail at New Sara Spa felt truly transformative.",
                  initials: "SL",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                  avatarBg: "from-[#2D6A4F] to-[#1B4332]",
                },
                {
                  name: "Arjun Singhania",
                  ritual: "VIP Acoustic Sanctuary Suite",
                  stars: 5,
                  quote: "Complete acoustic silence, warm alabaster lighting, and five-star private service. It isn’t just a spa; it is genuine restoration.",
                  initials: "AS",
                  tagColor: "bg-[#A7E8CD]/20 text-[#A7E8CD] border-[#A7E8CD]/30",
                  avatarBg: "from-[#2D6A4F] to-[#1B4332]",
                },
              ].map((r, idx) => (
                <div
                  key={idx}
                  className="w-[380px] sm:w-[420px] rounded-3xl bg-gradient-to-b from-[#142318] via-[#0E1B13] to-[#08120C] border border-[#2D4536] hover:border-[#52B788] p-7 shadow-2xl flex flex-col justify-between whitespace-normal shrink-0 transition-all duration-300 hover:scale-[1.02] backdrop-blur-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-[#A7E8CD]">
                        {[...Array(r.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current drop-shadow-sm" />
                        ))}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${r.tagColor}`}>
                        Verified Guest
                      </span>
                    </div>

                    <p className="text-sm font-serif-luxury italic text-[#E6F4EC] leading-relaxed line-clamp-3">
                      “{r.quote}”
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#233529] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-md`}>
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-sm font-serif-luxury font-bold text-white leading-tight">
                          {r.name}
                        </div>
                        <div className="text-[11px] text-[#A7E8CD] font-light">
                          {r.ritual}
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#52B788]" />
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
