import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, Sparkles, Play } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ClickToEnterProps {
  onEnter: () => void;
}

export const ClickToEnter: React.FC<ClickToEnterProps> = ({ onEnter }) => {
  const [entered, setEntered] = useState(false);

  const handleClick = () => {
    setEntered(true);
    onEnter();
  };

  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl cursor-pointer select-none overflow-hidden p-4 text-center"
        >
          {/* Animated background ambient glowing circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[90px] animate-ping" style={{ animationDuration: '4s' }} />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center max-w-sm"
          >
            {/* Avatar Glow Ring */}
            <div className="relative mb-6 group">
              <div className="w-24 h-24 rounded-full border-4 border-emerald-500/30 p-1 bg-gradient-to-b from-emerald-400 to-green-600 shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                <img
                  src={PROFILE_INFO.avatar}
                  alt={PROFILE_INFO.name}
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-white via-white to-white/60 bg-clip-text italic uppercase mb-2">
              {PROFILE_INFO.name}
            </h1>

            <p className="text-sm text-emerald-400 font-semibold uppercase tracking-wider mb-8 max-w-xs">
              Minecraft SMP Builder & Creator
            </p>

            {/* Pulsing Enter Button */}
            <div className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-white font-medium text-sm backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="font-bold uppercase text-xs tracking-wider">[ click to enter ]</span>
              <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            </div>

            <p className="mt-4 text-xs text-zinc-400 tracking-wider uppercase font-mono">
              nikverse • guns.lol aesthetic
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
