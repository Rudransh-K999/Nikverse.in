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
    id: 'fallback-vid-nik-1',
    videoId: 'Qd8Ms1ngKLI',
    title: "I Played Minecraft in an ACID Only World for 100 Days: Here's What Happened",
    description: 'I survived in an acid only world in hardcore minecraft.',
    thumbnail: 'https://i.ytimg.com/vi/Qd8Ms1ngKLI/maxresdefault.jpg',
    publishedAt: '2026-08-16T04:00:11Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '28.4K',
    likeCount: '2.1K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nikverse-1',
    videoId: 'aTp7dh9Uxrs',
    title: 'Moja mila kya? | ft @Voice.gaming',
    description: 'I solved the biggest moja mystery in this video.',
    thumbnail: 'https://i.ytimg.com/vi/aTp7dh9Uxrs/maxresdefault.jpg',
    publishedAt: '2026-05-05T04:47:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '41.8K',
    likeCount: '3.4K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-livenik-1',
    videoId: '1ZIydufVQbQ',
    title: 'GTA VI Graphics Leaks? Next Gen Unreal Engine Showcase',
    description: 'This video is created for educational purpose only.',
    thumbnail: 'https://i.ytimg.com/vi/1ZIydufVQbQ/hqdefault.jpg',
    publishedAt: '2026-07-02T07:30:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '19.2K',
    likeCount: '1.2K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nik-2',
    videoId: '2S248C5ql3w',
    title: 'Surviving 100 Days on a One-Block Floating Sky Fortress',
    description: 'The hardest survival challenge yet with custom mobs.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-06-20T10:00:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '65.3K',
    likeCount: '4.8K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nikverse-2',
    videoId: 'dQw4w9WgXcQ',
    title: 'The Secret Room Under VoidMC Spawn (Nobody Found This!)',
    description: 'Exploring the hidden lore of our custom SMP server.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-07-14T12:00:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '38.6K',
    likeCount: '2.9K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-livenik-2',
    videoId: 'k85mRPqvMbE',
    title: 'Best GTA Online Heists with Subs! Hilarious Moments & Fails',
    description: 'Playing Cayo Perico and Los Santos street races.',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-06-11T16:20:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '22.1K',
    likeCount: '1.7K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nik-3',
    videoId: '3JZ_D3ELwOQ',
    title: 'Building a Megabase in VoidMC Season 2 Survival (Timelapse)',
    description: 'Huge build timelapse and automated farms setup.',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-05-18T14:15:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '52.7K',
    likeCount: '3.9K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nikverse-3',
    videoId: '9bZkp7q19f0',
    title: 'Trapped 100 Players in an Escaping Lava Box Tournament',
    description: 'Epic VoidMC community tournament with prize pool.',
    thumbnail: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-08-01T15:00:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '74.2K',
    likeCount: '5.6K',
    isLiveStream: false
  },
  {
    id: 'fallback-vid-nik-4',
    videoId: 'x8f7s9d123k',
    title: 'I Beat Minecraft Nether Only in Hardcore (No Overworld)',
    description: 'Surviving strictly in the Nether with zero grass or water.',
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-07-09T18:40:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '89.4K',
    likeCount: '7.1K',
    isLiveStream: false
  }
];

// Fallback Live Streams
export const FALLBACK_STREAMS: YouTubeMediaItem[] = [
  {
    id: 'fallback-stream-nikverse-1',
    videoId: 'xDhgotoGFcM',
    title: 'Join VoidMC 24x7 live server | NikVerse #live #shorts #minecraft',
    description: 'Survival IP : play.nikverse.space | bedrock port: 19134',
    thumbnail: 'https://i.ytimg.com/vi/xDhgotoGFcM/maxresdefault.jpg',
    publishedAt: '2026-08-16T04:53:14Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '14.2K',
    likeCount: '980',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-livenik-1',
    videoId: '4FuuLBcFFG0',
    title: 'GTA 5 live | Gangster shots in LOS SANTOS #gaming #gta #shorts',
    description: 'Make sure to like and subscribe! Enjoy the gameplay.',
    thumbnail: 'https://i.ytimg.com/vi/4FuuLBcFFG0/hqdefault.jpg',
    publishedAt: '2026-06-03T06:03:03Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '8.4K',
    likeCount: '620',
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
    viewCount: '12.8K',
    likeCount: '840',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-livenik-2',
    videoId: 's9kZ_wBFr98',
    title: 'Late Night Minecraft Hardcore Grind | Chat Decides My Moves',
    description: 'Live survival with viewer challenges and PvP tournaments.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-07-28T22:00:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '16.5K',
    likeCount: '1.2K',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-nik-1',
    videoId: 'mYVvP0GkYwE',
    title: 'VoidMC Bedwars Championship LIVE! Team Battles & Ranks Giveaway',
    description: 'Streaming custom Bedwars arenas and giving out rank rewards.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-07-19T18:30:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '24.1K',
    likeCount: '1.8K',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-livenik-3',
    videoId: 'pXz9Qw7KmV0',
    title: 'GTA 5 Chaos Mod Stream | Everything Randomly Explodes',
    description: 'Playing Los Santos with chat voting for crazy effects.',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-06-25T19:00:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '18.9K',
    likeCount: '1.4K',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-nik-2',
    videoId: 'zP9xLmK8v3a',
    title: 'Custom Boss Battle Event Live! 100 Players vs The Ender Dragon King',
    description: 'Epic server event with VoidMC community.',
    thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-08-04T17:00:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '29.3K',
    likeCount: '2.3K',
    isLiveStream: true
  },
  {
    id: 'fallback-stream-nikverse-3',
    videoId: 'h8q1w3e4r5t',
    title: 'VoidMC Season 3 SMP Launch Day Live! First Base Building',
    description: 'Exploring the new world gen and building our team district.',
    thumbnail: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-08-10T14:30:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '33.7K',
    likeCount: '2.7K',
    isLiveStream: true
  }
];

const STORAGE_KEY = 'nikverse_youtube_media_feed_v7';
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
