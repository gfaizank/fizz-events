import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faUser, faVideo, faUserFriends, faMapPin } from '@fortawesome/free-solid-svg-icons';

const Listing = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const handleTabToggle = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-gray-200 p-4 mb-10">
      {/* Events and Toggle Button Row */}
      <div className="flex items-center justify-between mb-4">
        {/* Events */}
        <h2 className="text-4xl font-bold">Events</h2>

        {/* Toggle Capsule Button */}
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

      {/* Date, Day, and Map Pin Row */}
      <div className="flex items-center mb-4">
        {/* Date and Day */}
        <div className="float-left">
          <p className="text-gray-500 mr-3">Mon, Dec 12</p>
        </div>

        {/* Map Pin Icon */}
        <FontAwesomeIcon icon={faMapPin} className="text-gray-500 text-3xl mr-2" />

        {/* White Div */}
        <div className="bg-white p-4 ml-4 rounded flex-grow">
          {/* Event Details */}
          <div className="bg-white p-4 rounded mb-4">
            {/* Starting Time */}
            <p className="text-sm text-gray-500 mb-2"><FontAwesomeIcon icon={faClock} className="mr-1" /> 3:00 PM</p>

            {/* Event Title */}
            <h3 className="text-2xl font-bold mb-2">Builder's Roundtable</h3>

            {/* Image */}
            <img src="https://via.placeholder.com/50" alt="Event" className=" w-20 h-30 float-right " />

            {/* Event Host */}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faUser} className="text-sm text-gray-500 mr-1" />
              <p className="text-sm text-gray-500 mr-3">By Octo ML</p>
            </div>

            {/* Event Type */}
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faVideo} className="text-sm text-gray-500 mr-1" />
              <p className="text-sm text-gray-500 mr-3">Virtual</p>
            </div>

            {/* Invited Button */}
            <button className="bg-blue-500 text-white px-2 py-1 rounded mb-2">Invited</button>

            {/* Attendees */}
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUserFriends} className="text-sm text-gray-500 mr-1" />
              <p className="text-sm text-gray-500">30+ Attendees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
