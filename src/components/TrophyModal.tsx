import React from 'react';
import { X, Award, Shield, Crown, Sparkles } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';

interface TrophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trophies = [
  {
    title: 'European Champions Cup',
    count: '6 Titles',
    years: '1978, 1989, 1999, 2012, 2018, 2024',
    desc: 'The pinnacle of continental football supremacy, featuring undefeated home campaigns.',
    icon: Crown,
  },
  {
    title: 'Presidential Super League',
    count: '14 Titles',
    years: '1965, 1970, 1982, 1991, 2004, 2015, 2023, 2025',
    desc: 'Dominance across domestic league football with record goal tallies.',
    icon: Shield,
  },
  {
    title: 'World Club Championship',
    count: '4 Titles',
    years: '1999, 2012, 2019, 2024',
    desc: 'Global honors crowned against South American and Asian champions.',
    icon: Sparkles,
  },
  {
    title: 'Golden Shield Invitational',
    count: '8 Titles',
    years: '1985–2022',
    desc: 'Prestigious invitation-only luxury tournament held in Monte Carlo and Chennai.',
    icon: Award,
  },
];

export const TrophyModal: React.FC<TrophyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-obsidian-card border border-gold/30 rounded-2xl p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            luxuryAudio.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 text-ivory-muted hover:text-gold transition-colors p-2 rounded-full hover:bg-gold/10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase mb-2 block">
            Chenni in FC Honor Roll
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-2">
            The Golden Trophy Cabinet
          </h2>
          <p className="font-serif italic text-ivory-muted text-base">
            A century of uncompromising athletic perfection and silver glory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trophies.map((trophy, idx) => {
            const Icon = trophy.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-obsidian/60 border border-gold/15 rounded-xl hover:border-gold/50 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(200,169,107,0.15)]"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 bg-gold/10 rounded-lg text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-ivory group-hover:text-gold transition-colors">
                      {trophy.title}
                    </h3>
                    <span className="text-xs font-bold text-gold tracking-widest">
                      {trophy.count}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-ivory-muted mb-3 leading-relaxed">
                  {trophy.desc}
                </p>
                <div className="text-[11px] font-mono text-gold/80 border-t border-gold/10 pt-2">
                  Winning Seasons: {trophy.years}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
