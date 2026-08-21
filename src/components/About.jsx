import React, { useState, Suspense, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useSEO from "../hooks/useSEO";
// import ImageSlider3D from "@/components/lightswind/3d-image-slider"
import ImageSlider3D from "@/components/lightswind/3d-image-slider"
import {
  Sparkles, Heart, Shield, Award, Users, Leaf,
  Star, CheckCircle2, ArrowRight, Clock, Droplets,
  Compass, Flame, Eye, MapPin, Calendar, HeartHandshake,
  ChevronLeft, ChevronRight, Layers, ArrowUpRight
} from "lucide-react";
import About3DCanvas from "./3d/About3DCanvas";
import spa1Img from "../assets/spa1.png";
import spa2Img from "../assets/spa2.png";
import spa3Img from "../assets/spa3.png";
import spa4Img from "../assets/spa4.png";
import spa5Img from "../assets/spa5.png";
import spa6Img from "../assets/spa6.png";
import spa7Img from "../assets/spa7.png";
import spa8Img from "../assets/spa8.png";
import spa9Img from "../assets/spa9.png";
import spa10Img from "../assets/spa10.png";
import spa11Img from "../assets/spa11.png";
import spa12Img from "../assets/spa12.png";
import spa13Img from "../assets/spa13.png";
import spaHeroImg from "../assets/spahero.png";
import logo from "../assets/logo.png";

export default function About({ onOpenBooking }) {
  const [activeMilestone, setActiveMilestone] = useState(null);

  useSEO({
    title: "About Us — NEW SARA SPA | Our Heritage & Philosophy",
    description: "Discover the heritage of Sara Spa — a luxury sanctuary uniting centuries-old Ayurvedic botanical rituals with modern restorative wellness.",
    canonical: "/about"
  });

  const stats = [
    { value: "12+", label: "Years of Mastery", sub: "Since 2012" },
    { value: "100%", label: "Organic Botanicals", sub: "Pure Cold-Pressed Oils" },
    { value: "15+", label: "Master Therapists", sub: "Certified Practitioners" },
    { value: "4.9 ★", label: "Guest Satisfaction", sub: "Over 1,200+ Reviews" },
  ];

  // Exact card structures matching New Sara Spa signature standards
  const diagonalCards = [
    {
      tag: "PERSONALIZED THERAPY",
      tagBg: "bg-[#E3BA8F]/30 text-[#4A2406]",
      title: "Customized Pressure & Body Rhythm Alignment",
      desc: "Certified master therapists tailoring every stroke and pressure point to dissolve deep physiological fatigue.",
      image: spa6Img,
      bg: "bg-[#FDF6EE]",
      titleColor: "text-[#3D1E08]",
      descColor: "text-[#6E421E]",
      btnStyle: "bg-[#3D1E08] text-white hover:bg-[#B07D54]",
      badge: "Master Certified"
    },
    {
      tag: "HERBAL ALCHEMY",
      tagBg: "bg-[#A7E8CD] text-[#0D3B26]",
      title: "100% Organic Ayurvedic Botanical Poultices",
      desc: "Pure cold-pressed mountain herbs, warm sesame oils, and botanical poultices prepared fresh daily.",
      image: spa7Img,
      bg: "bg-[#EAF7F0]",
      titleColor: "text-[#0F291E]",
      descColor: "text-[#285744]",
      btnStyle: "bg-[#0F291E] text-white hover:bg-[#2D6A4F]",
      badge: "100% Organic"
    },
    {
      tag: "SENSORY SANCTUARY",
      tagBg: "bg-[#D4EAF7] text-[#133A52]",
      title: "Acoustically Tuned Private VIP Suites",
      desc: "Alabaster ambient lighting, soft botanical aromatherapy mist, and uninterrupted soundscape meditation.",
      image: spa2Img,
      bg: "bg-[#EBF5FB]",
      titleColor: "text-[#122E40]",
      descColor: "text-[#345B73]",
      btnStyle: "bg-[#122E40] text-white hover:bg-[#1D4E89]",
      badge: "Private VIP Suite"
    },
    {
      tag: "HYDRO & THERMAL",
      tagBg: "bg-[#FDE2D0] text-[#5C2B09]",
      title: "Private Jacuzzi & Eucalyptus Steam Rituals",
      desc: "Mineral magnesium hydrotherapy soaking tub followed by soothing infrared cedar sauna detoxification.",
      image: spa4Img,
      bg: "bg-[#FEF5ED]",
      titleColor: "text-[#4A2406]",
      descColor: "text-[#734722]",
      btnStyle: "bg-[#4A2406] text-white hover:bg-[#B07D54]",
      badge: "Hydrothermal"
    },
    {
      tag: "BIO-ENERGETIC FLOW",
      tagBg: "bg-[#FAD2E1] text-[#5C162E]",
      title: "Synchronized Couples Harmony & Floral Bath",
      desc: "Secluded sanctuary suite with dual-therapist synchronized massage and fresh aromatic petal immersion.",
      image: spa1Img,
      bg: "bg-[#FDF0F5]",
      titleColor: "text-[#450F22]",
      descColor: "text-[#732943]",
      btnStyle: "bg-[#450F22] text-white hover:bg-[#B07D54]",
      badge: "Couples Ritual"
    },
    {
      tag: "RADIANCE ALCHEMY",
      tagBg: "bg-[#E8D7F1] text-[#3E1F52]",
      title: "Warm Shirodhara & Botanical Facial Care",
      desc: "Warm herb-infused oil stream over the third eye paired with cold-pressed botanical lymphatic facial drainage.",
      image: spa3Img,
      bg: "bg-[#F8F2FC]",
      titleColor: "text-[#2C123D]",
      descColor: "text-[#583373]",
      btnStyle: "bg-[#2C123D] text-white hover:bg-[#B07D54]",
      badge: "Radiance Care"
    }
  ];

  const milestones = [
    {
      year: "2012",
      tag: "BRIGHT BEGINNINGS",
      title: "The Vision Born",
      desc: "A spark of ancient Ayurvedic wisdom ignited our first holistic healing sanctuary.",
      icon: Sparkles,
      color: "#B07D54",
      bgGradient: "from-[#8C6A43] to-[#B07D54]"
    },
    {
      year: "2015",
      tag: "SANCTUARY EXPANSION",
      title: "Private Suites",
      desc: "Expanded to 12 temperature-controlled VIP suites with custom teakwood tables.",
      icon: Leaf,
      color: "#2E5A44",
      bgGradient: "from-[#204231] to-[#3B6E52]"
    },
    {
      year: "2018",
      tag: "HYDROTHERAPY",
      title: "Jacuzzi Chambers",
      desc: "Introduced magnesium mineral soaking jets & eucalyptus restorative steam.",
      icon: Droplets,
      color: "#C59B6D",
      bgGradient: "from-[#9E7245] to-[#C59B6D]"
    },
    {
      year: "2021",
      tag: "SHINING MASTERY",
      title: "National Acclaim",
      desc: "Recognized as premier destination for couples therapy & Shirodhara rituals.",
      icon: Award,
      color: "#8A3A40",
      bgGradient: "from-[#632227] to-[#993E46]"
    },
    {
      year: "2024",
      tag: "ACOUSTIC ADVANCEMENT",
      title: "Soundscape Suites",
      desc: "Unveiled state-of-the-art acoustic meditation suites & botanical apothecary.",
      icon: Compass,
      color: "#6B5A4E",
      bgGradient: "from-[#4A3B32] to-[#735C4E]"
    },
    {
      year: "2026",
      tag: "MODERN HORIZON",
      title: "Sanctuary Standard",
      desc: "Setting the gold standard in bespoke body, mind & spirit rejuvenation.",
      icon: Star,
      color: "#B07D54",
      bgGradient: "from-[#B07D54] to-[#E3BA8F]"
    }
  ];

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] selection:bg-[#D4A373] selection:text-white w-full">

      {/* ─────────────────────────────────────────────────────────────────────────
          1. HERO SECTION — Full-Bleed spa7.png Background & Complete Visibility
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-36 sm:pt-40 md:pt-44 lg:pt-48 pb-20 md:pb-28 bg-[#FAF7F2]">

        {/* Full-Bleed spa7.png Background with Perfect Faces Visibility */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={spa7Img}
            alt="Sara Spa Beauty & Wellness"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.03]"
          />
          {/* Balanced Soft Luxury White Radiance */}
          <div className="absolute inset-0 bg-radial from-white/55 via-white/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/30 via-transparent to-[#FAF7F2]/70 pointer-events-none" />
        </div>

        {/* 3D Three.js Floating Ambient Particles */}
        <Suspense fallback={null}>
          <About3DCanvas />
        </Suspense>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold tracking-tight text-[#2D241E] leading-[1.08]"
          >
            A Relaxing Space for <br className="hidden sm:block" />
            <span className="skin-gradient-text italic font-normal">Body, Mind & Spirit</span>
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#524339] font-sans font-normal leading-relaxed drop-shadow-xs"
          >
            Born from a deep reverence for ancient Ayurvedic healing and sensory architecture, Sara Spa offers a timeless retreat from the modern world.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.22em] shadow-xl shadow-[#2D241E]/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#E3BA8F]" />
              <span>Book Appointment</span>
            </button>

            <Link
              to="/services"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/90 hover:bg-white border border-[#E5D6C4] text-[#2D241E] font-bold text-xs uppercase tracking-[0.22em] shadow-md hover:border-[#B07D54] hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Interactive Floating Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#EFE6DC] shadow-sm hover:shadow-xl hover:shadow-[#D4A373]/15 hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#B07D54] group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#2D241E] mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#8C7364] mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          2. THE SARA ESSENCE — Traditional Thai & Ayurvedic Stretching (spa6.png)
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Interactive Layered 3D Frames Featuring spa6.png */}
            <div className="lg:col-span-6 relative">
              {/* Main Photo: Traditional Thai Stretching with Master Therapist */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-[#D4A373]/20 border border-[#E5D6C4] aspect-[4/3] bg-[#2D241E] group">
                <img
                  src={spa6Img}
                  alt="Sara Spa Traditional Thai Yoga Stretching"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E3BA8F] font-bold">Traditional Mastery</span>
                  <h4 className="text-xl sm:text-2xl font-serif-luxury font-bold">Ancient Thai Passive Stretching</h4>
                  <p className="text-xs text-slate-200 mt-0.5">Certified practitioners restoring meridian flow and spinal flexibility.</p>
                </div>
              </div>

              {/* Floating Inset Card: Candlelit Head Massage (spa3.png) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-60 sm:w-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white group hidden sm:block">
                <div className="h-32 overflow-hidden">
                  <img
                    src={spa3Img}
                    alt="Candlelit Serenity Therapy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 space-y-1">
                  <div className="text-xs font-serif-luxury font-bold text-[#2D241E]">
                    Candlelit Head & Facial Care
                  </div>
                  <div className="text-[10px] text-[#8C6A43] font-semibold uppercase tracking-wider">
                    Pure Serenity Therapy
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E] leading-tight">
                Where Ancient Rituals <br />
                <span className="italic skin-gradient-text font-normal">Meet Modern Serenity.</span>
              </h2>

              <div className="space-y-4 max-w-xl text-[#5C4D44] text-base sm:text-lg font-light leading-relaxed">
                <p>
                  At Sara Spa, we believe wellness is not a momentary indulgence, but a sacred lifestyle practice. We have spent over a decade perfecting therapies that dissolve physical fatigue while nurturing inner stillness.
                </p>
                <p>
                  Each treatment begins with a mindful consultation, allowing our certified therapists to select customized essential oil blends, thermal pressure techniques, and herbal remedies aligned with your unique physiological needs.
                </p>
              </div>

              {/* Checkmark Pillars */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#2D241E]">
                  <CheckCircle2 className="w-5 h-5 text-[#B07D54] shrink-0" />
                  <span>Custom Ayurvedic essential oil blending per session</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2D241E]">
                  <CheckCircle2 className="w-5 h-5 text-[#B07D54] shrink-0" />
                  <span>Master practitioners certified in ancient Thai & Swedish methods</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#2D241E]">
                  <CheckCircle2 className="w-5 h-5 text-[#B07D54] shrink-0" />
                  <span>Acoustically tuned suites for uninterrupted meditation</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#2D241E]/15 hover:scale-[1.02] transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Book A Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#E3BA8F]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          3. THE FOUR PILLARS — Rich Brown Diagonal Sweeper Section
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] text-white relative overflow-hidden border-y border-[#544133] shadow-[0_20px_50px_rgba(44,31,22,0.35)]">
        {/* Luxury Warm Amber & Gold Radial Glows */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#D4A373]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#B07D54]/12 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:pl-12 lg:pr-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

            {/* Left: Section Brand, Display Heading & Info */}
            <div className="lg:col-span-4 space-y-7 lg:pr-6">

              {/* Brand Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-[#D4A373]/30 backdrop-blur-md shadow-inner">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <span className="text-xs font-semibold tracking-wider text-[#E3BA8F] uppercase">
                  Guiding Principles
                </span>
              </div>

              {/* Big Display Title matching New Sara Spa Standards */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold tracking-tight text-white leading-[1.05]">
                The Sara <br />
                <span className="gold-gradient-text italic font-normal">
                  Sanctuary Pillars
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#D4C4B7] leading-relaxed font-light">
                Discover the foundational pillars that define New Sara Spa: certified master care, organic botanical alchemy, private hydrothermal Jacuzzis, and acoustically tuned treatment sanctuaries.
              </p>

              {/* Bottom Feature Badges & Action */}
              <div className="pt-2 space-y-5">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A373]/20 text-xs text-[#E3BA8F] font-medium">
                    100% Organic
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A373]/20 text-xs text-[#E3BA8F] font-medium">
                    Master Certified
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A373]/20 text-xs text-[#E3BA8F] font-medium">
                    VIP Suites
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/40 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Treatment</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Diagonal Showcase Sweeper Deck (Right Bleed & Zero Right Padding) */}
            <div className="lg:col-span-8 relative h-[650px] sm:h-[720px] overflow-hidden lg:-mr-8 xl:-mr-16" style={{ touchAction: 'pan-y' }}>

              {/* Top & Bottom Soft Fading Masks for Seamless Endless Flow */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-[#2C1F16] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#160E0A] to-transparent z-20 pointer-events-none" />

              {/* Diagonal Container Tilted Right-to-Left (Positive Rotate) Bleeding Out */}
              <div className="relative rotate-[3deg] md:rotate-[6deg] lg:rotate-[8deg] transform scale-95 sm:scale-100 origin-center w-full lg:w-[110%]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">

                  {/* Column 1 — Continuous Seamless Upward Scroll */}
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
                    className="space-y-5 md:space-y-6 pointer-events-none"
                  >
                    {[...diagonalCards, ...diagonalCards].map((c, i) => (
                      <div
                        key={i}
                        onClick={onOpenBooking}
                        className={`group relative rounded-[28px] p-6 sm:p-7 ${c.bg} shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[250px] border border-black/5 pointer-events-auto`}
                      >
                        {/* Top Tag */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest ${c.tagBg}`}>
                            {c.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-2 relative z-10 max-w-[68%]">
                          <h3 className={`text-lg sm:text-xl font-bold leading-tight ${c.titleColor}`}>
                            {c.title}
                          </h3>
                          <p className={`text-xs leading-relaxed line-clamp-2 ${c.descColor}`}>
                            {c.desc}
                          </p>
                        </div>

                        {/* Bottom Learn More Button */}
                        <div className="pt-4 mt-auto flex items-center justify-between relative z-10">
                          <button
                            className={`px-5 py-2 rounded-full text-xs font-bold transition-transform group-hover:scale-105 ${c.btnStyle}`}
                          >
                            Learn more
                          </button>
                        </div>

                        {/* Right Photo Illustration */}
                        <div className="absolute -bottom-2 -right-2 w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Column 2 — Continuous Seamless Downward Scroll */}
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    className="space-y-5 md:space-y-6 pointer-events-none"
                  >
                    {[...diagonalCards.slice(3, 6), ...diagonalCards.slice(0, 3), ...diagonalCards.slice(3, 6), ...diagonalCards.slice(0, 3)].map((c, i) => (
                      <div
                        key={i}
                        onClick={onOpenBooking}
                        className={`group relative rounded-[28px] p-6 sm:p-7 ${c.bg} shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[250px] border border-black/5 pointer-events-auto`}
                      >
                        {/* Top Tag */}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest ${c.tagBg}`}>
                            {c.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-2 relative z-10 max-w-[68%]">
                          <h3 className={`text-lg sm:text-xl font-bold leading-tight ${c.titleColor}`}>
                            {c.title}
                          </h3>
                          <p className={`text-xs leading-relaxed line-clamp-2 ${c.descColor}`}>
                            {c.desc}
                          </p>
                        </div>

                        {/* Bottom Learn More Button */}
                        <div className="pt-4 mt-auto flex items-center justify-between relative z-10">
                          <button
                            className={`px-5 py-2 rounded-full text-xs font-bold transition-transform group-hover:scale-105 ${c.btnStyle}`}
                          >
                            Learn more
                          </button>
                        </div>

                        {/* Right Photo Illustration */}
                        <div className="absolute -bottom-2 -right-2 w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-4 border-white/60 shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          4. VISUAL HERITAGE GALLERY — Master Rituals & Sanctuary Spaces
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#FAF7F2] relative border-t border-[#EAE0D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2D241E]">
              Moments of <span className="italic font-normal skin-gradient-text">Pure Serenity</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6B5A4E] max-w-xl mx-auto font-light leading-relaxed">
              Step inside our acoustically insulated suites, thermal chambers, and synchronized body therapy sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Gallery Card 1 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373]">
              <img
                src={spa8Img}
                alt="Traditional Thai Yoga Stretching"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E3BA8F]/20 text-[#E3BA8F] border border-[#E3BA8F]/30 text-[9px] uppercase tracking-widest font-bold">
                  Thai Traditional
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  Passive Stretching & Alignment
                </h4>
              </div>
            </div>

            {/* Gallery Card 2 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373]">
              <img
                src={spa9Img}
                alt="Couples Rejuvenation Suite"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A7E8CD]/20 text-[#A7E8CD] border border-[#A7E8CD]/30 text-[9px] uppercase tracking-widest font-bold">
                  Suite Experience
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  Couples Synchronized Therapy
                </h4>
              </div>
            </div>

            {/* Gallery Card 3 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373]">
              <img
                src={spa10Img}
                alt="Signature Ayurvedic Shirodhara"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E3BA8F]/20 text-[#E3BA8F] border border-[#E3BA8F]/30 text-[9px] uppercase tracking-widest font-bold">
                  Ayurvedic Ritual
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  Warm Shirodhara Scalp Therapy
                </h4>
              </div>
            </div>

            {/* Gallery Card 4 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373] sm:col-span-2 lg:col-span-1">
              <img
                src={spa11Img}
                alt="Heated Botanical Lava Stones"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A7E8CD]/20 text-[#A7E8CD] border border-[#A7E8CD]/30 text-[9px] uppercase tracking-widest font-bold">
                  Thermal Alchemy
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  Heated Botanical Lava Stones
                </h4>
              </div>
            </div>

            {/* Gallery Card 5 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373]">
              <img
                src={spa12Img}
                alt="Luxury VIP Suite"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#E3BA8F]/20 text-[#E3BA8F] border border-[#E3BA8F]/30 text-[9px] uppercase tracking-widest font-bold">
                  Private Sanctuary
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  VIP Teakwood Treatment Suite
                </h4>
              </div>
            </div>

            {/* Gallery Card 6 */}
            <div className="group relative rounded-[28px] overflow-hidden aspect-[4/3] bg-[#2D241E] shadow-[0_15px_35px_rgba(45,36,30,0.08)] hover:shadow-2xl transition-all duration-500 border border-[#EFE6DC] hover:border-[#D4A373]">
              <img
                src={spa13Img}
                alt="Candlelit Facial & Relaxation"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1814]/90 via-[#1F1814]/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#A7E8CD]/20 text-[#A7E8CD] border border-[#A7E8CD]/30 text-[9px] uppercase tracking-widest font-bold">
                  Luminosity Lounge
                </span>
                <h4 className="text-lg font-serif-luxury font-bold leading-snug">
                  Candlelit Head & Facial Care
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

              {/* ─────────────────────────────────────────────────────────────────────────
          5. MILESTONES OF EXCELLENCE — Rich Dark Brown Infographic Pathway
      ───────────────────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-8 md:pt-24 md:pb-10 bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] relative text-white border-t border-[#544133] shadow-[0_20px_50px_rgba(44,31,22,0.35)] mb-8 md:mb-12 z-20">
        
        {/* Warm Golden Spa Ambient Glow in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#D4A373]/20 via-[#B07D54]/12 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B6D]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4A373]/12 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-12 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-serif-luxury font-bold text-white">
              Milestones of <span className="gold-gradient-text italic font-normal">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base text-[#D4C4B7] max-w-xl mx-auto font-light">
              Over a decade of dedication, clinical mastery, and continuous innovation in holistic wellness.
            </p>
          </div>

          {/* ── DESKTOP: Connected Horizontal Undulating Wave Pathway ── */}
          <div className="hidden lg:block relative py-4">
            
            {/* SVG Connecting Flow Line Behind Nodes */}
            <svg
              className="absolute top-1/2 left-0 w-full -translate-y-1/2 h-20 pointer-events-none z-0"
              viewBox="0 0 1200 120"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Outer Glow Path */}
              <path
                d="M 60 60 L 260 60 L 460 60 L 660 60 L 860 60 L 1060 60 L 1140 60"
                stroke="#D4A373"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
              />
              {/* Animated Inner Dash Line */}
              <path
                d="M 60 60 L 260 60 L 460 60 L 660 60 L 860 60 L 1060 60 L 1140 60"
                stroke="#F3D7B8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>

            {/* 6 Milestone Nodes Grid */}
            <div className="grid grid-cols-6 gap-3 relative z-10">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                const isEven = idx % 2 === 0;
                const isHovered = activeMilestone === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveMilestone(idx)}
                    onMouseLeave={() => setActiveMilestone(null)}
                    className="flex flex-col items-center justify-between min-h-[300px] group transition-all duration-300"
                  >
                    {/* TOP HALF: Either Year Badge OR Description */}
                    <div className="h-[115px] flex flex-col items-center justify-end text-center w-full px-1">
                      {isEven ? (
                        /* Top Year with Vertical Dotted Stem */
                        <div className="flex flex-col items-center space-y-1.5">
                          <span className="text-2xl font-serif-luxury font-bold text-white tracking-wide group-hover:scale-115 transition-all drop-shadow-md">
                            {m.year}
                          </span>
                          <div className="w-0.5 h-6 border-l-2 border-dashed border-white/40" />
                        </div>
                      ) : (
                        /* Top Content Card */
                        <div className="space-y-1 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 group-hover:border-[#D4A373] group-hover:bg-white/15 group-hover:shadow-xl transition-all duration-300 shadow-md text-white">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-[#E3BA8F] block">
                            {m.tag}
                          </span>
                          <h4 className="text-xs font-serif-luxury font-bold text-white">
                            {m.title}
                          </h4>
                          <p className="text-[10px] text-[#D4C4B7] leading-relaxed line-clamp-2 font-light">
                            {m.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CENTER: Glowing Icon Medallion */}
                    <div className="relative my-2">
                      {/* Pulse Glow Ring */}
                      <div
                        className={`absolute -inset-2.5 rounded-full transition-all duration-500 blur-sm ${
                          isHovered
                            ? "bg-[#D4A373]/40 scale-130 opacity-100"
                            : "bg-[#D4A373]/15 scale-100 opacity-60 group-hover:opacity-100"
                        }`}
                      />

                      {/* Main Medallion Button */}
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-tr ${m.bgGradient} p-1 shadow-2xl flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-115 border-2 border-white/50`}
                      >
                        <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center text-white backdrop-blur-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM HALF: Either Description OR Year Badge */}
                    <div className="h-[115px] flex flex-col items-center justify-start text-center w-full px-1">
                      {!isEven ? (
                        /* Bottom Year with Vertical Dotted Stem */
                        <div className="flex flex-col items-center space-y-1.5">
                          <div className="w-0.5 h-6 border-l-2 border-dashed border-white/40" />
                          <span className="text-2xl font-serif-luxury font-bold text-white tracking-wide group-hover:scale-115 transition-all drop-shadow-md">
                            {m.year}
                          </span>
                        </div>
                      ) : (
                        /* Bottom Content Card */
                        <div className="space-y-1 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 group-hover:border-[#D4A373] group-hover:bg-white/15 group-hover:shadow-xl transition-all duration-300 shadow-md text-white">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-[#E3BA8F] block">
                            {m.tag}
                          </span>
                          <h4 className="text-xs font-serif-luxury font-bold text-white">
                            {m.title}
                          </h4>
                          <p className="text-[10px] text-[#D4C4B7] leading-relaxed line-clamp-2 font-light">
                            {m.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE & TABLET: Vertical Connected Zigzag Infographic ── */}
          <div className="lg:hidden relative pl-6 sm:pl-10 space-y-8">
            {/* Vertical Dotted Track Line */}
            <div className="absolute left-10 sm:left-14 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-white/30" />

            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                  {/* Left Glowing Medallion */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr ${m.bgGradient} p-0.5 shadow-xl border-2 border-white/50 flex items-center justify-center text-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Right Content Card */}
                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md group-hover:border-[#D4A373] transition-all space-y-1.5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-serif-luxury font-bold text-white">
                        {m.year}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-[#E3BA8F] border border-white/20">
                        {m.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-serif-luxury font-bold text-[#2D241E]">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#6B5A4E] leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Full-width Smooth Organic Convex Arc Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none translate-y-[98%]">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-7 sm:h-10 md:h-14 block">
            <path
              d="M 0,0 C 360,50 1080,50 1440,0 L 1440,0 L 0,0 Z"
              fill="#160E0A"
            />
            <path
              d="M 0,0 C 360,50 1080,50 1440,0"
              stroke="#544133"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────────
          6. LUXURY GLASSMORPHISM CTA SECTION
      ───────────────────────────────────────────────────────────────────────── */}


    </div>
  );
}
