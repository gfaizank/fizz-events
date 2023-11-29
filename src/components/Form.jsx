import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

const Form = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventName && startDate && startTime && endDate && endTime) {
      const newEvent = {
        id: new Date().getTime(),
        name: eventName,
        startDateTime: `${startDate} ${startTime}`,
        endDateTime: `${endDate} ${endTime}`,
      };

      addEvent(newEvent);

      // Clear form fields after submission
      setEventName('');
      setStartDate('');
      setStartTime('');
      setEndDate('');
      setEndTime('');
    }
  };

  return (
    <div className="mb-8 mt-8">
      <h2 className="text-lg font-bold mb-2">Personal Calendar</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          <input
            type="text"
            placeholder='Event Name'
            value={eventName}
            onChange={handleEventNameChange}
            className="border p-1"
            required
          />
        </label>
        <label className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl mr-2" />
          Start Date & Time
          <div className="ml-2">
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="border p-1"
              required
            />
            <input
              type="time"
              value={startTime}
              onChange={handleStartTimeChange}
              className="border p-1 ml-2"
              required
            />
          </div>
        </label>
        <label className="mb-2 flex items-center">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl mr-2" />
          End Date & Time
          <div className="ml-2">
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="border p-1"
              required
            />
            <input
              type="time"
              value={endTime}
              onChange={handleEndTimeChange}
              className="border p-1 ml-2"
              required
            />
          </div>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default Form;

