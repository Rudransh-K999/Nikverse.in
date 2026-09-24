import React from 'react';
import { ThemeMode } from '../types';

interface VoidMCSectionProps {
  themeMode?: ThemeMode;
}

export const VoidMCSection: React.FC<VoidMCSectionProps> = () => {
  const storeUrl = 'https://store.void-mc.in';
  const bannerImgUrl = 'https://i.postimg.cc/gcB8PJwY/Gemini-Generated-Image-e3jnxoe3jnxoe3jn.png';

  return (
    <section
      id="voidmc"
      className="scroll-mt-24 w-full section-contain relative py-4"
    >
      <a
        href={storeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Void MC Minecraft Server Store"
        className="group relative block w-full max-w-5xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:scale-[1.015] active:scale-[0.99] cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_45px_rgba(245,158,11,0.25)]"
      >
        <img
          src={bannerImgUrl}
          alt="Void MC Minecraft Server"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            if (!img.src.includes('wH9VLRgs')) {
              img.src = 'https://i.postimg.cc/wH9VLRgs/Gemini-Generated-Image-e3jnxoe3jnxoe3jn.png';
            }
          }}
          className="w-full h-auto object-cover select-none filter brightness-100 group-hover:brightness-105 transition-all duration-300"
        />
      </a>
    </section>
  );
};

