//> https://blog.soyhenry.com/que-es-node-js-y-para-que-se-utiliza/

const express = require('express');
const { faker } = require('@faker-js/faker');

//> Crea un enrutador utilizando la funcionalidad de Express para manejar rutas y solicitudes.
const router = express.Router();

router.get('/', (req, res) => {
  const persons = [];

  //> Obtiene el valor del parámetro de consulta 'size' de la solicitud
  const {size} = req.query;

  //> Define un límite de generación de datos. Si 'size' no está especificado, se usa 10 como valor predeterminado.
  const limit = size || 10;

  for(let i = 0; i < limit; i++) {
    persons.push({
      name: faker.person.fullName(),
      sex: faker.person.sex(),
      jobArea: faker.person.jobArea(),
      Image: faker.image.avatar()
    })
  }

  //> Envía los datos generados en formato JSON como respuesta a la solicitud.
  res.json(persons);
})

router.get('/:id', (req, res) => {

  //> Obtiene el valor del parámetro de ruta 'id' de la solicitud.
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

  //> Verifica si tanto 'limit' como 'offset' están presentes en los parámetros de consulta.
  if(limit && offset) {

    //> Si ambos parámetros están presentes, responde con un objeto JSON que contiene los valores de 'limit' y 'offset'.
    res.json({
      limit,
      offset
    })
  } else {

    //> Si al menos uno de los parámetros no está presente, responde con un mensaje indicando que no hay parámetros suficientes.
    res.send('No hay parámetros');
  }
})

module.exports = router;
