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
const express = require('express');
const { Thread, schema } = require('../models/thread');
const auth = require('../middleware/auth');
const validate = require('../middleware/validation');
const validateObjectId = require('../middleware/validateObjectId');
const postRouter = require('./posts');

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

router.route('/')
  .get(handleGet)
  .post([auth, validate(schema)], handleCreate);

router.route('/:threadId')
  .all(validateObjectId, getThread)
  .get(handleGetById)
  .put([auth, validate(schema)], handleUpdate)
  .delete(auth, handleDelete);

router.use('/:threadId/posts', [validateObjectId, getThread], postRouter);

/**
 * Route Middleware
 * @private
 */

async function getThread(req, res, next) {
  const thread = await Thread.findById(req.params.threadId);

  if (!thread) {
    return res.status(404).send('Thread with given id not found.');
  }

  req.thread = thread;
  next();
}

/**
 * Route controllers.
 * @private
 */

async function handleGet(req, res) {
  const threads = await Thread.find().sort('date');
  res.send(threads);
}

async function handleGetById(req, res) {
  res.send(req.thread);
}

async function handleCreate(req, res) {
  const thread = new Thread({
    title: req.body.title,
    text: req.body.text,
    repliesCount: 0,
    user: {
      _id: req.user._id,
      name: req.user.name
    }
  });
  await thread.save();
  res.send(thread);
}

async function handleUpdate(req, res) {
  if (!req.user.isAdmin && req.thread.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or not original poster.');
  }

  req.thread.title = req.body.title;
  req.thread.text = req.body.text;

  await req.thread.save();
  res.send(req.thread);
}

async function handleDelete(req, res) {
  if (!req.user.isAdmin && req.thread.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or not original poster.');
  }

  const result = await Thread.deleteOne({ _id: req.thread._id });

  if (result) {
    return res.send(req.thread);
  }

  res.status(500).send('Error deleting thread.');
}
