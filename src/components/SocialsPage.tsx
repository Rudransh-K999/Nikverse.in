import React from 'react';
import { ExternalLink, Instagram, Tv, MessageSquare } from 'lucide-react';
import { ThemeMode } from '../types';

interface SocialsPageProps {
  themeMode?: ThemeMode;
  onBackToHome?: () => void;
}

interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  category: string;
  description: string;
  url: string;
  avatar: string;
  color: string;
  buttonText: string;
}

const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@onlynikverse',
    category: 'Photos & Reels',
    description: 'Catch daily stories, life updates, reels, and behind-the-scenes moments.',
    url: 'https://www.instagram.com/onlynikverse',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblNBRFyCGTPscHq-i6MH7ZmNdHHKatsnLZoUD_YPu1w&s=10',
    color: '#ec4899',
    buttonText: 'Follow on Instagram'
  },
  {
    id: 'kick',
    name: 'Kick',
    handle: 'onlynikverse',
    category: 'Live Streaming',
    description: 'High-energy live gaming streams, GTA chaos, and chill late-night talks with chat.',
    url: 'https://kick.com/onlynikverse',
    avatar: 'https://logos-world.net/wp-content/uploads/2024/01/Kick-Logo.png',
    color: '#22c55e',
    buttonText: 'Watch on Kick'
  },
  {
    id: 'discord',
    name: 'Discord Community',
    handle: 'Nikverse Realm',
    category: 'Community & SMP',
    description: 'Join thousands of members, talk in voice channels, and get VoidMC server announcements.',
    url: 'https://discord.gg/9bCw52SCy4',
    avatar: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
    color: '#5865F2',
    buttonText: 'Join Discord Server'
  }
];

export const SocialsPage: React.FC<SocialsPageProps> = () => {
  return (
    <div className="relative w-full flex-1 bg-[#09090b] text-white flex flex-col items-center select-none pt-8 pb-16 px-4 sm:px-8">
      {/* Background Artwork: Starts at top and smoothly blends at the bottom into the page color */}
      <div className="absolute top-0 inset-x-0 h-[600px] sm:h-[720px] overflow-hidden pointer-events-none select-none z-0">
        <img
          src="https://i.postimg.cc/DZbFHF0v/player-poster.png"
          alt="Nikverse Artwork"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-30 sm:opacity-35"
        />
        {/* Soft gradient blend into dark background towards bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/60 via-40% to-[#09090b]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Background Lighting Aura */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Hero Heading */}
      <div className="w-full max-w-4xl mt-2 sm:mt-4 relative z-10 text-center flex flex-col items-center">
        <h1 className="font-cozy font-bold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
          Explore <span className="text-amber-400">Nikverse</span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 mt-2 max-w-md font-normal">
          Official YouTube channels and community platforms in one place.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 1. YOUTUBE SECTION                                                        */}
      {/* ========================================================================= */}
      <div className="w-full max-w-3xl mt-10 z-10 space-y-4">
        <h2 className="text-left font-sans font-bold text-xl sm:text-2xl text-white tracking-tight uppercase flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span>YouTube</span>
        </h2>

        {/* Featured Main Channel Card */}
        <a
          href="https://www.youtube.com/@OnlyNikVerse"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#111115] border border-white/[0.08] hover:border-amber-400/80 transition-all duration-300 block shadow-2xl cursor-pointer"
        >
          {/* Subtle blurred YT channel logo as backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src="https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj"
              alt=""
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center scale-110 blur-xl opacity-20 group-hover:scale-115 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2b104a]/70 via-[#140f22]/90 to-[#0c0a12]" />
          </div>

          {/* Minecraft Character Render */}
          <div className="absolute inset-0 flex items-center justify-center pt-2 pb-14 overflow-hidden pointer-events-none">
            <img
              src="https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png"
              alt="NikVerse"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png';
              }}
              className="h-[84%] w-auto object-contain drop-shadow-[0_16px_35px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Bottom Dark Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12] via-[#0c0a12]/75 to-transparent pointer-events-none" />

          {/* Channel Info */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left flex items-end justify-between">
            <div>
              <h3 className="font-senpai font-bold text-3xl sm:text-4xl text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                NikVerse
              </h3>
              <p className="text-sm text-zinc-300 font-normal mt-1 tracking-wide">
                Main channel: Mysteries, SMP & Cinematic Lore
              </p>
            </div>
            <span className="hidden sm:inline-flex px-4 py-2 bg-amber-400 text-zinc-950 font-bold font-sans text-xs uppercase tracking-wider">
              Subscribe
            </span>
          </div>
        </a>

        {/* Secondary Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <a
            href="https://www.youtube.com/@NikisLiveNow"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-[#131316]/95 hover:bg-[#1a1a20] border border-white/[0.08] hover:border-amber-400/80 rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-200 shadow-md cursor-pointer block"
          >
            <div className="flex flex-col text-left pr-3">
              <h4 className="font-senpai font-bold text-2xl text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                LiveNik
              </h4>
              <p className="text-xs text-zinc-400 font-normal mt-1 tracking-wide">
                Streaming Channel & Live GTA
              </p>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-zinc-900 p-0.5 shadow-inner group-hover:scale-105 transition-transform">
              <img
                src="https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo"
                alt="LiveNik"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </a>

          <a
            href="https://www.youtube.com/@NikGamerOP"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-[#131316]/95 hover:bg-[#1a1a20] border border-white/[0.08] hover:border-amber-400/80 rounded-xl px-5 py-4 flex items-center justify-between transition-all duration-200 shadow-md cursor-pointer block"
          >
            <div className="flex flex-col text-left pr-3">
              <h4 className="font-senpai font-bold text-2xl text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                Nik
              </h4>
              <p className="text-xs text-zinc-400 font-normal mt-1 tracking-wide">
                Minecraft Survival & 100 Days
              </p>
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-zinc-900 p-0.5 shadow-inner group-hover:scale-105 transition-transform">
              <img
                src="https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo"
                alt="Nik Minecraft"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </a>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OTHER SOCIAL PLATFORMS                                                 */}
      {/* ========================================================================= */}
      <div className="w-full max-w-3xl mt-12 z-10 space-y-4">
        <h2 className="text-left font-sans font-bold text-xl sm:text-2xl text-white tracking-tight uppercase flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span>Platforms & Communities</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SOCIAL_PLATFORMS.map((plat) => (
            <a
              key={plat.id}
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#111115] hover:bg-[#18181f] border border-white/[0.08] hover:border-amber-400/80 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer shadow-md text-left"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-zinc-900 p-0.5 shrink-0">
                    <img
                      src={plat.avatar}
                      alt={plat.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {plat.name}
                    </h3>
                    <span className="text-xs text-zinc-400 font-mono">
                      {plat.handle}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {plat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>{plat.buttonText}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
