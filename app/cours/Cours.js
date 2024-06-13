import React from "react";
import Image from 'next/image';
import PicksYourStyle from "../../public/Assets/danse-de-couples-de-dessin-animé-9104839.webp";
import ChooseHowOften from "../../public/Assets/png-clipart-dance-fashions-warehouse-dance-studio-art-hip-hop-style-dance-studio-cartoon.png";
import StartDancing from "../../public/Assets/e894525d2d12ed91af895dcdabe95089.jpg";
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";


const Cours = () => {
  const workInfoData = [
    {
      image: PicksYourStyle,
      title: "SALSA ",
      text: "Par BIAMA DANSE",
      text: "Prix 30 Euros"
    },
    {
      image: ChooseHowOften,
      title: "BREAK DANCE",
      text: "Par BIAMA DANSE",
      text: "Prix: 25 Euros"
    },
    {
      image: StartDancing,
      title: "DANSE CLASSIQUE",
      text: "Par BIAMA DANSE",
      text: "Prix: 20 Euros"
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <Image src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cours;
