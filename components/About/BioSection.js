import { colors } from '../../styles/theme'
import useSmallVw from '../../hooks/useSmallVw'

const VARIANTS = [colors.widgtet, 'lightgrey', 'grey']

const createStyles = ({ color, smallVw }) => {
  return {
    container: {
      backgroundColor: color || colors.widget,
      padding: 10,
      borderRadius: '20px 20px 20px 0px',
      boxShadow: '0px 2px 4px black',
      margin: 5,
      maxWidth: smallVw ? '200px' : '300px',
    }
  }
}

const BioSection = (props) => {
  const smallVw = useSmallVw()
  const styles = createStyles({ color: props.color, smallVw })
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>{props.children}</div>
    </div>
  )
}

export default BioSection
