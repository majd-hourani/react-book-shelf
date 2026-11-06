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

  return (
    <div>
      <BookList books={books} onDeleteBook={deleteBook} />
      <BookCreate onCreateBook={createBook} />
    </div>
  );
}

export default App;
