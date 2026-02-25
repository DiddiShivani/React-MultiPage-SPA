import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className="flex justify-center py-6 bg-slate-800/30">
      <nav className="bg-slate-800 p-1 rounded-lg flex gap-2">
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `px-6 py-2 rounded-md transition-all ${isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`
          }
          end
        >
          All Events
        </NavLink>
        <NavLink
          to="/events/new"
          className={({ isActive }) =>
            `px-6 py-2 rounded-md transition-all ${isActive ? 'bg-orange-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`
          }
        >
          New Event
        </NavLink>
      </nav>
    </header>
  );
}
export default EventsNavigation;