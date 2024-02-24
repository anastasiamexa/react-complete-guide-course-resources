import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
  }, {
    id: 'e2',
    title: 'Networking for introverts',
  }, {
    id: 'e3',
    title: 'Networking for extroverts',
  }
]

function EventsPage() {
  return (
    <div>
      <h1>The Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map(event => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsPage;