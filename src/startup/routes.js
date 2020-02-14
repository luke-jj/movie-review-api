/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

const root = require('../routes/root');
const movies = require('../routes/movies');
const users = require('../routes/users');
const auth = require('../routes/auth');
const error = require('../middleware/error');

const base = '/api/v1';

/**
 * Module exports.
 *
 * Mount routers and error handling middleware.
 * @public
 */

module.exports = app => {
  app.use('/', root);
  app.use(`${base}/movies/`, movies);
  app.use(`${base}/users/`, users);
  app.use(`${base}/auth/`, auth);
  app.use(error);
};
