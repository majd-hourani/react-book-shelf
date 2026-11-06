import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    setBooks([...books, { id: Math.floor(Math.random() * 100000), title }]);
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
