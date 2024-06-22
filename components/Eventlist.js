// src/EventList.js

import React from 'react';
//import events from './eventsData'; // 
import Event from './Event';
import './EventList.css';

const events = [
  {
    name: 'Music Festival',
    organiser: 'ABC Events', 
    price: '50',
    place: 'City Park',
    type: 'Concert',
    action: 'inscription' // 'annulation' 'desinscription'
  },
  {
    name: 'Art Exhibition',
    organiser: 'Creative Minds',
    price: 'Gratuit',
    place: 'Downtown Gallery',
    type: 'Exhibition',
    action: 'annulation'
  },
  {
    name: 'Tech Conference',
    organiser: 'Innovate Inc.',
    price: '200',
    place: 'Convention Center',
    type: 'Conference',
    action: 'desinscription'
  },
  // Add more events as needed
];

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
