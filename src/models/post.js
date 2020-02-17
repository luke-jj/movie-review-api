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
  text: Joi.string().min(10).max(8192).required(),
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
    minlength: 10,
    maxlength: 8192
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
