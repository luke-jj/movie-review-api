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
  tagline: Joi.string().min(2).max(2047).required(),
  description: Joi.string().min(2).max(32767).required(),
  rating: Joi.number().min(0).max(10),
  imdbId: Joi.string(),
  genreId: Joi.objectId().required(),
  posterUrl: Joi.string(),
  posterPath: Joi.string(),
  backdropPath: Joi.string(),
  releaseDate: Joi.string().required(), // TODO: validate with reg ex
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
  tagline: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 2047,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 32767,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  imdbId: {
    type: String
  },
  genre: {
    type: genreSchema,
    required: true,
  },
  posterUrl: {
    type: String,
  },
  posterPath: {
    type: String,
  },
  backdropPath: {
    type: String,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  numberInStock: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  dailyRentalRate: {
    type: Number,
    required: true,
    min: 0,
    max: 255,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
    required: true,
  },
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
