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
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User } = require('../models/user');

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
 * REST API routes: `/api/movies`
 * Authenticate a user.
 */

router.post('/', async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send('Invalid email or password.');
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) {
    return res.status(400).send('Invalid email or password.');
  }

  const token = user.generateAuthToken();
  res.send(token);
});

/**
 * Validate a user object and return the validation results.
 *
 * @param {object} user object, structured according to the schema variable
 * @return {object} javascript object containing validation results
 * @private
 */

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(1024).required()
  };

  return Joi.validate(req, schema);
}