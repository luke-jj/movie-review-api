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

const mongoose = require('mongoose');
const express = require('express');
const { Review, schema } = require('../models/review');
const { Movie } = require('../models/movie');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
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

router.get('/', handleGet);
router.get('/:id', validateObjectId, handleGetById);
router.post('/', [auth, validate(schema)], handleCreate);
router.put('/:id', [validateObjectId, auth, validate(schema)], handleUpdate);
router.delete('/:id', [validateObjectId, auth], handleDelete);

/**
 * Route controllers.
 * @private
 */

async function handleGet(req, res) {
  const reviews = await Review.find().sort({'date': 'desc'});
  res.send(reviews);
}

async function handleGetById(req, res) {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).send('Review with given id not found.');
  }

  res.send(review);
}

async function handleCreate(req, res) {
  const movie = await Movie.findById(req.body.movieId);

  if (!movie) {
    return res.status(400).send('Invalid movie.');
  }

  const review = new Review({
    title: req.body.title,
    text: req.body.text,
    movie: {
      _id: movie._id,
      title: movie.title,
      genre: {
        _id: movie.genre._id,
        name: movie.genre.name
      }
    },
    user: {
      _id: req.user._id,
      name: req.user.name
    }
  });
  await review.save();
  res.send(review);
}

async function handleUpdate(req, res) {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).send('Review with given id not found.');
  }

  if (!req.user.isAdmin && review.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or review has different owner.');
  }

  const movie = await Movie.findById(req.body.movieId);

  if (!movie) {
    return res.status(400).send('Invalid movie.');
  }

  review.title = req.body.title;
  review.text = req.body.text;
  review.movie = {
    _id: movie._id,
    title: movie.title,
    genre: {
      _id: movie.genre._id,
      name: movie.genre.name
    }
  };
  await review.save();
  res.send(review);
}

async function handleDelete(req, res) {
  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).send('Review with given id not found.');
  }

  if (!req.user.isAdmin && review.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or review has different owner.');
  }

  const result = await Review.deleteOne({ _id: review._id });

  if (result) {
    return res.send(review);
  }

  res.status(500).send('Error deleting review.');
}
