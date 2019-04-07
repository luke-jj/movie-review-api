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

const customerSchema = new mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 48
  },
  phone: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 48
  },
});

const Customer = mongoose.model('Customer', customerSchema);

/**
 * Module exports.
 * @private
 */

module.exports.Customer = Customer;
module.exports.validate = validateCustomer;


/**
 * Validate a customer object and return the validation results.
 *
 * @param {object} customer object, structured according to the schema variable
 * @return {object} javascript object containing validation results
 * @private
 */

function validateCustomer(customer) {
  const schema = {
    isGold: Joi.boolean(),
    name: Joi.string().min(2).max(48).required(),
    phone: Joi.string().min(2).max(48).required()
  };

  return Joi.validate(customer, schema);
}

