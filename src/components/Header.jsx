import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl mr-2" />
          <span className="font-bold">Events</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl mr-2" />
          <span className="font-bold">Calendar</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSearch} className="text-2xl mr-2" />
          <span className="font-bold">Explore</span>
        </div>
      </header>
    );
}

export default Header;
