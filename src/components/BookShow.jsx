import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../context/BooksContext";

function BookShow({ book }) {
  const [editMode, setEditShow] = useState(false);
  const { handleEditBook, handleDeleteBook } = useBooksContext();

  function handleDelete() {
    handleDeleteBook(book.id);
  }

  function handleEditMode() {
    setEditShow(!editMode);
  }

  function closeEditMode() {
    setEditShow(false);
  }

  function handleSubmit(id, title) {
    handleEditBook(id, title);
    closeEditMode();
  }

  let content = <h3>{book.title}</h3>;
  if (editMode) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditMode}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
