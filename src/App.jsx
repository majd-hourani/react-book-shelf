import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./context/BooksContext";

function App() {
  const { isLoading, loadBooks } = useBooksContext();

  useEffect(function () {
    loadBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>

      {isLoading ? <p>Loading books...</p> : <BookList />}
      <BookCreate />
    </div>
  );
}

export default App;
