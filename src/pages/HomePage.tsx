import React from 'react';
import { HeroCanvas } from '../components/HeroCanvas';
import { MatchTicker } from '../components/MatchTicker';
import { ClubEmblem } from '../components/ClubEmblem';
import { ArrowRight, Award, Sparkles, Star, ChevronRight, Ticket } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from '../components/CustomCursor';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenVIPModal: () => void;
  onOpenTrophyModal: () => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVIPModal,
  onOpenTrophyModal,
  setCursorState,
}) => {
  return (
    <div className="w-full">
      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-obsidian border-b border-gold/15">
        <HeroCanvas />

        {/* Ambient Radial Gradient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Headline & CTAs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase animate-fade-in">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Crown Jewel of Football</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-8xl tracking-tight text-ivory font-bold leading-[0.95] uppercase">
                THE MAJESTY OF <span className="gold-text-gradient">FOOTBALL.</span>
              </h1>

              <p className="font-serif italic text-ivory-muted text-lg sm:text-2xl max-w-2xl leading-relaxed">
                Where century-old sporting royalty meets presidential hospitality, tactical mastery, and world-class athletic excellence.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    luxuryAudio.playModalOpen();
                    onOpenVIPModal();
                  }}
                  onMouseEnter={() => {
                    luxuryAudio.playHover();
                    setCursorState({ text: 'RESERVE', isHovered: true, variant: 'button' });
                  }}
                  onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian font-bold tracking-widest uppercase text-xs rounded-xl hover:shadow-[0_0_35px_rgba(200,169,107,0.5)] transition-all transform active:scale-95 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve VIP Match Box</span>
                </button>

                <button
                  onClick={() => {
                    luxuryAudio.playClick();
                    onNavigate('/about');
                  }}
                  onMouseEnter={() => {
                    luxuryAudio.playHover();
                    setCursorState({ text: 'EXPLORE', isHovered: true, variant: 'button' });
                  }}
                  onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
                  className="flex items-center space-x-2 px-8 py-4 border border-gold/30 rounded-xl text-ivory hover:text-gold hover:border-gold transition-all text-xs font-bold tracking-widest uppercase glass-panel cursor-pointer"
                >
                  <span>Explore Club Legacy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3D Crest Badge Visual Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group p-8 rounded-3xl glass-panel border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center max-w-sm w-full transform hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 p-3 bg-gold rounded-2xl text-obsidian font-bold shadow-lg">
                  <Star className="w-6 h-6 fill-obsidian" />
                </div>
                <ClubEmblem size={140} className="mx-auto mb-6" />
                <h3 className="font-display text-2xl text-ivory font-bold mb-1">CHENNI IN FC</h3>
                <span className="text-xs font-mono tracking-widest text-gold uppercase block mb-4">
                  OFFICIAL CLUB CREST
                </span>
                <div className="border-t border-gold/15 pt-4 text-xs text-ivory-muted flex justify-around">
                  <div>
                    <span className="block font-bold text-gold text-base">1924</span>
                    <span>FOUNDED</span>
                  </div>
                  <div className="w-[1px] bg-gold/20" />
                  <div>
                    <span className="block font-bold text-gold text-base">CHINNA</span>
                    <span>HOME ARENA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Matchday Ticker Bar */}
        <div className="mt-12">
          <MatchTicker />
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION */}
      <section className="py-24 bg-obsidian-card relative overflow-hidden border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Split Screen Image Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-2xl img-zoom-container group">
                <img
                  src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=80"
                  alt="Chenni Stadium Arena"
                  className="w-full h-[450px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gold uppercase block">
                      The Royal Crest Arena
                    </span>
                    <h4 className="font-display text-xl text-ivory font-bold">75,000 Capacity Sanctuary</h4>
                  </div>
                  <button
                    onClick={() => {
                      luxuryAudio.playClick();
                      onOpenTrophyModal();
                    }}
                    className="p-3 bg-gold text-obsidian rounded-xl font-bold hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Award className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
                Section 02 // Heritage & Identity
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase leading-tight">
                A CENTURY BORN IN <span className="gold-text-gradient">PASSION & GLORY.</span>
              </h2>
              <p className="font-serif italic text-ivory-muted text-lg leading-relaxed">
                Founded in 1924, Chenni in FC transcends traditional sport. We represent an institution of tactical innovation, regal hospitality, and unyielding sporting pride.
              </p>
              <div className="space-y-4 pt-2">
                {[
                  'Preserved Presidential VIP Hospitality Box Suites',
                  'World-Renowned Youth Academy & Scouting Network',
                  'Undefeated European Continental Home Record',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-ivory">
                    <div className="p-1 bg-gold/20 text-gold rounded-md">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <button
                  onClick={() => {
                    luxuryAudio.playClick();
                    onNavigate('/about');
                  }}
                  onMouseEnter={() => luxuryAudio.playHover()}
                  className="px-6 py-3 bg-transparent border border-gold/40 text-gold hover:bg-gold hover:text-obsidian font-bold text-xs tracking-widest uppercase rounded-lg transition-colors cursor-pointer"
                >
                  Read Full Club Manifesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED EXPERIENCE (HORIZONTAL SHOWCASE) */}
      <section className="py-24 bg-obsidian relative overflow-hidden border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-2">
              Section 03 // Curated Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              THE CHENNI <span className="gold-text-gradient">SHOWCASE.</span>
            </h2>
          </div>
          <p className="font-serif italic text-ivory-muted text-sm max-w-md">
            Explore our world-class pillars across matchday hospitality, talent development, and executive club privileges.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Presidential Suite Box',
              category: 'VIP MATCHDAY',
              img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
              desc: 'Michelin-star private dining, direct pitch balcony, and dedicated butler concierge.',
            },
            {
              title: 'Global Youth Academy',
              category: 'TALENT PIPELINE',
              img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
              desc: 'State-of-the-art training facilities developing tomorrow’s Ballon d’Or contenders.',
            },
            {
              title: 'Black Diamond Pass',
              category: 'CLUB MEMBERSHIP',
              img: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?auto=format&fit=crop&w=800&q=80',
              desc: 'Lifetime access to away fixtures, private jet charters, and direct board meet-and-greets.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: 'VIEW', isHovered: true, variant: 'card' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-gold/20 hover:border-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(200,169,107,0.25)] flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-obsidian/80 border border-gold/30 rounded-full text-[10px] font-bold text-gold tracking-widest uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-xl text-ivory font-bold group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory-muted leading-relaxed font-sans">{item.desc}</p>
                <button
                  onClick={() => {
                    luxuryAudio.playClick();
                    onNavigate('/services');
                  }}
                  className="pt-2 text-xs font-bold text-gold uppercase tracking-widest flex items-center group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Explore Offering</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US (THE CHENNI DISTINCTION) */}
      <section className="py-24 bg-obsidian-card relative overflow-hidden border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-2">
            Section 04 // Unrivaled Metrics
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
            THE CHENNI <span className="gold-text-gradient">DISTINCTION.</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-base max-w-xl mx-auto mt-2">
            Empirical proof of athletic greatness, fan devotion, and luxury standard.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: '98.4%', label: 'Home Match Victory Rate', sub: 'Undefeated in 2024/25' },
            { metric: '50,000+', label: 'Global VIP Members', sub: 'Across 42 Nations' },
            { metric: '12', label: 'Continental Trophies', sub: 'European & Asian Cups' },
            { metric: '100%', label: 'Matchday Hospitality', sub: '5-Star Michelin Rating' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-obsidian/70 border border-gold/20 rounded-2xl text-center hover:border-gold transition-all duration-300 group hover:shadow-[0_0_20px_rgba(200,169,107,0.2)]"
            >
              <span className="font-display text-3xl sm:text-5xl text-gold font-bold block mb-2 group-hover:scale-105 transition-transform">
                {stat.metric}
              </span>
              <h4 className="text-xs font-bold tracking-wider text-ivory uppercase mb-1">
                {stat.label}
              </h4>
              <span className="text-[10px] text-ivory-muted font-mono block">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FINAL CALL TO ACTION */}
      <section className="relative py-32 bg-obsidian text-center overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-8">
          <ClubEmblem size={80} className="mx-auto" />

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-ivory font-bold uppercase tracking-tight leading-tight">
            BECOME PART OF <br />
            <span className="gold-text-gradient">FOOTBALL ROYALTY.</span>
          </h2>

          <p className="font-serif italic text-ivory-muted text-xl max-w-2xl mx-auto">
            Whether securing private balcony suites or enrolling young athletes in our elite academy, your legacy starts here.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                luxuryAudio.playModalOpen();
                onOpenVIPModal();
              }}
              onMouseEnter={() => {
                luxuryAudio.playHover();
                setCursorState({ text: 'JOIN', isHovered: true, variant: 'button' });
              }}
              onMouseLeave={() => setCursorState({ text: '', isHovered: false, variant: 'default' })}
              className="px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian font-bold text-sm tracking-widest uppercase rounded-xl hover:shadow-[0_0_40px_rgba(200,169,107,0.6)] transition-all transform active:scale-95 cursor-pointer"
            >
              Apply for VIP Membership
            </button>
            <button
              onClick={() => {
                luxuryAudio.playClick();
                onNavigate('/contact');
              }}
              className="px-10 py-5 border border-gold/40 text-ivory hover:text-gold hover:border-gold text-sm font-bold tracking-widest uppercase rounded-xl glass-panel transition-all cursor-pointer"
            >
              Contact Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
