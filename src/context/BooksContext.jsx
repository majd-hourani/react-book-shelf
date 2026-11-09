import { createContext, useContext, useState } from "react";

import { createBook, deleteBook, editBook, fetchBooks } from "../api.js";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateBook(title) {
    try {
      const book = await createBook(title);
      setBooks((books) => [...books, book]);
    } catch (error) {
      console.log(error);
    }
  }

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
    <BooksContext.Provider
      value={{
        books,
        isLoading,
        handleCreateBook,
        loadBooks,
        handleEditBook,
        handleDeleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
export { Provider };
