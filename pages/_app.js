import 'tailwindcss/tailwind.css';
import mixpanel from 'mixpanel-browser';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      mixpanel.init('6570fb6b55412e8145762b070dd25c3b');

      mixpanel.track('Page View');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Barend Erasmus | Certified Microsoft Solutions Architect</title>

        <meta
          content="Designing and building systems for fintech companies using my 8+ years of experience in the software engineering industry."
          name="description"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
