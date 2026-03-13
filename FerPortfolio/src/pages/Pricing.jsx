import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Star, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: "Staff Augmentation",
    price: "$1,200/mo",
    sub: "or $8/hr",
    desc: "Backend Maintenance & Support.",
    features: ["Java / Spring Boot Development", "40h/week base", "Code Review & Refactoring", "Direct Slack Access"],
    cta: "Start Retainer",
    color: "border-white/5",
    icon: <Zap className="text-slate-400" size={24} />
  },
  {
    name: "Bio-IT Consulting",
    price: "$45 - $60",
    sub: "per hour",
    desc: "The Hybrid Powerhouse.",
    features: ["LIMS Architecture", "Biological Data Analysis", "Regulatory Validation (GxP)", "FDA 21 CFR Part 11 Guidance"],
    cta: "Hire Expert",
    highlight: true,
    color: "border-electric/50",
    icon: <Star className="text-electric" size={24} />
  },
  {
    name: "Custom Architecture",
    price: "Custom",
    sub: "Fixed-Price",
    desc: "End-to-end MVP Development.",
    features: ["Zero-to-One LIMS", "System Requirements (SRS)", "Database Design", "Scalability Roadmap"],
    cta: "Request Quote",
    color: "border-white/5",
    icon: <Sparkles className="text-emerald" size={24} />
  }
];

const Pricing = () => (
  <div className="max-w-7xl mx-auto px-8 py-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-4">Investment Models</h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
        Transparent <span className="text-slate-600">Pricing.</span>
      </h1>
      <p className="text-slate-400 text-xl max-w-2xl mx-auto">
        High-impact engineering for regulated industries. Choose your engagement model.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {tiers.map((tier, i) => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          className={`p-10 rounded-[40px] bg-glass border ${tier.color} flex flex-col relative overflow-hidden group hover:border-white/20 transition-all`}
        >
          {tier.highlight && (
            <div className="absolute top-0 right-0 bg-electric text-white text-[10px] font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-widest">
              Recommended
            </div>
          )}
          
          <div className="mb-6">{tier.icon}</div>
          
          <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">{tier.price}</span>
            <span className="text-slate-500 text-sm ml-2">{tier.sub}</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">{tier.desc}</p>
          
          <ul className="space-y-4 mb-10 flex-grow">
            {tier.features.map(f => (
              <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-emerald shrink-0" /> {f}
              </li>
            ))}
          </ul>
          
          <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
            tier.highlight 
              ? 'bg-electric text-white hover:bg-blue-600' 
              : 'bg-white/5 text-white hover:bg-white/10'
          }`}>
            {tier.cta}
          </button>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Pricing;