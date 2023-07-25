const mongoose = require('mongoose');
const config = require('../../config');

//tests_localMongo
//const mongoURI = 'mongodb://127.0.0.1:27017/books_db';

//process.env.MONGO_URL
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
