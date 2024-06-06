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
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '5%',
    backgroundColor : 'purple' ,
  },
  field: {
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginBottom: '8px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    height: '80px',
    marginBottom: '8px',
  },
  babyContainer: {
    display: 'flex',
    gap: '8px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginRight: '8px',
  },
  
};

export default UserProfile;