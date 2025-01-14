const express = require('express');
const router = express.Router();
const { generateFakeUsers } = require('../middleware/search');

// routes/users.js
router.get('/users', generateFakeUsers, (req, res) => {
  const searchTerm = req.query.name ? req.query.name.trim().toLowerCase() : ''; // Aseguramos que el parámetro esté limpio

  // Muestra el término de búsqueda en la consola
  console.log('Término de búsqueda:', searchTerm);

  // Si no se proporciona un término de búsqueda, devuelve todos los usuarios
  if (!searchTerm) {
    return res.json(req.users);
  }

  // Muestra todos los usuarios generados en la consola
  console.log('Usuarios generados:', req.users);

  // Filtra los usuarios por el nombre que se busca
  const filteredUsers = req.users.filter(user => {
    const userName = user.name.toLowerCase(); // Aseguramos que el nombre esté en minúsculas
    console.log('Comparando:', userName, 'con', searchTerm);
    return userName.includes(searchTerm);
  });

  // Si no encuentra nada, muestra un mensaje en la consola
  if (filteredUsers.length === 0) {
    console.log('No se encontraron usuarios con ese nombre.');
  }

  res.json(filteredUsers);
});

module.exports = router;
