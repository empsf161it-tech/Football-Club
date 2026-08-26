import React from 'react';

interface ClubEmblemProps {
  className?: string;
  size?: number;
}

export const ClubEmblem: React.FC<ClubEmblemProps> = ({ className = '', size = 40 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(200,169,107,0.4)] transition-transform duration-500 hover:scale-105"
      >
        {/* Outer Shield Border */}
        <path
          d="M50 5 L88 22 V52 C88 74 50 95 50 95 C50 95 12 74 12 52 V22 L50 5 Z"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          fill="rgba(10, 10, 10, 0.85)"
        />
        {/* Inner Shield Accent */}
        <path
          d="M50 12 L81 26 V50 C81 68 50 86 50 86 C50 86 19 68 19 50 V26 L50 12 Z"
          stroke="url(#goldGradientSubtle)"
          strokeWidth="1"
          fill="none"
        />
        {/* Crown Symbol */}
        <path
          d="M32 40 L40 50 L50 35 L60 50 L68 40 L65 58 H35 L32 40 Z"
          fill="url(#goldGradient)"
        />
        {/* FC Monogram / Football Motif */}
        <circle cx="50" cy="68" r="7" stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" />
        <path d="M47 68 H53 M50 65 V71" stroke="#C8A96B" strokeWidth="1" />
        {/* Golden Star Above */}
        <polygon
          points="50,15 52,20 57,20 53,23 55,28 50,25 45,28 47,23 43,20 48,20"
          fill="#E5D0A1"
        />

        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A96B" />
            <stop offset="50%" stopColor="#F5F1E8" />
            <stop offset="100%" stopColor="#8F7238" />
          </linearGradient>
          <linearGradient id="goldGradientSubtle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8A96B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8F7238" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
