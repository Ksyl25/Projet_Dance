// src/Event.js
import Image from 'next/image';
import React from 'react';
import fond_event1 from '../public/Assets/event1.jpg';


const Event = ({ name, organiser, price, place, type }) => {
  let vigniette = fond_event1;

  return (
    <div className="event-card">
      <div>
        <h2>{name}</h2>
        <Image className='image-vigniette' src={vigniette} />
      </div>

      <p><strong>Organisateur:</strong> {organiser}</p>
      <p><strong>Prix :</strong> {price} €</p>
      <p><strong>Lieux :</strong> {place}</p>
      <p><strong>Type :</strong> {type}</p>
    </div>
  );
};

export default Event;
