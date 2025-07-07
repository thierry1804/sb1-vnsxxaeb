import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Download, Share2 } from 'lucide-react';
import { PlayerState } from '../../types';

interface AudioPlayerProps {
  playerState: PlayerState;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  formatTime: (seconds: number) => string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  playerState,
  onTogglePlay,
  onSeek,
  onVolumeChange,
  formatTime,
}) => {
  const { currentEpisode, isPlaying, currentTime, duration } = playerState;

  if (!currentEpisode) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Episode Info */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <img
              src={currentEpisode.imageUrl}
              alt={currentEpisode.title}
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {currentEpisode.title}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {currentEpisode.duration}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 hidden sm:block">
              <SkipBack className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={onTogglePlay}
              className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-white" />
              ) : (
                <Play className="h-5 w-5 text-white" />
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 hidden sm:block">
              <SkipForward className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Progress & Volume */}
          <div className="flex items-center space-x-4 min-w-0 flex-1 justify-end">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-xs text-gray-500">
                {formatTime(currentTime)}
              </span>
              <div className="w-32 h-2 bg-gray-200 rounded-full cursor-pointer">
                <div
                  className="h-2 bg-purple-600 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const percentage = x / rect.width;
                    onSeek(percentage * duration);
                  }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full shadow-md" />
                </div>
              </div>
              <span className="text-xs text-gray-500">
                {formatTime(duration)}
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Volume2 className="h-4 w-4 text-gray-600" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={playerState.volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-20 accent-purple-600"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Download className="h-4 w-4 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};