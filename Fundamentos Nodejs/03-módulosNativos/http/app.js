const http = require('node:http')

const servidor = http.createServer((res, req) => {
  console.log('===> req (solicitud)');
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.end('Hola Mundo!')
});

const puerto = 3000

servidor.listen(puerto, () => {
  console.log(`El servidor esta en el puerto ${puerto}`);
})