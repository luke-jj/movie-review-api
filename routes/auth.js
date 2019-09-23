const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User } = require('../models/user');

const router = express.Router();

module.exports = router;

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


async function generateSalt() {
  return await bcrypt.genSalt(10);
}

async function hash(hash, salt) {
  return await bcrypt.hash(hash, salt);
}

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(1024).required()
  };

  return Joi.validate(req, schema);
}
