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
const jwt = require('jsonwebtoken');
const config = require('config');
const { User, validate } = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

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
 * Register a new user / get current user details
 */

router.post('/', [auth, admin], async (req, res) => {
  const { error } = validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).send('User already registered.');
  }

  const user = new User(_.pick(req.body, ['name', 'email', 'password']));
  const salt = await generateSalt(10);
  user.password = await hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  res
    .header('x-auth-token', token)
    .send(_.pick(user, ['_id', 'name', 'email']));
});

router.get('/me', auth, async (req, res) => {
  const user = await User
    .findById(req.user._id)
    .select('-password');

  res.send(user);
});

/**
 * Generate a salt with bcrypt.
 *
 * @return {string} salt.
 * @private
 */

async function generateSalt(runs) {
  return await bcrypt.genSalt(runs);
}

/**
 * Hash a password with bcrypt using salt and return the hash.
 *
 * @param {string} pass - A client provided password.
 * @param {string} salt - A salt generated with bcrypt.
 * @return {string} hashed password.
 * @private
 */

async function hash(hash, salt) {
  return await bcrypt.hash(hash, salt);
}
