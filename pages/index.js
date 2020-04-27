import NavButton from '../components/NavButton'
import FadeIn from 'react-fade-in'
import TwitterIcon from 'mdi-react/TwitterIcon'
import LinkedInIcon from 'mdi-react/LinkedinIcon'
import { defaults, colors } from '../styles/theme'

const BUTTONS = [
  { label: 'about', to: '/about' },
  { label: 'contact', to: '/contact'},
  { label: 'not a blog', to: '/not-a-blog' },
  { label: 'bookshelf', to: '/bookshelf' },
]

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sMedia: {
    color: colors.highlight,
    cursor: 'pointer',
    marginRight: 5,
  },
}

const HomePage = (props) => {
  return (
    <div style={styles.root}>
      <FadeIn>
        {BUTTONS.map((button) => (
          <NavButton key={button.to} label={button.label} to={button.to} />
        ))}
        <div style={defaults.centeredRow}>
          <TwitterIcon
            style={styles.sMedia}
            onClick={() => window.open('https://twitter.com/eleazareramos')}
          />
          <LinkedInIcon
            style={styles.sMedia}
            onClick={() =>
              window.open('https://www.linkedin.com/in/eleazareramos/')
            }
          />
        </div>
      </FadeIn>
    </div>
  )
}

export default HomePage
