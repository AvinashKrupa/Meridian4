import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import StrippedLogo from './StrippedLogo';

interface NavigationProps {
  onBookSiteVisit: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Projects', page: 'projects' },
  { label: 'Locations', page: 'locations' },
  { label: 'Listings', page: 'properties' },
  { label: 'Investment', page: 'investment' },
  { label: 'Financial Services', page: 'financial' },
  { label: 'About', page: 'about' },
  { label: 'Directors', page: 'directors' },
  { label: 'Contact', page: 'contact' },
];

// Analyse the top strip of an image and return whether it is perceptually dark
function sampleImageBrightness(src: string, cb: (isDark: boolean) => void) {
  const img = new Image();
  img.onload = () => {
    try {
      const W = Math.min(img.naturalWidth, 600);
      const H = Math.min(96, img.naturalHeight);
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) { cb(false); return; }
      ctx.drawImage(img, 0, 0, img.naturalWidth, H, 0, 0, W, H);
      const { data } = ctx.getImageData(0, 0, W, H);
      let total = 0;
      const n = data.length / 4;
      for (let i = 0; i < data.length; i += 4) {
        const lin = (c: number) => {
          const s = c / 255;
          return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
        };
        total +=
          0.2126 * lin(data[i]) +
          0.7152 * lin(data[i + 1]) +
          0.0722 * lin(data[i + 2]);
      }
      cb(total / n < 0.35);
    } catch {
      cb(false);
    }
  };
  img.onerror = () => cb(false);
  img.src = src;
}

// Nav item — gold text + underline on hover; gold underline only when active
function NavItem({
  label,
  active,
  textColor,
  onClick,
}: {
  label: string;
  active: boolean;
  textColor: string;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#C9A227' : textColor,
        fontSize: '13.5px',
        fontWeight: 500,
        letterSpacing: '0.02em',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        position: 'relative',
        transition: 'color 300ms ease',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          height: '1.5px',
          background: '#C9A227',
          borderRadius: '1px',
          transform: active || hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 300ms ease',
        }}
      />
    </button>
  );
}

export default function Navigation({ onBookSiteVisit, onNavigate, currentPage }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [heroDark, setHeroDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mouseNearTop, setMouseNearTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>(0);

  // Sample hero image brightness once on mount
  useEffect(() => {
    sampleImageBrightness('/images/hero/Hero.png', setHeroDark);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 80);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    const onMouseMove = (e: MouseEvent) => {
      setMouseNearTop(e.clientY <= 80);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setScrolled(false);
    setMobileOpen(false);
  }, [currentPage]);

  // After scroll → glass header → dark text
  // Home page before scroll → canvas-detected brightness
  // All other pages → light bg → dark text
  const isDark = !scrolled && currentPage === 'home' && heroDark;
  const textColor = isDark ? '#FFFFFF' : '#111111';
  const navVisible = !scrolled || mouseNearTop;

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background 300ms ease, box-shadow 300ms ease, padding 300ms ease, opacity 300ms ease',
          background: 'transparent',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
          boxShadow: 'none',
          paddingTop: 0,
          paddingBottom: scrolled ? '8px' : '10px',
          opacity: navVisible ? 1 : 0,
          pointerEvents: navVisible ? 'auto' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo — fully transparent, no background box */}
          <button
            onClick={() => handleNav('home')}
            style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Meridian4 Home"
          >
            <StrippedLogo
              height={scrolled ? (isMobile ? 140 : 120) : (isMobile ? 180 : 160)}
              style={{
                transition: 'height 300ms ease',
                maxWidth: isMobile ? '90vw' : '60vw',
              }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center" style={{ gap: '28px' }}>
            {navItems.map((item) => (
              <NavItem
                key={item.page}
                label={item.label}
                active={currentPage === item.page}
                textColor={textColor}
                onClick={() => handleNav(item.page)}
              />
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden xl:flex items-center" style={{ gap: '20px' }}>
            <a
              href="tel:+918951025158"
              style={{
                color: textColor,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13.5px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 300ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A227')}
              onMouseLeave={(e) => (e.currentTarget.style.color = textColor)}
            >
              <Phone size={15} />
              +91 89510 25158
            </a>
            <button
              onClick={onBookSiteVisit}
              style={{
                background: '#C9A227',
                color: '#FFFFFF',
                padding: '9px 20px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '13.5px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 300ms ease, transform 200ms ease',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#B88A1D';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A227';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden"
            style={{
              color: textColor,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 300ms ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile glass drawer */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} className="xl:hidden">
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              background: 'rgba(8, 16, 34, 0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              paddingTop: '88px',
              paddingLeft: '28px',
              paddingRight: '28px',
              paddingBottom: '32px',
              overflowY: 'auto',
              maxHeight: '100vh',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column' }}>
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  style={{
                    color: '#FFFFFF',
                    textAlign: 'left',
                    padding: '15px 0',
                    fontSize: '17px',
                    fontWeight: 500,
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 200ms ease',
                    letterSpacing: '0.02em',
                  }}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="tel:+918951025158"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '15px 0',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Phone size={17} /> +91 89510 25158
              </a>

              <button
                onClick={() => { onBookSiteVisit(); setMobileOpen(false); }}
                style={{
                  background: '#C9A227',
                  color: '#FFFFFF',
                  padding: '14px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '15px',
                  marginTop: '20px',
                  width: '100%',
                  cursor: 'pointer',
                  border: 'none',
                  letterSpacing: '0.03em',
                }}
              >
                Book Site Visit
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
