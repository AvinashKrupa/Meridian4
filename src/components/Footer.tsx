import { Phone, Mail, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-navy text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/company/image copy copy copy copy copy copy copy.png"
                alt="Meridian4 Logo"
                className="h-40 lg:!h-72 w-auto"
              />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-5">Building Trust · Creating Values</p>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm">
              Bengaluru's most trusted real estate advisory, connecting families with exceptional
              homes through transparency, technology, and long-term value.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+918951025158" className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors">
                <Phone size={15} /> +91 89510 25158
              </a>
              <a href="mailto:customer.service@meridian4.in" className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors">
                <Mail size={15} /> customer.service@meridian4.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Home', 'home'], ['Projects', 'projects'], ['Locations', 'locations'],
                ['Listings', 'properties'], ['Financial Services', 'financial'],
                ['About Us', 'about'], ['Contact', 'contact'],
              ].map(([label, page]) => (
                <li key={page}>
                  <button onClick={() => onNavigate(page)} className="text-white/60 hover:text-gold-light transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Locations</h4>
            <ul className="space-y-2.5 text-sm">
              {['Whitefield', 'Sarjapur Road', 'Electronic City', 'Hebbal', 'Yelahanka', 'Devanahalli'].map((l) => (
                <li key={l}>
                  <button onClick={() => onNavigate('locations')} className="text-white/60 hover:text-gold-light transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg mb-4 text-gold-light">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Get the latest market updates and insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:border-gold"
              />
              <button className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity" aria-label="Subscribe">
                <ArrowRight size={18} className="text-white" />
              </button>
            </form>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-gold hover:text-white transition-all"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© 2026 Meridian4. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-gold-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-light transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-light transition-colors">RERA Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}