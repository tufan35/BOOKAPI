const BookRepository = require('../repositories/bookRepository');

class UpdateBook {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async execute(bookId, bookData) {
    return await this.bookRepository.updateBook(bookId, bookData);
  }
}

module.exports = UpdateBook;
