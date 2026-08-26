import React from 'react';
import { Shield, Trophy, Target, Globe, Award } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from '../components/CustomCursor';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenTrophyModal: () => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenTrophyModal }) => {
  return (
    <div className="w-full pt-28">
      {/* SECTION 1: ABOUT HERO */}
      <section className="relative py-20 md:py-32 bg-obsidian border-b border-gold/15 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>Est. 1924 • A Century of Honor</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-ivory uppercase tracking-tight">
            ARCHITECTS OF <br />
            <span className="gold-text-gradient">FOOTBALLING GREATNESS.</span>
          </h1>

          <p className="font-serif italic text-ivory-muted text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            From humble roots in Boat Club Chennai to continental domination, Chenni in FC stands as the benchmark for sporting mastery and presidential hospitality.
          </p>
        </div>
      </section>

      {/* SECTION 2: OUR STORY (TIMELINE) */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 02 // Historical Journey
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              THE CHRONICLES OF <span className="gold-text-gradient">CHENNI.</span>
            </h2>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-gold/20 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {[
              {
                year: '1924',
                title: 'The Royal Founding',
                desc: 'Established by pioneering sporting patrons in Chennai as an invitation-only athletic guild.',
                img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80',
              },
              {
                year: '1965',
                title: 'First National Championship',
                desc: 'Unbeaten domestic campaign marking the era of tactical innovation and physical supremacy.',
                img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
              },
              {
                year: '1999',
                title: 'Continental Glory',
                desc: 'Historic victory in the European Champions Cup final, cementing global stardom.',
                img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
              },
              {
                year: '2024–PRESENT',
                title: 'The Modern Dynasty',
                desc: 'Unveiling the $500M Royal Crest Arena and expanding global youth academy hubs across Europe and Asia.',
                img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
              },
            ].map((node, i) => (
              <div key={i} className="relative group">
                {/* Node Bullet */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-obsidian border-2 border-gold flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-2">
                    <span className="font-mono text-sm font-bold text-gold tracking-widest block">
                      {node.year}
                    </span>
                    <h3 className="font-display text-2xl text-ivory font-bold">{node.title}</h3>
                    <p className="text-sm text-ivory-muted max-w-xl leading-relaxed">{node.desc}</p>
                  </div>
                  <div className="md:col-span-4 rounded-xl overflow-hidden border border-gold/20 img-zoom-container">
                    <img
                      src={node.img}
                      alt={node.title}
                      className="w-full h-36 object-cover filter brightness-90 group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PHILOSOPHY & VALUES */}
      <section className="py-24 bg-obsidian border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 03 // Core Values
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              THE FOUR PILLARS OF <span className="gold-text-gradient">EXCELLENCE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Unyielding Integrity',
                desc: 'Conducting our sporting and business operations with absolute transparency and prestige.',
              },
              {
                icon: Target,
                title: 'Tactical Precision',
                desc: 'Pioneering modern data analytics and high-intensity press philosophy on the pitch.',
              },
              {
                icon: Award,
                title: 'Presidential Luxury',
                desc: 'Delivering 5-star Michelin matchday experiences to our esteemed global patrons.',
              },
              {
                icon: Globe,
                title: 'Global Community',
                desc: 'Investing 15% of annual revenues into grassroots football development globally.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-obsidian-card border border-gold/20 rounded-2xl space-y-4 hover:border-gold transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="p-3 bg-gold/10 text-gold rounded-xl w-fit group-hover:bg-gold group-hover:text-obsidian transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl text-ivory font-bold">{pillar.title}</h3>
                  <p className="text-xs text-ivory-muted leading-relaxed font-sans">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: NUMBERS & ACHIEVEMENTS */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-2">
                Section 04 // Silverware & Legacy
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
                HONORS & <span className="gold-text-gradient">MILESTONES.</span>
              </h2>
            </div>

            <button
              onClick={() => {
                luxuryAudio.playClick();
                onOpenTrophyModal();
              }}
              className="px-6 py-3 bg-gold text-obsidian font-bold text-xs tracking-widest uppercase rounded-lg hover:shadow-[0_0_25px_rgba(200,169,107,0.4)] transition-all cursor-pointer"
            >
              Open Interactive Trophy Cabinet
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { count: '32', label: 'Major Domestic Trophies' },
              { count: '6', label: 'European Champions Cups' },
              { count: '140+', label: 'International Cap Players' },
              { count: '100%', label: 'Grassroots Academy Retention' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 bg-obsidian border border-gold/15 rounded-2xl text-center">
                <span className="font-display text-4xl sm:text-6xl text-gold font-bold block mb-2">
                  {stat.count}
                </span>
                <span className="text-xs font-bold text-ivory uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TEAM / VISION & LEADERSHIP */}
      <section className="py-24 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-2">
            Section 05 // Leadership & Vision
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
            THE MINDS BEHIND <span className="gold-text-gradient">THE CREST.</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-base max-w-xl mx-auto mt-2">
            Guided by visionary sport directors and tacticians of international renown.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sir Alexander Chenni',
              role: 'Executive Chairman',
              img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
              quote: '“We build not just a football club, but a legacy that endures through centuries.”',
            },
            {
              name: 'Mateo De Silva',
              role: 'First Team Head Coach',
              img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
              quote: '“Tactical perfection is non-negotiable. Every match is an artist canvas.”',
            },
            {
              name: 'Lady Victoria Sterling',
              role: 'President of VIP Hospitality',
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
              quote: '“Our guests experience nothing short of royal elegance on matchdays.”',
            },
          ].map((leader, i) => (
            <div
              key={i}
              className="p-6 bg-obsidian-card border border-gold/20 rounded-2xl space-y-4 hover:border-gold transition-all duration-300 group"
            >
              <div className="relative h-72 rounded-xl overflow-hidden img-zoom-container">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h3 className="font-display text-xl text-ivory font-bold">{leader.name}</h3>
                <span className="text-xs font-bold text-gold tracking-widest uppercase block mb-2">
                  {leader.role}
                </span>
                <p className="text-xs text-ivory-muted font-serif italic">{leader.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
