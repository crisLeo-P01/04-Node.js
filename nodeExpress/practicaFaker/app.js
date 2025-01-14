const express = require('express');
const app = express();
const userRoute = require('./routes/users');

app.use(express.json());

app.use('/api', userRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})
