import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  ThumbsUp,
  Calendar,
  Play,
  Radio
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
  const [activeTab, setActiveTab] = useState<'vids' | 'streams'>('vids');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [videos, setVideos] = useState<YouTubeMediaItem[]>(FALLBACK_VIDEOS);
  const [streams, setStreams] = useState<YouTubeMediaItem[]>(FALLBACK_STREAMS);

  // Load latest pure uploaded videos and recent livestreams
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

  const currentList = activeTab === 'vids' ? videos : streams;
  const safeIndex = Math.min(currentIndex, Math.max(0, currentList.length - 1));
  const currentItem: YouTubeMediaItem | undefined = currentList[safeIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : currentList.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < currentList.length - 1 ? prev + 1 : 0));
  };

  // Format date helper (e.g. "Jun 28, 2026")
  const formatDate = (isoString?: string) => {
    if (!isoString) return 'Recently';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return 'Recently';
    }
  };

  return (
    <section 
      id="uploads" 
      className="scroll-mt-24 w-full section-contain mt-8 sm:mt-14 pb-16 flex flex-col items-center"
    >
      {/* HEADING OUTSIDE THE CARD */}
      <div className="w-full flex justify-center mb-6 sm:mb-8 text-center">
        <h2 className="heading-yellow-outline-lg text-3xl sm:text-4xl lg:text-5xl font-black font-sans uppercase tracking-tight m-0">
          RECENT UPLOADS
        </h2>
      </div>

      {/* CARD AS BACKGROUND WRAPPER FOR THE VIDEO PLAYER */}
      <div
        className={`w-full rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 relative overflow-hidden text-white transition-all duration-500 group/card hardware-accelerated bg-transparent border flex flex-col items-center gap-5 sm:gap-6 ${
          themeMode === 'light'
            ? 'border-white/60 hover:border-amber-400/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
            : 'border-white/25 hover:border-amber-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
        }`}
      >
        {/* VIDS & STREAMS TOGGLE BUTTONS */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full border border-black bg-white/10 backdrop-blur-md shadow-lg relative">
          <button
            onClick={() => {
              setActiveTab('vids');
              setCurrentIndex(0);
            }}
            className={`relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'vids'
                ? 'text-zinc-950 scale-105'
                : 'text-white hover:text-amber-300'
            }`}
          >
            {activeTab === 'vids' && (
              <motion.div
                layoutId="activeUploadTab"
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full border border-black shadow-[0_2px_15px_rgba(245,158,11,0.6)] -z-10"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Vids</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('streams');
              setCurrentIndex(0);
            }}
            className={`relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === 'streams'
                ? 'text-zinc-950 scale-105'
                : 'text-white hover:text-amber-300'
            }`}
          >
            {activeTab === 'streams' && (
              <motion.div
                layoutId="activeUploadTab"
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-full border border-black shadow-[0_2px_15px_rgba(245,158,11,0.6)] -z-10"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>Streams</span>
          </button>
        </div>

        {/* EMBED PLAYER STAGE WITH SIDE ARROWS */}
        <div className="w-full max-w-4xl relative flex flex-col items-center">
          <div className="w-full relative flex items-center justify-center">
            {/* SIDE ARROW: PREVIOUS */}
            <button
              onClick={handlePrev}
              aria-label="Previous Video"
              className="absolute -left-3 sm:-left-5 lg:-left-7 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3] group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* VIDEO PLAYER WITH SMOOTH TRANSITION */}
            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-black shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-zinc-950">
              <div className="relative w-full aspect-video bg-zinc-950">
                <AnimatePresence mode="wait">
                  {currentItem ? (
                    <motion.div
                      key={`${activeTab}-${currentItem.videoId}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-full h-full"
                    >
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${currentItem.videoId}?rel=0&autoplay=0&enablejsapi=1`}
                        title={currentItem.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full border-0"
                        loading="eager"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-mono text-sm">
                      Loading media...
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* SIDE ARROW: NEXT */}
            <button
              onClick={handleNext}
              aria-label="Next Video"
              className="absolute -right-3 sm:-right-5 lg:-right-7 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* LINEAR DETAILS ROW JUST BELOW VIDEO PLAYER: Views • Likes • Date Posted */}
          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={`details-${currentItem.videoId}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-full mt-4 sm:mt-5 px-4 py-3 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-mono text-white font-medium text-center shadow-md"
              >
                {/* Views */}
                <span className="inline-flex items-center gap-1.5 text-zinc-200">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>{currentItem.viewCount} views</span>
                </span>

                <span className="text-zinc-500 select-none">•</span>

                {/* Likes */}
                <span className="inline-flex items-center gap-1.5 text-zinc-200">
                  <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentItem.likeCount} likes</span>
                </span>

                <span className="text-zinc-500 select-none">•</span>

                {/* Date Posted */}
                <span className="inline-flex items-center gap-1.5 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{formatDate(currentItem.publishedAt)}</span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

