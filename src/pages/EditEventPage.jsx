import EventForm from '../components/EventForm';

export default function EditEventPage() {
    return (
        <>
            <h1 className="text-2xl text-center font-bold mt-8">Edit Event</h1>
            <EventForm method="patch" />
        </>
    );
}