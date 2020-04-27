import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/global.css";

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
  footerText: {
    fontSize: "10px",
    marginBottom: 5,
    cursor: "pointer",
    textDecoration: "underline",
    color: "grey",
  },
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>🤙</title>
        <link rel="shortcut icon" href="/e-favicon.png" />
      </Head>
      <div style={styles.root}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        <span
          style={styles.footerText}
          onClick={() =>
            window.open("https://github.com/eleazareramos/elzr_me")
          }
        >
          the unimpressive source code to this website.
        </span>
      </div>
    </>
  );
};

export default App;
