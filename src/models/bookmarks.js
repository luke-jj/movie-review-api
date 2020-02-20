
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

const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

/*
 * Bookmarks model.
 */

const schema = Joi.object({
  movieId: Joi.objectId().required()
});

const Bookmarks = mongoose.model('Bookmarks', new mongoose.Schema({
  user: new mongoose.Schema({
    name: Joi.string().required()
  }),
  movies: [
    new mongoose.Schema({
      title: Joi.string().required()
    })
  ]
}));

/**
 * Module exports.
 * @private
 */

module.exports.Bookmarks = Bookmarks;
module.exports.schema = schema;
