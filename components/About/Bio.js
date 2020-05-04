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
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 10,
    },
    descriptionText: {
      fontSize: 12,
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
      color: 'black',
      fontSize: 14,
      paddingBottom: 5,
      borderBottom: '2px dashed black',
      marginBottom: 5,
    },
    skill: {
      color: 'black',
      padding: '5px 0px',
      margin: '2px 0px',
      fontSize: 12,
    },
    sectionTitle: {
      color: 'white',
      fontSize: 16,
      borderBottom: '2px solid ' + colors.highlight,
      marginBottom: 5,
    },
    sectionText: {
      color: 'white',
      fontSize: 12,
      marginBottom: 5,
    },
    smallSectionText: {
      color: 'white',
      fontSize: 10,
      marginBottom: 5,
    },
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
        <div style={styles.sectionsContainer}>
          <BioSection color="lightgrey" width={500}>
            <h3 style={styles.skillsTitle}>TL;DR 📜</h3>
            <p style={styles.descriptionText}>
              I'm a 24 y/o Co-Founder of an{' '}
              <a style={styles.link} href="https://fureyfs.com">
                Accounting Firm
              </a>
              . Most entrepreneurs' stories begin when they were just 10 years
              old: selling baseball cards or brokering snow shoveling services.
              However, I did not care to make a quick buck. I was more
              interested in building & leading organizations. I joined student
              council, started dance crews, integrated friend groups, and worked
              to inspire the kids around me. Today, I lean on that passion.
              Money's nice - but that tends to come naturally when you start
              with People. My objective is to build the ultimate organization: where
              its members are in constant pursuit of{' '}
              <a
                style={styles.link}
                href="https://positivepsychology.com/eudaimonia/"
              >
                Eudaimonia
              </a>{'.'}
            </p>
          </BioSection>
          <BioSection color="lightgrey" width={400}>
            <h3 style={styles.skillsTitle}>SKILLS ⚒️</h3>
            <p style={styles.skill}>
              <strong>WEB DEVELOPMENT</strong> | Javascript, JAMStack, React,
              Firebase, Express, GCP, API dev., +
            </p>
            <p style={styles.skill}>
              <strong>DATA ANALYSIS</strong> | Excel (v. advanced), Python, SQL,
              +
            </p>
            <p style={styles.skill}>
              <strong>BUSINESS</strong> | Accounting, FP&A, Financial Modeling,
              KPI identification, +
            </p>
            <p style={styles.skill}>
              <strong>OTHER</strong> | Founding, Agile / Scrum,
              Productivity improvement, Process design, +
            </p>
          </BioSection>
        </div>
        <div style={styles.sectionsContainer}>
          <BioSection color="black" width={300}>
            <h1 style={styles.sectionTitle}>Almost a Dancer 🕺</h1>
            <p style={styles.sectionText}>
              ➡️ Performing arts > sports. My dad was looking forward to
              cheering me on at basketball games, not recitals.
            </p>
            <p style={styles.sectionText}>➡️ Hip hop dance + theater</p>
            <p style={styles.sectionText}>➡️ Shell 🥚 => Broken 🐣</p>
            <p style={styles.sectionText}>
              ➡️ "Son, let's remember the difference between a hobby and a job."
              The end.
            </p>
            <span style={styles.smallSectionText}>⭐I still love my dad.</span>
          </BioSection>
          <BioSection color="black" width={300}>
            <h1 style={styles.sectionTitle}>Almost a CPA 🏦 </h1>
            <p style={styles.sectionText}>
              ➡️ Interest in algebra + a mild case of OCD led to a major in
              Accounting.
            </p>
            <p style={styles.sectionText}>
              ➡️ 2 internship offers: Big Four (PWC) or Startup
              (HelloFresh)&nbsp;
              <span style={styles.smallSectionText}>⭐Chose the Startup</span>
            </p>
            <p style={styles.sectionText}>
              ➡️ Enter: Excel, the accountant's #1 tool.&nbsp;
              <span style={styles.smallSectionText}>
                ⭐Chose VBA over US GAAP. The end.
              </span>
            </p>
          </BioSection>
          <BioSection color="black" width={300}>
            <h1 style={styles.sectionTitle}>Almost a Developer 👨‍💻</h1>
            <p style={styles.sectionText}>
              ➡️ The progression: VBA => Data Analysis => Software Engineering
            </p>
            <p style={styles.sectionText}>
              ➡️ Completed a <strike>C.S. Degree</strike> Coding Bootcamp.
            </p>
            <p style={styles.sectionText}>
              ➡️ Focused on developing internal business tools & apps (with a
              bias towards accounting)
            </p>
            <p style={styles.smallSectionText}>
              ⭐<strike>The end.</strike>&nbsp;The journey continues!
            </p>
          </BioSection>
        </div>
      </FadeIn>
    </div>
  )
}

export default Bio
