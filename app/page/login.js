import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Head from 'next/head';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Connexion</title>
        <meta name="description" content="Page de connexion de l'association de danse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Login />
    </div>
  );
}
