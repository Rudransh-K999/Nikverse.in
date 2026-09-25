import React, { useState } from 'react';
import {
  Briefcase,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  Send,
  ExternalLink,
  Info,
  Film,
  PenTool,
  Image as ImageIcon,
  Camera
} from 'lucide-react';
import { CAREER_ROLES, JobRole } from '../data/careersData';
import { JobApplyModal } from './JobApplyModal';
import { RoleDetailModal } from './RoleDetailModal';
import { ThemeMode } from '../types';

interface JoinUsPageProps {
  themeMode?: ThemeMode;
  onBackToHome: () => void;
}

export const JoinUsPage: React.FC<JoinUsPageProps> = ({
  themeMode = 'light',
  onBackToHome
}) => {
  const [selectedRoleForDetail, setSelectedRoleForDetail] = useState<JobRole | null>(null);
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<JobRole | null>(null);

  const getRoleIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      case 'Film':
        return <Film className="w-5 h-5" />;
      case 'Image':
        return <ImageIcon className="w-5 h-5" />;
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] bg-[#09090b] text-white flex flex-col items-center select-none pt-4 pb-20 px-4 sm:px-8">
      {/* Background Lighting Aura */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-yellow-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-6xl z-10 flex flex-col gap-8">
        {/* TOP NAVIGATION & BACK BUTTON */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 text-zinc-200 hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md group active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-amber-400" />
            <span>Back to Homepage</span>
          </button>
        </div>

      {/* HERO BANNER */}
      <div className="text-center max-w-3xl mx-auto my-2">
        <div className="flex items-center justify-center gap-2 mb-3 text-amber-400 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
          <Briefcase className="w-4 h-4" />
          <span>Careers & Creative Team</span>
        </div>
        <h1 className="heading-yellow-outline text-4xl xs:text-5xl sm:text-6xl font-black font-sans tracking-tight mb-3">
          JOIN OUR TEAM
        </h1>
        <p className="text-white-outline-soft text-base sm:text-lg leading-relaxed font-medium text-zinc-200">
          We are expanding our production studio! Explore our positions below and tap Learn More for full role outlines.
        </p>
      </div>

      {/* ROLES GRID - NO DESCRIPTION ON CARDS, JUST LEARN MORE BUTTON */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAREER_ROLES.map((role) => {
          const isOpen = role.status === 'open';

          return (
            <div
              key={role.id}
              className={`rounded-3xl border hardware-accelerated backdrop-blur-md relative overflow-hidden transition-all duration-300 flex flex-col justify-between group ${
                themeMode === 'light'
                  ? 'bg-white/10 hover:bg-white/25 border-white/60 hover:border-amber-400/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)]'
                  : 'bg-black/15 hover:bg-black/30 border-white/20 hover:border-amber-400/80 shadow-[0_12px_35px_rgba(0,0,0,0.3)]'
              }`}
            >
              {/* Top ambient hover glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl bg-amber-500/10 group-hover:bg-amber-500/20 transition-all pointer-events-none z-10" />

              <div>
                {/* ROLE ARTWORK IMAGE BANNER */}
                {role.image && (
                  <div className={`relative w-full h-52 sm:h-60 overflow-hidden border-b ${
                    themeMode === 'light' ? 'border-white/30 bg-black/10' : 'border-white/10 bg-black/20'
                  }`}>
                    <img
                      src={role.image}
                      alt={role.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100 ${
                        role.id === 'script-writer'
                          ? 'object-cover object-[50%_15%] pt-3 sm:pt-4'
                          : 'object-cover object-center'
                      }`}
                    />
                    {/* Dark gradient overlay for bottom blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/30 via-transparent to-zinc-950/30" />
                  </div>
                )}

                {/* ROLE TITLE & BASIC INFO */}
                <div className="p-5 sm:p-6 pb-4">
                  <h3 className="heading-yellow-outline text-2xl sm:text-3xl font-black font-sans tracking-tight">
                    {role.title}
                  </h3>
                </div>
              </div>

              {/* ACTION FOOTER ROW - LEARN MORE BUTTON */}
              <div className={`p-5 sm:p-6 pt-3 border-t flex items-center justify-between gap-3 backdrop-blur-sm ${
                themeMode === 'light' ? 'bg-white/10 border-white/30' : 'bg-black/15 border-white/10'
              }`}>
                {/* Learn More Button (Opens Popup with full description) */}
                <button
                  onClick={() => setSelectedRoleForDetail(role)}
                  className={`flex-1 px-4 py-3 rounded-2xl font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 border transition-all duration-200 cursor-pointer shadow-md group/btn active:scale-[0.98] ${
                    themeMode === 'light'
                      ? 'bg-white/70 hover:bg-amber-400 text-zinc-950 border-white/90 hover:border-amber-400'
                      : 'bg-white/10 hover:bg-amber-400 hover:text-zinc-950 text-white border-white/20 hover:border-amber-400'
                  }`}
                >
                  <Info className="w-4 h-4 text-amber-500 group-hover/btn:text-zinc-950 transition-colors" />
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* If open, secondary quick apply button */}
                {isOpen && (
                  <button
                    onClick={() => setSelectedRoleForApply(role)}
                    className="px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:scale-105 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5 fill-current" />
                    <span>Apply</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* STRICT APPLICATION RULE REMINDER CARD */}
      <div className={`p-5 sm:p-6 rounded-3xl border backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
        themeMode === 'light'
          ? 'bg-rose-500/10 border-rose-400/40 text-zinc-900 shadow-[0_10px_30px_rgba(244,63,94,0.08)]'
          : 'bg-gradient-to-r from-rose-950/40 via-red-900/30 to-rose-950/40 border-rose-500/40 text-white'
      }`}>
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-rose-600/20 text-rose-500 border border-rose-500/30 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h4 className={`text-sm sm:text-base font-black font-mono uppercase tracking-wider ${
              themeMode === 'light' ? 'text-rose-700' : 'text-rose-300'
            }`}>
              Notice: Serious Inquiries Only
            </h4>
            <p className={`text-xs sm:text-sm mt-0.5 ${
              themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
            }`}>
              All applications undergo human review. Fake or joke submissions result in an immediate permanent IP ban.
            </p>
          </div>
        </div>

        <a
          href="https://discord.gg/9bCw52SCy4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-md"
        >
          <span>Ask in Discord</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* DETAIL MODAL (POPUP WITH FULL DESCRIPTION, REQUIREMENTS, ETC.) */}
      <RoleDetailModal
        role={selectedRoleForDetail}
        themeMode={themeMode}
        isOpen={Boolean(selectedRoleForDetail)}
        onClose={() => setSelectedRoleForDetail(null)}
        onApply={(role) => setSelectedRoleForApply(role)}
      />

      {/* STRICT WARNING & APPLY MODAL */}
      <JobApplyModal
        role={selectedRoleForApply}
        themeMode={themeMode}
        isOpen={Boolean(selectedRoleForApply)}
        onClose={() => setSelectedRoleForApply(null)}
      />

      </div>
    </div>
  );
};
