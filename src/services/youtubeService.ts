// YouTube Data Service for Nikverse Creator Channels
// API Key provided: AIzaSyBx3oWmkZUba-BXGPG8aUtAYv1ZDpz3YiU
// Channels Order strictly:
// 1. Nik channel (@nikgamerop)
// 2. NikVerse channel (@onlynikverse)
// 3. LiveNik / Nikislive channel (@nikislivenow)

export interface YouTubeMediaItem {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  channelId: string;
  channelTitle: string;
  channelHandle: string;
  channelLogo: string;
  viewCount: string;
  likeCount: string;
  isLiveStream?: boolean;
}

export const YOUTUBE_API_KEY = 'AIzaSyBx3oWmkZUba-BXGPG8aUtAYv1ZDpz3YiU';

export const CHANNELS_CONFIG = [
  {
    id: 'nik-mc',
    title: 'Nik',
    handle: '@nikgamerop',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    uploadsPlaylistId: 'UUrX9IwrpdMmhrx6ZJoUinVA',
    logo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo'
  },
  {
    id: 'nikverse-main',
    title: 'NikVerse',
    handle: '@onlynikverse',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    uploadsPlaylistId: 'UUmEB1pZf34OdlA_h9E47gxA',
    logo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj'
  },
  {
    id: 'livenik',
    title: 'LiveNik',
    handle: '@nikislivenow',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    uploadsPlaylistId: 'UU5RmtAHTV71M7jaEgnBjtWg',
    logo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo'
  }
];

export function formatMetric(numStr?: string | number): string {
  if (!numStr) return '0';
  const num = typeof numStr === 'string' ? parseInt(numStr, 10) : numStr;
  if (isNaN(num)) return '0';
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toLocaleString();
}

// Fallback Uploaded Videos
export const FALLBACK_VIDEOS: YouTubeMediaItem[] = [
  {
    id: 'fallback-vid-nik',
    videoId: 'Qd8Ms1ngKLI',
    title: "I Played Minecraft in an ACID Only World for 100 Days: Here's What Happened",
    description: 'I survived in an acid only world in hardcore minecraft.',
    thumbnail: 'https://i.ytimg.com/vi/Qd8Ms1ngKLI/maxresdefault.jpg',
    publishedAt: '2026-08-16T04:00:11Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '1.2K',
    likeCount: '85',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nikverse',
    videoId: 'aTp7dh9Uxrs',
    title: 'Moja mila kya? | ft @Voice.gaming',
    description: 'I solved the biggest moja mystery in this video.',
    thumbnail: 'https://i.ytimg.com/vi/aTp7dh9Uxrs/maxresdefault.jpg',
    publishedAt: '2026-05-05T04:47:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '1.1K',
    likeCount: '45',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-livenik',
    videoId: '1ZIydufVQbQ',
    title: 'GTA VI Graphics Leaks?',
    description: 'This video is created for educational purpose only.',
    thumbnail: 'https://i.ytimg.com/vi/1ZIydufVQbQ/hqdefault.jpg',
    publishedAt: '2026-07-02T07:30:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '45',
    likeCount: '6',
    isLiveStream: false
  }
];

// Fallback Live Streams
export const FALLBACK_STREAMS: YouTubeMediaItem[] = [
  {
    id: 'fallback-stream-nikverse',
    videoId: 'xDhgotoGFcM',
    title: 'Join VoidMC 24x7 live server | NikVerse #live #shorts #minecraft',
    description: 'Survival IP : play.nikverse.space | bedrock port: 19134',
    thumbnail: 'https://i.ytimg.com/vi/xDhgotoGFcM/maxresdefault.jpg',
    publishedAt: '2026-08-16T04:53:14Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '785',
    likeCount: '36',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-livenik',
    videoId: '4FuuLBcFFG0',
    title: 'GTA 5 live | Gangster shots in LOS SANTOS #gaming #gta #shorts',
    description: 'Make sure to like and subscribe! Enjoy the gameplay.',
    thumbnail: 'https://i.ytimg.com/vi/4FuuLBcFFG0/hqdefault.jpg',
    publishedAt: '2026-06-03T06:03:03Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '87',
    likeCount: '14',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-nikverse-2',
    videoId: 'K7M9u7PkhMA',
    title: 'Join VoidMC 24x7 live server | NikVerse #live #shorts #minecraft #shortsfeed',
    description: 'Survival IP: play.nikverse.space | Bedrock port: 19134',
    thumbnail: 'https://i.ytimg.com/vi/K7M9u7PkhMA/maxresdefault.jpg',
    publishedAt: '2026-08-15T08:03:36Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '785',
    likeCount: '36',
    isLiveStream: true
  }
];

const STORAGE_KEY = 'nikverse_youtube_media_feed_v5';
export const REFRESH_INTERVAL_MS = 35 * 60 * 1000; // 35 minutes

interface CachedMediaData {
  videos: YouTubeMediaItem[];
  streams: YouTubeMediaItem[];
  lastFetched: number;
}

export async function fetchChannelMedia(forceRefresh = false): Promise<{
  videos: YouTubeMediaItem[];
  streams: YouTubeMediaItem[];
  lastFetched: number;
}> {
  // Check cache
  if (!forceRefresh) {
    try {
      const cachedStr = localStorage.getItem(STORAGE_KEY);
      if (cachedStr) {
        const cached: CachedMediaData = JSON.parse(cachedStr);
        const age = Date.now() - cached.lastFetched;
        if (age < REFRESH_INTERVAL_MS && cached.videos && cached.streams) {
          return cached;
        }
      }
    } catch {
      // Ignore cache parse error
    }
  }

  const fetchedVideos: YouTubeMediaItem[] = [];
  const fetchedStreams: YouTubeMediaItem[] = [];

  for (let i = 0; i < CHANNELS_CONFIG.length; i++) {
    const ch = CHANNELS_CONFIG[i];
    const fbVid = FALLBACK_VIDEOS[i] || FALLBACK_VIDEOS[0];

    try {
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${ch.uploadsPlaylistId}&maxResults=30&key=${YOUTUBE_API_KEY}`;
      const pRes = await fetch(playlistUrl);
      if (!pRes.ok) {
        fetchedVideos.push(fbVid);
        continue;
      }
      const pData = await pRes.json();
      if (!pData.items || pData.items.length === 0) {
        fetchedVideos.push(fbVid);
        continue;
      }

      const ids = pData.items
        .map((it: { snippet?: { resourceId?: { videoId?: string } } }) => it.snippet?.resourceId?.videoId)
        .filter(Boolean)
        .join(',');

      if (!ids) {
        fetchedVideos.push(fbVid);
        continue;
      }

      const vidUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,liveStreamingDetails&id=${ids}&key=${YOUTUBE_API_KEY}`;
      const vRes = await fetch(vidUrl);
      if (!vRes.ok) {
        fetchedVideos.push(fbVid);
        continue;
      }
      const vData = await vRes.json();
      if (!vData.items || vData.items.length === 0) {
        fetchedVideos.push(fbVid);
        continue;
      }

      let foundVideo: YouTubeMediaItem | null = null;
      let foundStream: YouTubeMediaItem | null = null;

      for (const item of vData.items) {
        const isStream = Boolean(item.liveStreamingDetails) ||
                         item.snippet?.liveBroadcastContent === 'live' ||
                         item.snippet?.liveBroadcastContent === 'upcoming';
        const vId = item.id;
        const snip = item.snippet;
        const stats = item.statistics;
        const thumbs = snip?.thumbnails;
        const thumbUrl = thumbs?.maxres?.url || thumbs?.high?.url || thumbs?.medium?.url || thumbs?.default?.url || '';

        const mediaItem: YouTubeMediaItem = {
          id: `media-${vId}`,
          videoId: vId,
          title: snip?.title || '',
          description: snip?.description || '',
          thumbnail: thumbUrl,
          publishedAt: snip?.publishedAt || '',
          channelId: ch.channelId,
          channelTitle: ch.title,
          channelHandle: ch.handle,
          channelLogo: ch.logo,
          viewCount: formatMetric(stats?.viewCount),
          likeCount: formatMetric(stats?.likeCount),
          isLiveStream: isStream
        };

        if (isStream && !foundStream) {
          foundStream = mediaItem;
        } else if (!isStream && !foundVideo) {
          foundVideo = mediaItem;
        }

        if (foundVideo && foundStream) break;
      }

      fetchedVideos.push(foundVideo || fbVid);
      if (foundStream) {
        fetchedStreams.push(foundStream);
      }
    } catch (err) {
      console.warn(`Error fetching media for ${ch.title}:`, err);
      fetchedVideos.push(fbVid);
    }
  }

  // Ensure fallback streams if fetched list is sparse
  const finalStreams = fetchedStreams.length > 0 ? fetchedStreams : FALLBACK_STREAMS;
  const finalVideos = fetchedVideos.length === 3 ? fetchedVideos : FALLBACK_VIDEOS;

  const lastFetched = Date.now();
  const dataToCache: CachedMediaData = {
    videos: finalVideos,
    streams: finalStreams,
    lastFetched
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToCache));
  } catch {
    // Ignore storage quota
  }

  return dataToCache;
}
