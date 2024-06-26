"use client"; // Marque ce fichier comme un composant client

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";
import Navbar from "../../Components/NavBar";

const Cours = () => {
  const [coursData, setCoursData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const response = await fetch('/api/coursapi');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoursData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {console.log('Tous les cours:', coursData)}

      <Navbar />
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1> Nos cours : </h1>
        </div>
        <div className="work-section-bottom">
          {Array.isArray(coursData) && coursData.length > 0 ? (
            coursData.map((cours) => (
              <div className="work-section-info" key={cours.cours_id}>
                <div className="info-boxes-img-container">
                  <img
                    src={cours.image ? `${cours.image}` : "/images/default-image.jpg"}
                    alt="Uploaded"
                    width={200}
                    height={200}
                  />
                </div>
                <h2>{cours.titre}</h2>
                <p>Prix: {cours.prix} Euros</p>
              </div>
            ))
          ) : (
            <div>No courses available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cours;
