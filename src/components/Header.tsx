import React, { useState } from 'react';
import { X, Menu, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HeaderProps {
  activeSection: string;
  currentPage?: string;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  onNavigate: (page: 'home' | 'about' | 'contact' | 'join-us' | 'socials') => void;
  isReady?: boolean;
}

interface NavItem {
  id: 'home' | 'about' | 'contact' | 'join-us' | 'socials';
  label: string;
  disabled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  currentPage = 'home',
  themeMode,
  onToggleTheme,
  onNavigate
}) => {
  const loadingScreenLogo = 'https://i.postimg.cc/DZbFHF0v/player-poster.png';
  const [logoImgSrc, setLogoImgSrc] = useState(loadingScreenLogo);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nav items: HOME, ABOUT ME, CONTACT US, JOIN US (disabled), SOCIALS
  const navItems: NavItem[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT ME' },
    { id: 'contact', label: 'CONTACT US' },
    { id: 'join-us', label: 'JOIN US', disabled: true },
    { id: 'socials', label: 'SOCIALS' }
  ];

  const handleNavClick = (id: 'home' | 'about' | 'contact' | 'join-us' | 'socials', disabled?: boolean) => {
    if (disabled) return;
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Universal Top Navbar: Fully Transparent */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 bg-transparent border-b border-transparent shadow-none px-4 sm:px-8 flex items-center justify-between transition-all select-none">
        {/* Left: Avatar + Title */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-amber-400/60 ring-1 ring-amber-400/40 shrink-0 bg-black shadow-[0_0_12px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">
            <img
              src={logoImgSrc}
              referrerPolicy="no-referrer"
              onError={() => setLogoImgSrc('https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png')}
              alt={PROFILE_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>

          <span className="font-landing font-bold tracking-normal text-xl sm:text-2xl text-amber-400 group-hover:text-amber-300 transition-colors">
            {PROFILE_INFO.name}
          </span>
        </div>

        {/* Right Nav Links (Desktop) & Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm uppercase font-semibold tracking-wider">
            {navItems.map((item) => {
              if (item.disabled) {
                return (
                  <span
                    key={item.id}
                    title="Applications Closed"
                    className="py-1.5 text-zinc-500 uppercase font-semibold cursor-not-allowed opacity-50 flex items-center gap-1.5 select-none"
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] tracking-normal font-mono uppercase bg-white/5 border border-white/10 px-1 py-0.2 rounded text-zinc-400">
                      Closed
                    </span>
                  </span>
                );
              }

              const isActive =
                currentPage === item.id ||
                (currentPage === 'home' && item.id === 'home' && activeSection === 'home') ||
                (currentPage === 'home' && item.id === 'about' && activeSection === 'story');

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.disabled)}
                  className={`py-1.5 transition-all duration-200 relative cursor-pointer uppercase font-semibold ${
                    isActive
                      ? 'text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]'
                      : 'text-zinc-300 hover:text-amber-300'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded text-sm text-zinc-300 hover:text-amber-300 hover:bg-white/10 transition-colors cursor-pointer"
            title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle theme mode"
          >
            {themeMode === 'light' ? '☀️' : '🌙'}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-200 hover:text-amber-400 hover:bg-white/10 rounded transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 p-5 flex flex-col gap-3 shadow-2xl select-none"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.disabled) {
                  return (
                    <div
                      key={item.id}
                      className="w-full py-3 px-4 rounded text-left text-sm uppercase font-semibold flex items-center justify-between text-zinc-600 bg-black/30 border border-white/5 cursor-not-allowed opacity-60"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">
                        Closed
                      </span>
                    </div>
                  );
                }

                const isActive =
                  currentPage === item.id ||
                  (currentPage === 'home' && item.id === 'home' && activeSection === 'home') ||
                  (currentPage === 'home' && item.id === 'about' && activeSection === 'story');

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id, item.disabled)}
                    className={`w-full py-3 px-4 rounded text-left text-sm uppercase font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30'
                        : 'text-zinc-200 hover:bg-white/5 hover:text-amber-300'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-zinc-500'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://discord.gg/UqxMNKaAnc"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 rounded bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span>Join Discord Community</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
