import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ExternalLink,
  Handshake
} from 'lucide-react';
import { ThemeMode } from '../types';
import { PROFILE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  themeMode?: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  themeMode = 'light'
}) => {
  const [copied, setCopied] = useState(false);
  const contactEmail = PROFILE_INFO.sponsorEmail || 'team.nikverse@gmail.com';
  const discordInviteUrl = 'https://discord.gg/UqxMNKaAnc';
  const bgImgUrl =
    PROFILE_INFO.contactImage ||
    'https://i.ibb.co/Wpy2pxxk/Gemini-Generated-Image-qurypequrypequry-removebg-preview.png';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col items-center pt-4 pb-12 scroll-mt-24">
      {/* ROUNDED CORNER BADGE OUTSIDE & ABOVE THE CARD */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black bg-white/10 backdrop-blur-md mb-4 shadow-md">
        <Handshake className="w-4 h-4 text-amber-400" />
        <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-amber-300">
          Sponsors & Partnerships
        </span>
      </div>

      {/* TRANSPARENT CONTACT / PROMOTIONS CARD WITH BLENDED BG IMAGE */}
      <div
        className={`w-full max-w-3xl rounded-3xl p-6 sm:p-10 relative overflow-hidden text-white transition-all duration-500 border hardware-accelerated backdrop-blur-sm flex flex-col items-center text-center group ${
          themeMode === 'light'
            ? 'bg-black/10 hover:bg-black/15 border-white/30 shadow-[0_12px_36px_rgba(0,0,0,0.15)] hover:border-amber-400/80'
            : 'bg-black/20 hover:bg-black/30 border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:border-amber-400/70'
        }`}
      >
        {/* BLENDED CHARACTER ARTWORK BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-3xl [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] flex items-center justify-center">
          <img
            src={bgImgUrl}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 opacity-25 sm:opacity-30 group-hover:opacity-40 transition-all duration-700 ease-out select-none pointer-events-none drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          />
          {/* Ambient Video Passthrough & Shading Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35 pointer-events-none" />
        </div>

        {/* Soft Radial Ambient Glow */}
        <div className="absolute inset-0 m-auto w-96 h-96 rounded-full blur-3xl pointer-events-none bg-amber-500/10" />

        {/* INSIDE THE BOX: CONTACT US TITLE & DESCRIPTION */}
        <div className="relative z-10 flex flex-col items-center mb-6 sm:mb-8 max-w-xl">
          <h2 className="heading-yellow-outline text-3xl xs:text-4xl sm:text-5xl font-black font-sans tracking-tight mb-2">
            CONTACT US
          </h2>

          <p className="text-white-outline-soft text-sm sm:text-base font-medium text-zinc-200">
            For sponsorships, business inquiries, and content collaborations.
          </p>
        </div>

        {/* PROPERLY RESIZED EMAIL BOX */}
        <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-5">
          <div className="w-full p-3.5 sm:p-4 rounded-2xl border border-amber-400/50 bg-black/50 backdrop-blur-md shadow-lg flex flex-col xs:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-left min-w-0 w-full xs:w-auto">
              <div className="p-2.5 rounded-xl bg-amber-400/15 text-amber-400 border border-amber-400/30 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="block text-[11px] font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                  Write us at:
                </span>
                <a
                  href={`mailto:${contactEmail}?subject=Sponsorship%20%2F%20Collaboration%20Inquiry%20-%20Nikverse`}
                  className="text-sm sm:text-base font-mono font-bold text-amber-300 hover:text-amber-200 transition-colors truncate block underline decoration-amber-400/40 hover:decoration-amber-300"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full xs:w-auto justify-end shrink-0">
              <button
                onClick={handleCopyEmail}
                className={`flex-1 xs:flex-initial px-3.5 py-2 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                  copied
                    ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                    : 'bg-white/10 hover:bg-amber-400 hover:text-zinc-950 hover:border-amber-400 text-white border-white/20'
                }`}
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactEmail}?subject=Sponsorship%20%2F%20Collaboration%20Inquiry%20-%20Nikverse`}
                className="px-3.5 py-2 rounded-xl border border-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-md hover:scale-105 cursor-pointer shrink-0"
                title="Send Direct Email"
              >
                <Send className="w-3 h-3 fill-current" />
                <span>Send</span>
              </a>
            </div>
          </div>

          {/* DIVIDER: "OR" */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 px-1">
              OR
            </span>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          {/* CREATE TICKET ON DISCORD BUTTON CONNECTED TO INVITE */}
          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-2xl border border-[#5865F2]/80 bg-[#5865F2] hover:bg-[#4752C4] text-white font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(88,101,242,0.4)] hover:shadow-[0_6px_25px_rgba(88,101,242,0.6)] hover:scale-[1.02] cursor-pointer"
          >
            {/* Discord SVG Icon */}
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span>Create a Ticket on Discord</span>
          <ExternalLink className="w-4 h-4 opacity-80" />
        </a>
        </div>
      </div>
    </section>
  );
};
