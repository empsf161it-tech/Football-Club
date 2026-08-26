import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { ClubEmblem } from '../components/ClubEmblem';
import { luxuryAudio } from '../utils/sound';
import type { CursorState } from '../components/CustomCursor';

interface ContactPageProps {
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState(25000);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: 'VIP Matchday Suite',
    message: '',
  });

  const [clocks, setClocks] = useState({
    chennai: '',
    london: '',
    madrid: '',
    dubai: '',
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setClocks({
        chennai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        madrid: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit' }),
        dubai: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    luxuryAudio.playClick();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        type: 'VIP Matchday Suite',
        message: '',
      });
    }, 5000);
  };

  return (
    <div className="w-full pt-28">
      {/* SECTION 1: CONTACT HERO */}
      <section className="relative py-20 md:py-32 bg-obsidian border-b border-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Presidential Concierge Hotline</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-ivory uppercase tracking-tight">
            INITIATE YOUR <br />
            <span className="gold-text-gradient">CONNECTION.</span>
          </h1>

          <p className="font-serif italic text-ivory-muted text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Our Presidential Concierge desk is at your disposal 24/7 for matchday hospitality, private suites, and global partnerships.
          </p>

          {/* Live Global Office Clocks */}
          <div className="pt-8 flex flex-wrap justify-center gap-6 text-xs font-mono text-ivory-muted">
            <div className="flex items-center space-x-2 px-4 py-2 bg-obsidian-card border border-gold/20 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>CHENNAI HQ: <strong className="text-gold">{clocks.chennai}</strong></span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-obsidian-card border border-gold/20 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>LONDON: <strong className="text-gold">{clocks.london}</strong></span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-obsidian-card border border-gold/20 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>MADRID: <strong className="text-gold">{clocks.madrid}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: LET'S START A CONVERSATION */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
                Section 02 // Direct Inquiry
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase leading-tight">
                LET'S CRAFT YOUR <span className="gold-text-gradient">LEGACY.</span>
              </h2>
              <p className="font-serif italic text-ivory-muted text-base leading-relaxed">
                Whether seeking custom corporate seat leases or academy trials, our team handles all communications with absolute discretion.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4 p-4 bg-obsidian border border-gold/15 rounded-xl">
                  <div className="p-3 bg-gold/10 text-gold rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase block">
                      Direct VIP Hotline
                    </span>
                    <span className="text-sm font-bold text-ivory">+44 (0) 20 7946 0912</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-obsidian border border-gold/15 rounded-xl">
                  <div className="p-3 bg-gold/10 text-gold rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase block">
                      Concierge Email
                    </span>
                    <span className="text-sm font-bold text-ivory">concierge@chenniinfc.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Crest Card */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="p-10 rounded-3xl glass-panel border border-gold/30 shadow-2xl text-center w-full max-w-md space-y-6">
                <ClubEmblem size={120} className="mx-auto" />
                <h3 className="font-display text-2xl text-ivory font-bold">CHENNI IN FOOTBALL CLUB</h3>
                <p className="text-xs text-ivory-muted font-mono">
                  Royal Crest Arena • Boat Club Road, Chennai • India
                </p>
                <div className="p-3 bg-gold/10 border border-gold/30 rounded-xl text-gold text-xs font-bold tracking-widest uppercase">
                  Encrypted VIP Protocol Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE LUXURY CONTACT FORM */}
      <section className="py-24 bg-obsidian border-b border-gold/15 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 03 // Inquiry Form
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              THE VIP <span className="gold-text-gradient">DOSSIER.</span>
            </h2>
          </div>

          <div className="bg-obsidian-card border border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-gold mx-auto animate-bounce" />
                <h3 className="font-display text-3xl text-ivory font-bold">Dossier Received</h3>
                <p className="font-serif italic text-ivory-muted text-base max-w-md mx-auto">
                  Thank you, {formData.name || 'valued guest'}. A senior member of our Presidential Desk will reach out to you within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-ivory-muted uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory-muted/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-ivory-muted uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="vance@holdings.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory-muted/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-ivory-muted uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2831"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory-muted/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-ivory-muted uppercase mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-obsidian border border-gold/20 rounded-xl px-4 py-3.5 text-ivory text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option>VIP Matchday Suite Box</option>
                      <option>Elite Youth Academy Trial</option>
                      <option>Global Corporate Partnership</option>
                      <option>Stadium Event Leasing</option>
                      <option>Media & Press Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold tracking-wider text-ivory-muted uppercase">
                      Estimated Investment Budget
                    </label>
                    <span className="text-sm font-bold text-gold font-mono">
                      €{budget.toLocaleString()} {budget >= 100000 ? '+' : ''}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full accent-gold bg-obsidian h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-ivory-muted uppercase mb-2">
                    Dossier Message & Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Details regarding your preferred match fixtures, helicopter logistics, or corporate delegation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-obsidian border border-gold/20 rounded-xl px-4 py-3.5 text-ivory text-sm placeholder:text-ivory-muted/30 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => luxuryAudio.playHover()}
                  className="w-full py-5 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-obsidian font-bold tracking-widest uppercase text-sm rounded-xl hover:shadow-[0_0_35px_rgba(200,169,107,0.5)] transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Confidential Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: GLOBAL HEADQUARTERS & TOUCHPOINTS */}
      <section className="py-24 bg-obsidian-card border-b border-gold/15 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 space-y-2">
            <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block">
              Section 04 // Global Touchpoints
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
              OUR WORLDWIDE <span className="gold-text-gradient">OFFICES.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: 'CHENNAI, INDIA',
                title: 'Global Headquarters & Stadium',
                addr: 'Royal Crest Arena, Boat Club Road, Chennai 600028',
                phone: '+91 44 2800 1924',
              },
              {
                city: 'LONDON, UK',
                title: 'European Commercial Office',
                addr: 'Mayfair Tower, Berkeley Square, London W1J 6BR',
                phone: '+44 20 7946 0912',
              },
              {
                city: 'MADRID, SPAIN',
                title: 'International Training Complex',
                addr: 'Valdebebas Sports Hub, 28055 Madrid',
                phone: '+34 91 398 4300',
              },
            ].map((office, idx) => (
              <div key={idx} className="p-6 bg-obsidian border border-gold/20 rounded-2xl space-y-3">
                <span className="text-[10px] font-bold text-gold tracking-widest uppercase block">
                  {office.city}
                </span>
                <h3 className="font-display text-xl text-ivory font-bold">{office.title}</h3>
                <p className="text-xs text-ivory-muted font-mono">{office.addr}</p>
                <span className="text-xs text-gold font-mono block pt-2">{office.phone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CINEMATIC SUMMARY */}
      <section className="py-24 bg-obsidian text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h2 className="font-display text-3xl sm:text-5xl text-ivory font-bold uppercase">
            WE LOOK FORWARD TO <span className="gold-text-gradient">HOSTING YOU.</span>
          </h2>
          <p className="font-serif italic text-ivory-muted text-base max-w-lg mx-auto">
            Chenni in FC represents standard-setting athletic glory and unmatched presidential hospitality.
          </p>
        </div>
      </section>
    </div>
  );
};
