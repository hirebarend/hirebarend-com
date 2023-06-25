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
            : 'Barend Erasmus | Technical Architect'}
        </title>

        <meta
          content={
            pageProps.meta
              ? pageProps.meta.description
              : 'As a highly skilled and experienced Microsoft Azure Solutions Architect with over 9 years of expertise in designing and building highly scalable, reliable, and available systems using Microsoft Azure, I have demonstrated success in driving complex technology projects from conception to implementation. My passion lies in crafting innovative solutions that deliver real business value and empower organizations to achieve their goals.'
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
