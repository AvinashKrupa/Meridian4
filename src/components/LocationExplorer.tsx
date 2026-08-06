import { useState } from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { locations } from '@/data/locations';

interface LocationExplorerProps {
  onSelectLocation: (locationId: string) => void;
}

export default function LocationExplorer({ onSelectLocation }: LocationExplorerProps) {
  const [active, setActive] = useState<string | null>(null);

  const activeLocation = locations.find((l) => l.id === active);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Explore by Location</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Discover Bengaluru's <span className="text-gold-gradient italic">Premium</span> Neighborhoods
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any location hotspot to instantly explore available listings, lifestyle scores,
            and investment potential in that area.
          </p>
        </div>

        {/* Interactive map */}
        <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg bg-navy">
          {/* Map background - stylized Bengaluru */}
          <div
            className="relative w-full aspect-[16/10] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          >
            <div className="absolute inset-0 bg-navy/40" />

            {/* Hotspots */}
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActive(loc.id);
                  onSelectLocation(loc.id);
                }}
                className="absolute group"
                style={{ left: `${loc.mapX}%`, top: `${loc.mapY}%`, transform: 'translate(-50%, -50%)' }}
                aria-label={loc.name}
              >
                {/* Ripple */}
                <span className="absolute inset-0 -m-3 rounded-full bg-gold/40 hotspot-ripple" />
                {/* Dot */}
                <span
                  className={`relative flex items-center justify-center w-4 h-4 rounded-full transition-all duration-300 ${
                    active === loc.id ? 'bg-gold-light scale-150' : 'bg-gold'
                  } ring-4 ring-white/30 group-hover:ring-gold/50`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                {/* Label */}
                <span
                  className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    active === loc.id
                      ? 'bg-gold text-white opacity-100'
                      : 'bg-white/90 text-navy opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {loc.name}
                </span>
              </button>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-navy mb-1">Bengaluru Micro-Markets</p>
              <p className="text-[11px] text-gray-600">Click hotspots to explore</p>
            </div>
          </div>
        </div>

        {/* Active location detail */}
        {activeLocation && (
          <div className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-up">
            <div className="card-luxury p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-gold-dark" />
                <h4 className="font-display text-lg text-navy">{activeLocation.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-4">{activeLocation.description}</p>
              <div className="flex flex-wrap gap-2">
                {activeLocation.highlights.map((h) => (
                  <span key={h} className="px-3 py-1 rounded-full bg-ivory text-xs font-medium text-navy">
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-luxury p-6">
              <h4 className="font-display text-lg text-navy mb-4">Location Scores</h4>
              <div className="space-y-3">
                <ScoreBar label="Lifestyle" value={activeLocation.lifestyleScore} />
                <ScoreBar label="Connectivity" value={activeLocation.connectivityScore} />
                <ScoreBar label="Investment" value={activeLocation.investmentScore} />
              </div>
            </div>
            <div className="card-luxury p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={18} className="text-gold-dark" />
                  <h4 className="font-display text-lg text-navy">Quick Stats</h4>
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Listings</dt>
                    <dd className="font-semibold text-navy">{activeLocation.propertiesCount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Avg. Price</dt>
                    <dd className="font-semibold text-navy">{activeLocation.avgPrice}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Airport</dt>
                    <dd className="font-semibold text-navy">{activeLocation.airportDistance}</dd>
                  </div>
                </dl>
              </div>
              <button
                onClick={() => onSelectLocation(activeLocation.id)}
                className="btn-navy mt-4 w-full text-sm"
              >
                View Listings in {activeLocation.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-navy font-semibold">{value}/100</span>
      </div>
      <div className="h-2 rounded-full bg-ivory overflow-hidden">
        <div
          className="h-full rounded-full bg-gold-gradient transition-all duration-700"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
