// components/CreateProfessorForm.jsx

import { useState } from 'react';
import axios from 'axios'; // Utilisation d'Axios pour les requêtes HTTP

const CreateProfessorForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/create-professor', formData);
      console.log('Professor created successfully:', response.data);
      // Réinitialiser le formulaire ou gérer une redirection
    } catch (error) {
      console.error('Error creating professor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
      <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="motDePasse" placeholder="Mot de passe" value={formData.motDePasse} onChange={handleChange} required />
      <button type="submit">Créer Professeur</button>
    </form>
  );
};

export default CreateProfessorForm;
