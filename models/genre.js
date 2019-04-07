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

const Joi = require('joi');
const mongoose = require('mongoose');

/*
 * Data schema and model.
 */

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 48
  }
});

const Genre = mongoose.model('Genre', genreSchema);

/**
 * Module exports.
 * @private
 */

module.exports.Genre = Genre;
module.exports.validate = validateGenre;


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

