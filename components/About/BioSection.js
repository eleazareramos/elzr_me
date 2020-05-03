import { colors } from '../../styles/theme'
import useSmallVw from '../../hooks/useSmallVw'

const VARIANTS = [colors.widgtet, 'lightgrey', 'grey']

const createStyles = ({ color, smallVw, maxHeight, width}) => {
  return {
    container: {
      backgroundColor: color || colors.widget,
      padding: 10,
      borderRadius: '20px',
      boxShadow: '0px 2px 4px black',
      margin: 5,
      width: smallVw ? '100%' : width,
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
    width: props.width
  })
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>{props.children}</div>
    </div>
  )
}

export default BioSection
