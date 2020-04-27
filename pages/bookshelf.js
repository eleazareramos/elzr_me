import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../context/firebase";
import Book from "../components/Book";

const BookPage = () => {
  const firebase = useContext(FirebaseContext);

  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const bookRefs = await firebase.firestore().collection("books").get();

    const books = bookRefs.docs.map((doc) => doc.data());
    setBooks(books);
  };
  useEffect(() => {
    getBooks();
    return () => setBooks([]);
  }, []);

  return (
    <>
      {books.map((book, i) => {
        const orientation = i % 2 === 0 ? "left" : "right";
        return <Book book={book} width={"50vw"} orientation={orientation} />;
      })}
    </>
  );
};

export default BookPage;
