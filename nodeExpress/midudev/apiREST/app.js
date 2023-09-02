const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies.schema')

const app = express()
app.use(express.json()) // middleware
app.disabled('x-powered-by')

app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filterdMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filterdMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)

  res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  // ESTO ☝, REEMPLAZA A ESTO 👇 -----------

  // const {
  //   title,
  //   genre,
  //   year,
  //   director,
  //   duration,
  //   rate,
  //   poster
  // } = req.body

  // ----------------------------------------

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data

    // ESTO ☝, REEMPLAZA A ESTO 👇 -----------

    // title,
    // genre,
    // year,
    // director,
    // duration,
    // rate: rate ?? 0,
    // poster

    // ----------------------------------------
  }

  movies.push(newMovie)
  res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
  const {id} = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)
  if(!movieIndex) return res.status(404).json({message: 'Movie not found'})
})

const port = 3243

app.listen(port, () => {
  console.log(`Escuchando en el server http://localhost:${port}`);
})