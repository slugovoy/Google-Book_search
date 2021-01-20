// import axios from "axios";

// const Base_URL = "https://www.googleapis.com/books/v1/volumes?q=";

// export default {
//  searchBooks: (query) => axios.get(Base_URL + query),
//  getAllBooks: () => ("/api/books"),
//  saveBook: (data) => axios.post("/api/books", data),
//  deleteBook: (id) => axios.delete("api/books/" + id)
// };

import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};