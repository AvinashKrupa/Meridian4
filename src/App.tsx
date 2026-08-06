import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SearchPanel from '@/components/SearchPanel';
import type { SearchFilters } from '@/components/SearchPanel';
import LocationExplorer from '@/components/LocationExplorer';
import FeaturedProjects from '@/components/FeaturedProjects';
import FeaturedProperty from '@/components/FeaturedProperty';
import FeaturedLocations from '@/components/FeaturedLocations';
import InvestmentInsights from '@/components/InvestmentInsights';
import WhyChooseUs from '@/components/WhyChooseUs';
import BoardOfDirectors from '@/components/BoardOfDirectors';
import VisionMission from '@/components/VisionMission';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import FinancialServices from '@/components/FinancialServices';
import Footer from '@/components/Footer';
import PropertyDetail from '@/components/PropertyDetail';
import PropertyDetailPage from '@/components/PropertyDetailPage';
import LandPropertyDetailPage from '@/components/LandPropertyDetailPage';
import BookingModal from '@/components/BookingModal';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ScrollProgress, BackToTop } from '@/components/ScrollUtils';
import { locations } from '@/data/locations';

function App() {
  const [page, setPage] = useState('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPropertyId, setBookingPropertyId] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState<SearchFilters | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [detailPropertyId, setDetailPropertyId] = useState<string | null>(null);
  const [detailSlug, setDetailSlug] = useState<string | null>(null);

  const openBooking = (propertyId?: string) => {
    setBookingPropertyId(propertyId ?? null);
    setBookingOpen(true);
  };

  const handleNavigate = (target: string) => {
    setDetailPropertyId(null);
    setDetailSlug(null);
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    if (filters.location) {
      const loc = locations.find((l) => l.name === filters.location);
      if (loc) setSelectedLocationId(loc.id);
    }
    setPage('projects');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectLocation = (locId: string) => {
    setSelectedLocationId(locId);
    setPage('projects');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleViewDetails = (id: string) => {
    setDetailPropertyId(id);
    setDetailSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewSlug = (slug: string) => {
    setDetailSlug(slug);
    setDetailPropertyId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render premium property detail page (slug-based)
  if (detailSlug) {
    const isLand = detailSlug === 'premium-residential-plot-vemagal';
    return (
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Navigation onBookSiteVisit={() => openBooking()} onNavigate={handleNavigate} currentPage="projects" />
        <ErrorBoundary key={detailSlug}>
          {isLand ? (
            <LandPropertyDetailPage
              slug={detailSlug}
              onBack={() => { setDetailSlug(null); setPage('home'); }}
              onBookVisit={(id) => openBooking(id)}
            />
          ) : (
            <PropertyDetailPage
              slug={detailSlug}
              onBack={() => { setDetailSlug(null); setPage('home'); }}
              onBookVisit={(id) => openBooking(id)}
            />
          )}
        </ErrorBoundary>
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} propertyId={bookingPropertyId} />
        <BackToTop />
      </div>
    );
  }

  // Render legacy property detail page
  if (detailPropertyId) {
    return (
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <Navigation onBookSiteVisit={() => openBooking()} onNavigate={handleNavigate} currentPage="projects" />
        <PropertyDetail
          propertyId={detailPropertyId}
          onBack={() => setDetailPropertyId(null)}
          onBookVisit={(id) => openBooking(id)}
        />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} propertyId={bookingPropertyId} />
        <BackToTop />
      </div>
    );
  }

  // Render page sections
  const renderPage = () => {
    switch (page) {
      case 'projects':
      case 'properties':
        return (
          <div className="pt-20">
            <FeaturedProjects
              filters={searchFilters}
              selectedLocationId={selectedLocationId}
              onViewDetails={handleViewDetails}
              onBookVisit={(id) => openBooking(id)}
              onViewSlug={handleViewSlug}
              onBookSlug={(slug) => openBooking(slug)}
            />
          </div>
        );
      case 'locations':
        return (
          <div className="pt-20">
            <LocationExplorer onSelectLocation={handleSelectLocation} />
            <FeaturedLocations onSelectLocation={handleSelectLocation} />
          </div>
        );
      case 'investment':
        return (
          <div className="pt-20">
            <InvestmentInsights />
          </div>
        );
      case 'about':
        return (
          <div className="pt-20">
            <VisionMission />
            <WhyChooseUs />
          </div>
        );
      case 'directors':
        return (
          <div className="pt-20">
            <BoardOfDirectors />
          </div>
        );
      case 'financial':
        return (
          <div className="pt-20">
            <FinancialServices />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return (
          <>
            <Hero onExplore={() => handleNavigate('projects')} onBookSiteVisit={() => openBooking()} />
            <SearchPanel onSearch={handleSearch} />
            <LocationExplorer onSelectLocation={handleSelectLocation} />
            <FeaturedProperty onViewDetails={handleViewSlug} onBookVisit={(slug) => openBooking(slug)} />
            <FeaturedLocations onSelectLocation={handleSelectLocation} />
            <InvestmentInsights />
            <WhyChooseUs />
            <BoardOfDirectors />
            <VisionMission />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation onBookSiteVisit={() => openBooking()} onNavigate={handleNavigate} currentPage={page} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} propertyId={bookingPropertyId} />
      <BackToTop />
    </div>
  );
}

export default App;
