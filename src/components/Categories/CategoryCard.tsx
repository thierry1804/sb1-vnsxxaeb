import React from 'react';
import { Monitor, Briefcase, Palette, Microscope } from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  episodeCount: number;
  onClick: (categoryId: string) => void;
}

const iconMap = {
  Monitor,
  Briefcase,
  Palette,
  Microscope,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  episodeCount,
  onClick,
}) => {
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <button
      onClick={() => onClick(category.id)}
      className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 text-left w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${category.color} group-hover:scale-110 transition-transform`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-600">
          {episodeCount} épisodes
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {category.name}
      </h3>
      <p className="text-gray-600 text-sm">
        {category.description}
      </p>
    </button>
  );
};