import axios from "axios";

const BASE_URL = "http://localhost:3001/books";

async function createBook(title) {
  const { data: book } = await axios.post(BASE_URL, { title });
  return book;
}

async function fetchBooks() {
  const { data } = await axios.get(BASE_URL);
  return data;
}

async function editBook(id, title) {
  const { data: updatedBook } = await axios.put(`${BASE_URL}/${id}`, {
    title,
  });

  return updatedBook;
}

async function deleteBook(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

export { createBook, fetchBooks, deleteBook, editBook };
