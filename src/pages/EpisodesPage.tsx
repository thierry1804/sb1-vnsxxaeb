import React, { useState } from 'react';
import { Grid, List, Filter } from 'lucide-react';
import { Episode } from '../types';
import { EpisodesList } from '../components/Episodes/EpisodesList';
import { categories } from '../data/mockData';

interface EpisodesPageProps {
  episodes: Episode[];
  currentEpisode: Episode | null;
  isPlaying: boolean;
  onPlay: (episode: Episode) => void;
  searchQuery: string;
}

export const EpisodesPage: React.FC<EpisodesPageProps> = ({
  episodes,
  currentEpisode,
  isPlaying,
  onPlay,
  searchQuery,
}) => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date' | 'plays'>('date');

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      episode.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || episode.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedEpisodes = [...filteredEpisodes].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    } else {
      return b.plays - a.plays;
    }
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Tous les épisodes
          </h1>
          <p className="text-gray-600 mt-1">
            {filteredEpisodes.length} épisodes disponibles
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLayout('grid')}
              className={`p-2 rounded-lg ${layout === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`p-2 rounded-lg ${layout === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Filtres:</span>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">Toutes les catégories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'plays')}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="date">Plus récents</option>
            <option value="plays">Plus populaires</option>
          </select>
        </div>
      </div>

      {/* Episodes List */}
      {sortedEpisodes.length > 0 ? (
        <EpisodesList
          episodes={sortedEpisodes}
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
          onPlay={onPlay}
          layout={layout}
        />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucun épisode trouvé pour votre recherche.</p>
        </div>
      )}
    </div>
  );
};