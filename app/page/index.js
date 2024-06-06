import Home from "../components/Home";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Head from 'next/head';
import styles from '../styles/r.css';
import styles from '../styles/login.css';
import styles from '../styles/register.css';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Association de Danse</title>
        <meta name="description" content="Bienvenue à notre association de danse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Testimonial />
    </div>
  );
}
