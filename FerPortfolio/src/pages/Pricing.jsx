import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const tiers = [
  {
    name: "Staff Augmentation",
    price: "$1,200/mo",
    sub: "or $8/hr",
    desc: "Backend Maintenance & Support.",
    features: ["Java / Spring Boot Development", "40h/week base", "Code Review & Refactoring", "Direct Slack Access"],
    cta: "Start Retainer",
    color: "border-white/5"
  },
  {
    name: "Bio-IT Consulting",
    price: "$45 - $60",
    sub: "per hour",
    desc: "The Hybrid Powerhouse.",
    features: ["LIMS Architecture", "Biological Data Analysis", "Regulatory Validation (GxP)", "FDA 21 CFR Part 11 Guidance"],
    cta: "Hire Expert",
    highlight: true,
    color: "border-logic-blue/50"
  },
  {
    name: "Custom Architecture",
    price: "Custom",
    sub: "Fixed-Price",
    desc: "End-to-end MVP Development.",
    features: ["Zero-to-One LIMS", "System Requirements (SRS)", "Database Design", "Scalability Roadmap"],
    cta: "Request Quote",
    color: "border-white/5"
  }
];

const Pricing = () => (
  <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Models</h1>
      <p className="text-slate-400">Transparent pricing for high-impact engineering.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, i) => (
        <div key={i} className={`p-8 rounded-[32px] bg-soft-glass border ${tier.color} flex flex-col relative overflow-hidden`}>
          {tier.highlight && <div className="absolute top-0 right-0 bg-logic-blue text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest">Recommended</div>}
          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">{tier.price}</span>
            <span className="text-slate-500 text-sm ml-2">{tier.sub}</span>
          </div>
          <p className="text-slate-400 text-sm mb-8">{tier.desc}</p>
          <ul className="space-y-4 mb-10 flex-grow">
            {tier.features.map(f => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-bio-green shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.highlight ? 'bg-logic-blue text-white hover:bg-blue-600' : 'bg-white/5 text-white hover:bg-white/10'}`}>
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;