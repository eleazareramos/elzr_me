import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";
import { useRouter } from 'next/router';

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainSection: {
    height: "100%",
  },
  
};

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  if(router.pathname === '/admin') return <Component {...pageProps} />
  return (
    <>
      <Head>
        <title>🤙</title>
        <link rel="shortcut icon" href="/e-favicon.png" />
      </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
  );
};

export default App;
