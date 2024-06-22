
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
<<<<<<< Updated upstream
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SlMagnifier } from "react-icons/sl";


import "../app/globals.css";
import Categorie from "./Categorie";
import SearchBar from "./SearchBar"
=======
import "../app/globals.css";
>>>>>>> Stashed changes

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
<<<<<<< Updated upstream
  const handleSearch = (query) => {
    console.log('Search query:', query); 
    // Proposé des résultats ici resultats
	document.location.href="http://localhost:3000/resultats";
  };
=======
>>>>>>> Stashed changes

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
<<<<<<< Updated upstream
				<Categorie nom ="Profil" />
				<Categorie nom ="Creation" />
				<Categorie nom ="Boutique" />
				<Categorie nom ="autre" />
      
        <SearchBar onSearch={handleSearch} />
        
=======
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
>>>>>>> Stashed changes
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