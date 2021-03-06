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
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const validate = require('../middleware/validation');
const { User } = require('../models/user');

/**
 * Module variables.
 * @private
 */

const router = express.Router();
const schema = Joi.object({
  email: Joi.string().min(5).max(255).email().required(),
  password: Joi.string().min(5).max(1024).required()
});

/**
 * Module exports.
 * @private
 */

module.exports = router;

router.post('/', validate(schema), async (req, res) => {
  const message = 'Email or password invalid.';
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send(message);
  }

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) {
    return res.status(400).send(message);
  }

  const token = user.generateAuthToken();
  res.send(token);

  user.lastLogin = Date.now();
  user.save();
});
