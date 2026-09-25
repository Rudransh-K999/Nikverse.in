import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ThemeMode } from '../types';

interface VoidMCSectionProps {
  themeMode?: ThemeMode;
}

export const VoidMCSection: React.FC<VoidMCSectionProps> = ({
  themeMode = 'light'
}) => {
  const storeUrl = 'https://store.void-mc.in';
  // Use locally served logo from public/voidmc-logo.png with CDN fallback
  const voidLogoUrl = '/voidmc-logo.png';

  return (
    <section
      id="voidmc"
      className="scroll-mt-24 w-full mt-10 sm:mt-16 section-contain relative"
    >
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Clean Glass Card Container */}
      <div
        className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 border overflow-hidden backdrop-blur-md transition-all duration-500 hardware-accelerated ${
          themeMode === 'light'
            ? 'bg-white/10 hover:bg-white/15 border-white/60 hover:border-amber-400/90 shadow-[0_16px_40px_rgba(0,0,0,0.12)]'
            : 'bg-black/20 hover:bg-black/30 border-white/20 hover:border-amber-400/80 shadow-[0_16px_40px_rgba(0,0,0,0.45)]'
        }`}
      >
        {/* Subtle Top Specular Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          {/* Left: Logo (no box) + Headings + Description */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
            {/* Extracted Void MC Logo without box container */}
            <div className="relative group shrink-0 flex items-center justify-center">
              <img
                src={voidLogoUrl}
                alt="VOID MC Logo"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.postimg.cc/R970S90D/logo.png';
                }}
                className="h-20 sm:h-24 md:h-28 w-auto max-w-[240px] sm:max-w-[290px] object-contain filter drop-shadow-[0_0_16px_rgba(245,158,11,0.55)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Headings & Description (VOID MC text removed) */}
            <div className="flex flex-col justify-center space-y-2">
              <span className="text-xs sm:text-sm font-mono uppercase font-black tracking-widest text-amber-400">
                Official MC Server
              </span>

              <p className="font-mono text-base sm:text-lg font-black text-white tracking-wide">
                India's Best Minecraft Cracked Server
              </p>

              <p className="text-white-outline-soft text-xs sm:text-sm max-w-xl font-medium leading-relaxed pt-1">
                Experience high-octane Economy SMP, fast FFA PvP, and non-stop events. 
                Full crossplay support for Java & Bedrock with lag-free low ping.
              </p>
            </div>
          </div>

          {/* Right: Join void mc now button */}
          <div className="flex flex-col items-center lg:items-end shrink-0 w-full sm:w-auto">
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-mono font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_4px_30px_rgba(245,158,11,0.55)] hover:shadow-[0_6px_40px_rgba(245,158,11,0.85)] border-2 border-black transition-all duration-300 transform hover:scale-105 active:scale-[0.98] cursor-pointer"
            >
              <span>Join Void MC Now</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
