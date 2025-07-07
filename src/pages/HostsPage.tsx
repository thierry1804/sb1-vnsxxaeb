import React from 'react';
import { Episode, Host } from '../types';
import { HostCard } from '../components/Hosts/HostCard';
import { hosts } from '../data/mockData';

interface HostsPageProps {
  episodes: Episode[];
}

export const HostsPage: React.FC<HostsPageProps> = ({ episodes }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Nos animateurs</h1>
        <p className="text-gray-600 mt-1">
          Découvrez les experts qui donnent vie à nos épisodes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hosts.map((host) => {
          const episodeCount = episodes.filter(ep => ep.hosts.includes(host.id)).length;
          return (
            <HostCard
              key={host.id}
              host={host}
              episodeCount={episodeCount}
            />
          );
        })}
      </div>
    </div>
  );
};