import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useContext(BooksContext);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreateBook(title);
    setTitle("");
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
