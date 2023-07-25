const mongoose = require("mongoose");

//name : required, author name
//Country : required, country
//birthDate : required, author birth Date
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

//title : required, Books title
//author : required, Author ptoperty
//price : required, sales price
//isbn : required, Books national ID
//language : required,  Books language
//numberOfPages: required,  Books number of Pages
//publisher: required, Publishing House
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: authorSchema, required: true },
  price: { type: Number, required: true },
  isbn: { type: String, required: true, unique : true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  publisher: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
