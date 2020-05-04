import { colors } from '../../styles/theme'
import FadeIn from 'react-fade-in'
import Experience from './Experience'
import useSmallVw from '../../hooks/useSmallVw'

const FUREY_HEADCOUNNT = 16
const HEADCOUNT_AS_OF = "May '20"

const styles = {
  title: {
    fontSize: 18,
    color: colors.widget,
    marginBottom: 20,
  },
  container: {
    backgroundColor: 'white',
    margin: '20px 5px',
    padding: '20px',
    boxShadow: '0px 3px 6px black',
  },
  basicText: {
    fontSize: 12,
    marginBottom: 10,
  },
  asteriskText: {
    fontSize: 10,
    color: 'grey',
  },
  highlightText: {
    color: colors.highlight,
  },
  educationContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  educationHeader: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.widget
  },
  educationText: {
    fontSize: 14,
  },
  
}

const Resume = () => {
  const smallVw = useSmallVw()

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FadeIn>
        <div style={{ ...styles.container, width: !smallVw && 850 }}>
          <h3 style={styles.title}>CURRICULUM VITAE</h3>
          <Experience
            title="COO & Co-Founder"
            subTitle={'Furey'}
            period="2017+"
          >
            <li style={styles.basicText}>
              Led a company of {FUREY_HEADCOUNNT} employees{' '}
              <span style={styles.asteriskText}>
                (headcount as of {HEADCOUNT_AS_OF}){' '}
              </span>
              in providing white-glove accounting & finance services to high
              growth companies - disrupting internal business processes across
              multiple industries. Including: tranforming procurement workflows,
              building data warehouses, automating month-end-close procedures,
              and much much more.
            </li>
            <li style={styles.basicText}>
              Developed a Month-End-Close task management SaaS application from
              the ground up in house{' '}
              <span style={styles.asteriskText}>
                (deployed internally on web, public beta launch in progress,
                mobile in progress)
              </span>
              . The app is designed for firms managing multiple entities' MEC
              procedures, and has drastically increased efficiency and
              auditability for our team & clients.
            </li>
            <li style={styles.basicText}>
              Created & managed the "Innovations" team, whose main function is
              to develop tools that make our clients' lives easier. Some
              examples: a Google Sheet Add-On to push & pull data to & from
              Quickbooks Online, a Python notebook to fully reconciles Shopify
              Data, Shipping Data and Payment Data (3 way match), a dynamic
              dashboard to view real-time Budget v. Actual financials.
            </li>
            <li style={styles.basicText}>
              Played a key role in our clients' fundraising efforts{' '}
              <span style={styles.asteriskText}>(from Seed to Series D)</span>{' '}
              by creating pro forma models, fielding financial due dilligence
              questions, and providing statement commentary.
            </li>
          </Experience>
          <Experience
            title="Finance Associate"
            subTitle={'Founder Shield'}
            period="2017"
          >
            <li style={styles.basicText}>
              Pioneered the in-house finance function (previously outsourced),
              reporting directly to the COO.
            </li>
            <li style={styles.basicText}>
              Crafted a chart of accounts and close process tailored for a high
              touch point insurance brokerage.
            </li>
            <li style={styles.basicText}>
              Setup invoicing & billing procedures for clients and underwriters
              ensuring fluid cash flow.
            </li>
            <li style={styles.basicText}>
              Introduced financial reporting with data visualization to the
              management team.
            </li>
          </Experience>
          <Experience
            title="Project Specialist < Accounting Analyst < Intern"
            subTitle={'HelloFresh'}
            period="2015-17"
          >
            <li style={styles.basicText}>
              Independently identified the need for a purchase order to bill
              reconciliation procedure{' '}
              <span style={styles.asteriskText}>
                (to reconcile 100+ bills per day)
              </span>
              . Architected an Excel solution (w/ Macros & Power BI), which
              consolidates data and summarizes discrepancies{' '}
              <span style={styles.asteriskText}>
                (still being used to this day per an old colleague!)
              </span>
              .
            </li>
            <li style={styles.basicText}>
              Day to day accounting task tackler. Learned the ropes!
            </li>
          </Experience>
          <Experience title="The Starter Jobs" period="2012-15">
            <li style={styles.basicText}>
              Clerical documentation for mortgage processing.{' '}
              <span style={styles.highlightText}>
                (American Financial Resources)
              </span>
            </li>
            <li style={styles.basicText}>
              Food & Bev: from barista to cashier to cook.{' '}
              <span style={styles.highlightText}>
                (Dunkin', Smashburger, A local brunch spot)
              </span>
            </li>
          </Experience>
          <h1 style={styles.educationHeader}>Education</h1>
          <div style={styles.educationContainer}>
          <p style={styles.educationText}>Fullstack Academy of Code - Coding Bootcamp</p>
          <p style={styles.educationText}>2018</p>
          </div>
          <div style={styles.educationContainer}>
          <p style={styles.educationText}>William Paterson University - BS, Accounting</p>
          <p style={styles.educationText}>2012-16</p>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export default Resume
