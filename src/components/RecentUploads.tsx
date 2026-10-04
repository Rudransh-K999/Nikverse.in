import React, { useState, useEffect } from 'react';
import {
  YouTubeMediaItem,
  fetchChannelMedia,
  REFRESH_INTERVAL_MS,
  FALLBACK_VIDEOS
} from '../services/youtubeService';
import { preloadImage } from '../utils/imagePreloader';
import { ThemeMode } from '../types';

interface RecentUploadsProps {
  themeMode?: ThemeMode;
}

export const RecentUploads: React.FC<RecentUploadsProps> = () => {
  const [videos, setVideos] = useState<YouTubeMediaItem[]>(FALLBACK_VIDEOS);

  // Load latest uploaded videos (No shorts, No livestreams)
  useEffect(() => {
    let isMounted = true;

    async function loadData(force = false) {
      if (!isMounted) return;
      try {
        const data = await fetchChannelMedia(force);
        if (isMounted && data.videos && data.videos.length > 0) {
          setVideos(data.videos);
          data.videos.forEach((v) => preloadImage(v.thumbnail));
        }
      } catch (err) {
        console.error('Error loading channel media feed:', err);
      }
    }

    loadData();

    const intervalTimer = setInterval(() => {
      loadData(true);
    }, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      clearInterval(intervalTimer);
    };
  }, []);

  // Split videos into two rows for the dual moving strips
  const half = Math.ceil(videos.length / 2);
  const row1Original = videos.slice(0, half);
  const row2Original = videos.slice(half);

  const row1 = row1Original.length > 0 ? row1Original : videos;
  const row2 = row2Original.length > 0 ? row2Original : videos;

  // Duplicate for seamless infinite marquee loop (4 repetitions for continuous ticker)
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  const renderVideoCard = (vid: YouTubeMediaItem, index: number, rowKey: string) => (
    <a
      key={`${rowKey}-${vid.videoId}-${index}`}
      href={`https://www.youtube.com/watch?v=${vid.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[260px] sm:w-[320px] md:w-[350px] shrink-0 rounded-2xl overflow-hidden bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-sm border border-white/10 hover:border-amber-400/60 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col outline-none select-none"
    >
      {/* Thumbnail Container - Transparent & Clean */}
      <div className="relative w-full aspect-video bg-black/20 overflow-hidden">
        <img
          src={vid.thumbnail}
          alt={vid.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=640&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Subtle transparent vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

        {/* Channel Tag Overlay */}
        {vid.channelTitle && (
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-xs text-[11px] font-mono font-medium text-amber-300/90 border border-white/10 shadow-sm">
            {vid.channelTitle}
          </div>
        )}

        {/* View Metric Badge */}
        {vid.viewCount && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs text-[10px] font-mono text-zinc-300/80 border border-white/10">
            {vid.viewCount} views
          </div>
        )}
      </div>

      {/* Video Title - Simple Transparent Card */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-center">
        <h4 className="font-sans font-normal text-xs sm:text-sm text-zinc-200/90 group-hover:text-amber-300 transition-colors line-clamp-2 text-left leading-snug">
          {vid.title}
        </h4>
      </div>
    </a>
  );

  return (
    <section
      id="uploads"
      className="scroll-mt-20 w-full relative min-h-[100dvh] flex flex-col justify-center items-center select-none overflow-hidden py-10 sm:py-16"
    >
      {/* Background Artwork for Recent Uploads (Crisp, vibrant, no blur) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
        <img
          src="https://i.postimg.cc/nhYk8Wvp/Gemini-Generated-Image-j342bxj342bxj342-clean.png"
          alt="Recent Uploads Background"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter-none scale-100"
        />
        {/* Subtle, reduced darkness overlay with zero blur */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* SECTION MAIN HEADING (Video heading removed, thinner transparent description) */}
      <div className="w-full flex flex-col items-center mb-6 sm:mb-8 text-center px-4 relative z-10">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cozy font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Latest <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">Uploads</span>
          </h2>
          <svg
            className="w-full h-3 sm:h-4 text-amber-400 mt-1 mx-auto max-w-[200px] sm:max-w-[240px] drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]"
            viewBox="0 0 240 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11C45 4 140 2 236 8C190 12 85 14 15 13"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-sans text-xs sm:text-sm text-zinc-400/80 font-light tracking-wide mt-2 max-w-lg">
          Catch up on all episodes, hardcore survival lore & challenges
        </p>
      </div>

      {/* DUAL TICKER AUTO-MOVING VIDEO STRIPS (Smooth 60fps Movement) */}
      <div className="w-full max-w-full overflow-hidden space-y-4 relative py-1">
        {/* Left & Right Cinematic Edge Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#09090b] via-[#09090b]/80 to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Auto Moves Left-to-Right */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-ltr flex gap-4 sm:gap-5 shrink-0 items-stretch">
            {row1Items.map((vid, idx) => renderVideoCard(vid, idx, 'row1'))}
          </div>
        </div>

        {/* ROW 2: Auto Moves Right-to-Left */}
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee-rtl flex gap-4 sm:gap-5 shrink-0 items-stretch">
            {row2Items.map((vid, idx) => renderVideoCard(vid, idx, 'row2'))}
          </div>
        </div>
      </div>
    </section>
  );
};
