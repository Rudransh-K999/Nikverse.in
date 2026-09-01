import React, { useState } from 'react';
import { Mail, Send, Check, X, Sparkles, Building, MessageSquare, Loader2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { sendContactMessageToDiscord } from '../services/discordWebhook';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Sponsorship / Business Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;

    setIsSubmitting(true);
    await sendContactMessageToDiscord({
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });
    setIsSubmitting(false);
    setSent(true);

    setTimeout(() => {
      setSent(false);
      setEmail('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-zinc-950/85 border border-white/20 p-6 sm:p-7 text-white shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Specular highlight line & glow */}
        <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl bg-amber-500/15 pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-3 rounded-2xl bg-amber-400/20 text-amber-300 border border-amber-400/40">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight heading-yellow-outline">Business & Contact</h3>
            <p className="text-xs text-zinc-300">
              Direct email: <span className="text-amber-300 font-mono font-bold">{PROFILE_INFO.sponsorEmail || PROFILE_INFO.email}</span>
            </p>
          </div>
        </div>

        {sent ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3 relative z-10">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Message Sent!</h4>
            <p className="text-xs text-zinc-300 max-w-xs">
              Thank you! Nikverse&apos;s management team will review your message and reply soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-300/90 mb-1.5">
                Your Email Address
              </label>
              <input
                type="email"
                required
                placeholder="partner@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/20 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-md"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-300/90 mb-1.5">
                Inquiry Type
              </label>
              <div className="relative">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-white/20 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-md appearance-none cursor-pointer"
                >
                  <option value="Sponsorship / Brand Integration" className="bg-zinc-950 text-white">Sponsorship / Brand Integration</option>
                  <option value="SMP Invite / Collaboration" className="bg-zinc-950 text-white">SMP Invite / Collaboration</option>
                  <option value="Server Network Media Inquiry" className="bg-zinc-950 text-white">Server Network Media Inquiry</option>
                  <option value="General Inquiries" className="bg-zinc-950 text-white">General Inquiries</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-amber-300/90 mb-1.5">
                Message Details
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hi Nikverse, we'd love to partner with you for..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/20 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none backdrop-blur-md"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-xl font-mono font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all transform flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-zinc-950 hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-current" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
