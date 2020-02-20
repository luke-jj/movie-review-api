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

const express = require('express');
const mongoose = require('mongoose');
const { Bookmarks, schema } = require('../models/bookmarks');
const { Movie } = require('../models/movie');
const auth = require('../middleware/auth');
const validate = require('../middleware/validation');
const validateObjectId = require("../middleware/validateObjectId");

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @public
 */

module.exports = router;

/**
 * Routes.
 * @private
 */

router.use(auth);
router.get('/', handleGet);
router.post('/', validate(schema), handleCreate);
router.delete('/:movieId', validateObjectId, handleDelete);

async function handleGet(req, res) {
  const bookmarks = await Bookmarks.findOne({ "user._id": req.user._id });

  if (!bookmarks) {
    res.status(404).send('No bookmarks found for this authenticated user.');
  }

  res.send(bookmarks);
}

async function handleCreate(req, res) {
  const bookmarks = await Bookmarks.findOne({ "user._id": req.user._id });

  if (!bookmarks) {
    res.status(404).send('No bookmarks found for this authenticated user.');
  }

  const movie = await Movie.findById(req.body.movieId);

  if (!movie) {
    return res.status(404).send('Movie with given id not found.');
  }

  const found = bookmarks.movies.find(m => m._id.equals(movie._id));

  if (found) {
    return res.status(400).send('Movie already bookmarked');
  }

  bookmarks.movies.push({
    _id: movie._id,
    title: movie.title
  });
  await bookmarks.save();
  res.send(bookmarks);
}

async function handleDelete(req, res) {
  const bookmarks = await Bookmarks.findOne({ "user._id": req.user._id });
  const { movieId } = req.params;

  if (!bookmarks) {
    return res.status(404).send('No bookmarks found for this authenticated user.');
  }

  const movie = bookmarks.movies.find(m => m._id.equals(movieId));

  if (!movie) {
    return res.status(404).send('Movie with given id not bookmarked.');
  }

  // const result = bookmarks.movies.filter(movie => !movie._id.equals(movieId));
  // bookmarks.movies = result;
  const index = bookmarks.movies.indexOf(movie);
  bookmarks.movies.splice(index, 1);
  await bookmarks.save();
  res.send(bookmarks);
}
