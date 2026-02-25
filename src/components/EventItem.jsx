import { Link, useSubmit } from 'react-router-dom';

function EventItem({ event }) {
  const submit = useSubmit(); 

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure you want to delete this event?');
    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <article className="max-w-[50rem] my-8 mx-auto text-center border p-6 rounded-lg shadow-sm bg-white">
      <img
        src={event.image}
        alt={event.title}
        className="w-full max-w-[30rem] h-64 object-cover mx-auto rounded-md shadow-inner"
      />
      <h1 className="text-3xl font-bold mt-4 mb-2 text-slate-800">{event.title}</h1>
      <time className="block text-slate-500 italic mb-4">{event.date}</time>
      <p className="text-lg text-slate-600 mb-6 leading-relaxed">{event.description}</p>

      <menu className="flex gap-4 justify-center items-center p-0 m-0 border-t pt-4">
        <Link
          to="edit"
          className="py-1 px-4 text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all no-underline font-medium"
        >
          Edit
        </Link>
        <button
          onClick={startDeleteHandler}
          className="py-1 px-4 text-red-600 bg-transparent border border-transparent hover:bg-red-50 rounded transition-all cursor-pointer font-medium"
        >
          Delete
        </button>
      </menu>
    </article>
  );
}

export default EventItem;