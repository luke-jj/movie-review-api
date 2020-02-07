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

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model('genres', schema);

/**
 * Module exports.
 * @private
 */

module.exports.Genre = Genre;
module.exports.genreSchema = schema;
module.exports.validate = validateGenre;

/**
 * Validate a genre object and return validation results.
 *
 * @param {object} genre object, structured according to the schema variable
 * @return {object} javascript object containing validation results
 * @private
 */

function validateGenre(body) {
  const schema = {
    name: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(body, schema);
}
