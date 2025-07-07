import { useState, useRef, useEffect } from 'react';
import { Episode, PlayerState } from '../types';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentEpisode: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
  });

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setPlayerState(prev => ({
        ...prev,
        currentTime: audio.currentTime,
      }));
    };

    const handleLoadedMetadata = () => {
      setPlayerState(prev => ({
        ...prev,
        duration: audio.duration,
      }));
    };

    const handleEnded = () => {
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false,
      }));
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const playEpisode = (episode: Episode) => {
    if (!audioRef.current) return;

    if (playerState.currentEpisode?.id === episode.id) {
      if (playerState.isPlaying) {
        audioRef.current.pause();
        setPlayerState(prev => ({ ...prev, isPlaying: false }));
      } else {
        audioRef.current.play();
        setPlayerState(prev => ({ ...prev, isPlaying: true }));
      }
    } else {
      audioRef.current.src = episode.audioUrl;
      audioRef.current.play();
      setPlayerState(prev => ({
        ...prev,
        currentEpisode: episode,
        isPlaying: true,
      }));
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !playerState.currentEpisode) return;

    if (playerState.isPlaying) {
      audioRef.current.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    } else {
      audioRef.current.play();
      setPlayerState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  const seekTo = (time: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = time;
  };

  const setVolume = (volume: number) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    setPlayerState(prev => ({ ...prev, volume }));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    playerState,
    playEpisode,
    togglePlay,
    seekTo,
    setVolume,
    formatTime,
  };
};