const express = require('express');
const customers = require('../routes/customers.js');
const movies = require('../routes/movies.js');
const rentals = require('../routes/rentals.js');
const users = require('../routes/users.js');
const genres = require('../routes/genres.js');
const returns = require('../routes/returns');
const auth = require('../routes/auth.js');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/returns', returns);
  app.use('/api/auth', auth);
  app.use(error);
};
