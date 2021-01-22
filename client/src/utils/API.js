import axios from "axios";

export default {
  getAllBooks: () => axios.get("/api/books"),
  saveBook: (data) => axios.post("/api/books", data),
  deleteBook: (id) => axios.delete("api/books/" + id),
};