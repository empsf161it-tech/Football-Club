import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import type { CursorState } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { VIPBookingModal } from './components/VIPBookingModal';
import { TrophyModal } from './components/TrophyModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [vipModalOpen, setVipModalOpen] = useState<boolean>(false);
  const [trophyModalOpen, setTrophyModalOpen] = useState<boolean>(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    text: '',
    isHovered: false,
    variant: 'default',
  });

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenTrophyModal={() => setTrophyModalOpen(true)}
            setCursorState={setCursorState}
          />
        );
      case '/services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenVIPModal={() => setVipModalOpen(true)}
            setCursorState={setCursorState}
          />
        );
      case '/pricing':
        return (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenVIPModal={() => setVipModalOpen(true)}
            setCursorState={setCursorState}
          />
        );
      case '/contact':
        return <ContactPage setCursorState={setCursorState} />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenVIPModal={() => setVipModalOpen(true)}
            onOpenTrophyModal={() => setTrophyModalOpen(true)}
            setCursorState={setCursorState}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-obsidian text-ivory flex flex-col custom-cursor-enabled relative selection:bg-gold selection:text-obsidian">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <ScrollProgress />
      <CustomCursor cursorState={cursorState} />

      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenVIPModal={() => setVipModalOpen(true)}
        onOpenTrophyModal={() => setTrophyModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        setCursorState={setCursorState}
      />

      <main className="flex-1">{renderCurrentPage()}</main>

      <Footer onNavigate={handleNavigate} setCursorState={setCursorState} />

      {/* Modals */}
      <VIPBookingModal isOpen={vipModalOpen} onClose={() => setVipModalOpen(false)} />
      <TrophyModal isOpen={trophyModalOpen} onClose={() => setTrophyModalOpen(false)} />
    </div>
  );
}

export default App;
