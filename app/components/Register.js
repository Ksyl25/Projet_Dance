import React from 'react';
import styles from '../styles/r.css';
import styles from '../styles/register.css';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Veuillez entrer vos informations</h2>
      <form className="register-form">
        <div>
          <label>
            Nom:
            <input type="text" name="lastName" />
          </label>
        </div>
        <div>
          <label>
            Prénom:
            <input type="text" name="firstName" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Mot de passe:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default Register;
