import React from 'react';
import { X, Home, PlayCircle, Grid3x3, Users, Info, MessageCircle } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPage,
  onPageChange,
}) => {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'episodes', label: 'Épisodes', icon: PlayCircle },
    { id: 'categories', label: 'Catégories', icon: Grid3x3 },
    { id: 'hosts', label: 'Animateurs', icon: Users },
    { id: 'about', label: 'À propos', icon: Info },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handlePageChange(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      currentPage === item.id
                        ? 'bg-purple-100 text-purple-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};