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

const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const { genreSchema } = require('./genre');

/*
 * Data schema and model.
 */

const schema = Joi.object({
  title: Joi.string().min(2).max(255).required(),
  genreId: Joi.objectId().required(),
  imgUrl: Joi.string(),
  year: Joi.number().min(1800).max(2100).required(),
  numberInStock: Joi.number().min(0).required(),
  dailyRentalRate: Joi.number().min(0).required()
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 255
  },
  genre: {
    type: genreSchema,
    required: true
  },
  imgUrl: {
    type: String
  },
  year: {
    type: Number,
    required: true,
    min: 1800,
    max: 2100
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 255
  }
});

const Movie = mongoose.model('Movies', movieSchema);

/**
 * Module exports.
 * @private
 */

module.exports = {
  schema,
  movieSchema,
  Movie
};
