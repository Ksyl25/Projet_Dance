import Navbar from "../components/Navbar";
import Head from 'next/head';

export default function LearnMorePage() {
  return (
    <div>
      <Head>
        <title>En Savoir Plus</title>
        <meta name="description" content="En savoir plus sur l'association de danse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="learn-more-container">
        {/* Contenu spécifique à la page "En Savoir Plus" */}
      </div>
    </div>
  );
}
