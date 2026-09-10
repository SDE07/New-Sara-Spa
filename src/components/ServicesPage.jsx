import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Clock, Heart, Flower2, ShieldCheck, ArrowRight, Flame, Star, Layers
} from "lucide-react";
import BookingModal from "./BookingModal";

// Luxury Spa Assets
import headChampiImg from "../assets/service-head-champi.jpg";
import footReflexologyImg from "../assets/service-foot-reflexology.png";
import backMassageImg from "../assets/service-back-massage.png";
import thaiStretchImg from "../assets/service-thai-stretch.png";
import hammamScrubImg from "../assets/service-hammam-scrub.png";
import bodyThaiScrubImg from "../assets/service-body-thai-scrub.jpg";
import bodyMassageScrubJacuzziImg from "../assets/service-body-massage-scrub-jacuzzi.jpg";
import thaiMassageJacuzziImg from "../assets/service-thai-massage-jacuzzi.png";
import fourHandJacuzziImg from "../assets/service-four-hand-jacuzzi.jpg";
import fourHandJacuzziScrubImg from "../assets/service-four-hand-jacuzzi-scrub.jpg";
import lomiLomiImg from "../assets/service-lomi-lomi.jpg";
import sandalwoodScrubImg from "../assets/service-sandalwood-scrub.png";
import specialCoupleImg from "../assets/service-special-couple.png";
import coupleJacuzziImg from "../assets/service-couple-jacuzzi.png";
import heritageLadiesImg from "../assets/service-heritage-ladies.png";
import frenchAromaImg from "../assets/service-french-aroma.png";
import swedishMassageImg from "../assets/service-swedish-massage.png";
import deepTissueImg from "../assets/service-deep-tissue.jpg";
import balineseMassageImg from "../assets/service-balinese-massage.png";
import jasmineScrubImg from "../assets/service-jasmine-scrub.jpg";
import mudWrapsImg from "../assets/service-mud-wraps.png";

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState("Head Massages (Indian Champ)");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  useSEO({
    title: "Treatments & Therapies — NEW SARA SPA Wakad Pune",
    description: "Explore New Sara Spa's complete menu of Dry Massages, Signature Massages, and Rejuvenating & Relaxing Rituals in Wakad, Pune.",
    canonical: "/services"
  });

  // 3 Primary Spa Categories with Lucide React Icons
  const categories = [
    { id: "all", label: "All Treatments", icon: Layers, count: 21 },
    { id: "dry", label: "Dry Massages", icon: Flame, count: 4 },
    { id: "signature", label: "Signature Massage", icon: Star, count: 6 },
    { id: "rejuvenate", label: "Rejuvenate & Relaxing", icon: Flower2, count: 11 },
  ];

  // All Authentic Services Organized into the 3 Main Types
  const services = [
    // ── 1. DRY MASSAGES (Exact User Screenshots) ──
    {
      id: 1,
      title: "Head Massages (Indian Champ)",
      category: "dry",
      duration: "45 – 60 Mins",
      pricing: "₹ 2500 /- 3000/-",
      description: "Deeply relaxing Indian champi massage focusing on your head, scalp, neck, and shoulders to relieve tension, migraine, and mental fatigue.",
      image: headChampiImg,
    },
    {
      id: 2,
      title: "Foot Reflexology",
      category: "dry",
      duration: "45 – 60 Mins",
      pricing: "₹ 2500 /- 3000/-",
      description: "Holistic acupressure pressure therapy applied to feet and lower legs to relieve chronic stress and restore natural body balance.",
      image: footReflexologyImg,
    },
    {
      id: 3,
      title: "Back Massages",
      category: "dry",
      duration: "45 – 60 Mins",
      pricing: "₹ 2500 /- 3000/-",
      description: "Targeted therapeutic massage performed along the spine and upper/lower back to release knots, relieve pain, and promote relaxation.",
      image: backMassageImg,
    },
    {
      id: 4,
      title: "Thai Dry Stretch Massage",
      category: "dry",
      duration: "60 – 90 Mins",
      pricing: "₹ 3500 /- 4500/-",
      description: "Traditional oil-free Thai rhythmic compression and assisted yoga stretching to enhance flexibility and posture alignment.",
      image: thaiStretchImg,
    },

    // ── 2. SIGNATURE MASSAGE (Exact User Screenshots) ──
    {
      id: 5,
      title: "Hammam Massage + Scrub",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 12000/- 15000/- 18000/-",
      description: "Authentic Turkish-inspired hammam foam and steam chamber ritual using hot mist, deep exfoliating scrub, and full body rejuvenation.",
      image: hammamScrubImg,
    },
    {
      id: 6,
      title: "Body Thai Massage + Scrub",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 7000/- 9000/- 12000/-",
      description: "Full body Thai rhythmic massage works muscles deeply while botanical body scrub eliminates dead cells for radiant, velvety skin.",
      image: bodyThaiScrubImg,
    },
    {
      id: 7,
      title: "Body Massage + Scrub + Jacuzzi",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 15000/- 18000/- 20000/-",
      description: "Luxury full body massage combined with organic exfoliating scrub and private hydrotherapy Bangkok Jacuzzi hot tub relaxation.",
      image: bodyMassageScrubJacuzziImg,
    },
    {
      id: 8,
      title: "Thai Massage + Jacuzzi",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 15000/- 18000/- 20000/-",
      description: "Traditional Thai rhythmic muscle compression and stretching therapy followed by relaxing private hydro-jet Jacuzzi bath.",
      image: thaiMassageJacuzziImg,
    },
    {
      id: 9,
      title: "Four Hand Massage + Jacuzzi",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 18000/- 20000/- 22000/-",
      description: "Two master therapists performing synchronized 4-hand massage harmony followed by a private soothing Jacuzzi bath.",
      image: fourHandJacuzziImg,
    },
    {
      id: 10,
      title: "Four Hand Massage + Jacuzzi + Scrub",
      category: "signature",
      duration: "60–90–120 Mins",
      pricing: "₹ 20000/- 22000/- 24000/-",
      description: "The ultimate VIP indulgence: synchronized dual therapist four-hand massage, full body scrub, and private Bangkok Jacuzzi suite.",
      image: fourHandJacuzziScrubImg,
    },

    // ── 3. REJUVENATE AND RELAXING (Exact User Screenshots) ──
    {
      id: 11,
      title: "Lomi Lomi Massage",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 3500 /- 4500 /- 5500 /-",
      description: "Traditional Hawaiian rhythmic forearm wave massage that melts physical tension, frees energy pathways, and instills deep tranquility.",
      image: lomiLomiImg,
    },
    {
      id: 12,
      title: "Sandalwood Scrub + Massage",
      category: "rejuvenate",
      duration: "60–90 Mins",
      pricing: "₹ 4500 /- 5500 /-",
      description: "Aromatic pure Chandan (sandalwood) herbal body scrub followed by soothing warm oil massage to brighten skin and soothe inflammation.",
      image: sandalwoodScrubImg,
    },
    {
      id: 13,
      title: "Special Couple Treatment",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 10000 /- 12000 /- 14000 /-",
      description: "Side-by-side synchronized couple therapy in our private sanctuary room with calming essential oils, scalp touch, and hot towels.",
      image: specialCoupleImg,
    },
    {
      id: 14,
      title: "Couple Treatment + Jacuzzi",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 14000 /- 16000 /- 18000 /-",
      description: "Romantic dual relaxation experience with full body aromatherapy massage followed by a rose petal infused Jacuzzi soak.",
      image: coupleJacuzziImg,
    },
    {
      id: 15,
      title: "Heritage Ladies Special",
      category: "rejuvenate",
      duration: "60–90 Mins",
      pricing: "₹ 6000 /- 8000 /-",
      description: "Exclusive royal treatment for women with precious herbal oils, rich moisturizing creams, and soothing head-to-toe relaxation.",
      image: heritageLadiesImg,
    },
    {
      id: 16,
      title: "French Aroma Massage",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 3500 /- 4500 /- 5500 /-",
      description: "Sensory aromatherapy blend of lavender, eucalyptus, and rose oils designed to soothe emotional stress and revitalize your energy.",
      image: frenchAromaImg,
    },
    {
      id: 17,
      title: "Swedish Massage",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 3500 /- 4500 /- 5500 /-",
      description: "Classic European massage using long gliding strokes, gentle kneading, and joint mobilization for deep muscle easing and serenity.",
      image: swedishMassageImg,
    },
    {
      id: 18,
      title: "Deep Tissue Massage",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 3800 /- 4800 /- 5800 /-",
      description: "Targeted deep pressure therapy focusing on deeper layers of muscle and connective tissue to release chronic aches and severe stiffness.",
      image: deepTissueImg,
    },
    {
      id: 19,
      title: "Baliness Massage",
      category: "rejuvenate",
      duration: "60–90–120 Mins",
      pricing: "₹ 3500 /- 4500 /- 5500 /-",
      description: "Traditional Indonesian Bali ritual combining gentle stretching, acupressure, reflexology, and aromatherapy for full body revival.",
      image: balineseMassageImg,
    },
    {
      id: 20,
      title: "Jasmin Scrub",
      category: "rejuvenate",
      duration: "60–90 Mins",
      pricing: "₹ 3000 /- 4500 /-",
      description: "Gentle exfoliating scrub infused with natural jasmine essence that cleanses, polishes, and reveals smoother, radiant skin.",
      image: jasmineScrubImg,
    },
    {
      id: 21,
      title: "Mud Wraps",
      category: "rejuvenate",
      duration: "60–90 Mins",
      pricing: "₹ 3500 /- 4500 /-",
      description: "Mineral-rich therapeutic volcanic mud applied to the whole body to detoxify pores, hydrate deep dermal layers, and firm the skin.",
      image: mudWrapsImg,
    },
  ];

  const filteredServices = selectedCategory === "all"
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const handleOpenBooking = (serviceTitle) => {
    setBookingService(serviceTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] pt-20 sm:pt-24 pb-20 relative overflow-hidden min-h-screen">
      
      {/* Subtle Ambient Radial Halos */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-96 right-1/4 translate-x-1/2 w-[550px] h-[550px] bg-[#52B788]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Page Header ── */}
      <section className="relative pt-3 sm:pt-5 pb-6 sm:pb-8 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
        
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A373]/15 border border-[#D4A373]/30 text-[#8C6A43] text-[10.5px] font-bold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#B07D54]" />
            <span>Curated Sanctuary Menu</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold tracking-tight text-[#2D241E]">
            Treatments & <span className="skin-gradient-text italic font-normal">Therapies</span>
          </h1>

          <p className="text-[#6B5A4E] max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed font-light">
            Discover our curated menu of traditional Dry Massages, elite Signature Combos with Jacuzzi, and deeply relaxing botanical body rituals.
          </p>

          {/* 3 Main Type Category Filter Buttons: 2-per-row on mobile, Flex Row on Desktop */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-3 sm:pt-4 max-w-[380px] sm:max-w-none mx-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`w-full sm:w-auto px-2.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 shadow-xs ${
                    isSelected
                      ? "bg-[#2D241E] text-white shadow-md shadow-[#2D241E]/25 border-2 border-[#D4A373] scale-102"
                      : "bg-white text-[#6B5A4E] border border-[#E8DFD5] hover:border-[#D4A373] hover:text-[#2D241E] hover:bg-[#FAF7F2]"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#E3BA8F]" : "text-[#B07D54]"}`} />
                  <span className="truncate">{cat.label}</span>
                  <span className={`text-[9.5px] sm:text-[10px] px-1.5 py-0.5 rounded-full font-semibold shrink-0 ${isSelected ? "bg-white/20 text-[#E3BA8F]" : "bg-[#FAF4ED] text-[#8C7364]"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Authentic Service Cards Grid (Matching Reference Screenshot) ── */}
      <section className="max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 pt-2 sm:pt-4">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-6 sm:mb-8 pb-3 border-b border-[#EAE0D3] text-center sm:text-left">
          <span className="text-xs uppercase tracking-widest font-bold text-[#8C6A43]">
            Showing {filteredServices.length} Luxury Therapies
          </span>
          <span className="text-xs text-[#8C7364] font-light">
            All treatments include complimentary herbal tea & amenities
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((srv) => (
              <motion.div
                key={srv.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-[#EAE0D3] shadow-[0_6px_25px_rgba(45,36,30,0.06)] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Top Image with Floating Heart Badge */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#FAF7F2]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    
                    {/* Pink/Coral Heart Badge */}
                    <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-[#FF5A76] text-white flex items-center justify-center shadow-md">
                      <Heart className="w-4 h-4 fill-white text-white" />
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="p-5 pb-2 text-center space-y-3">
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold font-sans text-[#E61E5C] tracking-tight group-hover:text-[#C40E48] transition-colors leading-snug min-h-[3rem] flex items-center justify-center">
                      {srv.title}
                    </h3>

                    {/* Amber / Gold Duration & Price Badge (Exact 2-Line Format from Reference) */}
                    <div className="w-full py-2.5 px-3 rounded-md bg-[#FFE8CC] text-[#2D241E] font-sans font-bold shadow-xs text-center space-y-1">
                      <div className="flex items-center justify-center gap-1.5 text-xs sm:text-[12.5px] font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#2D241E] shrink-0 stroke-[2.5]" />
                        <span>{srv.duration}</span>
                      </div>
                      <div className="text-xs sm:text-[13px] font-extrabold text-[#2D241E] tracking-tight">
                        {srv.pricing}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#6B5A4E] leading-relaxed font-light line-clamp-3 pt-1">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Coral Book Now Button */}
                <div className="p-5 pt-3">
                  <button
                    onClick={() => handleOpenBooking(srv.title)}
                    className="w-full py-3 rounded-lg bg-[#FF6565] hover:bg-[#E04F4F] text-white font-sans font-bold text-sm uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Book Now</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </section>

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
      />
    </div>
  );
}
