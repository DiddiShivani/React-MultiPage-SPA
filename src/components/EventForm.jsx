import { Form, useNavigate, useNavigation, useActionData } from 'react-router-dom';

function EventForm({ method, event }) {
  const data = useActionData(); // Accesses validation errors if returned from action
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  return (
    <Form method={method} className="max-w-[40rem] mx-auto p-4 bg-slate-800 rounded-lg shadow-md mt-8">
      {data && data.errors && (
        <ul className="text-red-400 mb-4">
          {Object.values(data.errors).map((err) => <li key={err}>{err}</li>)}
        </ul>
      )}
      <div className="mb-4">
        <label htmlFor="title" className="block text-white mb-1">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} className="w-full p-2 rounded bg-slate-700 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-white mb-1">Image URL</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} className="w-full p-2 rounded bg-slate-700 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-white mb-1">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} className="w-full p-2 rounded bg-slate-700 text-white" />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white mb-1">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} className="w-full p-2 rounded bg-slate-700 text-white" />
      </div>
      <div className="flex justify-end gap-4 mt-6">
        <button type="button" onClick={cancelHandler} disabled={isSubmitting} className="text-slate-300 hover:text-white">Cancel</button>
        <button disabled={isSubmitting} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-400">
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;