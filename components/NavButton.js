import { colors, defaults } from '../styles/theme'
import { useRouter } from 'next/router'

const styles = {
  container: {
    ...defaults.centeredRow,
    justifyContent: 'center',
    padding: '5px 20px',
    width: 200,
    marginBottom: 10,
    borderRadius: '10px',
    backgroundColor: colors.widget,
    cursor: 'pointer',
  },
  label: {
    fontWeight: 'bold',
    color: 'lightgrey',
  },
}

const NavButton = (props) => {
  const router = useRouter()

  return (
    <div style={styles.container} onClick={() => router.push(props.to)}>
      <span style={styles.label}>{props.label}</span>
    </div>
  )
}

export default NavButton
