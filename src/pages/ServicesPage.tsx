import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from '../components/CustomCursor';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenVIPModal: () => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenVIPModal }) => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const services = [
    {
      num: '01',
      title: 'Elite Youth Academy Enrollment',
      desc: 'Comprehensive athletic, academic, and tactical development for young prodigies aged 8–18 under UEFA Pro certified coaches.',
      tag: 'ATHLETIC DEVELOPMENT',
    },
    {
      num: '02',
      title: 'Presidential & Corporate Box Suites',
      desc: 'Private 12-person pitch balcony suites with Michelin-star catering, private sommelier, and dedicated security concierges.',
      tag: 'VIP HOSPITALITY',
    },
    {
      num: '03',
      title: 'Global Talent Scouting & Data Analytics',
      desc: 'Proprietary AI telemetry and biomechanical video analytics used by world-class clubs to identify elite sporting prospects.',
      tag: 'SPORT SCIENCE',
    },
    {
      num: '04',
      title: 'Royal Crest Stadium Event Hosting',
      desc: 'Transforming our 75,000-seat arena into a luxury venue for global concerts, international summits, and private galas.',
      tag: 'VENUE LEASING',
    },
    {
      num: '05',
      title: 'VIP Matchday Aviation & Concierge',
      desc: 'Seamless door-to-stadium helicopter transfers, armored chauffeured transport, and luxury hotel penthouse bookings.',
      tag: 'CONCIERGE',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'DISCOVER',
      subtitle: 'Needs Assessment & VIP Audit',
      desc: 'We conduct a confidential interview to assess your hospitality requirements, match preferences, or youth scouting criteria.',
    },
    {
      step: '02',
      title: 'DEFINE',
      subtitle: 'Bespoke Package Curation',
      desc: 'Our Presidential Concierge structures a customized proposal tailored with private suite options or tailored academy blueprints.',
    },
    {
      step: '03',
      title: 'DESIGN',
      subtitle: 'Itinerary & Menu Tailoring',
      desc: 'Selecting culinary menus, private champagne vintages, helicopter transit slots, and personalized jersey printing.',
    },
    {
      step: '04',
      title: 'DEVELOP',
      subtitle: 'Operational Execution',
      desc: 'Our security and butler staff execute seamless logistics 48 hours prior to matchday or training camp arrival.',
    },
    {
      step: '05',
      title: 'DELIVER',
      subtitle: 'Unforgettable Matchday Supremacy',
      desc: 'Experience pure luxury, flawless field sightlines, and presidential hospitality from arrival to departure.',
    },
  ];

  return (
    <div className="w-full pt-28">
      {/* SECTION 1: SERVICES HERO */}
      <section className="relative py-20 md:py-32 bg-obsidian border-b border-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Royal Hospitality & Football Services</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-ivory uppercase tracking-tight">
            WORLD-CLASS SERVICES <br />
            <span className="gold-text-gradient">WITHOUT COMPROMISE.</span>
          </h1>

          <p className="font-serif italic text-ivory-muted text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Tailored offerings engineered for ultra-high-net-worth patrons, aspiring international athletes, and global corporate partners.
          </p>
        </div>
      </section>

      {/* SECTION 2: SERVICE OVERVIEW EDITORIAL GRID */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 02 // Offerings Index
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              EDITORIAL <span className="gold-text-gradient">SERVICE CATALOG.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => luxuryAudio.playHover()}
                className="p-8 bg-obsidian border border-gold/15 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-gold transition-all duration-300 group hover:shadow-[0_0_25px_rgba(200,169,107,0.15)]"
              >
                <div className="flex items-start space-x-6">
                  <span className="font-display text-4xl font-bold text-gold/40 group-hover:text-gold transition-colors">
                    {item.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-gold uppercase block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-2xl text-ivory font-bold group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ivory-muted max-w-2xl mt-2 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    luxuryAudio.playModalOpen();
                    onOpenVIPModal();
                  }}
                  className="px-6 py-3 border border-gold/30 rounded-xl text-gold font-bold text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all whitespace-nowrap cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED SERVICE SHOWCASE */}
      <section className="py-24 bg-obsidian border-b border-gold/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
                Section 03 // Flagship Showcase
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase leading-tight">
                THE PRESIDENTIAL <span className="gold-text-gradient">LOUNGE EXPERIENCE.</span>
              </h2>
              <p className="font-serif italic text-ivory-muted text-lg leading-relaxed">
                Step into our exclusive stadium wing designed for heads of state, celebrities, and global club executives. Indulge in private viewing balconies with heated leather seating and dedicated Michelin service.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Private Security & Direct Underground Helipad Transit',
                  'Customized Multi-Course Tasting Menus by Master Chefs',
                  'Guaranteed Access to European Finals & Away Derby Matches',
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm text-ivory">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    luxuryAudio.playModalOpen();
                    onOpenVIPModal();
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-obsidian font-bold text-xs tracking-widest uppercase rounded-xl hover:shadow-[0_0_30px_rgba(200,169,107,0.4)] transition-all cursor-pointer"
                >
                  Book Presidential Tour
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-gold/30 shadow-2xl img-zoom-container relative">
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80"
                  alt="Presidential Suite Balcony"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />

                {/* Hotspot Badge */}
                <div className="absolute top-1/3 left-1/3 p-3 bg-obsidian/90 border border-gold rounded-xl backdrop-blur-md text-xs font-mono text-gold flex items-center space-x-2 shadow-lg animate-pulse">
                  <div className="w-2 h-2 rounded-full bg-gold animate-ping" />
                  <span>VIP Balcony Sightline 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 5-STEP CHENNI PROCESS */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 04 // Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              THE 5-STEP <span className="gold-text-gradient">SERVICE JOURNEY.</span>
            </h2>
            <p className="font-serif italic text-ivory-muted text-base">
              Click through our precision workflow from first consultation to flawless matchday execution.
            </p>
          </div>

          {/* Interactive Step Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {processSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  luxuryAudio.playClick();
                  setActiveProcessStep(idx);
                }}
                className={`px-5 py-3 rounded-xl border text-xs font-bold tracking-widest transition-all cursor-pointer ${
                  activeProcessStep === idx
                    ? 'bg-gold border-gold text-obsidian shadow-[0_0_20px_rgba(200,169,107,0.4)]'
                    : 'bg-obsidian border-gold/20 text-ivory-muted hover:text-ivory'
                }`}
              >
                {s.step}. {s.title}
              </button>
            ))}
          </div>

          {/* Active Step Display Panel */}
          <div className="p-8 md:p-12 bg-obsidian border border-gold/30 rounded-3xl max-w-4xl mx-auto space-y-4 text-center shadow-2xl animate-fade-in">
            <span className="font-mono text-sm font-bold text-gold tracking-widest uppercase">
              Stage {processSteps[activeProcessStep].step} — {processSteps[activeProcessStep].subtitle}
            </span>
            <h3 className="font-display text-3xl text-ivory font-bold">
              {processSteps[activeProcessStep].title}
            </h3>
            <p className="text-base text-ivory-muted max-w-2xl mx-auto font-serif italic leading-relaxed">
              {processSteps[activeProcessStep].desc}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICE CTA & INQUIRIES */}
      <section className="py-24 bg-obsidian text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
            Section 05 // Direct Consultation
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-ivory font-bold uppercase">
            READY FOR THE <span className="gold-text-gradient">ROYAL TREATMENT?</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-lg">
            Connect with our Chief Concierge to arrange custom stadium suites or academy trials.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                luxuryAudio.playClick();
                onNavigate('/contact');
              }}
              className="px-8 py-4 bg-gold hover:bg-gold-light text-obsidian font-bold text-xs tracking-widest uppercase rounded-xl transition-all cursor-pointer"
            >
              Start Custom Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
