// pages/_app.js
import { SessionProvider } from 'next-auth/react';
import '../../Projet_Dance/styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
