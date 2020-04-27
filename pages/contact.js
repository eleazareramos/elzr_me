import EmailIcon from "mdi-react/EmailBoxIcon";

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
  },
  emailText: {
    fontSize: 24,
    color: "white",
    textDecoration: "none",
  },
  emailIcon: {
    color: "white",
    marginRight: 10,
  },
  helperText: {
    textAlign: "center",
    color: "lightgrey",
    fontSize: 10,
  },
};

const ContactPage = () => (
  <div style={styles.main}>
    <div style={styles.emailContainer}>
      <EmailIcon style={styles.emailIcon} />
      <a style={styles.emailText} href="mailto:e@elzr.me">
        e@elzr.me
      </a>
    </div>
    <p style={styles.helperText}>I respond to human emails.</p>
  </div>
);

export default ContactPage;
