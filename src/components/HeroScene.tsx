import React from 'react';
import { motion } from 'motion/react';

interface HeroSceneProps {
  onSeeTheWork: () => void;
  onOpenContact: () => void;
  onOpenJoinUs?: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  onSeeTheWork,
  onOpenContact,
  onOpenJoinUs
}) => {
  return (
    <div className="relative w-full h-[100dvh] flex flex-col justify-end px-6 sm:px-12 md:px-16 lg:px-20 pb-16 sm:pb-24 text-left select-none pointer-events-auto">
      {/* Main Title: Nikverse positioned down near the bottom blur */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start mb-2"
      >
        <h1 className="font-senpai font-bold text-6xl xs:text-7xl sm:text-8xl md:text-9xl leading-[0.9] tracking-tight">
          <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Nik
          </span>
          <span className="text-amber-500 drop-shadow-[0_4px_20px_rgba(245,158,11,0.5)]">
            verse
          </span>
        </h1>
      </motion.div>

      {/* Subtitle: Placed right below the title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-md mt-1 mb-6 sm:mb-8 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
      >
        Welcome to my world. Sit back, watch, enjoy.
      </motion.p>

      {/* Buttons: Strictly SIDE BY SIDE on ONE horizontal line at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-row items-center gap-5 sm:gap-8 flex-nowrap select-none"
      >
        {/* Left Button: Bordered Box (Exactly like 'See the work' in Screenshot 2) */}
        <button
          onClick={onSeeTheWork}
          className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black/70 hover:bg-amber-400 text-white hover:text-zinc-950 font-bold font-sans text-sm sm:text-base border border-amber-500/80 rounded-none transition-colors cursor-pointer active:scale-95 whitespace-nowrap shadow-lg"
        >
          See the work
        </button>

        {/* Right Button: Open roles / Join us */}
        {onOpenJoinUs && (
          <button
            onClick={onOpenJoinUs}
            className="text-zinc-300 hover:text-white font-medium font-sans text-sm sm:text-base py-2.5 transition-colors cursor-pointer active:scale-95 whitespace-nowrap"
          >
            Open roles
          </button>
        )}

        {/* Contact link */}
        <button
          onClick={onOpenContact}
          className="text-zinc-400 hover:text-zinc-200 font-medium font-sans text-sm sm:text-base py-2.5 transition-colors cursor-pointer active:scale-95 whitespace-nowrap hidden xs:inline-block"
        >
          Contact
        </button>
      </motion.div>
    </div>
  );
};
