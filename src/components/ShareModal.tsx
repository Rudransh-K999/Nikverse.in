import React, { useState } from 'react';
import { Copy, Check, X, Share2, Sparkles, QrCode } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm rounded-3xl bg-zinc-900/90 border border-white/20 p-6 text-white shadow-2xl backdrop-blur-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 mb-3">
            <Share2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold tracking-tight">Share {PROFILE_INFO.name}&apos;s Profile</h3>
          <p className="text-xs text-zinc-400 mt-1">Copy profile link or scan QR code below</p>
        </div>

        {/* Simulated Aesthetic QR Code */}
        <div className="flex flex-col items-center justify-center p-4 mb-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="p-3 bg-white rounded-xl shadow-lg">
            <QrCode className="w-28 h-28 text-black" />
          </div>
          <span className="text-[10px] font-mono text-zinc-400 mt-2 uppercase tracking-widest">
            nikverse.bio • guns.lol style
          </span>
        </div>

        {/* Copy Link Input */}
        <div className="relative flex items-center mb-4">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="w-full pl-3 pr-24 py-2.5 rounded-xl bg-black/50 border border-white/15 text-xs text-zinc-300 font-mono focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute right-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Social Share Buttons */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <a
            href={`https://twitter.com/intent/tweet?text=Check%20out%20nikverse%27s%20Minecraft%20portfolio!&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 font-medium transition-colors"
          >
            Share on X
          </a>
          <a
            href={`https://api.whatsapp.com/send?text=Check%20out%20nikverse%20portfolio%20${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 font-medium transition-colors"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
};
