import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Clock, CheckCircle2, Star, Calendar, ArrowRight,
  ShieldCheck, Heart, Sparkle, Flame, Waves, Flower2, Droplets, Gem
} from "lucide-react";
import BookingModal from "./BookingModal";
import spa8Img from "../assets/spa8.png";
import spa9Img from "../assets/spa9.png";
import spa10Img from "../assets/spa10.png";
import spa11Img from "../assets/spa11.png";
import spa12Img from "../assets/spa12.png";
import spa13Img from "../assets/spa13.png";
import service3DImg from "../assets/service-3d.png";
import WalkingServiceCarriers from "./3d/WalkingServiceCarriers";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("Ayurvedic Shirodhara Therapy");

  useSEO({
    title: "Treatments & Therapies — Sara Spa | Luxury Wellness Services",
    description: "Explore Sara Spa's complete menu of traditional Ayurvedic treatments, European massages, body scrubs, and rejuvenating facial therapies.",
    canonical: "/services"
  });

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "ayurvedic", label: "Ayurvedic Rituals" },
    { id: "massage", label: "Holistic Massages" },
    { id: "hydro", label: "Hydro & Jacuzzi" },
    { id: "facial", label: "Botanical Facials" },
  ];

  const services = [
    {
      id: 1,
      title: "Ayurvedic Shirodhara Therapy",
      category: "ayurvedic",
      duration: "75 Mins",
      price: "$140",
      rating: "4.9",
      description: "A continuous, gentle stream of warm medicated herbal oil poured over the third-eye chakra to dissolve mental fatigue, soothe insomnia, and restore deep calm.",
      highlights: ["Warm Herbal Oil Flow", "Head & Scalp Massage", "Third-Eye Balance"],
      image: spa10Img,
      badge: "Signature",
      badgeTheme: "bg-[#E3BA8F]/25 text-[#7C5841] border-[#E3BA8F]/40",
      accentGlow: "group-hover:border-[#D4A373]",
      icon: Droplets,
    },
    {
      id: 2,
      title: "Abhyanga Full-Body Harmony",
      category: "ayurvedic",
      duration: "90 Mins",
      price: "$165",
      rating: "5.0",
      description: "Traditional 2-hand synchronized rhythmic massage using heated herbal oils tailored to your unique Dosha constitution.",
      highlights: ["Dosha Tailored Oils", "Synchronized Strokes", "Toxin Elimination"],
      image: spa9Img,
      badge: "Popular",
      badgeTheme: "bg-[#A7E8CD]/25 text-[#1B4332] border-[#A7E8CD]/40",
      accentGlow: "group-hover:border-[#52B788]",
      icon: Heart,
    },
    {
      id: 3,
      title: "Deep Tissue & Warm Stone Fusion",
      category: "massage",
      duration: "60 Mins",
      price: "$125",
      rating: "4.8",
      description: "Targeted therapeutic pressure combined with smooth volcanic basalt stones to melt chronic muscular tension and relieve stiff joints.",
      highlights: ["Heated Basalt Stones", "Targeted Trigger Release", "Aromatic Oils"],
      image: spa11Img,
      badge: "Therapeutic",
      badgeTheme: "bg-[#E3BA8F]/25 text-[#7C5841] border-[#E3BA8F]/40",
      accentGlow: "group-hover:border-[#D4A373]",
      icon: Flame,
    },
    {
      id: 4,
      title: "Private Jacuzzi & Rose Bath Ritual",
      category: "hydro",
      duration: "60 Mins",
      price: "$110",
      rating: "4.9",
      description: "Hydrotherapy hydro-massage infused with Himalayan pink salts, organic rose petals, and calming lavender essential oils in a private suite.",
      highlights: ["Rose Petals & Salts", "Hydro Jet Massage", "Complimentary Herbal Tea"],
      image: spa12Img,
      badge: "Couples Choice",
      badgeTheme: "bg-[#A7E8CD]/25 text-[#1B4332] border-[#A7E8CD]/40",
      accentGlow: "group-hover:border-[#52B788]",
      icon: Waves,
    },
    {
      id: 5,
      title: "Organic Kumkumadi Radiance Facial",
      category: "facial",
      duration: "60 Mins",
      price: "$95",
      rating: "4.9",
      description: "Precious saffron & 26 rare Ayurvedic herbs formulated to brighten skin tone, smooth fine lines, and impart an ethereal natural glow.",
      highlights: ["Pure Saffron Elixir", "Kansa Wand Facial Massage", "Herbal Mask"],
      image: spa13Img,
      badge: "Radiance",
      badgeTheme: "bg-[#E3BA8F]/25 text-[#7C5841] border-[#E3BA8F]/40",
      accentGlow: "group-hover:border-[#D4A373]",
      icon: Sparkles,
    },
    {
      id: 6,
      title: "Udwarthanam Herbal Powder Scrub",
      category: "ayurvedic",
      duration: "60 Mins",
      price: "$115",
      rating: "4.8",
      description: "Invigorating dry scrub using warm herbal grains and powders to improve lymphatic drainage, smooth skin texture, and promote metabolism.",
      highlights: ["Lymphatic Drainage", "Skin Polishing", "Metabolism Boost"],
      image: spa8Img,
      badge: "Detox Ritual",
      badgeTheme: "bg-[#A7E8CD]/25 text-[#1B4332] border-[#A7E8CD]/40",
      accentGlow: "group-hover:border-[#52B788]",
      icon: Flower2,
    },
  ];

  const filtered = selectedCategory === "all" ? services : services.filter(s => s.category === selectedCategory);

  const handleBook = (name) => {
    setBookingService(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] pt-28 pb-24 relative overflow-hidden">
      
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Luxury 3D Animated Walking Service Hero Banner (Compact Size) ── */}
      <section className="relative pt-0 pb-6 md:pb-8 text-center">
        <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          
          {/* Animated 7-Character Walking Service Carriers */}
          <WalkingServiceCarriers />
        </div>
      </section>

      {/* ── Category Filter Pills ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#2D241E] via-[#3D3028] to-[#2D241E] text-white shadow-lg shadow-[#2D241E]/20 scale-105"
                  : "bg-white text-[#6B5A4E] border border-[#E8DFD5] hover:border-[#D4A373] hover:bg-[#FAF4ED] shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Services Grid with Beam Border Glows ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filtered.map((service) => {
              const ServiceIcon = service.icon || Sparkles;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className={`bg-white rounded-[32px] overflow-hidden border border-[#EAE0D3] shadow-[0_10px_30px_rgba(45,36,30,0.06)] hover:shadow-[0_20px_45px_rgba(212,163,115,0.18)] transition-all duration-500 hover:-translate-y-2 flex flex-col group relative ${service.accentGlow}`}
                >
                  {/* Image with Tag & Live Star Rating */}
                  <div className="relative h-60 overflow-hidden bg-[#2D241E]">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.92]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    
                    {/* Category / Ritual Pill Badge */}
                    {service.badge && (
                      <span className={`absolute top-4 left-4 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border backdrop-blur-md ${service.badgeTheme}`}>
                        {service.badge}
                      </span>
                    )}

                    {/* Floating Emblem Medallion */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E3BA8F] shadow-md group-hover:scale-110 transition-transform">
                      <ServiceIcon className="w-4 h-4" />
                    </div>

                    {/* Rating & Duration in Bottom Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium border border-white/10">
                        <Star className="w-3.5 h-3.5 text-[#E3BA8F] fill-[#E3BA8F]" />
                        <span>{service.rating}</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium border border-white/10 text-white/90">
                        <Clock className="w-3.5 h-3.5 text-[#E3BA8F]" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3.5">
                      
                      {/* Title & Price */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-serif-luxury font-bold text-[#2D241E] group-hover:text-[#8C6A43] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <span className="text-2xl font-serif-luxury font-bold text-[#8C6A43] shrink-0">
                          {service.price}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#6B5A4E] leading-relaxed line-clamp-3 font-light">
                        {service.description}
                      </p>

                      {/* Benefit Highlights */}
                      <div className="space-y-2 pt-2 border-t border-[#F0E8DE]">
                        {service.highlights.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-[#5C4D44]">
                            <CheckCircle2 className="w-4 h-4 text-[#8C6A43] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Booking Action Button */}
                    <button
                      onClick={() => handleBook(service.title)}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#2D241E] via-[#3A2E26] to-[#2D241E] hover:from-[#4A3B31] hover:to-[#3A2E26] text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2.5 shadow-md shadow-[#2D241E]/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <Calendar className="w-4 h-4 text-[#E3BA8F]" />
                      <span>Book This Treatment</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
      />
    </div>
  );
}
