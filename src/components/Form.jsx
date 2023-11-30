import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faTicketAlt,
  faCheckCircle,
  faUsers,
  faEye,
  faImage,
  faFill,
  faPencilAlt,
  faSort,
  faChevronDown,
  faSmileBeam,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';

const EventForm = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');

  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [approvalRequired, setApprovalRequired] = useState(false);
  const [capacity, setCapacity] = useState('');
  const [visibility, setVisibility] = useState('');
  const [theme, setTheme] = useState('');
  const [color, setColor] = useState('');
  const [typeface, setTypeface] = useState('');

  const [isApproved, setIsApproved] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggleApproval = () => {
    setIsApproved(!isApproved);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // Log the collected data
    const formData = {
      eventName,
      startDate,
      startTime,
      endDate,
      endTime,
      location,
      approvalRequired,
      capacity,
      visibility,
      theme,
      color,
      typeface,
      image: selectedImage,
    };
    console.log('Collected Form Data:', formData);

    addEvent(formData);

    // Clear form fields after submission
    setEventName('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setLocation('');
    setApprovalRequired(false);
    setCapacity('');
    setVisibility('');
    setTheme('');
    setColor('');
    setTypeface('');
    setSelectedImage("")
  };

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedImage(selectedFile);
  };

  return (
    <div className="flex">
      {/* FIRST HALF */}
      <div className="w-1/2 p-6">
        <h2 className="text-lg font-bold mb-4 flex items-center">
          <FontAwesomeIcon icon={faSmileBeam} className="text-gray-500 mr-2" />
          Personal Calendar
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-500 ml-2" />
        </h2>
        <form onSubmit={handleSubmit} className="mb-8">
          {/* Event Name */}
          <label className="mb-4">
            <input
              type="text"
              placeholder="Enter Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </label>

          {/* Start Date and Time */}
          <label className="mt-2 mb-4 flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-xl mr-2" />
            Start Date & Time
            <div className="ml-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border p-2"
                required
              />
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="border p-2 ml-2"
                required
              />
            </div>
          </label>

          {/* End Date and Time */}
          <label className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-xl mr-2" />
            End Date & Time
            <div className="ml-2">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border p-2"
                required
              />
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="border p-2 ml-2"
                required
              />
            </div>
          </label>

          {/* Location */}
          <label className="mb-4 flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mr-2" />
            <input
              type="text"
              placeholder="Add Event Location (Offline location or virtual link)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 ml-2 w-full"
            />
          </label>

          {/* Event Options */}
          <h5 className="mb-2">Event Options</h5>

          {/* Tickets */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTicketAlt} className="text-xl mr-2" />
              Tickets
            </div>
            <div className="flex items-center">
              <span className="mr-2">Free</span>
              <FontAwesomeIcon icon={faPencilAlt} className="text-sm" />
            </div>
          </div>

          {/* Approval Required */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className={`text-xl mr-2 ${isApproved ? 'text-green-500' : ''}`}
              />
              Approval Required
            </div>
            <div className="flex items-center">
              {/* Toggle Button */}
              <button
                className={`text-blue-500 mr-2 text-xl ${isApproved ? ' text-white' : ''}`}
                onClick={handleToggleApproval}
              >
                {isApproved ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
              </button>
            </div>
          </div>

          {/* Capacity */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="text-xl mr-2" />
              Capacity
            </div>
            <div className="flex items-center">
              <span className="mr-2">Unlimited</span>
              <FontAwesomeIcon icon={faPencilAlt} className="text-sm" />
            </div>
          </div>

          {/* Visibility */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEye} className="text-xl mr-2" />
              Visibility
            </div>
            <div className="flex items-center">
              <span className="mr-2">Public</span>
              <FontAwesomeIcon icon={faSort} className="" />
            </div>
          </div>

          {/* Create Event Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Create Event
          </button>
        </form>
      </div>

      {/* SECOND HALF */}
      <div className="w-1/2 p-6">
        {/* Image Tile */}
        <div className="mb-4 relative">
          {/* Replace the URL with your image source */}
          <img
            src={selectedImage ? URL.createObjectURL(selectedImage) : "https://via.placeholder.com/200"}
            alt="Event Image"
            className="w-full h-80 object-cover mb-2 rounded"
          />
          {/* Image Upload Icon */}
          <label htmlFor="imageInput" className="absolute bottom-0 right-0 cursor-pointer p-2">
            <FontAwesomeIcon icon={faImage} className="text-gray-500 text-xl font-bold hover:text-gray-700" />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Theme */}
        <h5 className="mb-2">Theme</h5>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFill} className="text-xl mr-2" />
            Color
          </div>
          <div className="flex items-center">
            <span className="mr-2">Gray</span>
            <FontAwesomeIcon icon={faSort} className="text-sm" />
          </div>
        </div>

        {/* Typeface */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <h3 className='font-bold mr-2'>Ag</h3>
            Typeface
          </div>
          <div className="flex items-center">
            <span className="mr-2">Default</span>
            <FontAwesomeIcon icon={faSort} className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;


