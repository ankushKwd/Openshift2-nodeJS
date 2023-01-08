const mongoose = require("mongoose");
const BooksSchema = require("./Schemas").BooksSchema
const booksData = mongoose.model("Books", BooksSchema);

const getBooks = async (request, response) => {
  const books = [];
  await booksData.find().then((b) => books.push(...b));
  response.json(books);
};

const createBook = (request, response) => {
    console.log(request.body)
  if (request.body) {
    booksData.create({
      bookName: request.body.bookName,
      author: request.body.author,
      publishedDate: new Date(request.body.publishedDate),
      pages: request.body.pages,
      type: request.body.type,
      publisher: request.body.publisher,
    });
  }
  response.status(201).send("Created Succesfully");
};

const updateBook = async (request, response) => {
  booksData
    .findByIdAndUpdate(
      { _id: request.body._id },
      {
        ...request.body,
      }
    )
    .then((res) => {
      response.send(res);
    })
    .catch((err) => {
      response.send(err);
    });
};

const deleteBook = async (request, response) => {
  booksData
    .deleteOne({ _id: request.body._id })
    .then((res) => {
      console.log(res);
      response.send(res);
    })
    .catch((err) => {
      response.send(err);
    });
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
