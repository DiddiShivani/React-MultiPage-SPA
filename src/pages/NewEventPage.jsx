import EventForm from '../components/EventForm';

export default function NewEventPage() {
    return (
        <>
            <h1 className="text-2xl text-center font-bold mt-8">Create New Event</h1>
            <EventForm method="post" />
        </>
    );
}