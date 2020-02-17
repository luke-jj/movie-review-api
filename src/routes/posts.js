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
const { Post, schema } = require('../models/post');
const { Thread } = require('../models/thread');
const auth = require('../middleware/auth');
const validate = require('../middleware/validation');
const validateObjectId = require('../middleware/validateObjectId');

/**
 * Module variables.
 * @private
 */

const router = express.Router({ mergeParams: true });

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

router.route('/:postId')
  .all(validateObjectId, getPost)
  .get(handleGetById)
  .put([auth, validate(schema)], handleUpdate)
  .delete(auth, handleDelete);

/**
 * Route Middleware
 * @private
 */

async function getPost(req, res, next) {
  const post = await Post.findById(req.params.postId);

  if (!post) {
    return res.status(404).send('Post with given id not found.');
  }

  req.post = post;
  next();
}

/**
 * Route controllers.
 * @private
 */

async function handleGet(req, res) {
  const posts = await Post.find({ threadId: req.thread._id });

  res.send(posts);
}

async function handleGetById(req, res) {
  res.send(req.post);
}

async function handleCreate(req, res) {
  const post = new Post({
    threadId: req.thread._id,
    user: {
      _id: req.user._id,
      name: req.user.name
    },
    text: req.body.text,
  });

  await post.save();
  await Thread.updateOne(
    { _id: req.thread._id },
    {
      $inc: { repliesCount: 1 },
      lastReply: {
        userId: req.user._id,
        username: req.user.name,
        date: Date.now()
      }
    }
  );

  res.send(post);
}

async function handleUpdate(req, res) {
  if (!req.user.isAdmin && req.post.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or not poster.');
  }

  req.post.text = req.body.text;

  await req.post.save();
  res.send(req.post);
}

async function handleDelete(req, res) {
  if (!req.user.isAdmin && req.post.user._id !== req.user._id) {
    return res.status(403).send('Not authorized or not poster.');
  }

  const result = await Post.deleteOne({ _id: req.post._id });
  await Thread.updateOne(
    { _id: req.thread._id },
    {
      $inc: { repliesCount: -1 }
    }
  );

  if (result) {
    return res.send(req.post);
  }

  res.status(500).send('Error deleting post.');
}
