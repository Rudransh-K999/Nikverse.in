import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Youtube,
  Tv,
  MessageSquare,
  Gamepad2,
  Video,
  Twitter,
  Instagram,
  UserCheck,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import {
  PROFILE_INFO,
  FEATURED_VIDEOS,
  INITIAL_GUESTBOOK,
  CHANNELS_AND_PLATFORMS
} from '../data/portfolioData';
import { ThemeAccent, GuestbookEntry, ThemeMode } from '../types';

interface GlassPanelProps {
  accent: ThemeAccent;
  themeMode?: ThemeMode;
  onOpenContact: () => void;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  themeMode = 'light',
}) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(PROFILE_INFO.avatar);
  const [whoAmISrc, setWhoAmISrc] = useState<string>(
    PROFILE_INFO.whoAmIImage || 'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png'
  );

  useEffect(() => {
    setAvatarSrc(PROFILE_INFO.avatar);
  }, [PROFILE_INFO.avatar]);

  // Dynamic typing & backspacing loop effect for "I am a ..."
  const phrases = [
    "I am a Content Creator",
    "I am an Entertainer",
    "I am a Storyteller",
    "I am Nikverse · Minecraft Creator"
  ];
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && typedText === currentPhrase) {
      speed = 2000;
    } else if (isDeleting && typedText === '') {
      speed = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
      } else if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIdx]);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-2 sm:py-4 z-20 flex flex-col gap-12 sm:gap-16">
      
      {/* HERO LANDING SECTION (#home) */}
      <section id="home" className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-center items-center pt-2 sm:pt-4 pb-4 overflow-visible">
        
        {/* Main Landing Content with side image float & wrapping layout for both mobile & desktop */}
        <div className="w-full relative z-10 px-2 sm:px-4 my-auto">
          
          {/* Floated Avatar on right (on mobile & desktop sits beside headings and text wraps) */}
          <div className="float-right ml-3 sm:ml-6 md:ml-8 mb-4 max-w-[44%] sm:max-w-[46%] md:max-w-[48%] lg:max-w-[480px] flex justify-end items-center pointer-events-none select-none">
            <div className="animate-hero-float will-change-transform">
              <img
                src={avatarSrc}
                referrerPolicy="no-referrer"
                onError={() => setAvatarSrc(PROFILE_INFO.fallbackAvatar)}
                alt="Nikverse Content Creator Side Avatar"
                loading="eager"
                decoding="async"
                className="max-h-[320px] xs:max-h-[380px] sm:max-h-[480px] lg:max-h-[600px] w-auto max-w-full object-contain pointer-events-none select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] drop-shadow-[0_0_20px_rgba(245,158,11,0.35)]"
              />
            </div>
          </div>

          {/* Hero Content Left */}
          <div className="py-2 sm:py-6 text-left">
            {/* Animated Typing Line above name */}
            <div className="min-h-[28px] flex items-center mb-2 overflow-hidden">
              <p className="text-[clamp(0.68rem,1.9vw,0.875rem)] font-mono tracking-[0.12em] sm:tracking-[0.2em] uppercase font-extrabold flex items-center gap-1.5 text-white-outline whitespace-nowrap">
                <span>{typedText}</span>
                <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse ml-0.5 shadow-[0_0_8px_#f59e0b]" />
              </p>
            </div>

            {/* Display Heading: Hey I am Nikverse (Yellow with black borders - Auto scaling single line) */}
            <h1 className="fluid-heading-hero heading-yellow-outline-lg font-black uppercase font-sans mb-2 sm:mb-3">
              Hey I am Nikverse
            </h1>

            {/* Thin Golden Accent Underline Divider */}
            <div className="w-20 sm:w-28 h-[3.5px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 my-2 sm:my-4 shadow-[0_0_12px_rgba(245,158,11,0.7)]" />

            {/* Subtitle / Welcome Text (White with black borders) */}
            <p className="font-handwritten text-xl xs:text-2xl sm:text-3xl lg:text-4xl tracking-wide max-w-lg leading-snug mb-6 sm:mb-8 text-white-outline">
              Welcome to my space. Relax, stay a while & explore.
            </p>

            {/* Welcoming CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => {
                  const elem = document.getElementById('story');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border-2 border-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-zinc-950 font-mono text-xs sm:text-sm tracking-[0.14em] font-black shadow-[0_4px_25px_rgba(245,158,11,0.5)] hover:shadow-[0_6px_35px_rgba(245,158,11,0.7)] transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-zinc-950 animate-pulse" />
                <span>Who Am I</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans text-base">→</span>
              </button>
            </div>
          </div>

          {/* Clearfix for float layout */}
          <div className="clear-both" />

        </div>

      </section>

      {/* ABOUT ME SECTION (#story) - Heading on left vertically centered with top-right image, divider touching image bottom */}
      <section 
        id="story" 
        className="scroll-mt-24 w-full section-contain"
      >
        <div className={`rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden text-white transition-all duration-500 group/card hardware-accelerated bg-transparent border flex flex-col ${
          themeMode === 'light'
            ? 'border-white/60 hover:border-amber-400/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
            : 'border-white/25 hover:border-amber-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
        }`}>
          
          {/* 1. Top Section: Heading on left vertically centered, Image on top-right */}
          <div className="w-full flex flex-row items-center justify-between gap-3 sm:gap-6">
            {/* Left: Heading centered vertically according to the image height */}
            <div className="flex-1 flex items-center justify-start">
              <h2 className="fluid-heading-section heading-yellow-outline-lg font-black font-sans m-0 text-left">
                Who Am I
              </h2>
            </div>

            {/* Right: Character image with bottom flush to line */}
            <div className="flex-shrink-0 flex items-end justify-end select-none pointer-events-none">
              <img
                src={whoAmISrc}
                alt="Who Am I - Nikverse"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onError={() => setWhoAmISrc('https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png')}
                className="w-auto h-auto max-h-[110px] xs:max-h-[140px] sm:max-h-[180px] md:max-h-[220px] object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.85)] drop-shadow-[0_0_14px_rgba(245,158,11,0.25)] transition-transform duration-300 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* 2. Dividing Line touching the bottom of the image */}
          <div className={`w-full h-px mb-4 sm:mb-6 ${
            themeMode === 'light'
              ? 'bg-gradient-to-r from-white/90 via-white/80 to-white/90'
              : 'bg-gradient-to-r from-white/40 via-white/35 to-white/40'
          }`} />

          {/* 3. Text Content in Box Below the Divider */}
          <div className="w-full space-y-3 sm:space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-white-outline-soft text-left">
            {/* Lead sentence in single line */}
            <p className="fluid-lead-single-line font-semibold text-white-outline">
              Hey, I'm Nikverse — Minecraft Creator & Storyteller
            </p>

            <p className="text-white-outline-soft">
              What started as a passion project turned into a community I never expected. Every subscriber, every view, every comment — it all means the world to me.
            </p>

            <p className="text-white-outline-soft">
              I create because I love it. Simple as that. Pull up a chair, hit subscribe, and let's go on this journey together.
            </p>
          </div>

        </div>
      </section>

      {/* CHANNELS & PLATFORMS SECTION (#channels) */}
      <section 
        id="channels" 
        className="scroll-mt-24 w-full mt-8 sm:mt-14 space-y-10 sm:space-y-14 section-contain pb-16"
      >
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10 space-y-3">
          {/* Main Section Heading */}
          <h2 className="heading-yellow-outline-lg text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight font-sans">
            CHANNELS & PLATFORMS
          </h2>
          {/* Subtitle */}
          <p className="text-white-outline text-base sm:text-lg max-w-2xl font-medium">
            Explore my YouTube channels, Instagram reels, and live stream sessions across platforms.
          </p>
        </div>

        {/* CATEGORY 1: YOUTUBE */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className={`h-px flex-1 max-w-[100px] sm:max-w-[200px] ${themeMode === 'light' ? 'bg-black/20' : 'bg-white/20'}`} />
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase font-black tracking-widest shadow-lg text-white-outline ${
              themeMode === 'light'
                ? 'bg-red-500/25 border-2 border-white/90 text-red-700'
                : 'bg-red-500/20 border border-white/50 text-red-400'
            }`}>
              <span>YOUTUBE</span>
            </div>
            <div className={`h-px flex-1 max-w-[100px] sm:max-w-[200px] ${themeMode === 'light' ? 'bg-black/20' : 'bg-white/20'}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-2">
            {CHANNELS_AND_PLATFORMS.filter(ch => ch.platform === 'YouTube').map((ch, index) => {
              const isMiddleCard = index === 1; // NikVerse
              return (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-3xl p-6 sm:p-8 ${ch.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between cursor-pointer hardware-accelerated bg-transparent border ${
                    themeMode === 'light'
                      ? isMiddleCard
                        ? 'border-2 border-amber-400/90 shadow-[0_12px_36px_rgba(245,158,11,0.2)] md:-translate-y-3'
                        : 'border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:border-amber-400/80 hover:shadow-[0_12px_36px_rgba(245,158,11,0.2)]'
                      : isMiddleCard
                        ? 'border border-amber-400/70 shadow-[0_12px_36px_rgba(245,158,11,0.3)] md:-translate-y-3'
                        : 'border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-white/50 hover:shadow-[0_12px_36px_rgba(255,255,255,0.15)]'
                  }`}
                >
                  {/* Centered Logo Avatar */}
                  <div className="flex flex-col items-center mt-2 mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400/80 bg-zinc-950 p-1 shadow-2xl transition-transform duration-200 group-hover:scale-105">
                      <img
                        src={ch.logo}
                        alt={ch.title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
                        }}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Card Title */}
                  <div className="mb-2">
                    <h3 className="heading-yellow-outline text-2xl sm:text-3xl font-black font-sans tracking-tight">
                      {ch.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-white-outline-soft text-sm leading-relaxed mb-6 font-medium max-w-xs">
                    {ch.description}
                  </p>

                  {/* Action CTA Button */}
                  <div className="w-full pt-2">
                    <div className="w-full py-3 px-4 rounded-full border border-black bg-white/10 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-400 group-hover:text-zinc-950 text-amber-300 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] group-hover:[text-shadow:none]">
                      <span>Visit Channel</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CATEGORY 2: OTHER PLATFORMS */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-center gap-3">
            <div className={`h-px flex-1 max-w-[100px] sm:max-w-[200px] ${themeMode === 'light' ? 'bg-black/20' : 'bg-white/20'}`} />
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase font-black tracking-widest shadow-lg text-white-outline ${
              themeMode === 'light'
                ? 'bg-emerald-500/25 border-2 border-white/90 text-emerald-800'
                : 'bg-emerald-500/20 border border-white/50 text-emerald-400'
            }`}>
              <span>OTHER PLATFORMS</span>
            </div>
            <div className={`h-px flex-1 max-w-[100px] sm:max-w-[200px] ${themeMode === 'light' ? 'bg-black/20' : 'bg-white/20'}`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8">
            {CHANNELS_AND_PLATFORMS.filter(ch => ch.platform !== 'YouTube').map((ch) => (
              <a
                key={ch.id}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-3xl p-6 sm:p-8 ${ch.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between cursor-pointer hardware-accelerated bg-transparent border ${
                  themeMode === 'light'
                    ? 'border border-white/60 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:border-amber-400/80 hover:shadow-[0_12px_36px_rgba(245,158,11,0.2)]'
                    : 'border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-white/50 hover:shadow-[0_12px_36px_rgba(255,255,255,0.15)]'
                }`}
              >
                {/* Centered Logo Avatar */}
                <div className="flex flex-col items-center mt-2 mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400/80 bg-zinc-950 p-1 shadow-2xl transition-transform duration-200 group-hover:scale-105">
                    <img
                      src={ch.logo}
                      alt={ch.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
                      }}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <div className="mb-2">
                  <h3 className="heading-yellow-outline text-2xl sm:text-3xl font-black font-sans tracking-tight">
                    {ch.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-white-outline-soft text-sm leading-relaxed mb-6 font-medium max-w-xs">
                  {ch.description}
                </p>

                {/* Action CTA Button */}
                <div className="w-full pt-2">
                  <div className="w-full py-3 px-4 rounded-full border border-black bg-white/10 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-400 group-hover:text-zinc-950 text-amber-300 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] group-hover:[text-shadow:none]">
                    <span>Visit {ch.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

