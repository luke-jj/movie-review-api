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

const schema = Joi.object({
  text: Joi.string().min(1).max(32767).required(),
});

const Post = mongoose.model('Posts', mongoose.Schema({
  threadId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
      },
    }),
    required: true,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 32767
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
}));

/**
 * Module exports.
 * @private
 */

module.exports = {
  schema,
  Post
};
