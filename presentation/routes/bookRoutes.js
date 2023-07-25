const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

const bookController = new BookController();

router.post('/', async (req, res) => {
  bookController.addBook(req, res);
});

router.get('/', async (req, res) => {
  bookController.getAllBooks(req, res);
});

router.put('/:id', async (req, res) => {
  bookController.updateBook(req, res);
});

router.delete('/:id', async (req, res) => {
  bookController.removeBook(req, res);
});

module.exports = router;
