import React, { useState } from 'react';

const UserProfile = () => {
  // TODO Informations de base dans l'objet profil
  const [profile, setProfile] = useState({
    nom: 'John Doe',
    prenom: 'Stephant',
    creation: '01/02/2023',
    email: 'john.doe@example.com',
    nb_entree: '5',
  });

  const [isEditing, setIsEditing] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };


  const toggleEdit = () => {
    setIsEditing((prevEditing) => !prevEditing);
  };
  const handleSave = () => {
    // TODO Sauvgarder les changement dans la base de donnée
    console.log('Profile saved:', profile);
    toggleEdit();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.field}>Profil de l'utilisateur</h2>
      <div style={styles.field}>
        <label>Nom:</label>
        {isEditing ? (
          <input
            type="text"
            name="nom"
            value={profile.nom}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <span>{profile.nom}</span>
        )}
      </div>
      <div style={styles.field}>
        <label>Prénom :</label>
        {isEditing ? (
          <input
            type="text"
            name="prenom"
            value={profile.prenom}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <span>{profile.prenom}</span>
        )}
      </div>
      <div style={styles.field}>
        <label>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <span>{profile.email}</span>
        )}
      </div>
      <div style={styles.babyContainer}>
        <label>Nombre places restantes:</label>
          <h1>{profile.nb_entree}</h1>
      </div>
      <div style={styles.babyContainer}>
        <label>Date de création:</label>
          <h1>{profile.creation}</h1>
      </div>
      <button onClick={toggleEdit} style={styles.button}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
      {isEditing && (
        <button onClick={handleSave} style={styles.button}>
          Save
        </button>
      )}
    </div>
  );
};
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'purple',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    marginTop : '2.5%',
  },
  field: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'purple',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    height: '80px',
    marginBottom: '12px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'purple',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  babyContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    marginRight: '38px',
  },
};

export default UserProfile;