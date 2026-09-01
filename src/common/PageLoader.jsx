import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import logo from "../assets/logo.png";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // Smooth luxury progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 12;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const brandLetters = "NEW SARA SPA".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#FAF7F2] text-[#2D241E] select-none overflow-hidden"
        >
          {/* Ambient Multi-layer Soft Warm Radial Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#D4A373]/25 via-[#FDE8D0]/40 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E3BA8F]/30 rounded-full blur-[90px] pointer-events-none" />

          {/* Central Luxury Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto px-6 text-center space-y-6">
            
            {/* Official Brand Navbar Logo Showcase */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.96, 1.03, 0.96], opacity: 1 }}
              transition={{
                scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.6 }
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center"
            >
              {/* Ambient Golden Halo behind logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A373]/35 via-[#E3BA8F]/25 to-transparent rounded-full blur-2xl animate-pulse" />
              
              {/* Crisp Logo Medallion */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/85 backdrop-blur-md border border-[#E5D6C4] p-4 shadow-[0_12px_40px_rgba(45,36,30,0.12)] flex items-center justify-center">
                <img
                  src={logo}
                  alt="NEW SARA SPA Official Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(176,125,84,0.3)]"
                />
              </div>

              {/* Floating Sparkle Micro-Accent */}
              <motion.div
                animate={{ y: [-3, 3, -3], rotate: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-1 text-[#B07D54] pointer-events-none"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* Cinematic Staggered Brand Typography */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 overflow-hidden">
                {brandLetters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.15 + index * 0.04,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`text-2xl sm:text-3xl md:text-4xl font-serif-luxury font-bold tracking-[0.18em] ${
                      char === " "
                        ? "w-3 sm:w-4"
                        : "text-transparent bg-clip-text bg-gradient-to-r from-[#2D241E] via-[#8C6A43] to-[#B07D54] drop-shadow-xs"
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.38em" }}
                transition={{ delay: 0.55, duration: 0.8, ease: "easeOut" }}
                className="text-[10px] sm:text-xs font-sans text-[#8C6A43] uppercase font-semibold tracking-[0.38em]"
              >
                Sanctuary of Holistic Wellness
              </motion.p>
            </div>

            {/* Ultra-Smooth Luxury Progress Bar & Status */}
            <div className="w-60 sm:w-80 pt-2 space-y-2.5">
              <div className="w-full h-1 bg-[#E8DFD5] rounded-full overflow-hidden p-0.5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#B07D54] via-[#D4A373] to-[#8C6A43] rounded-full shadow-[0_0_10px_rgba(212,163,115,0.8)]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#6B503F] uppercase tracking-[0.2em] font-mono">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B07D54] animate-ping" />
                  <span>Preparing Sanctuary</span>
                </span>
                <span className="text-[#8C6A43] font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
