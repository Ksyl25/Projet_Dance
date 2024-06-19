// app/register/page.jsx
"use client";
import React, { useState } from 'react';
import "../register/register.css";
import "../CSS/r.css";

const Register = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Form submitted with data:', formData);

      if (response.ok) {
        alert('Utilisateur créé avec succès!');
      } else {
        const errorData = await response.json();
        alert(`Erreur lors de la création de l'utilisateur: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
      alert('Erreur lors de la requête');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Veuillez entrer vos informations</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nom:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Prénom:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Mot de passe:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default Register;
