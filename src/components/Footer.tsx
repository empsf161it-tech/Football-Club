import React, { useState } from 'react';
import { ClubEmblem } from './ClubEmblem';
import { ArrowUpRight, ChevronUp, Mail, Check, Globe, Share2, Video, MessageSquare } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from './CustomCursor';

interface FooterProps {
  onNavigate: (path: string) => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, setCursorState }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    luxuryAudio.playClick();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    luxuryAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-obsidian border-t border-gold/20 pt-20 pb-12 overflow-hidden">
      {/* Background Subtle Emblem Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <ClubEmblem size={600} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Oversized Cinematic Statement */}
        <div className="mb-16 border-b border-gold/15 pb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4 block">
            Chenni in Football Club
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tight text-ivory uppercase leading-none font-bold">
            ENTER THE <span className="gold-text-gradient">LEGACY.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <ClubEmblem size={50} />
              <div>
                <span className="font-display font-bold text-xl tracking-[0.2em] text-ivory block">
                  CHENNI<span className="text-gold">.FC</span>
                </span>
                <span className="text-[10px] font-sans tracking-widest text-ivory-muted uppercase block">
                  Est. 1924 • Chennai & World
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-muted font-serif italic max-w-md leading-relaxed">
              Uniting sporting mastery with presidential hospitality. Access matchday luxury, elite youth training, and global club membership privileges.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">
                Join The Royal Digest
              </span>
              {subscribed ? (
                <div className="flex items-center space-x-2 text-gold text-sm font-semibold p-3 bg-gold/10 border border-gold/30 rounded-lg">
                  <Check className="w-5 h-5 text-gold" />
                  <span>Welcome to the Royal Circle. Invitation sent to email.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center max-w-md">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      required
                      placeholder="Enter your VIP email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-obsidian-card border border-gold/20 rounded-l-lg px-4 py-3 text-sm text-ivory placeholder:text-ivory-muted/40 focus:outline-none focus:border-gold transition-colors"
                    />
                    <Mail className="absolute right-3 top-3.5 w-4 h-4 text-gold/40 pointer-events-none" />
                  </div>
                  <button
                    type="submit"
                    onMouseEnter={() => luxuryAudio.playHover()}
                    className="px-5 py-3 bg-gold hover:bg-gold-light text-obsidian font-bold text-xs tracking-widest uppercase rounded-r-lg transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block mb-6">
              Navigation Index
            </span>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Home Experience', path: '/' },
                { name: 'About The Club', path: '/about' },
                { name: 'Hospitality & Services', path: '/services' },
                { name: 'Membership Tiers', path: '/pricing' },
                { name: 'Contact Concierge', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      luxuryAudio.playClick();
                      onNavigate(link.path);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    onMouseEnter={() => {
                      luxuryAudio.playHover();
                      setCursorState({ text: 'GO', isHovered: true, variant: 'button' });
                    }}
                    onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
                    className="text-ivory-muted hover:text-gold transition-colors flex items-center group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Touchpoints & Socials */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block mb-6">
              Global Touchpoints
            </span>
            <div className="text-xs text-ivory-muted space-y-2 font-mono">
              <p><strong className="text-ivory">Chennai Stadium & HQ:</strong> Royal Crest Arena, Boat Club Road, Chennai</p>
              <p><strong className="text-ivory">London Suite:</strong> Mayfair Tower, Berkeley Square, London</p>
              <p><strong className="text-ivory">Madrid Academy:</strong> Valdebebas Sports Complex, Madrid</p>
            </div>

            <div className="pt-4">
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase block mb-3">
                Connect Directly
              </span>
              <div className="flex items-center space-x-3">
                {[
                  { Icon: Globe, href: '#', label: 'GLOBAL' },
                  { Icon: Share2, href: '#', label: 'SHARE' },
                  { Icon: Video, href: '#', label: 'MEDIA' },
                  { Icon: MessageSquare, href: '#', label: 'PRESS' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      luxuryAudio.playClick();
                    }}
                    onMouseEnter={() => {
                      luxuryAudio.playHover();
                      setCursorState({ text: 'SOCIAL', isHovered: true, variant: 'button' });
                    }}
                    onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
                    className="p-3 bg-obsidian-card border border-gold/20 rounded-lg text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 shadow-md"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory-muted space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} CHENNI IN FOOTBALL CLUB (CINC FC). ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gold cursor-pointer transition-colors">PRIVACY PROTOCOL</span>
            <span className="hover:text-gold cursor-pointer transition-colors">TERMS OF MEMBERSHIP</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => luxuryAudio.playHover()}
              className="flex items-center space-x-1 px-3 py-1.5 border border-gold/30 rounded-md text-gold hover:bg-gold/10 transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
