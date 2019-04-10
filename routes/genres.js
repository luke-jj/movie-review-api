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
const { Genre, validate } = require('../models/genre.js');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @private
 */

module.exports = router;

/*
 * REST API routes: `/api/genres/`
 */

router.get('/', async (req, res) => {
  const genres = await Genre.find().sort('name'); // { name: 1 }
  res.send(genres);
});

router.get('/:id', async (req, res) => {
  const genre = await Genre.findById(req.params.id);

  if (!genre) {
    res.status(404).send('Genre with specified id not found.');
  } else {
    res.send(genre);
  }
});

router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body); // Joi validation

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const genre = new Genre({ name: req.body.name });
  await genre.save();       // mongoose validation

  res.send(genre);
});

router.put('/:id', auth, async (req, res) => {
  // Joi validation
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // mongoose validation
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  res.send(genre);
});

router.delete('/:id', [auth, admin], async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  res.send(genre);
});

