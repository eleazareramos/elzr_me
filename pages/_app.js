import Layout from '../components/Layout/Layout'
import '../styles/global.css'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
  },
  footerText: {
    fontSize: '10px',
    marginBottom: 5,
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'grey'
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <div style={styles.root}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <span
        style={styles.footerText}
        onClick={() => window.open('https://github.com/eleazareramos/elzr_me')}
      >
        the unimpressive source code to this website.
      </span>
    </div>
  )
}

export default App
