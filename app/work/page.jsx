// app/work/page.jsx (if using the app directory)
import React from "react";
import Image from 'next/image';
import PicksYourStyle from '../../public/Assets/529-5292982_fiche-d-inscription-application-form-form-icon-hd.png';
import ChooseHowOften from '../../public/Assets/331-3316490_calendar-icon-orange-rgb-black-and-white-clipart.png';
import StartDancing from '../../public/Assets/8c5c40cc8a489138556eaa220364b339.jpg';

const Work = () => {
  const workInfoData = [
    {
      image: PicksYourStyle,
      title: "Inscrivez vous",
      text: "Choisir parmi plusieurs styles de danse, le style qui te convient."
    },
    {
      image: ChooseHowOften,
      title: "Choisissez à quelle fréquence",
      text: "Choisir parmi les jours disponibles ce qui te convient",
    },
    {
      image: StartDancing,
      title: "Commencer les cours de danse",
      text: "C'est parti pour l'aventure",
    },
  ];
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Travail</p>
        <h1 className="primary-heading">Comment ça Marche</h1>
        <p className="primary-text">
          Il suffit juste de suivre les étapes juste en bas pour pouvoir avoir accès à l'association :
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <Image src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
