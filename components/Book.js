import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { colors } from "../styles/theme";
import useSmallVw from "../hooks/useSmallVw";

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px",
  },
  textArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "10px",
    overflow: "auto",
  },
  bookCover: {
    borderRadius: "10px",
    margin: "10px",
    cursor: "pointer",
    objectFit: "cover",
  },
  bookTitle: {
    color: "lightgrey",
    fontSize: 24,
    textDecoration: "underline",
    marginBottom: "2px",
  },
  bookAuthor: {
    color: colors.highlight,
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },
  blurb: {
    color: "white",
    fontSize: 12,
  },
};

const Book = (props) => {
  const { book } = props;
  const smallVw = useSmallVw(window);

  return (
    <div
      style={{
        ...styles.main,
        minWidth: !smallVw && props.width,
        maxWidth: !smallVw && props.width,
        flexDirection: props.orientation === "right" ? "row-reverse" : "row",
      }}
    >
      <img
        style={styles.bookCover}
        src={book.imgUrl}
        width={"20%"}
        height={smallVw && 200}
        onClick={() => window.open(book.purchaseUrl)}
      />
      <div style={styles.textArea}>
        <h1
          style={styles.bookTitle}
          onClick={() => window.open(book.purchaseUrl)}
        >
          {book.title}
        </h1>
        <span style={styles.bookAuthor}>{`by ${book.author}`}</span>
        <span style={styles.blurb}>{book.blurb}</span>
      </div>
    </div>
  );
};

export default Book;
