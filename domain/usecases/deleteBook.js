const BookRepository = require('../repositories/bookRepository');

class DeleteBook {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async execute(bookId) {
    return await this.bookRepository.deleteBook(bookId);
  }
}

module.exports = DeleteBook;
