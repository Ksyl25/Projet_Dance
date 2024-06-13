"use client"

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
import EventForm from "../../Components/FormEvenement";
function App() {
    const handleEventSubmit = () => {
        // TODO on envoie le form a la base de donnée
      };
	return (
		<React.Fragment>
			<Navbar/>
            <EventForm onSubmit={handleEventSubmit} />
		</React.Fragment>
	);
}

export default App;