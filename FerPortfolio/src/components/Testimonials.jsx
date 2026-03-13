import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Fernando transformed our manual lab protocols into a seamless digital workflow. His understanding of GxP is rare for a developer.",
    author: "CEO, XelleScientific",
    role: "Biotech Innovation"
  },
  {
    quote: "The most logical backend architecture I've seen in years. Scalable, secure, and perfectly documented.",
    author: "Technical Lead",
    role: "Enterprise Software"
  }
];

const Testimonials = () => (
  <section className="py-20 bg-white/[0.02]">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold mb-12">Trusted by Life Sciences & IT Leaders</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-soft-glass border border-white/5 text-left"
          >
            <p className="text-slate-300 italic mb-6">"{t.quote}"</p>
            <p className="font-bold text-white">{t.author}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;