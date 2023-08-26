const http = require('node:http')

/* El http tiene una función con dos parametros, request y response.
Una petición desde un cliente hacia un servidor es una request,
en la que tendrá cabeceras, métodos, etc.. y el servidor mandará
una respuesta al cliente con esa información /// */

// http.createServer(function(req, res) {
//   console.log('Nueva petición!');
//   console.log(req.url);

//   //> Cabecera
//   res.writeHead(201, {'Content-Type': 'text/plain'})

//   //> Escribir respuesta al usuario
//   res.write('Hola, ya se usar HTTP de NodeJS')

//   res.end();
// }).listen(3000)

// http.createServer(router).listen(3000)
// function router (req, res) {
//   console.log('Nueva petición!')
//   console.log(req.url)

//   switch (req.url) {
//     case '/hola':
//       res.writeHead(201, { 'Content-Type': 'text/plain' })
//       res.write('Hola, que tal')
//       res.end()
//       break

//     default:
//       res.write('Error 404: No se lo que quieres')
//       res.end()
//   }

//   res.end()
// }

// console.log('Escuchando http en el puerto 3000')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

server.listen(0, () => {
  console.log(`server listening on port http://localhost:${server.address().port}`)
})
