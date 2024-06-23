// src/Event.js
import Image from 'next/image';
import React from 'react';
import fond_event1 from '../public/Assets/event1.jpg';
import fond_event2 from '../public/Assets/event2.jpg';
import fond_event3 from '../public/Assets/event3.jpg';
import fond_event4 from '../public/Assets/event_danse1.jpg';
import fond_event5 from '../public/Assets/event_danse2.jpg';
import fond_event6 from '../public/Assets/event_danse3.jpg';

const Event = ({ name, organiser, price, place, type }) => {
  let vigniette=fond_event1;
  switch(Math.floor(Math.random() * (6 - 1 + 1)) + 1 ) {
    case 1:
      vigniette=fond_event1;
        break;
    case 2:
      vigniette=fond_event2;
        break;
    case 3:
      vigniette=fond_event3;
        break;
    case 4:
      vigniette=fond_event4;
        break;
    case 5:
      vigniette=fond_event5;
        break;
    case 6:
      vigniette=fond_event6;
        break;
    default:
      vigniette=fond_event1;
}
  return (
    <div className="event-card">
      <div>
        <h2>{name}</h2>
        <Image className='image-vigniette' src={vigniette}/>
      </div>

      <p><strong>Organisateur:</strong> {organiser}</p>
      <p><strong>Prix :</strong> {price} €</p>
      <p><strong>Lieux :</strong> {place}</p>
      <p><strong>Type :</strong> {type}</p>
    </div>
  );
};

export default Event;
