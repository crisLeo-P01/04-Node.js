const { faker } = require('@faker-js/faker');

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

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  };

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000)
    })
  };

  findOne(id) {
    return this.users.find(item => item.id === id);
  };

  update(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error('User Not Found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  };

  delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if(index === -1) {
      throw new Error(`El usuario con el ${id} no se encuentra`);
    }
    this.users.splice(index, 1);
    return {id};
  };
}

module.exports = UsersService;