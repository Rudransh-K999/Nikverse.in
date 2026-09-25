import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface RockstarNVLoaderProps {
  isLoading: boolean;
  onFinish?: () => void;
  durationMs?: number;
}

export const RockstarNVLoader: React.FC<RockstarNVLoaderProps> = ({
  isLoading,
  onFinish,
  durationMs = 600
}) => {
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, durationMs);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onFinish, durationMs]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="rockstar-nv-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#07070a] flex items-center justify-center select-none pointer-events-auto overflow-hidden"
        >
          {/* Faint subtle radial gradient in the deep background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)] pointer-events-none" />

          {/* Centered Rockstar Games VI Style Minimalist Outlined NV Monogram */}
          <div className="relative flex items-center justify-center">
            <svg
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-visible"
              viewBox="0 0 340 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Yellow / Amber Linear Stroke Gradient matching Rockstar's subtle hue drift */}
                <linearGradient id="nvStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#d97706" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#92400e" stopOpacity="0.65" />
                </linearGradient>

                {/* Soft ambient neon outline glow */}
                <filter id="nvGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.45" />
                  <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#f59e0b" floodOpacity="0.25" />
                </filter>
              </defs>

              <g filter="url(#nvGlow)">
                {/* 
                  LETTER 'N' (Outlined chunky block letter)
                  Contour coordinates:
                  Start (30,40) -> (70,40) -> (120,135) -> (120,40) -> (155,40) 
                  -> (155,210) -> (115,210) -> (65,115) -> (65,210) -> (30,210) -> close
                */}
                <motion.path
                  d="M 32 42 L 72 42 L 122 138 L 122 42 L 158 42 L 158 208 L 118 208 L 68 112 L 68 208 L 32 208 Z"
                  stroke="url(#nvStrokeGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0.2, opacity: 0.5 }}
                  animate={{
                    pathLength: [0.2, 1, 1],
                    opacity: [0.5, 1, 0.85]
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* 
                  LETTER 'V' (Outlined chunky block letter)
                  Contour coordinates:
                  Start (172,42) -> (208,42) -> inner valley (232,152) -> inner right (256,42)
                  -> (292,42) -> bottom apex right (246,208) -> bottom apex left (218,208) -> close
                */}
                <motion.path
                  d="M 174 42 L 210 42 L 233 148 L 256 42 L 292 42 L 246 208 L 220 208 Z"
                  stroke="url(#nvStrokeGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0.2, opacity: 0.5 }}
                  animate={{
                    pathLength: [0.2, 1, 1],
                    opacity: [0.5, 1, 0.85]
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                {/* 
                  ROCKSTAR-STYLE FIVE-POINT STAR (Nestled at the bottom right corner)
                  Center (295, 202), Outer radius 24, Inner radius 10
                */}
                <motion.path
                  d="M 295 178 L 302 194 L 319 195 L 305 206 L 310 224 L 295 212 L 280 224 L 285 206 L 271 195 L 288 194 Z"
                  stroke="url(#nvStrokeGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ scale: 0.9, opacity: 0.6 }}
                  animate={{
                    scale: [0.9, 1.04, 0.9],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity
                  }}
                  style={{ transformOrigin: '295px 202px' }}
                />
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
