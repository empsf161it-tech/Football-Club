import React, { useEffect, useState } from 'react';
import { ClubEmblem } from './ClubEmblem';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFading(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-obsidian text-ivory transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Pulsing Glow behind Emblem */}
        <div className="absolute w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse" />
        
        <ClubEmblem size={90} className="mb-8" />
        
        <h1 className="font-display tracking-[0.3em] text-xl md:text-2xl text-gold uppercase mb-2">
          Chenni in FC
        </h1>
        <p className="font-serif italic text-ivory-muted text-sm md:text-base tracking-widest mb-8">
          The Majesty of Football
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-obsidian-border relative overflow-hidden rounded-full mb-4">
          <div
            className="h-full bg-gradient-to-r from-gold via-ivory to-gold transition-all duration-150 ease-out shadow-[0_0_10px_#C8A96B]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="font-sans text-xs tracking-widest text-gold/80 font-mono">
          {progress.toString().padStart(3, '0')} %
        </span>
      </div>
    </div>
  );
};
