import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {
    console.log(title);
    setBooks([...books, { id: Math.floor(Math.random() * 100000), title }]);
  }

  return (
    <div>
      <BookList books={books} />
      <BookCreate onCreateBook={createBook} />
    </div>
  );
}

export default App;
