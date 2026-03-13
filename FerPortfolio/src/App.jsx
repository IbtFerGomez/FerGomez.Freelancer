import { Routes, Route } from 'react-router-dom';

// Componentes Globales
import Navbar from './components/Navbar';

// Páginas
import Home from './pages/Home';
import Hybrid from './pages/Hybrid';
import Science from './pages/Science';
import Software from './pages/Software';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  return (
    /* El contenedor principal maneja el fondo oscuro global (Tailwind v4)
      y asegura que el texto sea legible.
    */
    <div className="min-h-screen bg-space-black text-slate-200 selection:bg-logic-blue/30">
      
      {/* La Navbar es fija, por eso el div de abajo tiene padding-top (pt-24) */}
      <Navbar />

      <main className="pt-24 min-h-[calc(100vh-80px)]"> 
        <Routes>
          {/* Ruta Principal: Hero & Intro */}
          <Route path="/" element={<Home />} />

          {/* Secciones del Perfil Híbrido */}
          <Route path="/science" element={<Science />} />
          <Route path="/software" element={<Software />} />
          <Route path="/hybrid" element={<Hybrid />} />

          {/* Portafolio y Negocios */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Formulario de Contacto (EmailJS + TanStack Query) */}
          <Route path="/contact" element={<Contact />} />

          <Route path="/resume" element={<ResumeSelector />} />

          {/* Manejo de errores 404 - Página no encontrada */}
          <Route 
            path="*" 
            element={
              <div className="flex flex-col items-center justify-center py-32 text-center">
                <h1 className="text-6xl font-bold text-white/10 mb-4 font-mono">404</h1>
                <p className="text-slate-500 uppercase tracking-[0.3em] text-xs">Protocol Not Found</p>
                <a href="/" className="mt-8 text-logic-blue hover:underline font-bold">Return to Base</a>
              </div>
            } 
          />
        </Routes>
      </main>

      {/* Footer Sutil */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Fernando Gómez — Logical Architect & Bio-IT Engineer
        </p>
      </footer>
    </div>
  );
}

export default App;