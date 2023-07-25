const CreateBook = require('../domain/usecases/createBook');
const ReadBook = require('../domain/usecases/readBook');
const DeleteBook = require('../domain/usecases/deleteBook');
const UpdateBook = require('../domain/usecases/updateBook');

class BookService {
  constructor() {
    this.createBook = new CreateBook();
    this.readBook = new ReadBook();
    this.updateBook = new UpdateBook(); 
    this.deleteBook = new DeleteBook();
  }

  async updatedBook(bookId, bookData) {
    return await this.updateBook.execute(bookId, bookData); 
  }

  async addBook(bookData) {
    return await this.createBook.execute(bookData);
  }

  async getAllBooks() {
    return await this.readBook.execute();
  }
 
  async removeBook(bookId) {
    return await this.deleteBook.execute(bookId);
  }
}

module.exports = BookService;
