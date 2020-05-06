import Header from "./Header";
import { useRouter } from "next/router";
import { colors, defaults } from "../../styles/theme";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  pageTitleContainer: {
    ...defaults.centeredRow,
    alignItems: "flex-end",
  },
  pageTitle: {
    color: "lightgrey",
    marginLeft: "10px",
    borderBottom: "4px solid " + colors.widget,
  }
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
        <Header title={title} />
      {props.children}
    </div>
  );
};

export default Layout;
