import BookShow from "./BookShow";

function BookList({ books, onDeleteBook, onEditBook }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onDeleteBook={onDeleteBook}
        onEditBook={onEditBook}
      />
    );
  });

  console.log(renderedBooks);
  return <div>{renderedBooks}</div>;
}

export default BookList;
