"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Navbar from "../../Components/NavBar";

import UserProfile from "../../Components/ProfilUtilisateur";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<UserProfile />
		</React.Fragment>
	);
}

export default App;