const { faker } = require('@faker-js/faker');
function generateFakeUsers(req, res, next) {
  const users = Array.from({ length: 10 }, () => ({
    id: faker.datatype.uuid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress()
  }))

  req.users = users;
  next();
}

module.exports = { generateFakeUsers };
