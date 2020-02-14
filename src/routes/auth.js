const express = require('express');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const validate = require('../middleware/validation');
const { users, generateAuthToken } = require('../models/user');

const router = express.Router();

module.exports = router;

router.post('/', validate(validateAuth), async (req, res) => {
  const message = 'Email or password invalid.';
  const user = users.getUserByEmail(req.body.email);

  if (!user) {
    return res.status(400).send(message);
  }

  const valid = await bcrypt.compare(req.body.password, user.password);

  if (!valid) {
    return res.status(400).send(message);
  }

  const token = generateAuthToken(user);
  res.send(token);
});

function validateAuth(body) {
  return Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  }).validate(body);
}
