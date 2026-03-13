import React from 'react';
import { ExternalLink, Beaker, Code2, Database } from 'lucide-react';

const projects = [
  {
    title: "Custom LIMS for XelleScientific",
    tags: ["Java", "Spring Boot", "Bio-Data Integrity"],
    desc: "Architecture and development of a Laboratory Information Management System ensuring FDA 21 CFR Part 11 compliance.",
    icon: <Database className="text-bio-green" size={24} />
  },
  {
    title: "GxP Automation with AI",
    tags: ["Python", "Automation", "Compliance"],
    desc: "Real-time auditing of Standard Operating Procedures (SOPs) using intelligent logic to minimize human error.",
    icon: <Beaker className="text-logic-blue" size={24} />
  },
  {
    title: "BioAct Clean Tech",
    tags: ["R&D", "Business Planning", "Innovation"],
    desc: "Clean Tech Composting Accelerator: Bridging research with business viability and technical scalability.",
    icon: <Code2 className="text-white" size={24} />
  }
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h1>
      <p className="text-slate-400 mb-12 text-lg">Logic-driven solutions for complex industries.</p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="group bg-soft-glass border border-white/5 p-8 rounded-[32px] hover:border-white/20 transition-all">
            <div className="mb-6">{p.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-logic-blue transition-colors">{p.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;