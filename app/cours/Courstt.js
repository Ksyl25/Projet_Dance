import React, { useState, useEffect } from "react";
import Image from 'next/image';
import PicksYourStyle from "../../public/Assets/danse-de-couples-de-dessin-animé-9104839.webp";
import ChooseHowOften from "../../public/Assets/png-clipart-dance-fashions-warehouse-dance-studio-art-hip-hop-style-dance-studio-cartoon.png";
import StartDancing from "../../public/Assets/e894525d2d12ed91af895dcdabe95089.jpg";
import "../CSS/r.css";
import "../login/login.css";
import axios from 'axios'
import "../register/register.css";

const Cours = () => {
  const [cours, setCours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/cours')
      .then(response => {
        setCours(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the cours data!', error);
        setError('There was an error fetching the data');
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  useEffect(() => {
    axios.get('http://localhost:5001/api/cours')
      .then(response => {
        console.log(response.data); // Ajouter un log pour vérifier les données
        setCours(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the cours data!', error);
      });
  }, []);



};

export default Cours;