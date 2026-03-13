import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ink-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group no-underline">
          <div className="w-2 h-2 bg-emerald rounded-full group-hover:animate-ping" />
          <span className="font-bold tracking-tighter text-white">FERNANDO GÓMEZ</span>
        </Link>
        
        <div className="hidden md:flex gap-10 items-center">
          {['Science', 'Software', 'Hybrid', 'Projects'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="text-xs uppercase tracking-[0.2em] font-medium text-slate-500 hover:text-white transition-colors no-underline"
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-electric hover:text-white transition-all no-underline"
          >
            LET'S TALK
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;