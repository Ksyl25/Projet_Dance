// pages/courses.js

import React from 'react';
//import "../courses/courses.css"; // Assurez-vous de créer ce fichier CSS pour styliser votre page de cours
import Navbar from '../navbar/Navbar';
import "../login/login.css";
import "../register/register.css";
import "../CSS/r.css";
import Cours from "../cours/page";

const Courses = () => {
  return (
  <div>
    <Navbar/>
    <Cours/>
  </div>
  );
};

export default Courses;
