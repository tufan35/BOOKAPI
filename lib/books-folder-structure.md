project-folder/
├── application/
│   ├── bookService.js
├── domain/
│   ├── models/
│   │   ├── book.js
│   ├── repositories/
│   │   ├── bookRepository.js
│   └── usecases/
│       ├── createBook.js
│       ├── readBook.js
│       ├── updateBook.js
│       └── deleteBook.js
├── infrastructure/
│   ├── mongodb/
│   │   └── mongoose.js
│   └── express.js
├── presentation/
│   ├── routes/
│   │   └── bookRoutes.js
│   └── controllers/
│       └── bookController.js
├── index.js
├── Dockerfile
└── docker-compose.yaml
