import React, { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Loader3DCanvas from "../components/3d/Loader3DCanvas";

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
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0C0A09] text-white select-none overflow-hidden"
        >
          {/* Ambient Multi-layer Radial Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FB8305]/20 via-[#D4A373]/15 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#E3BA8F]/15 rounded-full blur-[90px] pointer-events-none" />

          {/* Central Luxury Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto px-6 text-center space-y-6">
            
            {/* 3D Rotating Golden Lotus Canvas */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
              
              {/* Three.js 3D Rotating Crystal Gold Lotus Canvas */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                <Suspense
                  fallback={
                    <div className="w-12 h-12 rounded-full border-2 border-[#FB8305] border-t-transparent animate-spin" />
                  }
                >
                  <Loader3DCanvas />
                </Suspense>
              </div>

              {/* Floating Sparkle Micro-Accents */}
              <motion.div
                animate={{ y: [-4, 4, -4], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1 right-2 text-[#E3BA8F] pointer-events-none"
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </div>

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
                        : "text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5EA] via-[#F8DBB9] to-[#FB8305] drop-shadow-[0_2px_15px_rgba(251,131,5,0.35)]"
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
                className="text-[10px] sm:text-xs font-sans text-[#C7B5A6] uppercase font-light tracking-[0.38em]"
              >
                Sanctuary of Holistic Wellness
              </motion.p>
            </div>

            {/* Ultra-Smooth Luxury Progress Bar & Status */}
            <div className="w-60 sm:w-80 pt-2 space-y-2.5">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D4A373] via-[#FB8305] to-[#E3BA8F] rounded-full shadow-[0_0_15px_#FB8305]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#A69282] uppercase tracking-[0.2em] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FB8305] animate-ping" />
                  <span>Preparing Sanctuary</span>
                </span>
                <span className="text-[#E3BA8F] font-bold">{Math.min(progress, 100)}%</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
