import { Linkedin, Quote } from 'lucide-react';

const directors = [
  {
    name: 'ShivaKumar BV',
    role: 'Founder & Managing Director',
    photo: '/images/directors/WhatsApp_Image_2026-07-29_at_2.35.15_PM.jpeg',
    bio: 'Driven by a passion for building lasting relationships, ShivaKumar BV founded Meridian4 with a commitment to transparency, trust, and exceptional service. With over 10 years of expertise, he has successfully guided more than 500 families and businesses toward achieving their buisness aspirations.',
    vision: 'We believe every great investment begins with trust. That\'s why we\'re committed to building relationships that create value for generations to come.',
  },
  {
    name: 'Sharukh Khan',
    role: 'Co-Director & Co-Founder',
    photo: '/images/directors/sharukh.jpg',
    bio: 'Sharukh brings a sharp analytical mindset and deep expertise in buisness investment strategy. With a background in finance and real estate development, he has played a pivotal role in structuring high-value portfolios and forging key partnerships that have expanded Meridian4\'s reach across Bengaluru\'s most sought-after micro-markets.',
    vision: 'Great investments are built on data, discipline, and trust. I believe every client deserves a strategy as unique as their goals.',
  },
  {
    name: 'Farhan Khan',
    role: 'Co-Director — Operations & Client Relations',
    photo: '/images/directors/Farhan.jpg',
    bio: 'Farhan oversees the end-to-end client experience at Meridian4, ensuring every transaction is seamless, transparent, and rewarding. His passion for customer success and operational excellence has earned Meridian4 a reputation for service that goes far beyond the sale, turning first-time buyers into lifelong advocates.',
    vision: 'A home is more than an asset — it\'s a milestone. Our job is to make that journey effortless and memorable for every family we serve.',
  },
  {
    name: 'Avinash',
    role: 'Co-Director — Sales & Business Development',
    photo: '/images/directors/Avinash.png',
    bio: 'Avinash is the driving force behind Meridian4\'s sales growth and market expansion. With a keen understanding of buyer psychology and an extensive network across Bengaluru\'s real estate ecosystem, he has consistently led the team to exceed targets while maintaining a client-first approach. His ability to identify emerging micro-markets early has helped hundreds of investors unlock exceptional value.',
    vision: 'Success is not about closing deals — it\'s about opening doors. Every conversation I have is about understanding what truly matters to the person in front of me.',
  },
];

export default function BoardOfDirectors() {
  return (
    <section id="directors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Board of Directors</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Meet Our <span className="text-gold-gradient italic">Leadership</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            The visionaries behind Meridian4, committed to redefining real estate buying in Bengaluru.
          </p>
        </div>

        <div className="grid max-w-2xl mx-auto">
          {directors.map((d) => (
            <div key={d.name} className="card-luxury overflow-hidden group">
              <div className="relative overflow-hidden h-80 bg-navy">
                <img src={d.photo} alt={d.name} className="w-full h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white mb-1">{d.name}</h3>
                  <p className="text-gold-light text-sm font-medium">{d.role}</p>
                </div>
                <a
                  href="#"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <div className="p-7">
                <div className="flex gap-3 mb-4">
                  <Quote size={22} className="text-gold-dark shrink-0" />
                  <p className="font-display italic text-navy text-lg leading-snug">{d.vision}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{d.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
