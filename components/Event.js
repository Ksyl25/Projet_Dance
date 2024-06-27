// src/Event.js
import Image from 'next/image';
import React from 'react';
import fond_event1 from '../public/Assets/event1.jpg';


const Event = ({ name, organiser, price, place, type , action}) => {
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
      break;

  }
      let bouton = "";
      switch(action ) {
        case 'inscription':
          bouton = "<button class='validation-button'>Insctiption</button>";
            break;
        case 'annulation':
          bouton = "<button class='cancel-button'>Annulation</button>";
            break;
        case 'desinscription':
          bouton = "<button class='unsubscribe-button'>Unsubscribe</button>";
            break;
        default:
          switch(Math.floor(Math.random() * ((3 - 1) + 1)) + 1 ){
            case 1:
              bouton = "<button class='validation-button'>Insctiption</button>";
              break;  
            case 2:
              bouton = "<button class='unsubscribe-button'>Unsubscribe</button>";
              break;
            case 3:
              bouton = "<button class='cancel-button'>Annulation</button>";
              break;
            default:
              bouton = "<button class='validation-button'>Insctiption</button>";
            break;
            
          }
        }


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
      {bouton}

    </div>

  );
};

export default Event;
