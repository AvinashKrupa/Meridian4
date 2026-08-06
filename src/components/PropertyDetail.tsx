import { useState } from 'react';
import {
  ArrowLeft, MapPin, Building2, Maximize, Clock, CheckCircle2, BedDouble, Bath, Car, Compass,
  Layers, Home, Phone, Calendar, MessageCircle, ChevronLeft, ChevronRight, TrendingUp,
  Percent, BarChart3, School, HeartPulse, Plane, Briefcase, Train, ShoppingBag, ShieldCheck, Dumbbell,
  Waves, Trees, Sparkles, HelpCircle, X,
} from 'lucide-react';
import { properties } from '@/data/properties';
import { locations } from '@/data/locations';

interface PropertyDetailProps {
  propertyId: string;
  onBack: () => void;
  onBookVisit: (id: string) => void;
}

export default function PropertyDetail({ propertyId, onBack, onBookVisit }: PropertyDetailProps) {
  const property = properties.find((p) => p.id === propertyId);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<'gallery' | 'floorplans' | 'amenities' | 'location' | 'investment' | 'faqs'>('gallery');

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-display text-2xl text-navy">Listing not found</p>
        <button onClick={onBack} className="btn-navy mt-4">Back to Projects</button>
      </div>
    );
  }

  const location = locations.find((l) => l.id === property.locationId);
  const faqs = [
    { q: 'What is the booking amount?', a: 'The booking amount is ₹2,00,000, which is adjustable in the total sale price.' },
    { q: 'Are home loans available?', a: 'Yes, we have tie-ups with all major banks including HDFC, ICICI, SBI, and Axis with pre-approved loan facilities.' },
    { q: 'What is the maintenance charge?', a: 'Maintenance charges are ₹4.5 per sq.ft. per month, inclusive of common area upkeep and amenities.' },
    { q: 'Is the project RERA registered?', a: `Yes, this project is RERA registered with ID: ${property.rera}.` },
    { q: 'What is the expected rental yield?', a: `The expected rental yield is ${property.rentalYield}, making it an attractive investment option.` },
  ];

  const nextImg = () => setGalleryIdx((i) => (i + 1) % property.gallery.length);
  const prevImg = () => setGalleryIdx((i) => (i - 1 + property.gallery.length) % property.gallery.length);

  return (
    <div className="pt-20">
      {/* Back bar */}
      <div className="bg-ivory border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-2">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold-dark transition-colors shrink-0">
            <ArrowLeft size={18} /> <span className="hidden sm:inline">Back to Projects</span><span className="sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-2">
            <a href="tel:+918951025158" className="w-10 h-10 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors shrink-0" aria-label="Call">
              <Phone size={16} />
            </a>
            <a href="https://wa.me/918951025158" className="w-10 h-10 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors shrink-0" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <button onClick={() => onBookVisit(property.id)} className="btn-gold text-sm flex items-center gap-2 shrink-0">
              <Calendar size={16} /> <span className="hidden sm:inline">Book Site Visit</span><span className="sm:hidden">Book</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg h-[400px] sm:h-[500px]">
          <img src={property.gallery[galleryIdx]} alt={property.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
          <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Next">
            <ChevronRight size={22} />
          </button>
          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {property.gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === galleryIdx ? 'w-8 bg-gold' : 'w-4 bg-white/50'}`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
          {/* 360 tour placeholder */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass text-xs font-semibold text-navy flex items-center gap-1.5">
            <Sparkles size={13} className="text-gold-dark" /> 360° Virtual Tour
          </div>
        </div>

        {/* Title row */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin size={15} className="text-gold-dark" /> {property.location}, Bengaluru
            </div>
            <h1 className="font-display text-3xl sm:text-4xl text-navy mb-2">{property.name}</h1>
            <p className="text-gray-600 flex items-center gap-2">
              <Building2 size={15} /> by <span className="font-semibold text-navy">{property.builder}</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Starting Price</p>
            <p className="font-display text-4xl text-navy">{property.startingPrice}</p>
            <p className="text-xs text-success font-semibold flex items-center gap-1 justify-end mt-1">
              <CheckCircle2 size={13} /> RERA: {property.rera}
            </p>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 bg-ivory rounded-2xl p-4 sm:p-6">
          <Stat icon={BedDouble} label="Bedrooms" value={`${property.bedrooms} BHK`} />
          <Stat icon={Bath} label="Bathrooms" value={`${property.bathrooms}`} />
          <Stat icon={Car} label="Parking" value={`${property.parkings}`} />
          <Stat icon={Compass} label="Facing" value={property.facing} />
          <Stat icon={Layers} label="Floors" value={`${property.totalFloors}`} />
          <Stat icon={Home} label="Units" value={`${property.totalUnits}`} />
          <Stat icon={Maximize} label="Area" value={property.area.split(' – ')[0]} />
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-8">
          {([
            ['gallery', 'Gallery', <Home size={15} key="g" />],
            ['floorplans', 'Floor Plans', <Maximize size={15} key="f" />],
            ['amenities', 'Amenities', <ShieldCheck size={15} key="a" />],
            ['location', 'Location', <MapPin size={15} key="l" />],
            ['investment', 'Investment', <TrendingUp size={15} key="i" />],
            ['faqs', 'FAQs', <HelpCircle size={15} key="q" />],
          ] as const).map(([key, label, icon]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === key ? 'border-gold text-navy' : 'border-transparent text-gray-500 hover:text-navy'
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === 'gallery' && (
          <div>
            <p className="text-gray-600 mb-6 max-w-3xl">{property.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.gallery.map((img, i) => (
                <div key={i} className="img-zoom-wrap rounded-2xl h-56">
                  <img src={img} alt={`${property.name} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'floorplans' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.floorPlans.map((fp) => (
              <div key={fp.name} className="card-luxury overflow-hidden">
                <div className="img-zoom-wrap h-48">
                  <img src={fp.image} alt={fp.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-navy">{fp.name}</h4>
                  <p className="text-sm text-gray-600">{fp.area}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'amenities' && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {property.amenities.map((a) => (
              <div key={a} className="card-luxury p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-ivory mx-auto mb-3 flex items-center justify-center">
                  <AmenityIcon name={a} />
                </div>
                <p className="text-sm font-medium text-navy">{a}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'location' && location && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Map placeholder */}
            <div className="card-luxury overflow-hidden h-80">
              <div className="relative w-full h-full bg-navy">
                <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url('${location.image}')` }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass rounded-xl px-6 py-4 text-center">
                    <MapPin size={28} className="text-gold-dark mx-auto mb-2" />
                    <p className="font-display text-lg text-navy">{location.name}</p>
                    <p className="text-xs text-gray-600">Interactive Map Integration</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Nearby */}
            <div className="space-y-4">
              <NearbyList icon={Train} title="Metro Stations" items={location.metro} />
              <NearbyList icon={School} title="Nearby Schools" items={location.schools} />
              <NearbyList icon={HeartPulse} title="Hospitals" items={location.hospitals} />
              <NearbyList icon={ShoppingBag} title="Shopping Malls" items={location.malls} />
              <NearbyList icon={Briefcase} title="IT Parks" items={location.itParks} />
              <div className="flex items-center gap-3 p-4 rounded-xl bg-ivory">
                <Plane size={20} className="text-gold-dark" />
                <div>
                  <p className="text-sm font-semibold text-navy">Airport Distance</p>
                  <p className="text-xs text-gray-600">{location.airportDistance} • {location.travelTime}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-4">
                <Percent size={22} className="text-gold-dark" />
                <h4 className="font-display text-xl text-navy">Rental Yield</h4>
              </div>
              <p className="font-display text-4xl text-navy mb-2">{property.rentalYield}</p>
              <p className="text-sm text-gray-600">Expected annual rental return on investment.</p>
              <div className="mt-4 h-3 rounded-full bg-ivory overflow-hidden">
                <div className="h-full bg-gold-gradient rounded-full" style={{ width: `${parseFloat(property.rentalYield) * 18}%` }} />
              </div>
            </div>
            <div className="card-luxury p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 size={22} className="text-gold-dark" />
                <h4 className="font-display text-xl text-navy">Price Appreciation</h4>
              </div>
              <p className="font-display text-4xl text-navy mb-2">{property.appreciation}</p>
              <p className="text-sm text-gray-600">Expected annual capital appreciation.</p>
              <div className="mt-4 h-3 rounded-full bg-ivory overflow-hidden">
                <div className="h-full bg-gold-gradient rounded-full" style={{ width: `${parseFloat(property.appreciation) * 6}%` }} />
              </div>
            </div>
            <div className="card-luxury p-6 md:col-span-2">
              <h4 className="font-display text-xl text-navy mb-4">Why Invest Here?</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {location?.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700">{h}</p>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-700">Strong rental demand from IT professionals</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-success mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-700">Upcoming infrastructure projects boosting value</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="space-y-4 max-w-3xl">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        )}
      </section>

      {/* Sticky enquiry bar */}
      <div className="sticky bottom-0 z-30 glass border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg text-navy">{property.startingPrice}</p>
            <p className="text-xs text-gray-500">Starting price • {property.configuration}</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a href="tel:+918951025158" className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all whitespace-nowrap">
              <Phone size={16} /> <span className="hidden sm:inline">Call</span>
            </a>
            <a href="https://wa.me/918951025158" className="flex items-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all whitespace-nowrap">
              <MessageCircle size={16} /> <span className="hidden sm:inline">WhatsApp</span><span className="sm:hidden">Chat</span>
            </a>
            <button onClick={() => onBookVisit(property.id)} className="btn-gold text-sm flex items-center gap-2 whitespace-nowrap">
              <Calendar size={16} /> <span className="hidden sm:inline">Book Site Visit</span><span className="sm:hidden">Book</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="text-center">
      <Icon size={20} className="text-gold-dark mx-auto mb-1.5" />
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}

function NearbyList({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: string[] }) {
  return (
    <div className="p-4 rounded-xl border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={18} className="text-gold-dark" />
        <h5 className="font-semibold text-navy text-sm">{title}</h5>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-xs text-gray-600 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-gold" /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AmenityIcon({ name }: { name: string }) {
  const n = name.toLowerCase();
  if (n.includes('pool')) return <Waves size={22} className="text-gold-dark" />;
  if (n.includes('gym')) return <Dumbbell size={22} className="text-gold-dark" />;
  if (n.includes('security')) return <ShieldCheck size={22} className="text-gold-dark" />;
  if (n.includes('garden') || n.includes('landscape') || n.includes('jogging') || n.includes('farm')) return <Trees size={22} className="text-gold-dark" />;
  if (n.includes('play')) return <Sparkles size={22} className="text-gold-dark" />;
  return <CheckCircle2 size={22} className="text-gold-dark" />;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-luxury overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <ChevronRight size={18} className={`text-gold-dark transition-transform ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm text-gray-600">{a}</p>}
    </div>
  );
}
