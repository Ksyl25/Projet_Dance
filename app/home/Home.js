"Use client"
import React, { useState } from "react";
import BannerBackground from "../../public/Assets/young-girl-dancing-modern-dance-dancer-in-graceful-pose-female-character-in-cartoon-style-illustration-isolate-vector (1).jpg";
import BannerImage from "../../public/Assets/young-girl-dancing-modern-dance-dancer-in-graceful-pose-female-character-in-cartoon-style-illustration-isolate-vector (1).jpg";
import { FiArrowRight } from "react-icons/fi";
import { useHistory } from 'react-router-dom'; // Import useHistory
import "./r.css";
import "./login.css";
import "./register.css";
import Register from "../register";

const Home = () => {
  const history = useHistory(); // Initialize useHistory
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    history.push('/register'); // Navigate to Register page
  };

  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            VOTRE ASSOCIATION DE DANSE A VOTRE DISPOSITION. 
          </h1>
          <p className="primary-text">
            DANSER N'A JAMAIS ETE AUSSI SIMPLE.
          </p>
          <button className="secondary-button" onClick={handleRegisterClick}>
            Commencez Maintenant <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      {showRegister && <Register />}
    </div>
  );
};

export default Home;
