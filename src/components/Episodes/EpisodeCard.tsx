import React from 'react';
import { Play, Pause, Download, Share2, Clock, TrendingUp } from 'lucide-react';
import { Episode } from '../../types';
import { categories } from '../../data/mockData';

interface EpisodeCardProps {
  episode: Episode;
  isPlaying: boolean;
  onPlay: (episode: Episode) => void;
  compact?: boolean;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  isPlaying,
  onPlay,
  compact = false,
}) => {
  const category = categories.find(c => c.id === episode.category);

  if (compact) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={episode.imageUrl}
              alt={episode.title}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <button
              onClick={() => onPlay(episode)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-white" />
              ) : (
                <Play className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {episode.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {episode.duration} • {new Date(episode.publishDate).toLocaleDateString()}
            </p>
            <div className="flex items-center mt-2 space-x-2">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${category?.color} text-white`}>
                {category?.name}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                {episode.plays.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={episode.imageUrl}
          alt={episode.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => onPlay(episode)}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {isPlaying ? (
            <Pause className="h-12 w-12 text-white" />
          ) : (
            <Play className="h-12 w-12 text-white" />
          )}
        </button>
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${category?.color} text-white`}>
            {category?.name}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {episode.description}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {episode.duration}
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {episode.plays.toLocaleString()}
            </div>
          </div>
          <span>{new Date(episode.publishDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {episode.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Download className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share2 className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};