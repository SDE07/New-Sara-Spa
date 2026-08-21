import React, { useState, useRef } from "react";
import { ArrowRight, Sparkles, Clock, Star } from "lucide-react";

export default function TherapyCard3D({
  title,
  duration,
  tagline,
  description,
  benefit,
  image,
  theme = "emerald", // 'emerald' | 'gold' | 'amber' | 'jade'
  onBook,
}) {
  const cardRef = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRot({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65,
    });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1100px" }}
      className="relative w-full h-[460px] cursor-pointer select-none"
    >
      {/* 3D Rotatable Card Shell */}
      <div
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateZ(${isHovered ? 16 : 0}px)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full rounded-[30px] overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAF6F0] to-[#F5ECE1] border border-[#E5D7C7] hover:border-[#C59B6D] shadow-[0_15px_35px_-10px_rgba(45,36,30,0.12)] hover:shadow-[0_30px_60px_-15px_rgba(176,125,84,0.3)] flex flex-col justify-between"
      >
        {/* Dynamic Holographic Glare Reflection */}
        <div
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.45) 0%, rgba(212, 163, 115, 0.15) 35%, transparent 70%)`,
            opacity: glare.opacity,
          }}
          className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-300"
        />

        {/* Top Half: Photo with Botanical Gold-Foil Overlay */}
        <div className="relative h-[210px] w-full overflow-hidden shrink-0">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />

          {/* Deep Luxury Gradient Shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813] via-[#1F1813]/40 to-transparent" />

          {/* Botanical Leaf Watermark Motif (Top Left) */}
          <svg
            className="absolute top-2 left-2 w-16 h-16 text-[#D4A373]/25 pointer-events-none transition-opacity duration-500"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50 10 C35 30, 20 60, 50 90 C80 60, 65 30, 50 10 Z" opacity="0.6" />
            <path d="M50 20 C40 38, 30 55, 50 78 C70 55, 60 38, 50 20 Z" opacity="0.4" />
          </svg>

          {/* Duration Badge in Gold-Frosted Glass */}
          <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F1813]/75 backdrop-blur-md border border-[#D4A373]/40 shadow-sm text-white">
            <Clock className="w-3 h-3 text-[#E3BA8F]" />
            <span className="text-[10px] font-bold tracking-wider uppercase font-sans text-[#FAF7F2]">
              {duration}
            </span>
          </div>

          {/* Benefit Highlight Tag (Bottom Left of Image) */}
          <div className="absolute bottom-3 left-4 z-20">
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#E3BA8F] drop-shadow-sm font-sans flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#E3BA8F]" />
              {benefit}
            </span>
          </div>
        </div>

        {/* Bottom Half: Luxury Stationery Treatment */}
        <div className="p-6 flex-1 flex flex-col justify-between relative bg-gradient-to-b from-white/90 to-[#FAF6F0]/95 backdrop-blur-sm">
          {/* Subtle Golden Hairline Divider */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#D4A373]/50 to-transparent" />

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-[#2D241E] group-hover:text-[#B07D54] transition-colors leading-snug">
              {title}
            </h3>

            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8C6A43]">
              {tagline}
            </p>

            <p className="text-xs text-[#6B5A4E] line-clamp-2 leading-relaxed font-light mt-1">
              {description}
            </p>
          </div>

          {/* Interactive Bottom Booking Action */}
          <div className="pt-4 border-t border-[#EFE6DC] flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (onBook) onBook(title);
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold text-[#8C6A43] hover:text-[#2D241E] transition-colors group/btn"
            >
              <span>View Treatment</span>
              <div className="w-6 h-6 rounded-full bg-[#FAF4ED] border border-[#E5D7C7] flex items-center justify-center group-hover/btn:bg-[#B07D54] group-hover/btn:text-white transition-all duration-300">
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </div>
            </button>

            <span className="text-[11px] font-serif-luxury italic text-[#B07D54]">
              Signature Spa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
