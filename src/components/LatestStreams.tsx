import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import {
  YouTubeMediaItem,
  fetchChannelMedia,
  REFRESH_INTERVAL_MS,
  FALLBACK_STREAMS
} from '../services/youtubeService';
import { preloadImage } from '../utils/imagePreloader';
import { ThemeMode } from '../types';

interface LatestStreamsProps {
  streams?: YouTubeMediaItem[];
  themeMode?: ThemeMode;
}

export const LatestStreams: React.FC<LatestStreamsProps> = ({
  streams: propStreams,
  themeMode: _themeMode
}) => {
  const [streams, setStreams] = useState<YouTubeMediaItem[]>(propStreams || FALLBACK_STREAMS);

  useEffect(() => {
    if (propStreams && propStreams.length > 0) {
      setStreams(propStreams);
      return;
    }

    let isMounted = true;

    async function loadStreams(force = false) {
      if (!isMounted) return;
      try {
        const data = await fetchChannelMedia(force);
        if (isMounted && data.streams && data.streams.length > 0) {
          setStreams(data.streams);
          data.streams.forEach((s) => preloadImage(s.thumbnail));
        }
      } catch (err) {
        console.error('Error loading streams feed:', err);
      }
    }

    loadStreams();

    const intervalTimer = setInterval(() => {
      loadStreams(true);
    }, REFRESH_INTERVAL_MS);

    return () => {
      isMounted = false;
      clearInterval(intervalTimer);
    };
  }, [propStreams]);

  if (!streams || streams.length === 0) return null;

  // Strictly only show 5 latest streams
  const displayedStreams = streams.slice(0, 5);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '';
    }
  };

  return (
    <section
      id="streams"
      className="scroll-mt-20 w-full relative min-h-[100dvh] flex flex-col justify-center items-center select-none overflow-hidden py-12 sm:py-20"
    >
      {/* Background Artwork for Streams Page (Crisp, vibrant, no blur) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
        <img
          src="https://i.postimg.cc/brxhpL61/Gemini-Generated-Image-xw8h8exw8h8exw8h-clean.png"
          alt="Latest Streams Background"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center filter-none scale-100"
        />
        {/* Subtle, reduced darkness overlay with zero blur */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* SECTION HEADER (Rounded Broadcasts button removed, thinner transparent description) */}
      <div className="w-full flex flex-col items-center mb-6 sm:mb-10 text-center px-4 relative z-10">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cozy font-bold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Latest <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">Streams</span>
          </h2>
          <svg
            className="w-full h-3 sm:h-4 text-red-500 mt-1 mx-auto max-w-[200px] sm:max-w-[240px] drop-shadow-[0_2px_8px_rgba(239,68,68,0.6)]"
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
          Uncut Minecraft survival grinds, community SMP raids & live GTA adventures
        </p>
      </div>

      {/* 5 STREAMS GRID - TRANSPARENT GLASS CARDS */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 px-4">
        {displayedStreams.map((str) => (
          <a
            key={str.videoId}
            href={`https://www.youtube.com/watch?v=${str.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-2xl overflow-hidden bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-sm border border-white/10 hover:border-red-400/60 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between outline-none select-none"
          >
            {/* Thumbnail Container */}
            <div className="relative w-full aspect-video bg-black/20 overflow-hidden">
              <img
                src={str.thumbnail}
                alt={str.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />

              {/* Channel Tag Overlay (Nikverse live dot removed) */}
              {str.channelTitle && (
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-xs text-[11px] font-mono font-medium text-red-300/90 border border-white/10 shadow-sm">
                  {str.channelTitle}
                </div>
              )}

              {/* Date Overlay */}
              {str.publishedAt && (
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-xs text-[10px] font-mono text-zinc-300/90 border border-white/10 shadow-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-red-400" />
                  <span>{formatDate(str.publishedAt)}</span>
                </div>
              )}

              {/* View Metric Badge */}
              {str.viewCount && (
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/40 backdrop-blur-xs text-[10px] font-mono text-zinc-300/80 border border-white/10">
                  {str.viewCount} views
                </div>
              )}
            </div>

            {/* Stream Title (Thinner font & transparent card body) */}
            <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-center">
              <h4 className="font-sans font-normal text-xs sm:text-sm text-zinc-200/90 group-hover:text-red-400 transition-colors line-clamp-2 text-left leading-snug">
                {str.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
