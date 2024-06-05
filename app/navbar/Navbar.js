/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../Assets/Logo.svg";
import { useHistory } from 'react-router-dom';
import "./r.css";
import "./login.css";
import "./register.css";

const Navbar = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const goToRegister = () => {
    history.push('/register');
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
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
