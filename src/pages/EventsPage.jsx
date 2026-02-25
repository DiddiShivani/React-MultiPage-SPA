import { useEffect, useState } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                    setError('Fetching events failed. Please ensure the backend is running.');
                } else {
                    const resData = await response.json();
                    setFetchedEvents(resData.events);
                }
            } catch (err) {
                setError('Could not connect to the server.');
            }
            setIsLoading(false);
        }

        fetchEvents();
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="text-center">
                {isLoading && (
                    <div className="flex flex-col items-center justify-center space-y-4 py-20">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-xl text-slate-400 font-medium">Loading events...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg my-10">
                        <p className="text-red-400 font-bold text-lg">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            </div>

            {!isLoading && fetchedEvents && fetchedEvents.length > 0 && (
                <EventsList events={fetchedEvents} />
            )}

            {!isLoading && fetchedEvents && fetchedEvents.length === 0 && !error && (
                <p className="text-center text-slate-500 text-xl py-20">No events found.</p>
            )}
        </div>
    );
}

export default EventsPage;