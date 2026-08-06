import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anand Krishnan',
    role: 'Software Engineer, Google',
    photo: 'https://images.pexels.com/photos/20345064/pexels-photo-20345064.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Meridian4 made our home-buying journey effortless. Their team verified every document, arranged multiple site visits, and negotiated a great deal. We couldn\'t be happier with our new home in Whitefield.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Doctor, Manipal Hospital',
    photo: 'https://images.pexels.com/photos/33820660/pexels-photo-33820660.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'As a first-time buyer, I was nervous about the process. Meridian4\u2019s dedicated relationship manager guided me through every step \u2014 from selecting the location to finalizing the bank loan. Truly transparent service.',
  },
  {
    name: 'Vikram Patel',
    role: 'Entrepreneur',
    photo: 'https://images.pexels.com/photos/33820671/pexels-photo-33820671.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'I invested in two homes through Meridian4 and both have appreciated significantly. Their investment insights and market knowledge are unmatched. They genuinely care about your ROI, not just the sale.',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            What Our <span className="text-gold-gradient italic">Customers</span> Say
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold fill-gold" />
            ))}
            <span className="ml-2 text-sm text-gray-600 font-medium">4.9 / 5 from 1,200+ reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.name} className="w-full shrink-0 px-2">
                  <div className="card-luxury p-8 sm:p-10 text-center max-w-3xl mx-auto">
                    <Quote size={36} className="text-gold/40 mx-auto mb-6" />
                    <p className="font-display text-lg sm:text-xl text-navy italic leading-relaxed mb-8">
                      "{t.text}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-gold/30" />
                      <div className="text-left">
                        <p className="font-semibold text-navy">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role}</p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={12} className="text-gold fill-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all z-10" aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-11 h-11 rounded-full glass flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all z-10" aria-label="Next">
            <ChevronRight size={22} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-gold' : 'w-2 bg-gray-300'}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
