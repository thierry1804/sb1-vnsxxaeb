import React from 'react';
import { TrendingUp, Clock, Users, Play } from 'lucide-react';
import { Episode } from '../types';
import { EpisodesList } from '../components/Episodes/EpisodesList';
import { categories } from '../data/mockData';

interface HomePageProps {
  episodes: Episode[];
  currentEpisode: Episode | null;
  isPlaying: boolean;
  onPlay: (episode: Episode) => void;
  onPageChange: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  episodes,
  currentEpisode,
  isPlaying,
  onPlay,
  onPageChange,
}) => {
  const latestEpisodes = episodes.slice(0, 3);
  const popularEpisodes = [...episodes].sort((a, b) => b.plays - a.plays).slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-orange-500 rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Découvrez les histoires qui façonnent notre monde
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Des conversations authentiques avec des experts, des créateurs et des visionnaires qui transforment notre société.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span className="text-sm">200+ épisodes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">50k+ auditeurs</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">Top 10 France</span>
            </div>
          </div>
          <button
            onClick={() => onPageChange('episodes')}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Explorer les épisodes
          </button>
        </div>
      </section>

      {/* Latest Episodes */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Derniers épisodes</h2>
          <button
            onClick={() => onPageChange('episodes')}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Voir tout
          </button>
        </div>
        <EpisodesList
          episodes={latestEpisodes}
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
          onPlay={onPlay}
        />
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categoryEpisodes = episodes.filter(ep => ep.category === category.id);
            return (
              <button
                key={category.id}
                onClick={() => onPageChange('categories')}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 text-left group"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                <p className="text-xs text-gray-500">
                  {categoryEpisodes.length} épisodes
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Popular Episodes */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Épisodes populaires</h2>
        <EpisodesList
          episodes={popularEpisodes}
          currentEpisode={currentEpisode}
          isPlaying={isPlaying}
          onPlay={onPlay}
          layout="list"
        />
      </section>

      {/* Stats */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
            <div className="text-gray-600">Épisodes publiés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">50k+</div>
            <div className="text-gray-600">Auditeurs mensuels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">4.8/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
        </div>
      </section>
    </div>
  );
};