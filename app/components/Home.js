import React, { useState } from "react";
import BannerBackground from '../public/assets/BannerBackground.jpg';
import BannerImage from '../public/assets/BannerImage.jpg';
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from 'next/router';
import styles from '../styles/r.css';
import styles from '../styles/login.css';
import styles from '../styles/register.css';
import Register from "./Register";

const Home = () => {
  const router = useRouter();
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    router.push('/register');
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
