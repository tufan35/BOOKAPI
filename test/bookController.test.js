const app = require("../infrastructure/express");
const chai = require("chai");
const chaiHttp = require("chai-http");
const mongoose = require("mongoose");//mongoose
const generateRandomBooks = require('./bookGenerator'); //random books data

let bookId="";

const bookArray = generateRandomBooks(15);

chai.use(chaiHttp);
const expect = chai.expect;

describe("API TEST", () => {
  beforeEach((done) => {

    mongoose
      .connect("mongodb://127.0.0.1:27017/test_books_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
        done();
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        done(err);
      });
  });

  beforeEach((done) => {
    mongoose.connection.dropDatabase().then(() => done());
  });

  afterEach((done) => {
    mongoose.connection.dropDatabase().then(() => done());
  });

  after((done) => {
    mongoose.connection.close().then(() => done());
  });

//In order to avoid errors in the getAll function test, 15 random data are generated.
  bookArray.forEach((bookData) => {
    it(`should create a new book with title "${bookData.title}"`, (done) => {
      chai
        .request(app)
        .post("/api/books")
        .send(bookData)
        .end((err, res) => {
          if (err) {

            done(err); 
          } else {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
            done();
          }
        });
    });
  });

  //$GetAll Test
  it('should get all books', (done) => {
    chai
      .request(app)
      .get('/api/books') 
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        //expect(res.body.length).to.be.above(0);
        done();
      });
  });

  //#Created Test
  it("should create a new book", (done) => {
    chai
      .request(app)
      .post("/api/books")
      .send({
        "title": "Sample Book",
        "author": {
          "name": "John Doe",
          "country": "USA",
          "birthDate": "1990-01-01"
        },
        "price": 25.99,
        "isbn": "15674234675",
        "language": "English",
        "numberOfPages": 300,
        "publisher": "Sample Publisher"
      })
      .end((err, res) => {
        if (err) {
          console.error(err.message); // error message print console
          done(err); // if return the error finished work
        } else {
          bookId=res.body.data._id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.a('object');
          done();
        }
      });
  });



    //$Update Test
  it("should update a book", (done) => {
    chai
      .request(app)
      .put('/api/books/'+bookId)
      .send({
        title: "Lord of Kings 2343",
        author: {
          name: "John Merge",
          country: "USA",
          birthDate: "1991-01-01",
        },
        price: 26.65,
        isbn: "654456",
        language: "turkish ",
        numberOfPages: 200,
        publisher: "Sample Publisher 1",
      }) 
      .end((err, res) => {
        //console.log(res);
        //expect(res).to.have.status(200);
        //expect(res.body).to.have.property("title", "Book updated successfully.");
        done();
      });
  });


  //#  delete test
  it('should delete a book', (done) => {
    chai
      .request(app)
      .delete('/api/books/'+bookId)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

});
