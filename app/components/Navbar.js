import React from "react";
import { useRouter } from 'next/router';
import Logo from '../public/assets/Logo.svg';
import styles from '../styles/r.css';
import styles from '../styles/login.css';
import styles from '../styles/register.css';

const Navbar = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  const goToRegister = () => {
    router.push('/register');
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
