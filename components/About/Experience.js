import { colors } from '../../styles/theme'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    margin: '10px 0px',
  },
  info: {
    width: '90%',
  },
  title: {
    fontSize: 16,
    borderBottom: '2px solid ' + colors.widget,
    marginBottom: 5,
    paddingBottom: 5,
  },
  subTitle: {
    color: colors.highlight,
    fontSize: 14,
  },
  period: {
    fontSize: 14,
    textAlign: 'right',
    width: '10%',
  },
}

const Experience = (props) => {
  const { title, subTitle, period } = props
  return (
    <div style={styles.container}>
      <div style={styles.info}>
        <p style={styles.title}>
          {title}{' '}
          {subTitle ? (
            <>
              | <span style={styles.subTitle}>{subTitle}</span>
            </>
          ) : (
            ''
          )}
        </p>
        {props.children}
      </div>
      <p style={styles.period}>{period}</p>
    </div>
  )
}

export default Experience
