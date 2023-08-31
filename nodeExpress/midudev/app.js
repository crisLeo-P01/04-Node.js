const http = require('node:http') //> Protocolo HTTP
const fs = require('node:fs')

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if(req.url === '/') {
    res.statusCode = 200 //> OK
    res.end('Bienvenido a mi página de inicio')
  } else if(req.url === '/imagen-node') {
    fs.readFile('./nodejs.png', (err, data) => {
      if(err) {
        res.statusCode = 500
        res.end('<h2>500 Internal Server Error</h2>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if(req.url === '/contacto') {
    res.statusCode = 200
    res.end('Contancto')
  } else {
    res.statusCode = 404 // Not found
    res.end('Error 404')
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`);
})