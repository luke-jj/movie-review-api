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
const Joi = require('joi');

/*
 * Data schema and model.
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

/**
 * Module exports.
 * @private
 */

module.exports.Customer = Customer;
module.exports.validate = validate;

/**
 * Validate a customer object and return the validation results.
 *
 * @param {object} customer object, structured according to the schema variable
 * @return {object} javascript object containing validation results
 * @private
 */

function validate(body) {
  const schema = {
    isGold: Joi.boolean(),
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(body, schema);
}
