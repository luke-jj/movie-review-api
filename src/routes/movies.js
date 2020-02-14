const express = require('express');
const auth = require('../middleware/auth');
const validate = require('../middleware/validation');
const { movies, validate: validateMovie } = require('../models/movie');

const router = express.Router();

router.get('/', handleGet);
router.get('/:id', handleGetById);
router.post('/', [auth, validate(validateMovie)], handleCreate);
router.put('/:id', [auth, validate(validateMovie)], handleUpdate);
router.delete('/:id', auth, handleDelete);

module.exports = router;

function handleGet(req, res) {
  res.json(movies.getMovies());
}

function handleGetById(req, res) {
  const movie = movies.getMovieById(parseInt(req.params.id));

  if (!movie) {
    return res.status(404).send('Movie with given id not found.');
  }

  res.json(movie);
}

function handleCreate(req, res) {
  const movie = movies.createMovie(req.body.title, req.body.genre);

  res.json(movie);
}

function handleUpdate(req, res) {
  const movie = movies.updateMovie(
    parseInt(req.params.id),
    req.body.title,
    req.body.genre
  );

  if (!movie) {
    return res.status(404).send('Movie with given id not found.');
  }

  res.json(movie);
}

function handleDelete(req, res) {
  const movie = movies.deleteMovie(parseInt(req.params.id));

  if (!movie) {
    return res.status(404).send('Movie with given id not found.');
  }

  res.json(movie);
}
