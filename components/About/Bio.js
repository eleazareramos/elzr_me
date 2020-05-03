import useSmallVw from '../../hooks/useSmallVw'
import BioSection from './BioSection'
import { colors } from '../../styles/theme'

const createStyles = ({ smallVw }) => {
  return {
    container: {
      display: 'flex',
      alignItem: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      width: smallVw ? '100vw' : '80vw',
      marginTop: 10,
    },
    sectionTitle: (color) => ({
      color,
      fontSize: 16,
      borderBottom: '2px solid ' + colors.highlight,
      marginBottom: 5,
    }),
    sectionText: (color) => ({
      color,
      fontSize: 12,
      marginBottom: 5,
    }),
    smallSectionText: (color) => ({
      color,
      fontSize: 10,
      marginBottom: 5,
    }),
  }
}

const Bio = () => {
  const smallVw = useSmallVw()
  const styles = createStyles({ smallVw })
  return (
    <div style={styles.container}>
      <BioSection color="lightgrey">
        <h1 style={styles.sectionTitle('black')}>Almost a Dancer 🕺</h1>
        <p style={styles.sectionText('black')}>
          ➡️ Performing arts > sports. My dad was looking forward to cheering me
          on at basketball games, not recitals.
        </p>
        <p style={styles.sectionText('black')}>➡️ Hip hop dance + theater</p>
        <p style={styles.sectionText('black')}>➡️ Shell 🥚 => Broken 🐣</p>
        <p style={styles.sectionText('black')}>
          ➡️ "Son, let's remember the difference between a hobby and a job." The
          end.
        </p>
      </BioSection>
      <BioSection color={colors.widget}>
        <h1 style={styles.sectionTitle('white')}>Almost a CPA 🏦 </h1>
        <p style={styles.sectionText('white')}>
          ➡️ Interest in algebra + a mild case of OCD led to a major in
          Accounting.
        </p>
        <p style={styles.sectionText('white')}>
          ➡️ 2 internship offers: Big Four (PWC) or Startup (HelloFresh)&nbsp;
          <span style={styles.smallSectionText('white')}>
            ⭐Chose the Startup
          </span>
        </p>
        <p style={styles.sectionText('white')}>
          ➡️ Enter: Excel, the accountant's #1 tool.&nbsp;
          <span style={styles.smallSectionText('white')}>
            ⭐Chose VBA over US GAAP
          </span>
        </p>
      </BioSection>
      <BioSection color="grey">
        <h1 style={styles.sectionTitle('white')}>Almost a Developer 👨‍💻</h1>
        <p style={styles.sectionText('white')}>
          ➡️ VBA => Google Apps Script => Software Engineering
        </p>
        <p style={styles.sectionText('white')}>
          ➡️ Completed a <strike>C.S. Degree</strike> Coding Bootcamp.
        </p>
        <p style={styles.sectionText('white')}>
          ➡️ Focused on developing internal business tools & apps (with a bias
          towards accounting)
        </p>
        <p style={styles.smallSectionText('white')}>⭐The journey continues!</p>
      </BioSection>
    </div>
  )
}

export default Bio
