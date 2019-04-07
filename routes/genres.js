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
const Joi = require('joi');
const mongoose = require('mongoose');

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
 * Data schema and model.
 */

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  }
});

const Genre = mongoose.model('Genre', genreSchema);

/**
 * Validate a genre object and return validation results.
 *
 * @param {object} course object, structured according to the schema variable
 * @return {object} javascript object containing validation results
 * @private
 */

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(2).max(48).required()
  };

  return Joi.validate(genre, schema);
}

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
    res.status(404).send('Genre with specified id not found!');
  } else {
    res.send(genre);
  }
});

router.post('/', async (req, res) => {
  const { error } = validateGenre(req.body); // Joi validation

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let genre = new Genre({ name: req.body.name });

  try {
    genre = await genre.save();       // mongoose validation
    res.send(genre);
  } catch (e) {
    console.log(e);
  }

});

router.put('/:id', async (req, res) => {
  // Joi validation
  const { error } = validateGenre(req.body);

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

router.delete('/:id', async (req, res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  res.send(genre);
});

