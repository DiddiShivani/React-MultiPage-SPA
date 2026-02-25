import { useNavigate } from 'react-router-dom';

function EventForm({ method, event }) {
  const navigate = useNavigate();

  function cancelHandler() {
    // Navigates back one level in the route hierarchy
    navigate('..');
  }

  // Common input styles to keep the JSX clean
  const inputClasses = "w-full block p-1 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-inherit";
  const labelClasses = "block w-full font-bold mb-1 mt-4";

  return (
    <form className="max-w-[40rem] my-8 mx-auto p-4 bg-white shadow-md rounded-lg">
      <p>
        <label htmlFor="title" className={labelClasses}>Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          className={inputClasses}
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor="image" className={labelClasses}>Image URL</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          className={inputClasses}
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor="date" className={labelClasses}>Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          className={inputClasses}
          defaultValue={event ? event.date : ''}
        />
      </p>
      <p>
        <label htmlFor="description" className={labelClasses}>Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          className={inputClasses}
          defaultValue={event ? event.description : ''}
        />
      </p>

      <div className="flex gap-4 justify-end mt-6">
        <button
          type="button"
          onClick={cancelHandler}
          className="cursor-pointer py-2 px-6 rounded border-none bg-transparent text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          className="cursor-pointer py-2 px-6 rounded border-none bg-slate-300 text-slate-800 hover:bg-blue-400 hover:text-white transition-colors"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EventForm;