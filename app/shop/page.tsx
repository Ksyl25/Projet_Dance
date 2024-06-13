"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";

import Navbar from "../../Components/NavBar";
import ProductList from "../../Components/Shop";
import ProductCart from "../../Components/Shop bas"


function App() {
    const handleEventSubmit = () => {
        // TODO on envoie le form a la base de donnée
      };
	return (
		<React.Fragment>
			<Navbar/>
            <ProductCart />
		</React.Fragment>
	);
}

export default App;