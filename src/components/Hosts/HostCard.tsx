import React from 'react';
import { Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { Host } from '../../types';

interface HostCardProps {
  host: Host;
  episodeCount: number;
}

export const HostCard: React.FC<HostCardProps> = ({ host, episodeCount }) => {
  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={host.imageUrl}
            alt={host.name}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{host.name}</h3>
            <p className="text-sm text-gray-600">{episodeCount} épisodes</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{host.bio}</p>
        <div className="flex space-x-3">
          {Object.entries(host.social).map(([platform, handle]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <button
                key={platform}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                title={`${platform}: ${handle}`}
              >
                <Icon className="h-4 w-4 text-gray-600" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};