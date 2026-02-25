import { useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
    const params = useParams();

    // Dummy event object for display
    const event = {
        id: params.eventId,
        title: `Event ${params.eventId}`,
        date: '2026-12-25',
        image: 'https://picsum.photos/id/10/600/400',
        description: `Details for event with ID: ${params.eventId}`
    };

    return <EventItem event={event} />;
}