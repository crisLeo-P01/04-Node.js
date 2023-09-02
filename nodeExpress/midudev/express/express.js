const port = 1278

const express = require('express')
const ditto = require('../nativeNode/pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

app.use(express.json())

// ESTO ☝, REEMPLAZA A ESTO 👇 -----------

// middleware
// app.use((req, res, next) => {
//   console.log('Mi primer middleware');
//   if(req.method !== 'POST') return next()
//   if(req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan request que son POST y que tienen el header Content-Type: application/json
//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     // mutar la request y meter la información en la req.body
//     req.body = data
//     next()
//   })
// })

// ----------------------------------------

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(200).json(req.body)
})

// La última a la que va a llegar, por eso tiene que estar siempre a lo último
app.use((req, res) => {
  res.status(404).send('<h2>404</h2>')
})

app.listen(port, () => {
  console.log(`Servidor local en http://localhost:${port}`);
})