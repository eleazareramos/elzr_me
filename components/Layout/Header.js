import { colors, defaults } from "../../styles/theme";
import { useRouter } from "next/router";

const styles = {
  root: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    ...defaults.centeredRow,
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "5px 10px",
    width: "100%",
    zIndex: 100,
  },
  word: {
    ...defaults.centeredRow,
    flexWrap: "nowrap",
    marginBottom: "2px",
  },
  emphName: {
    color: "lightgrey",
    fontSize: 48,
    textShadow: "2px 4px " + colors.highlight,
    borderRadius: "10px",
  },
  name: {
    color: "lightgrey",
    fontSize: 48,
  },
  smallName: {
    color: "lightgrey",
    fontSize: 24,
  },
  emphSmallName: {
    color: "lightgrey",
    fontSize: 24,
    textShadow: "2px 4px " + colors.highlight,
    borderRadius: "10px",
  },
  headshot: {
    height: 64,
    width: 64,
    marginRight: 10,
    borderRadius: "10px",
    boxShadow: "2px 4px " + colors.highlight,
    cursor: "pointer",
  },
  pageHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    marginLeft: 20,
    color: colors.highlight,
  }
};

const Header = (props) => {
  const router = useRouter();
  return (
    <div style={styles.root}>
      <div style={styles.pageHeaderContainer}>
        <img
          style={styles.headshot}
          src="/e.jpg"
          onClick={() => router.push("/")}
        />
        <h1 style={styles.pageTitle}>{props.title}</h1>
      </div>
      <div style={styles.nameContainer}>
        <div style={styles.word}>
          <span style={styles.emphName}>el</span>
          <span style={styles.name}>ea</span>
          <span style={styles.emphName}>z</span>
          <span style={styles.name}>a</span>
          <span style={styles.emphName}>r</span>
        </div>
        <div style={{ marginRight: 10 }} />
        <div style={styles.word}>
          <span style={styles.name}>ra</span>
          <span style={styles.emphName}>m</span>
          <span style={styles.name}>os</span>
        </div>
        <div style={styles.word}>
          <span style={styles.smallName}>[</span>
          <span style={styles.emphSmallName}>e</span>
          <span style={styles.smallName}>]</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
