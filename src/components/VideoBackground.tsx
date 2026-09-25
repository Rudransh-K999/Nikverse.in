import React, { useRef, useEffect, useState } from 'react';
import { BackgroundVideo, ThemeMode } from '../types';

interface VideoBackgroundProps {
  currentVideo: BackgroundVideo;
  themeMode: ThemeMode;
  videos: BackgroundVideo[];
  onSelectVideo: (video: BackgroundVideo) => void;
  onToggleTheme: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  overlayOpacity: number;
  blurAmount: number;
  onOverlayOpacityChange: (val: number) => void;
  onBlurAmountChange: (val: number) => void;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  currentVideo,
  themeMode,
  isPlaying,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Backup video sources including moewalls minecraft fireflies forest live wallpaper
  const backupVideoUrls = [
    currentVideo.videoUrl,
    'https://moewalls.com/wp-content/uploads/preview/2026/minecraft-fireflies-forest-preview.webm',
    'https://moewalls.com/wp-content/uploads/preview/2025/minecraft-fireflies-forest-preview.webm',
    'https://moewalls.com/wp-content/uploads/preview/2024/minecraft-fireflies-forest-preview.webm',
    'https://cloud.wallsflow.com/files/2026-03/93b6e09717_minecraft-enchanted-forest-sun-rays-wallsflow-com.mp4',
    'https://moewalls.com/wp-content/uploads/preview/2026/cherry-blossom-lake-house-minecraft-preview.webm',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  ];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Reset video error when source changes
  useEffect(() => {
    setVideoError(false);
  }, [currentVideo.videoUrl]);

  // Keep video playing smoothly in loop
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    vid.muted = true;
    vid.loop = true;

    if (isPlaying) {
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(() => {
            if (vid && isPlaying) {
              vid.play().catch(() => {});
            }
          }, 300);
        });
      }
    } else {
      vid.pause();
    }
  }, [isPlaying, currentVideo, activeVideoIndex]);

  // Canvas starfield only active as fallback if video fails completely
  useEffect(() => {
    if (!videoError || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const stars: Array<{ x: number; y: number; size: number; alpha: number; speed: number }> = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.02 + 0.005
      });
    }

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.fillStyle = themeMode === 'light' ? '#18181b' : '#05070c';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#fef08a';
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.globalAlpha = s.alpha + Math.sin(time * 2 + s.x) * 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoError, themeMode]);

  const handleVideoEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    vid.currentTime = 0;
    vid.play().catch(() => {});
  };

  const handleVideoError = () => {
    console.warn('Primary video failed, trying backup source...');
    if (activeVideoIndex < backupVideoUrls.length - 1) {
      setActiveVideoIndex((prev) => prev + 1);
    } else {
      setVideoError(true);
    }
  };

  const activeSrc = backupVideoUrls[activeVideoIndex] || currentVideo.videoUrl;

  return (
    <div 
      className="absolute top-0 left-0 right-0 w-full h-[95vh] sm:h-[110vh] max-h-[1150px] min-h-[640px] overflow-hidden pointer-events-none select-none hardware-accelerated z-0"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.65) 65%, rgba(0, 0, 0, 0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.65) 65%, rgba(0, 0, 0, 0) 100%)'
      }}
    >
      {/* Background Poster Image (fallback & instant paint) */}
      {currentVideo.fallbackPoster && (
        <img
          src={currentVideo.fallbackPoster}
          alt="Background Wallpaper"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-90"
        />
      )}

      {!videoError ? (
        <video
          ref={videoRef}
          key={activeSrc}
          src={activeSrc}
          poster={currentVideo.fallbackPoster}
          loop
          playsInline
          autoPlay
          muted
          preload="auto"
          referrerPolicy="no-referrer"
          onError={handleVideoError}
          onEnded={handleVideoEnded}
          className="absolute min-w-full min-h-full w-auto h-auto top-0 left-1/2 -translate-x-1/2 object-cover object-top opacity-100 pointer-events-none z-10 will-change-transform"
        />
      ) : (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-10" />
      )}

      {/* Light / Dark Ambient Tint Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none z-15 transition-all duration-500 ${
          themeMode === 'light'
            ? 'bg-white/15 backdrop-blur-[1px]'
            : 'bg-black/40'
        }`}
      />

      {/* Gradual Disappear & Blend-in Overlay at Bottom */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64 sm:h-96 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#09090b]/60 to-[#09090b]" 
        aria-hidden="true" 
      />

      {/* Subtle Ambient Grain / Grid Pattern */}
      <div className="absolute inset-0 mc-grid-pattern opacity-10 pointer-events-none z-25" />
    </div>
  );
};

