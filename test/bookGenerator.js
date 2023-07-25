const faker = require('faker');

function generateRandomBooks(count) {
  const bookArray = [];

  for (let i = 0; i < count; i++) {
    const newBook = {
      title: faker.random.words(3),
      author: {
        name: faker.name.findName(),
        country: faker.address.country(),
        birthDate: faker.date.past(35, '2006-01-01'), 
      },
      price: parseFloat(faker.commerce.price(10, 1000, 2)),
      isbn: faker.datatype.uuid(), 
      language: faker.random.locale(),
      numberOfPages: faker.datatype.number({ min: 100, max: 800 }), 
      publisher: faker.company.companyName(),
    };

    bookArray.push(newBook);
  }

  return bookArray;
}

module.exports = generateRandomBooks;
