const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  };

  generate() {
    //> Define un límite de generación de datos. Si 'size' no está especificado, se usa 10 como valor predeterminado.
    // const limit = size || 10;
    const limit = 100;

    for(let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        sex: faker.person.sex(),
        jobArea: faker.person.jobArea(),
        Image: faker.image.avatar()
      })
    }
  };

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  };

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000)
    })
  };

  async findOne(id) {
    return this.users.find(item => item.id === id);
  };

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Usuario no pudo modificarse')
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  };

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Usuario eliminado');
    }
    this.users.splice(index, 1);
    return {id};
  }
};

module.exports = UsersService;