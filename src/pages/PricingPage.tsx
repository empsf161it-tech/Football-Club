import React, { useState } from 'react';
import { Check, Crown } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from '../components/CustomCursor';

interface PricingPageProps {
  onNavigate: (path: string) => void;
  onOpenVIPModal: () => void;
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenVIPModal }) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'lifetime'>('annual');

  const packages = [
    {
      name: 'Essential Pass',
      badge: 'SILVER CREST',
      priceAnnual: '€2,500',
      priceLifetime: '€18,000',
      desc: 'Ideal for passionate supporters seeking guaranteed matchday entry and merchandise privileges.',
      features: [
        'Guaranteed Premier Category A League Seat',
        'Official Club Kit & Merch Pass',
        '10% Discount on Fan Dining',
        'Priority Ticket Access for Cup Matches',
        'Digital Member Portal Access',
      ],
      highlighted: false,
      buttonText: 'Select Silver Crest',
    },
    {
      name: 'Signature Pass',
      badge: 'RECOMMENDED • GOLD CREST',
      priceAnnual: '€8,500',
      priceLifetime: '€65,000',
      desc: 'Our flagship VIP tier providing executive club lounge access, champagne bar, and luxury hospitality.',
      features: [
        'VIP Club Lounge Access & Premium Sightline',
        'Michelin-Star Pre-Match Buffet & Sommelier',
        'Autographed First-Team Collector Jersey',
        'Complimentary VIP Stadium Parking',
        'Invitation to Annual Players Gala Dinner',
        'Dedicated Presidential Concierge Line',
      ],
      highlighted: true,
      buttonText: 'Acquire Signature Pass',
    },
    {
      name: 'Elite Diamond',
      badge: 'BLACK DIAMOND UNLIMITED',
      priceAnnual: '€25,000',
      priceLifetime: '€180,000',
      desc: 'The ultimate royal experience with private box suite ownership, away derby travel, and board access.',
      features: [
        'Private 12-Person Presidential Suite Box',
        'Unlimited Helipad & Chauffeur Transit',
        'Travel with First Team on Away European Fixtures',
        'Direct Meet-and-Greet with Head Coach & Players',
        'Private Stadium Field Access Post-Match',
        'Bespoke Gold-Plated Membership Crest',
      ],
      highlighted: false,
      buttonText: 'Inquire Elite Tier',
    },
  ];

  return (
    <div className="w-full pt-28">
      {/* SECTION 1: PRICING HERO */}
      <section className="relative py-20 md:py-32 bg-obsidian border-b border-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
            <Crown className="w-3.5 h-3.5" />
            <span>Exclusive Membership Packages</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-ivory uppercase tracking-tight">
            INVEST IN SPORTING <br />
            <span className="gold-text-gradient">ROYALTY & PRIVILEGE.</span>
          </h1>

          <p className="font-serif italic text-ivory-muted text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Choose your level of matchday immersion, presidential lounge access, and international perks.
          </p>

          {/* Billing Cycle Selector Toggle */}
          <div className="pt-6 flex justify-center items-center space-x-4">
            <span
              className={`text-xs font-bold tracking-widest uppercase ${
                billingCycle === 'annual' ? 'text-gold' : 'text-ivory-muted'
              }`}
            >
              Annual Pass
            </span>
            <button
              onClick={() => {
                luxuryAudio.playClick();
                setBillingCycle(billingCycle === 'annual' ? 'lifetime' : 'annual');
              }}
              className="w-14 h-7 bg-obsidian-card border border-gold/40 rounded-full p-1 transition-colors relative cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gold transition-transform ${
                  billingCycle === 'lifetime' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-xs font-bold tracking-widest uppercase flex items-center space-x-1 ${
                billingCycle === 'lifetime' ? 'text-gold' : 'text-ivory-muted'
              }`}
            >
              <span>Lifetime Legacy</span>
              <span className="text-[9px] px-2 py-0.5 bg-gold/20 text-gold rounded-full border border-gold/30">
                SAVINGS
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING INTRODUCTION */}
      <section className="py-16 bg-obsidian-card border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-2">
            Section 02 // Value Proposition
          </span>
          <h2 className="font-display text-2xl sm:text-4xl text-ivory font-bold uppercase">
            WHY JOIN THE CHENNI <span className="gold-text-gradient">ROYAL CIRCLE?</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-base max-w-2xl mx-auto mt-2">
            Membership goes beyond 90 minutes of football. It is an investment in global networking, private hospitality, and lifetime sporting heritage.
          </p>
        </div>
      </section>

      {/* SECTION 3: PRICING PACKAGES (3 CARDS) */}
      <section className="py-24 bg-obsidian border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-obsidian-card to-obsidian border-2 border-gold shadow-[0_0_40px_rgba(200,169,107,0.3)] transform md:-translate-y-4'
                  : 'bg-obsidian-card border border-gold/20 hover:border-gold/50'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-obsidian text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                  MOST POPULAR LUXURY CHOICE
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-gold uppercase block mb-1">
                    {pkg.badge}
                  </span>
                  <h3 className="font-display text-2xl text-ivory font-bold">{pkg.name}</h3>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-gold">
                    {billingCycle === 'annual' ? pkg.priceAnnual : pkg.priceLifetime}
                  </span>
                  <span className="text-xs text-ivory-muted font-mono">
                    / {billingCycle === 'annual' ? 'year' : 'one-time'}
                  </span>
                </div>

                <p className="text-xs text-ivory-muted leading-relaxed font-sans">{pkg.desc}</p>

                <div className="border-t border-gold/15 pt-6 space-y-3">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-3 text-xs text-ivory">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => {
                    luxuryAudio.playModalOpen();
                    onOpenVIPModal();
                  }}
                  className={`w-full py-4 font-bold text-xs tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian shadow-[0_0_20px_rgba(200,169,107,0.4)] hover:scale-[1.02]'
                      : 'border border-gold/40 text-gold hover:bg-gold hover:text-obsidian'
                  }`}
                >
                  {pkg.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FEATURE COMPARISON MATRIX */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 04 // Feature Breakdown
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              COMPARE TIER <span className="gold-text-gradient">PRIVILEGES.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-ivory border-collapse">
              <thead>
                <tr className="border-b border-gold/30">
                  <th className="py-4 px-6 text-gold font-bold tracking-widest uppercase">Feature / Privilege</th>
                  <th className="py-4 px-6 text-center text-ivory font-bold">Silver Crest</th>
                  <th className="py-4 px-6 text-center text-gold font-bold">Gold Signature</th>
                  <th className="py-4 px-6 text-center text-ivory font-bold">Black Diamond</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                {[
                  { feature: 'Matchday Stadium Entrance', silver: 'Cat A Seat', gold: 'VIP Lounge Seat', elite: 'Private Suite Box' },
                  { feature: 'Michelin Dining & Sommelier', silver: '10% Discount', gold: 'Included', elite: 'Private Chef & Cellar' },
                  { feature: 'Helipad & Chauffeur Transit', silver: '—', gold: 'Discounted', elite: 'Unlimited Helicopter' },
                  { feature: 'Away European Derby Travel', silver: '—', gold: 'Priority Booking', elite: 'Team Private Jet' },
                  { feature: 'Direct Board & Player Access', silver: '—', gold: 'Gala Dinner', elite: 'Direct Access' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gold/5 transition-colors">
                    <td className="py-4 px-6 font-semibold">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-ivory-muted">{row.silver}</td>
                    <td className="py-4 px-6 text-center font-bold text-gold">{row.gold}</td>
                    <td className="py-4 px-6 text-center text-ivory">{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRICING CTA */}
      <section className="py-24 bg-obsidian text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
            Section 05 // Bespoke Corporate Packages
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-ivory font-bold uppercase">
            REQUIRE A CUSTOM <span className="gold-text-gradient">STADIUM DELEGATION?</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-lg">
            We curate tailored corporate sponsorship packages, full stadium takeovers, and international delegation suites.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                luxuryAudio.playClick();
                onNavigate('/contact');
              }}
              className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-obsidian font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg cursor-pointer"
            >
              Contact Corporate Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
