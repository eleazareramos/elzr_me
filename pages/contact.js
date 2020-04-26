import EmailIcon from 'mdi-react/EmailBoxIcon'

const ContactPage = () => (
  <div
    style={{
      padding: '0px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <EmailIcon color="white" />
    <p style={{ color: 'white', marginBottom: 10 }}>e@elzr.me</p>
    <p
      style={{
        maxWidth: '300px',
        textAlign: 'center',
        color: 'lightgrey',
        fontSize: 10,
      }}
    >
      I respond to human emails.
    </p>
  </div>
)

export default ContactPage
