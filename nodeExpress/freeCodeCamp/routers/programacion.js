const express = require('express');

const { programacion } = require('../datos/cursos.js').infoCursos

const routerProgramacion = express.Router()

// Esto nos va a permitir procesar el cuerpo
// de esa solicitud en formato json y
// poder trabajar con ese cuerpo de la solicitud
// en nuestro código, como la propiedad body
// MIDDLEWARE
/*
Las funciones middleware se ejecutan:
- Después de recibir una solicitud
- Antes de enviar una respuesta
*/
routerProgramacion.use(express.json())

// GET PROGRAMACION (mostrar información)
routerProgramacion.get('/', (req, res) => {
  res.send(JSON.stringify(programacion))
})

routerProgramacion.get('/:lenguaje/', (req, res) => {
  const lenguaje = req.params.lenguaje
  const resultados = programacion.filter(curso => curso.lenguaje === lenguaje)

  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`)
  }

  // ordenar por vistas
  if (req.query.ordenar === 'vistas') {
    return res.send(JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas)))
  }

  res.send(JSON.stringify(resultados))
})

// POST (Agregar información nueva)
routerProgramacion.post('/', (req, res) => {
  let cursoNuevo = req.body
  programacion.push(cursoNuevo)
  res.send(JSON.stringify(programacion))
})

// PUT (Actualizar una información)
routerProgramacion.put('/:id', (req, res) => {
  const cursoActualizado = req.body
  const id = req.params.id

  const indice = programacion.findIndex(curso => curso.id == id)

  if (indice >= 0) {
    programacion[indice] = cursoActualizado
  }
  res.send(JSON.stringify(programacion))
})

// PATH (es especificar solo la que queremos cambiar y se van a actualizar)
routerProgramacion.patch('/:id', (req, res) => {
  const infoActualizada = req.body
  const id = req.params.id

  const indice = programacion.findIndex(curso => curso.id == id)

  if (indice >= 0) {
    const cursoAModificar = programacion[indice]

    /* assign nos permite pasar un objeto que vamos
    a modificar y otro objeto que tiene propiedades
    y valores. Entocnes usamos este objeto "infoActualizada",
    por ejemplo si vamos a cambiar el numero de vistas, solo
    esas propiedades y vamos a aplicarlas para modificar
    el objeto original "cursoAModificar"
    */
    Object.assign(cursoAModificar, infoActualizada)
  }

  res.send(JSON.stringify(programacion))
})

routerProgramacion.delete('/:id', (req, res) => {
  const id = req.params.id

  const indice = programacion.findIndex(curso => curso.id == id)

  if (indice >= 0) {
    programacion.splice(indice, 1)
  }

  // Forma abreviada cuando ya sabes en el formato en el que esta.
  res.json(programacion)
})

module.exports = routerProgramacion