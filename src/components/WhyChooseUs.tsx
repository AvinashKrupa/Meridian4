import {
  ShieldCheck, Scale, UserCheck, Tag, Handshake, MapPin, Landmark, Headphones, LineChart, UserCog,
} from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Verified Projects', desc: 'Every project is physically inspected and legally verified before listing.' },
  { icon: Scale, title: 'Legal Verification', desc: 'Complete legal due diligence including title, approvals, and RERA compliance.' },
  { icon: UserCheck, title: 'Expert Advisors', desc: 'Dedicated real estate consultants with 15+ years of Bengaluru market expertise.' },
  { icon: Tag, title: 'Transparent Pricing', desc: 'No hidden charges. Direct builder pricing with exclusive Meridian4 deals.' },
  { icon: Handshake, title: 'Best Deals', desc: 'Negotiated group buying discounts and exclusive inventory for our clients.' },
  { icon: MapPin, title: 'Site Visit Assistance', desc: 'Free pickup and drop for site visits with detailed home walkthroughs.' },
  { icon: Landmark, title: 'Bank Loan Support', desc: 'End-to-end loan assistance with pre-approved offers from all major banks.' },
  { icon: Headphones, title: 'Post Purchase Support', desc: 'Continued assistance for registration, interiors, and estate management.' },
  { icon: LineChart, title: 'Investment Consultation', desc: 'Data-backed investment advice tailored to your portfolio and goals.' },
  { icon: UserCog, title: 'Dedicated Relationship Manager', desc: 'A single point of contact who knows your requirements and preferences.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            The <span className="text-gold-gradient italic">Meridian4</span> Advantage
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond listings — we partner with you through every step of your home journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-luxury p-7 flex gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-ivory flex items-center justify-center shrink-0 group-hover:bg-gold-gradient transition-all duration-300">
                <f.icon size={24} className="text-gold-dark group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-display text-lg text-navy mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
