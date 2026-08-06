import { useState, useEffect } from 'react';
import { X, Calendar, MapPin, User, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { properties } from '@/data/properties';
import { locations } from '@/data/locations';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  propertyId?: string | null;
}

export default function BookingModal({ open, onClose, propertyId }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', location: '', message: '' });

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      const p = propertyId ? properties.find((x) => x.id === propertyId) : null;
      setForm((f) => ({ ...f, location: p?.location ?? '', message: p ? `I'd like to book a site visit for ${p.name}` : '' }));
    }
  }, [open, propertyId]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-luxury-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-ivory flex items-center justify-center text-navy hover:text-error transition-colors z-10" aria-label="Close">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={36} className="text-success" />
            </div>
            <h3 className="font-display text-2xl text-navy mb-2">Site Visit Booked!</h3>
            <p className="text-sm text-gray-600 mb-6">Thank you, {form.name || 'valued customer'}. Our advisor will confirm your visit within 2 hours.</p>
            <button onClick={onClose} className="btn-navy">Done</button>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center">
                <Calendar size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl text-navy">Book a Site Visit</h3>
                <p className="text-xs text-gray-500">Free pickup & drop. No obligation.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div>
                <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="input-luxury pl-10" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Phone</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="input-luxury pl-10" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="input-luxury pl-10" />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Preferred Date</label>
                  <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input-luxury" />
                </div>
                <div>
                  <label className="text-xs font-semibold tracking-wider uppercase text-gray-500 mb-1.5 block">Location</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="input-luxury pl-10 appearance-none pr-10">
                      <option value="">Any location</option>
                      {locations.map((l) => <option key={l.id} value={l.name}>{l.name}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <Calendar size={18} /> Confirm Site Visit
              </button>
              <p className="text-[11px] text-gray-400 text-center">By submitting, you agree to be contacted by our advisory team.</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
