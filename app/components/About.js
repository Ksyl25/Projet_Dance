import React from "react";
import { useRouter } from 'next/router';
import AboutBackground from '../public/assets/AboutBackground.jpg';
import AboutBackgroundImage from '../public/assets/AboutBackgroundImage.jpg';
import { BsFillPlayCircleFill } from "react-icons/bs";
import styles from '../styles/r.css';
import styles from '../styles/login.css';
import styles from '../styles/register.css';

const About = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/learn-more");
  };

  const handleWatchVideoClick = () => {
    router.push("/watch-video");
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">A Propos</p>
        <h1 className="primary-heading">
          SI TU ES PASSIONNE PAR LA DANSE NOTRE ASSOCIATION EST FAITE POUR TOI.
        </h1>
        <p className="primary-text">
          DANS UN CADRE PROPICE ET AGREABLE TU POURRAS PRATIQUER LA DANSE EN TOUTE QUIETUDE
        </p>
        <p className="primary-text">
          AVEC DES PROFESSEURS TALENTUEUX ET DEVOUES POUR VOUS APPRENDRE A DANSER
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button" onClick={handleLearnMoreClick}>NOS COURS</button>
          <button className="watch-video-button" onClick={handleWatchVideoClick}>
            <BsFillPlayCircleFill /> Regarder Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
