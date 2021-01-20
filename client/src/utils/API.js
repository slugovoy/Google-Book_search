import axios from "axios";

const Base_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
 searchBooks: (query) => axios.get(Base_URL + query),
 getAllBooks: () => ("/api/books"),
 saveBook: (data) => axios.post("/api/books", data),
 deleteBook: (id) => axios.delete("api/books/" + id)
};
