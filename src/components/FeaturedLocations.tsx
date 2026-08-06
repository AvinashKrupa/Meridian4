import { Sparkles } from 'lucide-react';

export default function FeaturedLocations() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Premium Locations</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Featured <span className="text-gold-gradient italic">Neighborhoods</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore Bengaluru's most sought-after residential micro-markets with detailed insights.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-navy via-navy/95 to-navy/90 px-6 py-20 sm:py-28 text-center">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212,175,55,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(212,175,55,0.3) 0%, transparent 50%)' }} />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
              <Sparkles size={14} className="text-gold-dark" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-dark">Coming Soon</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Something <span className="text-gold-gradient italic">Extraordinary</span> Is On The Way
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              We're curating Bengaluru's most exclusive neighborhoods with deep market intelligence,
              investment scores, and handpicked listings. Stay tuned — the wait will be worth it.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-sm">
              <span className="h-px w-12 bg-gold/40" />
              <span className="tracking-widest uppercase text-xs">Launching Shortly</span>
              <span className="h-px w-12 bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
