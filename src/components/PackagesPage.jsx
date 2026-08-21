import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart, Droplets, Clock } from "lucide-react";
import BookingModal from "./BookingModal";

export default function PackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [packageName, setPackageName] = useState("Annual Wellness");
  const [activeTab, setActiveTab] = useState("memberships");

  useSEO({
    title: "Wellness Packages & Memberships — NEW SARA SPA",
    description: "Curated multi-hour spa packages, couple escapes, and seasonal rejuvenation memberships at New Sara Spa.",
    canonical: "/packages"
  });

  const membershipPackages = [
    {
      id: 1,
      tag: "STANDARD RITUAL",
      title: "Quarterly",
      subtitle: "For regular relaxation.",
      price: "$249",
      period: "/ 3 Months",
      features: [
        "3 Full Body Swedish or Thai Massages",
        "Access to Steam & Relaxation Suite",
        "10% Off Private Spa Retail Products",
        "Complimentary Botanical Herbal Tea",
      ],
      isDark: false,
    },
    {
      id: 2,
      tag: "COMPLETE JOURNEY",
      title: "Annual Wellness",
      subtitle: "For long-term self-care.",
      badge: "MOST POPULAR",
      price: "$890",
      period: "/ 12 Months",
      features: [
        "12 Customized Massages of Choice",
        "Unlimited Steam Bath & Lounge Access",
        "2 Complimentary Guest Passes",
        "Priority Weekend Suite Booking",
        "15% Off All Signature Apothecary",
      ],
      isDark: true, // Exact Dark Espresso Hero Card from Screenshot
    },
    {
      id: 3,
      tag: "ULTIMATE INDULGENCE",
      title: "Premium Jacuzzi",
      subtitle: "For the ultimate spa experience.",
      price: "$420",
      period: "/ 6 Months",
      features: [
        "6 Private Jacuzzi Hydrotherapy Sessions",
        "6 Deep Rejuvenation Massages",
        "Aromatherapy & Herbal Bath Rituals",
        "Exclusive Magnesium Salt Soaks",
      ],
      isDark: false,
    },
  ];

  const retreatPackages = [
    {
      id: 4,
      tag: "SIGNATURE HALF-DAY",
      title: "Sanctuary Reset",
      subtitle: "Complete body & mind restoration.",
      price: "$340",
      period: "/ 3.5 Hours",
      features: [
        "Shirodhara Third-Eye Therapy (60m)",
        "Full-Body Abhyanga Synchronized Massage (60m)",
        "Private Jacuzzi Suite with Rose Petal Soak (45m)",
        "Organic Kumkumadi Glow Facial (45m)",
      ],
      isDark: false,
    },
    {
      id: 5,
      tag: "ROYAL COUPLE ESCAPE",
      title: "Couples Harmony",
      subtitle: "Side-by-side romantic wellness journey.",
      badge: "COUPLES CHOICE",
      price: "$480",
      period: "/ 3 Hours (For 2)",
      features: [
        "Side-by-Side Aromatic Full Body Massage (75m)",
        "Private Hydrotherapy Suite with Champagne (45m)",
        "Warm Stone Foot Reflexology (30m)",
        "Gourmet Artisan Chocolate & Berry Tray",
      ],
      isDark: true,
    },
    {
      id: 6,
      tag: "AYURVEDIC DETOX",
      title: "Panchakarma Reset",
      subtitle: "Deep cellular detoxification & renewal.",
      price: "$650",
      period: "/ 3 Sessions",
      features: [
        "Ayurvedic Master Consultation",
        "Personalized Medicated Oil Therapies",
        "Herbal Steam Infusion & Foot Bath",
        "Customized Herbal Formulation Kit",
      ],
      isDark: false,
    },
  ];

  const currentList = activeTab === "memberships" ? membershipPackages : retreatPackages;

  const handleBook = (name) => {
    setPackageName(name);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] pt-28 pb-24 relative overflow-hidden min-h-screen">
      
      {/* Ambient Radial Glows */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-80 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Header ── */}
      <section className="relative py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
         
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-bold tracking-tight text-[#2D241E]">
            Wellness <span className="skin-gradient-text italic font-normal">Packages</span>
          </h1>

          <p className="text-[#6B5A4E] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
            Multi-therapy wellness combinations and seasonal memberships designed to maximize relaxation, rejuvenation, and physical vitality.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab("memberships")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "memberships"
                  ? "bg-[#2D241E] text-white shadow-lg shadow-[#2D241E]/15 scale-105"
                  : "bg-white text-[#6B5A4E] border border-[#E8DFD5] hover:border-[#D4A373]"
              }`}
            >
              Wellness Memberships
            </button>
            <button
              onClick={() => setActiveTab("retreats")}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "retreats"
                  ? "bg-[#2D241E] text-white shadow-lg shadow-[#2D241E]/15 scale-105"
                  : "bg-white text-[#6B5A4E] border border-[#E8DFD5] hover:border-[#D4A373]"
              }`}
            >
              Day Spa Retreats
            </button>
          </div>
        </div>
      </section>

      {/* ── Packages Grid (Exact Screenshot Card Theme) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {currentList.map((pkg) => {
            const isDark = pkg.isDark;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-[32px] sm:rounded-[36px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 relative group ${
                  isDark
                    ? "bg-gradient-to-b from-[#2C1F16] via-[#221710] to-[#160E0A] border border-[#544133] shadow-[0_20px_50px_rgba(44,31,22,0.35)] text-white lg:-translate-y-3 hover:shadow-[0_25px_60px_rgba(44,31,22,0.5)]"
                    : "bg-white border border-[#EAE0D3] shadow-[0_10px_35px_rgba(45,36,30,0.06)] hover:shadow-2xl text-[#2D241E] hover:border-[#D4A373]"
                }`}
              >
                {/* Most Popular Badge for Featured Dark Card */}
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#D4A373] text-[#2D241E] text-[10px] font-bold uppercase tracking-[0.2em] shadow-md">
                    {pkg.badge}
                  </span>
                )}

                {/* Card Top Information */}
                <div className="space-y-6">
                  
                  {/* Category Tag & Titles */}
                  <div className="space-y-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] ${
                        isDark ? "text-[#E3BA8F]" : "text-[#8C6A43]"
                      }`}
                    >
                      {pkg.tag}
                    </span>

                    <h3
                      className={`text-2xl sm:text-3xl font-serif-luxury font-bold leading-snug ${
                        isDark ? "text-white" : "text-[#2D241E]"
                      }`}
                    >
                      {pkg.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm font-light ${
                        isDark ? "text-white/70" : "text-[#7A695E]"
                      }`}
                    >
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price & Term */}
                  <div className="pt-2 flex items-baseline">
                    <span
                      className={`text-4xl sm:text-5xl font-serif-luxury font-bold ${
                        isDark ? "text-white" : "text-[#2D241E]"
                      }`}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs font-sans font-normal ml-2 ${
                        isDark ? "text-[#E3BA8F]" : "text-[#8C7364]"
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features List with Custom Circular Icons */}
                  <div className="space-y-3.5 pt-4 border-t border-white/10">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isDark
                              ? "border-[#E3BA8F] text-[#E3BA8F]"
                              : "border-[#D4A373] text-[#8C6A43]"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span
                          className={`text-xs sm:text-[13px] leading-relaxed ${
                            isDark ? "text-white/80" : "text-[#5C4D44]"
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => handleBook(pkg.title)}
                    className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      isDark
                        ? "bg-[#D4A373] hover:bg-[#E3BA8F] text-[#2D241E] shadow-lg shadow-[#D4A373]/25 hover:scale-[1.02]"
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

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={packageName}
      />
    </div>
  );
}
