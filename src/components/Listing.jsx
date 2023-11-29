import React from 'react';

const Listing = ({ events }) => {
    return (
      <div>
        <h2 className="text-lg font-bold mb-2">Event Listing</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id} className="mb-2">
              <strong>{event.name}</strong> - {event.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Listing;
