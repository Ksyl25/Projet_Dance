"use client";
import "../Recettes/page"
import "../Caisse/page";
import Image from 'next/image';
import Logo from "../../public/Assets/Logo.svg";
import "../CSS/c.css";
import { useRouter } from 'next/navigation';
import React from 'react'


const Page = () => {
    const router = useRouter();

  const handle = () => {
    router.push("/Caisse");
  }

  const Handle = () => {
    router.push("/Recettes");
  }

  return (
    <div>
       <Image 
        src={Logo} 
        alt="Logo" 
        style={{ 
          width: '200px', /* Ajustez cette valeur selon la taille désirée */
          height: 'auto' 
        }} 
      />
      <h1>Suivi des Recettes et Gestion de Caisse</h1>
      <nav>
        <ul>
          <li><button onClick={Handle}>Suivi des Recettes</button></li>
          <li><button onClick={handle}>Gestion de Caisse</button></li>
        </ul>
      </nav>
    </div>
  );
}

export default Page;
