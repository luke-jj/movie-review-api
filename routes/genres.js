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
 * Data Model
 */

const genres = [
  {
    id: 0,
    name: "drama"
  },
  {
    id: 1,
    name: "horror"
  },
  {
    id: 2,
    name: "thriller"
  }
];

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

router.get('/', (req, res) => {
  res.send(genres);
});

router.get('/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));

  if (!genre) {
    res.status(404).send('Genre with specified id not found!');
  } else {
    res.send(genre);
  }
});

router.post('/', (req, res) => {
  const result = validateGenre(req.body);

  if (result.error) {
    return res.status(400).send(result.error);
  }

  const genre = {
    id: genres.length,
    name: req.body.name
  };
  genres.push(genre);
  res.send(genre);
});

router.put('/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  const result = validateGenre(req.body);

  if (result.error) {
    return res.status(400).send(result.error);
  }

  genre.name = req.body.name;
  res.send(genre);
});

router.delete('/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  genres.splice(genres.indexOf(genre), 1);
  res.send(genre);
});

