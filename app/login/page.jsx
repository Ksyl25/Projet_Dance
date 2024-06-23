// app/login/page.jsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import "../login/login.css";
import "../CSS/r.css";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
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
    const result = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password
    });

    if (result.error) {
      alert('Erreur de connexion');
    } else {
      alert('Connexion réussie');
      router.push('/profil');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Veuillez entrer vos identifiants</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
