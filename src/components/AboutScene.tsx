import React from 'react';
import { motion } from 'motion/react';

interface AboutSceneProps {
  onFindMeHere?: () => void;
  onGetInTouch?: () => void;
}

export const AboutScene: React.FC<AboutSceneProps> = ({
  onFindMeHere,
  onGetInTouch
}) => {
  return (
    <div
      id="about"
      className="relative w-full h-[100dvh] flex flex-col justify-center max-w-4xl mx-auto px-6 sm:px-12 pb-12 select-none pointer-events-auto text-left"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start space-y-6"
      >
        {/* Creator Heading with Decorative Curved Accent */}
        <div className="relative inline-block">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-spider font-extrabold tracking-tight uppercase text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Behind <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">The Screen</span>
          </h2>

          <svg
            className="w-full h-3 sm:h-4 text-amber-400 mt-1 max-w-[200px] sm:max-w-[260px] drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
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

        {/* Story Text */}
        <div className="space-y-4 max-w-2xl text-base sm:text-xl font-medium leading-relaxed text-zinc-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          <p className="text-lg sm:text-2xl font-spider font-bold text-white tracking-wide leading-snug">
            Hey, I'm <span className="text-amber-400">Nik</span> — gaming creator, hardcore survivalist, and world builder.
          </p>

          <p className="font-sans text-zinc-300 font-normal leading-relaxed text-sm sm:text-base">
            What started with simple survival clips has grown into an interconnected universe of hardcore 100-day challenges, late-night GTA chaos, and the thriving <span className="text-amber-300 font-semibold">VoidMC</span> SMP realm.
          </p>

          <p className="font-sans text-zinc-400 font-normal leading-relaxed text-xs sm:text-sm">
            Every stream and video is produced with one vision: creating genuine moments, insane challenges, and an open space where every gamer feels like family.
          </p>
        </div>

        {/* Two Action Buttons: Side by Side on One Horizontal Row */}
        <div className="flex flex-row items-center gap-4 sm:gap-6 pt-3 flex-nowrap select-none">
          {onFindMeHere && (
            <button
              onClick={onFindMeHere}
              className="px-5 sm:px-7 py-2.5 sm:py-3 bg-black/70 hover:bg-amber-400 text-white hover:text-zinc-950 font-bold font-sans text-sm sm:text-base border border-amber-500/80 rounded-none transition-colors cursor-pointer active:scale-95 whitespace-nowrap shadow-lg"
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
      </motion.div>
    </div>
  );
};
