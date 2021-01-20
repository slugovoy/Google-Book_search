const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: String,
  image: { type: String, required: true},
  link: { type: String, required: true},
});

const  Book = mongoose.model("Book", BookSchema);

module.exports = Book;