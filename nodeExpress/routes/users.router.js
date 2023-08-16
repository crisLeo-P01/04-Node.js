const express = require('express');
const UsersService = require('../services/users.service');

//> Crea un enrutador utilizando la funcionalidad de Express para manejar rutas y solicitudes.
const router = express.Router();

const service = new UsersService();

//> FIND USER
router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

//> FIND A USER FOR ID
router.get('/:id', async (req, res) => {
  //> Obtiene el valor del parámetro de ruta 'id' de la solicitud.
  const {id} = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

//> CREATE USER
router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});

//> UPDATE USER
router.patch('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const user = await service.update(id, body);
    res.json(user);
  } catch(err) {
    res.status(404).json({
      message: err.message
    })
  }
});

//> DELETE USER
router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})




module.exports = router;
