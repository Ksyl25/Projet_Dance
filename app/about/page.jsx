"use client"; // Ajoutez cette ligne en haut pour indiquer un composant côté client

import React from 'react';
import { useRouter } from 'next/navigation'; // Importez useRouter de next/navigation
import Image from 'next/image'; // Importez le composant Image de Next.js
import AboutBackground from '../../public/Assets/2422169-jeune-fille-danse-danse-moderne-danseuse-en-pose-gracieuse-personnage-femme-en-dessin-style-illustrationle-isoler-vectoriel.jpg';
import AboutBackgroundImage from '../../public/Assets/2422169-jeune-fille-danse-danse-moderne-danseuse-en-pose-gracieuse-personnage-femme-en-dessin-style-illustrationle-isoler-vectoriel.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";

const About = () => {
  const router = useRouter(); // Initialisez useRouter pour la navigation

  // Fonction pour gérer le clic sur le bouton "Apprendre plus"
  const handleLearnMoreClick = () => {
    // Redirigez l'utilisateur vers la page d'informations supplémentaires
    

    router.push('/learn-more');
  };

  // Fonction pour gérer le clic sur le bouton "Regarder vidéo"
  const handleWatchVideoClick = () => {
    // Redirigez l'utilisateur vers la page de lecture vidéo
    router.push('/watch-video');
  };

  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <Image src={AboutBackground} alt=""/>
      </div>
      <div className="about-section-image-container">
        <Image src={AboutBackgroundImage} alt=""/>
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
