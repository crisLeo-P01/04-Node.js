const cors = require('cors');
const express = require('express');
const routerApi = require('./routes');

//> Importar middleware e importamos las funciones que se uilizarán
const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/error.handler');

const app = express();
const port = process.env.PORT || 3000;

//> Habilita para que todos los origenes puedan acceder a las peticiones
// app.use(cors());

//> La forma de restringir a que sitios si pueden hacer peticiones
const whitelist = ['http://localhost:8080', 'https://myapp.com', 'http://127.0.0.1:5500'];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No esta permitido'));
    }
  }
}
app.use(cors(options));
app.use(express.json());

//> Utilizamos los middleware. Siempre deben ir después del routing:
routerApi(app);

app.get('/api', (req, res) => {
  res.send('Hola, mi server en express');
});


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
