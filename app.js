/*
 * Movie Rental Service
 * Copyright (c) 2019 Luca J
 * Licensed under the MIT license.
 */

'use strict';

/**
 * App dependencies.
 * @private
 */

const express = require('express');
const Joi = require('joi');

/**
 * App variables.
 * @private
 */

const port = process.env.PORT || 3000;
const app = express();

/*
 * Middleware
 */

app.use(express.json());

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

/*
 * REST API routes: `/api/genres/`
 */

app.get('/api/genres/', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));

  if (!genre) {
    res.status(404).send('Genre with specified id not found!');
  } else {
    res.send(genre);
  }
});

app.post('/api/genres/', (req, res) => {
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

app.put('/api/genres/:id', (req, res) => {
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

app.delete('/api/genres/:id', (req, res) => {
  const genre = genres.find(genre => genre.id === parseInt(req.params.id));

  if (!genre) {
    return res.status(404).send('Genre with specified id not found!');
  }

  genres.splice(genres.indexOf(genre), 1);
  res.send(genre);
});

/*
 * Event listener
 */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**
 * Validate a genre object and return validation results.
 *
 * @return {object} javascript object containing validation results
 * @private
 */

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(2).max(48).required()
  };

  return Joi.validate(genre, schema);
}
