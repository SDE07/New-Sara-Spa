import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Sparkles, Eye, Camera, MapPin } from "lucide-react";
import spa1Img from "../assets/spa1.png";
import spa2Img from "../assets/spa2.png";
import spa3Img from "../assets/spa3.png";
import spa4Img from "../assets/spa4.png";
import spa5Img from "../assets/spa5.png";

export default function GalleryPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState("All");

  useSEO({
    title: "Gallery & Luxury Facilities Tour — SARA SPA",
    description: "Immerse yourself in our photo gallery: treatment suites, private Jacuzzi rooms, eucalyptus steam baths, and relaxation lounges.",
    canonical: "/gallery"
  });

  const categories = ["All", "Suites", "Hydro & Jacuzzi", "Steam & Sauna", "Lounges"];

  const photos = [
    {
      title: "Luxury VIP Treatment Suite",
      category: "Suites",
      src: spa2Img,
      subtitle: "Custom teakwood massage bed, vanity mirror, and floral footbath"
    },
    {
      title: "Private Candlelit Relaxation Sanctuary",
      category: "Lounges",
      src: spa3Img,
      subtitle: "Candlelit acoustic calmness, head massage, and botanical tea infusions"
    },
    {
      title: "Signature Couples Rejuvenation Suite",
      category: "Suites",
      src: spa1Img,
      subtitle: "Dual synchronized massage tables with organic essential oils"
    },
    {
      title: "Signature 4-Step Holistic Rituals",
      category: "Lounges",
      src: spa4Img,
      subtitle: "Multi-sensory hot stone therapy, flower soak, and holistic renewal"
    },
    {
      title: "Natural Botanical Apothecary & Steam",
      category: "Steam & Sauna",
      src: spa5Img,
      subtitle: "100% natural tropical botanical essences and restorative steam"
    },
    {
      title: "Private VIP Jacuzzi & Mineral Soak",
      category: "Hydro & Jacuzzi",
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
      subtitle: "Therapeutic magnesium jets with mood chromatherapy"
    }
  ];

  const filteredPhotos = activeFilter === "All"
    ? photos
    : photos.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#FAF7F2] text-[#2D241E] pt-24 pb-20">
      
      {/* Header */}
      <section className="py-16 bg-[#F5EFE6] border-b border-[#EAE0D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E5D6C4] text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6A43]">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Tour</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif-luxury font-bold text-[#2D241E]">
            Explore Our <span className="skin-gradient-text italic font-normal">Sanctuary Spaces</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#6B5A4E]">
            Step inside Sara Spa through our visual gallery. Every room is meticulously crafted for acoustic peace, warmth, and complete comfort.
          </p>
        </div>
      </section>

      {/* Gallery Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap items-center justify-center gap-2.5 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? "bg-[#2D241E] text-white shadow-md"
                  : "bg-white text-[#4A3B32] border border-[#E5D6C4] hover:bg-[#F5EFE6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#EFE6DC] bg-white transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E]/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E3BA8F]">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-serif-luxury font-bold mt-0.5">{photo.title}</h3>
                  <p className="text-xs text-slate-300 mt-1">{photo.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Box */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#F5EFE6] border border-[#EAE0D3] text-center space-y-4">
          <h3 className="text-2xl font-serif-luxury font-bold text-[#2D241E]">
            Immerse Yourself in Pure Tranquility
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5A4E] max-w-lg mx-auto">
            Reserve your treatment suite online or contact our concierge for customized group or private experiences.
          </p>
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-full bg-[#2D241E] hover:bg-[#4A3B32] text-white font-bold text-xs uppercase tracking-[0.2em] shadow-lg transition-all"
          >
            Book Your Session Now →
          </button>
        </div>
      </div>

    </div>
  );
}
