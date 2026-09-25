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
import { RecentUploads } from './RecentUploads';
import { VoidMCSection } from './VoidMCSection';
import { CommunitySection } from './CommunitySection';
import { ContactSection } from './ContactSection';
import { ThemeAccent, GuestbookEntry, ThemeMode } from '../types';

interface GlassPanelProps {
  accent: ThemeAccent;
  themeMode?: ThemeMode;
  onOpenContact: () => void;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  themeMode = 'light',
  onOpenContact
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-8 py-2 sm:py-4 z-20 flex flex-col gap-12 sm:gap-16">
      
      {/* CHANNELS & PLATFORMS SECTION (#channels) */}
      <section 
        id="channels" 
        className="scroll-mt-24 w-full mt-2 sm:mt-6 space-y-10 sm:space-y-14 section-contain pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-6 sm:mb-10 space-y-3"
        >
          {/* Main Section Heading */}
          <h2 className="heading-yellow-outline-lg text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase tracking-tight font-sans">
            CHANNELS & PLATFORMS
          </h2>
          {/* Subtitle */}
          <p className="text-white-outline text-base sm:text-lg max-w-2xl font-medium">
            Explore my YouTube channels, Instagram reels, and live stream sessions across platforms.
          </p>
        </motion.div>

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
              // Alternating side entrance: one from left (x: -160), one from right (x: 160)
              const comesFromLeft = index % 2 === 0;

              return (
                <motion.a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: comesFromLeft ? -160 : 160 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl p-6 sm:p-8 ${ch.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between cursor-pointer hardware-accelerated border overflow-hidden backdrop-blur-sm will-change-transform ${
                    themeMode === 'light'
                      ? isMiddleCard
                        ? 'bg-black/10 hover:bg-black/15 border-2 border-amber-400 shadow-[0_12px_36px_rgba(0,0,0,0.15)] md:-translate-y-3'
                        : 'bg-black/5 hover:bg-black/10 border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-amber-400/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)]'
                      : isMiddleCard
                        ? 'bg-black/20 hover:bg-black/30 border border-amber-400/80 shadow-[0_12px_36px_rgba(0,0,0,0.35)] md:-translate-y-3'
                        : 'bg-black/15 hover:bg-black/25 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-400/70 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]'
                  }`}
                >
                  {/* TRANSLUCENT BACKGROUND IMAGE - BLENDED WITH VIDEO BG */}
                  {ch.bgImage && (
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
                      <img
                        src={ch.bgImage}
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        loading="eager"
                        decoding="async"
                        onError={(e) => {
                          if (ch.fallbackBgImage) {
                            (e.currentTarget as HTMLImageElement).src = ch.fallbackBgImage;
                          } else {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                          }
                        }}
                        className="w-full h-full object-cover scale-105 group-hover:scale-115 opacity-40 sm:opacity-45 group-hover:opacity-60 mix-blend-overlay transition-all duration-700 ease-out"
                      />
                      {/* Ambient Gradient Overlays for Video Passthrough & Crisp Text */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45 group-hover:from-black/15 group-hover:to-black/35 transition-colors duration-300" />
                    </div>
                  )}

                  {/* Centered Logo Avatar */}
                  <div className="relative z-10 flex flex-col items-center mt-2 mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400/80 bg-zinc-950 p-1 shadow-2xl transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
                      <img
                        src={ch.logo}
                        alt={ch.title}
                        loading="eager"
                        decoding="async"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
                        }}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>

                  {/* Card Title */}
                  <div className="relative z-10 mb-2">
                    <h3 className="heading-yellow-outline text-2xl sm:text-3xl font-black font-sans tracking-tight">
                      {ch.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="relative z-10 text-white-outline-soft text-sm leading-relaxed mb-6 font-medium max-w-xs">
                    {ch.description}
                  </p>

                  {/* Action CTA Button */}
                  <div className="relative z-10 w-full pt-2">
                    <div className="w-full py-3 px-4 rounded-full border border-black bg-white/10 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-400 group-hover:text-zinc-950 text-amber-300 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] group-hover:[text-shadow:none]">
                      <span>Visit Channel</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.a>
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
            {CHANNELS_AND_PLATFORMS.filter(ch => ch.platform !== 'YouTube').map((ch, index) => {
              const comesFromLeft = index % 2 === 0;

              return (
                <motion.a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: comesFromLeft ? -160 : 160 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl p-6 sm:p-8 ${ch.borderHover} transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center justify-between cursor-pointer hardware-accelerated border overflow-hidden backdrop-blur-sm will-change-transform ${
                    themeMode === 'light'
                      ? 'bg-black/5 hover:bg-black/10 border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-amber-400/80 hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)]'
                      : 'bg-black/15 hover:bg-black/25 border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:border-amber-400/70 hover:shadow-[0_12px_36px_rgba(0,0,0,0.35)]'
                  }`}
                >
                {/* TRANSLUCENT BACKGROUND IMAGE - BLENDED WITH VIDEO BG */}
                {ch.bgImage && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]">
                    <img
                      src={ch.bgImage}
                      alt=""
                      aria-hidden="true"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        if (ch.fallbackBgImage) {
                          (e.currentTarget as HTMLImageElement).src = ch.fallbackBgImage;
                        } else {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }
                      }}
                      className="w-full h-full object-cover scale-105 group-hover:scale-115 opacity-40 sm:opacity-45 group-hover:opacity-60 mix-blend-overlay transition-all duration-700 ease-out"
                    />
                    {/* Ambient Gradient Overlays for Video Passthrough & Crisp Text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45 group-hover:from-black/15 group-hover:to-black/35 transition-colors duration-300" />
                  </div>
                )}

                {/* Centered Logo Avatar */}
                <div className="relative z-10 flex flex-col items-center mt-2 mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-400/80 bg-zinc-950 p-1.5 shadow-2xl transition-transform duration-200 group-hover:scale-105 flex items-center justify-center">
                    <img
                      src={ch.logo}
                      alt={ch.title}
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
                      }}
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* Card Title */}
                <div className="relative z-10 mb-2">
                  <h3 className="heading-yellow-outline text-2xl sm:text-3xl font-black font-sans tracking-tight">
                    {ch.title}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="relative z-10 text-white-outline-soft text-sm leading-relaxed mb-6 font-medium max-w-xs">
                  {ch.description}
                </p>

                {/* Action CTA Button */}
                <div className="relative z-10 w-full pt-2">
                  <div className="w-full py-3 px-4 rounded-full border border-black bg-white/10 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-400 group-hover:text-zinc-950 text-amber-300 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)] group-hover:[text-shadow:none]">
                    <span>Visit {ch.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
          </div>
        </div>
      </section>

      {/* RECENT UPLOADS SECTION (#uploads) */}
      <RecentUploads themeMode={themeMode} />

      {/* JOIN MY COMMUNITY / DISCORD SECTION (#community) */}
      <CommunitySection themeMode={themeMode} />

      {/* VOID MC MINECRAFT SERVER SECTION (#voidmc) - Placed below Discord */}
      <VoidMCSection themeMode={themeMode} />

      {/* CONTACT US / SPONSORS & COLLABORATIONS SECTION (#contact) */}
      <ContactSection themeMode={themeMode} />

    </div>
  );
};

