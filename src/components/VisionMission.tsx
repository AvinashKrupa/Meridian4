import { Target, Eye, MapPin, Search, Calendar, Home } from 'lucide-react';

const missionPoints = [
  'Customer-first approach',
  'Ethical business practices',
  'Verified projects only',
  'Technology-driven experience',
  'Long-term relationships',
  'Premium service standards',
];


const journeySteps = [
  { icon: MapPin, title: 'Choose Location', desc: 'Explore Bengaluru\'s premium neighborhoods and select your preferred area.' },
  { icon: Search, title: 'Explore Projects', desc: 'Compare verified projects with detailed insights on amenities and pricing.' },
  { icon: Calendar, title: 'Schedule Site Visit', desc: 'Book a free site visit with our expert advisors at your convenience.' },
  { icon: Home, title: 'Own Your Dream Home', desc: 'Complete your purchase with full legal support and post-purchase assistance.' },
];

export default function VisionMission() {
  return (
    <>
      {/* Vision & Mission */}
      <section id="about" className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Vision */}
            <div className="card-luxury p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center">
                  <Eye size={24} className="text-white" />
                </div>
                <div>
                  <p className="section-label">Our Vision</p>
                  <h3 className="font-display text-2xl text-navy">Building Trusted Communities</h3>
                </div>
              </div>
              <p className="font-display italic text-lg text-navy leading-relaxed">
                "Our vision is to create trusted communities by connecting people with exceptional opportunities through transparency, technology, and long-term value."
              </p>
            </div>

            {/* Mission */}
            <div className="card-luxury p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-navy-gradient flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <p className="section-label">Our Mission</p>
                  <h3 className="font-display text-2xl text-navy">What Drives Us Daily</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {missionPoints.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-4 rounded-xl bg-ivory">
                    <div className="w-8 h-8 rounded-lg bg-gold-gradient flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-sm font-medium text-navy">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Journey */}
          <div className="text-center mb-12">
            <p className="section-label mb-3">Customer Journey</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy mb-4">
              Your Path to a <span className="text-gold-gradient italic">Dream Home</span>
            </h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="card-luxury p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <step.icon size={26} className="text-white" />
                  </div>
                  <div className="text-gold-dark font-display text-3xl mb-1">0{i + 1}</div>
                  <h4 className="font-display text-lg text-navy mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gold/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
