import React from 'react';
import { FileText, Code, Microscope, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const resumes = [
  {
    title: "Software Engineer",
    subtitle: "Backend Java / Spring Boot",
    desc: "Enfocado en escalabilidad, APIs RESTful y arquitectura de software. Ideal para empresas de tecnología pura.",
    icon: <Code className="text-electric" size={32} />,
    color: "from-blue-500/20 to-transparent",
    link: "/cvs/LuisGomez_Backend_Java.pdf", // Asegúrate de poner tus PDFs en la carpeta public/cvs/
    tags: ["Java 17", "Spring Security", "PostgreSQL", "Docker"]
  },
  {
    title: "Hybrid Bio-IT",
    subtitle: "LIMS & GxP Specialist",
    desc: "El puente entre la ciencia y el código. Especializado en digitalización de laboratorios y normativas FDA.",
    icon: <Zap className="text-emerald" size={32} />,
    color: "from-emerald-500/20 to-transparent",
    link: "/cvs/LuisGomez_Hybrid_BioIT.pdf",
    tags: ["LIMS", "GxP Automation", "Spring AI", "Validation"]
  },
  {
    title: "R&D Consultant",
    subtitle: "Biotech Innovation & Quality",
    desc: "Perfil científico de alto nivel. Gestión de patentes, protocolos de I+D y cumplimiento regulatorio ISO.",
    icon: <Microscope className="text-white" size={32} />,
    color: "from-white/10 to-transparent",
    link: "/cvs/LuisGomez_Consultant_R&D.pdf",
    tags: ["Patents", "SOPs", "Raman Spectroscopy", "Quality"]
  }
];

const ResumeSelector = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.5em] text-slate-500 uppercase mb-4"
        >
          Recruitment Portal
        </motion.h2>
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
          Select Your <span className="text-slate-500">Protocol.</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {resumes.map((cv, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative group bg-glass border border-white/5 p-8 rounded-[40px] overflow-hidden hover:border-white/20 transition-all`}
          >
            {/* Gradiente de fondo sutil */}
            <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${cv.color} opacity-50`} />
            
            <div className="relative z-10">
              <div className="mb-8">{cv.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-1">{cv.title}</h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">{cv.subtitle}</p>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-20">
                {cv.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {cv.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded-md text-slate-300 uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={cv.link} 
                download
                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-electric hover:text-white transition-all no-underline group"
              >
                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-[32px] border border-dashed border-white/10 text-center">
        <p className="text-slate-500 text-sm">
          ¿Necesitas un perfil personalizado para un proyecto específico? 
          <a href="/contact" className="text-white font-bold ml-2 hover:underline">Solicita un Tech Audit →</a>
        </p>
      </div>
    </div>
  );
};

export default ResumeSelector;