import { useContext, useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import { createBook, deleteBook, editBook, fetchBooks } from "./api";
import { BooksContext } from "./context/BooksContext";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { count, incrementCount } = useContext(BooksContext);

  async function handleCreateBook(title) {
    try {
      const book = await createBook(title);
      setBooks((books) => [...books, book]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    async function loadBooks() {
      try {
        setIsLoading(true);
        const books = await fetchBooks();
        setBooks(books);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadBooks();
  }, []);

  async function handleDeleteBook(id) {
    try {
      await deleteBook(id);
      setBooks((books) => books.filter((book) => book.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditBook(id, title) {
    try {
      const updatedBook = await editBook(id, title);

      setBooks((books) =>
        books.map((book) =>
          book.id === id ? { ...book, ...updatedBook } : book,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <h1>Reading List {count}</h1>
      <button onClick={incrementCount}>increment</button>

      {isLoading ? (
        <p>Loading books...</p>
      ) : (
        <BookList
          books={books}
          onDeleteBook={handleDeleteBook}
          onEditBook={handleEditBook}
        />
      )}

      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
