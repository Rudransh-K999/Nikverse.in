import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUp,
  ExternalLink,
  Code2,
  X,
  Youtube,
  Instagram,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface FooterProps {
  themeMode?: ThemeMode;
  onNavigate?: (sectionId: string) => void;
  onOpenContact?: () => void;
  onOpenJoinUs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  themeMode = 'light',
  onNavigate,
  onOpenContact
}) => {
  const [isSecretOpen, setIsSecretOpen] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const loadingScreenLogo = 'https://i.postimg.cc/DZbFHF0v/player-poster.png';

  // Log Developer Attribution in Browser Console
  useEffect(() => {
    const bannerStyle =
      'color: #facc15; font-size: 14px; font-weight: 800; background: #09090b; padding: 10px 18px; border: 2px solid #facc15; border-radius: 8px; font-family: monospace; text-shadow: 0 0 8px rgba(250, 204, 21, 0.4);';
    console.log('%c⚡ Developed and Managed By rudra01.is-a.dev', bannerStyle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Easter Egg: Click footer logo 4 times to open developer credits
  const handleLogoClick = () => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 4) {
      clickCountRef.current = 0;
      setIsSecretOpen(true);
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 1500);
    }
  };

  // Official Socials with platform icons
  const socialLogos = [
    {
      label: 'YouTube',
      url: 'https://youtube.com/@OnlyNikVerse',
      icon: <Youtube className="w-4 h-4 text-red-500" />,
      hoverColor: 'hover:border-red-500/60 hover:bg-red-500/15'
    },
    {
      label: 'Discord',
      url: 'https://discord.gg/9bCw52SCy4',
      icon: (
        <svg className="w-4 h-4 fill-[#5865F2]" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      ),
      hoverColor: 'hover:border-[#5865F2]/60 hover:bg-[#5865F2]/15'
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/onlynikverse',
      icon: <Instagram className="w-4 h-4 text-pink-400" />,
      hoverColor: 'hover:border-pink-500/60 hover:bg-pink-500/15'
    },
    {
      label: 'Kick',
      url: 'https://kick.com/onlynikverse',
      icon: (
        <span className="font-mono text-xs font-black text-emerald-400 leading-none">
          K
        </span>
      ),
      hoverColor: 'hover:border-emerald-500/60 hover:bg-emerald-500/15'
    },
    {
      label: 'Email',
      url: `mailto:${PROFILE_INFO.sponsorEmail || 'team.nikverse@gmail.com'}`,
      icon: <Mail className="w-4 h-4 text-amber-300" />,
      hoverColor: 'hover:border-amber-400/60 hover:bg-amber-400/15'
    }
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'story' },
    { label: 'Recent Streams', id: 'uploads' },
    { label: 'Discord', id: 'community' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <footer
        className={`w-full border-t relative z-20 transition-colors duration-500 mt-16 sm:mt-20 ${
          themeMode === 'light'
            ? 'border-white/20 bg-black/40 backdrop-blur-2xl text-white shadow-[0_-10px_35px_rgba(0,0,0,0.2)]'
            : 'border-white/15 bg-black/60 backdrop-blur-2xl text-white shadow-[0_-10px_35px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Liquid Glass Top Gloss Highlight Line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-7 sm:py-8 flex flex-col gap-5">
          
          {/* Main Clean Row: Logo + Platform Icon Logos + Scroll to top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pb-5 border-b border-white/10">
            
            {/* Logo & Brand (Click 4 times for Dev credits) */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleLogoClick}
                title="⚡ Nikverse Logo"
                className="w-10 h-10 rounded-full overflow-hidden border border-white/70 ring-2 ring-amber-400/40 shadow-[0_0_12px_rgba(245,158,11,0.35)] shrink-0 bg-black cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                <img
                  src={loadingScreenLogo}
                  alt={PROFILE_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
              <span className="font-sans font-black text-lg tracking-wide uppercase heading-yellow-outline block">
                {PROFILE_INFO.name}
              </span>
            </div>

            {/* Social Platform Logos / Icons */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {socialLogos.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={item.label}
                  title={item.label}
                  className={`w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 backdrop-blur-sm shadow-sm ${item.hoverColor}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Scroll Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-amber-400 hover:text-zinc-950 text-zinc-200 border border-white/20 hover:border-amber-400 text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 cursor-pointer active:scale-95 shadow-sm shrink-0"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>

          </div>

          {/* Simple Bottom Row: Quick Nav + Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 text-center sm:text-left">
            
            {/* Quick Page Text Links */}
            <div className="flex items-center gap-4 flex-wrap justify-center font-bold">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    if (link.id === 'contact' && onOpenContact) {
                      onOpenContact();
                      return;
                    }
                    if (onNavigate) {
                      onNavigate(link.id);
                    } else {
                      const elem = document.getElementById(link.id);
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Copyright Note */}
            <div>
              <span>© {new Date().getFullYear()} {PROFILE_INFO.name}. All rights reserved.</span>
            </div>

          </div>

        </div>
      </footer>

      {/* DEVELOPER CREDITS MODAL (Triggered when user clicks footer logo 4 times) */}
      <AnimatePresence>
        {isSecretOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSecretOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-zinc-950/95 border-2 border-amber-400/90 text-white shadow-[0_0_50px_rgba(245,158,11,0.5)] overflow-hidden backdrop-blur-2xl text-left"
            >
              {/* Specular top highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setIsSecretOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-inner">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 block">
                    Developer Credits
                  </span>
                  <h3 className="font-sans font-black text-lg text-white">
                    Site Information
                  </h3>
                </div>
              </div>

              {/* Developer Message */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 my-4 space-y-2">
                <p className="font-mono text-sm sm:text-base font-bold text-amber-300 leading-relaxed">
                  Site is developed and managed By -{' '}
                  <a
                    href="https://rudra01.is-a.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-amber-200 text-amber-400 transition-colors"
                  >
                    rudra01.is-a.dev
                  </a>
                </p>
                <p className="text-xs text-zinc-300 font-mono pt-1">
                  Made with ❤️ for the Nikverse Family.
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <a
                  href="https://rudra01.is-a.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <span>Visit Developer Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsSecretOpen(false)}
                  className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
