const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User, validate } = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

module.exports = router;

router.post('/', async (req, res) => {
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

async function generateSalt(runs) {
  return await bcrypt.genSalt(runs);
}

async function hash(hash, salt) {
  return await bcrypt.hash(hash, salt);
}
