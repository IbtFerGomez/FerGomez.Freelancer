import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { name: 'Science', to: '/science' },
    { name: 'Software', to: '/software' },
    { name: 'Hybrid (LIMS)', to: '/hybrid' },
    { name: 'Projects', to: '/projects' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-space-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg tracking-tighter">
          FERNANDO GÓMEZ <span className="text-slate-500 font-normal">| Logical Architect</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm text-slate-400">
          {links.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-white transition-colors">{link.name}</Link>
          ))}
          <Link to="/contact" className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-logic-blue hover:text-white transition-all">
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;