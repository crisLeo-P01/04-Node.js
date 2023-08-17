const express = require('express');
const routerApi = require('./routes');

//> Importar middleware e importamos las funciones que se uilizarán
const {logErrors, errorHandler, boomErrorHandler} = require('../nodeExpress/middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

//> Utilizamos los middleware. Siempre deben ir después del routing:
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
