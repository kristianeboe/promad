import '../styles/globals.css';
import splitbee from '@splitbee/web';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      // To use Splitbee on another subdomain.
      // Token can be found in project settings
      token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,

      // Enable cookie-less mode. Defaults to `false`
      disableCookie: false,

      // Set custom urls when using proxying
      scriptUrl: 'https://cdn.splitbee.io/sb.js',
      apiUrl: 'https://hive.splitbee.io',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
