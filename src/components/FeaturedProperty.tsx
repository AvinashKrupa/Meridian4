import { useState } from 'react';
import { MapPin, Building2, Maximize, Clock, CheckCircle2, ArrowRight, BedDouble, Calendar, Eye, Home, Trees, Phone } from 'lucide-react';
import { premiumProperty, landProperty } from '@/data/properties';

interface FeaturedPropertyProps {
  onViewDetails: (slug: string) => void;
  onBookVisit: (slug: string) => void;
}

type Tab = 'rental' | 'land';

export default function FeaturedProperty({ onViewDetails, onBookVisit }: FeaturedPropertyProps) {
  const [tab, setTab] = useState<Tab>('rental');

  const p = tab === 'rental' ? premiumProperty : landProperty;
  const isLand = tab === 'land';

  return (
    <section id="featured" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label mb-3">Featured Property</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">
            A Signature Listing
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Handpicked from our portfolio — exceptional residences and land investments that define premium living.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl bg-white shadow-luxury p-1.5 gap-1">
            <button
              onClick={() => setTab('rental')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm font-semibold transition-all ${
                tab === 'rental' ? 'bg-navy text-white shadow-md' : 'text-gray-500 hover:text-navy'
              }`}
            >
              <Home size={16} /> Rental Homes
            </button>
            <button
              onClick={() => setTab('land')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl text-sm font-semibold transition-all ${
                tab === 'land' ? 'bg-navy text-white shadow-md' : 'text-gray-500 hover:text-navy'
              }`}
            >
              <Trees size={16} /> Lands
            </button>
          </div>
        </div>

        {/* Premium property card */}
        <div
          onClick={() => onViewDetails(p.slug)}
          className="card-luxury overflow-hidden group cursor-pointer grid lg:grid-cols-2"
        >
          {/* Image side */}
          <div className="relative img-zoom-wrap h-72 lg:h-auto min-h-[420px]">
            <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent lg:bg-gradient-to-r" />
            <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full text-xs font-semibold tag-premium">
              {p.tag}
            </span>
            <div className="absolute bottom-5 left-5 right-5 lg:hidden">
              <p className="text-white/80 text-xs flex items-center gap-1">
                <MapPin size={12} /> {isLand ? `${p.address.city}, ${p.address.state}` : `${p.address.city}, ${p.address.state}`}
              </p>
              <p className="text-white font-display text-2xl">{p.title}</p>
            </div>
          </div>

          {/* Content side */}
          <div className="p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="hidden lg:flex items-center gap-2 text-sm text-gray-500 mb-3">
                <MapPin size={15} className="text-gold-dark" />
                {isLand ? `${p.address.line1}, ${p.address.line2}, ${p.address.city}, ${p.address.state}` : `${p.address.line1}, ${p.address.city}, ${p.address.state}`}
              </div>
              <h3 className="font-display text-3xl lg:text-4xl text-navy mb-3 hidden lg:block">{p.title}</h3>

              {isLand ? (
                <p className="text-gray-600 flex items-center gap-2 mb-5">
                  <Trees size={15} /> <span className="font-semibold text-navy">{p.propertyType}</span>
                </p>
              ) : (
                <p className="text-gray-600 flex items-center gap-2 mb-5">
                  <Building2 size={15} /> by <span className="font-semibold text-navy">{p.builder}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm">{p.propertyType}</span>
                </p>
              )}

              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {isLand ? p.overview.split('\n')[0] : p.overview}
              </p>

              {/* Quick stats */}
              {isLand ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <Stat icon={Trees} label="Type" value="Residential" />
                  <Stat icon={Maximize} label="Area" value="40 × 28 ft" />
                  <Stat icon={CheckCircle2} label="Status" value="Ready" />
                  <Stat icon={Clock} label="Khata" value="E-Khata" />
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <Stat icon={BedDouble} label="Config" value={p.bhk} />
                  <Stat icon={Maximize} label="Area" value={p.area.builtUpArea} />
                  <Stat icon={Clock} label="Possession" value={p.availability.possessionDate} />
                  <Stat icon={CheckCircle2} label="Status" value={p.status} />
                </div>
              )}
            </div>

            {/* Price + actions */}
            <div>
              <div className="flex items-end justify-between mb-5 pt-5 border-t border-gray-100">
                {isLand ? (
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Price</p>
                    <a
                      href={`tel:${p.contactPhone.replace(/\s/g, '')}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-display text-2xl lg:text-3xl text-gold-dark hover:text-gold transition-colors flex items-center gap-2"
                    >
                      <Phone size={20} /> Contact for Price
                    </a>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Starting Price</p>
                    <p className="font-display text-3xl text-navy">{p.price.startingPrice}</p>
                    <p className="text-xs text-gray-500">{p.price.pricePerSqft}</p>
                  </div>
                )}
                <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {isLand ? 'DC Converted' : 'RERA Verified'}
                </span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); onViewDetails(p.slug); }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  <Eye size={16} /> View Details <ArrowRight size={15} className="hidden sm:inline" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onBookVisit(p.slug); }}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gold-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Calendar size={16} /> Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div>
      <Icon size={16} className="text-gold-dark mb-1" />
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}
