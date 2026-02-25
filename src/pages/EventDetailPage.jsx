import { useRouteLoaderData, redirect } from 'react-router-dom';

import EventItem from '../components/EventItem';

export default function EventDetailPage() {
    const data = useRouteLoaderData('event-detail');

    return <EventItem event={data.event} />;
}

export async function loader({request, params}){
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+id)

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ message: 'Could not fetch details for selected event .' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    } else {
        return response;
    }
}

export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method, // This will be DELETE
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
            status: 500,
        });
    }
    return redirect('/events');
}