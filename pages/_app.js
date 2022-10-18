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
        <title>
          {pageProps.meta
            ? pageProps.meta.title
            : 'Certified Microsoft Solutions Architect | Hire Barend'}
        </title>

        <meta
          content={
            pageProps.meta
              ? pageProps.meta.description
              : 'Designing and building systems for companies using my 8+ years of experience in the software engineering industry.'
          }
          name="description"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
