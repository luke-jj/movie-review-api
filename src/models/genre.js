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
const mongoose = require('mongoose');

/*
 * Data schema and model.
 */

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Genre = mongoose.model('genres', dataSchema);

const requestSchema = {
  name: Joi.string().min(5).max(50).required()
};

/**
 * Module exports.
 * @private
 */

module.exports = {
  Genre,
  schema: requestSchema,
  genreSchema: dataSchema
};
