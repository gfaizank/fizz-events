import React, { useState } from 'react';
import Form from './components/Form';
import Listing from './components/Listing';
import Header from './components/Header';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-2xl font-bold mb-4">Event Creation Web Application</h1> */}
      <Header />
      
      {/* Event Creation Form */}
      <Form addEvent={addEvent} />

      {/* Event Listing */}
      <Listing events={events} />
    </div>
  );
};

export default App;