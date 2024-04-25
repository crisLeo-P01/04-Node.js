const express = require('express');

const { matematicas } = require('../datos/cursos.js').infoCursos

const routerMatematicas = express.Router()

//JSON MATEMATICAS
routerMatematicas.get('/', (req, res) => {
  res.send(JSON.stringify(matematicas))
})

routerMatematicas.get('/:tema', (req, res) => {
  const tema = req.params.tema
  const resultados = matematicas.filter(curso => curso.tema === tema)

  if (resultados.length === 0) {
    return res.status(404).send(`La asignatura ${tema} que esta buscando no se encuentra.`)
  }

  res.send(JSON.stringify(resultados))
})

// Busqueda por nivel
routerMatematicas.get('/:tema/:nivel', (req, res) => {
  const tema = req.params.tema
  const nivel = req.params.nivel

  const resultados = matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel)

  if (resultados.length === 0) {
    res.status(404).send(`No se encontro nivel ${nivel} en la asignatura de ${tema}`)
  }

  res.send(JSON.stringify(resultados))
})

module.exports = routerMatematicas