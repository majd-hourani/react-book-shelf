import { useState } from "react";
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

  function deleteBook(id) {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      }),
    );
  }

  function EditBook(id, title) {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title };
        } else {
          return book;
        }
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
