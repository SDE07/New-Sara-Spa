"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface Slider3DItem {
  id?: string | number;
  tag?: string;
  tagBg?: string;
  title?: string;
  subTitle?: string;
  desc?: string;
  badge?: string;
  image?: string;
  bg?: string;
  titleColor?: string;
  descColor?: string;
  btnStyle?: string;
  icon?: any;
  [key: string]: any;
}

interface Slider3DProps {
  /** Array of image URLs or item objects to display */
  images?: string[];
  items?: Slider3DItem[];
  renderItem?: (item: Slider3DItem | string, index: number) => React.ReactNode;
  /** Duration of one full 360-degree rotation (in seconds) */
  duration?: number;
  /** Width of each card. Can be px, rem, em, etc. */
  cardWidth?: string;
  /** CSS aspect ratio of the cards */
  cardAspectRatio?: string;
  /** CSS perspective value for the 3D container */
  perspective?: string;
  /** Additional classes for the outermost container */
  containerClassName?: string;
  /** Additional classes for the individual card elements */
  imageClassName?: string;
  /** Direction of the rotation */
  rotationDirection?: "left" | "right";
  /** Whether to apply a gradient fade mask on the edges */
  withMask?: boolean;
}

export default function ImageSlider3D({
  images,
  items,
  renderItem,
  onCardClick,
  duration = 36,
  cardWidth = "18em",
  cardAspectRatio = "7/10",
  perspective = "42em",
  containerClassName = "",
  imageClassName = "",
  rotationDirection = "left",
  withMask = true,
}: Slider3DProps) {
  const dataList = items || images || [];
  const n = dataList.length || 1;
  const prefersReducedMotion = useReducedMotion();
  const animationDuration = prefersReducedMotion ? duration * 4 : duration;

  // rotation angles based on direction
  const rotationValues = rotationDirection === "left" ? [0, 360] : [360, 0];

  const maskStyles = withMask
    ? {
      WebkitMask:
        "linear-gradient(90deg, transparent 0%, #000 3% 97%, transparent 100%)",
      mask: "linear-gradient(90deg, transparent 0%, #000 3% 97%, transparent 100%)",
    }
    : {};

  return (
    <div
      className={`grid w-full max-w-full h-full min-h-[360px] sm:min-h-[460px] md:min-h-[500px] overflow-hidden place-items-center ${containerClassName}`}
      style={{
        perspective: perspective,
        touchAction: 'pan-y',
        ...maskStyles,
      }}
    >
      <motion.div
        className="grid place-self-center pointer-events-auto"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: rotationValues,
        }}
        transition={{
          duration: animationDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {dataList.map((item, i) => (
          <div
            key={i}
            onClick={(e) => {
              if (onCardClick) onCardClick(item, i);
            }}
            className="col-start-1 row-start-1 select-none pointer-events-auto cursor-pointer"
            style={{
              width: cardWidth,
              aspectRatio: cardAspectRatio,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.5 * ${cardWidth} + 0.6em) / tan(0.5 * (1turn / ${n}))))`,
            }}
          >
            {/* Inner Card Wrapper with Hover Scale and strict Backface Culling */}
            <div
              className={`w-full h-full transition-all duration-400 ease-out hover:scale-105 hover:-translate-y-2 rounded-[28px] cursor-pointer ${imageClassName}`}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {renderItem ? (
                renderItem(item, i)
              ) : typeof item === "string" ? (
                <img
                  src={item}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover rounded-[1.5em]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                />
              ) : null}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
