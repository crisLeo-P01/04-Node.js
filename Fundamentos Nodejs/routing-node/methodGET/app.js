const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      return manejarSolicitudGET(res, req)
    // manejarSolicitudGET(res, req);
    // break;
    case 'POST':
      return manejarSolicitudPOST(res, req)
    default:
      res.statusCode = 501
      res.end(`El método no puede ser manejado por el servidor: ${method}`);
  }
});

function manejarSolicitudGET(res, req) {
  const path = req.url;

  if (path === '/') {
    // los estados 200 se ejecutan por defecto, por eso no es necesario explicitarlo directamente
    // res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
  } else if (path === '/cursos') {
    // res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === '/cursos/programacion') {
    // res.statusCode = 200
    return res.end(JSON.stringify(cursos.infoCursos.programacion))
  }

  res.statusCode = 404
  res.end('El recurso solicitado no existe...')
}

function manejarSolicitudPOST(res, req) {
  const path = req.url;

  if (path === '/cursos/programacion') {
    // res.statusCode = 200;
    let cuerpo = ''
    req.on('data', contenido => {
      cuerpo += contenido.toString()
    })

    req.on('end', () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // Convertir a un objeto de JavaScript
      cuerpo = JSON.parse(cuerpo)

      console.log(cuerpo);
      console.log(typeof cuerpo);

      console.log(cuerpo.titulo);

      return res.end('El servidor recibio una solicitud POST para cursos/programacion');
    })

    // return res.end('El servidor recibio una solicitud POST para cursos/programacion');
  }

}

const PUERTO = 1234;

servidor.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
