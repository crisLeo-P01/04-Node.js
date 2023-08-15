const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.use('/', (req, res) => {
  const persons = [];
  const {size} = req.query;
  const limit = size || 10;

  for(let i = 0; i < limit; i++) {
    persons.push({
      name: faker.person.fullName(),
      sex: faker.person.sex(),
      jobArea: faker.person.jobArea(),
      Image: faker.image.avatar()
    })
  }

  res.json(persons);
})

router.use('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: faker.person.fullName(),
    sex: faker.person.sex(),
    jobArea: faker.person.jobArea(),
    Image: faker.image.avatar()
  })
})

router.get('/', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parámetros');
  }
})

module.exports = router;
