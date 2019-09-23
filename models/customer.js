const mongoose = require('mongoose');
const Joi = require('joi');

const Customer = mongoose.model('customers', new mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

module.exports.Customer = Customer;
module.exports.validate = validate;

function validate(body) {
  const schema = {
    isGold: Joi.boolean(),
    name: Joi.string().min(5).max(50).required(),
    phone: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(body, schema);
}
