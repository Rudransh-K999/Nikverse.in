import React from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  Send,
  Calendar,
  DollarSign,
  Info,
  Clock
} from 'lucide-react';
import { JobRole } from '../data/careersData';
import { ThemeMode } from '../types';

interface RoleDetailModalProps {
  role: JobRole | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (role: JobRole) => void;
  themeMode?: ThemeMode;
}

export const RoleDetailModal: React.FC<RoleDetailModalProps> = ({
  role,
  isOpen,
  onClose,
  onApply,
  themeMode = 'light'
}) => {
  if (!isOpen || !role) return null;

  const isOpenStatus = role.status === 'open';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      {/* Liquid Glass Modal Container */}
      <div
        className={`relative w-full max-w-2xl my-auto rounded-3xl border p-6 sm:p-8 backdrop-blur-3xl overflow-hidden max-h-[90vh] flex flex-col transition-colors duration-300 shadow-2xl ${
          themeMode === 'light'
            ? 'bg-white/85 border-white/90 text-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
            : 'bg-zinc-950/75 border-white/20 text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gloss Highlight & Ambient Glows */}
        <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
        <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          themeMode === 'light' ? 'bg-amber-500/10' : 'bg-amber-500/15'
        }`} />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2.5 rounded-full border transition-colors cursor-pointer z-10 active:scale-95 ${
            themeMode === 'light'
              ? 'bg-black/5 hover:bg-black/10 text-zinc-700 border-black/10'
              : 'bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border-white/10'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className={`flex flex-col gap-2 pb-5 border-b pr-10 ${
          themeMode === 'light' ? 'border-zinc-200' : 'border-white/15'
        }`}>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="text-amber-500 font-bold tracking-wider uppercase">
              {role.category}
            </span>
            <span className="text-zinc-400">•</span>
            <span className="text-emerald-500 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Applications Open
            </span>
          </div>

          <h3 className="heading-yellow-outline text-2xl sm:text-4xl font-black font-sans tracking-tight mt-1">
            {role.title}
          </h3>

          <div className={`flex flex-wrap items-center gap-4 text-xs font-mono mt-1 ${
            themeMode === 'light' ? 'text-zinc-600' : 'text-zinc-300'
          }`}>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500" />
              <span>{role.type}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-amber-500" />
              <span>{role.compensation}</span>
            </div>
          </div>
        </div>

        {/* SCROLLABLE BODY (FULL DESCRIPTION, RESPONSIBILITIES, REQUIREMENTS) */}
        <div className="flex-1 overflow-y-auto py-5 space-y-6 text-left pr-2 custom-scrollbar">
          
          {/* Overview */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-2 flex items-center gap-2 ${
              themeMode === 'light' ? 'text-amber-700' : 'text-amber-400'
            }`}>
              <Info className="w-4 h-4 text-amber-500" />
              <span>Role Overview</span>
            </h4>
            <p className={`text-sm sm:text-base leading-relaxed ${
              themeMode === 'light' ? 'text-zinc-800' : 'text-zinc-200'
            }`}>
              {role.fullDescription.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-3 flex items-center gap-2 ${
              themeMode === 'light' ? 'text-amber-700' : 'text-amber-400'
            }`}>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
              <span>Key Responsibilities</span>
            </h4>
            <ul className="space-y-2">
              {role.fullDescription.responsibilities.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 text-sm sm:text-base py-1 ${
                  themeMode === 'light' ? 'text-zinc-800' : 'text-zinc-200'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-3 flex items-center gap-2 ${
              themeMode === 'light' ? 'text-amber-700' : 'text-amber-400'
            }`}>
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Requirements & Qualifications</span>
            </h4>
            <ul className="space-y-2">
              {role.fullDescription.requirements.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 text-sm sm:text-base py-1 ${
                  themeMode === 'light' ? 'text-zinc-800' : 'text-zinc-200'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Skills */}
          {role.fullDescription.preferredSkills && role.fullDescription.preferredSkills.length > 0 && (
            <div>
              <h4 className={`text-xs font-mono uppercase tracking-wider font-bold mb-3 ${
                themeMode === 'light' ? 'text-amber-700' : 'text-amber-400'
              }`}>
                Bonus / Preferred Skills
              </h4>
              <ul className="space-y-2">
                {role.fullDescription.preferredSkills.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2.5 text-sm py-0.5 ${
                    themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* FOOTER CTA */}
        <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
          themeMode === 'light' ? 'border-zinc-200 bg-black/[0.02]' : 'border-white/15 bg-black/20'
        }`}>
          <button
            onClick={onClose}
            className={`px-5 py-2.5 rounded-xl border text-xs font-mono uppercase font-bold tracking-wider transition-colors cursor-pointer ${
              themeMode === 'light'
                ? 'border-black/15 bg-black/5 hover:bg-black/10 text-zinc-800'
                : 'border-white/20 bg-white/10 hover:bg-white/20 text-zinc-200'
            }`}
          >
            Close
          </button>

          {isOpenStatus ? (
            <button
              onClick={() => {
                onClose();
                onApply(role);
              }}
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
              <span>Apply For This Role</span>
            </button>
          ) : (
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider ${
              themeMode === 'light'
                ? 'bg-black/5 border-black/10 text-zinc-600'
                : 'bg-zinc-900/90 border-white/10 text-zinc-400'
            }`}>
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Applications Currently Closed</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
