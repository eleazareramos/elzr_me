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
    </div>
  );
};

export default Header;
