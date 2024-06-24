// Navbar.jsx
"use client";
import React from "react";
import { useRouter } from 'next/navigation'; // Use next/navigation for Server Components
import Image from 'next/image'; // Ensure you are importing the Image component from Next.js
import Logo from '../../public/Assets/Logo.svg'; // Ensure the path is correct
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";
import "../CSS/navbar.css";

const Navbar = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login'); // Navigate to the login page
  };

  const goToRegister = () => {
    router.push('/register'); // Navigate to the register page
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <Image src={Logo} alt="Logo"/> {/* Adjust width and height as needed */}
      </div>
      <div className="navbar-links-container">
        <button onClick={goToLogin} style={{ marginRight: '100px' }}>
          Connexion
        </button>
        <button onClick={goToRegister} style={{ marginRight: '100px' }}>
          Inscription
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
