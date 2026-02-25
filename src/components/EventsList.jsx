import { Link} from 'react-router-dom';

function EventsList({events}) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Upcoming Events</h1>
      <ul className="grid gap-6">
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`} className="group block bg-slate-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-orange-500 transition-all duration-300 shadow-xl">
              <div className="flex flex-col md:flex-row">
                <img src={event.image} alt={event.title} className="w-full md:w-64 h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{event.title}</h2>
                  <time className="text-orange-500 font-mono mt-2">{event.date}</time>
                  <p className="text-slate-400 mt-4 underline decoration-slate-700 underline-offset-4">View Details →</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EventsList;