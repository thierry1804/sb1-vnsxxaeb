import React, { useState } from 'react';
import { Episode } from '../types';
import { CategoryCard } from '../components/Categories/CategoryCard';
import { EpisodesList } from '../components/Episodes/EpisodesList';
import { categories } from '../data/mockData';

interface CategoriesPageProps {
  episodes: Episode[];
  currentEpisode: Episode | null;
  isPlaying: boolean;
  onPlay: (episode: Episode) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  episodes,
  currentEpisode,
  isPlaying,
  onPlay,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryEpisodes = selectedCategory
    ? episodes.filter(ep => ep.category === selectedCategory)
    : [];

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  if (selectedCategory) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-2"
            >
              ← Retour aux catégories
            </button>
            <h1 className="text-2xl font-bold text-gray-900">
              {selectedCategoryData?.name}
            </h1>
            <p className="text-gray-600 mt-1">
              {selectedCategoryData?.description} • {categoryEpisodes.length} épisodes
            </p>
          </div>
        </div>
        <EpisodesList
          episodes={categoryEpisodes}
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
          onPlay={onPlay}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Catégories</h1>
        <p className="text-gray-600 mt-1">
          Explorez nos épisodes par thématique
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const episodeCount = episodes.filter(ep => ep.category === category.id).length;
          return (
            <CategoryCard
              key={category.id}
              category={category}
              episodeCount={episodeCount}
              onClick={setSelectedCategory}
            />
          );
        })}
      </div>
    </div>
  );
};