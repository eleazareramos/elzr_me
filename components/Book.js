import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { colors } from "../styles/theme";

const styles = {
  main: {
    display: "flex",
    alignItems: "stretch",
    margin: "10px 0px",
  },
  textArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "10px",
    maxHeight: 200,
    overflow: "auto",
  },
  bookCover: {
    borderRadius: "10px",
    margin: "10px",
    cursor: "pointer",
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
  return (
    <div
      style={{
        ...styles.main,
        minWidth: props.width,
        maxWidth: props.width,
        flexDirection: props.orientation === "right" ? "row-reverse" : "row",
      }}
    >
      <img
        style={styles.bookCover}
        src={book.imgUrl}
        width={"20%"}
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
