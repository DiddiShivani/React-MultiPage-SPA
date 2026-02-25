import { NavLink } from 'react-router-dom';

function MainNavigation() {
  const linkBase = "text-lg transition-all duration-300 hover:text-orange-400";
  const activeClass = ({ isActive }) =>
    isActive ? `${linkBase} text-orange-400 border-b-2 border-orange-400` : `${linkBase} text-slate-300`;

  return (
    <header className="w-full border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
      <nav className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-orange-500">
          EVENT<span className="text-white">.HUB</span>
        </div>
        <ul className="flex gap-8">
          <li><NavLink to="/" className={activeClass} end>Home</NavLink></li>
          <li><NavLink to="/events" className={activeClass}>Events</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;