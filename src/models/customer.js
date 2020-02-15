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

/*
 * Customer model.
 */

const Customer = mongoose.model('customers', new mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

const schema = Joi.object({
  isGold: Joi.boolean(),
  name: Joi.string().min(5).max(50).required(),
  phone: Joi.string().min(5).max(50).required()
});

/**
 * Module exports.
 * @private
 */

module.exports.Customer = Customer;
module.exports.schema = schema;

