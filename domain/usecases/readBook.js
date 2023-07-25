const BookRepository = require('../repositories/bookRepository');

class ReadBook {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async execute() {
    return await this.bookRepository.getAllBooks();
  }
}

module.exports = ReadBook;
