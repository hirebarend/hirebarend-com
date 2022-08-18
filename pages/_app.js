import 'tailwindcss/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
