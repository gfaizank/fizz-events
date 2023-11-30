import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faVideo, faUserFriends, faMapPin } from '@fortawesome/free-solid-svg-icons';

const Listing = ({ events }) => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const handleTabToggle = (tab) => {
    setSelectedTab(tab);
  };

  const formattedDate = new Date(events.startDate);
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  const displayDate = formattedDate.toLocaleDateString('en-US', options);

  return (
    <div className="bg-gray-200 p-4 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold">Events</h2>
        <div className="flex">
          <button
            className={`text-sm mr-2 px-4 py-2 rounded-full ${selectedTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            onClick={() => handleTabToggle('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`text-sm px-4 py-2 rounded-full ${selectedTab === 'past' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            onClick={() => handleTabToggle('past')}
          >
            Past
          </button>
        </div>
      </div>

      {events.map((event, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="float-left">
            <p className="text-gray-500 mr-3">{event.startDate}</p>
          </div>
          <FontAwesomeIcon icon={faMapPin} className="text-gray-500 text-3xl mr-2" />
          <div className="bg-white p-4 ml-4 rounded flex-grow">
            <div className="bg-white p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2"><FontAwesomeIcon icon={faClock} className="mr-1" /> {event.startTime}</p>
              <h3 className="text-2xl font-bold mb-2">{event.eventName}</h3>
              <img src={event.image? `${event.image}` : `https://via.placeholder.com/50`} alt="Event" className="w-20 h-30 float-right" />
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faUser} className="text-sm text-gray-500 mr-1" />
                <p className="text-sm text-gray-500 mr-3">By FK</p>
              </div>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon icon={faVideo} className="text-sm text-gray-500 mr-1" />
                <p className="text-sm text-gray-500 mr-3">{event.location}</p>
              </div>
              <button className="bg-blue-500 text-white px-2 py-1 rounded mb-2">Invited</button>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUserFriends} className="text-sm text-gray-500 mr-1" />
                <p className="text-sm text-gray-500">{event.attendees ? `${event.attendees}+` : '10+'} Attendees</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;

