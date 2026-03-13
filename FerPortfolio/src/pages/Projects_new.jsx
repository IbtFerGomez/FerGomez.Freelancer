import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: "01",
    title: "XelleScientific LIMS",
    category: "LIMS Architecture",
    description: "Custom Laboratory Information Management System with FDA 21 CFR Part 11 compliance for pharmaceutical QC operations.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    gradient: "from-electric/20 to-transparent"
  },
  {
    id: "02",
    title: "BioAct CleanTech",
    category: "R&D Software",
    description: "IoT-enabled composting accelerator platform with real-time data analytics and automated environmental controls.",
    tags: ["Python", "Automation", "IoT", "ML"],
    image: "https://images.unsplash.com/photo-1532187878486-81a5383669ad?auto=format&fit=crop&q=80&w=800",
    gradient: "from-emerald/20 to-transparent"
  },
  {
    id: "03",
    title: "GxP Validation Suite",
    category: "Compliance Automation",
    description: "Automated SOP validation and audit trail generation for regulated biotech environments.",
    tags: ["Java", "Spring AI", "Compliance", "Automation"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    gradient: "from-white/20 to-transparent"
  }
];

const Projects = () => (
  <div className="max-w-7xl mx-auto px-8 py-20">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-20"
    >
      <h2 className="text-xs font-bold tracking-[0.4em] text-slate-500 uppercase mb-4">Case Studies</h2>
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
        Technical <span className="text-slate-600">Excellence.</span>
      </h1>
      <p className="text-slate-400 text-xl max-w-2xl">
        Selected projects demonstrating the fusion of biological expertise and enterprise software architecture.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((p, index) => (
        <motion.div 
          key={p.id} 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-[40px] mb-6 border border-white/5 bg-glass">
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-70" 
            />
            <div className={`absolute inset-0 bg-gradient-to-b ${p.gradient} opacity-80`} />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
              {p.id} / {p.category}
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric transition-colors">
            {p.title}
          </h3>
          
          <p className="text-slate-500 text-sm mb-4 leading-relaxed">
            {p.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {p.tags.map(tag => (
              <span 
                key={tag} 
                className="text-[10px] text-slate-400 font-mono tracking-widest uppercase bg-white/5 px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-20 p-12 rounded-[40px] border border-white/10 bg-glass text-center"
    >
      <h3 className="text-2xl font-bold mb-4">Want to see more detailed case studies?</h3>
      <p className="text-slate-500 mb-6 max-w-xl mx-auto">
        Request access to full project documentation including architecture diagrams, tech specs, and compliance reports.
      </p>
      <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-electric hover:text-white transition-all">
        Request Portfolio Access
      </button>
    </motion.div>
  </div>
);

export default Projects;
