import React, { useState } from 'react';
import './EventForm.css'; // Importing external CSS file for styling

const EventForm = ({ onSubmit }) => {
  // State to manage form input values
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [eventType, setEventType] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Creating the event object
    const newEvent = {
      title: title,
      date: date,
      description: description,
      eventType: eventType
    };
    // Calling the onSubmit prop with the new event object
    onSubmit(newEvent);
    // Resetting the form fields
    setTitle('');
    setDate('');
    setDescription('');
    setEventType('');
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="title">Title:</label>
      <input
        className="form-input"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className="form-label" htmlFor="date">Date:</label>
      <input
        className="form-input"
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <label className="form-label" htmlFor="eventType">Event Type:</label>
      <select
        className="form-select"
        id="eventType"
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        required
      >
        <option disabled selected value="">Choisisez une récurence</option>
        <option value="unique">Date unique</option>
        <option value="semaine">Toutes les semaines</option>
        <option value="M/S">Chaque mois le même jour de la semaine</option>
        <option value="M/J">Chaque mois le même jour </option>
        <option value="A/j">Tout les ans le même jour </option>
        <option value="A/S">Tout les ans même jour de la semaine </option>
      </select>
      <label className="form-label" htmlFor="description">Description:</label>
      <textarea
        className="form-textarea"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button className="form-button" type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
