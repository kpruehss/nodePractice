const faker = require('faker');

for (let count = 0; count < 10; count++) {
  console.log(`${faker.commerce.productName()} - $${faker.finance.amount()}`);
}
