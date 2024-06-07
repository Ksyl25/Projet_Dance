// app/testimonial/page.jsx (if using the app directory)
import React from "react";
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import ProfilePic from '../../public/Assets/john-doe-image.png'; // Ensure the path is correct
import "../CSS/r.css";
import "../login/login.css";
import "../register/register.css";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Temoignage</p>
        <h1 className="primary-heading">Ce qu'ils disent</h1>
        <p className="primary-text">
          "Découvrez la magie de la danse avec nous ! Rejoignez notre communauté dynamique et passionnée pour des cours inoubliables, des professeurs dévoués et des moments de pur plaisir. Que vous soyez débutant ou danseur expérimenté, notre association vous offre l'opportunité de vous exprimer, de vous améliorer et de rencontrer des amis partageant la même passion. Inscrivez-vous dès aujourd'hui et commencez à danser avec nous !"
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <Image src={ProfilePic} alt="Profile picture of John Doe" width={150} height={150} /> {/* Adjust width and height as needed */}
        <p>
          "Rejoindre l'Association de Danse a été une expérience incroyable pour moi. Les cours sont passionnants et les professeurs sont fantastiques. J'ai non seulement amélioré mes compétences en danse, mais j'ai aussi rencontré des amis formidables. L'ambiance est toujours chaleureuse et motivante. Je recommande vivement cette association à tous ceux qui veulent apprendre à danser tout en s'amusant !"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
