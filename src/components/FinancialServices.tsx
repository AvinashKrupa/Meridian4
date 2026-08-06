import { useState } from 'react';
import {
  Building2, Calculator, TrendingUp, Shield, FileText, CreditCard,
  ChevronDown, ChevronUp, Phone, ArrowRight, BadgeCheck, PiggyBank,
  Landmark, BarChart3, Wallet, HandCoins,
} from 'lucide-react';

const services = [
  {
    icon: Landmark,
    title: 'Home Loans',
    subtitle: 'Starting at 8.40% p.a.',
    color: 'from-blue-600 to-blue-800',
    accent: 'text-blue-600',
    bg: 'bg-blue-50',
    description:
      'Access home loans from 25+ leading banks and NBFCs. We compare rates, negotiate better terms, and handle the entire paperwork — so you get the best deal with minimum hassle.',
    features: [
      'Loan amount up to ₹10 Cr',
      'Tenure up to 30 years',
      'Balance transfer with lower EMI',
      'Pre-approval in 48 hours',
      'Doorstep documentation assistance',
      'Zero hidden processing charges',
    ],
    banks: ['SBI', 'HDFC', 'ICICI', 'Axis', 'LIC Housing', 'Bajaj Finance'],
  },
  {
    icon: Calculator,
    title: 'EMI Planning',
    subtitle: 'Free consultation',
    color: 'from-emerald-600 to-emerald-800',
    accent: 'text-emerald-600',
    bg: 'bg-emerald-50',
    description:
      'Plan your home purchase with a personalised EMI breakdown. Understand exactly what you will pay each month and how much of your budget goes toward principal vs. interest.',
    features: [
      'Personalised EMI schedule',
      'Tax benefit calculation (Sec 24 & 80C)',
      'Prepayment & foreclosure planning',
      'Step-up & step-down EMI options',
      'Affordability assessment',
      'Budget vs. home matching',
    ],
    banks: [],
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    subtitle: 'ROI-focused guidance',
    color: 'from-amber-500 to-orange-600',
    accent: 'text-amber-600',
    bg: 'bg-amber-50',
    description:
      'Our investment specialists analyse micro-markets, rental yields, and capital appreciation trends to help you pick homes that grow your wealth.',
    features: [
      'Rental yield projections',
      'Capital appreciation analysis',
      'NRI investment advisory',
      'Short-term & long-term strategies',
      'REIT vs. direct real estate comparison',
      'Portfolio diversification guidance',
    ],
    banks: [],
  },
  {
    icon: FileText,
    title: 'Legal & Documentation',
    subtitle: 'End-to-end support',
    color: 'from-purple-600 to-purple-900',
    accent: 'text-purple-600',
    bg: 'bg-purple-50',
    description:
      'From title verification to registration, our legal experts ensure every document is airtight. No surprises, no last-minute shocks.',
    features: [
      'Title deed & encumbrance verification',
      'Sale agreement drafting',
      'RERA & BBMP compliance check',
      'Home registration assistance',
      'Khata & mutation support',
      'Joint ownership & POA setup',
    ],
    banks: [],
  },
  {
    icon: Shield,
    title: 'Home Insurance',
    subtitle: 'Protect your asset',
    color: 'from-rose-500 to-rose-700',
    accent: 'text-rose-600',
    bg: 'bg-rose-50',
    description:
      'Safeguard your home and home loan with comprehensive insurance plans covering structure, contents, natural disasters, and loan cover.',
    features: [
      'Structure & content insurance',
      'Home loan protection cover',
      'Natural disaster & fire cover',
      'Liability cover for residents',
      'Easy claim settlement support',
      'Competitive premium comparison',
    ],
    banks: [],
  },
  {
    icon: PiggyBank,
    title: 'Down Payment Planning',
    subtitle: 'Save smarter',
    color: 'from-teal-500 to-teal-700',
    accent: 'text-teal-600',
    bg: 'bg-teal-50',
    description:
      'Not ready with the full down payment yet? We help you plan a savings roadmap and explore developer-backed payment plans that reduce your upfront burden.',
    features: [
      'Flexi payment plan structuring',
      'Subvention scheme guidance',
      'Systematic savings roadmap',
      'Pre-launch & early-bird pricing',
      'Developer financing tie-ups',
      'Liquid asset liquidation advice',
    ],
    banks: [],
  },
  {
    icon: BarChart3,
    title: 'NRI Financial Services',
    subtitle: 'Invest from anywhere',
    color: 'from-sky-500 to-sky-700',
    accent: 'text-sky-600',
    bg: 'bg-sky-50',
    description:
      'Dedicated services for Non-Resident Indians — from NRE/NRO account guidance to repatriation of proceeds and FEMA compliance.',
    features: [
      'NRI home loan with NRE/NRO accounts',
      'FEMA compliance & repatriation',
      'Power of Attorney setup',
      'Rental income tax planning',
      'Currency risk management',
      'Virtual home tours & remote closing',
    ],
    banks: [],
  },
];

const lenders = [
  { name: 'State Bank of India', rate: '8.40%', maxLoan: '₹10 Cr', tenure: '30 yrs' },
  { name: 'HDFC Bank', rate: '8.50%', maxLoan: '₹10 Cr', tenure: '30 yrs' },
  { name: 'ICICI Bank', rate: '8.75%', maxLoan: '₹5 Cr', tenure: '25 yrs' },
  { name: 'Axis Bank', rate: '8.75%', maxLoan: '₹5 Cr', tenure: '30 yrs' },
  { name: 'LIC Housing Finance', rate: '8.50%', maxLoan: '₹15 Cr', tenure: '30 yrs' },
  { name: 'Bajaj Housing Finance', rate: '8.70%', maxLoan: '₹5 Cr', tenure: '32 yrs' },
];

function EmiCalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const monthlyRate = rate / 12 / 100;
  const n = tenure * 12;
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, n) / (Math.pow(1 + monthlyRate, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  const fmt = (v: number) =>
    v >= 10000000
      ? `₹${(v / 10000000).toFixed(2)} Cr`
      : v >= 100000
      ? `₹${(v / 100000).toFixed(1)} L`
      : `₹${Math.round(v).toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-3xl shadow-luxury p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-gold-gradient flex items-center justify-center">
          <Calculator size={22} className="text-white" />
        </div>
        <div>
          <h3 className="font-display text-2xl text-navy">EMI Calculator</h3>
          <p className="text-sm text-charcoal/60">Estimate your monthly payment instantly</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Sliders */}
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Loan Amount</label>
              <span className="text-sm font-bold text-navy">{fmt(principal)}</span>
            </div>
            <input
              type="range" min={500000} max={30000000} step={100000}
              value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-gold h-2 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-charcoal/40 mt-1">
              <span>₹5 L</span><span>₹3 Cr</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Interest Rate</label>
              <span className="text-sm font-bold text-navy">{rate.toFixed(1)}% p.a.</span>
            </div>
            <input
              type="range" min={7} max={14} step={0.1}
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full accent-gold h-2 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-charcoal/40 mt-1">
              <span>7%</span><span>14%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Loan Tenure</label>
              <span className="text-sm font-bold text-navy">{tenure} years</span>
            </div>
            <input
              type="range" min={5} max={30} step={1}
              value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full accent-gold h-2 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-charcoal/40 mt-1">
              <span>5 yrs</span><span>30 yrs</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-4">
          <div className="bg-navy rounded-2xl p-6 text-center">
            <p className="text-white/60 text-sm mb-1">Monthly EMI</p>
            <p className="font-display text-4xl text-gold-light">{fmt(emi)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-2xl p-4 text-center">
              <p className="text-charcoal/50 text-xs mb-1">Principal</p>
              <p className="font-display text-lg text-navy">{fmt(principal)}</p>
            </div>
            <div className="bg-stone-50 rounded-2xl p-4 text-center">
              <p className="text-charcoal/50 text-xs mb-1">Total Interest</p>
              <p className="font-display text-lg text-navy">{fmt(totalInterest)}</p>
            </div>
            <div className="col-span-2 bg-gold/10 rounded-2xl p-4 text-center border border-gold/20">
              <p className="text-charcoal/50 text-xs mb-1">Total Payment</p>
              <p className="font-display text-xl text-navy">{fmt(totalPayment)}</p>
            </div>
          </div>
          <a href="tel:+918951025158"
            className="btn-gold flex items-center justify-center gap-2 mt-2"
          >
            <Phone size={16} /> Talk to a Loan Expert
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-luxury transition-all duration-300 overflow-hidden group">
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-display text-xl text-navy mb-0.5">{service.title}</h3>
              <span className={`text-xs font-semibold ${service.accent} ${service.bg} px-2.5 py-1 rounded-full`}>
                {service.subtitle}
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="text-charcoal/40 hover:text-navy transition-colors mt-1 shrink-0"
            aria-label="Toggle details"
          >
            {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed mt-4">{service.description}</p>
      </div>

      {open && (
        <div className="px-7 pb-7 border-t border-stone-100 pt-5">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-5">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-charcoal/80">
                <BadgeCheck size={15} className={`${service.accent} shrink-0 mt-0.5`} />
                {f}
              </li>
            ))}
          </ul>
          {service.banks.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {service.banks.map((b) => (
                <span key={b} className="px-3 py-1 bg-stone-100 text-xs font-medium text-charcoal/70 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          )}
          <a
            href="tel:+918951025158"
            className={`inline-flex items-center gap-2 mt-5 text-sm font-semibold ${service.accent} hover:underline`}
          >
            <Phone size={14} /> Get free consultation <ArrowRight size={14} />
          </a>
        </div>
      )}
    </div>
  );
}

export default function FinancialServices() {
  return (
    <section className="section-padding bg-stone-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label text-gold mb-3">Financial Services</p>
          <h2 className="section-title mb-5">
            Everything You Need to
            <span className="text-gold-gradient italic"> Finance Your Home</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            From home loans and EMI planning to legal documentation and government subsidies —
            Meridian4 connects you with every financial resource so your journey from dream to keys
            is smooth, transparent, and cost-efficient.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Landmark, label: 'Partner Banks & NBFCs', value: '25+' },
            { icon: Wallet, label: 'Loans Facilitated', value: '₹850 Cr+' },
            { icon: CreditCard, label: 'Avg. Rate Secured', value: '8.4%' },
            { icon: Building2, label: 'Happy Home Buyers', value: '5,000+' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
                <Icon size={20} className="text-gold-dark" />
              </div>
              <p className="font-display text-3xl text-navy mb-1">{value}</p>
              <p className="text-xs text-charcoal/60">{label}</p>
            </div>
          ))}
        </div>

        {/* EMI Calculator */}
        <div className="mb-16">
          <EmiCalculator />
        </div>

        {/* Service cards */}
        <div className="mb-16">
          <h3 className="font-display text-2xl text-navy text-center mb-10">All Financial Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>

        {/* Lender comparison table */}
        <div className="bg-white rounded-3xl shadow-luxury overflow-hidden mb-16">
          <div className="px-8 py-6 border-b border-stone-100">
            <h3 className="font-display text-2xl text-navy">Partner Lender Rate Comparison</h3>
            <p className="text-sm text-charcoal/60 mt-1">Indicative rates — final rates subject to profile assessment</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-stone-50 text-xs font-semibold text-charcoal/60 uppercase tracking-wider">
                <tr>
                  <th className="text-left px-8 py-4">Lender</th>
                  <th className="text-center px-4 py-4">Interest Rate</th>
                  <th className="text-center px-4 py-4">Max Loan</th>
                  <th className="text-center px-4 py-4">Max Tenure</th>
                  <th className="text-center px-8 py-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {lenders.map((l, i) => (
                  <tr key={l.name} className="hover:bg-stone-50 transition-colors">
                    <td className="px-8 py-4 font-medium text-navy">{l.name}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="bg-emerald-50 text-emerald-700 text-sm font-bold px-3 py-1 rounded-full">
                        {l.rate}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm text-charcoal/70">{l.maxLoan}</td>
                    <td className="px-4 py-4 text-center text-sm text-charcoal/70">{l.tenure}</td>
                    <td className="px-8 py-4 text-center">
                      <a href="tel:+918951025158" className="text-sm font-semibold text-gold-dark hover:text-gold transition-colors">
                        Apply Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA banner */}
        <div className="relative rounded-3xl overflow-hidden bg-navy p-10 lg:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-gold/20" />
          <div className="relative z-10">
            <p className="section-label text-gold-light mb-3">Free Financial Consultation</p>
            <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">
              Not Sure Where to Start?
            </h3>
            <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Our financial advisors will evaluate your profile, suggest the best loan product,
              calculate your eligibility, and guide you through every step — at zero cost.
            </p>
            <a
              href="tel:+918951025158"
              className="btn-gold inline-flex items-center gap-2 group"
            >
              <Phone size={18} />
              Call Us Now — Free Advice
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
