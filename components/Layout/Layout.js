import Header from './Header'
import { useRouter } from 'next/router'
import { colors, defaults } from '../../styles/theme'
import BackIcon from 'mdi-react/HamburgerMenuBackIcon'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    ...defaults.centeredRow,
    justifyContent: 'center',
    marginBottom: 10,
  },
  linkText: {
    color: colors.highlight,
    marginRight: 5,
    fontSize: 12,
  },
  infoText: {
    color: 'grey',
    fontSize: 12,
  },
  pageTitleContainer: {
    ...defaults.centeredRow,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  pageTitle: {
    color: 'lightgrey',
    marginLeft: '10px',
    borderBottom: '4px solid ' + colors.widget,
  },
  body: {
    height: '100%',
  },
}

const Layout = (props) => {
  const router = useRouter()
  const pathname = router.pathname
  let title = ''
  if (pathname !== '/') {
    title = pathname.replace('/', '').replace('-',' ').replace('-',' ')
  }
  return (
    <div style={styles.root}>
      <Header />
      <div style={styles.infoContainer}>
        <a
          style={styles.linkText}
          href="https://www.etymonline.com/word/amateur"
        >
          Amateur
        </a>
        <span style={styles.infoText}>&nbsp;at everything |</span>
        <span style={styles.infoText}>&nbsp;Co-founder at&nbsp;</span>
        <a style={styles.linkText} href="https://fureyfs.com">
          Furey
        </a>
      </div>
      <div style={styles.pageTitleContainer}>
        {router.pathname !== '/' ? (
          <BackIcon
            color="lightgrey"
            style={{ cursor: 'pointer' }}
            onClick={() => router.push('/')}
          />
        ) : null}
        <h3 style={styles.pageTitle}>{title}</h3>
      </div>
      <div style={styles.body}>{props.children}</div>
    </div>
  )
}

export default Layout
