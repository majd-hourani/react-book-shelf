import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import axios from "axios";
import { createBook, deleteBook, editBook, fetchBooks } from "./api";

function App() {
  const [books, setBooks] = useState([]);

  async function handleCreateBook(title) {
    const book = await createBook(title);
    setBooks([...books, book]);
  }

  useEffect(function () {
    async function loadBooks() {
      const books = await fetchBooks();
      setBooks(books);
    }

    loadBooks();
  }, []);

  async function handleDeleteBook(id) {
    await deleteBook(id);
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      }),
    );
  }

  async function EditBook(id, title) {
    const updatedBook = await editBook(id, title);
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, ...updatedBook };
        }

        return book;
      }),
    );
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
