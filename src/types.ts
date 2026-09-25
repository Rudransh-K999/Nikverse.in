export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string;
  description: string;
  category: 'primary' | 'social' | 'community' | 'business';
  badge?: string;
  color: string;
  hoverGlow: string;
}

export interface BackgroundVideo {
  id: string;
  title: string;
  videoUrl: string;
  fallbackPoster: string;
  category: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
  duration: string;
}

export interface FeaturedVideo {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  views: string;
  duration: string;
  tags: string[];
}

export interface GearItem {
  category: string;
  name: string;
  specs: string;
  iconName: string;
}

export interface ModItem {
  name: string;
  category: string;
  version: string;
  downloadUrl: string;
  description: string;
}

export interface GuestbookEntry {
  id: string;
  username: string;
  message: string;
  timestamp: string;
  avatarSeed: string;
  likes: number;
}

export type ThemeAccent = 'emerald' | 'purple' | 'cyan' | 'crimson' | 'gold';
export type ThemeMode = 'light' | 'dark';
