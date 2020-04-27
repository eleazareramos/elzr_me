import HammerWrenchIcon from "mdi-react/HammerWrenchIcon";
import { colors } from '../styles/theme';

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    height: "50vh",
  },
  icon: {
    color: "white",
    marginBottom: 10,
  },
  text: {
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    maxWidth: 300,
    padding: '0px 10px'
  },
  wipContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.widget,
    borderRadius: "10px",
    padding: "5px 10px",
    marginBottom: '10px'
  },
};

const WorkInProgress = (props) => (
  <div style={styles.main}>
    <div style={styles.wipContainer}>
      <HammerWrenchIcon style={styles.icon} />
      <p style={styles.text}>Work in Progress</p>
    </div>
    <p style={styles.text}>{props.text}</p>
  </div>
);

export default WorkInProgress;
