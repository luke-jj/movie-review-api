const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: {
    type: Boolean
  }
});

userSchema.methods.generateAuthToken = function() {
  return jwt.sign({
    _id: this._id,
    isAdmin: this.isAdmin
  }, config.get('jwtPrivateKey'));
}

const User = mongoose.model('User', userSchema);

exports.User = User;
exports.validate = validateUser;

function validateUser(body) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(5).max(1024).required()
  };

  return Joi.validate(body, schema);
}
