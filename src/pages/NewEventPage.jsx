import { redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEventPage() {
    return <EventForm method="post" />;
}

export async function action({ request, params }) {
    const method = request.method;
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'), // Must match backend 'image' key
        date: data.get('date'),
        description: data.get('description'),
    };

    let url = 'http://localhost:8080/events';
    if (method === 'PATCH') {
        url = 'http://localhost:8080/events/' + params.eventId;
    }

    const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response; // Return validation errors to useActionData()
    }

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not save event.' }), { status: 500 });
    }

    return redirect('/events');
}