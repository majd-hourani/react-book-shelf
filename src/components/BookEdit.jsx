import { useState } from "react";

function BookEdit({ book, onEditBook }) {
  const [title, setTitle] = useState(book.title);

  function handleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onEditBook(book.id, title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
