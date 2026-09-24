import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HeroScene } from './components/HeroScene';
import { AboutScene } from './components/AboutScene';
import { RecentUploads } from './components/RecentUploads';
import { VoidMCSection } from './components/VoidMCSection';
import { Footer } from './components/Footer';
import { JoinUsPage } from './components/JoinUsPage';
import { ContactPage } from './components/ContactPage';
import { SocialsPage } from './components/SocialsPage';
import { RockstarNVLoader } from './components/RockstarNVLoader';
import { ShareModal } from './components/ShareModal';
import { ContactModal } from './components/ContactModal';
import { CustomCursor } from './components/CustomCursor';
import { ThemeAccent, ThemeMode } from './types';

// Animation variants for staged scene flips (Scenes 0, 1, 2)
const sceneVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.99
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -40 : 40,
    opacity: 0,
    scale: 0.99,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

type PageType = 'home' | 'contact' | 'join-us' | 'socials';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [accent, setAccent] = useState<ThemeAccent>('gold');
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [isPageTransitioning, setIsPageTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  const [transitionTargetName, setTransitionTargetName] = useState<string>('NIKVERSE');

  // Staged Scene Index:
  // 0 = Landing Hero
  // 1 = Who Am I
  // 2 = Explore Nikverse & the rest of the natural scrolling page
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [subSectionId, setSubSectionId] = useState<string>('uploads');

  // Modals state
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // References for scrolling inside Scene 2
  const scene2ScrollRef = useRef<HTMLDivElement>(null);
  const isThrottledRef = useRef<boolean>(false);

  const handleToggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const goToScene = (index: number) => {
    if (index === activeSceneIndex) return;
    setDirection(index > activeSceneIndex ? 1 : -1);
    setActiveSceneIndex(index);
  };

  // Trigger fast GTA 6-style Big 'NV' Page Transition
  const triggerPageTransition = (
    targetPage: PageType,
    pageTitle: string,
    callback?: () => void
  ) => {
    setTransitionTargetName(pageTitle);
    setIsPageTransitioning(true);

    setTimeout(() => {
      setCurrentPage(targetPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (callback) callback();
    }, 240);
  };

  const handleNavigate = (target: 'home' | 'about' | 'contact' | 'join-us' | 'socials') => {
    if (target === 'about') {
      if (currentPage !== 'home') {
        triggerPageTransition('home', 'NIKVERSE // WHO AM I', () => {
          goToScene(1);
        });
      } else {
        goToScene(1);
      }
      return;
    }

    if (target === 'home') {
      if (currentPage !== 'home') {
        triggerPageTransition('home', 'NIKVERSE // HOME', () => {
          goToScene(0);
        });
      } else {
        goToScene(0);
      }
      return;
    }

    if (target === 'contact') {
      if (currentPage !== 'contact') {
        triggerPageTransition('contact', 'NIKVERSE // CONTACT');
      }
      return;
    }

    if (target === 'socials') {
      if (currentPage !== 'socials') {
        triggerPageTransition('socials', 'NIKVERSE // SOCIALS');
      }
      return;
    }

    if (target === 'join-us') {
      if (currentPage !== 'join-us') {
        triggerPageTransition('join-us', 'NIKVERSE // JOIN US');
      }
      return;
    }
  };

  const handleNavigateToJoinUs = () => {
    handleNavigate('join-us');
  };

  // --------------------------------------------------------------------------
  // FAKE SCROLL CONTROLLER for Hero (0) & Who Am I (1):
  // Seamlessly transitions between Hero and Who Am I.
  // When in Scene 2 (Explore Nikverse onwards), fake scroll is REMOVED so the user
  // can naturally scroll down with scroll transition animations!
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (currentPage === 'join-us') return;

    const handleWheel = (e: WheelEvent) => {
      // Scene 0: Landing Hero
      if (activeSceneIndex === 0) {
        if (e.deltaY > 20 && !isThrottledRef.current) {
          e.preventDefault();
          setDirection(1);
          setActiveSceneIndex(1);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
        return;
      }

      // Scene 1: Who Am I
      if (activeSceneIndex === 1) {
        if (e.deltaY > 20 && !isThrottledRef.current) {
          e.preventDefault();
          setDirection(1);
          setActiveSceneIndex(2);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        } else if (e.deltaY < -20 && !isThrottledRef.current) {
          e.preventDefault();
          setDirection(-1);
          setActiveSceneIndex(0);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
        return;
      }

      // Scene 2: Explore Nikverse and beyond
      // Fake scroll is REMOVED! Natural scrolling is enabled.
      // If user is at the very top and pulls/scrolls up strongly, transition back to Who Am I.
      if (activeSceneIndex === 2) {
        const container = scene2ScrollRef.current;
        if (container && container.scrollTop <= 5 && e.deltaY < -40 && !isThrottledRef.current) {
          e.preventDefault();
          setDirection(-1);
          setActiveSceneIndex(1);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isThrottledRef.current) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      // Scene 0: Swipe up -> Who Am I
      if (activeSceneIndex === 0) {
        if (diff > 40) {
          setDirection(1);
          setActiveSceneIndex(1);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
        return;
      }

      // Scene 1: Who Am I
      if (activeSceneIndex === 1) {
        if (diff > 40) {
          setDirection(1);
          setActiveSceneIndex(2);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        } else if (diff < -40) {
          setDirection(-1);
          setActiveSceneIndex(0);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
        return;
      }

      // Scene 2: Swipe down at top -> Who Am I
      if (activeSceneIndex === 2) {
        const container = scene2ScrollRef.current;
        if (container && container.scrollTop <= 5 && diff < -60) {
          setDirection(-1);
          setActiveSceneIndex(1);
          isThrottledRef.current = true;
          setTimeout(() => {
            isThrottledRef.current = false;
          }, 550);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeSceneIndex, currentPage]);

  // Track sub-section when scrolling inside Scene 2
  const handleScene2Scroll = () => {
    const container = scene2ScrollRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const subSections = ['uploads', 'voidmc'];

    for (let i = subSections.length - 1; i >= 0; i--) {
      const id = subSections[i];
      const el = document.getElementById(id);
      if (el) {
        const offset = el.offsetTop - 140;
        if (scrollTop >= offset) {
          setSubSectionId(id);
          break;
        }
      }
    }
  };

  // Navigation handlers
  const handleSelectSection = (sectionId: string) => {
    if (sectionId === 'join-us') {
      handleNavigateToJoinUs();
      return;
    }
    if (sectionId === 'contact') {
      setIsContactOpen(true);
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
    }

    if (sectionId === 'home') {
      goToScene(0);
      return;
    }

    if (sectionId === 'story' || sectionId === 'about') {
      goToScene(1);
      return;
    }

    // Otherwise it belongs in Scene 2
    const targetId = sectionId === 'streams' ? 'uploads' : sectionId === 'community' ? 'voidmc' : sectionId;
    if (activeSceneIndex !== 2) {
      goToScene(2);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el && scene2ScrollRef.current) {
          scene2ScrollRef.current.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
        }
      }, 350);
    } else {
      const el = document.getElementById(targetId);
      if (el && scene2ScrollRef.current) {
        scene2ScrollRef.current.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    }
  };

  // Determine active item for header active indicator
  let currentActiveId = 'home';
  if (activeSceneIndex === 0) currentActiveId = 'home';
  else if (activeSceneIndex === 1) currentActiveId = 'story';
  else currentActiveId = subSectionId;

  return (
    <div
      className={`fixed inset-0 w-full h-[100dvh] overflow-hidden font-sans selection:bg-amber-500 selection:text-black transition-colors duration-500 bg-[#09090b] ${
        themeMode === 'light' ? 'theme-light text-white' : 'theme-dark text-white'
      }`}
      data-theme={themeMode}
    >
      {/* Animated Custom Ring + Dot Crosshair Cursor */}
      <CustomCursor />

      {/* Rockstar Games VI-Style Outlined 'NV' Screen Transition & Initial Loader */}
      <RockstarNVLoader
        isLoading={isInitialLoading || isPageTransitioning}
        onFinish={() => {
          setIsInitialLoading(false);
          setIsPageTransitioning(false);
        }}
        durationMs={isInitialLoading ? 1200 : 500}
      />

      {/* ------------------------------------------------------------------ */}
      {/* CINEMATIC BACKGROUND ARTWORK (Main Landing Hero & Who Am I)         */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={`fixed inset-0 z-0 overflow-hidden pointer-events-none select-none transition-opacity duration-700 ${
          currentPage === 'home' && (activeSceneIndex === 0 || activeSceneIndex === 1) ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="https://i.postimg.cc/vmmNDTv6/Chat-GPT-Image-Sep-24-2026-09-27-21-PM.png"
          alt="Nikverse Main Landing Background"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          style={{ objectPosition: 'center 20%' }}
          className="w-full h-full object-cover transition-all duration-700 ease-out filter-none scale-100 brightness-110 contrast-105"
        />

        {/* Bottom Fade Blur: blurs the bottom of the poster softly */}
        <div
          className="absolute inset-x-0 bottom-0 h-64 sm:h-80 pointer-events-none z-[2] backdrop-blur-md opacity-70"
          style={{
            maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)'
          }}
        />

        {/* Subtle Atmospheric Lighting */}
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none z-[1]" />

        {/* Ambient Vignette and Soft Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/35 via-35% to-transparent pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none z-[1]" />

        {/* Subtle Minecraft grid pattern */}
        <div className="absolute inset-0 mc-grid-pattern opacity-10 pointer-events-none z-[1]" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* BACKGROUND ARTWORK FOR VIDEOS & LIVESTREAMS (Scene 2)              */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={`fixed inset-0 z-0 overflow-hidden pointer-events-none select-none transition-opacity duration-500 ${
          currentPage === 'home' && activeSceneIndex === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src="https://i.postimg.cc/38kDFhSL/novaskin-wallpaper-pizzamovienight.jpg"
          alt="Videos and Livestreams Background"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://i.postimg.cc/4yTdXDTt/novaskin-wallpaper-pizzamovienight.jpg';
          }}
          className="w-full h-full object-cover object-center opacity-80 sm:opacity-85 filter-none contrast-105 brightness-105 scale-100 transition-all duration-500"
        />
        {/* Crisp minimal contrast overlays to keep cards and texts sharp without blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent via-35% to-[#07070a]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 mc-grid-pattern opacity-5 pointer-events-none" />
      </div>

      {/* Top Navbar Header */}
      <Header
        isReady={true}
        themeMode={themeMode}
        activeSection={currentPage === 'home' ? currentActiveId : currentPage}
        currentPage={currentPage}
        onToggleTheme={handleToggleTheme}
        onNavigate={handleNavigate}
      />

      {/* ------------------------------------------------------------------ */}
      {/* MAIN CONTENT VIEWER                                                */}
      {/* ------------------------------------------------------------------ */}
      <main className="relative z-10 w-full h-[100dvh]">
        {currentPage === 'contact' ? (
          <div className="w-full h-full overflow-y-auto bg-[#07070a] flex flex-col custom-scrollbar">
            <div className="w-full min-h-[100dvh] flex flex-col">
              <ContactPage onBackToHome={() => handleNavigate('home')} />
            </div>
            <Footer
              themeMode={themeMode}
              onNavigate={(sec) => handleNavigate(sec as any)}
              onOpenContact={() => handleNavigate('contact')}
              onOpenJoinUs={() => handleNavigate('join-us')}
            />
          </div>
        ) : currentPage === 'socials' ? (
          <div className="w-full h-full overflow-y-auto pt-16 bg-[#09090b] flex flex-col custom-scrollbar">
            <div className="flex-1 w-full flex flex-col">
              <SocialsPage onBackToHome={() => handleNavigate('home')} />
            </div>
            <Footer
              themeMode={themeMode}
              onNavigate={(sec) => handleNavigate(sec as any)}
              onOpenContact={() => handleNavigate('contact')}
              onOpenJoinUs={() => handleNavigate('join-us')}
            />
          </div>
        ) : currentPage === 'join-us' ? (
          <div className="w-full h-full overflow-y-auto pt-16 sm:pt-20 bg-[#09090b] flex flex-col custom-scrollbar">
            <div className="flex-1 w-full flex flex-col">
              <JoinUsPage
                themeMode={themeMode}
                onBackToHome={() => handleNavigate('home')}
              />
            </div>
            <Footer
              themeMode={themeMode}
              onNavigate={(sec) => handleNavigate(sec as any)}
              onOpenContact={() => handleNavigate('contact')}
              onOpenJoinUs={() => handleNavigate('join-us')}
            />
          </div>
        ) : (
          <AnimatePresence custom={direction} mode="wait">
            {/* SCENE 0: LANDING HERO (Text and buttons situated down at bottom) */}
            {activeSceneIndex === 0 && (
              <motion.div
                key="scene-hero"
                custom={direction}
                variants={sceneVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-[100dvh] flex flex-col justify-end"
              >
                <HeroScene
                  onSeeTheWork={() => goToScene(2)}
                  onOpenContact={() => handleNavigate('contact')}
                />
              </motion.div>
            )}

            {/* SCENE 1: WHO AM I (Fake scroll transition) */}
            {activeSceneIndex === 1 && (
              <motion.div
                key="scene-about"
                custom={direction}
                variants={sceneVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-[100dvh] flex flex-col justify-center"
              >
                <AboutScene
                  onFindMeHere={() => handleNavigate('socials')}
                  onGetInTouch={() => handleNavigate('contact')}
                />
              </motion.div>
            )}

            {/* SCENE 2: RECENT MEDIA UPLOADS & ONWARDS (Natural Scroll & Scroll Animations) */}
            {activeSceneIndex === 2 && (
              <motion.div
                key="scene-content"
                custom={direction}
                variants={sceneVariants}
                initial="enter"
                animate="center"
                exit="exit"
                ref={scene2ScrollRef}
                onScroll={handleScene2Scroll}
                className="w-full h-[100dvh] overflow-y-auto overflow-x-hidden pt-16 sm:pt-20 scroll-smooth custom-scrollbar flex flex-col justify-between"
              >
                <div className="w-full flex flex-col items-center">
                  {/* Recent Uploads (Videos & Live Streams in Vertical Layout) */}
                  <motion.div
                    id="uploads"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55 }}
                    className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 scroll-mt-20"
                  >
                    <RecentUploads themeMode={themeMode} />
                  </motion.div>

                  {/* Void MC Server Section */}
                  <motion.div
                    id="voidmc"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.55 }}
                    className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 scroll-mt-20"
                  >
                    <VoidMCSection themeMode={themeMode} />
                  </motion.div>
                </div>

                {/* 4. Footer - Simple, full width, connected to sides */}
                <Footer
                  themeMode={themeMode}
                  onNavigate={(sec) => handleNavigate(sec as any)}
                  onOpenContact={() => handleNavigate('contact')}
                  onOpenJoinUs={() => handleNavigate('join-us')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>

      {/* Modals */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        themeMode={themeMode}
      />
    </div>
  );
}
