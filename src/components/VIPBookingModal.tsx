import React, { useState } from 'react';
import { X, Calendar, Users, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { luxuryAudio } from '../utils/sound';

interface VIPBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VIPBookingModal: React.FC<VIPBookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    match: 'vs Real Madrid — Champions League Quarter-Final',
    guests: '2 Guests',
    suiteType: 'Presidential Gold Box',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    luxuryAudio.playClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-obsidian-card border border-gold/30 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => {
            luxuryAudio.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 text-ivory-muted hover:text-gold transition-colors p-2 rounded-full hover:bg-gold/10"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-gold mb-4 animate-bounce" />
            <h3 className="font-display text-2xl md:text-3xl text-ivory mb-2">
              VIP Reservation Requested
            </h3>
            <p className="font-serif italic text-ivory-muted text-base max-w-md">
              Thank you, {formData.name || 'esteemed guest'}. Our Presidential Concierge will contact you within 2 hours to confirm your suite access.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                Presidential Hospitality
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-ivory mb-6">
              Reserve VIP Suite Pass
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-ivory-muted uppercase mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Lordship Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-obsidian border border-gold/20 rounded-lg px-4 py-3 text-ivory placeholder:text-ivory-muted/40 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-ivory-muted uppercase mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vip@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-obsidian border border-gold/20 rounded-lg px-4 py-3 text-ivory placeholder:text-ivory-muted/40 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-ivory-muted uppercase mb-1">
                    Match Fixture
                  </label>
                  <div className="relative">
                    <select
                      value={formData.match}
                      onChange={(e) => setFormData({ ...formData, match: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option>vs Real Madrid — Champions League QF</option>
                      <option>vs Paris SG — International Super Cup</option>
                      <option>vs Bayern Munich — Presidential Derby</option>
                      <option>vs Manchester City — Global Cup Final</option>
                    </select>
                    <Calendar className="absolute right-3 top-3.5 w-4 h-4 text-gold/60 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider text-ivory-muted uppercase mb-1">
                    Guests & Suite Tier
                  </label>
                  <div className="relative">
                    <select
                      value={formData.suiteType}
                      onChange={(e) => setFormData({ ...formData, suiteType: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-lg px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option>Presidential Gold Box (8 Guests)</option>
                      <option>Royal Balcony Suite (4 Guests)</option>
                      <option>Black Diamond Executive Suite (12 Guests)</option>
                    </select>
                    <Users className="absolute right-3 top-3.5 w-4 h-4 text-gold/60 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider text-ivory-muted uppercase mb-1">
                  Concierge & Dietary Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Helicopter transfer, Michelin private chef, rare vintage champagne selections..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-obsidian border border-gold/20 rounded-lg px-4 py-3 text-ivory placeholder:text-ivory-muted/40 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div className="flex items-center space-x-2 text-xs text-ivory-muted pt-1">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Encrypted 256-bit VIP booking protocol</span>
              </div>

              <button
                type="submit"
                onMouseEnter={() => luxuryAudio.playHover()}
                className="w-full py-4 mt-2 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian font-bold tracking-widest uppercase text-sm rounded-lg hover:shadow-[0_0_30px_rgba(200,169,107,0.5)] transition-all duration-300 transform active:scale-95"
              >
                Confirm VIP Reservation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
