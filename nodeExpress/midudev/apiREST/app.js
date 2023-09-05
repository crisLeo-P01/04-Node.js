const express = require('express') // require -> commonJS
const crypto = require('node:crypto')
const cors = require('cors')

const movies = require('./movies.json')
const { validateMovie, validatePartialMovie } = require('./schemas/movies.schema')

const app = express()
app.use(express.json())
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'https://movies.com',
      'https://midu.dev'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))
// Esta línea configura CORS para permitir solicitudes desde ciertos orígenes.

// -------------------------------------------------------------------------------
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express
// Esta línea deshabilita el encabezado X-Powered-By que se envía por defecto en las respuestas HTTP.

// -------------------------------------------------------------------------------
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

/* Esta línea define una ruta para manejar solicitudes GET a la ruta /movies.
Si se proporciona un parámetro de consulta genre, se filtran las películas
por género y se devuelven las películas filtradas. De lo contrario, se devuelven todas las películas. */

// -------------------------------------------------------------------------------
app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movie not found' })
})

/* Esta línea define una ruta para manejar solicitudes GET a la ruta /movies/:id.
Si se proporciona un ID de película válido, se devuelve la película correspondiente.
De lo contrario, se devuelve un mensaje de error. */

// -------------------------------------------------------------------------------
app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // en base de datos
  const newMovie = {
    id: crypto.randomUUID(), // uuid v4
    ...result.data
  }

  movies.push(newMovie)

  res.status(201).json(newMovie)
})
/* Esta línea define una ruta para manejar solicitudes POST a la ruta /movies.
Primero, se valida el cuerpo de la solicitud utilizando el esquema de validación
de películas. Si los datos son válidos, se crea una nueva película con un ID único
y se agrega al archivo JSON. Se devuelve la nueva película creada. */

// -------------------------------------------------------------------------------
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})
/* Esta línea define una ruta para manejar solicitudes DELETE a la ruta /movies/:id.
Si se proporciona un ID de película válido, se elimina la película correspondiente
del archivo JSON. De lo contrario, se devuelve un mensaje de error. */

// -------------------------------------------------------------------------------
app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

/* Esta línea define una ruta para manejar solicitudes PATCH a la ruta /movies/:id.
Primero, se valida el cuerpo de la solicitud utilizando el esquema de validación de
películas parciales. Si los datos son válidos, se actualiza la película correspondiente
en el archivo JSON. Se devuelve la película actualizada. */

// -------------------------------------------------------------------------------

const PORT = 3243

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

// Esta línea define el puerto en el que se ejecutará el servidor y lo inicia.

// -------------------------------------------------------------------------------
