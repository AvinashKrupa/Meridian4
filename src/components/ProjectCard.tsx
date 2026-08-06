import { Phone, Eye, Calendar, Heart, GitCompare, MapPin, Building2, Maximize, Clock, CheckCircle2 } from 'lucide-react';
import type { Property } from '@/data/properties';

interface ProjectCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
  onBookVisit: (id: string) => void;
}

function tagClass(tag: Property['tag']): string {
  switch (tag) {
    case 'Premium':           return 'tag-premium';
    case 'New Launch':        return 'tag-new';
    case 'Ready to Move':     return 'tag-ready';
    case 'Under Construction':return 'tag-construction';
    default:                  return 'tag-new';
  }
}

export default function ProjectCard({ property, onViewDetails, onBookVisit }: ProjectCardProps) {
  return (
    <div className="card-luxury overflow-hidden group flex flex-col">
      {/* Image */}
      <div className="relative img-zoom-wrap h-56">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${tagClass(property.tag)}`}>
          {property.tag}
        </span>
        <button
          className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-navy hover:text-error transition-colors"
          aria-label="Save listing"
        >
          <Heart size={16} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <MapPin size={12} /> {property.location}
            </p>
            <p className="text-white font-display text-lg leading-tight">{property.name}</p>
          </div>
          <button
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-navy hover:text-gold-dark transition-colors"
            aria-label="Compare"
          >
            <GitCompare size={16} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
            <Building2 size={13} /> {property.builder}
          </span>
          <span className="text-xs text-success font-semibold flex items-center gap-1">
            <CheckCircle2 size={13} /> RERA Verified
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize size={14} className="text-gold-dark" /> {property.configuration}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize size={14} className="text-gold-dark" /> {property.area}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={14} className="text-gold-dark" /> {property.possession}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 size={14} className="text-gold-dark" /> {property.status}
          </div>
        </div>

        <div className="flex items-end justify-between mb-4 pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Starting Price</p>
            <p className="font-display text-2xl text-navy">{property.startingPrice}</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-md bg-ivory text-navy font-medium">
            {property.rera.slice(0, 12)}…
          </span>
        </div>

        {/* Actions */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(property.id)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
          >
            <Eye size={15} /> View Details
          </button>
          <button
            onClick={() => onBookVisit(property.id)}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gold-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Calendar size={15} /> Book Visit
          </button>
        </div>
        <a
          href="tel:+918012345678"
          className="mt-2 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-gold text-gold-dark text-sm font-semibold hover:bg-gold hover:text-white transition-all"
        >
          <Phone size={15} /> Call Now
        </a>
      </div>
    </div>
  );
}
