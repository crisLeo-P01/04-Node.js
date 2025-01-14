const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Bienvenido a mi servidor</h1>');
  } else if (req.method === 'GET' && req.url === '/posts') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Entrada de Posts</h1>')
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.end('Página no encotrada')
  }
})

const servidor = 3000;

server.listen(servidor, () => {
  console.log(`Servidor a la escucha: http://localhost:${servidor}`)
})
