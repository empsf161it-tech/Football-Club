import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';

export const MatchTicker: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { ...prev, days: prev.days > 0 ? prev.days - 1 : 0, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-obsidian-card/90 border-y border-gold/20 backdrop-blur-md py-3 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory">
        <div className="flex items-center space-x-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-gold font-bold tracking-widest uppercase flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5" /> Next Blockbuster Fixture
          </span>
          <span className="hidden sm:inline text-ivory-muted">|</span>
          <span className="font-sans font-semibold text-ivory">
            CHENNI IN FC <span className="text-gold">VS</span> REAL MADRID
          </span>
        </div>

        {/* Timer Numbers */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="bg-obsidian border border-gold/30 px-2 py-1 rounded text-gold font-bold">
              {timeLeft.days.toString().padStart(2, '0')}
            </span>
            <span className="text-ivory-muted text-[10px]">DAYS</span>
          </div>
          <span>:</span>
          <div className="flex items-center space-x-1">
            <span className="bg-obsidian border border-gold/30 px-2 py-1 rounded text-gold font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="text-ivory-muted text-[10px]">HRS</span>
          </div>
          <span>:</span>
          <div className="flex items-center space-x-1">
            <span className="bg-obsidian border border-gold/30 px-2 py-1 rounded text-gold font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-ivory-muted text-[10px]">MIN</span>
          </div>
          <span>:</span>
          <div className="flex items-center space-x-1">
            <span className="bg-obsidian border border-gold/30 px-2 py-1 rounded text-gold font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-ivory-muted text-[10px]">SEC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
