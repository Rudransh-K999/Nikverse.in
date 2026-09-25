import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Gamepad2, Youtube, MessageSquare, UserCheck } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ThemeMode } from '../types';

interface HeroSectionProps {
  themeMode?: ThemeMode;
  onExplore?: () => void;
  onOpenContact?: () => void;
  onOpenJoinUs?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  themeMode = 'light',
  onExplore,
  onOpenContact,
  onOpenJoinUs
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [whoAmISrc, setWhoAmISrc] = useState<string>(
    PROFILE_INFO.whoAmIImage || 'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png'
  );

  // High precision scroll tracking across the 3-stage cinematic story sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // 1. BACKGROUND: Parallax Zoom & Cinematic Vignette
  const bgScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.25]);
  const bgCurtainOpacity = useTransform(scrollYProgress, [0.15, 0.7], [0, 0.85]);

  // 2. SCENE 1: LANDING PAGE (HERO)
  // Visible at start -> dissolves away as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.94]);
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, -35]);
  const heroPointerEvents = useTransform(scrollYProgress, (v) => (v < 0.2 ? 'auto' : 'none'));

  // 3. SCENE 2: ABOUT ME (WHO AM I)
  // Appears in-place as Landing Page disappears -> dissolves away on further scroll
  const aboutOpacity = useTransform(scrollYProgress, [0.22, 0.35, 0.58, 0.72], [0, 1, 1, 0]);
  const aboutScale = useTransform(scrollYProgress, [0.22, 0.35, 0.58, 0.72], [0.94, 1, 1, 0.94]);
  const aboutY = useTransform(scrollYProgress, [0.22, 0.35, 0.58, 0.72], [35, 0, 0, -35]);
  const aboutPointerEvents = useTransform(scrollYProgress, (v) => (v >= 0.24 && v <= 0.68 ? 'auto' : 'none'));

  // Poster image asset
  const heroPosterImage = 'https://i.postimg.cc/d3F2Ybxj/Chat-GPT-Image-Sep-24-2026-09-27-24-PM.png';

  const handleSeeTheWork = () => {
    const channelsElem = document.getElementById('channels');
    if (channelsElem) {
      channelsElem.scrollIntoView({ behavior: 'smooth' });
    } else if (onExplore) {
      onExplore();
    }
  };

  return (
    <div id="hero-container" ref={containerRef} className="relative w-full h-[260vh] select-none">
      {/* Pinned Sticky Viewport: Holds scene in place while scrolling */}
      <section
        id="home"
        className="sticky top-0 w-full h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* BACKGROUND: Full-Bleed Artwork Image with Parallax & Dark Curtain */}
        <motion.div
          style={{ scale: bgScale }}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none origin-center will-change-transform"
        >
          <img
            src={heroPosterImage}
            alt="Nikverse"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            style={{ objectPosition: 'center 0%' }}
            className="w-full h-full object-cover pointer-events-none select-none"
          />

          {/* Natural Cinematic Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/55 via-35% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent pointer-events-none" />

          {/* Smooth Dark Curtain deepening on scroll */}
          <motion.div
            style={{ opacity: bgCurtainOpacity }}
            className="absolute inset-0 bg-black pointer-events-none"
          />
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* SCENE 1: LANDING PAGE PART (Disappears on scroll) */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            pointerEvents: heroPointerEvents
          }}
          className="absolute inset-0 z-20 flex flex-col justify-end w-full max-w-7xl mx-auto px-6 sm:px-12 pb-14 sm:pb-20 text-left will-change-transform"
        >
          {/* Main Title: Nik (White) / verse (Amber/Orange) in Barlow Condensed display font */}
          <h1 className="font-landing font-bold leading-[0.88] select-none flex flex-col items-start text-6xl xs:text-7xl sm:text-8xl md:text-9xl mb-2">
            <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Nik
            </span>
            <span className="text-amber-400 drop-shadow-[0_4px_20px_rgba(245,158,11,0.5)]">
              verse
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-md mt-2 mb-6 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Welcome to my world. Sit back, watch, enjoy.
          </p>

          {/* Buttons: Strictly SIDE BY SIDE on ONE horizontal line */}
          <div className="flex flex-row items-center gap-6 sm:gap-8 flex-nowrap select-none">
            {/* Left Button: Box with amber border */}
            <button
              onClick={handleSeeTheWork}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-black/70 hover:bg-amber-400 text-white hover:text-zinc-950 font-bold font-sans text-sm sm:text-base border border-amber-500/80 rounded-none transition-colors cursor-pointer active:scale-95 whitespace-nowrap"
            >
              See the work
            </button>

            {/* Right Button: Plain text side by side */}
            <button
              onClick={onOpenContact}
              className="text-zinc-300 hover:text-white font-medium font-sans text-sm sm:text-base py-2.5 transition-colors cursor-pointer active:scale-95 whitespace-nowrap"
            >
              Contact
            </button>

            {/* Optional open roles link */}
            {onOpenJoinUs && (
              <button
                onClick={onOpenJoinUs}
                className="text-zinc-400 hover:text-zinc-200 font-medium font-sans text-sm sm:text-base py-2.5 transition-colors cursor-pointer active:scale-95 whitespace-nowrap hidden xs:inline-block"
              >
                Open roles
              </button>
            )}
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* SCENE 2: ABOUT ME (WHO AM I) */}
        {/* Appears when landing page disappears -> Disappears on further scroll */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          id="story"
          style={{
            opacity: aboutOpacity,
            scale: aboutScale,
            y: aboutY,
            pointerEvents: aboutPointerEvents
          }}
          className="absolute inset-0 z-30 flex items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 pointer-events-auto will-change-transform"
        >
          <div className="w-full rounded-3xl p-6 sm:p-10 relative overflow-hidden text-white transition-all duration-500 bg-gradient-to-br from-[#12110c]/95 via-zinc-950/95 to-black/95 backdrop-blur-xl border-2 border-amber-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.25)] flex flex-col">
            
            {/* Ambient radial lighting glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Row: Heading on left, Creator avatar on right */}
            <div className="w-full flex flex-row items-center justify-between gap-3 sm:gap-6 relative z-10">
              <div className="flex-1 flex flex-col items-start justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-[11px] sm:text-xs font-mono font-black tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>ABOUT THE CREATOR</span>
                </div>
                <h2 className="heading-yellow-outline-lg text-3xl sm:text-4xl lg:text-5xl font-black font-sans m-0 text-left">
                  Who Am I
                </h2>
              </div>

              {/* Character Avatar with radiant backglow */}
              <div className="flex-shrink-0 flex items-end justify-end select-none pointer-events-none relative">
                <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full scale-75" />
                <img
                  src={whoAmISrc}
                  alt="Who Am I - Nikverse"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  onError={() => setWhoAmISrc('https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png')}
                  className="relative z-10 w-auto h-auto max-h-[105px] xs:max-h-[135px] sm:max-h-[170px] md:max-h-[200px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Golden Dividing Line */}
            <div className="w-full h-[2.5px] my-3 sm:my-5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.7)]" />

            {/* Content & Highlight Tags */}
            <div className="w-full space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-200 text-left relative z-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                Hey, I'm <span className="text-amber-400 heading-yellow-outline">Nikverse</span> — Minecraft Creator & Storyteller
              </p>

              <p className="text-zinc-300">
                What started as a passion project turned into a community I never expected. Every subscriber, every view, every comment — it all means the world to me.
              </p>

              <p className="text-zinc-300">
                I create because I love it. Simple as that. Pull up a chair, hit subscribe, and let's go on this journey together.
              </p>

              {/* Colorful Highlight Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                  <Gamepad2 className="w-4 h-4 text-amber-400" /> Minecraft SMP & Lore
                </span>
                <span className="px-3 py-1 rounded-lg bg-red-500/15 border border-red-400/40 text-red-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                  <Youtube className="w-4 h-4 text-red-400" /> 400K+ Subscribed
                </span>
                <span className="px-3 py-1 rounded-lg bg-indigo-500/15 border border-indigo-400/40 text-indigo-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                  <MessageSquare className="w-4 h-4 text-indigo-400" /> 20K+ Discord Realm
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                  <UserCheck className="w-4 h-4 text-emerald-400" /> Founder @ Void MC
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
};
