
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
const mongoose = require('mongoose');
const { Customer, schema } = require('../models/customer');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const validateObjectId = require('../middleware/validateObjectId');

/**
 * Module variables.
 * @private
 */

const router = express.Router();

/**
 * Module exports.
 * @public
 */

module.exports = router;

/**
 * Routes.
 * @private
 */

router.use(auth, admin);
router.get('/', handleGet);
router.get('/:id', validateObjectId, handleGetById);
router.post('/', validate(schema), handleCreate);
router.put('/:id', [validateObjectId, validate(schema)], handleUpdate);
router.delete('/:id', validateObjectId, handleDelete);

/**
 * Route controllers.
 * @private
 */

async function handleGet(req, res) {
  const customers = await Customer.find();
  res.send(customers);
}

async function handleGetById(req, res) {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(404).send('Customer with given id not found.');
  }

  res.send(customer);
}

async function handleCreate(req, res) {
  const customer = new Customer({
    isGold: req.body.isGold,
    name: req.body.name,
    phone: req.body.phone
  });

  await customer.save();
  res.send(customer);
}

async function handleUpdate(req, res) {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      isGold: req.body.isGold,
      name: req.body.name,
      phone: req.body.phone
    },
    { new: true }
  );

  res.send(customer);
}

async function handleDelete(req, res) {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    return res.status(404).send('Customer with given id not found.');
  }

  const result = await Customer.deleteOne({ _id: req.params.id });

  if (result) {
    return res.send(customer);
  }

  res.status(500).send('Error deleting customer.');
}
