// import Abou from './abou';
import '../styles/globals.css';
import Navbar from '../components/navbar';
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Abou /> */}
      {/* <Navbar /> */}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
