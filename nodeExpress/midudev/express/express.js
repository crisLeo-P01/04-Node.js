const express = require('express')
const ditto = require('../nativeNode/pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 3232
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    res.end(JSON.stringify(data))
  })
})

app.listen(PORT, () => {
  console.log(`Servidor local en http://localhost:${PORT}`);
})