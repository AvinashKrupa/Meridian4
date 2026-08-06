import { useState, useEffect } from 'react';
import {
  ArrowLeft, MapPin, Building2, CheckCircle2, Phone, Calendar, MessageCircle,
  ChevronLeft, ChevronRight, School, HeartPulse, Plane, Briefcase, Train,
  ShoppingBag, ShieldCheck, X, Maximize, MapPinned, Award, Eye, Share2,
  Navigation, Clock, TrendingUp, Sparkles, Home, Droplets, Zap, Car, Road,
  Facebook, Twitter, Linkedin, Link2, Mail, Send,
} from 'lucide-react';
import {
  premiumProperty,
  type NearbyPlace,
} from '@/data/properties';

interface PropertyDetailPageProps {
  slug: string;
  onBack: () => void;
  onBookVisit: (id: string) => void;
}

export default function PropertyDetailPage({ slug, onBack, onBookVisit }: PropertyDetailPageProps) {
  const property = premiumProperty.slug === slug ? premiumProperty : undefined;
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [scheduleSubmitted, setScheduleSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'building', label: 'Building' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'location', label: 'Location' },
    { id: 'nearby', label: 'Nearby' },
    { id: 'investment', label: 'Investment' },
    { id: 'contact', label: 'Contact' },
    { id: 'visit', label: 'Site Visit' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-display text-2xl text-navy">Listing not found</p>
        <button onClick={onBack} className="btn-navy mt-4">Back to Home</button>
      </div>
    );
  }

  const heroBadges = ['Ready to Move', 'A Khata', 'Clear Title'];
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.meridian4.com/property/${property.slug}`;
  const shareText = `Check out this property: ${property.title} — ${property.price.startingPrice} at ${property.address.line1}, ${property.address.city}`;

  return (
    <div className="bg-ivory min-h-screen" style={{ paddingTop: '180px' }}>
      {/* ===== Unified sticky action + section nav bar ===== */}
      <div
        className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        style={{ position: 'sticky', top: 0, zIndex: 40 }}
      >
        {/* Top row: back + actions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-2">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold-dark transition-colors shrink-0">
            <ArrowLeft size={18} /> <span className="hidden sm:inline">Back to Home</span><span className="sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-2">
            <button onClick={() => setShareOpen(true)} className="w-9 h-9 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors" aria-label="Share">
              <Share2 size={15} />
            </button>
            <a href={`tel:${property.contact.phone.replace(/\s/g, '')}`} className="w-9 h-9 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors" aria-label="Call">
              <Phone size={15} />
            </a>
            <a href={`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`} className="w-9 h-9 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors" aria-label="WhatsApp">
              <MessageCircle size={15} />
            </a>
            <button onClick={() => onBookVisit(property.slug)} className="btn-gold text-sm flex items-center gap-2 shrink-0">
              <Calendar size={16} /> <span className="hidden sm:inline">Book Site Visit</span><span className="sm:hidden">Book</span>
            </button>
          </div>
        </div>
        {/* Bottom row: section pills */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 flex gap-1 overflow-x-auto scrollbar-hide">
          {navSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              onMouseEnter={() => setActiveSection(s.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeSection === s.id ? 'bg-navy text-white' : 'text-gray-500 hover:text-navy hover:bg-ivory'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Hero Gallery ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-[1fr_340px] gap-4">
          {/* Main image */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-luxury-lg h-[420px] sm:h-[520px] cursor-pointer group"
            onClick={() => setFullscreen(true)}
          >
            <img src={property.images[galleryIdx]} alt={property.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-navy flex items-center gap-1">
                  <CheckCircle2 size={12} className="text-success" /> {badge}
                </span>
              ))}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setFullscreen(true); }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize size={16} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setGalleryIdx((i) => (i - 1 + property.images.length) % property.images.length); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setGalleryIdx((i) => (i + 1) % property.images.length); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Next">
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-4 left-4 glass rounded-full px-3 py-1.5 text-xs font-semibold text-navy flex items-center gap-1.5">
              <Eye size={13} /> {galleryIdx + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIdx(i)}
                className={`relative rounded-2xl overflow-hidden h-24 lg:h-[120px] transition-all ${
                  i === galleryIdx ? 'ring-2 ring-gold shadow-gold' : 'ring-1 ring-gray-200 hover:ring-gold/50'
                }`}
              >
                <img src={img} alt={`${property.title} ${i + 1}`} className="w-full h-full object-cover" />
                {i === galleryIdx && <div className="absolute inset-0 bg-gold/10" />}
              </button>
            ))}
          </div>
        </div>

        {/* Title row */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <MapPin size={15} className="text-gold-dark" />
              {property.address.line1}, {property.address.city}, {property.address.state} — {property.address.pincode}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-2">{property.title}</h1>
            <p className="text-gray-600 flex items-center gap-2">
              <Home size={15} className="text-gold-dark" /> {property.propertyType}
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <p className="font-display text-4xl text-navy">{property.price.startingPrice}</p>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold-dark">Negotiable</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`tel:${property.contact.phone.replace(/\s/g, '')}`} className="btn-navy flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
          <a href={`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`} className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all">
            <MessageCircle size={18} /> WhatsApp
          </a>
          <button onClick={() => onBookVisit(property.slug)} className="btn-gold flex items-center gap-2">
            <Calendar size={18} /> Book Site Visit
          </button>
        </div>
      </section>

      {/* ===== Main content ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-8">

          {/* 1. Overview */}
          <LuxuryCard id="overview" title="Overview" icon={Sparkles}>
            <p className="text-gray-700 leading-relaxed">{property.overview}</p>
          </LuxuryCard>

          {/* 2. Building Information */}
          <LuxuryCard id="building" title="Building Information" icon={Building2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {property.buildingDetails.map((detail) => (
                <DetailRow key={detail.label} label={detail.label} value={detail.value} />
              ))}
            </div>
          </LuxuryCard>

          {/* 3. Property Highlights */}
          <LuxuryCard id="highlights" title="Property Highlights" icon={Award}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-gold/30 hover:bg-ivory transition-all">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} className="text-success" />
                  </div>
                  <p className="text-sm font-medium text-navy pt-1">{h}</p>
                </div>
              ))}
            </div>
          </LuxuryCard>

          {/* 4. Location */}
          <LuxuryCard id="location" title="Location" icon={MapPinned}>
            <div className="relative rounded-2xl overflow-hidden h-80 bg-navy">
              <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light opacity-90" />
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 rounded-full bg-gold/30 hotspot-ripple" />
                  <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                    <MapPin size={22} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm text-navy">{property.address.line1}</p>
                  <p className="text-xs text-gray-600">{property.address.line2}, {property.address.city} — {property.address.pincode}</p>
                </div>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Navigation size={12} /> {property.location.latitude}, {property.location.longitude}
                </span>
              </div>
            </div>
          </LuxuryCard>

          {/* 5. Nearby Places */}
          <LuxuryCard id="nearby" title="Nearby Places" icon={MapPin}>
            <div className="grid sm:grid-cols-2 gap-3">
              {property.nearbyPlaces.map((place) => (
                <NearbyCard key={place.name} place={place} />
              ))}
            </div>
          </LuxuryCard>

          {/* 6. Investment Highlights */}
          <LuxuryCard id="investment" title="Investment Highlights" icon={TrendingUp}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {property.investmentHighlights.map((item) => (
                <div key={item} className="p-5 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-luxury transition-all">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                    <TrendingUp size={18} className="text-gold-dark" />
                  </div>
                  <p className="text-sm font-medium text-navy">{item}</p>
                </div>
              ))}
            </div>
          </LuxuryCard>

          {/* 7. Contact Information */}
          <LuxuryCard id="contact" title="Contact Information" icon={Phone}>
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactRow icon={Building2} label="Company" value="MERIDIAN4" />
              <ContactRow icon={Phone} label="Phone" value={property.contact.phone} href={`tel:${property.contact.phone.replace(/\s/g, '')}`} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value={property.contact.whatsapp} href={`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`} />
              <ContactRow icon={MessageCircle} label="Email" value={property.contact.email} href={`mailto:${property.contact.email}`} />
              <ContactRow icon={Navigation} label="Website" value={property.contact.website} href={`https://${property.contact.website}`} />
            </div>
          </LuxuryCard>

          {/* 8. Schedule Site Visit */}
          <LuxuryCard id="visit" title="Schedule Site Visit" icon={Calendar}>
            <p className="text-sm text-gray-600 mb-4">Interested in this property? Schedule a site visit at your convenience. Pick a slot below, enter your details, and our team will confirm the appointment.</p>

            {/* Step 1: Pick a slot */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">1. Select a slot</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
              {property.scheduleVisit.availableSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSlot(i)}
                  className={`p-4 rounded-xl border text-left transition-all ${selectedSlot === i ? 'border-gold bg-gold/5 ring-1 ring-gold' : 'border-gray-200 hover:border-gold hover:bg-ivory'}`}
                >
                  <p className="font-semibold text-navy text-sm">{slot.day}</p>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                    <Clock size={12} className="text-gold-dark" /> {slot.time}
                  </p>
                </button>
              ))}
            </div>

            {/* Step 2: Enter details */}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">2. Your details</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              <input
                type="text"
                placeholder="Your name"
                value={visitorName}
                onChange={(e) => setVisitorName(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
              <input
                type="tel"
                placeholder="Phone number"
                value={visitorPhone}
                onChange={(e) => setVisitorPhone(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-navy outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            {/* Step 3: Submit */}
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={() => {
                  if (selectedSlot === null || !visitorName.trim() || !visitorPhone.trim()) return;
                  const slot = property.scheduleVisit.availableSlots[selectedSlot];
                  const msg = `Hello MERIDIAN4, I'd like to schedule a site visit for "${property.title}".%0AName: ${visitorName}%0APhone: ${visitorPhone}%0APreferred slot: ${slot.day} at ${slot.time}%0AProperty: ${property.address.line1}, ${property.address.city}`;
                  setScheduleSubmitted(true);
                  window.open(`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg).replace(/%2520/g, '%20')}`, '_blank');
                }}
                disabled={selectedSlot === null || !visitorName.trim() || !visitorPhone.trim()}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${selectedSlot !== null && visitorName.trim() && visitorPhone.trim() ? 'bg-gold text-white hover:bg-gold-dark' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                <Calendar size={18} /> Confirm via WhatsApp
              </button>
              <a href={`tel:${property.contact.phone.replace(/\s/g, '')}`} className="btn-navy flex items-center gap-2">
                <Phone size={18} /> Call Now
              </a>
              <a href={`https://wa.me/${property.contact.whatsapp.replace(/\D/g, '')}`} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>

            {scheduleSubmitted && (
              <p className="mt-4 text-sm text-success flex items-center gap-2">
                <CheckCircle2 size={16} /> Your request has been sent! We'll confirm your appointment shortly.
              </p>
            )}
          </LuxuryCard>
        </div>
      </section>

      {/* ===== Share modal ===== */}
      {shareOpen && (
        <ShareModal
          property={property}
          copied={copied}
          onCopy={() => {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          onNativeShare={async () => {
            if (navigator.share) {
              try {
                await navigator.share({ title: property.title, text: `Check out this property: ${property.title}`, url: shareUrl });
              } catch { /* user cancelled */ }
            }
          }}
          onClose={() => setShareOpen(false)}
        />
      )}

      {/* ===== Fullscreen gallery ===== */}
      {fullscreen && (
        <div className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center">
          <button onClick={() => setFullscreen(false)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:text-error transition-colors z-10" aria-label="Close">
            <X size={24} />
          </button>
          <button onClick={() => setGalleryIdx((i) => (i - 1 + property.images.length) % property.images.length)} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <img src={property.images[galleryIdx]} alt={`${property.title} ${galleryIdx + 1}`} className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl" />
          <button onClick={() => setGalleryIdx((i) => (i + 1) % property.images.length)} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-navy hover:bg-white transition-colors" aria-label="Next">
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 text-sm font-semibold text-navy">
            {galleryIdx + 1} / {property.images.length}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Reusable UI pieces ---------- */

function LuxuryCard({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="card-luxury p-6 sm:p-8 scroll-mt-32">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-ivory flex items-center justify-center shrink-0">
          <Icon size={20} className="text-gold-dark" />
        </div>
        <div>
          <h3 className="font-display text-2xl text-navy">{title}</h3>
          <div className="gold-divider mt-1" />
        </div>
      </div>
      {children}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-ivory">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-semibold text-navy text-right">{value}</span>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-gold/30 transition-all">
      <div className="w-10 h-10 rounded-lg bg-ivory flex items-center justify-center shrink-0">
        <Icon size={18} className="text-gold-dark" />
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a> : content;
}

function NearbyCard({ place }: { place: NearbyPlace }) {
  const Icon = place.category === 'Metro' || place.category === 'Railway'
    ? Train
    : place.category === 'School'
    ? School
    : place.category === 'Hospital'
    ? HeartPulse
    : place.category === 'Mall'
    ? ShoppingBag
    : place.category === 'IT Park'
    ? Briefcase
    : place.category === 'Airport'
    ? Plane
    : MapPin;

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-luxury transition-all">
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-gold-dark" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-navy truncate">{place.name}</p>
        <p className="text-xs text-gray-500 mt-0.5">{place.distance}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-semibold text-navy">{place.travelTime}</p>
        <p className="text-xs text-gray-500 flex items-center gap-1 justify-end mt-0.5">
          <Clock size={11} className="text-gold-dark" /> drive
        </p>
      </div>
    </div>
  );
}

function ShareModal({
  property,
  copied,
  onCopy,
  onNativeShare,
  onClose,
}: {
  property: typeof premiumProperty;
  copied: boolean;
  onCopy: () => void;
  onNativeShare: () => void;
  onClose: () => void;
}) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.meridian4.com/property/${property.slug}`;
  const shareText = `Check out this property: ${property.title} — ${property.price.startingPrice} at ${property.address.line1}, ${property.address.city}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  const socialLinks = [
    { name: 'WhatsApp', icon: MessageCircle, color: '#25D366', href: `https://wa.me/?text=${encodedText}%20${encodedUrl}` },
    { name: 'Facebook', icon: Facebook, color: '#1877F2', href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}` },
    { name: 'Twitter / X', icon: Twitter, color: '#000000', href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}` },
    { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}` },
    { name: 'Telegram', icon: Send, color: '#0088CC', href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}` },
    { name: 'Email', icon: Mail, color: '#EA4335', href: `mailto:?subject=${encodeURIComponent(property.title)}&body=${encodedText}%20${encodedUrl}` },
  ];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-luxury-lg w-full max-w-md p-6 sm:p-8 animate-[fadeIn_0.2s_ease]">
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory flex items-center justify-center text-navy hover:text-error transition-colors" aria-label="Close">
          <X size={18} />
        </button>
        <h3 className="font-display text-2xl text-navy mb-1">Share this property</h3>
        <div className="gold-divider mb-5" />
        <p className="text-sm text-gray-500 mb-5">Share "{property.title}" with friends, family, or on your favorite platform.</p>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-luxury transition-all group"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `${s.color}15` }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <span className="text-xs font-medium text-navy text-center leading-tight">{s.name}</span>
            </a>
          ))}
        </div>

        {/* Native share (mobile) */}
        {typeof navigator !== 'undefined' && navigator.share && (
          <button onClick={onNativeShare} className="w-full mb-3 p-3 rounded-xl bg-navy text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-navy-light transition-colors">
            <Share2 size={16} /> More options (device share)
          </button>
        )}

        {/* Copy link */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-ivory border border-gray-100">
          <Link2 size={16} className="text-gold-dark shrink-0" />
          <input
            readOnly
            value={shareUrl}
            className="flex-1 bg-transparent text-sm text-gray-600 outline-none min-w-0"
            onFocus={(e) => e.currentTarget.select()}
          />
          <button onClick={onCopy} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${copied ? 'bg-success text-white' : 'bg-gold text-white hover:bg-gold-dark'}`}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
}
