const Book = require("../../domain/models/book");
const Error = require("../models/Message/Error");
const Success = require("../models/Message/Success");

class BookRepository {

  //Updated-Operation booksModel
  async updateBook(bookId, bookData) {
    try {
      const result = await Book.findByIdAndUpdate(bookId, bookData, {    new: true,  });
      return new Success(result, "Book updated successfully.");
    } catch (error) {
      throw error;
    }
  }

  //Added-Operation booksModel
  async createBook(bookData) {
    try {
      const existingBook = await Book.findOne({ isbn: bookData.isbn });

      if (existingBook) {
        const error = new Error("A book with the same ISBN already exists.");
        throw error;
      }

      const book = await Book.create(bookData);
      return new Success(book, "Book created successfully.");
    } catch (error) {
      throw error;
    }
  }

  ////GetAll-Operation booksModel
  async getAllBooks() {
    try {
      return await Book.find({});
    } catch (error) {
      throw error;
    }
  }

  //Deleted-Operation booksModel
  async deleteBook(bookId) {
    try {
      const result = await Book.findByIdAndDelete(bookId);
      return new Success(result, "Book deleted successfully.");
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookRepository;
