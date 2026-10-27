import { SocialLink, BackgroundVideo, AudioTrack, FeaturedVideo, GearItem, ModItem, GuestbookEntry } from '../types';

const avatarImg = 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop';
const thumb1 = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop';
const thumb2 = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop';

export const PROFILE_INFO = {
  name: 'Nikverse',
  realName: 'Nik',
  verified: true,
  creatorBadge: 'CONTENT CREATOR · ENTERTAINER · STORYTELLER',
  bio: 'Welcome to my world. Sit back, watch, enjoy.',
  extendedBio: 'Hey! I am Nikverse. I create Minecraft survival series, building tutorials, and chill SMP livestreams.',
  avatar: 'https://i.ibb.co/bjqKBkcL/avatar-Body5-1.png',
  fallbackAvatar: 'https://i.ibb.co/Y4YLkxH8/avatar-Body5-1.png',
  whoAmIImage: 'https://i.ibb.co/pvsF6x1h/custom-ava-5-removebg-preview.png',
  status: 'Live on Twitch streaming Hardcore',
  statusType: 'live' as 'live' | 'busy' | 'offline',
  views: 1284920,
  subscribers: '145K+',
  discordMembers: '18.4K',
  minecraftIP: 'mc.nikverse.net',
  location: 'Earth / GMT+0',
  email: 'team.nikverse@gmail.com',
  sponsorEmail: 'team.nikverse@gmail.com',
  contactImage: 'https://i.postimg.cc/fLNCzS3h/5c6d7b09e65d61e28097ed3f4ee6e0384cea6654-2-690x388.png',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'youtube',
    name: 'YouTube Channel',
    url: 'https://youtube.com/@nikverse',
    iconName: 'Youtube',
    description: 'Weekly Minecraft Hardcore & Cinematic SMP Series',
    category: 'primary',
    badge: '145K Subs',
    color: 'from-red-600 to-rose-500',
    hoverGlow: 'rgba(239, 68, 68, 0.4)'
  },
  {
    id: 'twitch',
    name: 'Twitch Livestreams',
    url: 'https://twitch.tv/nikverse',
    iconName: 'Tv',
    description: 'Live Mon, Wed & Fri • Hardcore Survival & Chat',
    category: 'primary',
    badge: '🔴 LIVE NOW',
    color: 'from-purple-600 to-indigo-500',
    hoverGlow: 'rgba(168, 85, 247, 0.4)'
  },
  {
    id: 'discord',
    name: 'Discord Community',
    url: 'https://discord.gg/UqxMNKaAnc',
    iconName: 'MessageSquare',
    description: 'Join 18,000+ builders, share screenshots & chat',
    category: 'community',
    badge: '18K Members',
    color: 'from-indigo-600 to-blue-500',
    hoverGlow: 'rgba(99, 102, 241, 0.4)'
  },
  {
    id: 'mc-server',
    name: 'Official Minecraft Server',
    url: 'mc.nikverse.net',
    iconName: 'Gamepad2',
    description: 'Survival SMP with Custom Quests • Version 1.21.1',
    category: 'primary',
    badge: 'Click to Copy IP',
    color: 'from-emerald-600 to-teal-500',
    hoverGlow: 'rgba(16, 185, 129, 0.4)'
  },
  {
    id: 'tiktok',
    name: 'TikTok Clips',
    url: 'https://tiktok.com/@nikverse',
    iconName: 'Video',
    description: 'Daily 60-second Minecraft tips & funny moments',
    category: 'social',
    badge: '85K Followers',
    color: 'from-cyan-500 to-pink-500',
    hoverGlow: 'rgba(6, 182, 212, 0.4)'
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    url: 'https://x.com/nikverse',
    iconName: 'Twitter',
    description: 'Behind the scenes, build renders & stream schedule',
    category: 'social',
    color: 'from-sky-500 to-blue-600',
    hoverGlow: 'rgba(14, 165, 233, 0.4)'
  },
  {
    id: 'instagram',
    name: 'Instagram Renders',
    url: 'https://instagram.com/nikverse.mc',
    iconName: 'Instagram',
    description: 'High-res Blender renders & build screenshots',
    category: 'social',
    color: 'from-pink-500 to-purple-600',
    hoverGlow: 'rgba(236, 72, 153, 0.4)'
  },
  {
    id: 'namemc',
    name: 'NameMC Profile',
    url: 'https://namemc.com/profile/nikverse',
    iconName: 'UserCheck',
    description: 'Check skin history, capes & friends list',
    category: 'community',
    color: 'from-amber-500 to-orange-600',
    hoverGlow: 'rgba(245, 158, 11, 0.4)'
  }
];

export const MINECRAFT_FIREFLIES_FOREST_VIDEO: BackgroundVideo = {
  id: 'minecraft-fireflies-forest',
  title: 'Minecraft Fireflies Forest (Live Wallpaper)',
  videoUrl: 'https://moewalls.com/wp-content/uploads/preview/2026/minecraft-fireflies-forest-preview.webm',
  fallbackPoster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
  category: 'Minecraft Fireflies Forest'
};

export const LIGHT_THEME_VIDEO: BackgroundVideo = MINECRAFT_FIREFLIES_FOREST_VIDEO;

export const DARK_THEME_VIDEO: BackgroundVideo = {
  id: 'minecraft-fireflies-forest-dark',
  title: 'Minecraft Fireflies Forest (Live Wallpaper)',
  videoUrl: 'https://moewalls.com/wp-content/uploads/preview/2026/minecraft-fireflies-forest-preview.webm',
  fallbackPoster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
  category: 'Minecraft Fireflies Forest'
};

export const BACKGROUND_VIDEOS: BackgroundVideo[] = [
  MINECRAFT_FIREFLIES_FOREST_VIDEO,
  DARK_THEME_VIDEO,
  {
    id: 'cherry-blossom-lake-house',
    title: 'Cherry Blossom Lake House (Minecraft Live Wallpaper)',
    videoUrl: 'https://moewalls.com/wp-content/uploads/preview/2026/cherry-blossom-lake-house-minecraft-preview.webm',
    fallbackPoster: 'https://moewalls.com/wp-content/uploads/2026/07/cherry-blossom-lake-house-minecraft-thumb.jpg',
    category: 'Minecraft Cherry Blossom'
  },
  {
    id: 'minecraft-enchanted-forest',
    title: 'Minecraft Enchanted Forest & Sun Rays',
    videoUrl: 'https://cloud.wallsflow.com/files/2026-03/93b6e09717_minecraft-enchanted-forest-sun-rays-wallsflow-com.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1511497584788-8767611136f6?q=80&w=1920&auto=format&fit=crop',
    category: 'Minecraft Enchanted Forest'
  },
  {
    id: 'minecraft-shaders',
    title: 'Shaders Forest Walk (Minecraft Ambient)',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop',
    category: 'Minecraft Chill'
  }
];

export const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    id: 'vid-1',
    title: 'I Survived 1,000 Days in Minecraft Hardcore... Here is My World',
    thumbnail: thumb1,
    url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    views: '482K views',
    duration: '42:15',
    tags: ['Hardcore', '1000 Days', 'Mega Base']
  },
  {
    id: 'vid-2',
    title: 'Building a Futuristic Cyberpunk City in Minecraft 1.21',
    thumbnail: thumb2,
    url: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    views: '295K views',
    duration: '28:40',
    tags: ['SMP', 'Cyberpunk', 'Build Timelapse']
  }
];

export const GEAR_SPECS: GearItem[] = [
  { category: 'CPU', name: 'AMD Ryzen 7 7800X3D', specs: '8 Cores, 16 Threads @ 5.0GHz', iconName: 'Cpu' },
  { category: 'GPU', name: 'NVIDIA GeForce RTX 4080 Super', specs: '16GB GDDR6X VRAM', iconName: 'Monitor' },
  { category: 'RAM', name: '64GB DDR5 6000MHz Corsair Vengeance', specs: 'Dual Channel High Speed', iconName: 'Zap' },
  { category: 'Microphone', name: 'Shure SM7B + Focusrite Scarlett Solo', specs: 'Broadcast Quality Audio', iconName: 'Mic' },
  { category: 'Keyboard', name: 'Custom GMMK Pro Mechanical', specs: 'Lubed Holy Panda Switches', iconName: 'Keyboard' },
  { category: 'Mouse', name: 'Logitech G Pro X Superlight 2', specs: 'Wireless Light White', iconName: 'Mouse' }
];

export const MODS_AND_PACKS: ModItem[] = [
  {
    name: 'Complementary Rebound Shaders',
    category: 'Shaders',
    version: 'v5.2.2',
    downloadUrl: 'https://modrinth.com/shader/complementary-rebound',
    description: 'My main shaderpack with glowing ores, volumetric clouds & water reflections.'
  },
  {
    name: 'Faithful 64x Resource Pack',
    category: 'Texture Pack',
    version: '1.21.x',
    downloadUrl: 'https://faithful.pack',
    description: 'Clean HD vanilla textures used in all my survival videos.'
  },
  {
    name: 'Iris Shaders + Sodium Mod',
    category: 'Performance',
    version: '1.21.1',
    downloadUrl: 'https://irisshaders.dev',
    description: 'Extremely fast shader engine yielding 200+ FPS in heavy build zones.'
  },
  {
    name: 'Replay Mod (Cinematics)',
    category: 'Creator Tool',
    version: '1.21',
    downloadUrl: 'https://replaymod.com',
    description: 'Used to capture all camera timelapses and cinematic panning shots.'
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'msg-1',
    username: 'BlockMaster_99',
    message: 'Your 1,000 Days world is literally insane! Loved the cyberpunk megabase episode 🔥',
    timestamp: '2 hours ago',
    avatarSeed: 'steve1',
    likes: 14
  },
  {
    id: 'msg-2',
    username: 'EnderGirlX',
    message: 'Been watching since episode 1! Hope to see you live on Twitch tonight 🎉',
    timestamp: '5 hours ago',
    avatarSeed: 'alex2',
    likes: 9
  },
  {
    id: 'msg-3',
    username: 'RedstoneWizard',
    message: 'Which shader pack do you use for the purple nether base? It looks clean AF!',
    timestamp: '1 day ago',
    avatarSeed: 'zombie3',
    likes: 5
  }
];

export interface CreatorChannel {
  id: string;
  title: string;
  handle: string;
  category: string;
  badge: string;
  emoji: string;
  platform: 'YouTube' | 'Instagram' | 'Kick';
  gradient: string;
  borderHover: string;
  glowHover: string;
  description: string;
  url: string;
  logo: string;
  bgImage?: string;
  fallbackBgImage?: string;
  subscribersOrFollowers?: string;
}

export const CHANNELS_AND_PLATFORMS: CreatorChannel[] = [
  {
    id: 'livenik',
    title: 'LiveNik',
    handle: '',
    category: 'YouTube Channel',
    badge: 'GTA & Live',
    emoji: '🚗',
    platform: 'YouTube',
    gradient: 'from-red-600 via-orange-600 to-amber-500',
    borderHover: 'hover:border-orange-500/70',
    glowHover: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.35)]',
    description: 'simple GTA Streams and Videos',
    url: 'https://www.youtube.com/@NikisLiveNow',
    logo: 'https://yt3.googleusercontent.com/a3LeRccig4dQoCsME-OKtZEF3sgIz7VSBdCEGgFomsTdJi1miuPJbcmsxixJ4aVs_648i85pzA=s176-c-k-c0x00ffffff-no-rj-mo',
    bgImage: 'https://store-images.s-microsoft.com/image/apps.50223.14086826113896348.0ac2ef86-2cca-45c3-9d11-1dc9ac71c024.34520097-f601-4a06-b16d-e40280f0fc15',
    subscribersOrFollowers: 'GTA Content'
  },
  {
    id: 'nikverse-main',
    title: 'NikVerse',
    handle: '',
    category: 'YouTube Channel',
    badge: '10K+ Subscribers',
    emoji: '▶️',
    platform: 'YouTube',
    gradient: 'from-red-600 via-rose-600 to-amber-600',
    borderHover: 'hover:border-red-500/70',
    glowHover: 'hover:shadow-[0_20px_40px_rgba(239,68,68,0.35)]',
    description: 'Streams Videos fun',
    url: 'https://www.youtube.com/@OnlyNikVerse',
    logo: 'https://yt3.googleusercontent.com/zIpY9IYOxichfcpnbQY_hZ_3UIe35KL4ph3OGOB_T1zAJLyJVF5LC97QjEZ5cX0RV8gv73VX=s160-c-k-c0x00ffffff-no-rj',
    bgImage: 'https://punishedbacklog.com/wp-content/uploads/2025/04/Best-Video-Games-of-All-Time-Top-50-Video-Games-List-The-Punished-Backlog-.png',
    subscribersOrFollowers: '10,000+ Subs'
  },
  {
    id: 'nik-mc',
    title: 'Nik',
    handle: '',
    category: 'YouTube Channel',
    badge: '100 Days Hardcore',
    emoji: '⛏️',
    platform: 'YouTube',
    gradient: 'from-amber-500 via-emerald-600 to-teal-600',
    borderHover: 'hover:border-emerald-500/70',
    glowHover: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.35)]',
    description: 'Fun Minecraft Content!!',
    url: 'https://www.youtube.com/@NikGamerOP',
    logo: 'https://yt3.googleusercontent.com/wfm3lt-ORBvbq_2fPczlcNAet-ANNfE0dAR-M2CTyc0IeT2Gqv47WLgXgueYviAvFgbk1SIBQA=s176-c-k-c0x00ffffff-no-rj-mo',
    bgImage: 'https://images.nintendolife.com/934e0ab879771/large.jpg',
    fallbackBgImage: 'https://moewalls.com/wp-content/uploads/2026/07/cherry-blossom-lake-house-minecraft-thumb.jpg',
    subscribersOrFollowers: 'Minecraft Hub'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    handle: '',
    category: 'Social Platform',
    badge: 'Reels & Stories',
    emoji: '📸',
    platform: 'Instagram',
    gradient: 'from-fuchsia-600 via-pink-600 to-amber-500',
    borderHover: 'hover:border-pink-500/70',
    glowHover: 'hover:shadow-[0_20px_40px_rgba(236,72,153,0.35)]',
    description: 'Funny reels that make your day!',
    url: 'https://www.instagram.com/onlynikverse',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblNBRFyCGTPscHq-i6MH7ZmNdHHKatsnLZoUD_YPu1w&s=10',
    bgImage: 'https://img.magnific.com/free-photo/pile-3d-instagram-logos_1379-876.jpg?semt=ais_hybrid&w=740&q=80',
    fallbackBgImage: 'https://img.magnific.com/free-photo/pile-3d-instagram-logos_1379-876.jpg',
    subscribersOrFollowers: 'Daily Updates'
  },
  {
    id: 'kick',
    title: 'Kick Stream',
    handle: '',
    category: 'Livestreaming Platform',
    badge: 'Unfiltered Live',
    emoji: '🟢',
    platform: 'Kick',
    gradient: 'from-emerald-500 via-green-500 to-lime-400',
    borderHover: 'hover:border-emerald-400/70',
    glowHover: 'hover:shadow-[0_20px_40px_rgba(52,211,153,0.4)]',
    description: 'Fun streams, Giveaways and much more',
    url: 'https://kick.com/onlynikverse',
    logo: 'https://logos-world.net/wp-content/uploads/2024/01/Kick-Logo.png',
    bgImage: 'https://a-ap.storyblok.com/f/3000288/3840x2160/18efe94770/kick-banner.jpg',
    fallbackBgImage: 'https://a-ap.storyblok.com/f/3000288/3840x2160/18efe94770/kick-banner.jpg',
    subscribersOrFollowers: 'Live Stream'
  }
];

