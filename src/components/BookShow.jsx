import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDeleteBook }) {
  const [editMode, setEditShow] = useState(false);

  function handleDeleteBook() {
    onDeleteBook(book.id);
  }

  function handleEditMode() {
    setEditShow(!editMode);
  }

  let content = <h3>{book.title}</h3>;
  if (editMode) {
    content = <BookEdit />;
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
