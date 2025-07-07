import React from 'react';
import { Episode } from '../../types';
import { EpisodeCard } from './EpisodeCard';

interface EpisodesListProps {
  episodes: Episode[];
  currentEpisode: Episode | null;
  isPlaying: boolean;
  onPlay: (episode: Episode) => void;
  layout?: 'grid' | 'list';
}

export const EpisodesList: React.FC<EpisodesListProps> = ({
  episodes,
  currentEpisode,
  isPlaying,
  onPlay,
  layout = 'grid',
}) => {
  if (layout === 'list') {
    return (
      <div className="space-y-4">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            isPlaying={currentEpisode?.id === episode.id && isPlaying}
            onPlay={onPlay}
            compact={true}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode) => (
        <EpisodeCard
          key={episode.id}
          episode={episode}
          isPlaying={currentEpisode?.id === episode.id && isPlaying}
          onPlay={onPlay}
        />
      ))}
    </div>
  );
};