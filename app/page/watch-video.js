import Navbar from "../components/Navbar";
import Head from 'next/head';

export default function WatchVideoPage() {
  return (
    <div>
      <Head>
        <title>Regarder Video</title>
        <meta name="description" content="Regarder des vidéos de l'association de danse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="watch-video-container">
        {/* Contenu spécifique à la page "Regarder Video" */}
      </div>
    </div>
  );
}
