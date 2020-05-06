import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
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
