import React, { useState } from 'react';
import {
  AlertTriangle,
  X,
  CheckCircle2,
  ShieldAlert,
  Send,
  ExternalLink,
  Copy,
  Check,
  Briefcase,
  Loader2,
  RefreshCw
} from 'lucide-react';
import { JobRole } from '../data/careersData';
import { ThemeMode } from '../types';
import { sendJobApplicationToDiscord } from '../services/discordWebhook';

interface JobApplyModalProps {
  role: JobRole | null;
  isOpen: boolean;
  onClose: () => void;
  themeMode?: ThemeMode;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({
  role,
  isOpen,
  onClose,
  themeMode = 'light'
}) => {
  const [hasAgreedToRules, setHasAgreedToRules] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discordTag, setDiscordTag] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [experienceNotes, setExperienceNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [generatedAppId, setGeneratedAppId] = useState<string>('');

  if (!isOpen || !role) return null;

  const isClosed = role.status === 'closed';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasAgreedToRules || isClosed || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const appId = `NK-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedAppId(appId);

    const result = await sendJobApplicationToDiscord({
      role,
      name: name.trim(),
      discordTag: discordTag.trim(),
      email: email.trim(),
      portfolioUrl: portfolioUrl.trim(),
      experienceNotes: experienceNotes.trim(),
      applicationId: appId
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      // If error occurs, still allow them to see status or retry
      setErrorMessage(result.error || 'Failed to deliver application to Discord webhook.');
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setHasAgreedToRules(false);
    setName('');
    setEmail('');
    setDiscordTag('');
    setPortfolioUrl('');
    setExperienceNotes('');
    setErrorMessage(null);
    setGeneratedAppId('');
    onClose();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('team.nikverse@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={handleReset}
    >
      <div
        className={`relative w-full max-w-xl my-auto rounded-3xl border p-5 sm:p-8 backdrop-blur-2xl overflow-hidden transition-colors duration-300 shadow-2xl ${
          themeMode === 'light'
            ? 'bg-white/85 border-white/90 text-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
            : 'bg-zinc-950/75 border-white/20 text-white shadow-[0_25px_70px_rgba(0,0,0,0.85)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Specular Top Gloss Highlight Line */}
        <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
          themeMode === 'light' ? 'bg-rose-500/10' : 'bg-rose-600/15'
        }`} />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className={`absolute top-4 right-4 p-2 rounded-full border transition-colors z-20 cursor-pointer ${
            themeMode === 'light'
              ? 'bg-black/5 hover:bg-black/10 text-zinc-700 border-black/10'
              : 'bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border-white/10'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* ROLE HEADER */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-bold text-amber-500 mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Nikverse Application Portal</span>
          </div>
          <h3 className={`text-2xl font-bold font-sans tracking-tight ${
            themeMode === 'light' ? 'text-zinc-950' : 'text-white'
          }`}>
            {role.title}
          </h3>
        </div>

        {/* STRICT RULE WARNING BANNER */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/80 via-red-900/60 to-rose-950/80 border-2 border-rose-500/80 shadow-[0_0_25px_rgba(244,63,94,0.3)] mb-6 text-left relative overflow-hidden text-white">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-rose-600 text-white shrink-0 mt-0.5 shadow-md">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black font-mono uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Strict Application Rule & Warning</span>
              </h4>
              <p className="text-xs sm:text-sm font-bold text-rose-100 mt-1 leading-relaxed">
                Do NOT apply for fun. Any joke, troll, spam, or insincere applications will lead to an immediate and permanent <span className="underline decoration-rose-300 font-black text-white">IP BAN</span> and blacklist across all Nikverse services, Minecraft servers, and Discord networks.
              </p>
            </div>
          </div>
        </div>

        {/* APPLICATION STATUS / SUCCESS STATE */}
        {submitted ? (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className={`text-xl font-bold font-sans ${themeMode === 'light' ? 'text-zinc-950' : 'text-white'}`}>
                Application Dispatched to Discord!
              </h4>
              <p className={`text-xs sm:text-sm max-w-sm mt-1.5 leading-relaxed ${
                themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
              }`}>
                Your answers for <strong className="text-amber-500">{role.title}</strong> have been sent to the Discord channel server webhook. Our team will review your portfolio and reach out via Discord/Email.
              </p>
            </div>

            {/* SUMMARY CARD */}
            <div className={`w-full max-w-md p-4 rounded-2xl border text-left text-xs font-mono space-y-1.5 ${
              themeMode === 'light' ? 'bg-black/5 border-black/10 text-zinc-800' : 'bg-black/60 border-white/10 text-zinc-300'
            }`}>
              <div className="flex justify-between border-b border-black/10 pb-1.5">
                <span className="text-zinc-500">Application ID:</span>
                <span className="text-amber-500 font-bold">{generatedAppId || `NK-${Math.floor(100000 + Math.random() * 900000)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Applicant:</span>
                <span className="font-semibold text-zinc-900 dark:text-white">{name} ({discordTag})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Role:</span>
                <span className="font-semibold text-zinc-900 dark:text-white">{role.title}</span>
              </div>
              <div className="flex justify-between truncate">
                <span className="text-zinc-500">Email:</span>
                <span className="font-semibold text-zinc-900 dark:text-white truncate max-w-[200px]">{email}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-2 px-7 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-zinc-950 font-mono text-xs uppercase font-black tracking-wider transition-all cursor-pointer shadow-md active:scale-95"
            >
              Done & Close
            </button>
          </div>
        ) : isClosed ? (
          <div className="py-6 text-center space-y-3">
            <p className={`text-sm ${themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'}`}>
              Applications for <strong className="text-rose-500">{role.title}</strong> are currently closed. Check back soon or join our Discord announcements channel for future openings.
            </p>
            <a
              href="https://discord.gg/UqxMNKaAnc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer shadow-md"
            >
              <span>Join Discord Announcements</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            
            {/* MANDATORY CHECKBOX CONFIRMATION */}
            <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors select-none ${
              themeMode === 'light'
                ? 'bg-black/5 border-black/10 hover:border-amber-500/60'
                : 'bg-black/40 border-white/15 hover:border-amber-400/60'
            }`}>
              <input
                type="checkbox"
                required
                checked={hasAgreedToRules}
                onChange={(e) => setHasAgreedToRules(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-zinc-500 bg-zinc-800 text-amber-500 focus:ring-amber-400 cursor-pointer shrink-0"
              />
              <span className={`text-xs font-medium leading-tight ${
                themeMode === 'light' ? 'text-zinc-800' : 'text-zinc-200'
              }`}>
                I acknowledge that this is a serious business application and I agree that any trolling or spam will result in an instant <strong className="text-rose-500">IP Ban</strong>.
              </span>
            </label>

            {/* FORM INPUTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Full Name / Preferred Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                    themeMode === 'light'
                      ? 'bg-white/70 border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                      : 'bg-black/60 border-white/15 text-white placeholder:text-zinc-600'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Discord Username *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. alex_editor"
                  value={discordTag}
                  onChange={(e) => setDiscordTag(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                    themeMode === 'light'
                      ? 'bg-white/70 border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                      : 'bg-black/60 border-white/15 text-white placeholder:text-zinc-600'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                    themeMode === 'light'
                      ? 'bg-white/70 border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                      : 'bg-black/60 border-white/15 text-white placeholder:text-zinc-600'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1 ${
                  themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Portfolio / Drive / YouTube Link *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/..."
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none focus:border-amber-400 transition-colors ${
                    themeMode === 'light'
                      ? 'bg-white/70 border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                      : 'bg-black/60 border-white/15 text-white placeholder:text-zinc-600'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-1 ${
                themeMode === 'light' ? 'text-zinc-700' : 'text-zinc-300'
              }`}>
                Brief Introduction & Tool Proficiency
              </label>
              <textarea
                rows={3}
                placeholder="Share your software experience, years editing/writing/animating, and what makes you a great fit..."
                value={experienceNotes}
                onChange={(e) => setExperienceNotes(e.target.value)}
                className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none ${
                  themeMode === 'light'
                    ? 'bg-white/70 border-zinc-300 text-zinc-900 placeholder:text-zinc-400'
                    : 'bg-black/60 border-white/15 text-white placeholder:text-zinc-600'
                }`}
              />
            </div>

            {/* ERROR FEEDBACK BANNER */}
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-600 dark:text-rose-300 text-xs flex items-center justify-between gap-2">
                <span>{errorMessage}</span>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-500 font-mono font-bold flex items-center gap-1 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Retry</span>
                </button>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={!hasAgreedToRules || isSubmitting}
                className={`w-full sm:flex-1 py-3 px-5 rounded-xl font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                  hasAgreedToRules && !isSubmitting
                    ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-[0.98]'
                    : 'bg-zinc-800/40 text-zinc-500 border border-zinc-700/40 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                    <span>Transmitting to Discord...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                  themeMode === 'light'
                    ? 'border-black/15 bg-black/5 hover:bg-black/10 text-zinc-800'
                    : 'border-white/20 bg-white/5 hover:bg-white/15 text-zinc-300'
                }`}
                title="Copy Direct Hiring Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied Email' : 'Email Direct'}</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
