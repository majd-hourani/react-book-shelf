function BookShow({ book, onDeleteBook }) {
  function handleDeleteBook() {
    onDeleteBook(book.id);
  }
  return (
    <div>
      <h3>{book.title}</h3>
      <button onClick={handleDeleteBook}>Delete</button>
    </div>
  );
}

export default BookShow;
