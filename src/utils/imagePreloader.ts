import { PROFILE_INFO, CHANNELS_AND_PLATFORMS, BACKGROUND_VIDEOS } from '../data/portfolioData';
import { FALLBACK_VIDEOS, FALLBACK_STREAMS, CHANNELS_CONFIG, fetchChannelMedia } from '../services/youtubeService';

// Set to track loaded URLs in-memory so we never duplicate decode operations
const loadedImages = new Set<string>();

/**
 * Preloads a single image and decodes it via the browser's ImageDecoder/decode API
 * to prevent frame drops or stutter when the image is first rendered.
 */
export function preloadImage(url: string): Promise<void> {
  if (!url || loadedImages.has(url)) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.crossOrigin = 'anonymous';

    const onFinish = () => {
      loadedImages.add(url);
      resolve();
    };

    img.onload = () => {
      if (typeof img.decode === 'function') {
        img.decode().then(onFinish).catch(onFinish);
      } else {
        onFinish();
      }
    };

    img.onerror = onFinish; // resolve gracefully on error so it never blocks
    img.src = url;
  });
}

/**
 * Collects all critical asset URLs throughout the application and preloads them in parallel.
 */
export async function preloadAllAppAssets(): Promise<void> {
  const assetUrls: string[] = [
    // Intro & Brand
    'https://i.postimg.cc/d3F2Ybxj/Chat-GPT-Image-Sep-24-2026-09-27-24-PM.png',
    'https://i.postimg.cc/wvXWLQKJ/franklin-in-gta-5-3840x2160-14721.jpg',
    PROFILE_INFO.avatar,
    PROFILE_INFO.fallbackAvatar,
    PROFILE_INFO.whoAmIImage || '',
    PROFILE_INFO.contactImage || '',
    'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png',
    'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png',

    // Community section assets
    'https://i.ibb.co/MD7L0xys/IMG-20260817-091307-removebg-preview.png',
    'https://i.ibb.co/7dD42hcv/IMG-20260817-091314-removebg-preview.png',

    // Channel Logos & Backgrounds
    ...CHANNELS_AND_PLATFORMS.map((c) => c.logo),
    ...CHANNELS_AND_PLATFORMS.map((c) => c.bgImage || '').filter(Boolean),
    ...CHANNELS_AND_PLATFORMS.map((c) => c.fallbackBgImage || '').filter(Boolean),

    // Channel Config Logos
    ...CHANNELS_CONFIG.map((c) => c.logo),

    // YouTube Thumbnails
    ...FALLBACK_VIDEOS.map((v) => v.thumbnail),
    ...FALLBACK_STREAMS.map((s) => s.thumbnail),

    // Background Posters
    ...BACKGROUND_VIDEOS.map((v) => v.fallbackPoster || '').filter(Boolean)
  ].filter((url): url is string => Boolean(url && url.trim().length > 0));

  // Deduplicate URLs
  const uniqueUrls = Array.from(new Set(assetUrls));

  // Run in parallel chunks of 6 for optimal HTTP/2 multiplexing
  const chunkSize = 6;
  const chunks: string[][] = [];
  for (let i = 0; i < uniqueUrls.length; i += chunkSize) {
    chunks.push(uniqueUrls.slice(i, i + chunkSize));
  }

  // Preload in chunks
  for (const chunk of chunks) {
    await Promise.all(chunk.map((url) => preloadImage(url)));
  }

  // Also warm up YouTube channel media feed in background
  try {
    fetchChannelMedia(false).catch(() => {});
  } catch {
    // Ignore network error
  }
}
