// src/EventList.js

import React from 'react';
import events from './eventsData';
import Event from './Event';
import './EventList.css';

const EventList = () => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          organiser={event.organiser}
          price={event.price}
          place={event.place}
          type={event.type}
        />
      ))}
    </div>
  );
};

export default EventList;
