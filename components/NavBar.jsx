import Image from 'next/image';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useUser } from '../components/UserContext'; // Chemin correct vers UserContext
import Logo from '../public/Assets/Logo.svg'; // Assurez-vous que ce chemin est correct
import '../app/globals.css';
import Categorie from './Categorie'; // Chemin relatif correct
import SearchBar from './SearchBar'; // Chemin relatif correct

function Navbar() {
    const { userRole } = useUser();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    const handleSearch = (query) => {
        console.log('Search query:', query);
    };

    return (
        <header>
            <div className="nav-logo-container">
                <Image src={Logo} alt="Logo" width={200} height={100} />
            </div>
            <nav ref={navRef}>
                {userRole === 'eleve' && (
                    <>
                        <Categorie nom="Profil" />
                        <Categorie nom="Boutique" />
                        <Categorie nom="évènement" />
                    </>
                )}
                {userRole === 'professeur' && (
                    <>
                        <Categorie nom="Profil" />
                        <Categorie nom="évènement" />
                        <Categorie nom="Creation" />
                    </>
                )}
                {userRole === 'admin' && (
                    <>
                        <Categorie nom="Profil" />
                        <Categorie nom="Boutique" />
                        <Categorie nom="CreerProfesseur" />
                        <Categorie nom="Finance" />
                        <Categorie nom="évènement" />
                        <Categorie nom="Creation" />
                    </>
                )}

                <SearchBar onSearch={handleSearch} />

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
