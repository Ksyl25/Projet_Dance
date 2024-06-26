
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/globals.css";

function Categorie({ nom }) {
	let lien = "";
	switch (nom) {
		case 'Profil':
			lien = "../profil"
			break;
			case 'CreerProfesseur':
				lien = "../professeur"
				break;
		case 'Mes Cours':
			lien = "../cours"
			break;
		case 'Creation':
			lien = "../creation"
			break;
		case 'Boutique':
			lien = "../shop"
			break;
		case 'évènement':
			lien = "../cours"
			break;
			case 'Finance':
				lien = "../Finance"
				break;
				


		default:
			lien = "../test"
			break;
	}
	return (

		<div >
			<a href={lien} >{nom}</a>
		</div>
	);
}

export default Categorie;