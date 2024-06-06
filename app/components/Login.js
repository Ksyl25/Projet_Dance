import React from 'react';
import styles from '../styles/r.css';
import styles from '../styles/login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Veuillez entrer vos identifiants</h2>
      <form className="login-form">
        <div>
          <label>
            Nom:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Mot de passe:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
