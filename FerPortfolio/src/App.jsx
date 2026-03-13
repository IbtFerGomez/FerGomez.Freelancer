import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Hybrid from './pages/Hybrid';
import Science from './pages/Science';
import Software from './pages/Software';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-space-black text-slate-200">
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/software" element={<Software />} />
          <Route path="/hybrid" element={<Hybrid />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Si no has creado Contact.jsx, deja este placeholder temporal: */}
          <Route path="/contact" element={<div className="text-center py-20 font-bold text-2xl">Contact Form Loading...</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;