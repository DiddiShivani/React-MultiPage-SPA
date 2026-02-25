import EventForm from '../components/EventForm';
import {useRouteLoaderData} from 'react-router-dom'

export default function EditEventPage() {
    const data = useRouteLoaderData('event-detail')
    const event = data.event

    return (
        <>
            <h1 className="text-2xl text-center font-bold mt-8">Edit Event</h1>
            <EventForm method="patch"  event={event}/>
        </>
    );
}