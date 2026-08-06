import { useState, useMemo } from 'react';
import { Search, MapPin, Home, IndianRupee, Briefcase, Building2, BedDouble, Maximize, ChevronDown } from 'lucide-react';
import { locations } from '@/data/locations';
import { properties } from '@/data/properties';

interface SearchPanelProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  propertyType: string;
  budget: string;
  purpose: string;
  builder: string;
  possession: string;
  bedrooms: string;
  area: string;
}

const propertyTypes = ['Apartment', 'Villa', 'Penthouse', 'Plot', 'Row House'];
const budgets = ['Under ₹50 L', '₹50 L – ₹1 Cr', '₹1 Cr – ₹2 Cr', '₹2 Cr – ₹5 Cr', 'Above ₹5 Cr'];
const purposes = ['Buy', 'Rent', 'Investment'];
const builders = ['All Builders', 'Prestige Group', 'Brigade Group', 'Sobha Limited', 'Embassy Group', 'Puravankara', 'Godrej Properties'];
const possessionStatuses = ['Any', 'Ready to Move', 'Under Construction', 'New Launch'];
const bedroomOptions = ['Any', '1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];
const areaOptions = ['Any', 'Up to 1,000 sq.ft.', '1,000 – 2,000 sq.ft.', '2,000 – 4,000 sq.ft.', 'Above 4,000 sq.ft.'];

function Select({
  icon: Icon,
  label,
  options,
  value,
  onChange,
}: {
  icon: React.ElementType;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold tracking-wider uppercase text-gray-500 flex items-center gap-1.5">
        <Icon size={13} className="text-gold-dark" />
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-sm font-medium text-charcoal outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)] cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt === 'All Builders' || opt === 'Any' ? '' : opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function SearchPanel({ onSearch }: SearchPanelProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    budget: '',
    purpose: '',
    builder: '',
    possession: '',
    bedrooms: '',
    area: '',
  });

  const locationNames = useMemo(() => ['All Locations', ...locations.map((l) => l.name)], []);

  const handleSearch = () => onSearch(filters);

  return (
    <section id="search" className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="card-luxury p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center">
              <Search size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl text-navy">Smart Listing Search</h3>
              <p className="text-sm text-gray-500">Find your dream home with advanced filters</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Select
              icon={MapPin}
              label="Location"
              options={locationNames}
              value={filters.location}
              onChange={(v) => setFilters({ ...filters, location: v })}
            />
            <Select
              icon={Home}
              label="Home Type"
              options={['Any', ...propertyTypes]}
              value={filters.propertyType}
              onChange={(v) => setFilters({ ...filters, propertyType: v })}
            />
            <Select
              icon={IndianRupee}
              label="Budget"
              options={['Any', ...budgets]}
              value={filters.budget}
              onChange={(v) => setFilters({ ...filters, budget: v })}
            />
            <Select
              icon={Briefcase}
              label="Purpose"
              options={['Any', ...purposes]}
              value={filters.purpose}
              onChange={(v) => setFilters({ ...filters, purpose: v })}
            />
            <Select
              icon={Building2}
              label="Builder"
              options={builders}
              value={filters.builder}
              onChange={(v) => setFilters({ ...filters, builder: v })}
            />
            <Select
              icon={Building2}
              label="Possession"
              options={possessionStatuses}
              value={filters.possession}
              onChange={(v) => setFilters({ ...filters, possession: v })}
            />
            <Select
              icon={BedDouble}
              label="Bedrooms"
              options={bedroomOptions}
              value={filters.bedrooms}
              onChange={(v) => setFilters({ ...filters, bedrooms: v })}
            />
            <Select
              icon={Maximize}
              label="Area"
              options={areaOptions}
              value={filters.area}
              onChange={(v) => setFilters({ ...filters, area: v })}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-navy">{properties.length}+</span> verified listings available
            </p>
            <button onClick={handleSearch} className="btn-gold w-full sm:w-auto flex items-center justify-center gap-2">
              <Search size={18} />
              Search Listings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
