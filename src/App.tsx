import React, { useState } from 'react';
import { IntroZoomLoader } from './components/IntroZoomLoader';
import { VideoBackground } from './components/VideoBackground';
import { Header } from './components/Header';
import { GlassPanel } from './components/GlassPanel';
import { JoinUsPage } from './components/JoinUsPage';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';
import { BACKGROUND_VIDEOS, LIGHT_THEME_VIDEO, DARK_THEME_VIDEO } from './data/portfolioData';
import { ThemeAccent, ThemeMode, BackgroundVideo } from './types';

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [accent, setAccent] = useState<ThemeAccent>('gold');
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState<'home' | 'join-us'>('home');
  const [currentVideo, setCurrentVideo] = useState<BackgroundVideo>(LIGHT_THEME_VIDEO);
  
  // Background Video playback and filter settings
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const [overlayOpacity, setOverlayOpacity] = useState(0.15);
  const [blurAmount, setBlurAmount] = useState(0);

  // Modals state
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Toggle theme mode between Light and Dark with smooth video crossfade
  const handleToggleTheme = () => {
    setThemeMode((prev) => {
      const nextMode = prev === 'light' ? 'dark' : 'light';
      setCurrentVideo(nextMode === 'light' ? LIGHT_THEME_VIDEO : DARK_THEME_VIDEO);
      return nextMode;
    });
  };

  const handleNavigateToJoinUs = () => {
    setCurrentPage('join-us');
    setActiveSection('join-us');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = (sectionId: string = 'home') => {
    setCurrentPage('home');
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <div className={`relative min-h-screen font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden transition-colors duration-500 ${themeMode === 'light' ? 'theme-light text-white' : 'theme-dark text-white'}`} data-theme={themeMode}>
      
      {/* Animated Custom Ring + Dot Crosshair Cursor */}
      <CustomCursor />

      {/* Intro Zooming Logo Loader Overlay (zooms up large & disappears) */}
      {!isIntroComplete && (
        <IntroZoomLoader onComplete={() => setIsIntroComplete(true)} />
      )}

      {/* Looping Background Video Layer with Smooth Crossfade */}
      <VideoBackground
        currentVideo={currentVideo}
        themeMode={themeMode}
        videos={BACKGROUND_VIDEOS}
        onSelectVideo={(vid) => {
          setCurrentVideo(vid);
          if (vid.id === DARK_THEME_VIDEO.id) setThemeMode('dark');
          if (vid.id === LIGHT_THEME_VIDEO.id) setThemeMode('light');
        }}
        onToggleTheme={handleToggleTheme}
        isPlaying={isPlayingVideo}
        onTogglePlay={() => setIsPlayingVideo(!isPlayingVideo)}
        overlayOpacity={overlayOpacity}
        blurAmount={blurAmount}
        onOverlayOpacityChange={setOverlayOpacity}
        onBlurAmountChange={setBlurAmount}
      />

      {/* Authentic Liquid Glass Header (Animates in once intro loader completes) */}
      <Header
        isReady={isIntroComplete}
        currentAccent={accent}
        themeMode={themeMode}
        activeSection={currentPage === 'join-us' ? 'join-us' : activeSection}
        onSelectSection={(sec) => {
          if (sec === 'join-us') {
            handleNavigateToJoinUs();
          } else {
            handleNavigateToHome(sec);
          }
        }}
        onSelectAccent={setAccent}
        onToggleTheme={handleToggleTheme}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenJoinUs={handleNavigateToJoinUs}
      />

      {/* Main Hero Landing & Content Sections */}
      <main className="relative z-10 w-full pt-16 sm:pt-20">
        {currentPage === 'join-us' ? (
          <JoinUsPage
            themeMode={themeMode}
            onBackToHome={() => handleNavigateToHome('home')}
          />
        ) : (
          <GlassPanel
            accent={accent}
            themeMode={themeMode}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
      </main>

      {/* Real Full-Width Website Footer */}
      <Footer
        themeMode={themeMode}
        onNavigate={(sec) => handleNavigateToHome(sec)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenJoinUs={handleNavigateToJoinUs}
      />

      {/* Modals */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
