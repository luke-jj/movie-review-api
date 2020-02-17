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
const { User, schema } = require('../models/user');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const validateObjectId = require("../middleware/validateObjectId");

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

router.post('/', validate(schema), handleCreate);
router.use(auth);
router.get('/me', handleGetMe);
router.get('/', admin, handleGet);
router.get('/:id', [admin, validateObjectId], handleGetById);
router.put('/:id', [admin, validateObjectId, validate(schema)], handleUpdate);
router.delete('/:id', [admin, validateObjectId], handleDelete);

/**
 * Route controllers.
 * @private
 */

async function handleGetMe(req, res) {
  const user = await User
    .findById(req.user._id)
    .select('-password');

  res.send(user);
}

async function handleCreate(req, res) {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).send('User already registered.');
  }

  const user = new User(_.pick(req.body, ['name', 'email', 'password']));
  user.password = await bcrypt.hash(req.body.password, 10);
  await user.save();
  const token = user.generateAuthToken();

  res
    .header('x-auth-token', token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user, ['_id', 'name', 'email']));
}



async function handleGet(req, res) {
  // const usersInDb = users.getUsers();
  // usersInDb.forEach(user => delete user.password);
  // res.json(usersInDb);
}

async function handleGetById(req, res) {
  // const user = users.getUserById(parseInt(req.params.id));

  // if (!user) {
    // return res.status(404).send('User with given id not found.');
  // }

  // delete user.password;
  // res.json(user);
}

async function handleUpdate(req, res) {
  // const user = { ...req.body };

  // if (user.password) {
    // user.password = await bcrypt.hash(user.password, 10);
  // }

  // const updatedUser = users.updateUser(parseInt(req.params.id), user);

  // if (!updatedUser) {
    // return res.status(404).send('User with given id not found.');
  // }

  // delete updatedUser.password;
  // res.json(updatedUser);
}

async function handleDelete(req, res) {
  // const user = users.deleteUser(parseInt(req.params.id));

  // if (!user) {
    // return res.status(404).send('User with given id not found.');
  // }

  // delete user.password;
  // res.json(user);
}
