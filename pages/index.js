import NavButton from "../components/NavButton";
import FadeIn from "react-fade-in";
import TwitterIcon from "mdi-react/TwitterIcon";
import LinkedInIcon from "mdi-react/LinkedinIcon";
import FileCodeIcon from "mdi-react/FileCodeIcon";
import { defaults, colors } from "../styles/theme";

const BUTTONS = [
  { label: "about", to: "/about" },
  { label: "contact", to: "/contact" },
  { label: "not a blog", to: "/not-a-blog" },
  { label: "bookshelf", to: "/bookshelf" },
];

const styles = {
  root: {
    height: "100%",
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
  infoContainer: {
    ...defaults.centeredRow,
    justifyContent: "center",
    marginBottom: 20,
  },
  linkText: {
    color: colors.highlight,
    marginRight: 5,
    fontSize: 12,
  },
  infoText: {
    color: "grey",
    fontSize: 12,
  },
  sMedia: {
    color: colors.highlight,
    cursor: "pointer",
    marginRight: 5,
  },
  smallText: {
    fontSize: 10,
    color: "grey",
  },
};

const HomePage = (props) => {
  return (
    <div style={styles.root}>
      <div style={styles.nameContainer}>
        <div style={styles.word}>
          <span style={styles.emphName}>el</span>
          <span style={styles.name}>ea</span>
          <span style={styles.emphName}>z</span>
          <span style={styles.name}>a</span>
          <span style={styles.emphName}>r</span>
        </div>
        <div style={styles.word}>
          <span style={styles.name}>/ra</span>
          <span style={styles.emphName}>m</span>
          <span style={styles.name}>os</span>
        </div>
        <div style={styles.word}>
          <span style={styles.smallName}>[</span>
          <span style={styles.emphSmallName}>e</span>
          <span style={styles.smallName}>]</span>
        </div>
      </div>
      <div style={styles.infoContainer}>
        <a
          style={styles.linkText}
          href="https://www.etymonline.com/word/amateur"
        >
          Amateur
        </a>
        <span style={styles.infoText}>&nbsp;at everything |</span>
        <span style={styles.infoText}>&nbsp;Co-founder at&nbsp;</span>
        <a style={styles.linkText} href="https://fureyfs.com">
          Furey
        </a>
      </div>

      <FadeIn>
        {BUTTONS.map((button) => (
          <NavButton key={button.to} label={button.label} to={button.to} />
        ))}
        <div style={defaults.centeredRow}>
          <TwitterIcon
            style={styles.sMedia}
            onClick={() => window.open("https://twitter.com/eleazareramos")}
          />
          <LinkedInIcon
            style={styles.sMedia}
            onClick={() =>
              window.open("https://www.linkedin.com/in/eleazareramos/")
            }
          />
          <FileCodeIcon
            style={{ ...styles.sMedia, color: "grey" }}
            onClick={() => {
              window.open("https://github.com/eleazareramos/elzr_me");
            }}
          />
          <span style={styles.smallText}>{`< source code.`}</span>
        </div>
      </FadeIn>
    </div>
  );
};

export default HomePage;
