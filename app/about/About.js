import React from "react";
import { useHistory } from "react-router-dom"; // Importez useHistory si vous utilisez React Router pour la navigation
import AboutBackground from "../Assets/2422169-jeune-fille-danse-danse-moderne-danseuse-en-pose-gracieuse-personnage-femme-en-dessin-style-illustrationle-isoler-vectoriel.jpg";
import AboutBackgroundImage from "../Assets/2422169-jeune-fille-danse-danse-moderne-danseuse-en-pose-gracieuse-personnage-femme-en-dessin-style-illustrationle-isoler-vectoriel.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./r.css";
import "./login.css";
import "./register.css";

const About = () => {
  const history = useHistory(); // Initialisez useHistory pour la navigation

  // Fonction pour gérer le clic sur le bouton "Apprendre plus"
  const handleLearnMoreClick = () => {
    // Ici, vous pouvez rediriger l'utilisateur vers la page appropriée
    // Par exemple :
    history.push("/learn-more"); // Redirigez l'utilisateur vers la page d'informations supplémentaires
  };

  // Fonction pour gérer le clic sur le bouton "Regarder vidéo"
  const handleWatchVideoClick = () => {
    // Ici, vous pouvez ouvrir une modale vidéo ou rediriger l'utilisateur vers une page vidéo
    // Par exemple :
    history.push("/watch-video"); // Redirigez l'utilisateur vers la page de lecture vidéo
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
          {/* Ajoutez des gestionnaires d'événements aux boutons */}
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
