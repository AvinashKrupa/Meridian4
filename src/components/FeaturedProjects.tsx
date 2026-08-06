import { useState, useMemo } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { properties } from '@/data/properties';
import { locations } from '@/data/locations';
import type { Property } from '@/data/properties';
import type { SearchFilters } from '@/components/SearchPanel';
import ProjectCard from '@/components/ProjectCard';
import FeaturedProperty from '@/components/FeaturedProperty';

interface FeaturedProjectsProps {
  filters: SearchFilters | null;
  selectedLocationId: string | null;
  onViewDetails: (id: string) => void;
  onBookVisit: (id: string) => void;
  onViewSlug?: (slug: string) => void;
  onBookSlug?: (slug: string) => void;
}

export default function FeaturedProjects({
  filters,
  selectedLocationId,
  onViewDetails,
  onBookVisit,
  onViewSlug,
  onBookSlug,
}: FeaturedProjectsProps) {
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'score'>('score');

  const filtered = useMemo(() => {
    let list: Property[] = [...properties];

    if (selectedLocationId) {
      list = list.filter((p) => p.locationId === selectedLocationId);
    }
    if (filters) {
      if (filters.location) list = list.filter((p) => p.location === filters.location);
      if (filters.builder) list = list.filter((p) => p.builder === filters.builder);
      if (filters.possession && filters.possession !== 'Any')
        list = list.filter((p) => p.status === filters.possession);
      if (filters.bedrooms && filters.bedrooms !== 'Any') {
        const bed = parseInt(filters.bedrooms);
        list = list.filter((p) => p.bedrooms >= bed);
      }
      if (filters.budget && filters.budget !== 'Any') {
        if (filters.budget.includes('Under')) list = list.filter((p) => p.priceValue < 5000000);
        if (filters.budget.includes('50')) list = list.filter((p) => p.priceValue >= 5000000 && p.priceValue < 10000000);
        if (filters.budget.includes('1 Cr')) list = list.filter((p) => p.priceValue >= 10000000 && p.priceValue < 20000000);
        if (filters.budget.includes('2 Cr')) list = list.filter((p) => p.priceValue >= 20000000 && p.priceValue < 50000000);
        if (filters.budget.includes('Above')) list = list.filter((p) => p.priceValue >= 50000000);
      }
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.priceValue - b.priceValue);
    if (sortBy === 'price-desc') list.sort((a, b) => b.priceValue - a.priceValue);
    if (sortBy === 'score') list.sort((a, b) => b.rentalYield.localeCompare(a.rentalYield));

    return list;
  }, [filters, selectedLocationId, sortBy]);

  const activeLocation = locations.find((l) => l.id === selectedLocationId);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium featured property card */}
        {onViewSlug && onBookSlug && (
          <FeaturedProperty onViewDetails={onViewSlug} onBookVisit={onBookSlug} />
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="section-label mb-3">Available Projects</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy">
              {activeLocation ? `Projects in ${activeLocation.name}` : 'Featured Projects'}
            </h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 flex items-center gap-1.5">
              <Filter size={15} /> {filtered.length} results
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm font-medium outline-none focus:border-gold cursor-pointer"
              >
                <option value="score">Top Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard
                key={p.id}
                property={p}
                onViewDetails={onViewDetails}
                onBookVisit={onBookVisit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-navy mb-2">No listings match your filters</p>
            <p className="text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
