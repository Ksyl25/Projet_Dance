"use client";
import React, { useState } from "react";
import Image from 'next/image'; // Importez le composant Image de Next.js
import BannerBackground from "../../public/Assets/young-girl-dancing-modern-dance-dancer-in-graceful-pose-female-character-in-cartoon-style-illustration-isolate-vector.jpg";
import BannerImage from "../../public/Assets/young-girl-dancing-modern-dance-dancer-in-graceful-pose-female-character-in-cartoon-style-illustration-isolate-vector.jpg";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from 'next/navigation';
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";
import Register from "../register/Register";

  
export default function page() {

  const router = useRouter(); // Initialize useRouter
    const [showRegister, setShowRegister] = useState(false);
  
    const handleRegisterClick = () => {
      setShowRegister(true);
      //history.push('/register'); // Navigate to Register page
      router.push('/register'); // Navigate to the register page
    }

  return (
    <div className="home-container">
      <div className="home-banner-container">
        
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
          <Image src={BannerImage} alt="" />
        </div>
      </div>
      {showRegister && <Register />}
    </div>
  )
};
