import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  // Quick YouTube-style pulse animation on route transition
  useEffect(() => {
    setIsNavigating(true);
    const t = setTimeout(() => setIsNavigating(false), 450);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {/* Top Scroll / Route Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#B07D54] via-[#E3BA8F] to-[#D4A373] origin-left z-[9999] pointer-events-none shadow-[0_0_12px_rgba(212,163,115,0.8)]"
        style={{ scaleX }}
      >
        {/* Glow Leading Head Light */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FFF0E0] rounded-full blur-xs opacity-90 shadow-[0_0_10px_#E3BA8F]" />
      </motion.div>

      {/* Instant Route Transition Pulse */}
      {isNavigating && (
        <motion.div
          initial={{ x: "-100%", opacity: 1 }}
          animate={{ x: "0%", opacity: [1, 1, 0] }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#D4A373] via-[#FFF] to-[#E3BA8F] z-[10000] pointer-events-none shadow-[0_0_15px_rgba(227,186,143,1)]"
        />
      )}
    </>
  );
}
