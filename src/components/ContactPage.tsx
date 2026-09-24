import React, { useState } from 'react';
import { Mail, Copy, Check, MessageSquare } from 'lucide-react';
import { ThemeMode } from '../types';

interface ContactPageProps {
  themeMode?: ThemeMode;
  onBackToHome?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const businessEmail = 'team.nikverse@gmail.com';
  const discordInviteUrl = 'https://discord.gg/9bCw52SCy4';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(businessEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="relative w-full flex-1 min-h-[100dvh] bg-[#07070a] text-white flex flex-col justify-between items-center select-none pt-24 pb-8 px-4 sm:px-8">
      {/* Background Artwork - Kingsguard Wallpaper clearly visible with minimal overlay & optimal contrast */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <img
          src="https://i.postimg.cc/d114QfwC/novaskin-wallpaper-kingsguard.jpg"
          alt="Contact Kingsguard Wallpaper"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top sm:object-center opacity-85 sm:opacity-90 contrast-105 brightness-105 filter-none"
        />
        {/* Crisp contrast overlays: gentle top/bottom gradient so image stays crisp and text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-40% to-[#07070a]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Container: Crisp with no heavy blur so background artwork is clearly visible */}
      <div className="w-full max-w-3xl my-auto relative z-10 flex flex-col items-start text-left space-y-8 bg-zinc-950/45 p-6 sm:p-10 border border-amber-500/40 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
        
        {/* Main Section: Looking for Collab */}
        <div className="w-full flex flex-col items-start space-y-3">
          {/* Main Heading */}
          <h1 className="font-spider font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Looking for <span className="text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">Collab</span>
          </h1>

          {/* Small Description */}
          <p className="font-sans text-zinc-200 text-base sm:text-lg font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Brands, Minecraft servers / hosting, and many more.
          </p>
        </div>

        {/* Email Box in Yellow & Black Theme */}
        <div className="w-full pt-1">
          <div
            onClick={handleCopyEmail}
            className="w-full border border-amber-500/90 bg-zinc-950/90 hover:bg-amber-950/30 py-4 sm:py-5 px-5 sm:px-7 rounded-none flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer group shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.45)]"
          >
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="p-2 bg-amber-400/10 border border-amber-400/40 rounded text-amber-400 shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-wide truncate drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                {businessEmail}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {copiedEmail ? (
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/25 text-emerald-400 border border-emerald-500/50 rounded font-sans font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>Copied</span>
                </span>
              ) : (
                <span className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-none font-bold font-sans text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </span>
              )}
            </div>
          </div>

          <div className="pt-2 px-1 text-xs text-zinc-300 font-sans tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            Click to copy official business address
          </div>
        </div>

        {/* Discord Ticket Option */}
        <div className="w-full pt-2 flex flex-col items-start space-y-3">
          <span className="font-sans text-zinc-300 text-sm sm:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Prefer direct Discord communication?
          </span>

          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-sans font-bold text-sm sm:text-base border border-[#5865F2] rounded-none transition-all cursor-pointer active:scale-95 shadow-[0_4px_16px_rgba(88,101,242,0.4)] flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Create a ticket on Discord</span>
          </a>
        </div>

      </div>
    </div>
  );
};
