import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import { createBook, deleteBook, editBook, fetchBooks } from "./api";

function App() {
  const [books, setBooks] = useState([]);

  async function handleCreateBook(title) {
    try {
      const book = await createBook(title);
      setBooks([...books, book]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    async function loadBooks() {
      try {
        const books = await fetchBooks();
        setBooks(books);
      } catch (error) {
        console.log(error);
      }
    }

    loadBooks();
  }, []);

  async function handleDeleteBook(id) {
    try {
      await deleteBook(id);
      setBooks(
        books.filter((book) => {
          return book.id !== id;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function EditBook(id, title) {
    try {
      const updatedBook = await editBook(id, title);
      setBooks(
        books.map((book) => {
          if (book.id === id) {
            return { ...book, ...updatedBook };
          }

          return book;
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDeleteBook={handleDeleteBook}
        onEditBook={EditBook}
      />
      <BookCreate onCreateBook={handleCreateBook} />
    </div>
  );
}

export default App;
