import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  async function createBook(title) {
    const { data: book } = await await axios.post(
      "http://localhost:3001/books",
      {
        title,
      },
    );

    setBooks([...books, book]);
  }

  useEffect(function () {
    async function fetchBooks() {
      const { data } = await axios.get("http://localhost:3001/books");
      setBooks(data);
    }

    fetchBooks();
  }, []);

  async function deleteBook(id) {
    try {
      await axios.delete(`http://localhost:3001/books/11`);

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
    const { data: updatedBook } = await axios.put(
      `http://localhost:3001/books/${id}`,
      {
        title,
      },
    );

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
      <BookList books={books} onDeleteBook={deleteBook} onEditBook={EditBook} />
      <BookCreate onCreateBook={createBook} />
    </div>
  );
}

export default App;
