"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";



/*const profil = () => {
  return (
	<div>profil</div>
  )
}

export default profil*/

import Navbar from "../../Components/NavBar";
<<<<<<< HEAD
<<<<<<< Updated upstream
import UserProfile from "../../Components/ProfilUtilisateur";
=======
>>>>>>> Stashed changes
function App() {
	return (
		<React.Fragment>
			<Navbar/>
<<<<<<< Updated upstream
            <UserProfile/>
=======
>>>>>>> Stashed changes
=======
//import UserProfile from "../../Components/ProfilUtilisateur";
import UserProfile from "../profil/ProfilUtilisateur";
function App() {
	return (
		<React.Fragment>
			<Navbar />
			<UserProfile />
>>>>>>> c46e98de05278aa81ea0550f7b82e18ac885097c
		</React.Fragment>
	);
}

export default App;