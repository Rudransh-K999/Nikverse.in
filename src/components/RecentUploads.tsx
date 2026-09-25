import React, { useState, useEffect } from 'react';
import {
  Play,
  Radio,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import {
  YouTubeMediaItem,
  fetchChannelMedia,
  REFRESH_INTERVAL_MS,
  FALLBACK_VIDEOS,
  FALLBACK_STREAMS
} from '../services/youtubeService';
import { preloadImage } from '../utils/imagePreloader';
import { ThemeMode } from '../types';

interface RecentUploadsProps {
  themeMode?: ThemeMode;
}

export const RecentUploads: React.FC<RecentUploadsProps> = ({
  themeMode = 'light'
}) => {
  const [videos, setVideos] = useState<YouTubeMediaItem[]>(FALLBACK_VIDEOS);
  const [streams, setStreams] = useState<YouTubeMediaItem[]>(FALLBACK_STREAMS);
  const [visibleVideosCount, setVisibleVideosCount] = useState<number>(6);
  const [visibleStreamsCount, setVisibleStreamsCount] = useState<number>(6);

  // Load latest uploaded videos and livestreams
  useEffect(() => {
    let isMounted = true;

    async function loadData(force = false) {
      if (!isMounted) return;
      try {
        const data = await fetchChannelMedia(force);
        if (isMounted) {
          if (data.videos && data.videos.length > 0) {
            setVideos(data.videos);
            data.videos.forEach((v) => preloadImage(v.thumbnail));
          }
          if (data.streams && data.streams.length > 0) {
            setStreams(data.streams);
            data.streams.forEach((s) => preloadImage(s.thumbnail));
          }
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

  const displayedVideos = videos.slice(0, visibleVideosCount);
  const displayedStreams = streams.slice(0, visibleStreamsCount);

  return (
    <section 
      id="uploads" 
      className="scroll-mt-24 w-full section-contain mt-6 sm:mt-12 pb-12 flex flex-col items-center select-none"
    >
      {/* SECTION MAIN HEADING */}
      <div className="w-full flex flex-col items-center mb-10 sm:mb-14 text-center">
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
        <p className="font-cozy text-xs sm:text-sm text-zinc-300 font-normal tracking-wide mt-2">
          Catch up on latest episodes, challenges & live streams
        </p>
      </div>

      <div className="w-full max-w-6xl space-y-14 sm:space-y-20">
        {/* ========================================================================= */}
        {/* 1. VIDEOS SECTION (Placed Vertically: Heading then Videos Grid)            */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col">
          {/* Video Heading */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/30 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <Play className="w-5 h-5 fill-current" />
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-syne uppercase tracking-tight text-white">
                  Videos
                </h3>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Hardcore challenges, survival lore, and special episodes
                </p>
              </div>
            </div>
          </div>

          {/* Videos Placed Vertically in a Responsive Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedVideos.map((vid) => (
              <a
                key={vid.videoId}
                href={`https://www.youtube.com/watch?v=${vid.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl overflow-hidden bg-zinc-950/80 hover:bg-zinc-900 border border-white/15 hover:border-amber-400/80 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.25)] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=640&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient & Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-amber-400/90 text-zinc-950 flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Channel Tag Overlay */}
                  {vid.channelTitle && (
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[11px] font-mono font-bold text-zinc-200">
                      {vid.channelTitle}
                    </div>
                  )}
                </div>

                {/* Video Title */}
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <h4 className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 text-left leading-snug">
                    {vid.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Toggle View More / View Less Videos */}
          {videos.length > 6 && (
            <div className="w-full flex justify-center mt-6">
              <button
                onClick={() => setVisibleVideosCount((prev) => (prev <= 6 ? videos.length : 6))}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black border border-white/15 hover:border-amber-400 text-zinc-300 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
              >
                {visibleVideosCount <= 6 ? (
                  <>
                    <span>View More Videos ({videos.length - 6} more)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* 2. LIVESTREAM SECTION (Placed Vertically: Heading below Videos, then Streams Grid) */}
        {/* ========================================================================= */}
        <div className="w-full flex flex-col">
          {/* Livestream Heading */}
          <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-red-500/20 text-red-500 border border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.25)]">
                <Radio className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-syne uppercase tracking-tight text-white">
                  Live Streams
                </h3>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  GTA sessions, community SMP events, and interactive broadcasts
                </p>
              </div>
            </div>
          </div>

          {/* Live Streams Placed Vertically in a Responsive Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {displayedStreams.map((str) => (
              <a
                key={str.videoId}
                href={`https://www.youtube.com/watch?v=${str.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl overflow-hidden bg-zinc-950/80 hover:bg-zinc-900 border border-white/15 hover:border-red-500/80 shadow-lg hover:shadow-[0_10px_30px_rgba(239,68,68,0.25)] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail Container */}
                <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
                  <img
                    src={str.thumbnail}
                    alt={str.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=640&auto=format&fit=crop';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Channel Tag Overlay */}
                  {str.channelTitle && (
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[11px] font-mono font-bold text-red-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>{str.channelTitle}</span>
                    </div>
                  )}
                </div>

                {/* Stream Title */}
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <h4 className="font-syne font-bold text-sm sm:text-base text-white group-hover:text-red-400 transition-colors line-clamp-2 text-left leading-snug">
                    {str.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          {/* Toggle View More / View Less Streams */}
          {streams.length > 6 && (
            <div className="w-full flex justify-center mt-6">
              <button
                onClick={() => setVisibleStreamsCount((prev) => (prev <= 6 ? streams.length : 6))}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-red-500 hover:text-white border border-white/15 hover:border-red-500 text-zinc-300 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
              >
                {visibleStreamsCount <= 6 ? (
                  <>
                    <span>View More Streams ({streams.length - 6} more)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

