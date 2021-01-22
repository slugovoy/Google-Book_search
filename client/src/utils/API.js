// Package
import axios from "axios";

// Routes
export default {
  getAllBooks: () => axios.get("/api/books"),
  saveBook: (data) => axios.post("/api/books", data),
  deleteBook: (id) => axios.delete("api/books/" + id),
};