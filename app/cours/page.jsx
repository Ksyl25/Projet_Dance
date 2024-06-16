"use client"; // Marque ce fichier comme un composant client

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";
import "../../public/Assets/default-image.jpg";

const Cours = () => {
  const [coursData, setCoursData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCours = async () => {
      try {
        const response = await fetch('/api/cours');
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
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1>Voici les différents cours de danse que nous proposons dans notre association:</h1>
      </div>
      <div className="work-section-bottom">
        {Array.isArray(coursData) && coursData.length > 0 ? (
          coursData.map((cours) => (
            <div className="work-section-info" key={cours.cours_id}>
              <div className="info-boxes-img-container">
                <Image src={"/default-image.jpg"} alt={cours.titre} width={200} height={200} />
              </div>
              <h2>{cours.titre}</h2>
              <p>Par BIAMA DANSE</p>
              <p>Prix: {cours.prix} Euros</p>
            </div>
          ))
        ) : (
          <div>No courses available</div>
        )}
      </div>
    </div>
  );
};

export default Cours;

