import useSmallVw from '../../hooks/useSmallVw'
import BioSection from './BioSection'
import { colors } from '../../styles/theme'
import FadeIn from 'react-fade-in'

const createStyles = ({ smallVw }) => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    sectionsContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    descriptionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      marginTop: 10,
      margin: '0px 5vw',
    },
    descriptionText: {
      color: 'lightgrey',
      fontSize: 12,
      textAlign: 'center',
    },
    outterSiContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 10,
    },
    skillsContainer: {
      padding: 20,
      marginRight: 5,
      borderRadius: '20px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
    skillsTitle: {
      color: 'white',
      fontSize: 14,
      // backgroundColor: colors.highlight,
      textAlign: 'center',
      padding: '2px',
      borderRadius: '20px 20px 0px 0px',
    },
    skill: {
      color: 'white',
      padding: '5px 0px',
      margin: '2px 0px',
      // borderBottom: '1px dashed ' + colors.highlight,
      fontSize: 12,
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
    link: {
      color: colors.highlight,
      fontWeight: 'bold',
    },
  }
}

const Bio = () => {
  const smallVw = useSmallVw()
  const styles = createStyles({ smallVw })
  return (
    <div style={styles.container}>
      <FadeIn>
      <div style={styles.descriptionContainer}>
        <p style={styles.descriptionText}>
          I'm a 24 y/o Co-Founder of an{' '}
          <a style={styles.link} href="https://fureyfs.com">
            Accounting Firm.
          </a>{' '}
          Most entrepreneurs' stories begin when they were just 10 years old:
          selling baseball cards or brokering snow shoveling services. However,
          I did not care to make a quick buck. I was more interested in building
          & leading organizations. I joined student council, started dance
          teams, rebranded friend groups, and worked to inspire the kids around
          me. Today, I lean on that passion. Money's nice - but that tends to
          come naturally when you start with People. My goal is to build the
          ultimate organization: where its members are in constant pursuit of{' '}
          <a
            style={styles.link}
            href="https://positivepsychology.com/eudaimonia/"
          >
            Eudaimonia.
          </a>
        </p>
      </div>
      <div style={styles.sectionsContainer}>
        <BioSection color="lightgrey">
          <h1 style={styles.sectionTitle('black')}>Almost a Dancer 🕺</h1>
          <p style={styles.sectionText('black')}>
            ➡️ Performing arts > sports. My dad was looking forward to cheering
            me on at basketball games, not recitals.
          </p>
          <p style={styles.sectionText('black')}>➡️ Hip hop dance + theater</p>
          <p style={styles.sectionText('black')}>➡️ Shell 🥚 => Broken 🐣</p>
          <p style={styles.sectionText('black')}>
            ➡️ "Son, let's remember the difference between a hobby and a job."
            The end.
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
              ⭐Chose VBA over US GAAP. The end.
            </span>
          </p>
        </BioSection>
        <BioSection color="black">
          <h1 style={styles.sectionTitle('white')}>Almost a Developer 👨‍💻</h1>
          <p style={styles.sectionText('white')}>
            ➡️ The progression: VBA => Data Analysis => Software Engineering
          </p>
          <p style={styles.sectionText('white')}>
            ➡️ Completed a <strike>C.S. Degree</strike> Coding Bootcamp.
          </p>
          <p style={styles.sectionText('white')}>
            ➡️ Focused on developing internal business tools & apps (with a bias
            towards accounting)
          </p>
          <p style={styles.smallSectionText('white')}>
            ⭐<strike>The end.</strike>&nbsp;The journey continues!
          </p>
        </BioSection>
      </div>
      <div style={styles.outterSiContainer}>
        <div style={styles.skillsContainer}>
          <h3 style={styles.skillsTitle}>SKILLS ⚒️</h3>
          <p style={styles.skill}>
            <strong>DEVELOPMENT</strong> | Javascript, JAMStack, React,
            Firebase, Express, GCP, API dev., +
          </p>
          <p style={styles.skill}>
            <strong>DATA ANALYSIS</strong> | Excel (v. advanced), Python, SQL, +
          </p>
          <p style={styles.skill}>
            <strong>BUSINESS</strong> | Accounting, FP&A, Financial Modeling,
            KPI identification, +
          </p>
          <p style={styles.skill}>
            <strong>OTHER</strong> | Business Founding, Agile / Scrum, Productivity improvement,
            Process design, +
          </p>
        </div>
      </div>
      </FadeIn>
    </div>
  )
}

export default Bio
