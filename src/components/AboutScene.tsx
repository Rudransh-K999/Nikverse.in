import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface AboutSceneProps {
  onFindMeHere?: () => void;
  onGetInTouch?: () => void;
}

// Counting animation component that counts up smoothly when loaded / viewed
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({
  target,
  suffix = '',
  duration = 1400
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out exponential easing curve
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(easeProgress * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const AboutScene: React.FC<AboutSceneProps> = ({
  onFindMeHere,
  onGetInTouch
}) => {
  return (
    <div
      id="about"
      className="relative w-full h-[100dvh] flex flex-col justify-start sm:justify-center overflow-y-auto sm:overflow-visible pt-20 sm:pt-16 md:pt-0 px-5 sm:px-12 md:px-16 lg:px-20 pb-8 sm:pb-12 select-none pointer-events-auto text-left scrollbar-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start space-y-4 sm:space-y-6 max-w-3xl my-auto sm:my-0"
      >
        {/* Creator Heading with Decorative Curved Accent */}
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-spider font-extrabold tracking-tight uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Behind <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">The Screen</span>
          </h2>

          <svg
            className="w-full h-2.5 sm:h-4 text-amber-400 mt-1 max-w-[170px] sm:max-w-[240px] drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
            viewBox="0 0 240 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11C45 4 140 2 236 8C190 12 85 14 15 13"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Improved Story Description */}
        <div className="space-y-2.5 sm:space-y-4 max-w-2xl font-medium leading-relaxed text-zinc-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          <p className="text-base sm:text-xl md:text-2xl font-spider font-bold text-white tracking-wide leading-snug">
            Hey, I'm <span className="text-amber-400">Nik</span> — storyteller, high-stakes gamer, and creator of the <span className="text-amber-400">Nikverse</span>.
          </p>

          <p className="font-sans text-zinc-300 font-normal leading-relaxed text-xs sm:text-sm md:text-base">
            From surviving 100 days in impossible hardcore Minecraft worlds to diving into late-night Los Santos chaos on GTA, I craft cinematic adventures driven by pure adrenaline, storytelling, and real community moments.
          </p>

          <p className="font-sans text-zinc-400 font-light leading-relaxed text-xs sm:text-sm">
            Every episode, broadcast, and challenge is built with a singular vision: breaking creative limits and building a welcoming space where viewers aren't just an audience — they're part of the journey.
          </p>
        </div>

        {/* Two Action Buttons: Side by Side on One Horizontal Row */}
        <div className="flex flex-row items-center gap-3 sm:gap-6 pt-1 sm:pt-3 flex-nowrap select-none">
          {onFindMeHere && (
            <button
              onClick={onFindMeHere}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-white/5 hover:bg-amber-400 text-zinc-300 hover:text-zinc-950 font-bold font-sans text-sm sm:text-base border border-white/20 hover:border-amber-400 rounded-none transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap shadow-lg"
            >
              Find me here
            </button>
          )}

          {onGetInTouch && (
            <button
              onClick={onGetInTouch}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white font-bold font-sans text-sm sm:text-base border border-white/20 hover:border-amber-400/80 rounded-none transition-colors cursor-pointer active:scale-95 whitespace-nowrap shadow-lg"
            >
              Get in touch
            </button>
          )}
        </div>

        {/* Creator Channel Stats with Animated Counter */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 mt-1 border-t border-white/15 w-full max-w-xl select-none">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-spider font-black text-amber-400 tracking-tight leading-none drop-shadow-[0_0_16px_rgba(245,158,11,0.5)]">
              <AnimatedCounter target={13} suffix="k+" duration={1200} />
            </span>
            <span className="text-xs sm:text-sm font-sans font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Subscribers
            </span>
          </div>

          <div className="h-8 w-px bg-white/15 hidden xs:block" />

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-spider font-black text-white tracking-tight leading-none drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]">
              <AnimatedCounter target={1} suffix="M+" duration={1000} />
            </span>
            <span className="text-xs sm:text-sm font-sans font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Views
            </span>
          </div>

          <div className="h-8 w-px bg-white/15 hidden xs:block" />

          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-spider font-black text-amber-400 tracking-tight leading-none drop-shadow-[0_0_16px_rgba(245,158,11,0.5)]">
              <AnimatedCounter target={300} suffix="+" duration={1600} />
            </span>
            <span className="text-xs sm:text-sm font-sans font-semibold text-zinc-400 mt-1 uppercase tracking-wider">
              Videos
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
