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
const { Bookmarks } = require('../models/bookmarks');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validation');
const validateObjectId = require("../middleware/validateObjectId");
const bookmarkRouter = require('./bookmarks');

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

router.use('/me/bookmarks', bookmarkRouter);

router.route('/me')
  .all(auth)
  .get(handleGetMe)
  .put(validate(schema), handleUpdateMe)
  .delete(handleDeleteMe);

router.route('/')
  .post(validate(schema), handleCreate)
  .get(auth, admin, handleGet);

router.route('/:id')
  .all(auth, admin, validateObjectId)
  .get(handleGetById)
  .put(validate(schema), handleUpdate)
  .delete(handleDelete);

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

async function handleUpdateMe(req, res) {

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    { new: true }
  );

  if (!user) {
    return res.status(404).send('Something went wrong.');
  }

  res.send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
}

async function handleDeleteMe(req, res) {
  const user = await User.findByIdAndRemove(req.user._id);

  if (!user) {
    return res.status(500).send('Something went wrong.');
  }

  await Bookmarks.deleteOne({ "user._id": req.user._id });

  res.send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
}

async function handleCreate(req, res) {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {
    return res.status(400).send('User already registered.');
  }

  const user = new User(_.pick(req.body, ['name', 'email', 'password']));
  user.password = await bcrypt.hash(req.body.password, 10);
  await user.save();

  const bookmarks = new Bookmarks({
    user: {
      _id: user._id,
      name: user.name
    },
    movies: []
  });

  await bookmarks.save();
  const token = user.generateAuthToken();

  res
    .header('X-Auth-Token', token)
    .header("access-control-expose-headers", "X-Auth-Token")
    .send(_.pick(user, ['_id', 'name', 'email']));
}

async function handleGet(req, res) {
  const users = await User.find({}, '-password');

  res.send(users);
}

async function handleGetById(req, res) {
  const user = await User.findById(req.params.id, '-password');

  if (!user) {
    return res.status(404).send('User with given id not found.');
  }

  res.send(user);
}

async function handleUpdate(req, res) {

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!user) {
    return res.status(404).send('Customer with given id not found.');
  }

  res.send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
}

async function handleDelete(req, res) {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) {
    return res.status(404).send('User with given id not found.');
  }

  await Bookmarks.deleteOne({ "user._id": req.params.id });

  res.send(_.pick(user, ['_id', 'name', 'email', 'isAdmin']));
}
