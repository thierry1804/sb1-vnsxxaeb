import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { MobileMenu } from './components/Layout/MobileMenu';
import { AudioPlayer } from './components/Audio/AudioPlayer';
import { HomePage } from './pages/HomePage';
import { EpisodesPage } from './pages/EpisodesPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { HostsPage } from './pages/HostsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { episodes } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { playerState, playEpisode, togglePlay, seekTo, setVolume, formatTime } = useAudioPlayer();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            episodes={episodes}
            currentEpisode={playerState.currentEpisode}
            isPlaying={playerState.isPlaying}
            onPlay={playEpisode}
            onPageChange={setCurrentPage}
          />
        );
      case 'episodes':
        return (
          <EpisodesPage
            episodes={episodes}
            currentEpisode={playerState.currentEpisode}
            isPlaying={playerState.isPlaying}
            onPlay={playEpisode}
            searchQuery={searchQuery}
          />
        );
      case 'categories':
        return (
          <CategoriesPage
            episodes={episodes}
            currentEpisode={playerState.currentEpisode}
            isPlaying={playerState.isPlaying}
            onPlay={playEpisode}
          />
        );
      case 'hosts':
        return <HostsPage episodes={episodes} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <HomePage
            episodes={episodes}
            currentEpisode={playerState.currentEpisode}
            isPlaying={playerState.isPlaying}
            onPlay={playEpisode}
            onPageChange={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onMenuToggle={() => setIsMobileMenuOpen(true)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <main className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPage()}
        </div>
      </main>
      <AudioPlayer
        playerState={playerState}
        onTogglePlay={togglePlay}
        onSeek={seekTo}
        onVolumeChange={setVolume}
        formatTime={formatTime}
      />
    </div>
  );
}

export default App;