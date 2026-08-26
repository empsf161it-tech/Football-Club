import React, { useState, useEffect } from 'react';
import { ClubEmblem } from './ClubEmblem';
import { Volume2, VolumeX, Sun, Moon, Menu, X, Ticket } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from './CustomCursor';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenVIPModal: () => void;
  onOpenTrophyModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenVIPModal,
  onOpenTrophyModal,
  theme,
  onToggleTheme,
  setCursorState,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    luxuryAudio.playClick();
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    luxuryAudio.setMuted(nextState);
    luxuryAudio.playClick();
  };

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'PRICING', path: '/pricing' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-obsidian/85 backdrop-blur-xl border-b border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <button
            onClick={() => handleNavClick('/')}
            onMouseEnter={() => {
              luxuryAudio.playHover();
              setCursorState({ text: 'HOME', isHovered: true, variant: 'button' });
            }}
            onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
            className="flex items-center space-x-3 group cursor-pointer text-left"
          >
            <ClubEmblem size={44} />
            <div>
              <span className="font-display font-bold text-lg md:text-xl tracking-[0.2em] text-ivory group-hover:text-gold transition-colors block leading-tight">
                CHENNI<span className="text-gold">.FC</span>
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-ivory-muted uppercase block">
                The Majesty of Football
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  onMouseEnter={() => {
                    luxuryAudio.playHover();
                    setCursorState({ text: link.label, isHovered: true, variant: 'button' });
                  }}
                  onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
                  className={`relative text-xs font-semibold tracking-[0.25em] transition-colors py-2 cursor-pointer ${
                    isActive ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-ivory to-gold shadow-[0_0_8px_#C8A96B]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Utility Action Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Trophy Cabinet Modal Button */}
            <button
              onClick={() => {
                luxuryAudio.playClick();
                onOpenTrophyModal();
              }}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: 'TROPHIES', isHovered: true, variant: 'button' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="px-3 py-2 border border-gold/30 rounded-lg text-[11px] font-bold tracking-widest text-gold hover:bg-gold/10 transition-colors uppercase"
            >
              Honors
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: isMuted ? 'UNMUTE' : 'MUTE', isHovered: true, variant: 'button' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="p-2 border border-gold/20 rounded-lg text-gold/80 hover:text-gold hover:border-gold/50 transition-colors"
              title={isMuted ? 'Enable Sound' : 'Mute Sound'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                luxuryAudio.playClick();
                onToggleTheme();
              }}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: theme === 'dark' ? 'LIGHT' : 'DARK', isHovered: true, variant: 'button' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="p-2 border border-gold/20 rounded-lg text-gold/80 hover:text-gold hover:border-gold/50 transition-colors"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* VIP Pass CTA Button */}
            <button
              onClick={() => {
                luxuryAudio.playModalOpen();
                onOpenVIPModal();
              }}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: 'VIP PASS', isHovered: true, variant: 'button' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian font-bold text-xs tracking-widest uppercase rounded-lg hover:shadow-[0_0_20px_rgba(200,169,107,0.4)] transition-all transform active:scale-95 cursor-pointer"
            >
              <Ticket className="w-4 h-4" />
              <span>VIP Pass</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={toggleSound}
              className="p-2 border border-gold/20 rounded-lg text-gold"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                luxuryAudio.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-ivory hover:text-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-2xl flex flex-col justify-center px-8 py-16 animate-fade-in lg:hidden">
          <nav className="flex flex-col space-y-6 mb-12">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-left font-display text-2xl tracking-[0.2em] uppercase transition-colors ${
                  currentPath === link.path ? 'text-gold pl-2 border-l-2 border-gold' : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="space-y-4 pt-6 border-t border-gold/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrophyModal();
              }}
              className="w-full py-3 border border-gold/30 rounded-lg text-gold font-bold tracking-widest text-xs uppercase"
            >
              Trophy Honors
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVIPModal();
              }}
              className="w-full py-3 bg-gradient-to-r from-gold to-gold-dark text-obsidian font-bold tracking-widest text-xs uppercase rounded-lg"
            >
              Reserve VIP Suite Pass
            </button>
          </div>
        </div>
      )}
    </>
  );
};
