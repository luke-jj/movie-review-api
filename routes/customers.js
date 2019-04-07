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

const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @private
 */

module.exports = router;

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

/*
 * REST API routes: `/api/customers/`
 */

router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.send(customers);
});

router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(404).send('Customer with specified id not found.');
  }

  res.send(customer);
});

router.post('/', async (req, res) => {
  const { error } = validateCustomer(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let customer = new Customer({
    isGold: req.body.isGold,
    name: req.body.name,
    phone: req.body.phone
  });

  try {
    customer = await customer.save();
    res.send(customer);
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', async (req, res) => {
  const { error } = validateCustomer(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { isGold: req.body.isGold, name: req.body.name, phone: req.body.phone },
    { new: true }
  );

  if (!customer) {
    return res.status(404).send('Customer with specified id not found.');
  }

  res.send(customer);
});

router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer) {
    return res.status(404).send('Customer with specified id not found.');
  }

  res.send(customer);
});
