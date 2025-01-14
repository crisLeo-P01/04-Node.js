const http = require('node:http') // Protocolo HTTP
const fs = require('node:fs')

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if(req.url === '/') {
        res.statusCode = 200 // >OK
        res.end('<h1>Bienvenido a mi página de inicio</h1>')
    } else if(req.url === '/contacto') {
            res.statusCode = 200
            res.end('<h2>Contacto</h2>')
    } else if(req.url === '/imagen-sun.png') {
        fs.readFile('./nodejs.png', (err, data) => {
            if(err) {
                res.statusCode = 500
                res.end('<h2>500 Internal Server Error</h2>')
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404 // Not found
        res.end('<h2>404 Error</h2>')
    }
}
const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log(`Server listening on port http://localhost:${server.address().port}`);
})