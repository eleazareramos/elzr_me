import Header from "./Header";
import { useRouter } from "next/router";
import { colors, defaults } from "../../styles/theme";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: '100vh'
  },
  infoContainer: {
    ...defaults.centeredRow,
    justifyContent: "center",
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
  pageTitleContainer: {
    ...defaults.centeredRow,
    alignItems: "flex-end",
  },
  pageTitle: {
    color: "lightgrey",
    marginLeft: "10px",
    borderBottom: "4px solid " + colors.widget,
  },
  body: {
    height: "100%",
  },
  footerText: {
    fontSize: "10px",
    marginBottom: 5,
    cursor: "pointer",
    textDecoration: "underline",
    color: "grey",
  },
};

const Layout = (props) => {
  const router = useRouter();
  const pathname = router.pathname;
  let title = "";
  if (pathname !== "/") {
    title = pathname.replace("/", "").replace("-", " ").replace("-", " ");
    title = `[${title}]`;
  }
  return (
    <div style={styles.root}>
      <>
        <Header title={title} />
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
      </>
      <div style={styles.body}>{props.children}</div>
      <div style={styles.footer}>
        <span
          style={styles.footerText}
          onClick={() =>
            window.open("https://github.com/eleazareramos/elzr_me")
          }
        >
          the unimpressive source code to this website.
        </span>
      </div>
    </div>
  );
};

export default Layout;
