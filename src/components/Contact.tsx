import { useState } from 'react';
import { Phone, Mail, MessageCircle, Calendar, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Let's Find Your <span className="text-gold-gradient italic">Dream Home</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expert advisors are ready to help you discover the perfect home. Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact info + map */}
          <div className="space-y-6">
            <div className="card-luxury overflow-hidden h-48 sm:h-64">
              <div className="relative w-full h-full bg-navy">
                <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&w=1920')" }} />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="glass rounded-xl px-4 sm:px-6 py-4 text-center">
                    <p className="font-display text-lg text-navy">Meridian4</p>
                    <p className="text-xs text-gray-600 mt-1">Building Trust · Creating Values</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactCard icon={Phone} title="Call Us" value="+91 89510 25158" href="tel:+918951025158" />
              <ContactCard icon={Mail} title="Email Us" value="customer.service@meridian4.in" href="mailto:customer.service@meridian4.in" />
              <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat with us" href="https://wa.me/918951025158" />
              <ContactCard icon={Clock} title="Office Hours" value="Mon–Sat, 9 AM – 7 PM" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+918951025158" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all">
                <Phone size={16} /> Call Now
              </a>
              <a href="https://wa.me/918951025158" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold text-gold-dark font-semibold text-sm hover:bg-gold hover:text-white transition-all">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="card-luxury p-8">
            <h3 className="font-display text-2xl text-navy mb-2 flex items-center gap-2">
              <Calendar size={22} className="text-gold-dark" /> Request a Callback
            </h3>
            <p className="text-sm text-gray-500 mb-6">Fill in your details and our advisor will call you within 24 hours.</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} className="text-success" />
                </div>
                <h4 className="font-display text-xl text-navy mb-2">Thank You!</h4>
                <p className="text-sm text-gray-600">We've received your request. Our advisor will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="input-luxury"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="input-luxury"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="input-luxury"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="input-luxury resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: React.ElementType; title: string; value: string; href?: string }) {
  const inner = (
    <div className="card-luxury p-5 flex items-center gap-4 h-full">
      <div className="w-11 h-11 rounded-xl bg-ivory flex items-center justify-center shrink-0">
        <Icon size={20} className="text-gold-dark" />
      </div>
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="font-semibold text-navy text-sm">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
