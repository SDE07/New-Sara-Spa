import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const cursorRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const isVisibleRef = useRef(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops/laptops)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animId;

    const onMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setVisible(true);
        // Initialize ring position to cursor instantly on first move
        ringPosRef.current = { x: e.clientX, y: e.clientY };
      }

      // Direct zero-latency placement for inner pointer dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setVisible(false);
    };

    const onMouseEnter = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      ringPosRef.current = { x: e.clientX, y: e.clientY };
      isVisibleRef.current = true;
      setVisible(true);
    };

    // Fluid 60/120fps hardware-accelerated Lerp loop for the smooth trailing halo
    const renderLoop = () => {
      if (isVisibleRef.current) {
        const ease = 0.18;
        ringPosRef.current.x += (cursorRef.current.x - ringPosRef.current.x) * ease;
        ringPosRef.current.y += (cursorRef.current.y - ringPosRef.current.y) * ease;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
        }
      }
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    // Interactive element detection for magnetic luxury cursor effect
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest('[role="button"]') ||
        target.closest(".spa-card") ||
        target.closest(".hero-image-blob") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* ── Inner Fast Golden Dot (Direct Pointer) ── */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full bg-[#B07D54] pointer-events-none will-change-transform transition-[width,height,background-color,box-shadow,opacity] duration-150 ease-out ${
          isHovered
            ? "w-2 h-2 bg-[#B07D54] shadow-sm shadow-[#D4A373]/40"
            : "w-2 h-2 bg-[#96663E]"
        } ${isClicked ? "scale-75" : ""}`}
      />

      {/* ── Outer Fluid Trailing Halo Ring ── */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-[width,height,border-color,background-color,box-shadow,opacity] duration-250 ease-out ${
          isHovered
            ? "w-7 h-7 border border-[#B07D54]/70 bg-[#D4A373]/10 backdrop-blur-[1px]"
            : "w-7 h-7 border border-[#B07D54]/40 bg-[#D4A373]/[0.04]"
        } ${isClicked ? "w-5 h-5 border-[#8C6A43] bg-[#D4A373]/25" : ""}`}
      />
    </div>
  );
}
