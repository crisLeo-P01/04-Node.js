const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      return manejarSolicitudPOST(res, req)
    default:
      console.log(`El método usado no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudPOST(res, req) {
  const path = req.url;

  if (path === '/cursos/programacion') {
    res.statusCode = 200;
    res.end('El servidor recibio una solicitud POST para cursos/programacion');
  }

}

const PUERTO = 3001;

servidor.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}`);
});
