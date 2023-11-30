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
      date: 'Mon, Dec 12',
      time: '3:00 PM',
      title: "Builder's Roundtable",
      image: 'https://via.placeholder.com/50',
      host: 'Octo ML',
      type: 'Virtual',
      status: 'Invited',
      attendees: '30',
    },
    {
      date: 'Thu, Nov 30',
      time: '12:50 PM',
      title: "Completing assignments",
      image: 'https://via.placeholder.com/50',
      host: 'FK',
      type: 'Virtual',
      status: 'Invited',
      attendees: '13',
    }
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-2xl font-bold mb-4">Event Creation Web Application</h1> */}
      <Header />
      
      {/* Event Creation Form */}
      <Form addEvent={addEvent} />

      {/* Event Listing */}
      <Listing events={mockEvents} />
      
    </div>
  );
};

export default App;
