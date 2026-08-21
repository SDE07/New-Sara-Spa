import React from "react";
import { motion } from "framer-motion";
import service3DImg from "../../assets/service-3d.png";

export default function WalkingServiceCarriers() {
  const walkDuration = 1.35;

  return (
    <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto flex flex-col items-center justify-center py-2 select-none">
      
      {/* Soft Ambient Multi-color Glowing Aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A373]/30 via-[#FB8305]/20 to-[#52B788]/30 rounded-full blur-3xl opacity-80 pointer-events-none" />

      {/* Synchronized Seamless Walking Carrier Stage */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: [0, -14, 0, -8, 0], // Walking footstep lift & drop cycle
          x: [-10, 10, -10],     // Left-to-right natural walking stride momentum
          rotate: [-1.8, 1.8, -1.8], // Natural body balance tilt
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
          y: {
            repeat: Infinity,
            duration: walkDuration,
            ease: "easeInOut",
          },
          x: {
            repeat: Infinity,
            duration: walkDuration * 2,
            ease: "easeInOut",
          },
          rotate: {
            repeat: Infinity,
            duration: walkDuration * 2,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.08,
          y: -22,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="relative w-full flex items-center justify-center cursor-pointer group z-10"
      >
        {/* Full Uncut 3D Service Image (Zero seams, zero cuts) */}
        <img
          src={service3DImg}
          alt="Sara Spa 3D Services"
          className="w-full h-auto object-contain max-h-[160px] sm:max-h-[210px] md:max-h-[260px] mix-blend-multiply drop-shadow-xl transition-all duration-300"
        />

        {/* Dynamic Stepping Ground Shadow */}
        <motion.div
          animate={{
            scaleX: [1.05, 0.88, 1.05],
            opacity: [0.35, 0.18, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: walkDuration,
            ease: "easeInOut",
          }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-3 bg-black/40 rounded-full blur-xs pointer-events-none"
        />
      </motion.div>
    </div>
  );
}
