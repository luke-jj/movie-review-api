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
  title: Joi.string().min(2).max(255).required(),
  text: Joi.string().min(16).max(32767).required(),
});

const Thread = mongoose.model('Threads', mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 255
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
    minlength: 16,
    maxlength: 32767
  },
  repliesCount: {
    type: Number,
    min: 0,
    default: 0,
    required: true
  },
  lastReply: {
    userId: mongoose.Schema.Types.ObjectId,
    username: {
      type: String,
      minlength: 2,
      maxlength: 255
    },
    date: {
      type: Date,
      default: Date.now,
      required: true
    }
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
  Thread
};
