const BookService = require("../../application/bookService");

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  //updated - Book
  async updateBook(req, res) {
    try {      
      const updatedBook = await this.bookService.updatedBook(req.params.id, req.body);
      res.status(200).json(updatedBook);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //added - Book
  async addBook(req, res) {
    try {
      const newBook = await this.bookService.addBook(req.body);
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //getAll - Book
  async getAllBooks(req, res) {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({error});
    }
  }

//deleted - Book
  async removeBook(req, res) {
    try {
      const deletedBook = await this.bookService.removeBook(req.params.id);
      res.status(200).json(deletedBook);
    } catch (error) {
      res.status(500).json({error});
    }
  }
}

module.exports = BookController;
