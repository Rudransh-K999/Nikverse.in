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
    <div className="relative w-full flex-1 bg-[#09090b] text-white flex flex-col items-center select-none pt-10 pb-16 px-4 sm:px-8">
      {/* Background Artwork: Crisp and clear, gently fading into bottom page color */}
      <div className="absolute top-0 inset-x-0 h-[600px] sm:h-[720px] overflow-hidden pointer-events-none select-none z-0">
        <img
          src="https://i.postimg.cc/fLNCzS3h/5c6d7b09e65d61e28097ed3f4ee6e0384cea6654-2-690x388.png"
          alt="Nikverse Artwork"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-80 sm:opacity-90 filter-none"
        />
        {/* Soft bottom fade blend into dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 via-50% to-[#09090b]" />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-3xl mt-4 sm:mt-8 relative z-10 flex flex-col items-start text-left space-y-8">
        
        {/* Main Section: Looking for Collab */}
        <div className="w-full flex flex-col items-start space-y-3">
          {/* Main Heading */}
          <h1 className="font-spider font-black text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-white">
            Looking for <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">Collab</span>
          </h1>

          {/* Small Description */}
          <p className="font-sans text-zinc-300 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
            Brands, Minecraft servers / hosting, and many more.
          </p>
        </div>

        {/* Email Box in Yellow & Black Theme */}
        <div className="w-full pt-1">
          <div
            onClick={handleCopyEmail}
            className="w-full border border-amber-500/80 bg-zinc-950/80 hover:bg-amber-950/20 py-4 sm:py-5 px-5 sm:px-7 rounded-none flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer group shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]"
          >
            <div className="flex items-center gap-3.5 overflow-hidden">
              <div className="p-2 bg-amber-400/10 border border-amber-400/30 rounded text-amber-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-wide truncate">
                {businessEmail}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {copiedEmail ? (
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded font-sans font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>Copied</span>
                </span>
              ) : (
                <span className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-none font-bold font-sans text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </span>
              )}
            </div>
          </div>

          <div className="pt-2 px-1 text-xs text-zinc-400 font-sans tracking-wide">
            Click to copy official business address
          </div>
        </div>

        {/* Discord Ticket Option */}
        <div className="w-full pt-4 flex flex-col items-start space-y-3">
          <span className="font-sans text-zinc-400 text-sm sm:text-base font-medium">
            Prefer direct Discord communication?
          </span>

          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-sans font-bold text-sm sm:text-base border border-[#5865F2] rounded-none transition-all cursor-pointer active:scale-95 shadow-lg flex items-center gap-2.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Create a ticket on Discord</span>
          </a>
        </div>

      </div>
    </div>
  );
};
