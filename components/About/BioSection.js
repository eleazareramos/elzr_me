import { colors } from '../../styles/theme'
import useSmallVw from '../../hooks/useSmallVw'

const VARIANTS = [colors.widgtet, 'lightgrey', 'grey']

const createStyles = ({ color, smallVw, maxHeight, maxWidth }) => {
  return {
    container: {
      backgroundColor: color || colors.widget,
      alignSelf: 'flex-start',
      padding: 10,
      borderRadius: '20px 20px 20px 0px',
      boxShadow: '0px 2px 4px black',
      margin: smallVw ? '5px 5vw' : '5px',
      maxWidth: maxWidth || (!smallVw && 300) || null,
      width: smallVw && '100%',
      maxHeight,
    },
  }
}

const BioSection = (props) => {
  const smallVw = useSmallVw()
  const styles = createStyles({
    color: props.color,
    smallVw,
    maxHeight: props.maxHeight,
    maxWidth: props.maxWidth,
  })
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>{props.children}</div>
    </div>
  )
}

export default BioSection
