import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook, onEditBook }) {
  const [editMode, setEditShow] = useState(false);

  function handleDeleteBook() {
    onDeleteBook(book.id);
  }

  function handleEditMode() {
    setEditShow(!editMode);
  }

  function closeEditMode() {
    setEditShow(false);
  }

  function handleSubmit(id, title) {
    onEditBook(id, title);
    closeEditMode();
  }

  let content = <h3>{book.title}</h3>;
  if (editMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      {content}
      <button onClick={handleDeleteBook}>Delete</button>
      <button onClick={handleEditMode}>Edit</button>
    </div>
  );
}

export default BookShow;
