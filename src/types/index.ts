export interface Episode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  downloadUrl: string;
  plays: number;
  hosts: string[];
  tags: string[];
}

export interface Host {
  id: string;
  name: string;
  bio: string;
  imageUrl: string;
  social: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
}

export interface PlayerState {
  currentEpisode: Episode | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}