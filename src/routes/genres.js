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
const { Genre, schema } = require('../models/genre');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const validateObjectId = require('../middleware/validateObjectId');

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

/**
 * Routes.
 * @private
 */

router.route('/')
  .get(handleGet)
  .post([auth, admin, validate(schema)], handleCreate);

router.route('/:id')
  .get(validateObjectId, handleGetById)
  .put([auth, admin, validateObjectId, validate(schema)], handleUpdate)
  .delete([auth, admin, validateObjectId], handleDelete);

/**
 * Route controllers.
 * @private
 */

async function handleGet(req, res) {
  const genres = await Genre.find().sort('name');
  res.send(genres);
}

async function handleGetById(req, res) {
  const genre = await Genre.findById(req.params.id);

  if (!genre) {
    return res.status(404).send('Genre with given id not found.');
  }

  res.send(genre);
}

async function handleCreate(req, res) {
  const genre = new Genre({
    name: req.body.name
  });

  await genre.save();
  res.send(genre);
}

async function handleUpdate(req, res) {
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!genre) {
    return res.status(404).send('Genre with given id not found.');
  }

  res.send(genre);
}

async function handleDelete(req, res) {
  const genre = await Genre.findById(req.params.id);

  if (!genre) {
    return res.status(404).send('Genre with given id not found.');
  }

  const result = await Genre.deleteOne({ _id: req.params.id });

  if (result) {
    res.send(genre);
  }
}
