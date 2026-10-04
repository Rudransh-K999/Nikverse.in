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

// Fallback Uploaded Videos (Strictly regular videos, NO shorts, NO livestreams)
export const FALLBACK_VIDEOS: YouTubeMediaItem[] = [
  // Nik Channel (@nikgamerop) - All uploaded regular videos
  {
    id: 'vid-nik-1',
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
    id: 'vid-nik-2',
    videoId: 'WlGmOoPCz7w',
    title: 'How I survived 100 days in LAVA only world in MINECRAFT?',
    description: 'Surviving 100 days where everything turns to molten lava.',
    thumbnail: 'https://i.ytimg.com/vi/WlGmOoPCz7w/maxresdefault.jpg',
    publishedAt: '2026-08-01T12:00:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '48.9K',
    likeCount: '3.7K',
    isLiveStream: false
  },
  {
    id: 'vid-nik-3',
    videoId: 'Oe2Bpi9M0S8',
    title: "We Survived 100 Days in Minecraft's DEADLIEST World",
    description: 'The hardest survival challenge yet with custom hostile mobs.',
    thumbnail: 'https://i.ytimg.com/vi/Oe2Bpi9M0S8/maxresdefault.jpg',
    publishedAt: '2026-07-20T10:00:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '65.3K',
    likeCount: '4.8K',
    isLiveStream: false
  },
  {
    id: 'vid-nik-4',
    videoId: 'Mx0QQTR4ViA',
    title: "100 Days in Minecraft's Deadliest Ice Age",
    description: 'Sub-zero temperatures and freezing blizzards in Hardcore.',
    thumbnail: 'https://i.ytimg.com/vi/Mx0QQTR4ViA/maxresdefault.jpg',
    publishedAt: '2026-07-05T14:30:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '82.1K',
    likeCount: '6.4K',
    isLiveStream: false
  },
  {
    id: 'vid-nik-5',
    videoId: 'huhN3HJ_6Y4',
    title: 'How I survived 100 days in RAFT only world in MINECRAFT ?',
    description: 'Stranded on an endless ocean raft with limited wood.',
    thumbnail: 'https://i.ytimg.com/vi/huhN3HJ_6Y4/maxresdefault.jpg',
    publishedAt: '2026-06-18T16:00:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '54.7K',
    likeCount: '4.1K',
    isLiveStream: false
  },
  {
    id: 'vid-nik-6',
    videoId: '2wF2s1T8WNo',
    title: 'Minecraft, But You Can Craft CUSTOM HEARTS',
    description: 'Crafting OP hearts that give crazy superpowers.',
    thumbnail: 'https://i.ytimg.com/vi/2wF2s1T8WNo/maxresdefault.jpg',
    publishedAt: '2026-05-28T18:15:00Z',
    channelId: 'UCrX9IwrpdMmhrx6ZJoUinVA',
    channelTitle: 'Nik',
    channelHandle: '@nikgamerop',
    channelLogo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '37.8K',
    likeCount: '3.2K',
    isLiveStream: false
  },

  // NikVerse Channel (@onlynikverse) - Latest regular videos
  {
    id: 'vid-nikverse-1',
    videoId: '8r_TvM1FWKw',
    title: 'I played the scariest minecraft mod',
    description: 'Testing the cave dweller horror mod at midnight.',
    thumbnail: 'https://i.ytimg.com/vi/8r_TvM1FWKw/maxresdefault.jpg',
    publishedAt: '2026-08-20T14:00:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '78.5K',
    likeCount: '6.2K',
    isLiveStream: false
  },
  {
    id: 'vid-nikverse-2',
    videoId: 'Of1Qe3jRFDY',
    title: 'FINALLY FOUND DEMON EGGS IN STEAL AN EGG ROBLOX 😱',
    description: 'Unlocking secret mythical eggs and defeating the boss.',
    thumbnail: 'https://i.ytimg.com/vi/Of1Qe3jRFDY/maxresdefault.jpg',
    publishedAt: '2026-07-15T13:30:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '46.2K',
    likeCount: '3.8K',
    isLiveStream: false
  },
  {
    id: 'vid-nikverse-3',
    videoId: 'mf84wDds7XA',
    title: 'STEALING THE RAREST EGGS IN ROBLOX (BOSS BATTLE!)',
    description: 'High stakes egg hunt with community viewers.',
    thumbnail: 'https://i.ytimg.com/vi/mf84wDds7XA/maxresdefault.jpg',
    publishedAt: '2026-06-25T11:00:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '53.1K',
    likeCount: '4.5K',
    isLiveStream: false
  },
  {
    id: 'vid-nikverse-4',
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

  // LiveNik / Nikislive Channel (@nikislivenow) - All regular uploaded videos
  {
    id: 'vid-livenik-1',
    videoId: '1ZIydufVQbQ',
    title: 'GTA VI Graphics Leaks? Next Gen Unreal Engine Showcase',
    description: 'Analyzing the newest leaked vice city map and physics engine.',
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
    id: 'vid-livenik-2',
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
    id: 'vid-livenik-3',
    videoId: '2S248C5ql3w',
    title: 'Surviving 5 Star Police in GTA Online with Only a Faggio Scooter',
    description: 'Extreme escape challenge across Los Santos highways.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640&auto=format&fit=crop',
    publishedAt: '2026-05-19T14:10:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '31.4K',
    likeCount: '2.5K',
    isLiveStream: false
  }
];

// Fallback Live Streams (Separated into their own dedicated section)
export const FALLBACK_STREAMS: YouTubeMediaItem[] = [
  {
    id: 'stream-nikverse-1',
    videoId: '68cywex1afQ',
    title: 'Last Stream of VoidMC ● 24x7 Live Server ● Java + Bedrock',
    description: 'Full finale stream on VoidMC server.',
    thumbnail: 'https://i.ytimg.com/vi/68cywex1afQ/maxresdefault.jpg',
    publishedAt: '2026-09-10T18:00:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '22.4K',
    likeCount: '1.9K',
    isLiveStream: true
  },
  {
    id: 'stream-livenik-1',
    videoId: '4FuuLBcFFG0',
    title: 'GTA 5 live | Gangster shots in LOS SANTOS',
    description: 'Los Santos gameplay and missions with subscribers.',
    thumbnail: 'https://i.ytimg.com/vi/4FuuLBcFFG0/hqdefault.jpg',
    publishedAt: '2026-06-03T06:03:03Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '18.4K',
    likeCount: '1.6K',
    isLiveStream: true
  },
  {
    id: 'stream-nikverse-2',
    videoId: '69W-EdQqdQY',
    title: 'VoidMC ● 24x7 Live Server ● Java + Bedrock',
    description: 'Grinding survival and interacting with chat.',
    thumbnail: 'https://i.ytimg.com/vi/69W-EdQqdQY/maxresdefault.jpg',
    publishedAt: '2026-08-28T16:20:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '17.8K',
    likeCount: '1.4K',
    isLiveStream: true
  },
  {
    id: 'stream-livenik-2',
    videoId: 'GonCjyDRHbk',
    title: 'GTA 5 Live Los Santos Adventures with Chat',
    description: 'Police chase challenge and car meets.',
    thumbnail: 'https://i.ytimg.com/vi/GonCjyDRHbk/hqdefault.jpg',
    publishedAt: '2026-05-14T20:00:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '15.9K',
    likeCount: '1.2K',
    isLiveStream: true
  },
  {
    id: 'stream-nikverse-3',
    videoId: 'yi7yMDhoTJg',
    title: 'Playing in VoidMC ● 24x7 Live Server ● Java + Bedrock',
    description: 'Building farms and testing PvP arena with players.',
    thumbnail: 'https://i.ytimg.com/vi/yi7yMDhoTJg/maxresdefault.jpg',
    publishedAt: '2026-08-22T15:30:00Z',
    channelId: 'UCmEB1pZf34OdlA_h9E47gxA',
    channelTitle: 'NikVerse',
    channelHandle: '@onlynikverse',
    channelLogo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    viewCount: '21.3K',
    likeCount: '1.8K',
    isLiveStream: true
  },
  {
    id: 'stream-livenik-3',
    videoId: 'TQ_MeHagcDU',
    title: 'GTA 5 Live Heist Preparation & High Speed Pursuits',
    description: 'Joining viewer lobbies in GTA Online.',
    thumbnail: 'https://i.ytimg.com/vi/TQ_MeHagcDU/hqdefault.jpg',
    publishedAt: '2026-04-20T19:30:00Z',
    channelId: 'UC5RmtAHTV71M7jaEgnBjtWg',
    channelTitle: 'LiveNik',
    channelHandle: '@nikislivenow',
    channelLogo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    viewCount: '14.1K',
    likeCount: '980',
    isLiveStream: true
  }
];

const STORAGE_KEY = 'nikverse_youtube_media_feed_v8';
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
        if (age < REFRESH_INTERVAL_MS && cached.videos && cached.videos.length >= 6 && cached.streams) {
          return cached;
        }
      }
    } catch {
      // Ignore cache parse error
    }
  }

  const collectedVideos: YouTubeMediaItem[] = [];
  const collectedStreams: YouTubeMediaItem[] = [];

  for (let i = 0; i < CHANNELS_CONFIG.length; i++) {
    const ch = CHANNELS_CONFIG[i];

    try {
      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${ch.uploadsPlaylistId}&maxResults=50&key=${YOUTUBE_API_KEY}`;
      const pRes = await fetch(playlistUrl);
      if (!pRes.ok) continue;
      
      const pData = await pRes.json();
      if (!pData.items || pData.items.length === 0) continue;

      const ids = pData.items
        .map((it: { snippet?: { resourceId?: { videoId?: string } } }) => it.snippet?.resourceId?.videoId)
        .filter(Boolean)
        .join(',');

      if (!ids) continue;

      const vidUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics,liveStreamingDetails&id=${ids}&key=${YOUTUBE_API_KEY}`;
      const vRes = await fetch(vidUrl);
      if (!vRes.ok) continue;

      const vData = await vRes.json();
      if (!vData.items || vData.items.length === 0) continue;

      for (const item of vData.items) {
        const title = item.snippet?.title || '';
        const desc = item.snippet?.description || '';
        const duration = item.contentDetails?.duration || '';

        // Identify stream
        const isStream = Boolean(item.liveStreamingDetails) ||
                         item.snippet?.liveBroadcastContent === 'live' ||
                         item.snippet?.liveBroadcastContent === 'upcoming' ||
                         (/live/i.test(title) && /server|stream|shots/i.test(title));

        // Identify shorts: shorts hashtag or short duration (<= 60 seconds)
        const isShort = /#shorts/i.test(title) ||
                        /#shorts/i.test(desc) ||
                        /^PT[1-5]?[0-9]S$/.test(duration) ||
                        duration === 'PT60S' ||
                        duration === 'PT1M';

        const vId = item.id;
        const snip = item.snippet;
        const stats = item.statistics;
        const thumbs = snip?.thumbnails;
        const thumbUrl = thumbs?.maxres?.url || thumbs?.high?.url || thumbs?.medium?.url || thumbs?.default?.url || '';

        const mediaItem: YouTubeMediaItem = {
          id: `media-${vId}`,
          videoId: vId,
          title: title,
          description: desc,
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

        if (isStream) {
          collectedStreams.push(mediaItem);
        } else if (!isShort) {
          // Strictly regular video (No shorts, no streams)
          collectedVideos.push(mediaItem);
        }
      }
    } catch (err) {
      console.warn(`Error fetching media for ${ch.title}:`, err);
    }
  }

  // Combine fetched with fallback to ensure full coverage
  const finalVideos = collectedVideos.length >= 6 ? collectedVideos : [
    ...collectedVideos,
    ...FALLBACK_VIDEOS.filter(fb => !collectedVideos.some(cv => cv.videoId === fb.videoId))
  ];

  const finalStreams = collectedStreams.length >= 3 ? collectedStreams : [
    ...collectedStreams,
    ...FALLBACK_STREAMS.filter(fs => !collectedStreams.some(cs => cs.videoId === fs.videoId))
  ];

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
