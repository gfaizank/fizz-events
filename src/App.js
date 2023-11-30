import React, { useState } from 'react';
import Form from './components/Form';
import Listing from './components/Listing';
import Header from './components/Header';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const mockEvents = [
    {
      startDate: 'Mon, Dec 12',
      startTime: '3:00 PM',
      eventName: "Builder's Roundtable",
      image: 'https://via.placeholder.com/50',
      host: 'Octo ML',
      location: 'Virtual',
      status: 'Invited',
      attendees: '30',
    },
    {
      startDate: 'Thu, Nov 30',
      startTime: '12:50 PM',
      eventName: "Completing assignments",
      image: 'https://via.placeholder.com/50',
      host: 'FK',
      location: 'Virtual',
      status: 'Invited',
      attendees: '13',
    },
    
  ];

  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-2xl font-bold mb-4">Event Creation Web Application</h1> */}
      <Header />
      
      {/* Event Creation Form */}
      <Form addEvent={addEvent} />

      {/* Event Listing */}
      <Listing events={events.concat(mockEvents)} />
    </div>
  );
};

export default App;

