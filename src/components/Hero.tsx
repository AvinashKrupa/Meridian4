import { ArrowRight, Calendar, Search } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onBookSiteVisit: () => void;
}

export default function Hero({ onExplore, onBookSiteVisit }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      {/* Hero image */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center"
        style={{ backgroundImage: "url('/images/hero/Hero.png')" }}
      />
      {/* Subtle gradient at bottom for CTA readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

      {/* CTA bar pinned to bottom */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onExplore}
          className="btn-gold flex items-center gap-2 group w-full sm:w-auto justify-center"
        >
          <Search size={18} />
          Explore Listings
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={onBookSiteVisit}
          className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
        >
          <Calendar size={18} />
          Book Site Visit
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-light to-transparent" />
      </div>
    </section>
  );
}
