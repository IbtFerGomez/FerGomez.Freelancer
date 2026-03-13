import { motion } from 'framer-motion';
import { ArrowRight, Box, Activity, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Luz de fondo decorativa */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric/10 blur-[120px] rounded-full" />
      
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-emerald font-mono text-xs tracking-[0.4em] uppercase mb-6 block font-bold">
            Logical Architect // Bio-IT Engineer
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
            Bridging Biological <br /> 
            <span className="text-slate-600">Complexity.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
            Desarrollo sistemas LIMS y arquitecturas backend que traducen procesos biológicos en lógica de software escalable bajo normativas FDA.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="bg-electric hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all no-underline">
              View Portfolio <ArrowRight size={18} />
            </Link>
            <Link to="/hybrid" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all no-underline border border-white/10">
              The Hybrid Model
            </Link>
          </div>
        </motion.div>

        {/* Bento Grid de servicios rápido */}
        <div className="grid md:grid-cols-3 gap-6 mt-32">
          {[
            { icon: <Activity className="text-emerald" />, title: "Biotech Rigor", desc: "Cumplimiento GxP y validación de datos científicos." },
            { icon: <Terminal className="text-electric" />, title: "System Architecture", desc: "Backends robustos en Java Spring Boot para entornos críticos." },
            { icon: <Box className="text-white" />, title: "Full Automation", desc: "Integración de hardware de laboratorio con flujos digitales." }
          ].map((item, i) => (
            <div key={i} className="bg-glass border border-white/5 p-8 rounded-[32px] hover:border-white/20 transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;