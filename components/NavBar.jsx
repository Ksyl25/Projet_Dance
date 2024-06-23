
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";

import Logo from "../public/Assets/Logo.svg";
import "../app/globals.css";
import Categorie from "./Categorie";
import SearchBar from "./SearchBar"

<<<<<<< HEAD
=======
import "../app/globals.css";

>>>>>>> 6b03ef145b91a3656833af9de4a2f05b9bafc461

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  const handleSearch = (query) => {
    console.log('Search query:', query); 
    // Proposé des résultats ici resultats
	document.location.href="http://localhost:3000/resultats";
  };


	return (
		<header>
			<div className="nav-logo-container"></div>
			<Image src={Logo} alt="Logo" width={200} height={100} /> 
			<nav ref={navRef}>
				<Categorie nom ="Profil" />
				<Categorie nom ="Creation" />
				<Categorie nom ="Boutique" />
				<Categorie nom ="Finance" />
      
        <SearchBar onSearch={handleSearch} />
        
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;