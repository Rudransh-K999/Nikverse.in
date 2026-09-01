import React from 'react';
import { MessageSquare, ExternalLink } from 'lucide-react';
import { ThemeMode } from '../types';

interface CommunitySectionProps {
  themeMode?: ThemeMode;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  themeMode = 'light'
}) => {
  const discordInviteUrl = 'https://discord.gg/9bCw52SCy4';
  const gtaCommunityImgUrl = 'https://store-images.s-microsoft.com/image/apps.50223.14086826113896348.0ac2ef86-2cca-45c3-9d11-1dc9ac71c024.34520097-f601-4a06-b16d-e40280f0fc15';
  const topImgUrl = 'https://i.ibb.co/MD7L0xys/IMG-20260817-091307-removebg-preview.png';
  const bottomImgUrl = 'https://i.ibb.co/7dD42hcv/IMG-20260817-091314-removebg-preview.png';

  return (
    <section
      id="community"
      className="scroll-mt-24 w-full section-contain mt-8 sm:mt-14 pb-16 flex flex-col items-center"
    >
      {/* SECTION HEADING OUTSIDE CARD */}
      <div className="w-full flex justify-center mb-6 sm:mb-8 text-center">
        <h2 className="heading-yellow-outline-lg text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-sans uppercase tracking-tight m-0">
          JOIN MY COMMUNITY
        </h2>
      </div>

      {/* DISCORD COMMUNITY CARD CONTAINER */}
      <div
        className={`w-full max-w-4xl rounded-3xl p-0 relative overflow-hidden text-white transition-all duration-500 group/card hardware-accelerated border flex flex-col items-center justify-between min-h-[460px] sm:min-h-[560px] md:min-h-[640px] bg-transparent ${
          themeMode === 'light'
            ? 'border-white/30 hover:border-indigo-400/80 shadow-none'
            : 'border-white/15 hover:border-indigo-400/60 shadow-none'
        }`}
      >
        {/* Ambient Subtle Radial Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none bg-[#5865F2]/15 z-0"
        />

        {/* TOP IMAGE - Masked & Blended to fade seamlessly towards center */}
        <div
          className="w-full relative z-10 flex justify-center overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)'
          }}
        >
          <img
            src={topImgUrl}
            alt="Nikverse Community Top"
            loading="eager"
            decoding="async"
            className={`w-full max-w-2xl h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[320px] object-contain object-top pointer-events-none select-none transition-transform duration-700 group-hover/card:scale-[1.02] ${
              themeMode === 'light'
                ? 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]'
                : 'drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]'
            }`}
          />
        </div>

        {/* JOIN DISCORD BUTTON - Centered in middle with elevated presence */}
        <div className="z-20 flex items-center justify-center w-full px-4 my-2 sm:my-4">
          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-full border-2 border-black bg-gradient-to-r from-[#5865F2] via-[#4752C4] to-[#5865F2] hover:scale-105 active:scale-95 text-white font-mono text-sm sm:text-base md:text-lg font-black uppercase tracking-wider shadow-[0_8px_30px_rgba(88,101,242,0.6)] hover:shadow-[0_12px_45px_rgba(88,101,242,0.85)] transition-all duration-300 cursor-pointer group"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current group-hover:rotate-12 transition-transform duration-300" />
            <span>Join Discord</span>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* BOTTOM IMAGE - Masked & Blended to fade seamlessly towards center */}
        <div
          className="w-full relative z-10 flex justify-center overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)'
          }}
        >
          <img
            src={bottomImgUrl}
            alt="Nikverse Community Bottom"
            loading="eager"
            decoding="async"
            className={`w-full max-w-2xl h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[320px] object-contain object-bottom pointer-events-none select-none transition-transform duration-700 group-hover/card:scale-[1.02] ${
              themeMode === 'light'
                ? 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]'
                : 'drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]'
            }`}
          />
        </div>
      </div>
    </section>
  );
};
