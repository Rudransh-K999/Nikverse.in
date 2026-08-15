import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ThemeAccent, ThemeMode } from '../types';

interface HeaderProps {
  isReady: boolean;
  currentAccent: ThemeAccent;
  themeMode: ThemeMode;
  activeSection?: string;
  onSelectSection?: (section: string) => void;
  onSelectAccent: (accent: ThemeAccent) => void;
  onToggleTheme: () => void;
  onOpenShare: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isReady,
  currentAccent,
  themeMode,
  activeSection = 'home',
  onSelectSection,
  onSelectAccent,
  onToggleTheme,
  onOpenShare,
  onOpenContact
}) => {
  // Animation stage sequence:
  // 'hidden' -> 'logo-mid' (logo appears center) -> 'expanding' (header extends from sides) -> 'logo-shift' (logo shifts to left) -> 'reveal-content' (links & text reveal)
  const [animStage, setAnimStage] = useState<'hidden' | 'logo-mid' | 'expanding' | 'logo-shift' | 'reveal-content'>('hidden');
  const [logoImgSrc, setLogoImgSrc] = useState(PROFILE_INFO.avatar || 'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png');

  useEffect(() => {
    if (!isReady) {
      setAnimStage('hidden');
      return;
    }

    // 1. Logo in circle comes in middle
    setAnimStage('logo-mid');

    // 2. Header comes out of the sides of that round circle (after 450ms)
    const timer1 = setTimeout(() => {
      setAnimStage('expanding');
    }, 450);

    // 3. Logo shifts from center to left side (after header expands ~700ms)
    const timer2 = setTimeout(() => {
      setAnimStage('logo-shift');
    }, 1150);

    // 4. Links and text reveal after logo finish shifting to left (~450ms)
    const timer3 = setTimeout(() => {
      setAnimStage('reveal-content');
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [isReady]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Who Am I' },
    { id: 'channels', label: 'Platforms' }
  ];

  const handleNavClick = (id: string) => {
    if (onSelectSection) {
      onSelectSection(id);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Authentic Apple / Vision Pro Liquid Glass Pill Styling
  const liquidGlassStyle = 'liquid-glass-container text-white';

  if (animStage === 'hidden') return null;

  const isLogoCentered = animStage === 'logo-mid' || animStage === 'expanding';
  const showHeaderContent = animStage === 'reveal-content';

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 pb-1 pointer-events-none flex justify-center">
      <motion.div
        layout
        initial={{ width: '64px', opacity: 0, scale: 0.85 }}
        animate={{
          width: isLogoCentered ? '64px' : '100%',
          opacity: 1,
          scale: 1,
        }}
        transition={{
          width: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          layout: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }}
        className={`max-w-7xl mx-auto h-14 sm:h-16 px-3 sm:px-6 flex items-center justify-between rounded-full border pointer-events-auto relative overflow-hidden transition-colors duration-500 ${liquidGlassStyle}`}
      >
        {/* Specular Liquid Glass Top Gloss Highlight Line */}
        <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-purple-500/5 pointer-events-none" />

        {/* Brand / Logo Group with Smooth Layout Shift from Center to Left */}
        <motion.div 
          layout
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center gap-3 cursor-pointer group z-10 ${
            isLogoCentered ? 'absolute left-1/2 -translate-x-1/2' : 'relative left-0 translate-x-0'
          }`}
          onClick={() => handleNavClick('home')}
        >
          {/* Round Avatar Icon */}
          <motion.div 
            layout
            whileHover={{ scale: 1.1, rotate: 3 }}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border shadow-lg shrink-0 ${
              themeMode === 'light' 
                ? 'border-white/90 ring-2 ring-amber-500/40' 
                : 'border-white/40 ring-2 ring-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
            }`}
          >
            <img
              src={logoImgSrc}
              referrerPolicy="no-referrer"
              onError={() => setLogoImgSrc(PROFILE_INFO.fallbackAvatar)}
              alt={PROFILE_INFO.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Brand Name Text (Reveals AFTER logo shifts to left) */}
          <AnimatePresence>
            {showHeaderContent && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col relative whitespace-nowrap"
              >
                <div className="flex items-center gap-1.5">
                  <span className="font-black tracking-wider text-base sm:text-lg uppercase font-sans heading-yellow-outline">
                    {PROFILE_INFO.name}
                  </span>
                </div>
                {/* Hand-drawn style underline accent */}
                <svg 
                  className="w-full h-2 text-amber-400 absolute -bottom-1 left-0 pointer-events-none drop-shadow-[0_0_6px_rgba(245,158,11,0.6)]" 
                  viewBox="0 0 100 12" 
                  preserveAspectRatio="none"
                >
                  <path d="M 0,8 Q 25,2 50,8 T 100,6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Nav & Corner Actions (Reveals AFTER logo shifts to left) */}
        <AnimatePresence>
          {showHeaderContent && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 sm:gap-8 z-10 ml-auto"
            >
              {/* Navigation links with underline animation */}
              <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] font-extrabold">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.35 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`group py-1 cursor-pointer transition-colors duration-200 relative flex items-center justify-center ${
                        isActive
                          ? themeMode === 'light'
                            ? 'text-amber-600 font-black'
                            : 'text-amber-300 font-black'
                          : themeMode === 'light'
                            ? 'text-zinc-800 hover:text-amber-600 font-bold'
                            : 'text-zinc-200 hover:text-amber-300 font-bold'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)] ${
                          isActive
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </nav>

              {/* Light / Dark Mode Toggle Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={onToggleTheme}
                className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-base cursor-pointer transition-all duration-300 ${
                  themeMode === 'light'
                    ? 'bg-white/80 border border-zinc-200 shadow-sm hover:scale-110 text-amber-600'
                    : 'liquid-glass-button hover:scale-110 text-amber-300'
                }`}
                title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {themeMode === 'light' ? '☀️' : '🌙'}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
};

