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
    { value: "10+", label: "Spa Specialist", sub: "Certified Therapists" },
    { value: "1000+", label: "Happy Clients", sub: "Satisfied Guests" },
    { value: "4.6+ ★", label: "Rating", sub: "Google Reviews" },
  ];

  // Exact card structures matching NEW Sara Spa signature standards
  const diagonalCards = [
    {
      tag: "PERSONALIZED THERAPY",
      tagBg: "bg-[#E3BA8F]/30 text-[#4A2406]",
      title: "Traditional Thai & Deep Tissue Alignment",
      desc: "Certified master therapists tailoring every stroke, pressure point, and passive stretch to dissolve deep physiological fatigue.",
      image: spa6Img,
      bg: "bg-[#FDF6EE]",
      titleColor: "text-[#3D1E08]",
      descColor: "text-[#6E421E]",
      btnStyle: "bg-[#3D1E08] text-white hover:bg-[#B07D54]",
      badge: "Master Certified"
    },
    {
      tag: "HERBAL POTLI RITUAL",
      tagBg: "bg-[#A7E8CD] text-[#0D3B26]",
      title: "Ayurvedic Potli & Cold-Pressed Herbal Oils",
      desc: "Warm botanical herbal poultices and pure cold-pressed oils prepared fresh to soothe muscle soreness and boost vitality.",
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
      desc: "Private climate-controlled sanctuary suites in Wakad with ambient lighting, soothing spa music, and complete acoustic calm.",
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
      title: "Bangkok Jacuzzi & Eucalyptus Steam Bath",
      desc: "Hydrotherapy Jacuzzi milk & honey bath followed by detoxifying eucalyptus steam bath with every session.",
      image: spa4Img,
      bg: "bg-[#FEF5ED]",
      titleColor: "text-[#4A2406]",
      descColor: "text-[#734722]",
      btnStyle: "bg-[#4A2406] text-white hover:bg-[#B07D54]",
      badge: "Hydrothermal"
    },
    {
      tag: "COUPLES HARMONY",
      tagBg: "bg-[#FAD2E1] text-[#5C162E]",
      title: "Synchronized Couples Massage & Petal Bath",
      desc: "Romantic private suite with dual-therapist synchronized Balinese or Swedish massage and aromatic floral immersion.",
      image: spa1Img,
      bg: "bg-[#FDF0F5]",
      titleColor: "text-[#450F22]",
      descColor: "text-[#732943]",
      btnStyle: "bg-[#450F22] text-white hover:bg-[#B07D54]",
      badge: "Couples Ritual"
    },
    {
      tag: "BODY SCRUB & GLOW",
      tagBg: "bg-[#E8D7F1] text-[#3E1F52]",
      title: "Full Body Massage & Herbal Body Scrub",
      desc: "Rejuvenating full body massage paired with organic exfoliating body scrub for radiant, glowing skin and complete wellness.",
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
      year: "2024",
      tag: "SANCTUARY FOUNDED",
      title: "Wakad Grand Opening",
      desc: "Inaugurated NEW Sara Spa at Wbiz, Bhumkar Chowk, bringing authentic holistic wellness to Wakad, Pune.",
      icon: Sparkles,
      color: "#B07D54",
      bgGradient: "from-[#8C6A43] to-[#B07D54]"
    },
    {
      year: "2024",
      tag: "VIP EXPANSION",
      title: "Acoustic VIP Suites",
      desc: "Unveiled private climate-controlled treatment suites tailored for individual and couples relaxation.",
      icon: Leaf,
      color: "#2E5A44",
      bgGradient: "from-[#204231] to-[#3B6E52]"
    },
    {
      year: "2025",
      tag: "HYDROTHERAPY",
      title: "Bangkok Jacuzzi Chambers",
      desc: "Introduced therapeutic Jacuzzi hydro-massage baths and eucalyptus detox steam sessions.",
      icon: Droplets,
      color: "#C59B6D",
      bgGradient: "from-[#9E7245] to-[#C59B6D]"
    },
    {
      year: "2025",
      tag: "AYURVEDIC MASTERY",
      title: "Herbal Potli Rituals",
      desc: "Curated 100% organic cold-pressed oil therapies, Thai passive stretching, and deep tissue programs.",
      icon: Award,
      color: "#8A3A40",
      bgGradient: "from-[#632227] to-[#993E46]"
    },
    {
      year: "2025",
      tag: "COMMUNITY ACCLAIM",
      title: "1,000+ Happy Guests",
      desc: "Celebrated top 4.6+ rating on Google Maps with over 1,000+ satisfied clients across Pune.",
      icon: Compass,
      color: "#6B5A4E",
      bgGradient: "from-[#4A3B32] to-[#735C4E]"
    },
    {
      year: "2026",
      tag: "MODERN HORIZON",
      title: "24/7 Sanctuary Standard",
      desc: "Elevating wellness with 24-hour round-the-clock bespoke therapies and certified master care in Wakad.",
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

          {/* Interactive Floating Stats Bar - 3 Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-[#EFE6DC] shadow-sm hover:shadow-xl hover:shadow-[#D4A373]/15 hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-[#B07D54] group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-[#2D241E] mt-1.5 font-serif-luxury">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#8C7364] mt-0.5 font-medium">
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
      <section className="py-10 md:py-20 bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] text-white relative overflow-hidden border-y border-[#544133] shadow-[0_20px_50px_rgba(44,31,22,0.35)]">
        {/* Luxury Warm Amber & Gold Radial Glows */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#D4A373]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#B07D54]/12 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:pl-12 lg:pr-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">

            {/* Left: Section Brand, Display Heading & Info */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:pr-6">

              {/* Brand Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D4A373]/30 backdrop-blur-md shadow-inner">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] flex items-center justify-center text-white font-bold text-xs">
                  S
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#E3BA8F] uppercase">
                  Guiding Principles
                </span>
              </div>

              {/* Big Display Title matching New Sara Spa Standards */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold tracking-tight text-white leading-[1.08]">
                The Sara <br />
                <span className="gold-gradient-text italic font-normal">
                  Sanctuary Pillars
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#D4C4B7] leading-relaxed font-light">
                Discover the foundational pillars that define NEW Sara Spa: certified master therapists, authentic Ayurvedic potli therapies, Bangkok-style private Jacuzzis, and acoustically insulated treatment suites in Wakad, Pune.
              </p>

              {/* Bottom Feature Badges & Action */}
              <div className="pt-1 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-[#D4A373]/20 text-[11px] sm:text-xs text-[#E3BA8F] font-medium">
                    100% Organic
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-[#D4A373]/20 text-[11px] sm:text-xs text-[#E3BA8F] font-medium">
                    Master Certified
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-[#D4A373]/20 text-[11px] sm:text-xs text-[#E3BA8F] font-medium">
                    VIP Suites
                  </span>
                </div>

                <div>
                  <button
                    onClick={onOpenBooking}
                    className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4A373] to-[#B07D54] hover:from-[#E3BA8F] hover:to-[#C59B6D] text-[#2D241E] font-bold text-xs uppercase tracking-[0.2em] shadow-xl shadow-black/40 hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Treatment</span>
                    <ArrowUpRight className="w-4 h-4 text-[#2D241E]" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Diagonal Showcase Sweeper Deck (Minimized for Mobile, Spacious for Desktop) */}
            <div className="lg:col-span-8 relative h-[440px] sm:h-[520px] md:h-[620px] overflow-hidden" style={{ touchAction: 'pan-y' }}>

              {/* Top & Bottom Soft Fading Masks for Seamless Endless Flow */}
              <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-b from-[#2C1F16] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-[#160E0A] to-transparent z-20 pointer-events-none" />

              {/* Refined Perspective Container (Ensures 100% text and card visibility on both columns) */}
              <div className="relative rotate-0 md:rotate-[2deg] transform origin-center w-full px-2 sm:px-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">

                  {/* Column 1 — Continuous Seamless Upward Scroll */}
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                    className="space-y-3 sm:space-y-4 md:space-y-5 pointer-events-none"
                  >
                    {[...diagonalCards, ...diagonalCards].map((c, i) => (
                      <div
                        key={i}
                        onClick={onOpenBooking}
                        className={`group relative rounded-[20px] sm:rounded-[26px] p-3.5 sm:p-5 ${c.bg} shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[180px] md:min-h-[200px] border border-black/5 pointer-events-auto`}
                      >
                        {/* Top Tag */}
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-2 py-0.5 rounded-md text-[8.5px] sm:text-[9.5px] uppercase font-bold tracking-wider ${c.tagBg}`}>
                            {c.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-1 sm:space-y-2 relative z-10 max-w-[62%] sm:max-w-[64%]">
                          <h3 className={`text-xs sm:text-base font-bold leading-snug ${c.titleColor}`}>
                            {c.title}
                          </h3>
                          <p className={`text-[10px] sm:text-xs leading-relaxed line-clamp-2 ${c.descColor}`}>
                            {c.desc}
                          </p>
                        </div>

                        {/* Right Photo Illustration */}
                        <div className="absolute -bottom-1 -right-1 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white/80 shadow-md group-hover:scale-105 transition-transform duration-500">
                          <img
                            src={c.image}
                            alt={c.title}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Column 2 — Continuous Seamless Downward Scroll (Offset Therapies for Variety) */}
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                    className="space-y-3 sm:space-y-4 md:space-y-5 pointer-events-none"
                  >
                    {[...diagonalCards.slice(3), ...diagonalCards.slice(0, 3), ...diagonalCards.slice(3), ...diagonalCards.slice(0, 3)].map((c, i) => (
                      <div
                        key={i}
                        onClick={onOpenBooking}
                        className={`group relative rounded-[20px] sm:rounded-[26px] p-3.5 sm:p-5 ${c.bg} shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[145px] sm:min-h-[180px] md:min-h-[200px] border border-black/5 pointer-events-auto`}
                      >
                        {/* Top Tag */}
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-2 py-0.5 rounded-md text-[8.5px] sm:text-[9.5px] uppercase font-bold tracking-wider ${c.tagBg}`}>
                            {c.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-1 sm:space-y-2 relative z-10 max-w-[62%] sm:max-w-[64%]">
                          <h3 className={`text-xs sm:text-base font-bold leading-snug ${c.titleColor}`}>
                            {c.title}
                          </h3>
                          <p className={`text-[10px] sm:text-xs leading-relaxed line-clamp-2 ${c.descColor}`}>
                            {c.desc}
                          </p>
                        </div>

                        {/* Right Photo Illustration */}
                        <div className="absolute -bottom-1 -right-1 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white/80 shadow-md group-hover:scale-105 transition-transform duration-500">
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
      <section className="py-12 md:py-20 bg-[#FAF7F2] relative border-t border-[#EAE0D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
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
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] relative text-white border-t border-[#544133] shadow-[0_20px_50px_rgba(44,31,22,0.35)] mb-8 md:mb-12 z-20">
        
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
              Our dedicated journey of certified mastery, continuous innovation, and pure holistic wellness in Wakad, Pune.
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
                  <div className="flex-1 p-4 sm:p-5 rounded-2xl bg-white/12 backdrop-blur-md border border-white/20 shadow-lg group-hover:border-[#D4A373] transition-all space-y-1.5 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-serif-luxury font-bold text-white drop-shadow-xs">
                        {m.year}
                      </span>
                      <span className="text-[9.5px] uppercase tracking-widest font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-[#FFE3C2] border border-[#D4A373]/40">
                        {m.tag}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-serif-luxury font-bold text-[#FAF7F2] drop-shadow-xs">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#F3E7D8] leading-relaxed font-normal">
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
