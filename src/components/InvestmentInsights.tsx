import { TrendingUp, Building2, Train, Users, Percent, BarChart3 } from 'lucide-react';

export default function InvestmentInsights() {
  const stats = [
    { value: '14%', label: 'Avg. Annual Appreciation', icon: TrendingUp },
    { value: '4.2%', label: 'Avg. Rental Yield', icon: Percent },
    { value: '₹1.2L Cr', label: 'Bengaluru Real Estate Market', icon: BarChart3 },
    { value: '85%', label: 'IT Professional Buyers', icon: Users },
  ];

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      desc: 'Bengaluru\'s real estate market has consistently outperformed national averages with 14% annual appreciation in premium micro-markets.',
    },
    {
      icon: Building2,
      title: 'Future Developments',
      desc: 'Upcoming infrastructure projects including Metro Phase 3, Peripheral Ring Road, and Satellite Town Ring Road are set to boost real estate values.',
    },
    {
      icon: Train,
      title: 'Infrastructure Projects',
      desc: 'Namma Metro expansion, elevated corridors, and new flyovers are dramatically improving connectivity across the city.',
    },
    {
      icon: Users,
      title: 'Rental Demand',
      desc: 'With over 2 million IT professionals migrating annually, rental demand remains robust with occupancy rates above 92%.',
    },
  ];

  return (
    <section id="investment" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="section-label text-gold-light mb-3">Investment Insights</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Why Invest in <span className="text-gold-gradient italic">Bengaluru</span>
          </h2>
          <div className="gold-divider mx-auto mb-4" />
          <p className="text-white/70 max-w-2xl mx-auto">
            Data-driven insights into one of India's most resilient and high-growth real estate markets.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="glass-dark rounded-2xl p-6 text-center">
              <s.icon size={28} className="text-gold-light mx-auto mb-3" />
              <p className="font-display text-3xl lg:text-4xl text-white mb-1">{s.value}</p>
              <p className="text-xs text-white/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="glass-dark rounded-2xl p-7 flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
                <r.icon size={26} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
