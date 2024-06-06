import Navbar from "../components/Navbar";
import Register from "../components/Register";
import Head from 'next/head';

export default function RegisterPage() {
  return (
    <div>
      <Head>
        <title>Inscription</title>
        <meta name="description" content="Page d'inscription de l'association de danse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Register />
    </div>
  );
}
