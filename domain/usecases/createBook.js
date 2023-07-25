const BookRepository = require('../repositories/bookRepository');

class CreateBook {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async execute(bookData) {
    return await this.bookRepository.createBook(bookData);
  }
}

module.exports = CreateBook;
