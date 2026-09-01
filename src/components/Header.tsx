import React, { useState, useEffect } from 'react';
import { Briefcase, X, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HeaderProps {
  activeSection: string;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  onSelectSection?: (sectionId: string) => void;
  onOpenContact: () => void;
  isReady?: boolean;
  onOpenJoinUs?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  themeMode,
  onToggleTheme,
  onSelectSection,
  onOpenContact,
  isReady = true,
  onOpenJoinUs
}) => {
  // Animation stage sequence
  const [animStage, setAnimStage] = useState<'hidden' | 'logo-mid' | 'expanding' | 'logo-shift' | 'reveal-content'>('hidden');
  const loadingScreenLogo = 'https://i.postimg.cc/DZbFHF0v/player-poster.png';
  const [logoImgSrc, setLogoImgSrc] = useState(loadingScreenLogo);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Header navigation items strictly: Recent Streams, Contact Us, and Join Us (disabled)
  const navItems = [
    { id: 'uploads', label: 'Recent Streams' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'join-us', label: 'Join Us', isSpecial: true, isDisabled: true }
  ];

  const handleNavClick = (id: string, isDisabled?: boolean) => {
    if (isDisabled) return;
    setIsMobileMenuOpen(false);
    if (id === 'join-us' && onOpenJoinUs) {
      onOpenJoinUs();
      return;
    }
    if (id === 'contact') {
      onOpenContact();
      return;
    }
    if (onSelectSection) {
      onSelectSection(id);
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const liquidGlassStyle = 'liquid-glass-container text-white';

  if (animStage === 'hidden') return null;

  const isLogoCentered = animStage === 'logo-mid' || animStage === 'expanding';
  const showHeaderContent = animStage === 'reveal-content';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 pt-3 pb-1 pointer-events-none flex justify-center">
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-amber-500/5 pointer-events-none" />

          {/* Brand / Logo Group with Smooth Layout Shift from Center to Left */}
          <motion.div 
            layout
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-center gap-3 cursor-pointer group z-10 ${
              isLogoCentered ? 'absolute left-1/2 -translate-x-1/2' : 'relative left-0 translate-x-0'
            }`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Round Avatar Icon using loading screen image */}
            <motion.div 
              layout
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/80 ring-2 ring-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.4)] shrink-0 bg-black"
            >
              <img
                src={logoImgSrc}
                referrerPolicy="no-referrer"
                onError={() => setLogoImgSrc('https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png')}
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
                className="flex items-center gap-2 sm:gap-5 lg:gap-8 z-10 ml-auto"
              >
                {/* Desktop Navigation links strictly: Recent Streams, Contact Us, Join Us */}
                <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-mono uppercase tracking-[0.12em] font-extrabold">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const isDisabled = item.isDisabled;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.35 }}
                        disabled={isDisabled}
                        onClick={() => handleNavClick(item.id, isDisabled)}
                        className={`group py-1 transition-colors duration-200 relative flex items-center justify-center gap-1.5 ${
                          isDisabled
                            ? 'opacity-40 cursor-not-allowed text-zinc-400'
                            : item.isSpecial
                              ? 'text-amber-400 hover:text-amber-300 font-black cursor-pointer'
                              : isActive
                                ? 'text-amber-300 font-black cursor-pointer'
                                : 'text-zinc-200 hover:text-amber-300 font-bold cursor-pointer'
                        }`}
                      >
                        {item.isSpecial && <Briefcase className="w-3.5 h-3.5 text-amber-400" />}
                        <span>{item.label}</span>
                        {isDisabled && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 border border-white/20 text-zinc-400 uppercase font-mono font-bold leading-none">
                            Closed
                          </span>
                        )}
                        {!isDisabled && (
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(245,158,11,0.8)] ${
                              isActive
                                ? 'w-full'
                                : 'w-0 group-hover:w-full'
                            }`}
                          />
                        )}
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
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-base cursor-pointer transition-all duration-300 liquid-glass-button hover:scale-110 text-amber-300"
                  title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                >
                  {themeMode === 'light' ? '☀️' : '🌙'}
                </motion.button>

                {/* Mobile Three-Lines Hamburger Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`flex md:hidden w-10 h-10 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer shadow-md active:scale-95 ${
                    isMobileMenuOpen
                      ? 'bg-amber-400 text-zinc-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md'
                  }`}
                  aria-label="Toggle navigation menu"
                  title="Open Navigation Menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 stroke-[2.5]" />
                  ) : (
                    /* 3 Lines Icon */
                    <div className="flex flex-col gap-1 items-center justify-center w-5">
                      <span className="w-5 h-0.5 bg-current rounded-full transition-transform" />
                      <span className="w-5 h-0.5 bg-current rounded-full transition-transform" />
                      <span className="w-3.5 h-0.5 bg-current rounded-full self-start transition-transform" />
                    </div>
                  )}
                </button>

              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* MOBILE FLOATING LIQUID GLASS DROPDOWN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm pt-20 px-3 pb-6 flex flex-col justify-start overflow-y-auto"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Ambient Glow */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-amber-500/15" />

            {/* Transparent Liquid Glass Dropdown Container */}
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm mx-auto rounded-3xl border border-amber-400/30 p-5 relative overflow-hidden flex flex-col gap-3 backdrop-blur-xl bg-black/60 text-white shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Specular Top Gloss Highlight Line */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent pointer-events-none" />

              {/* Navigation Items List with Yellow / Amber Colors (No black text) */}
              <div className="flex flex-col gap-2 relative z-10">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const isJoinUs = item.id === 'join-us';
                  const isDisabled = item.isDisabled;

                  return (
                    <button
                      key={item.id}
                      disabled={isDisabled}
                      onClick={() => handleNavClick(item.id, isDisabled)}
                      className={`w-full min-h-[46px] px-4 py-2.5 rounded-2xl border font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 ${
                        isDisabled
                          ? 'opacity-40 cursor-not-allowed bg-white/5 border-white/10 text-amber-200/50'
                          : isJoinUs
                            ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 border-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.35)] font-black cursor-pointer active:scale-[0.98]'
                            : isActive
                              ? 'bg-amber-400/20 text-amber-300 border-amber-400/60 shadow-sm backdrop-blur-sm cursor-pointer'
                              : 'bg-white/5 hover:bg-amber-400/15 text-amber-300 hover:text-yellow-300 border-white/10 hover:border-amber-400/40 cursor-pointer active:scale-[0.98]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {isJoinUs && <Briefcase className="w-3.5 h-3.5 text-zinc-950 shrink-0" />}
                        <span className="font-black tracking-wide">{item.label}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isDisabled ? (
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-black/40 text-amber-300/60 border border-amber-400/20">
                            Closed
                          </span>
                        ) : (
                          <ChevronRight className="w-4 h-4 text-amber-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Discord & Close Button */}
              <div className="mt-1 pt-3 border-t border-white/15 flex flex-col gap-2 relative z-10">
                <a
                  href="https://discord.gg/9bCw52SCy4"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full min-h-[42px] px-3.5 py-2.5 rounded-2xl bg-[#5865F2]/80 hover:bg-[#5865F2] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer border border-[#5865F2]/40 backdrop-blur-sm"
                >
                  <span className="text-white">Join Discord Community</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white" />
                </a>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[11px] font-mono text-amber-400 hover:text-yellow-300 uppercase tracking-widest text-center pt-1 underline underline-offset-4 cursor-pointer"
                >
                  Close Menu
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
