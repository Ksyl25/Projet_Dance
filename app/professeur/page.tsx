"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Navbar from "../../Components/NavBar";

import CreateProfessorForm from "../../Components/CreateProfessorForm";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<CreateProfessorForm />
		</React.Fragment>
	);
}

export default App;