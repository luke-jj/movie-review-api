const Joi = require('@hapi/joi');

const movies =  [
  { id: 0, title: 'Blade Runner 2049', genre: 'Sci-Fi' },
  { id: 1, title: 'Wind River', genre: 'Drama' },
  { id: 2, title: 'The Handmaiden', genre: 'Drama' },
  { id: 3, title: 'Leon: The Professional', genre: 'Action' },
  { id: 4, title: 'Kingdom Of Heaven', genre: 'Adventure' },
  { id: 5, title: 'Oldboy', genre: 'Drama' }
];

const schema = Joi.object({
  title: Joi.string().min(2).required(),
  genre: Joi.string().min(3).required()
});

module.exports = {
  schema,
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};

function getMovies() {
  return movies;
}

function getMovieById(id) {
  return movies.find(movie => movie.id === id);
}

function createMovie(title, genre) {
  const movie = {
    id: movies.length + 1,
    title,
    genre
  };

  movies.push(movie);

  return movie;
}

function updateMovie(id, title, genre) {
  const movie = getMovieById(id);

  if (!movie) return null;

  movie.title = title;
  movie.genre = genre;

  return movie;
}

function deleteMovie(id) {
  const movie = getMovieById(id);
  const index = movies.indexOf(movie);
  movies.splice(index, 1);

  return movie;
}
