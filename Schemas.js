const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  bookName: String,
  author: String,
  publishedDate: Date,
  pages: Number,
  type: String,
  publisher: String,
});

const usersSchema = new Schema({
    name: String,
    surname: String,
  });

module.exports = { BooksSchema, usersSchema }