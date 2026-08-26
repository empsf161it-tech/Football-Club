import React, { useEffect, useState } from 'react';

export interface CursorState {
  text: string;
  isHovered: boolean;
  variant: 'default' | 'button' | 'card' | 'drag' | 'play';
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth lerp loop for outer ring
  useEffect(() => {
    let animId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, pos.x, 0.15),
        y: lerp(prev.y, pos.y, 0.15),
      }));
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  const isExpanded = cursorState.isHovered || cursorState.text.length > 0;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Inner Dot */}
      <div
        className="fixed w-3 h-3 bg-gold rounded-full transition-transform duration-100 ease-out shadow-[0_0_10px_#C8A96B]"
        style={{
          transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0) scale(${isExpanded ? 0 : 1})`,
        }}
      />

      {/* Outer Trailing Ring */}
      <div
        className={`fixed flex items-center justify-center rounded-full border transition-all duration-300 ease-out backdrop-blur-[2px] ${
          isExpanded
            ? 'w-20 h-20 border-gold bg-gold/15 shadow-[0_0_25px_rgba(200,169,107,0.3)]'
            : 'w-10 h-10 border-gold/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isExpanded ? 40 : 20)}px, ${
            trailingPos.y - (isExpanded ? 40 : 20)
          }px, 0)`,
        }}
      >
        {cursorState.text && (
          <span className="text-[10px] font-bold tracking-widest text-gold uppercase animate-fade-in text-center px-1">
            {cursorState.text}
          </span>
        )}
      </div>
    </div>
  );
};
