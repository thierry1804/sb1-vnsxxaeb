import React from 'react';
import { Menu, Search, Headphones, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  currentPage,
  onPageChange,
  searchQuery,
  onSearchChange,
}) => {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: 'Home' },
    { id: 'episodes', label: 'Épisodes', icon: 'PlayCircle' },
    { id: 'categories', label: 'Catégories', icon: 'Grid3x3' },
    { id: 'hosts', label: 'Animateurs', icon: 'Users' },
    { id: 'about', label: 'À propos', icon: 'Info' },
    { id: 'contact', label: 'Contact', icon: 'MessageCircle' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center ml-4 lg:ml-0">
              <div className="bg-gradient-to-r from-purple-600 to-orange-500 p-2 rounded-lg">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">PodcastPro</span>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};