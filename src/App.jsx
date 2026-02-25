import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import EventsPage,{loader as EventsLoader} from './pages/EventsPage';
import EventDetailPage, {loader as EventLoader} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import ErrorPage from './pages/ErrorPage';
import NewEventPage, { action as manipulateEventAction } from './pages/NewEventPage';
import { action as deleteEventAction } from './pages/EventDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: EventsLoader },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: EventLoader,
            action: deleteEventAction, // Register DELETE action here
            children: [
              { index: true, element: <EventDetailPage /> },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction // Register PATCH action here
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction // Register POST action here
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;