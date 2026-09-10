import React from 'react';
import { motion } from 'motion/react';
import { ThemeMode } from '../types';

interface SecondaryChannelData {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  avatar: string;
}

const FEATURED_MAIN_CHANNEL = {
  id: 'nikverse-main',
  title: 'NikVerse',
  subtitle: 'Main channel',
  url: 'https://www.youtube.com/@OnlyNikVerse',
  logoBg: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
  characterImage: 'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png',
  fallbackImage: 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png'
};

const SECONDARY_CHANNELS: SecondaryChannelData[] = [
  {
    id: 'livenik',
    title: 'LiveNik',
    subtitle: 'Streaming Channel',
    url: 'https://www.youtube.com/@NikisLiveNow',
    avatar: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  {
    id: 'nik-mc',
    title: 'Nik',
    subtitle: 'Minecraft Channel',
    url: 'https://www.youtube.com/@NikGamerOP',
    avatar: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo'
  }
];

interface ChannelsSceneProps {
  themeMode?: ThemeMode;
  onOpenSocials?: () => void;
}

export const ChannelsScene: React.FC<ChannelsSceneProps> = ({ onOpenSocials }) => {
  return (
    <div
      id="channels"
      className="w-full max-w-lg mx-auto px-4 py-8 sm:py-12 flex flex-col items-center justify-start select-none pointer-events-auto"
    >
      {/* ========================================================================= */}
      {/* SECTION HEADING: Cozy Welcoming Creator Style with Decorative Underline   */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center text-center mb-8 sm:mb-10"
      >
        <div className="relative inline-block">
          <h2 className="font-cozy font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Explore <span className="text-amber-400">Nikverse</span>
          </h2>

          {/* Hand-crafted decorative artistic underline design */}
          <svg
            className="w-full h-3 sm:h-4 text-amber-400 mt-1 mx-auto max-w-[220px] sm:max-w-[260px] drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
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

        <p className="font-cozy text-xs sm:text-sm text-zinc-400 mt-2 font-normal tracking-wide max-w-xs sm:max-w-sm">
          Welcome to my creator world. Click any channel to jump right into the action.
        </p>
      </motion.div>

      {/* ========================================================================= */}
      {/* CHANNELS LIST: Exact SenpaiSpider Structure (No Gradients, Solid Dark)    */}
      {/* ========================================================================= */}
      <div className="w-full space-y-3.5 sm:space-y-4">
        {/* 1. TOP FEATURED CARD: Main Channel */}
        <motion.a
          href={FEATURED_MAIN_CHANNEL.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-[#111115] border border-white/[0.08] hover:border-white/20 transition-all duration-300 block shadow-2xl cursor-pointer"
        >
          {/* Subtle blurred YT channel logo as backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={FEATURED_MAIN_CHANNEL.logoBg}
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-110 blur-xl opacity-20 group-hover:scale-115 transition-all duration-700 ease-out"
            />
            {/* Atmospheric Dark Gradient Stage */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#2b104a]/70 via-[#140f22]/90 to-[#0c0a12]" />
          </div>

          {/* Minecraft Character Render standing in the stage */}
          <div className="absolute inset-0 flex items-center justify-center pt-2 pb-14 overflow-hidden pointer-events-none">
            <img
              src={FEATURED_MAIN_CHANNEL.characterImage}
              alt={FEATURED_MAIN_CHANNEL.title}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = FEATURED_MAIN_CHANNEL.fallbackImage;
              }}
              className="h-[84%] w-auto object-contain drop-shadow-[0_16px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Bottom Dark Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12] via-[#0c0a12]/75 to-transparent pointer-events-none" />

          {/* Channel Name & Subtitle at Bottom-Left */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left">
            <h3 className="font-senpai font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {FEATURED_MAIN_CHANNEL.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-normal mt-1 tracking-wide">
              {FEATURED_MAIN_CHANNEL.subtitle}
            </p>
          </div>
        </motion.a>

        {/* 2. SECONDARY CHANNELS: Clean Solid Dark Cards (NO colored gradients) */}
        {SECONDARY_CHANNELS.map((channel, index) => (
          <motion.a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
            className="group w-full bg-[#131316]/95 hover:bg-[#1a1a20] border border-white/[0.08] hover:border-white/20 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between transition-all duration-200 shadow-md cursor-pointer block"
          >
            {/* Left: Channel Title & Subtitle */}
            <div className="flex flex-col text-left pr-4">
              <h4 className="font-senpai font-bold text-2xl sm:text-3xl text-white tracking-tight leading-none group-hover:text-white transition-colors">
                {channel.title}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal mt-1 tracking-wide">
                {channel.subtitle}
              </p>
            </div>

            {/* Right: Circular Channel Avatar */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/10 shrink-0 bg-zinc-900 p-0.5 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-200">
              <img
                src={channel.avatar}
                alt={channel.title}
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
                }}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.a>
        ))}

        {onOpenSocials && (
          <button
            onClick={onOpenSocials}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 text-zinc-300 hover:text-amber-400 font-cozy font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer group"
          >
            <span>Looking for Instagram, Kick & Socials?</span>
            <span className="text-amber-400 group-hover:translate-x-1 transition-transform">Explore Socials →</span>
          </button>
        )}
      </div>
    </div>
  );
};
